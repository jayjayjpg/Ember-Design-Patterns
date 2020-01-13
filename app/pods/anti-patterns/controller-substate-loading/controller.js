import Controller from '@ember/controller';
import { later } from '@ember/runloop';

export default Controller.extend({
  // this is free from the router, why declare it?
  isLoaded: false,

  // this init function also sucks.
  // When it fires changed between versions and fucked some of my shit up
  // the lifecycle hooks in Components are much more reliable
  init: function() {
    // Look at this dumb ass savascript context 'const that = this' things.
    const that = this;
    // Thats fucking weird.... 
    later((function() {
      // but 'this' doesn't know about 'isLoaded' in here  
      that.set('isLoaded', true)
    }), 1500);
      // ....fucking javascript....
  }
});
