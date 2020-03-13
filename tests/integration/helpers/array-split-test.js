import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | array-split', function(hooks) {
  setupRenderingTest(hooks);

  test('it splits a string into an array using the second argument as the split point', async function(assert) {
    this.set('inputValue', "1.2.3.4");
    const desiredOutput = [1,2,3,4];

    await render(hbs`{{array-split inputValue "."}}`);

    assert.equal(this.element.textContent.trim(), desiredOutput);
  });

  test('it returns null if null is passed in', async function(assert) {
    this.set('inputValue', null);
    const desiredOutput = "";

    await render(hbs`{{array-split inputValue}}`);

    assert.equal(this.element.textContent.trim(), desiredOutput);
  });

  test('it returns every letter in an array if no seperator is specified', async function(assert) {
    this.set('inputValue', "a.b.c.d");
    const desiredOutput = "";

    await render(hbs`{{array-split inputValue}}`);

    assert.equal(this.element.textContent.trim(), desiredOutput);
  });
});
