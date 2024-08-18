import common from './common.UI';

const mybetsHandler = () => {

    const _defaultOpenBetsModel = { Bets: [] };

    return {
        //headerOpenBetsCounter: 0,
        loading: false,
        duration: 6000,
        filterBets: 0,
        currency: '',
        model: _defaultOpenBetsModel,
        load(){
            /* Open Bets */
            if (this.$store.slipTab.t === 2) {
                console.log('loads Unsettled Bets');
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
                    this.model = data;
                    this.currency =
                        this.model.Bets[0].Currency === 'EUR' ? '&euro;' : this.model.Bets[0].Currency;
                    this.$store.betslip.headerCounter.count('openBets', this.model.Bets.length);
                    let falseList = [];
                    this.model.Bets.forEach(item => {
                        falseList[item.Id] = false;
                    }, this);
                    this.confirmCashOut = [...falseList];
                    this.betLoading = [...falseList];
                    this.model.Bets.forEach(item => {
                        this.confirmCashOut[item.Id] = false;
                    }, this);
                    }
                })
                .catch(error => {
                    this.$store.betslip.error(error.message);
                })
                .finally(() => {
                    this.loading = false;
                });
            }
        },
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
            this.cashoutAnswer[id] = 'Bet Cashed Out at €' + common.parse(common.parse.toNum(this.partialCashoutAmount[id])).output;
            setTimeout(
                function () {
                    this.model.Bets = this.model.Bets.filter(x => x.Id !== id);
                    this.$store.betslip.headerCounter.count('openBets', this.model.Bets.length);
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
        },
        keyboard() { return common.keyboard(this) },
    }
};

export default { mybetsHandler };