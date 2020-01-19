import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | patterns/component/single-purpose', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:patterns/component/single-purpose');
    assert.ok(route);
  });
});
