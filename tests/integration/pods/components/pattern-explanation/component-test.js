import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pattern-explanation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1)

    await render(hbs`<PatternExplanation>Jazz</PatternExplanation>`);

    assert.equal(this.element.textContent.trim(), 'Show Explanation');

  });

  test('it doesn\'t render if no yield is given', async function(assert) {
    assert.expect(1)

    await render(hbs`<PatternExplanation/>`);

    assert.equal(this.element.textContent.trim(), '');

  });

  test('it opens when show button is clicked and closed when clicked again', async function(assert) {
    assert.expect(2)

    await render(hbs`
      <PatternExplanation>
        template block text
      </PatternExplanation>
    `);

    await click('button')

    assert.dom('[data-test-explanation]').hasText('template block text');

    await click('button')

    assert.dom('[data-test-explanation]').doesNotExist()
  });
});
