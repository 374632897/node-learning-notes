const { spawn, log, logEvent } = require('./main')

// const ls = spawn('ls', ['-l'], {
//   cwd: '/tmp',
// })

// badcommand
const list = () => {
  const ls = spawn('ll')
  logEvent(ls);
}

const spawnAfterMainThreadExit = () => {
  const subprocess = spawn(process.argv[0], ['write8.js'], {
    detached: true,
    stdio: 'ignore'
  });
  subprocess.unref()
}

process.on('exit', () => {
  console.log('Main Process Exit')
})
spawnAfterMainThreadExit()
