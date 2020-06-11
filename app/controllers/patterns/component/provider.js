import Controller from '@ember/controller';

export default Controller.extend({
  monthlyHiringGoal: 10,
  yearlyHiringGoal: 100,
  currentHires: 5,

  actions: {
    updateMonthlyHiringGoal(newGoal) {
      this.set('monthlyHiringGoal', newGoal)
    },
    updateCurrentHires(newAmount) {
      this.set('currentHires', newAmount)
    },
    updateYearlyHiringGoal(newAmount) {
      this.set('totalYearlyHires', newAmount)
    },
  }

});
