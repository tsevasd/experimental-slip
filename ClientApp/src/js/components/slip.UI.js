import common from './common.UI';

const documentReady = (fn, culture) => {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
    let currentCulture = 'el'; //culture;
    common.cultureInfo = common.getCultureInfo(currentCulture);
  } else {
    setTimeout(fn, 1);
  }
};

sessionStorage.setItem(
  'user',
  '{"user":{"customerId":"xhGpHI4_g4jtuksvR_bBYjJAlzYRvde9","userId":"8yDoAZtuLD15_RdUFjj2gg","email":"LL_Ge8a4GDCDSJGFJImuXD2uj2qAyt02SxSFSAsWbIeN0OkqjGrC79ENkVqDS78wKCFiEl6evxb3pJU-ZK-K3g","ticket":"p-fbkYf1VZQlyT9DNkmO6m1suk6QRCC9","userName":"dtsevas","firstName":"Dimosthenis","lastName":"Tsevas","balance":432.04,"calculatedBalance":430.69,"tax":1.35,"freeBetBalance":9.55,"freeBetExpiresOnUtc":null,"freeBetDisplayInSite":true,"freeBetDisplayInSlip":true,"currencyId":106,"currencyCode":"EUR","countryId":2,"clientType":7,"agentId":24003,"status":1,"verificationStatus":1,"rememberMe":false,"lastTermId":1},"isAuthenticated":true,"countryCode":"GR","shouldRedirect":true,"returnUrl":"/sports","message":"","shouldRemindGdpr":false,"responseStatus":null}'
);

const _userData = () => {
  const value = sessionStorage.getItem('user');
  if (value == null) {
    return null;
  }
  const quasarType = value.substr(0, 8);
  const source = value.substring(9);

  // Checks if stored by quasar
  if (quasarType === '__q_objt') {
    return JSON.parse(source);
  }

  // Otherwise it's stored as plain string
  return JSON.parse(value);
};

