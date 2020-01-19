import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | amount-incrementor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{amount-incrementor amount=40}}`);
    assert.dom('[data-test-amount]').hasText('40')
  });

  test('it increments', async function(assert) {
    this.set('updateTestAmount', function(val) {
      assert.equal(val, 41, 'incremented by 1')
    })
    
    await render(hbs`{{amount-incrementor amount=40 onAmountIncrement=(action this.updateTestAmount)}}`);

    await click('[data-test-increase]')
  });

  test('it decrements', async function(assert) {
    this.set('updateTestAmount', function(val) {
      assert.equal(val, 39, 'decremented by 1')
    })
    
    await render(hbs`{{amount-incrementor amount=40 onAmountIncrement=(action this.updateTestAmount)}}`);

    await click('[data-test-decrease]')
  });
});
