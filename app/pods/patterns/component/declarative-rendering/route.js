import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const picsumURL = "https://picsum.photos/800/400?random=";
const photos = [1,2,3,4,5,6,7,8].map(int => `${picsumURL}${int}`)

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments)
    /* NOTE: if you lazily load translations, here is also where you would load them via `intl.addTranslations` */
    return this.intl.setLocale(['en-us']); /* array optional */
  },

  model() {
    const t_ns = "patterns.declarative_rendering.";
    const t_ns_pe = `${t_ns}pattern_explanation.`;

    return {
      t_ns,
      t_ns_pe,
      photos,
      currentSlideIndex: 0,
      use_cases: [
        this.intl.t(`${t_ns_pe}use_cases.u1`),
      ],
      rabbit_holes: [
        this.intl.t(`${t_ns_pe}rabbit_holes.r1`),
      ],
      references: [
        { 
          title: this.intl.t(`${t_ns_pe}references.ref1.title`),
          link: this.intl.t(`${t_ns_pe}references.ref1.link`)
        },
      ]
    }
  }
});