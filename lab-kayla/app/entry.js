'use strict'

require('./scss/main.scss')

require('angular')
.module('ngAdventure', [])

require('./component/game-pad/game-pad.js')
require('./component/player-info/player-info.js')
require('./component/history/history.js')
