import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  intl: service(),
  t_ns: null,  

  beforeModel() {
    // translations only use '_' as seperators but route use '-'
    let routeName = this.get('routeName').replace(/-/g, "_");
    this.set('t_ns', routeName);
  },

  model() {
    return {
      t_ns: this.t_ns,
      title: this.intl.t(`${this.t_ns}.title`),
      subtitle: this.intl.t(`${this.t_ns}.subtitle`)
    }
  },
});
