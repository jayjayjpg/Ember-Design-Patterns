import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      monthlyHiringGoal: 10,
      yearlyHiringGoal: 100,
      currentHires: 5,
    }
  },

  actions: {
    updateMonthlyHiringGoal(newGoal) {
      this.monthlyHiringGoal = newGoal
    },
    updateCurrentHires(newAmount) {
      this.currentHires = newAmount
    },
    updateYearlyHiringGoal(newAmount) {
      this.totalYearlyHires = newAmount
    },
  }
});
