# Pong Game - HTML Version

A classic Pong game built with HTML5 Canvas, CSS, and JavaScript. Play against an AI opponent in this browser-based version of the classic arcade game with advanced customization options and dynamic gameplay mechanics.

## Features

- **Player vs AI gameplay**: Control your paddle against an intelligent AI opponent
- **Smooth 60 FPS gameplay**: Fluid animations using requestAnimationFrame
- **Collision detection**: Accurate ball-paddle and ball-wall physics
- **Score tracking**: Configurable winning score (default: 5 points)
- **Responsive controls**: Use W/S keys or arrow keys to move your paddle
- **Game over screen**: Restart functionality when someone wins
- **Speed ramp-up system**: Ball speed increases over time with configurable intervals
- **Configurable settings**: Adjust game parameters via settings menu
- **Real-time speed display**: See current ball and paddle speeds
- **Advanced AI**: Configurable AI difficulty and reaction time

## How to Play

1. **Controls**:
   - Use `W` or `↑` arrow key to move your paddle up
   - Use `S` or `↓` arrow key to move your paddle down

2. **Objective**:
   - Hit the ball with your paddle to send it back to the AI
   - Score points when the AI misses the ball
   - Don't let the ball pass your paddle!
   - First to reach the winning score wins

3. **Game Mechanics**:
   - The ball bounces off the top and bottom walls
   - Ball speed and direction change on paddle hits
   - **Speed increases over time**: Ball gets faster as the game progresses
   - AI follows the ball with configurable reaction time

## Settings Menu

Click the **⚙️ Settings** button in the top-right corner to access:

### Ball Settings
- **Ball Speed Multiplier**: Adjust base ball speed (0.5x to 2.0x)
- **Max Ball Speed**: Set maximum ball speed cap (8-20)
- **Speed Ramp Interval**: How often speed increases (5-30 seconds)

### Paddle Settings
- **Paddle Speed Multiplier**: Adjust paddle movement speed (0.5x to 2.0x)

### Game Settings
- **Winning Score**: Set points needed to win (3-10)

## Running the Game

### Option 1: Open in Browser
1. Navigate to the Pong folder
2. Double-click on `index.html` to open it in your default browser
3. The game will start automatically

### Option 2: Local Server (Recommended)
For the best experience, serve the file through a local web server:

1. Navigate to the Pong directory:
   ```bash
   cd Pong
   ```

2. Start a simple HTTP server:
   
   **Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Node.js (if you have http-server installed):**
   ```bash
   npx http-server
   ```

3. Open your browser and go to `http://localhost:8000`

## Game Architecture

The game is built with modern web technologies:

- **HTML5 Canvas**: For rendering the game graphics
- **CSS3**: For styling the interface and layout
- **Vanilla JavaScript**: For game logic, physics, and controls
- **RequestAnimationFrame**: For smooth 60 FPS gameplay
- **Modular Configuration**: Separate config file for easy customization

### Key Components

- **Game Loop**: Handles updates and rendering at 60 FPS
- **Collision Detection**: Rectangle-based collision system
- **AI Logic**: Configurable tracking AI that follows the ball
- **Physics Engine**: Ball movement with velocity and bouncing
- **Input Handling**: Keyboard event listeners for controls
- **Settings System**: Real-time configuration updates
- **Speed Ramp System**: Dynamic difficulty adjustment

## Technical Details

- **Canvas Size**: 800x400 pixels
- **Game Loop**: 60 FPS using requestAnimationFrame
- **Initial Paddle Speed**: 5 pixels per frame (configurable)
- **Initial Ball Speed**: 4 pixels per frame (configurable)
- **Speed Ramp**: Increases by 0.5 every 10 seconds (configurable)
- **Max Ball Speed**: 15 pixels per frame (configurable)
- **Winning Score**: 5 points (configurable)
- **AI Difficulty**: Configurable reaction time and speed multiplier

## Configuration Files

### config.js
Contains all game variables and settings:
- Paddle dimensions and speeds
- Ball size and speed settings
- Speed ramp configuration
- AI behavior settings
- Visual settings

### Customization Options

You can modify the game behavior by editing `config.js`:

```javascript
const CONFIG = {
    // Paddle Settings
    PADDLE_SPEED: 5,
    PADDLE_SPEED_MULTIPLIER: 1.0,
    MAX_PADDLE_SPEED: 12,
    
    // Ball Settings
    INITIAL_BALL_SPEED: 4,
    BALL_SPEED_MULTIPLIER: 1.0,
    MAX_BALL_SPEED: 15,
    SPEED_RAMP_INTERVAL: 10000, // milliseconds
    SPEED_RAMP_AMOUNT: 0.5,
    
    // AI Settings
    AI_REACTION_TIME: 10,
    AI_DIFFICULTY: 1.0,
    
    // Game Settings
    WINNING_SCORE: 5
};
```

## Browser Compatibility

This game works in all modern browsers that support:
- HTML5 Canvas
- CSS3
- ES6 JavaScript features

Tested on:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Advanced Features

### Speed Ramp System
- Ball speed automatically increases over time
- Configurable ramp interval and amount
- Maximum speed cap prevents game from becoming unplayable
- Real-time speed display shows current values

### Dynamic Settings
- All settings can be changed during gameplay
- Changes take effect immediately
- Settings persist until page refresh

### Enhanced AI
- Configurable reaction time
- Speed multiplier for AI paddle
- Balanced difficulty that adapts to your settings

Enjoy playing the enhanced Pong game with full customization options!