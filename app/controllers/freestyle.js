import { readOnly } from '@ember/object/computed';
import config from 'design-patterns/config/environment';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { lookupByFactoryType } from 'ember-intl/hydrate';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

export default FreestyleController.extend({
  emberFreestyle: service(),
  intl: service(),

  /* BEGIN-FREESTYLE-USAGE fp--notes
### A few notes regarding freestyle-palette

- Accepts a colorPalette POJO like the one found in the freestyle.js blueprint controller
- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  colorPalette: {
    'primary': {
      'name': 'cyan',
      'base': '#00bcd4'
    },
    'accent': {
      'name': 'amber',
      'base': '#ffc107'
    }
  }
  // ...
});
```
  END-FREESTYLE-USAGE */

  colorPalette: {
    'primary': {
      'name': 'cyan',
      'base': '#00bcd4'
    },
    'accent': {
      'name': 'amber',
      'base': '#ffc107'
    },
    'secondary': {
      'name': 'greyish',
      'base': '#b6b6b6'
    },
    'foreground': {
      'name': 'blackish',
      'base': '#212121'
    },
    'background': {
      'name': 'white',
      'base': '#ffffff'
    }
  },

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
