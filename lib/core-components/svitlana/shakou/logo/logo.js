FamousFramework.component('svitlana:shakou:slider', {
	behaviors: {
		'#slider': {
			'align': [0.3, 0.2],
			'origin': [0.5, 0.5],
			'size': [80, 40],
			'mount-point': [0.5, 0.5],
			'style':{
				'background-color':'white'
			}
		},
		'#imgSlider': {
			'src': '{{BASE_URL}}sushi.png',
			'style':{
				'width':'80px',
				'height':'40px'
			}

		},

	},
	events: {},
	states: {},
	tree: `<node id="slider">
	<img id="imgSlider"/>
	</node>`
});