## ngAdventure: An Angular Adventure Game

The purpose of this lab is to create an adventure-style game where the player can navigate through a game board and move from one location to another. As the player moves throughout the game board, they will gain points for discovering a room they are able to enter and will lose points for trying to move to a location that does not exist. The player should attempt to reveal all of the locations in the game board.

#### Controllers
In this lab, controllers are used to wire up the functionality of the rest of the app. The controller has access to all of the methods included in the services.

Three controllers are used in this lab:
* One controller is used for the player to control their movements throughout the game board. The player can select their desired direction of movement from the dropdown menu and then click the `Move the Player:` button. This controller also includes a connection to the player service to call the function to move the player in the game board.
* One controller is used for the player's information. This information is displayed on the application as the player's name, the current location, and a description of the current location.
* One controller is used for the game history. The player's history is displayed on the application as the previous location, the player's current turn, and a warning message is included if the player attempts to move in an unavailable direction.


#### Services 
In this lab, services are used to handle the heavy lifting of the game logic. The scope of the controller is isolated to the component, helping with overall functionality.

Two services are used in this lab:
* One service is used for the map functionality, containing the available locations for the game board.
* One service is used for the player, coordinating the player's history of movements, starting statistics, and the way their movements affect their score.


#### Playing the game


#### Dependencies
Use the command `npm i` in the terminal to install all dependencies used in this app.
###### Dependencies
* angular
* babel-core
* babel-loader
* babel-preset-es2015
* css-loader
* extract-text-webpack-plugin
* file-loader
* html-loader
* html-webpack-plugin
* node-sass
* resolve-url-loader
* sass-loader
* style-loader
* url-loader
* webpack
* webpack-dev-server

###### Developer Dependencies
* angular-mocks
* jasmine
* jasmine-core
* karma
* karma-chrome-launcher
* karma-jasmine
* karma-webpack

#### Testing 
Use the command `npm run test` to run the tests written on this app. There are currently 4 tests passing with a total of 43 expect statements.