# General Assembly 

This was the first project from the Software Engineering Immersive course with GA, also my first ever coding project. Our task was to re-create one of the games from our childhood within one week. I chose to go with Frogger, since it was one of my first ever games I have ever played.

Junior Start is a game based on the game Frogger. You must dribble the ball across the pitch, in between the defenders, and score goals to help your team win the match. The player must score all goals in under 15 seconds in order to win the game. After each goal, the defenders will pay much more attention to you and try to block you faster.


**Timeframe:**
* 7 days

## Game’s Link

[Junior Star](https://nicholasbotorog.github.io/Project-One-/)

## Technologies used

### HTML

- Grid with Cells including 9 rows and 10 columns in a total of 90 cells.
- Intro, game over and Win overlays with 'start' buttons.
- Audio element to update the src for in-game sound effects.

### CSS

- Grid using flex-box.
- CSS transitions for the overlay.
- Start and restart buttons and text for result.
- `position: fixed` the overlay with a transparent background.

### **JavaScript**

- keyUp event to move the characters.
- `setInterval` to move obstacles.
- Play and pause sounds.
- Hide and show overlays.
- Click events to start the game.

## The approach taken:

I started by building the grid using flex-box and implementing the keyUp function to move the player on the pitch. 

<img width="557" alt="Screen Shot 2022-06-23 at 6 32 33 PM" src="https://user-images.githubusercontent.com/103049873/175337678-fb52ce15-9c97-4002-ad6f-4dc4aacd9b3f.png">

The obstacles (defenders) are moving at a specific speed using `setInterval`. 

Every line of defenders gets tighter, being more difficult to dribble past them. That's when it is the time to be a team player and pass the ball to one of your team mates. I created a function that takes the player position and changes it to the position of a team mate. This simulates the ball being passed from one side of the pitch to another.

<img width="504" alt="Screen Shot 2022-06-23 at 6 55 48 PM" src="https://user-images.githubusercontent.com/103049873/175342550-68750047-9d2e-4800-ac48-332a7e3c90fc.png">

I also added sound effects to make the game more dynamic. Everytime the player moves across the pitch, collides with a defender, shoots wide or scores, the sound effects are triggered. There are also sound effects for every outcome of the game. 

In order to score, the player has to pass the goalkeeper. The scoring positions are cells 4 & 5. Everytime the player manages to score, the game speed will increase. 

<img width="504" alt="Screen Shot 2022-06-23 at 7 09 09 PM" src="https://user-images.githubusercontent.com/103049873/175345113-955e07d4-7339-467f-9aa8-31c5ceca6ccf.png">

### When the game starts:

* The player will get to the instruction page, overlaying the game.

<img width="1503" alt="Screen Shot 2022-06-23 at 7 11 59 PM" src="https://user-images.githubusercontent.com/103049873/175345716-1fde02c0-e849-4cce-ac6e-7f7c9e5d2b4f.png">

### When the game starts:

<img width="1503" alt="Screen Shot 2022-06-23 at 7 24 57 PM" src="https://user-images.githubusercontent.com/103049873/175348910-1eb0a8e3-8d3d-43f4-817e-e215677327cf.png">

* The crowd noise starts.
* The defenders start running at a slow speed.
* Counter starts, the player has 15 seconds to win the game. 
* As the defenders move, they compare with the character position to check if they have been hit.

### During the game:

* The keyUp event is used to move the character up, down, left and right.
* It checks which direction the player is going and doesn't let them go out of the grid.
* Once the player scores a goal, it will start from the bottom again. 
* The defender's speed increases after each goal.
* At the end of the time the game decides the outcome.

<img width="1503" alt="Screen Shot 2022-06-23 at 7 25 06 PM" src="https://user-images.githubusercontent.com/103049873/175348968-bb9a51c7-9924-4b88-961e-9f015896c9a4.png">
<img width="1503" alt="Screen Shot 2022-06-23 at 7 25 24 PM" src="https://user-images.githubusercontent.com/103049873/175348985-2b589db2-36fd-44a1-bc79-5fbc2dcdc9b4.png">
<img width="1503" alt="Screen Shot 2022-06-23 at 7 25 44 PM" src="https://user-images.githubusercontent.com/103049873/175348996-48c41682-6e71-466d-95cb-0d733f201779.png">
<img width="1503" alt="Screen Shot 2022-06-23 at 7 26 08 PM" src="https://user-images.githubusercontent.com/103049873/175349027-6eb3550a-bef1-4077-8f5d-c88fd748772a.png">
<img width="1503" alt="Screen Shot 2022-06-23 at 7 25 47 PM" src="https://user-images.githubusercontent.com/103049873/175349048-ae583396-66b2-4b46-badd-4bd1e488b40c.png">

## Key learnings:

 * Learned how to use Flex-box.
 * Learned how to create a pop-up using JavaScript, HTML and CSS.
 * Learned how to use play() and pause() functions to control the audio.

## Challenges:

* Implementing the passing function to change the current position of the player.
* Increasing the speed of the defenders after each goal. 

## Bugs:
* There is a bug with the final whistle after the game is over.

## Wins:
* My biggest win was creating my first ever project. At the begining I was overwhelmed about the idea of creating a game from scratch, but it turns out even after just one month of studying something like this is possible and doable. 
