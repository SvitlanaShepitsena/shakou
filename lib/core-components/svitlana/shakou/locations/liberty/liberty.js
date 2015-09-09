FamousFramework.component('svitlana:shakou:liberty', {
	behaviors: {
		'#libertyInfo': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'content': `<img src="{{BASE_URL}}sushi.png" style="width:80px;height:40px"/>`,
			'position-z': '1',
		},
	},
	events: {},
	states: {},
	tree: `<node id="libertyInfo">
	</node>`
});