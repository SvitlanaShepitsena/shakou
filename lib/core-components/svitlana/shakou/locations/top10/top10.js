FamousFramework.component('svitlana:shakou:locations:top10', {
	behaviors: {
		'#top10': {
			'rotation-y': '[[identity|angle]]',
			'position-z': 50,
			'align': [0.28, 0.28],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [80, 80],
			'content': `<img src="{{BASE_URL}}top10.png"/>`,
			style:{
				zIndex:50
			}
		},
	},
	events: {
		'$lifecycle': {
			'post-load': function ($state, $famousNode) {
				var top, prevTime = 0;
				var id = $famousNode.addComponent({
					onUpdate: function (time) {
						$state.set('angle', time / 1000);
						$famousNode.requestUpdateOnNextTick(id);
					}
				});
				//start the loop
				$famousNode.requestUpdateOnNextTick(id);
			}
		}
	},
	states: {
		angle: 0,
	},
	tree: `<node id="top10">
	</node>`
});