import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  currentSection: null,

  actions: {
    updateCurrentlySelectedSection(newSection) {
      this.set("currentSection", newSection)
    }
  },

  didInsertElement() {
    const { currentRouteName } = this.router;
    if (currentRouteName !== "index") {
      const routeParts = currentRouteName.split(".")
      this.set('currentSection', routeParts[0])
    }
  }
});
