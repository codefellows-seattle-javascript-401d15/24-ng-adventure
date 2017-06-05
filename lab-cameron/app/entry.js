'use strict';

require('./scss/main.scss');

require('angular')
.module('horrorHouse', []);

require('./service/map-service');
require('./service/player-service');

require('./component/game-pad/game-pad.js');
require('./component/player-info/player-info.js');
require('./component/history/history.js');
