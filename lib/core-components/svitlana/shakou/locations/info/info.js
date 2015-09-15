FamousFramework.component('svitlana:shakou:locations:info', {
    behaviors: {
        '.info': {
            opacity: '[[identity]]',
            'style': function (color, fontFamily) {
                return {
                    'color': color,

                    'font-family': fontFamily,
                    'font-size': '25px',
                    'text-align': 'center',
                }
            },
        },
        '#address': {
            'align': [0.02, .16],
            'style': function (color, fontFamily) {
                return {
                    'color': '#CAA561',
                    'font-family': fontFamily,
                    'font-weight': 'bold',
                    'font-size': '20px',
                    'text-align': 'center',
                }
            },
            content: function (address) {
                var coma = address.indexOf(',') + 1;
                var adr1 = address.substr(0, coma);
                var adr2 = address.substr(coma);
                return `<div>${adr1}<br/>${adr2}</div>`;
            }
        },
        '#link': {
            'align': [0.2, 0.63],
            'origin': [0.5, 0.6],
            'size': [200, 34],
            'style': function (fontFamily) {
                return {
                    'border-radius': 7,
                    'cursor': 'pointer',
                    'font-family': fontFamily,
                    'font-size': '19px',
                    'text-align': 'center',
                    'vertical-align': 'center',
                    'font-weight': '700',
                    'background-color': '#CAA561'
                }
            }
        },
        '#linkText': {
            'align': [0.5, 0.7],
            'origin': [0.5, 0.5],
            'mount-point': [0.5, 0.5],
            'content': function (link) {
                return `<a href="${link}" target="_blank" style="color:white;padding-top:3px;text-decoration:none!important;">ORDER A TABLE</a>`;
            },
        },
    },
    events: {
        $self: {
            'show-info': function ($payload, $state) {
                var link = $state.get('link');
                if (link === $payload.link) {
                    $state.set('opacity', 1, {duration: 500});
                }
            },
            'hide-info': function ($payload, $state) {

                var link = $state.get('link');
                if (link === $payload.link) {
                    $state.set('opacity', 0, {duration: 500});
                }
            }
        },
        $public: {
            address: '[[setter]]',
            link: '[[setter]]',
            index: '[[setter]]'
        }
    },
    states: {
        opacity: 0,
        fontFamily: 'Lato, Helvetica, Arial, sans-serif',
        address: '',
        index: -1,
        link: ''
    },
    tree: `<node class="info">
	<node id="address"></node>
	<node id="link">

	<node id="linkText"></node>
	</node>

	</node>`
});