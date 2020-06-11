import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const t_ns = "patterns.articles.reusable_component.";
const t_ns_pe = `${t_ns}pattern_explanation.`;

export default Route.extend({
  intl: service(),
  beforeModel() {
    this._super(...arguments)
    /* NOTE: if you lazily load translations, here is also where you would load them via `intl.addTranslations` */
    return this.intl.setLocale(['en-us']); /* array optional */
  },

  model() {
    return {
      t_ns,
      t_ns_pe,
      use_cases: [
        this.intl.t(`${t_ns_pe}use_cases.u1`),
        this.intl.t(`${t_ns_pe}use_cases.u2`),
      ],
      rabbit_holes: [
        this.intl.t(`${t_ns_pe}rabbit_holes.r1`),
        this.intl.t(`${t_ns_pe}rabbit_holes.r2`),
        this.intl.t(`${t_ns_pe}rabbit_holes.r3`),
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
