import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patterns/model/tracking', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patterns/model/tracking');
    assert.ok(route);
  });
});
