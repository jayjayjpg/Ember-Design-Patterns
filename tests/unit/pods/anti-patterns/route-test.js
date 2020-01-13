import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | anti-patterns', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:anti-patterns');
    assert.ok(route);
  });
});