/*let currentCulture;
let cultureInfo;*/
/*const cultureInfo = currentCulture => {
  var cultureName, pointer = '.', currency = 'EUR';
  switch(currentCulture) {
    case 'af':
      cultureName = 'Afrikaans';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'am':
      cultureName = 'Amharic';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ar-sa':
      cultureName = 'Arabic (Saudi Arabia)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'as':
      cultureName = 'Assamese';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'az-Latn':
      cultureName = 'Azerbaijani (Latin)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'be':
      cultureName = 'Belarusian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'bg':
      cultureName = 'Bulgarian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'bn-BD':
      cultureName = 'Bangla (Bangladesh)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'bn-IN':
      cultureName = 'Bangla (India)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'bs':
      cultureName = 'Bosnian (Latin)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ca':
      cultureName = 'Catalan Spanish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ca-ES-valencia':
      cultureName = 'Valencian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'cs':
      cultureName = 'Czech';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'cy':
      cultureName = 'Welsh';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'da':
      cultureName = 'Danish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'de':
      cultureName = 'German (Germany)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'de-de':
      cultureName = 'German (Germany)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'el':
      cultureName = 'Greek';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'en-GB':
      cultureName = 'English (United Kingdom)';
      currency = 'GBP';
      pointer = '.';
      break;
    case 'en-US':
      cultureName = 'English (United States)';
      currency = 'USD';
      pointer = '.';
      break;
    case 'es':
      cultureName = 'Spanish (Spain)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'es-ES':
      cultureName = 'Spanish (Spain)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'es-US':
      cultureName = 'Spanish (United States)';
      currency = 'USD';
      pointer = '.';
      break;
    case 'es-MX':
      cultureName = 'Spanish (Mexico)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'et':
      cultureName = 'Estonian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'eu':
      cultureName = 'Basque';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fa':
      cultureName = 'Persian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fi':
      cultureName = 'Finnish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fil-Latn':
      cultureName = 'Filipino';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fr':
      cultureName = 'French (France)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fr-FR':
      cultureName = 'French (France)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'fr-CA':
      cultureName = 'French (Canada)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ga':
      cultureName = 'Irish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'gd-Latn':
      cultureName = 'Scottish Gaelic';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'gl':
      cultureName = 'Galician';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'gu':
      cultureName = 'Gujarati';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ha-Latn':
      cultureName = 'Hausa (Latin)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'he':
      cultureName = 'Hebrew';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'hi':
      cultureName = 'Hindi';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'hr':
      cultureName = 'Croatian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'hu':
      cultureName = 'Hungarian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'hy':
      cultureName = 'Armenian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'id':
      cultureName = 'Indonesian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ig-Latn':
      cultureName = 'Igbo';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'is':
      cultureName = 'Icelandic';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'it':
      cultureName = 'Italian (Italy)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'it-it':
      cultureName = 'Italian (Italy)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ja':
      cultureName = 'Japanese';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ka':
      cultureName = 'Georgian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'kk':
      cultureName = 'Kazakh';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'km':
      cultureName = 'Khmer';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'kn':
      cultureName = 'Kannada';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ko':
      cultureName = 'Korean';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'kok':
      cultureName = 'Konkani';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ku-Arab':
      cultureName = 'Central Kurdish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ky-Cyrl':
      cultureName = 'Kyrgyz';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'lb':
      cultureName = 'Luxembourgish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'lt':
      cultureName = 'Lithuanian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'lv':
      cultureName = 'Latvian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'mi-Latn':
      cultureName = 'Maori';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'mk':
      cultureName = 'Macedonian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ml':
      cultureName = 'Malayalam';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'mn-Cyrl':
      cultureName = 'Mongolian (Cyrillic)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'mr':
      cultureName = 'Marathi';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ms':
      cultureName = 'Malay (Malaysia)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'mt':
      cultureName = 'Maltese';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'nb':
      cultureName = 'Norwegian (Bokmål)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ne':
      cultureName = 'Nepali (Nepal)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'nl':
      cultureName = 'Dutch (Netherlands)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'nl-BE':
      cultureName = 'Dutch (Netherlands)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'nn':
      cultureName = 'Norwegian (Nynorsk)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'nso':
      cultureName = 'Sesotho sa Leboa';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'or':
      cultureName = 'Odia';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'pa':
      cultureName = 'Punjabi (Gurmukhi)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'pa-Arab':
      cultureName = 'Punjabi (Arabic)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'pl':
      cultureName = 'Polish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'prs-Arab':
      cultureName = 'Dari';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'pt-BR':
      cultureName = 'Portuguese (Brazil)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'pt-PT':
      cultureName = 'Portuguese (Portugal)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'qut-Latn':
      cultureName = 'K\’iche\’';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'quz':
      cultureName = 'Quechua (Peru)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ro':
      cultureName = 'Romanian (Romania)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ru':
      cultureName = 'Russian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'rw':
      cultureName = 'Kinyarwanda';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sd-Arab':
      cultureName = 'Sindhi (Arabic)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'si':
      cultureName = 'Sinhala';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sk':
      cultureName = 'Slovak';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sl':
      cultureName = 'Slovenian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sq':
      cultureName = 'Albanian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sr-Cyrl-BA':
      cultureName = 'Serbian (Cyrillic, Bosnia and Herzegovina)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sr-Cyrl-RS':
      cultureName = 'Serbian (Cyrillic, Serbia)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sr-Latn-RS':
      cultureName = 'Serbian (Latin, Serbia)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sv':
      cultureName = 'Swedish (Sweden)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'sw':
      cultureName = 'Kiswahili';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ta':
      cultureName = 'Tamil';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'te':
      cultureName = 'Telugu';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'tg-Cyrl':
      cultureName = 'Tajik (Cyrillic)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'th':
      cultureName = 'Thai';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ti':
      cultureName = 'Tigrinya';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'tk-Latn':
      cultureName = 'Turkmen (Latin)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'tn':
      cultureName = 'Setswana';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'tr':
      cultureName = 'Turkish';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'tt-Cyrl':
      cultureName = 'Tatar (Cyrillic)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ug-Arab':
      cultureName = 'Uyghur';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'uk':
      cultureName = 'Ukrainian';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'ur':
      cultureName = 'Urdu';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'uz-Latn':
      cultureName = 'Uzbek (Latin)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'vi':
      cultureName = 'Vietnamese';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'wo':
      cultureName = 'Wolof';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'xh':
      cultureName = 'isiXhosa';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'yo-Latn':
      cultureName = 'Yoruba';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'zh-Hans':
      cultureName = 'Chinese (Simplified)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'zh-Hant':
      cultureName = 'Chinese (Traditional)';
      currency = 'EUR';
      pointer = ',';
      break;
    case 'zu':
      cultureName = 'isiZulu';
      currency = 'EUR';
      pointer = ',';
      break;
  }
  return {
    currentCulture: currentCulture,
    name: cultureName,
    pointer: pointer,
    currency: currency
  }
};*/

/*const getCultureInfo = currentCulture => {
  let n = Intl.NumberFormat(currentCulture).formatToParts(1000.1);
  return {
    culture: currentCulture,
    decimalSeparator: n.find(part => part.type === 'decimal').value,
    groupSeparator: n.find(part => part.type === 'group').value,
    currencySymbol: currentCulture === 'el' ? '€' : ''
  };
};*/

/**
 * Parse value to currency
 * @param {number|string} input
 * @param {string} locale - Desired locale i.e: "en-US" "hr-HR"
 * @param {string} currency - Currency to use "USD" "EUR" "HRK"
 * @return {object}
 */
