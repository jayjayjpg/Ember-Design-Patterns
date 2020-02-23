import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const TRANSLATION_NAMESPACE = "patterns.reusable-component"

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments)
    /* NOTE: if you lazily load translations, here is also where you would load them via `intl.addTranslations` */
    return this.intl.setLocale(['en-us']); /* array optional */
  },

  model() {
    return {
      text: {
        title: this.intl.t(`${TRANSLATION_NAMESPACE}.title`),
        'pattern-explanation': {
          show: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.open`),
          hide: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.hide`),
          overview: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.overview`),
          'use-cases': [
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.use-cases.u1`),
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.use-cases.u2`),
          ],
          'rabbit-holes': [
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.rabbit-holes.r1`),
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.rabbit-holes.r2`),
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.rabbit-holes.r3`),
          ],
          'references': [
            {
              title: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.references.ref1.title`),
              link: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.references.ref1.link`)
            }
          ]
        }
      }
    }
  }
});
