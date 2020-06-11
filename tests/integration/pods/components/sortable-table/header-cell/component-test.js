import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sortable-table/header-cell', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{sortable-table/header-cell}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#sortable-table/header-cell}}
        template block text
      {{/sortable-table/header-cell}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
