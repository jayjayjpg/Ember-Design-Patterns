import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const items = [
  {
    link: 'test',
    title: 'jazz'
  },
  {
    link: 'test2',
    title: 'jazz2'
  }
]

module('Integration | Component | link-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(3);

    this.set('items', items)
    await render(hbs`<LinkList @items={{this.items}}/>`);

    assert.dom('[data-test-link-list-container]').exists()
    assert.equal(findAll('[data-test-link-list-entry]').length, items.length)
    assert.dom('[data-test-link-list-entry]').hasText('jazz')
  });
});
