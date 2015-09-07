FamousFramework.component('svitlana:shakou:moto', {
	behaviors: {
		'#moto': {
			'position-z': '1',
		},
		'#time': {
			'align': [0.5, 0.6],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			opacity:'[[identity|opacityTime]]',
			'content': `<span>Time with us you will remember</span>`,
			'style' : function(color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-size' : '50px',
					'text-align' : 'center',
				}
			}
		},
		'#table': {
			'align': [0.5, 0.8],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			opacity:'[[identity|opacityTable]]',
			'content': `<a href="http://shakousushi.com/" >Book a table</a>`,
			'style' : function(color, fontFamily) {
				return {
					'color': 'green',
					'font-family': fontFamily,
					'font-size' : '50px',
					'text-align' : 'center',
				}
			}
		}
	},
	events: {

		'$lifecycle': {
			'post-load': function ($timelines,$state) {
				$timelines.get('show-time').start({
					duration: 2000
				}, function () {

					$timelines.get('show-table').start({
						duration: 3000
					}, function () {

					});
				});
			}
		}

	},
	states: {
		opacityTime:0,
		opacityTable:0,
		color: '#CA5B5B',
		fontFamily: 'Lato, Helvetica, Arial, sans-serif'
	},
	tree: `<node id="moto">
	<node id="time"> </node>
	<node id="table"> </node>
	</node>`
}).timelines({
	'show-time': {
		'#time':{
			'opacity':{
				'0%': {value: 0, curve: 'easeOutBounce'},
				'100%': {value: 1, curve: 'easeOutBounce'}

			}
		}
	},
	'show-table': {
		'#table':{
			'opacity':{
				'0%': {value: 0, curve: 'easeOutBounce'},
				'100%': {value: 1, curve: 'easeOutBounce'}

			}
		},
	},

});

