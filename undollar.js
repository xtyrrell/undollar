#!/usr/bin/env node

const { spawn } = require('child_process')

if (!process.argv[2]) {
    console.log('Usage: $ command [args] where command is any valid terminal command.')
    process.exit()
}

// Run a command with its arguments by spawning a process and
// transparently routing stdio and signals through this parent process
const spawnedProcess = spawn(
    process.argv[2],
    process.argv.slice(3),
    {stdio: 'inherit'}
);

// Route signals through so they still reach the spawned process
process.on('SIGTERM', () => spawnedProcess.kill('SIGTERM'))
process.on('SIGINT', () => spawnedProcess.kill('SIGINT'))
process.on('SIGBREAK', () => spawnedProcess.kill('SIGBREAK'))
process.on('SIGHUP', () => spawnedProcess.kill('SIGHUP'))

// Exit this process when the spawned process exits
spawnedProcess.on('exit', process.exit)
