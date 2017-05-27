'use strict';

require('angular')
.module('ngAdventure', []);

require('./service/map-service.js');
require('./service/player-service.js');
require('./scss/reset.scss');
require('./scss/base.scss');
require('./component/history/history.scss');
require('./component/player-info/_player-info.scss');
require('./component/game-pad/_game-pad.scss');

require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/history/history.js');
