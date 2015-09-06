

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
		'#slider': {
			'size': [40, 20]
		},
		'#banner': {
			'src': "{{BASE_URL}}shakou-bg.jpg"
		},

	},
	events: {},
	states: {},
	tree: `<node id="root">
	<!--<slider id="slider"></slider>-->
	<node id="bannerWrap">
		<img id="banner"> </img>
		</node>
	</node>`
}) .config({

	imports: {
		'svitlana:shakou': [
			'slider',
		],
	}

});