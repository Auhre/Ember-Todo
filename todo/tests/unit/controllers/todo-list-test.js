import { module, test } from 'qunit';
import { setupTest } from 'todo/tests/helpers';

module('Unit | Controller | todo-list', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todo-list');
    assert.ok(controller);
  });
});
