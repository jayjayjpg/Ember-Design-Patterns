import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patterns/substate_error', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patterns/substate-error');
    assert.ok(route);
  });
});
