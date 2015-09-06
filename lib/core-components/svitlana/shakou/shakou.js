FamousFramework.component('svitlana:shakou', {
	behaviors: {
		'#root': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [959, 280],
			scale: function (scale) {
				return [scale, scale];
			},
			'style': {
				'perspective': '1000px',
			}
		},
		'#bg': {
			'content': `<img src="{{BASE_URL}}bg.jpg"/>`
		},
		'#clock': {
			'scale': [0.4, 0.4]
		},
	},
	events: {
		'$self': {
			'size-change': function ($state, $event, $famousNode) {
				var width = $famousNode.getSize()[0];
				var ratio = width >= 960 ? 1 : (width / 960).toFixed(2);
				$state.set('scale', ratio);
			}
		}
	},
	states: {
		scale: 1,
	},
	tree: `<node id="root">
	<!--<slider id="slider"></slider>-->
	<!--<clock id="clock"></clock>-->

	<logo id="logo"></logo>
	<node id="bg"></node>
	</node>`
}).config({
	imports: {
		'svitlana:shakou': [
			'slider',
			'logo',
			'clock'
		],
	}
});