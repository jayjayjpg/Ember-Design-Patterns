import Route from '@ember/routing/route';
import data from "design-patterns/helpers/global-data"

export default Route.extend({
  model() {
    return data.patterns
  }
});
