'use strict';

//require('./scss/main.scss');

require('angular').module('ngAdventure', []);

require('./service/map-service.js');
require('./service/player-service.js');

require('./scss/base.scss');
require('./scss/reset.scss');

require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/history/history.js');
