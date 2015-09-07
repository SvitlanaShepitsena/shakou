FamousFramework.component('svitlana:shakou:logo', {
    behaviors: {
        '#logo': {
            'size': [600, undefined],
            'align': [0.2, 0],
            'origin': [0.2, 0],
            'mount-point': [0.2, 0],
            'position-z': '1',
        },
        '#title': {
            'align': [0.114, 0],
            'mount-point': [0, 0],
            'origin': [0, 0],
            'size': [585, 97],
            'content': `<img src="{{BASE_URL}}title.png"/>`,
            'position-y': '[[identity|titleY]]'
        },
        '#text': {
            'align': [0, 0.738],
            'origin': [0, 0],
            'size': [true, true],
            'mount-point': [0.5, 0.5],
            'content': `<img src="{{BASE_URL}}text.png"/>`,
            'position-x': '[[identity|textX]]'
        },
        '#bottom': {
            'align': [0.65, 1],
            'origin': [0, 0],
            'mount-point': [0.5, 0.5],
            'size': [12, 25],
            'content': `<img src="{{BASE_URL}}bottom.png"/>`,
            'position-y': '[[identity|bottomY]]'
        },
    },
    events: {

        '$lifecycle': {
            'post-load': function ($timelines) {
                $timelines.get('move-title').start({
                    duration: 1000
                }, function () {

                    $timelines.get('move-bottom').start({
                        duration: 1000
                    }, function () {

                        $timelines.get('move-text').start({
                            duration: 1000
                        }, function () {

                        });
                    });
                });
            }
        }

    },
    states: {
        titleY: -100,
        bottomY: 0,
        textX: -660,
    },
    tree: `<node id="logo">
	<node id="title"> </node>
	<node id="bottom"> </node>
	<node id="text"> </node>
	</node>`
}).timelines({
    'move-title': {
        '#title': {
            'position-y': {
                '0%': {value: -80, curve: 'easeOutBounce'},
                '100%': {value: 95, curve: 'easeOutBounce'}

            }
        }
    },
    'move-text': {
        '#text': {
            'position-x': {
                '0%': {value: -650, curve: 'easeOutBounce'},
                '100%': {value: 207, curve: 'easeOutBounce'}

            }
        }
    },
    'move-bottom': {
        '#bottom': {
            'position-y': {
                '0%': {value: 0, curve: 'easeOutBounce'},
                '100%': {value: -20, curve: 'easeOutBounce'}

            }
        },
    },

});

