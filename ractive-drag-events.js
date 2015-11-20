/*
 *
 * Loosely modeled after: https://github.com/sigod/ractive.drag.drop.js/tree/update
 * 
*/


; (function (root, factory) {
	
	if (typeof module === "object" && module.exports) {
		module.exports = factory(require('ractive'))
	} else if (root.Ractive) {
		factory(root.Ractive)
	} else {
		throw new Error("couldn't find Ractive module to modify")
	}
	
} (this, function (Ractive) {

	var eventNames = ['dragstart', 'dragenter', 'dragover', 'dragleave', 'drop', 'dragend']
	var niceNames = ['start', 'enter', 'over', 'leave', 'drop', 'end']

	function mainHandler(node, fire, event) {
		var type = niceNames[eventNames.indexOf(event.type)]
		fire({
			node: node,
			type: type,
			target: this,
			original: event
		});
	}

	Ractive.events.dragndrop = function (node, fire) {

		var boundHandler = mainHandler.bind(null, node, fire)

		for (var i = 0; i < eventNames.length; i++) {
			node.addEventListener(eventNames[i], boundHandler)
		}

		return {
			teardown: function () {
				for (var i = 0; i < eventNames.length; i++) {
					node.removeEventListener(eventNames[i], boundHandler)
				}
			}
		}

	}

}));




