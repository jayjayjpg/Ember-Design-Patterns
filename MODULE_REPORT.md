## Module Report
### Unknown Global

**Global**: `Ember.ViewUtils`

**Location**: `app/pods/components/dropdown-list-item/component.js` at line 17

```js
    this._super(...arguments);

    let { firstNode, lastNode } = Ember.ViewUtils.getViewBounds(this);

    let firstElement = firstNode instanceof Text ? firstNode.nextElementSibling : firstNode
```
