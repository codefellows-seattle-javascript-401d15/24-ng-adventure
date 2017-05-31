'use strict';

// require('./scss/main.scss');

require('angular')
.module('ngAdventure', []);

require('./services/map-service.js');
require('./services/player-service.js');

require('./components/game-pad/game-pad.js');
require('./components/player-info/player-info.js');
require('./components/history/history.js');
