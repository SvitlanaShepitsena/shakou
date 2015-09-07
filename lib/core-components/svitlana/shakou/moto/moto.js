FamousFramework.component('svitlana:shakou:moto', {
	behaviors: {
		'#moto': {
			'position-z': '1',
		},
		'#time': {
			'align': [0.36, 0.065],
			'origin': [0.36, 0.065],
			'mount-point': [0.36, 0.065],
			'size': [600, 38],
			'opacity': '[[identity|opacityTime]]',
			'content': `<span>It is a perfect time to book a table!</span>`,
			'style': function (yellowColor, fontFamily) {
				return {
					'color': '#CAA561',
					'font-family': fontFamily,
					'font-size': '38px',
					'text-align': 'center',
				}
			}
		},
		'#table': {
			'align': [0.35, 0.28],
			'origin': [0.35, 0.28],
			'mount-point': [0.35, 0.28],
			'size': [200, 34],
			'opacity': '[[identity|opacityTable]]',
			'content': `<div style="margin-top:3px">FIND A TABLE <img style="display: inline-block;margin-left:3px;margin-top:3px" width="18px" src="{{BASE_URL}}arrow-20.png"></div>`,
			'style': function (fontFamily) {
				return {
					'cursor': 'pointer',
					'font-family': fontFamily,
					'font-size': '19px',
					'color': '#FAFAFA',
					'text-align': 'center',
					'font-weight': '700',
					'background-color': '#EF5350',
				}
			}
		},
		//'#badge': {
		//    'size': [100, 100],
		//    'align': [0.02, 0.8],
		//    'origin': [0.02, 0.8],
		//    'mount-point': [0.02, 0.8],
		//    'content': `<img style="display:block" width="100px" height="100px" src="http://shakousushi.com/st-charles/wp-content/uploads/2015/05/winner-dinner-choice-2015.png"></div>`,
		//}
	},
	events: {
		'$lifecycle': {
			'post-load': function ($timelines, $state) {
				$timelines.get('show-time').start({
					duration: 2000
				}, function () {
					$timelines.get('show-table').start({
						duration: 3000
					}, function () {
					});
				});
			}
		},
		'#table': {
			'click': function ($dispatcher) {
				$dispatcher.emit('show-locations');
			},
		}
	},
	states: {
		opacityTime: 0,
		opacityTable: 0,
		yellowColor: '#FFCD3A',
		fontFamily: 'Lato, Helvetica, Arial, sans-serif'
	},
	tree: `<node id="moto">
	<node id="time"> </node>
	<node id="table"> </node>
	<node id="badge"> </node>
	</node>`
}).timelines({
	'show-time': {
		'#time': {
			'opacity': {
				'0%': {value: 0, curve: 'easeOutBounce'},
				'100%': {value: 1, curve: 'easeOutBounce'}
			}
		}
	},
	'show-table': {
		'#table': {
			'opacity': {
				'0%': {value: 0, curve: 'easeOutBounce'},
				'100%': {value: 1, curve: 'easeOutBounce'}
			}
		},
	},
});

