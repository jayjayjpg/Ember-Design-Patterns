import EmberObject from '@ember/object';
import RouteIntlMixin from 'design-patterns/mixins/route-intl';
import { module, test } from 'qunit';

module('Unit | Mixin | route-intl', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let RouteIntlObject = EmberObject.extend(RouteIntlMixin);
    let subject = RouteIntlObject.create();
    assert.ok(subject);
  });
});
