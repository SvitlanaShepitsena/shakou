FamousFramework.component('svitlana:shakou:locations', {
	behaviors: {
		'#locations': {
			'position-x': function (w, rootX, scale) {
				var shift = w > 960 ? 960 : w;
				shift /= scale;
				return shift + rootX;
			}
		},
		'#liberty': {
			'content': '<img src="{{BASE_URL}}libertyville.jpg"/>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#charles': {
			'position-x': function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = (w / 3) / scale;
				return imgW;
			},
			'content': '<img src="{{BASE_URL}}charles.jpg"/>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#barrington': {
			'position-x': function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = (w / 3) / scale;
				return 2*imgW;
			},
			'content': '<img src="{{BASE_URL}}barrington.jpg"/>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			}
		},
		'#backBtn': {
			align: [0, .5],
			origin: [0, .5],
			'position-z': 1,
			'content': '<span><<<</span>',
			'size': [30, 30],
			style: {
				'cursor': 'pointer',
				'background-color': 'red',
			}
		},
	},
	events: {
		'$public': {
			'rootX': '[[setter]]',
			'w': '[[setter]]',
			'scale': '[[setter]]'
		},
		'#backBtn': {
			'click': function ($dispatcher, $state) {
				$dispatcher.emit('show-front');
			},
		},
	},
	states: {
		rootX: 0,
		w: 0,
		scale: 1
	},
	tree: `<node id="locations">

	<node id="backBtn"> </node>
	<node id="liberty"> </node>
	<node id="charles"> </node>
	<node id="barrington"> </node>
	</node>`
});

