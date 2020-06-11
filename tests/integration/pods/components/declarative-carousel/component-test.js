import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | declarative-carousel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{declarative-carousel}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#declarative-carousel}}
        template block text
      {{/declarative-carousel}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
