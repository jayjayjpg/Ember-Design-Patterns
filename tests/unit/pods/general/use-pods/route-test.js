import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | general/use-pods', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:general/use-pods');
    assert.ok(route);
  });
});
