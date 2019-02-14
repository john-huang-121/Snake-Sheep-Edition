# Snake: Sheep Edition

[Live Link]()

## Description
A new take on the classic game of snake, except with sheep! As the main sheep eats the haystack, there will be more and more sheep added to the end of the main sheep. If the main sheep runs into any part of itself, then the player loses and the game ends.

## Functionality
  * Game:
    * Real-time gameplay
    * A scoreboard to mark the length of the sheep
  * Sheeps:
    * Player can move their sheep around the map
    * Sheeps can eat the hay and grow longer.
    * As the sheep grows longer, there will be trailing sheep
  * Hay:
    * Can be eaten by sheep when they arrive at the hay's location

## MVP
  - [x] Create renderable game map
  - [x] Create sheep and hay models
  - [x] Create objects that will populate the map
  - [x] Styling game to look amazing and play smoothly
  - [ ] Use vector library to create moveable models and objects
  - [ ] Set win conditions

## Architecture and Technologies
  * Vanilla Javascript for basic game logic
  * HTML5 Canvas to draw models and objects
  * howler.js to have in game music
  * victor.js - 2D vector library
    * implement object movement logic for sheep and farmers.
    * Allows objects to move based upon keyboard and mouse cursor inputs to create interactive gameplay