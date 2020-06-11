import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | progress-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ProgressBar />`);

    assert.ok(this.element);
  });

  test('it has a width of 50% when percentComplete is 50', async function(assert) {
    await render(hbs`<ProgressBar @percentComplete=50/>`);

    const style = find('[data-test-progress-bar]').style;

    assert.equal(style.width, '50%')
  });

  test('it has a width of 100% when percentComplete is 100', async function(assert) {
    await render(hbs`<ProgressBar @percentComplete=100/>`);

    const style100 = find('[data-test-progress-bar]').style;

    assert.equal(style100.width, '100%')
  });
});
