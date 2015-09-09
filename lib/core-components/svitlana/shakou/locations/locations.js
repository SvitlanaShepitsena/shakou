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
        '#liberty': {
            'content': '<a href="http://shakousushi.com/libertyville/" target="_blank"><img src="{{BASE_URL}}libertyville.jpg"/></a>',
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
        '#panel1': {
            'size': [305, 50],
            'style': {
                'background-color': '#212121',
                'cursor': 'pointer'
            },
            'opacity': '.8',
            'align': [0.5, 1],
            'mount-point': [0.5, 1],
        },
        '#city1': {
            'size': [305, 26],
            'style': {
                'color': '#F5F5F5',
                'cursor': 'pointer',
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
                'cursor': 'pointer',
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
                'cursor': 'pointer',
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
            'content': '<a href="http://shakousushi.com/barrington" target="_blank"><img src="{{BASE_URL}}barrington.jpg"/></a>',

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
            align: [0.01, .5],
            origin: [0.01, .5],
            'position-z': 1,
            'opacity': .8,
            'content': '<img style="display:block;margin:10px 8px" src="{{BASE_URL}}arrow-back.png">',
            'size': [40, 40],
            style: {
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
        '#backBtn': {
            'click': function ($dispatcher, $state) {
                $dispatcher.emit('show-front');
            },
        },
    },
    states: {
        rootX: 0,
        w: 0,
        scale: 0
    },
    tree: `<node id="locations">

	<node id="backBtn"> </node>
	<node id="liberty">
	<node id="panel1">
	<node id="city1"></node>
	 </node>
	</node>
	<node id="charles">
	<node id="panel1">
	<node id="city2"></node>
	</node>
	 </node>
	<node id="barrington">
	<node id="panel1">
	<node id="city3"></node>
	</node>
	</node>
	</node>`
});