/*
const parse000 = (input, locale = currentCulture, currency = 'EUR') => {
  //var re4 = new RegExp(`(\?<=\\d)\\${cultureInfo.groupSeparator}(\?=\\d{4})`, 'g'); / * check if there are loads of digits e.g. 10.00000001 * /
  //var re3 = new RegExp(`(\?<=\\d)\\${cultureInfo.groupSeparator}(\?=\\d{3})`, 'g'); / * remove group symbols e.g. 1.000.000,00 -> 1000000,00 * /
  let fmt = String(input);
  / *if (isNaN(fmt)) {
    if (!re4.test(fmt)) fmt = String(input).replace(re3, '');
    fmt = fmt.replace(cultureInfo.decimalSeparator, '.');
  }* /
  //const pts = fmt.split(".");
  / *if (pts.length > 1) {
    if (pts[0] === 0) fmt = pts.join(".");
    else if (pts[1].length === 0) fmt = pts.join("");
  }* /
  //if (pts.length > 1) { if (pts[1].length === 0) fmt = pts[0]+'.00'; }
  const number = Number(fmt);
  const isValid = isFinite(number);
  const string = number.toFixed(2);
  / *const intlNFOpts = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).resolvedOptions();* /
  const output = number.toLocaleString(locale, {
    / *...intlNFOpts,* /
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

parse000.fn = (input, locale = currentCulture, currency = 'EUR') => {
  return new common.parse(input, (locale = currentCulture), (currency = 'EUR'));
};

parse000.toNum = str => {
  str = typeof str === 'undefined' ? '0' : str.toString();
  if (str.split(cultureInfo.decimalSeparator).length <= 2) {
    // checks if any decimal
    let output = str.replaceAll(cultureInfo.groupSeparator, '').replace(cultureInfo.decimalSeparator, '.');
    if (isFinite(output)) return Number(output);
    else return 'NaN';
  } else {
    return 'NaN';
  }
};*/

