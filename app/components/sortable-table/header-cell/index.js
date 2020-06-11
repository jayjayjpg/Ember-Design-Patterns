import Component from '@ember/component';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  tagName: 'th',
  classNames: 'sortable-table__header-cell',

  click() {
    this['on-click'](this.field)
  },

  isAscending: computed('activeSortBy', 'field', function() {
    return this.activeSortBy === this.field;
  }),

  isDescending: computed('activeSortBy', 'field', function() {
    return this.activeSortBy === `${this.field}:desc`;
  }),

  isActive: or('isAscending', 'isDescending')
});
