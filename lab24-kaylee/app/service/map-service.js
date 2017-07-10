'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('#mapService');

  let service = {};

  service.mapData = {
    house: {
      desc: 'Welcome home!',
      south: 'park'
    },
    park: {
      desc: 'Good for you for getting outside!',
      north: 'house',
      east: 'mall',
      south: 'coffeeShop'
    },
    coffeeShop: {
      desc: 'Yay for caffeine!',
      north: 'park'
    },
    mall: {
      desc: 'Shop till ya drop!',
      west: 'park',
      east: 'bookStore'
    },
    bookStore: {
      desc: 'Time to read Gatsby for the ten-thousandth time...',
      west: 'mall',
      south: 'nailSalon'
    },
    nailSalon: {
      desc: 'Try a new color this time!',
      north: 'bookStore',
      east: 'pizzaPlace'
    },
    pizzaPlace: {
      desc: 'Eat the whole thing... no judgement here.',
      west: 'nailSalon'
    }
  };
  return service;
}]);
