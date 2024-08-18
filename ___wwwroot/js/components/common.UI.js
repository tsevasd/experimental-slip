/* culture */
const currentCulture = 'el';

const getCultureInfo = currentCulture => {
  let n = Intl.NumberFormat(currentCulture).formatToParts(1000.1);
  return {
    culture: currentCulture,
    decimalSeparator: n.find(part => part.type === 'decimal').value,
    groupSeparator: n.find(part => part.type === 'group').value,
    currencySymbol: currentCulture === 'el' ? '€' : ''
  };
};

var cultureInfo = getCultureInfo(currentCulture);

/* parse number <-> localized string */
const parse = (input, locale = currentCulture, currency = 'EUR') => {
  //var re4 = new RegExp(`(\?<=\\d)\\${cultureInfo.groupSeparator}(\?=\\d{4})`, 'g'); /* check if there are loads of digits e.g. 10.00000001 */
  //var re3 = new RegExp(`(\?<=\\d)\\${cultureInfo.groupSeparator}(\?=\\d{3})`, 'g'); /* remove group symbols e.g. 1.000.000,00 -> 1000000,00 */
  let fmt = String(input);
  /*if (isNaN(fmt)) {
    if (!re4.test(fmt)) fmt = String(input).replace(re3, '');
    fmt = fmt.replace(cultureInfo.decimalSeparator, '.');
  }*/
  //const pts = fmt.split(".");
  /*if (pts.length > 1) {
    if (pts[0] === 0) fmt = pts.join(".");
    else if (pts[1].length === 0) fmt = pts.join("");
  }*/
  //if (pts.length > 1) { if (pts[1].length === 0) fmt = pts[0]+'.00'; }
  const number = Number(fmt);
  const isValid = isFinite(number);
  const string = number.toFixed(2);
  /*const intlNFOpts = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).resolvedOptions();*/
  const output = number.toLocaleString(locale, {
    /*...intlNFOpts,*/
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const outputInf = number.toLocaleString(locale, {
    style: 'decimal',
    maximumFractionDigits: 10
  });
  return {
    input,
    isValid,
    string,
    number,
    locale,
    currency,
    output,
    outputInf
  };
};

parse.fn = (input, locale = currentCulture, currency = 'EUR') => {
  return new parse(input, (locale = currentCulture), (currency = 'EUR'));
};

parse.toNum = str => {
  str = typeof str === 'undefined' ? '0' : str.toString();
  if (str.split(cultureInfo.decimalSeparator).length <= 2) {
    // checks if any decimal
    let output = str.replaceAll(cultureInfo.groupSeparator, '').replace(cultureInfo.decimalSeparator, '.');
    if (isFinite(output)) return Number(output);
    else return 'NaN';
  } else {
    return 'NaN';
  }
};

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const isMyBets = window.location.href.includes('mybets');

const dateFormat = (date, type) => {
  /* DD mmm YYYY HH:MM:SS */
  let dateObj = new Date(date);
  if (typeof type !== 'undefined') {
    if (type === 'short')
      return (
        dateObj.toLocaleDateString(currentCulture, { month: 'short', day: 'numeric' }) +
        ' ' +
        dateObj.toLocaleTimeString(currentCulture, { hour: '2-digit', minute: '2-digit', hour12: false })
      );
  } else
    return (
      dateObj.toLocaleDateString(currentCulture, { month: 'short', day: 'numeric' }) +
      ' ' +
      dateObj.toLocaleTimeString(currentCulture, { hour12: false })
    );
};

const keyboard = model => {
  return {
    //currentInput: '',
    getInput() {
      let inp = model,
        key = model.$store.betslip.keyboard.input,
        keySplit = model.$store.betslip.keyboard.input.split('.'),
        parent = '';
      if (keySplit.length > 1) {
        inp = model[keySplit[0]];
        key = keySplit[1];
        parent = keySplit[0];
      }
      return {
        inp,
        key,
        parent
      };
    },
    data: null,
    toggle(inpId) {
        if (isTouch) {
          //if (typeof data !== 'undefined') this.data = model.$store.betslip.keyboard.input === inpId ? null : data;
          if (model.$store.betslip.keyboard.input === inpId || inpId === '') {
              let key = this.getInput().key,
                  inp = this.getInput().inp;
              inp[key] = parse(parse.toNum(inp[key])).output;
              model.$store.betslip.keyboard.set('input', '', {});
              model.$store.betslip.keyboard.firstKey = true;
          } else {
            model.$store.betslip.keyboard.set('input', inpId);
            let key = this.getInput().key,
                inp = this.getInput().inp;
            if (typeof inp[key] !== 'undefined' && inp[key].slice(-3) === cultureInfo.decimalSeparator + '00') {
              inp[key] = inp[key].replace(inp[key].slice(-3), '');
            }
          }
        }
    },
    preset: {
        //timer: 0,
        timeframe: 500,
        amounts: [0.5, 1, 5, 10, 25, 50]
    },
    //firstKey: true,
    action(val) {
      if (val !== undefined) {
        let fireKey = true,
        key = this.getInput().key,
        inp = this.getInput().inp,
        parent = this.getInput().parent;
        if (typeof inp[key] === 'undefined') inp[key] = '';
        if (val.startsWith('+')) {
            let t = Date.now();
            if (t - model.$store.betslip.keyboard.timer < this.preset.timeframe) {
                inp[key] = parse(parse.toNum(inp[key]) + Number(val.replace('+', ''))).output;
            } else {
                inp[key] = parse(val.replace('+', '')).output;
            }
            model.$store.betslip.keyboard.set('timer', t);
            fireKey = false;
            model.$store.betslip.keyboard.firstKey = false;
        }
        if (val === 'back') {
            inp[key] = inp[key].slice(0, -1);
            fireKey = false;
            model.$store.betslip.keyboard.firstKey = false;
        }
        if (model.$store.betslip.keyboard.firstKey) {
            inp[key] = '';
            model.$store.betslip.keyboard.firstKey = false;
        }
        if (val === cultureInfo.decimalSeparator) {
            if (inp[key].indexOf(val) > -1) fireKey = false;
            else if (inp[key] === '') inp[key] = '0';
        }
        if (inp[key].indexOf(cultureInfo.decimalSeparator) > -1 && inp[key].split(cultureInfo.decimalSeparator)[1].length === 2)
        fireKey = false;
        if (fireKey) inp[key] += val;

        /* System 3 calculations */
        /*const systemCalculations = {
            stakePerCol: model.setStakePerCol,
            stakeTotalCols: model.setStakeTotalCols,
            stakeTotalBets: model.setStakeTotalBets,
            betColAmount: model.setBetColAmount,
            betMulAmount: model.setBetMulAmount,
            combinationBetAmount: model.setCombinationBetAmount
        };
        if (parent in systemCalculations) systemCalculations[parent].call(model, inp[key], key);
        else if (key in systemCalculations) systemCalculations[key].call(model);*/

        model.$nextTick(() => {
          /* Partial CashOut calculations */
          /*if (parent === 'partialCashoutAmount') {
            if (inp[key].slice(-1) !== cultureInfo.decimalSeparator && inp[key] !== '' && inp[key] !== '0') {
              let nativeAm = Math.round(model.$store.betslip.keyboard.data.val * 100),
                  minAm = Math.round(model.$store.betslip.keyboard.data.minBetPerCol * 10 * 100),
                  val = parse.toNum(inp[key]) * 100,
                  finalAm = val,
                  maxAm = (((model.$store.betslip.keyboard.data.sum - minAm / 1000) * 100) / model.$store.betslip.keyboard.data.sum / 100) * nativeAm;
              console.log('val', val, 'maxAm', maxAm, 'nativeAm', nativeAm, 'minAm', minAm);
              if (val > maxAm && val !== nativeAm) finalAm = maxAm;
              if (val <= minAm) finalAm = minAm;
              if (val > nativeAm) finalAm = nativeAm;
              inp[key] = (finalAm / 100).toString().replace('.', cultureInfo.decimalSeparator);
              //document.getElementById(`pc-rng-${model.$store.betslip.keyboard.data.id}`).value = (finalAm / nativeAm) * 100;
              //document.getElementById(`pc-inp-${model.$store.betslip.keyboard.data.id}`).dispatchEvent(new Event('keyup'));
              / *document.getElementById(`pc-rng-lbl-${model.$store.betslip.keyboard.data.id}`).textContent = Math.round(
                (finalAm / nativeAm) * 100
              );* /
              //inp[key].dispatchEvent(new Event('keyup'));
            }
          }*/
          let el = document.getElementById(model.$store.betslip.keyboard.input);
          if (el !== null && el.hasAttribute('@keyup')) el.dispatchEvent(new Event('keyup'));
        });
      }
    },
  }
};

const toggleDark = () => { document.getElementsByTagName('html')[0].classList.toggle('dark'); }

/* export default { cultureInfo, getCultureInfo, parse, isTouch, dateFormat, keyboard, isMyBets, toggleDark }; */