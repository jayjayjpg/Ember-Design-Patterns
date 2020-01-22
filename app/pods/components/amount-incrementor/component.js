import Component from '@ember/component';

export default Component.extend({
  amount: 10,
  stepSize: 1, 

  actions: {
    updateAmount(direction) {
      this.set('amount', this.amount + (direction * this.stepSize))
      if (this.onAmountIncrement) {
        this.onAmountIncrement(this.amount);
      }
    }
  }
});
