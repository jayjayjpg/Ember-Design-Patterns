import { sort } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'table',
  classNames: ['table', 'sortable-table'],

  activeSortBy: '',
  dataSorting: computed('activeSortBy', function() {
    return [ this.activeSortBy ];
  }),

  sortedData: sort('data', 'dataSorting'),

  actions: {
    sort(field) {
      if (field === this.activeSortBy) {
        this.set('activeSortBy', `${field}:desc`);
      } else {
        this.set('activeSortBy', field);
      }
    }
  }
});

