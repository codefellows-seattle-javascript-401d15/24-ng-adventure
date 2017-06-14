'use strict';

require('angular').module('ngAdventure')
.factory('mapService', [
  '$log',
  function($log) {
    $log.debug('Map Service');
    let service = {};
    service.mapData = {
      Mundania: {
        desc: '',
        east: 'IsthmusVillage',
      },
      IsthmusVillage: {
        desc: 'Welcome to Isthmus Village, just outside the gate to Mundania. Go West to Mundania and you can never come back.',
        west: 'Mundania',
        east: 'OgreFenOgreSwamp',
      },
      OgreFenOgreSwamp: {
        desc: 'You\'ve reached the Ogres.',
        west: 'IsthmusVillage',
        south: 'TheElements',
      },
      TheElements: {
        desc: 'You\'ve reached the outside of the elements. A few miles out you can see the beginning of nothing- the void. It looks like it goes on a really long ways.',
        north: 'OgreFenOgreSwamp',
        south: 'GapVillage',
      },
      GapVillage: {
        desc: 'Welcome to the Gap Village',
        north: 'TheElements',
        west: 'NorthVillage',
        south: 'TheGapChasm',
      },
      NorthVillage: {
        desc: 'Welcome to the North VIllage',
        east: 'GapVillage',
      },
      TheGapChasm: {
        desc: 'The gap Chasm',
        north: 'GapVillage',
        south: 'TheForest',
      },
      TheForest: {
        desc: 'Theforest',
        north: 'TheGap',
        west: 'CastleRoogna',
        east: 'TheGoodMagiciansCastle',
        south: 'CastleZombie',
      },
      CastleRoogna: {
        desc: '',
        east: 'TheForest',
      },
      CastleZombie: {
        desc: '',
        north: 'TheForest',
      },
      TheGoodMagiciansCastle: {
        desc: '',
        west: 'TheForest',
      },
    };
    return service;
  },
]);
