// app.css
import '../css/app.css';

import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';
import persist from '@alpinejs/persist';
import intersect from '@alpinejs/intersect';

Alpine.plugin(mask);
Alpine.plugin(persist);
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.store('slipTab', {
  t: Alpine.$persist(1),
  /* 1: slip, 2: open bets*/
  goto(tab) {
    this.t = tab;
  }
});

Alpine.store('betslip', {
  headerCounter: {
    bets: 0,
    openBets: 0,
    count(bets, count) {
      this[bets] = count;
    }
  },
  keyboard: {
    input: '',
    timer: 0,
    firstKey: true,
    set(inp, val) {
      this[inp] = val;
    }
  },
  errorMessage: '',
  error(msg){
    this.errorMessage = msg;
  }
});

import common from './components/common.UI';
import UI from './components/slip.UI';
import mybetsUI from './components/mybets.UI';

//init slip custom js
//const common = { UI };
const slip = { UI };
//const mybets = { UI };

window.common = common;
window.slip = slip;
window.mybets = { UI: mybetsUI };