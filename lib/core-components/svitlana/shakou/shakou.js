

FamousFramework.component('svitlana:shakou', {
	behaviors: {
		'#root': {
			'align': [0.5, 0.5],
			'origin': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
			'size': [960, 269],
			'style': {
				'perspective': '1000px',
				'background-color': 'black',
			}
		},
		'#banner': {
			'src': "{{BASE_URL}}shakou.png"
		},
	},
	events: {},
	states: {},
	tree: `<node id="root">
	<node id="bannerWrap">
		<img id="banner"> </img>
		</node>
	</node>`
});