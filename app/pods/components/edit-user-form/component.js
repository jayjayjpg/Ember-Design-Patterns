import Component from '@ember/component';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency'
import { later } from '@ember/runloop';

export default Component.extend({
  user: null, //passed in
  saveConfirmationTextVisible: false,

  isSubmitDisabled: computed('user.hasDirtyAttributes', function() {
    const dataUnchanged = !this.user.hasDirtyAttributes;
    const isSaving = this.saveUser.isRunning;

    return dataUnchanged || isSaving
  }),

  saveUser: task(function *() {
    const res = yield this.user.save()
    this.set('user', res)
    this.showSaveConfirmation()
  }).drop(),

  actions: {
    saveUser: function() {
      this.get('saveUser').perform();
    }
  },

  showSaveConfirmation: function() {
    this.set('saveConfirmationTextVisible', true)
    const that = this;
    later(this, function() {
      that.set('saveConfirmationTextVisible', false)
    }, 3000);
  }
});
