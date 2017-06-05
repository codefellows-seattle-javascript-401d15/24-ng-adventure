'use strict';

require('angular')
.module('ngAdventure')
.factory('mapService', ['$log', function($log) {
  $log.debug('Map Service');

  let service = {};

  service.mapData = {
    futureMeals: {
      desc: 'Future Meals: this is where Abs thinks about all of her future meals, so that she has something to live for.',
      south: 'realityTvFeuds'
    },
    realityTvFeuds: {
      desc: 'Reality TV Feuds: here\'s where she keeps info of all the Dance Moms, KKTK, and ANTM fueds!!',
      north: 'futureMeals',
      east: 'childhoodTraumas',
      south: 'codeFellowsResubmits'
    },
    codeFellowsResubmits: {
      desc: 'Code Fellows Resubmits: this room is very large bc it\'s where Abs keeps of the broken code and unfinished resubmits she\'s currently supressing',
      north: 'realityTvFeuds'
    },
    childhoodTraumas: {
      desc: 'Childhood Traumas: whoops! Wrong turn! We\'re just going to get out of here ASAP!',
      west: 'realityTvFeuds',
      east: 'goats'
    },
    goats: {
      desc: 'Goats: goat memes live here',
      west: 'childhoodTraumas',
      south: 'unpaidParkingTickets'
    },
    unpaidParkingTickets: {
      desc: 'Unpaid Parking Tickets: this room holds everything from Bruce Springsteen trivia, to ghost stories, to recipes from my grandma, to unpaid parking tickets, to that time I listened to the Communist Manifesto on audiobook.',
      north: 'goats',
      east: 'chocolateCake'
    },
    chocolateCake: {
      desc: 'Chocolate cake: bc in the end it all leads back to food!',
      west: 'unpaidParkingTickets'
    }
  }
  return service;
}])
