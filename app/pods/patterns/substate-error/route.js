import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  model() {
    return new Promise(function(resolve, reject) {
      later((function() {
        reject('rejected!')
      }), 1500);
    })
  },

  actions: {
    reload: function() {
      this.refresh();
    }
  }
});
