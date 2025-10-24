// Game Configuration Variables
const CONFIG = {
    // Paddle Settings
    PADDLE_WIDTH: 15,
    PADDLE_HEIGHT: 120,
    PADDLE_SPEED: 5,
    PADDLE_SPEED_MULTIPLIER: 1.0,
    MAX_PADDLE_SPEED: 12,
    
    // Ball Settings
    BALL_SIZE: 15,
    INITIAL_BALL_SPEED: 4,
    BALL_SPEED_MULTIPLIER: 1.0,
    MAX_BALL_SPEED: 15,
    SPEED_RAMP_INTERVAL: 10, // seconds between speed increases
    SPEED_RAMP_AMOUNT: 0.5, // how much speed increases each ramp
    PADDLE_VELOCITY_TRANSFER: 0.5, // percentage of paddle velocity transferred to ball
    
    // Game Settings
    WINNING_SCORE: 5,
    CANVAS_WIDTH: 800,
    CANVAS_HEIGHT: 400,
    
    // AI Settings
    AI_REACTION_TIME: 10, // pixels of delay in AI following
    AI_DIFFICULTY: 1.0, // multiplier for AI paddle speed
    
    // Visual Settings
    CENTER_LINE_DASH: [10, 10],
    LINE_WIDTH: 2
};

// Game State Variables
const GAME_STATE = {
    currentBallSpeed: CONFIG.INITIAL_BALL_SPEED,
    currentPaddleSpeed: CONFIG.PADDLE_SPEED,
    gameStartTime: Date.now(),
    lastSpeedRamp: Date.now(),
    speedRampCount: 0
};
