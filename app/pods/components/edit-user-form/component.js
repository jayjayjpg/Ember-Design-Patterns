import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveUser() {
      const {firstName, lastName, password} = this.user;
      alert(`update user to ${firstName}, ${lastName} with password ${password}`)
    }
  }
});
