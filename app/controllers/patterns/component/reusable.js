import Controller from '@ember/controller';

export default Controller.extend({
  amount: 50,
  stars: 2.5,

  actions: {
    changeAmount(newAmount) {
      this.set('amount', newAmount)
    },
    changeStars(newAmount) {
      this.set('stars', newAmount)
    }
  }
});
