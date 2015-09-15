FamousFramework.component('svitlana:shakou', {
	behaviors: {
		'#root': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [960, 260],
			scale: function (scale) {
				return [scale, scale];
			},
			'style': {
				'background-color': 'grey',
				'perspective': '1000px',
			},
		},
		'#wrap': {
			'position-x': function (rootX) {
				return rootX;
			}
		},
		'#bg': {
			'content': '<img src="{{BASE_URL}}bg.jpg"/>',
			style: function (w, h) {
				return {
					width: w + 'px',
					height: h + 'px'
				};
			}
		},
		'#clock': {
			'align': [0.115, 0.2],
			'mount-point': [0.2, 0.15],
			'origin': [0.1, 0.1],
			'scale': [0.3, 0.3]
		},
		'#locations': {
			'w': '[[identity]]',
			'scale': '[[identity]]',
			'rootX': '[[identity]]'
		},
	},
	events: {
		/*Comment on production*/
		//'$lifecycle': {
		//    'post-load': function ($state) {
		//	    $state.set('rootX', - $state.get('w'),{duration:300});
		//    }
		//},
		'$self': {
			'size-change': function ($state, $event, $famousNode) {
				var width = $famousNode.getSize()[0];
				var height = $famousNode.getSize()[1];
				$state.set('w', width);
				$state.set('h', height);
				var ratio = width >= 960 ? 1 : (width / 960).toFixed(2);
				$state.set('scale', ratio);
			},
			'show-locations': function ($state) {
				var scale = $state.get('scale');
				var w = $state.get('w');
				var shift = w > 960 ? 960 : w;

				$state.set('rootX', -shift/scale, {duration: 1000});
			},
			'show-front': function ($state) {
				var w = $state.get('w');
				var shift = w > 960 ? 960 : w;
				$state.set('rootX', 0, {duration: 1000});
			}
		},
	},
	states: {
		scale: 1,
		rootX: 0,
		w: 960,
		h: 260
	},
	tree: `<node id="root">
	<node id="wrap">
	<clock id="clock"></clock>
	<moto id="moto"></moto>
	<logo id="logo"></logo>
	<node id="bg"></node>
</node>
<locations id="locations"></locations>

	</node>`
}).config({
	imports: {
		'svitlana:shakou': [
			'locations',
			'logo',
			'clock',
			'moto'
		],
	}
});