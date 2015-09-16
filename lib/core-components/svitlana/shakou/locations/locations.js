FamousFramework.component('svitlana:shakou:locations', {
	behaviors: {
		'#locations': {
			'size': [960, 260],
			'style': {
				'background-color': 'rgb(202, 165, 97)'
			},
			'position-x': function (w, rootX, scale) {
				var shift = w > 960 ? 960 : w;
				shift /= scale;
				return shift + rootX;
			}
		},
		'.top10': {
			'$repeat': function (w, scale,h) {
				w = w > 960 ? 960 : w;
				var infoW = (w / 3) / scale;

				var arr = [];
				var liberty={

				};
				var charles={
					'position-x': 300
				};
				arr.push(liberty);
				arr.push(charles);

				return arr;
			}
		},
		'.info': {
			'position-z': 3,
			'position-x': function ($index, w, scale) {
				w = w > 960 ? 960 : w;
				var infoW = (w / 3) / scale;
				return $index * infoW;
			},
			'size': function (w, scale) {
				w = w > 960 ? 960 : w;
				var infoW = (w / 3) / scale;
				var infoH = 0.625 * infoW;
				return [infoW, infoH];
			},
			'$repeat': function ($index, w, scale) {
				w = w > 960 ? 960 : w;
				var infoW = (w / 3) / scale;
				var result = [];
				result.push({
					address: '625 N Milwaukee Ave, Libertyville, IL 60048',
					link: 'http://shakousushi.com/libertyville/'
				});
				result.push({
					address: '312 W. Main St., Saint Charles, IL 60174',
					link: 'http://shakousushi.com/st-charles/'
				});
				result.push({
					address: '121 Main Street, Barrington, IL 60010',
					link: 'http://shakousushi.com/barrington/'
				});
				return result
			}
		},
		'#liberty': {
			'position-y': '8',
			'size': [305, 244],
			'align': [0.014, 0],
			'mount-point': [0.014, 0],
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#libertyImg': {
			opacity: '[[identity|opacityLiberty]]',
			'content': '<a href="http://shakousushi.com/libertyville/" target="_blank"><img src="{{BASE_URL}}libertyville.jpg"/></a>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#libertyImgBlur': {
			'content': '<a href="http://shakousushi.com/libertyville/" target="_blank"><img src="{{BASE_URL}}libertyville-blur.jpg"/></a>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#panel1': {
			'size': [305, 50],
			'style': {
				'background-color': '#212121'
			},
			'opacity': '.8',
			'align': [0.5, 1],
			'mount-point': [0.5, 1],
		},
		'#city1': {
			'size': [305, 26],
			'style': {
				'color': '#F5F5F5',
				'font-size': '26px',
				'text-align': 'center',
			},
			'content': `Libertyville`,
			'align': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
		},
		'#city2': {
			'size': [305, 26],
			'style': {
				'color': '#F5F5F5',
				'font-size': '26px',
				'text-align': 'center',
			},
			'content': `St. Charles`,
			'align': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
		},
		'#city3': {
			'size': [305, 26],
			'style': {
				'color': '#F5F5F5',
				'font-size': '26px',
				'text-align': 'center',
			},
			'content': `Barrington`,
			'align': [0.5, 0.5],
			'mount-point': [0.5, 0.5],
		},
		'#charles': {
			'position-y': '8',
			'size': [305, 244],
			'align': [0.010, 0],
			'mount-point': [0.010, 0],
			'position-x': function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = (w / 3) / scale;
				return imgW;
			},
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#charlesImg': {
			opacity: '[[identity|opacityCharles]]',
			'content': '<a href="http://shakousushi.com/st-charles/" target="_blank"><img src="{{BASE_URL}}charles.jpg"/></a>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#charlesImgBlur': {
			'content': '<a href="http://shakousushi.com/st-charles/" target="_blank"><img src="{{BASE_URL}}charles-blur.jpg"/></a>',
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
			'position-y': '8',
			'size': [305, 244],
			'align': [0.006, 0],
			'mount-point': [0.006, 0],
			'position-x': function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = (w / 3) / scale;
				return 2 * imgW;
			},
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			}
		},
		'#barringtonImg': {
			opacity: '[[identity|opacityBarrington]]',
			'content': '<a href="http://shakousushi.com/barrington/" target="_blank"><img src="{{BASE_URL}}barrington.jpg"/></a>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#barringtonImgBlur': {
			'content': '<a href="http://shakousushi.com/barrington/" target="_blank"><img src="{{BASE_URL}}barrington-blur.jpg"/></a>',
			style: function (w, scale) {
				w = w > 960 ? 960 : w;
				var imgW = scale * (w / 3);
				return {
					width: imgW + 'px',
					height: imgW * .625 + 'px'
				};
			},
		},
		'#backBtn': {
			align: [0.01, .5],
			origin: [0, .5],
			'position-z': 4,
			'opacity': .8,
			'content': '<img style="display:block;margin:10px 8px" src="{{BASE_URL}}arrow-back.png">',
			'size': [40, 40],
			style: {
				zIndex: 4,
				'cursor': 'pointer',
				'background-color': '#212121',
				'color': 'white',
				'border-radius': '50%',
			}
		},
	},
	events: {
		'$public': {
			'rootX': '[[setter]]',
			'w': '[[setter]]',
			'scale': '[[setter]]'
		},
		'.info': {
			'mouseover': function ($index, $state, $dispatcher, $repeatPayload) {
				switch ($index) {
					case 0:
						$state.set('opacityLiberty', 0, {duration: 500});
						$dispatcher.broadcast('show-info', $repeatPayload);
						break;
					case 1:
						$state.set('opacityCharles', 0, {duration: 500});
						$dispatcher.broadcast('show-info', $repeatPayload);
						break;
					case 2:
						$state.set('opacityBarrington', 0, {duration: 500});
						$dispatcher.broadcast('show-info', $repeatPayload);
						break;
				}
			},
			'mouseout': function ($index, $state, $dispatcher, $repeatPayload) {
				switch ($index) {
					case 0:
						$dispatcher.broadcast('hide-info', $repeatPayload);
						$state.set('opacityLiberty', 1, {duration: 500});
						break;
					case 1:
						$state.set('opacityCharles', 1, {duration: 500});
						$dispatcher.broadcast('hide-info', $repeatPayload);
						break;
					case 2:
						$dispatcher.broadcast('hide-info', $repeatPayload);
						$state.set('opacityBarrington', 1, {duration: 500});
						break;
				}
			},
		},
		'#backBtn': {
			'click': function ($dispatcher, $state) {
				$dispatcher.emit('show-front');
			},
		},
	},
	states: {
		opacityLiberty: 1,
		opacityCharles: 1,
		opacityBarrington: 1,
		rootX: 0,
		w: 0,
		scale: 0
	},
	tree: `<node id="locations">

	<node id="backBtn"> </node>
	<top10 class="top10"> </top10>

	<info class="info"> </info>

	<node id="liberty">
	<node id="libertyImgBlur"></node>
	<node id="libertyImg"></node>
	<node id="panel1">
	<node id="city1"></node>
	 </node> </node>

	<node id="charles">

	<node id="charlesImgBlur"></node>
	<node id="charlesImg"></node>
	<node id="panel1">
	<node id="city2"></node>
	</node>
	 </node>
	<node id="barrington">

	<node id="barringtonImgBlur"></node>
	<node id="barringtonImg"></node>
	<node id="panel1">
	<node id="city3"></node>
	</node>
	</node>
	</node>`
}).config({
	imports: {
		'svitlana:shakou:locations': [
			'info',
			'top10'
		],
	}
});

