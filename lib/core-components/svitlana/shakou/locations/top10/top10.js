FamousFramework.component('svitlana:shakou:locations:top10', {
	behaviors: {
		'#slider': {
			'align': [0.8, 0.1],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [80, 40],
			'content': `<img src="{{BASE_URL}}sushi.png" style="width:80px;height:40px"/>`,
			'position-z': '1',
		},
	},
	events: {},
	states: {},
	tree: `<node id="slider">
	</node>`
});