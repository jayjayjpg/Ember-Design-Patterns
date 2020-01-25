import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const user = await this.store.find('user', 1);
    return {
      user
    }
  },
});
