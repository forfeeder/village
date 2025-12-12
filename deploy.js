// This script sets up the global fetch polyfill before deploying
// Execute this with: node deploy.js

// Install node-fetch if not already installed
try {
  require('node-fetch');
  console.log('node-fetch is already installed.');
} catch (e) {
  console.log('node-fetch is not installed. Please run: npm install node-fetch@2.6.7');
  process.exit(1);
}

// Add fetch to global scope
global.fetch = require('node-fetch');
console.log('Added fetch polyfill to global scope.');

// Call firebase deploy
const { spawn } = require('child_process');
console.log('Running firebase deploy...');

const deploy = spawn('firebase', ['deploy'], { 
  stdio: 'inherit', 
  shell: true
});

deploy.on('close', (code) => {
  console.log(`Firebase deploy exited with code ${code}`);
  process.exit(code);
});
