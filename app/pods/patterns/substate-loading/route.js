import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  model() {
    return new Promise(function(resolve) {
      later((function() {
        resolve('I am Loaded')
      }), 1500);
    })
  },

  actions: {
    reload: function() {
      this.refresh();
    }
  }
});
