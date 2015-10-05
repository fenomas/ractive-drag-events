# ractive-drag-events

Adds HTML5 drag/drop proxy events to a Ractive element.

Code is loosely inspired by 
[these](https://github.com/sigod/ractive.drag.drop.js/tree/update) updates to 
[this](https://github.com/Nijikokun/ractive.drag.drop.js) module.
Difference with this module is that it applies events to a given element
rather than to all its children, and it doesn't clobber 
the element's `draggable` attribute.

## Usage

 1. Require or include Ractive and this project
 2. Add `on-dragndrop='foo'` to something in the template
 3. Add `ractive.on('foo', fn)` in your source 


## Example

```javascript
	var ractive = new Ractive({
		el: '#container',
		template: '<div on-dragndrop="DND" draggable="true">{{text}}</div>',
		data: {
			text: 'Drag me!'
		}
	})
	
	ractive.on('DND', function(event) {
		console.log(event)
	}
```

See `example/index.html` for a full example.


## Event Object

 * `type` -  One of: [ `start`, `enter`, `over`, `leave`, `drop`, `end` ]
 * `context` -  Ractive context of the **event item**
 * `keypath` -  Ractive keypath of the **event item** 
 * `node` -  HTML element of the **event item**
 * `original` -  the original DOM MouseEvent

Note that the **event item** is the item *being dragged* for start/end events, 
and the item you're *dragging to* for all the others.