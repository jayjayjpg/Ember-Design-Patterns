import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const picsumURL = "https://picsum.photos/800/400?random=";
const photos = [1,2,3,4,5,6,7,8].map(int => `${picsumURL}${int}`)

const TRANSLATION_NAMESPACE = "patterns.declarative-rendering"

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments)
    /* NOTE: if you lazily load translations, here is also where you would load them via `intl.addTranslations` */
    return this.intl.setLocale(['en-us']); /* array optional */
  },

  model() {
    return {
      currentSlideIndex: 0,  
      photos,
      text: {
        title: this.intl.t(`${TRANSLATION_NAMESPACE}.title`),
        'pattern-explanation': {
          show: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.show`),
          hide: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.hide`),
          overview: this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.overview`),
          'use-cases': [
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.use-cases.u1`),
          ],
          'rabbit-holes': [
            this.intl.t(`${TRANSLATION_NAMESPACE}.pattern-explanation.rabbit-holes.r1`),
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