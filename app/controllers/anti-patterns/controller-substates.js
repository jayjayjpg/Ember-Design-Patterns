// ANTIPATTERN!!
import Controller from '@ember/controller';
import { later } from '@ember/runloop';

export default Controller.extend({
  isLoaded: false,
  isError: false,

  init: function() {
    this._super(...arguments);

    // this is to keep the context and is considered bad practice
    const that = this;

    later((function() {
      if (that.get('isLoaded')) {
        that.set('isLoaded', true)
      }
      if (that.get('isError')) {
        that.set('isError', true)
      }
    }), 1500);
  }
});
