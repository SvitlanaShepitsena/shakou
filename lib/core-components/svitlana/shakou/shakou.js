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
            }
        },
        '#bg': {
            'content': '<img src="{{BASE_URL}}bg.jpg"/>',
            style: function (w, h) {
                return {
                    width: w + 'px',
                    height: h + 'px'
                };
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
			'position-x': function (rootX) {
				return rootX;
			}
		},
		'#bg': {
			'content': '<img src="{{BASE_URL}}bg.png"/>',
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
			'position-x': function (w,rootX) {
				return w+rootX;

			}
		},

		'#liberty': {
			'align-x': 0,
			'content': '<img src="{{BASE_URL}}libertyville.jpg"/>',
			style: function (w, h) {
				return {
					width: w/3 + 'px',
					height: h + 'px'
				};
			}
		},
		'#charles': {
			'align-x': 0.33,
			'content': '<img src="{{BASE_URL}}charles.jpg"/>',
			style: function (w, h) {
				return {
					width: w/3 + 'px',
					height: h + 'px'
				};
			}
		},
		'#barrington': {
			'align-x': 0.66,
			'content': '<img src="{{BASE_URL}}barrington.jpg"/>',
			style: function (w, h) {
				return {
					width: w/3 + 'px',
					height: h + 'px'
				};
			}
		},

	},
	events: {
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
				var width = $state.get('w');
				$state.set('rootX', -width, {duration: 1000});
			}
		}
	},
	states: {
		scale: 1,
		w: 960,
		h: 260,
		rootX: 0
	},
	tree: `<node id="root">
	<!--<slider id="slider"></slider>-->
	<moto id="moto"></moto>
	<clock id="clock"></clock>
	<moto id="moto"></moto>

	<logo id="logo"></logo>
	<node id="bg"></node>
	</node>
	<node id="locations">
	<node id="liberty"></node>
	<node id="charles"></node>
	<node id="barrington"></node>

	</node>`
}).config({
	imports: {
		'svitlana:shakou': [
			'slider',
			'logo',
			'clock',
			'moto'
		],
	}
});