const betslipHandler = () => {

  const _emptyValues = obj => {
    return obj.map(() => '');
  };

  const _toFloor2 = n => {
    if (n !== '' && !isNaN(n) && n < 0.01 && n > 0.005) n = 0.01;
    return n !== '' ? Math.floor(parseFloat(n) * 100) / 100 : 0;
  };

  const _systemChange = (obj, sysNo, prevNo) => {
    let hasBetBuilder =
      typeof obj.Events !== 'undefined' && obj.Events.some(v => Object.keys(v).some(() => v.IsCustomBetEvent));
    let hasMultiple = typeof obj.Events !== 'undefined' && obj.Events.some(v => v.Selections.length > 1);

    if (typeof sysNo === 'undefined') {
      if (hasBetBuilder) return 1;
      else if (hasMultiple && prevNo !== 4) return 3;
      else if (typeof prevNo !== 'undefined') return prevNo;
      else return 1;
    } else {
      if (sysNo !== 1 && hasBetBuilder) {
        return prevNo;
      }
      if (sysNo === 1 && hasMultiple) {
        return prevNo;
      }
      return sysNo;
    }
  };

  const _systemXCols = obj => {
    const _sysXCols = [];
    obj.forEach(c => (_sysXCols[c.CounterLines] = c.CombinationsProduced));
    return _sysXCols;
  };

  const _defaultModel = { BetSlip: { Events: [] }, Combinations: [] };

  return {
    /*currentCulture() {
      return common.currentCulture;
    },*/
    /*decimalSeparator: common.cultureInfo.decimalSeparator,*/
    isShop: false,
    setTimeoutAction: null,
    fadeOut: [],
    loading: false,
    model: _defaultModel,
    load(url) {
      /* Betslip */
      if (this.$store.slipTab.t === 1) {
        console.log('loads betslip model');
        if (typeof url === 'undefined' || typeof url !== 'string') url = '/Models/events1Single.json';
        this.loading = true;
        fetch(url)
          .then(result => {
            if (!result.ok) {
              this.$store.betslip.error(result.statusText);
            } else {
              return result.json();
            }
          })
          .then(data => {
            if (typeof data !== 'undefined') {
              this.model = data;
              this.system = _systemChange(this.model.BetSlip, undefined, this.system);
              this.$store.betslip.headerCounter.count('bets', this.model.BetSlip.Events.reduce(
                (count, innerArray) => count + (innerArray.IsCustomBetEvent ? 1 : innerArray.Selections.length),
                0
              ));
              this.BBError = false;
              this.systemCombinationsAll = this.model.Combinations.map(c => c.CounterLines);
              this.betColAmount = [..._emptyValues(this.model.Combinations)];
              this.betMulAmount = [..._emptyValues(this.model.Combinations)];
              this.combinationBetAmount = [..._emptyValues(this.model.Combinations)];
              this.systemXCols = _systemXCols(this.model.Combinations);
              this.systemXBets = this.model.BetSlip.MultiplesBets;
              this.oddsChanged = this.model.BetResponse.ChangedOdds.some(s => s.Modified === -1 || s.Modified === 1);
              if (_userData().user.freeBetBalance > 0) {
                this.Freebet.enabled = true;
                this.Freebet.balance = _userData().user.freeBetBalance;
              }
            }
          })
          .catch(error => {
            this.$store.betslip.error(error.message);
          })
          .finally(() => {
            this.loading = false;
          });
      }
      /* Open Bets */
      /*if (this.$store.slipTab.t === 2) {
        console.log('will load Unsettled Bets');
        this.loading = true;
        fetch('/Models/openbets.json')
          .then(result => {
            if (!result.ok) {
              this.$store.betslip.error(result.statusText);
            } else {
              return result.json();
            }
          })
          .then(data => {
            if (typeof data !== 'undefined') {
              this.openbets.model = data;
              this.openbets.currency =
                this.openbets.model.Bets[0].Currency === 'EUR' ? '&euro;' : this.openbets.model.Bets[0].Currency;
              this.$store.headerCounter.count('openBets', this.openbets.model.Bets.length);
              let falseList = [];
              this.openbets.model.Bets.forEach(item => {
                falseList[item.Id] = false;
              }, this);
              this.openbets.confirmCashOut = [...falseList];
              this.openbets.betLoading = [...falseList];
              this.openbets.model.Bets.forEach(item => {
                this.openbets.confirmCashOut[item.Id] = false;
              }, this);
            }
          })
          .catch(error => {
            this.$store.betslip.error(error.message);
          })
          .finally(() => {
            this.loading = false;
          });
      }*/
    },
    system: 1 /* Singles:4, Parlay: 1, System: 3 */,
    systemChange: _systemChange,
    //headerOddsCounter: 0,
    oddsChanged: false,
    removeEvent(SportEventId) {
      const eIndex = this.model.BetSlip.Events.findIndex(e => e.SportEventId === SportEventId);
      if (eIndex > -1) {
        this.loading = true;
        this.fadeOut[SportEventId] = true;
        setTimeout(
          function () {
            this.model.BetSlip.Events.splice(eIndex, 1);
            this.fadeOut[SportEventId] = undefined;
            this.loading = false;
          }.bind(this),
          150
        );
        this.unselectAll();
      }
    },
    removeOdd(OddId, SportEventId) {
      const eIndex = this.model.BetSlip.Events.findIndex(e => e.SportEventId === SportEventId);
      if (this.model.BetSlip.Events[eIndex].Selections.length === 1) {
        this.removeEvent(SportEventId);
      } else {
        const sIndex = this.model.BetSlip.Events[eIndex].Selections.findIndex(s => s.OddId === OddId);
        if (eIndex > -1) {
          this.loading = true;
          this.fadeOut[SportEventId + '_' + OddId] = true;
          setTimeout(
            function () {
              this.model.BetSlip.Events[eIndex].Selections.splice(sIndex, 1);
              this.fadeOut[SportEventId + '_' + OddId] = undefined;
              this.loading = false;
              if (
                this.model.BetSlip.Events[eIndex].IsCustomBetEvent &&
                this.model.BetSlip.Events[eIndex].Selections < 2
              )
                this.BBError = true;
            }.bind(this),
            150
          );
          this.unselectAll();
        }
      }
    },
    clearSlip() {
      this.loading = true;
      this.model.BetSlip.Events.forEach(function (e) {
        this.fadeOut[e.SportEventId] = true;
      }, this);
      setTimeout(
        function () {
          this.model = _defaultModel;
          this.fadeOut = [];
          this.loading = false;
        }.bind(this),
        150
      );
    },

    /* Single */
    singleTotalAmount: 0,
    singleTotalOdd: 0,
    singleAmount: [],

    calculateSingleTotalAmount() {
      this.singleTotalAmount = 0;
      if (this.model.BetSlip.Events.length > 0) {
        this.model.BetSlip.Events.forEach(function (e) {
          e.Selections.forEach(function (s) {
            if (common.parse.toNum(this.singleAmount['singleAmount_' + e.SportEventId + '_' + s.OddId]) > 0)
              this.singleTotalAmount += common.parse.toNum(
                this.singleAmount['singleAmount_' + e.SportEventId + '_' + s.OddId]
              );
          }, this);
        }, this);
      }
      return common.parse(this.singleTotalAmount).output;
    },

    /* Parlay */
    parlayAmount: '',
    parlayTotalOdd: 0,
    winningTotalOdd(system) {
      this[system + 'TotalOdd'] = 0;
      if (this.model.BetSlip.Events.length > 0) {
        this.model.BetSlip.Events.forEach(function (e) {
          e.Selections.forEach(function (s) {
            if (
              system === 'single' &&
              common.parse.toNum(this[system + 'Amount']['singleAmount_' + e.SportEventId + '_' + s.OddId]) > 0
            )
              this[system + 'TotalOdd'] += Number(s.OddValue);
            if (system === 'parlay') {
              if (e.IsCustomBetEvent) {
                this[system + 'TotalOdd'] += Number(e.CustomBetOddValue);
              } else {
                e.Selections.forEach(function (s) {
                  this[system + 'TotalOdd'] += Number(s.OddValue);
                }, this);
              }
            }
          }, this);
        }, this);
      }
      if (this.Freebet.active) this[system + 'TotalOdd'] = this[system + 'TotalOdd'] * this.Freebet.oddPercentage;
      return common.parse(this[system + 'TotalOdd']).output;
    },
    BBError: false,

    /* System 3 */
    setBanker(SportEventId) {
      this.loading = true;
      fetch('/Models/banker.json')
        .then(res => res.json())
        .then(data => {
          var event = data.ViewModel.BetSlip.Events.find(e => e.SportEventId === SportEventId);
          if (typeof event !== 'undefined') {
            this.model.BetSlip.Events.find(e => e.SportEventId === SportEventId).Banker = event.Banker;
            this.model.Combinations = data.ViewModel.Combinations;
            this.systemCombinationsAll = this.model.Combinations.map(c => c.CounterLines);
            this.systemXCols = _systemXCols(this.model.Combinations);
            this.systemXBets = this.model.BetSlip.MultiplesBets;
            var newSystemCombinationsSelected = this.model.Combinations.map(c => c.CounterLines);
            this.systemCombinationsSelected = this.systemCombinationsSelected.filter(
              c => newSystemCombinationsSelected.indexOf(c) !== -1
            );
            let d = 0;
            this.systemCombinationsSelected.forEach(function (counterLine) {
              d += this.systemXCols[counterLine];
            }, this);
            if (this.stakePerCol === '' && this.stakePerCol === '' && this.stakePerCol === '') {
              if (this.systemTotalAmount() > 0) {
                var total = this.systemTotalAmount();
                this.systemCombinationsSelected.forEach(function (counterLine) {
                  this.setBetMulAmount(
                    common.parse((total / (d * this.systemXBets)) * this.systemXCols[counterLine]).outputInf,
                    counterLine,
                    true
                  );
                }, this);
              }
            } else {
              if (this.stakePerCol !== '')
                this.systemCombinationsSelected.forEach(function (counterLine) {
                  this.setBetColAmount(this.stakePerCol, counterLine, true);
                }, this);
              if (this.stakeTotalCols !== '')
                this.systemCombinationsSelected.forEach(function (counterLine) {
                  this.setBetMulAmount(
                    common.parse((common.parse.toNum(this.stakeTotalCols) / (d * this.systemXBets)) * this.systemXCols[counterLine])
                      .outputInf,
                    counterLine,
                    true
                  );
                }, this);
              if (this.stakeTotalBets !== '')
                this.systemCombinationsSelected.forEach(function (counterLine) {
                  this.setCombinationBetAmount(
                    common.parse(common.parse.toNum(this.stakeTotalBets) / this.systemCombinationsSelected.length).outputInf,
                    counterLine,
                    true
                  );
                }, this);
            }
          }
          this.loading = false;
        });
    },
    stakePerCol: '',
    stakeTotalCols: '',
    stakeTotalBets: '',
    systemCombinationsAll: [],
    systemCombinationsSelected: [],
    betColAmount: [],
    betMulAmount: [],
    combinationBetAmount: [],
    systemXCols: [],
    systemXBets: 0,
    stakeInvalid: false,
    setStakePerCol() {
      //console.log('parlayAmount', this.parlayAmount, 'parlayTotalOdd', this.parlayTotalOdd);
      //console.log('systemCombinationsSelected', this.systemCombinationsSelected);
      this.stakeTotalCols = '';
      this.stakeTotalBets = '';
      if (this.systemCombinationsSelected.length === 0) this.systemCombinationsSelected = this.systemCombinationsAll;
      this.systemCombinationsSelected.forEach(function (counterLine) {
        this.setBetColAmount(this.stakePerCol, counterLine, true);
      }, this);
    },
    setStakeTotalCols() {
      console.log('this.systemCombinationsSelected', this.systemCombinationsSelected);
      console.log('this.systemCombinationsSelected.length', this.systemCombinationsSelected.length);
      this.stakePerCol = '';
      this.stakeTotalBets = '';
      if (this.systemCombinationsSelected.length === 0) this.systemCombinationsSelected = this.systemCombinationsAll;

      /* limit error */
      if (this.setTimeoutAction !== null) clearTimeout(this.setTimeoutAction);
      let limit = this.systemCombinationsSelected.length * 0.01 * this.model.BetSlip.MultiplesBets;
      console.log(this.systemCombinationsSelected.length, '0.01', this.model.BetSlip.MultiplesBets, this.stakeTotalCols + ' < limit:' + limit, common.parse.toNum(this.stakeTotalCols) < limit);
      if (common.parse.toNum(this.stakeTotalCols) < limit) {
        this.stakeInvalid = true;
        this.setTimeoutAction = setTimeout(function() {
          this.setTimeoutAction = null;
          this.$store.betslip.error(`Minimum is: ${common.cultureInfo.currencySymbol} ${common.parse(limit).output}`);
          return;
        }.bind(this), 1200);
      } else { this.stakeInvalid = false; }

      let d = 0;
      this.systemCombinationsSelected.forEach(function (counterLine) {
        d += this.systemXCols[counterLine];
      }, this);
      this.systemCombinationsSelected.forEach(function (counterLine) {
        this.setBetMulAmount(
          common.parse((common.parse.toNum(this.stakeTotalCols) / (d * this.systemXBets)) * this.systemXCols[counterLine])
          .outputInf,
          counterLine,
          true
        );
      }, this);
    },
    setStakeTotalBets() {
      this.stakePerCol = '';
      this.stakeTotalCols = '';
      if (this.systemCombinationsSelected.length === 0) this.systemCombinationsSelected = this.systemCombinationsAll;
      this.systemCombinationsSelected.forEach(function (counterLine) {
        this.setCombinationBetAmount(
          common.parse(common.parse.toNum(this.stakeTotalBets) / this.systemCombinationsSelected.length).outputInf,
          counterLine,
          true
        );
      }, this);
    },
    setBetColAmount(val, counterLine, all) {
      let betCol = common.parse.toNum(val),
        betMul = betCol * this.systemXCols[counterLine],
        combinationBet = _toFloor2(betCol * this.systemXBets * this.systemXCols[counterLine]);
      if (all) this.betColAmount[counterLine] = common.parse(betCol).output;
      this.betMulAmount[counterLine] = common.parse(betMul).output;
      this.combinationBetAmount[counterLine] = common.parse(combinationBet).output;
      this.checkCombination(counterLine);
    },
    setBetMulAmount(val, counterLine, all) {
      let betMul = common.parse.toNum(val),
        betCol = betMul / this.systemXCols[counterLine],
        combinationBet = _toFloor2(betCol * this.systemXBets * this.systemXCols[counterLine]);
      if (all) this.betMulAmount[counterLine] = common.parse(betMul).output;
      this.betColAmount[counterLine] = common.parse(betCol).output;
      this.combinationBetAmount[counterLine] = common.parse(combinationBet).output;
      this.checkCombination(counterLine);
    },
    setCombinationBetAmount(val, counterLine, all) {
      let combinationBet = common.parse.toNum(val),
        betCol = (combinationBet / this.systemXBets / this.systemXCols[counterLine]).toFixed(2),
        betMul = (betCol * this.systemXCols[counterLine]).toFixed(2);
      if (all) this.combinationBetAmount[counterLine] = common.parse(_toFloor2(combinationBet)).output;
      this.betColAmount[counterLine] = common.parse(betCol).output;
      this.betMulAmount[counterLine] = common.parse(betMul).output;
      this.checkCombination(counterLine);
    },
    checkCombination(counterLine) {
      if (this.betColAmount[counterLine] !== '' && this.betColAmount[counterLine] !== 0) {
        if (this.systemCombinationsSelected.indexOf(counterLine) === -1)
          this.systemCombinationsSelected.push(counterLine);
      } else {
        this.systemCombinationsSelected.splice(this.systemCombinationsSelected.indexOf(counterLine), 1);
      }
    },
    selectCombination(counterLine) {
      console.log(counterLine, counterLine in this.systemCombinationsSelected);

      if (isNaN(counterLine) && counterLine.toLowerCase() === 'all')
        this.systemCombinationsSelected = this.systemCombinationsAll;
      else if (this.systemCombinationsSelected.indexOf(counterLine) === -1) {
        this.betColAmount[counterLine] = '';
        this.betMulAmount[counterLine] = '';
        this.combinationBetAmount[counterLine] = '';
      }
      if (this.systemCombinationsSelected.length !== 0) {
        if (this.stakePerCol !== '') this.setStakePerCol();
        else if (this.stakeTotalCols !== '') this.setStakeTotalCols();
        else if (this.stakeTotalBets !== '') this.setStakeTotalBets();
      }
    },
    unselectAll() {
      this.systemCombinationsSelected = [];
      this.systemCombinationsAll.forEach(function (counterLine) {
        this.betColAmount[counterLine] = '';
        this.betMulAmount[counterLine] = '';
        this.combinationBetAmount[counterLine] = '';
      }, this);
    },
    totalColsInBet() {
      let colsInBet = 0;
      this.systemCombinationsSelected.forEach(function (counterLine) {
        if (
          this.betColAmount[counterLine] !== '' &&
          this.betColAmount[counterLine] !== '0' &&
          this.betColAmount[counterLine] !== 0
        )
          colsInBet += this.systemXCols[counterLine];
      }, this);
      return colsInBet;
    },
    systemTotalAmount() {
      let total = 0;
      this.systemCombinationsSelected.forEach(function (counterLine) {
        if (
          this.combinationBetAmount[counterLine] !== '' &&
          this.combinationBetAmount[counterLine] !== '0' &&
          this.combinationBetAmount[counterLine] !== 0
        )
          total += parseFloat(common.parse.toNum(this.combinationBetAmount[counterLine]));
      }, this);
      return _toFloor2(total);
    },

    keyboard() { return common.keyboard(this) },

/*    / * custom mobile keyboard * /
    currentInput: '',
    keyboardtInput() {
      let inp = this,
        key = this.currentInput,
        keySplit = this.currentInput.split('.'),
        parent = '';
      if (keySplit.length > 1) {
        inp = this[keySplit[0]];
        key = keySplit[1];
        parent = keySplit[0];
      }
      return {
        inp,
        key,
        parent
      };
    },
    keyboardData: null,
    toggleKeyboard(inpId, dat) {
      if (this.isTouch) {
        if (typeof dat !== 'undefined') this.keyboardData = this.currentInput === inpId ? null : dat;
        if (this.currentInput === inpId || inpId === '') {
          let key = this.keyboardtInput().key,
            inp = this.keyboardtInput().inp;
          inp[key] = common.parse(parse.toNum(inp[key])).output;
          this.currentInput = '';
          this.keyboardFirstKey = true;
        } else {
          this.currentInput = inpId;
          let key = this.keyboardtInput().key,
            inp = this.keyboardtInput().inp;
          if (typeof inp[key] !== 'undefined' && inp[key].slice(-3) === this.decimalSeparator + '00') {
            inp[key] = inp[key].replace(inp[key].slice(-3), '');
          }
        }
      }
    },
    keyboardPreset: {
      timer: 0,
      timeframe: 500,
      amounts: [0.5, 1, 5, 10, 25, 50]
    },
    keyboardFirstKey: true,
    keyboard(val) {
      if (val !== undefined) {
        let fireKey = true,
          key = this.keyboardtInput().key,
          inp = this.keyboardtInput().inp,
          parent = this.keyboardtInput().parent;
        if (typeof inp[key] === 'undefined') inp[key] = '';
        if (val.startsWith('+')) {
          let t = Date.now();
          if (t - this.keyboardPreset.timer < this.keyboardPreset.timeframe) {
            inp[key] = common.parse(common.parse.toNum(inp[key]) + Number(val.replace('+', ''))).output;
          } else {
            inp[key] = common.parse(val.replace('+', '')).output;
          }
          this.keyboardPreset.timer = t;
          fireKey = false;
          this.keyboardFirstKey = false;
        }
        if (val === 'back') {
          inp[key] = inp[key].slice(0, -1);
          fireKey = false;
          this.keyboardFirstKey = false;
        }
        if (this.keyboardFirstKey) {
          inp[key] = '';
          this.keyboardFirstKey = false;
        }
        if (val === this.decimalSeparator) {
          if (inp[key].indexOf(val) > -1) fireKey = false;
          else if (inp[key] === '') inp[key] = '0';
        }
        if (inp[key].indexOf(this.decimalSeparator) > -1 && inp[key].split(this.decimalSeparator)[1].length === 2)
          fireKey = false;
        if (fireKey) inp[key] += val;

        / * System 3 calculations * /
        const systemCalculations = {
          stakePerCol: this.setStakePerCol,
          stakeTotalCols: this.setStakeTotalCols,
          stakeTotalBets: this.setStakeTotalBets,
          betColAmount: this.setBetColAmount,
          betMulAmount: this.setBetMulAmount,
          combinationBetAmount: this.setCombinationBetAmount
        };
        if (parent in systemCalculations) systemCalculations[parent].call(this, inp[key], key);
        else if (key in systemCalculations) systemCalculations[key].call(this);

        / * Partial CashOut calculations * /
        if (parent === 'partialCashoutAmount') {
          this.$nextTick(() => {
            if (inp[key].slice(-1) !== this.decimalSeparator && inp[key] !== '' && inp[key] !== '0') {
              let nativeAm = Math.round(this.keyboardData.val * 100),
                minAm = Math.round(this.keyboardData.minBetPerCol * 10 * 100),
                val = common.parse.toNum(inp[key]) * 100,
                finalAm = val,
                maxAm = (((this.keyboardData.sum - minAm / 1000) * 100) / this.keyboardData.sum / 100) * nativeAm;
              console.log('val', val, 'maxAm', maxAm, 'nativeAm', nativeAm, 'minAm', minAm);
              if (val > maxAm && val !== nativeAm) finalAm = maxAm;
              if (val <= minAm) finalAm = minAm;
              if (val > nativeAm) finalAm = nativeAm;
              inp[key] = (finalAm / 100).toString().replace('.', this.decimalSeparator);
              document.getElementById(`pc-rng-${this.keyboardData.id}`).value = (finalAm / nativeAm) * 100;
              document.getElementById(`pc-rng-lbl-${this.keyboardData.id}`).textContent = Math.round(
                (finalAm / nativeAm) * 100
              );
            }
          });
        }
      }
    },*/

    Freebet: {
      enabled: false,
      active: false,
      balance: 0,
      oddPercentage: 0.8
    },

    slipInvalid(){
      return this.system === 4 &&  common.parse.toNum(this.singleTotalAmount) === 0 
      || this.system === 1 && common.parse.toNum(this.parlayAmount) === 0 
      || this.Freebet.active && common.parse.toNum(this.parlayAmount) > Number(this.Freebet.balance) 
      || this.system === 3 && parseFloat(this.systemTotalAmount()) === 0 
      || this.system === 3 && this.stakeInvalid
      || this.Freebet.active && common.parse.toNum(this.parlayAmount) > Number(this.Freebet.balance)
      || this.loading
      || this.BBError;
    },

    formSubmitTemp(e) {
      this.loading = true;
      e.preventDefault();
      let obj = {};
      const formData = new FormData(document.getElementById('form0'));
      for (let key of formData.keys()) {
        obj[key] = formData.get(key);
      }
      console.log(obj);

      /*
      /Models/BetReceipt-4Singles.json
      /Models/BetReceipt-4Multiples.json
      /Models/BetReceipt-4LiveBetting.json
      /Models/BetReceipt-BetBuilder.json
      /Models/BetReceipt-BetBuilder2.json
      /Models/BetReceipt-Failed1.json
      /Models/BetReceipt-Failed2.json
      */
      fetch('/Models/BetReceipt-4Singles.json')
        .then(result => {
          if (!result.ok) {
            this.$store.betslip.error(result.statusText);
          } else {
            return result.json();
          }
        })
        .then(data => {
          if (typeof data !== 'undefined') {
            this.receipt = data;
          }
        })
        .catch(error => {
          this.$store.betslip.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    receipt: {},

    /* temp function: change receipt */
    receiptChange(url) {
      this.loading = true;
      this.receipt = { Betslips: [] };
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.receipt = data;
          this.loading = false;
        });
    },

    /*dateFormat(date, type) {
      / * DD mmm YYYY HH:MM:SS * /
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
    },*/

    //headerOpenBetsCounter: 0,
    /*openbets: {
      type: 1,
      model: _defaultOpenBetsModel,
      currency: '',
      confirmCashOut: [],
      betLoading: [],
      cashoutLoading: [],
      cashoutAnswer: [],
      partialCashoutAmount: [],
      cashout(id) {
        if (!this.confirmCashOut[id]) {
          this.confirmCashOut[id] = true;
          setTimeout(() => {
            this.confirmCashOut[id] = false;
          }, 6000);
        } else {
          console.log('Cash ' + id + ' Out... ');
          this.confirmCashOut[id] = false;
          this.cashoutAnswer[id] = 'Bet Cashed Out at €' + common.parse(parse.toNum(this.partialCashoutAmount[id])).output;
          setTimeout(
            function () {
              this.model.Bets = this.model.Bets.filter(x => x.Id !== id);
            }.bind(this),
            6000
          );
          this.cashoutLoading[id] = true;
        }
      },
      async getDetails(id) {
        let url = '/Models/openbets-details' + id + '.json';
        console.log('fetching ' + id + '...');
        this.betLoading[id] = true;
        return await fetch(url)
          .then(result => {
            if (!result.ok) {
              this.$store.betslip.error(result.statusText);
            } else {
              return result.json();
            }
          })
          .then(data => {
            if (typeof data !== 'undefined') {
              var details = data;
              return details;
            }
          })
          .catch(function () {
            console.error('Error');
          })
          .finally(() => {
            this.betLoading[id] = false;
          });
      },
      scoreMeta(str, gameId) {
        let obj = { setscore: '', score: '', gamescore: '', matchminute: '', remainingtimeinperiod: '' },
          valid = true,
          basketballQ = { 15: 'Q1', 16: 'Q2', 17: 'Q3', 18: 'Q4', 31: 'OT' },
          icehockeyP = { 3: 'P1', 4: 'P2', 5: 'P3', 6: 'P4', 7: 'P5' };
        try {
          obj = JSON.parse(str);
        } catch (err) {
          valid = false;
        }
        if (valid) {
          obj.setscore = obj.setscore.replace(' - ', '-');
          obj.timeremaining =
            obj.remainingtimeinperiod === '' && obj.matchminute !== ''
              ? obj.matchminute + '&rsquo;'
              : obj.remainingtimeinperiod;
          obj.quarter = '';
          if ('eventstatusid' in obj) {
            if (gameId === 2) obj.quarter = basketballQ[obj.eventstatusid];
            else if (gameId === 106) obj.quarter = icehockeyP[obj.eventstatusid];
          }
        }
        return obj;
      }
    }*/
  };
};

export default { documentReady, betslipHandler };
