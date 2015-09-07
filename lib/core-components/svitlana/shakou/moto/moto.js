FamousFramework.component('svitlana:shakou:moto', {
    behaviors: {
        '#moto': {
            'position-z': '1',
        },
        '#time': {
            'align': [0.36, 0.07],
            'origin': [0.36, 0.07],
            'mount-point': [0.36, 0.07],
            'size': [600, 38],
            'opacity': '[[identity|opacityTime]]',
            'content': `<span>It is perfect time to book a table!</span>`,
            'style': function (yellowColor, fontFamily) {
                return {
                    'color': '#BDBDBD',
                    'font-family': fontFamily,
                    'font-size': '38px',
                    'text-align': 'center',
                }
            }
        },
        '#table': {
            'align': [0.2, 0.3],
            'origin': [0.2, 0.3],
            'mount-point': [0.2, 0.3],
            'size': [200, 34],
            'opacity': '[[identity|opacityTable]]',
            'content': `<div style="margin-top:6px">BOOK A TABLE</div>`,
            'style': function (fontFamily) {
                return {
                    'font-family': fontFamily,
                    'font-size': '20px',
                    'color': 'white',
                    'text-align': 'center',
                    'font-weight': '700',
                    'background-color': '#EF5350',
                }
            }
        }
    },
    events: {

        '$lifecycle': {
            'post-load': function ($timelines, $state) {
                $timelines.get('show-time').start({
                    duration: 2000
                }, function () {

                    $timelines.get('show-table').start({
                        duration: 3000
                    }, function () {

                    });
                });
            }
        }

    },
    states: {
        opacityTime: 0,
        opacityTable: 0,
        yellowColor: '#FFCD3A',
        fontFamily: 'Lato, Helvetica, Arial, sans-serif'
    },
    tree: `<node id="moto">
	<node id="time"> </node>
	<node id="table"> </node>
	</node>`
}).timelines({
    'show-time': {
        '#time': {
            'opacity': {
                '0%': {value: 0, curve: 'easeOutBounce'},
                '100%': {value: 1, curve: 'easeOutBounce'}

            }
        }
    },
    'show-table': {
        '#table': {
            'opacity': {
                '0%': {value: 0, curve: 'easeOutBounce'},
                '100%': {value: 1, curve: 'easeOutBounce'}

            }
        },
    },

});

