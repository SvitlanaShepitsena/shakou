FamousFramework.component('svitlana:shakou:logo', {
	behaviors: {

		'#logo': {

		},
		'#title': {
			'align': [0.3, 0.2],
			'origin': [0.5, 0.5],
			'size': [80, 40],
			'mount-point': [0.5, 0.5],
			'style':{
				'background-color':'white'
			},
			'content':`<img src="{{BASE_URL}}title.png"/>`
		},
		'#text': {
			'align': [0.3, 0.2],
			'origin': [0.5, 0.5],
			'size': [80, 40],
			'mount-point': [0.5, 0.5],
			'style':{
				'background-color':'white'
			},
			'content':`<img src="{{BASE_URL}}text.png"/>`
		},
	},
	events: {},
	states: {},
	tree: `<node id="logo">
	<node id="title">

	</node>
	<node id="text">

	</node>
	</node>`
});