import Component from '@ember/component';

export default Component.extend({
  amount: 10, // passed in

  actions: {
    updateAmount(direction) {
      this.set('amount', this.amount + direction)
      if (this.onAmountIncrement) {
        this.onAmountIncrement(this.amount);
      }
    }
  }
});
