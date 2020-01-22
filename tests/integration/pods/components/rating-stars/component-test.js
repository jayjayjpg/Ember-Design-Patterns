import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { render, findAll } from '@ember/test-helpers';

module('Integration | Component | rating-stars', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{rating-stars}}`);

    assert.ok(this.element);
  });

  test('it renders 2 stars and no half stars with a rating of 2', async function(assert) {
    await render(hbs`{{rating-stars rating=2}}`);

    assert.equal(findAll('[data-test-rating-star]').length, 2)
    assert.dom('[data-test-rating-star-half]').doesNotExist()
  });

  test('it renders 4 whole stars and 1 half stars with a rating of 4.5', async function(assert) {
    await render(hbs`{{rating-stars rating=4.5}}`);

    assert.equal(findAll('[data-test-rating-star]').length, 4)
    assert.dom('[data-test-rating-star-half]').exists()
  });

  test('it renders 4 whole stars with a rating of 4.4', async function(assert) {
    await render(hbs`{{rating-stars rating=4.4}}`);

    assert.equal(findAll('[data-test-rating-star]').length, 4)
    assert.dom('[data-test-rating-star-half]').doesNotExist()
  });
});
