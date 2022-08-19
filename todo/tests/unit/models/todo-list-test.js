import { module, test } from 'qunit';
import { setupTest } from 'todo/tests/helpers';

module('Unit | Model | todo list', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('todo-list', {});
    assert.ok(model);
  });
});
