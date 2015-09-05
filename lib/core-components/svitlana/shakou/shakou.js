FamousFramework.component('svitlana:shakou', {
	behaviors: {
		'align': [0.5, 0.5],
		'origin': [0.5, 0.5],
		'mount-point': [0.5, 0.5],
		'size': function (rootWidth, rootHeight) {
			return [rootWidth, rootHeight];
		},
		'style': {
			/*Setting the perspective changes the apparent distance between the screen and 3D objects*/
			'perspective': '100px'
		}
	},
	events: {
		'#box': {
			'click': function($state) {
				$state.set('rotation', $state.get('rotation') + 10, {
					duration: 1000,
					curve: 'easeOut'
				});
			}
		}
	},
	states: {
		rotation: 0
	},
	tree: `<node id="box"></node>`
});