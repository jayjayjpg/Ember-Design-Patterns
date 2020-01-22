import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      rating: 3.5,
      percentComplete: 45,    
    }
  },

  actions: {
    updateRating(newValue) {
      this.rating = newValue
    },
    updatePercentComplete(newValue) {
      this.percentComplete = newValue
    }
  }
});
