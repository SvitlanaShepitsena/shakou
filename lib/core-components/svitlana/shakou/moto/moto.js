FamousFramework.component('svitlana:shakou:moto', {
	behaviors: {
		'#moto': {
			'position-z': '1',
		},
		'#life': {
			'align': [0.5, 0.6],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'content': `<span>Life is passing by and...</span>`,
			'style' : function(color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-size' : '50px',
					'text-align' : 'center',
				}
			}
		},
		'#time': {
			'align': [0.5, 0.7],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'content': `<span>Time waits for no one</span>`,
			'style' : function(color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-size' : '50px',
					'text-align' : 'center',
				}
			}
		},
		'#welcome': {
			'align': [0.5, 0.8],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'content': `<span>Time with us you will never regret. </span>`,
			'style' : function(color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-size' : '50px',
					'text-align' : 'center',
				}
			}
		},
	},
	events: {

		'$lifecycle': {
			'post-load': function ($timelines) {
				//$timelines.get('move-title').start({
				//	duration: 1000
				//}, function () {
				//
				//	$timelines.get('move-bottom').start({
				//		duration: 1000
				//	}, function () {
				//
				//		$timelines.get('move-text').start({
				//			duration: 1000
				//		}, function () {
				//
				//		});
				//	});
				//});
			}
		}

	},
	states: {
		color: '#CA5B5B',
		fontFamily: 'Lato, Helvetica, Arial, sans-serif'
	},
	tree: `<node id="moto">
	<node id="life"> </node>
	<node id="time"> </node>
	<node id="welcome"> </node>
	</node>`
}).timelines({
	'move-title': {
		'#title':{
			'position-y':{
				'0%': {value: -100, curve: 'easeOutBounce'},
				'100%': {value: 300, curve: 'easeOutBounce'}

			}
		}
	},
	'move-bottom': {
		'#bottom':{
			'position-y':{
				'0%': {value: 0, curve: 'easeOutBounce'},
				'100%': {value: -50, curve: 'easeOutBounce'}

			}
		},
	},
	'move-text': {
		'#text':{
			'position-x':{
				'0%': {value: -660, curve: 'easeOutBounce'},
				'100%': {value: 44, curve: 'easeOutBounce'}

			}
		}
	},

});

