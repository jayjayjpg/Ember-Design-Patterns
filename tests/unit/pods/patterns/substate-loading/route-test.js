import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patterns/substate_loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patterns/substate-loading');
    assert.ok(route);
  });
});
