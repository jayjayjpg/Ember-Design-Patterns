import { readOnly } from '@ember/object/computed';
import config from 'design-patterns/config/environment';
import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { lookupByFactoryType } from 'ember-intl/hydrate';

const { modulePrefix } = config;

export default Controller.extend({
  intl: service(),
  activeLocale: readOnly('intl.locale'),

  locales: computed(function() {
    return lookupByFactoryType('translations', modulePrefix).map(moduleName => moduleName.split('/').pop());
  }).readOnly(),

  selections: computed('locales.[]', 'activeLocale', function() {
    let active = this.activeLocale;

    return this.locales.map(locale => {
      return {
        locale: locale,
        active: active.indexOf(locale) > -1
      };
    });
  }).readOnly(),

  actions: {
    changeLocale(locale) {
      return this.intl.set('locale', locale);
    }
  }
});
