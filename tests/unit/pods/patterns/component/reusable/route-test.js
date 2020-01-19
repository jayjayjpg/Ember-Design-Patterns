import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pattern/component/reusable', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patterns/component/reusable');
    assert.ok(route);
  });
});
