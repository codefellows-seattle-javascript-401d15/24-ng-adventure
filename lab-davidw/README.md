# lab-24

## A text based Dungeon Crawler Adventure demo app
Using a factory, services, and components, I have created a very basic adventure game.  I can see how this could be easily expanded, and I have a few ideas for that.

### Usage:
Once you have cloned the repo:
- install the package using node packet manager:
 `$ npm install`

- build the webpack using the following npm script:
 `$ npm run build'

- you can see debug output with the watch script by using the following npm script:
 `$ npm run watch'

- you can run Jasmine tests on Chrome, with Karma, by using the following npm script:
 `$ npm run test'

###### Basic Usage:
For now, there is a single player, named David. This is set up to be easily changed dynamically later.  The user will see the title: Welcome to ngAdventure a dropdown box with directions, north, south, east, and west currently available. There are also stats and a history sections, both labled with the player name.

select a direction in the drop down, and click the "move player" button.  If you selected a valid direction the story will tell you more about where you have gone.  Otherwise it will simply read: You have run into a wall!
the history will stack up in the history section, looking something like this:
turn: 4
location: hallway
story: You turn to the south branch of the hallway, it is getting cold and you can see an archway ahead
turn: 3
location: dark room
story: As you approach the light you see it is a hallway. This hallway has a branch to the east or, continue to the south.
turn: 2
location: dark room
story: You have run into a wall!
turn: 1
location: dark room
story: You have run into a wall!
turn: 0
location: dark room
story: Welcome to ngAdventure


##### Attributions:
All of the TA's were helping me play spot the typo, so big thanks to them, especially .  I also worked with other students to offer help, and get a fresh eye, when I was not seeing the missing ControllerAs in code.  
