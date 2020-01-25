import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | edit-user-form', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {

    const testUser = this.server.create('user', { 
      id: 1,
      firstName: 'Jeff',
      lastName: 'beck',
      password: '123456'
    });

    this.set('testUser', testUser)

    await render(hbs`<EditUserForm @user=testUser}}`);

    assert.ok(this.element);
  });
});
