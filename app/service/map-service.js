'use strict'

require('angular')
  .module('ngAdventure')
  .factory('mapService', ['$log', function($log) {
    $log.debug('#mapService')

    let service = {}

    service.mapData = {
      space: {
        desc: 'You are a blob, flying through space attached to a rock. Everything was dark and peaceful until now! Your rock just hit the atmosphere of a planet and you are about to make a crash landing. Fortunately you caught a glimpse of the planet and might be able to control where you land: in the open ocean, near a small island, or on the mainland.',
        forward: 'ocean',
        left: 'land',
        right: 'island'
      },
      ocean: {
        desc: 'You are now in the ocean. you can see on the horizon the island to your right and the mainland to you left. Everything else is water as far as you can tell. You can either move toward a landmass, go farther into the ocean or dive into the abyss.',
        forward: 'abyss',
        back: 'sea',
        left: 'land',
        right: 'island',
      },
      land: {
        desc: 'You are near the shore of the mainland. There are plants everywhere. To your right and directly ahead of you is an open, grassy plain with rolling hills that stretches for miles along the coast. To your left is a thick forest. The trees are to tall to see anything past them and as far as you can tell there an no non-plant signs of life anywhere.',
        back: 'ocean',
        forward: 'plain',
        right: 'plain',
        left: 'forest'
      },
      island: {
        desc: 'It is a small island with large beaches and shallow water all around it. It seems like a nice place. So nice you decide to stay, over time you slowly start to adapt to your surroundings and eventully you become a happy iguana.'
      },
      abyss: {
        desc: 'Diving deeper and deeper into the abyss the darkness consumes you. As time goes on you expand and grow massive tenticles to help look for food and explore your surroundings. Eventully the apes that come to claim this planet as theirs will fear you and the legend of the kraken becomes known by all.'
      },
      sea: {
        desc: 'You like the sea and over time you grow fins and gills and adapt to be the perfect surface water creature. Unlike the other fish you aren\'t dumb enough to get caught in nets, which is nice.'
      },
      plain: {
        desc: 'You decide you spend your existance in grass. Eventully you adapt to this life and become the first horse.'
      },
      forest: {
        desc: 'The forest is thick and full of life. You particularily enjoy leaping from tree top to tree top. Over time you develope the ability to fly between the trees and become as colorful as your surroundings. The first parrot.'
      }
    }
    return service
  }])
