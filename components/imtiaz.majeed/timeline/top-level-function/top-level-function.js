BEST.scene('imtiaz.majeed:timeline:top-level-function', 'HEAD', {
    behaviors: {
        '#wrapper': {
            'align': [0.5, 0.5]
        },
        '#square': {
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'style': function() {
                return {
                    'background-color': 'red',
                }
            }
        }
    },
    events: {
        '$lifecycle': {
            'post-load': function($timelines) {
                $timelines.get('intro').start({ duration: 1000 });
            }
        },
        '#square': {
            'ui-click': function($timelines) {
                $timelines.get('spinAround').start({ duration: 1000 });
            }
        }
    },
    states: {},
    tree: 'top-level-function.html'
})
.timelines({
    'intro': {
        '#square': {
            'size': {
                '0%':     { value: [200, 200], curve: 'easeInOut' },
                '50%':    { value: [400, 400], curve: 'easeInOut' },
                '100%':   { value: [200, 200] }
            },
            'position': {
                '0%':     { value: [0, 0],       curve: 'outBounce' },
                '40%':    { value: [-200, -200], curve: 'outBounce' },
                '80%':    { value: [200, 200],   curve: 'outBounce' },
                '100%':   { value: [0, 0]      }
            },
            'rotation-z': {
                '0%':     { value: 0,         curve: 'easeInOut' },
                '50%':    { value: Math.PI/2, curve: 'easeInOut' },
                '100%':   { value: Math.PI*4 }
            }
        }
    },
    'spinAround': {
        '#square': {
            'rotation-z': {
                '0%':     { value: 0,         curve: 'easeInOut' },
                '50%':    { value: Math.PI/2, curve: 'easeInOut' },
                '100%':   { value: Math.PI*4 }
            }
        }
    }
});