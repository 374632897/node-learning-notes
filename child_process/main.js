const { promisify } = require('util')
const {
  spawn, spawnSync,
  exec, execSync,
  execFile, execFileSync,
  fork,
} = require('child_process')

const log = (type) => data => {
  console.log(` ${type}: \n`, data.toString());
}

const logEvent = (childProcess) => {
  if (!childProcess.stderr) return;
  childProcess.stderr.on('data', log('STDERR'))
  childProcess.stdout.on('data', log('STDOUT'))
  childProcess.on('error', log('ERROR'))
};


module.exports = {
  spawnSync,
  execSync,
  execFileSync,
  fork,
  spawn,
  log,
  logEvent,
  execFile: promisify(execFile),
  exec: promisify(exec),
}
