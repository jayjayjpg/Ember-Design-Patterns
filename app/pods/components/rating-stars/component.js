import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  rating: 4.5, // passed in

  roundedDownRating: computed('rating', function() {
    return Math.floor(this.rating);
  }),

  wholeStars: computed('roundedDownRating', function() {
    return new Array(this.roundedDownRating);
  }),

  hasHalfStar: computed('roundedDownRating', function() {
    return (this.rating - this.roundedDownRating) >= 0.5;
  })
});
