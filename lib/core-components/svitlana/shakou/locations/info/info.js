FamousFramework.component('svitlana:shakou:locations:info', {
	behaviors: {
		'.info': {
			opacity: '[[identity]]',
			'style': function (color, fontFamily) {
				return {
					'color': color,

					'font-family': fontFamily,
					'font-size': '25px',
					'text-align': 'center',
				}
			},
		},
		'#address': {
			'align': [0.02, .16],
			'style': function (color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-weight': 'bold',
					'font-size': '25px',
					'text-align': 'center',
				}
			},
			content: function (address) {
				var coma = address.indexOf(',') + 1;
				var adr1 = address.substr(0, coma);
				var adr2 = address.substr(coma);
				return `<div>${adr1}<br/>${adr2}</div>`;
			}
		},
		'a': {
			'style': function (color, fontFamily) {
				return {
					'color': color,
					'font-family': fontFamily,
					'font-size': '30px',
					'text-decoration': 'none',
					'text-align': 'center',
				}
			}
		},
		'#link': {
			'align': [0.2, 0.63],
			'origin': [0.5, 0.6],
			'size': [200, 34],
			'content': function (link) {
				return `<a href="${link}"><div style="color:white;margin-top:3px;text-decoration:none">ORDER A TABLE</div></a>`;
			},
			'style': function (fontFamily) {
				return {
					'border-radius': 7,
					'cursor': 'pointer',
					'font-family': fontFamily,
					'font-size': '19px',
					'text-align': 'center',
					'font-weight': '700',
					'background-color': 'green'
				}
			}
		},
	},
	events: {
		$self: {
			'show-info': function ($payload, $state) {
				var link = $state.get('link');
				if (link === $payload.link) {
					$state.set('opacity', 1, {duration: 500});
				}
			},
			'hide-info': function ($payload, $state) {

				var link = $state.get('link');
				if (link === $payload.link) {
					$state.set('opacity', 0, {duration: 500});
				}
			}
		},
		$public: {
			address: '[[setter]]',
			link: '[[setter]]',
			index: '[[setter]]'
		}
	},
	states: {
		opacity: 0,
		color: 'green',
		fontFamily: 'Lato, Helvetica, Arial, sans-serif',
		address: '',
		index: -1,
		link: ''
	},
	tree: `<node class="info">
	<node id="address"></node>
	<node id="link"></node>

	</node>`
});