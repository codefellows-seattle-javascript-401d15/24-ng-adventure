'use strict'

// require('./scss/reset.scss')
// require('./scss/main.scss')

require('angular').module('ngAdventure', [])

require('./service/map-service.js')
require('./service/player-service.js')

require('./component/game-pad/game-pad.js')
require('./component/player-info/player-info.js')
require('./component/history/player-history.js')
