'use strict';

require('angular').module('ngAdventure', []);

require('./service/map-service');
require('./service/player-service');

require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/history/history.js');

require('./scss/base.scss');
require('./scss/reset.scss');