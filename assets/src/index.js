const canvas = document.getElementById('pacmanCanvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);


game.start();