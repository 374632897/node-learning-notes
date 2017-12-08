const { exec, execFile } = require('child_process')
const { promisify } = require('util')

const logTime = (fn, name = fn.name) => {
  console.time(name)
  fn.then(() => {
    console.timeEnd(name)
  }).catch(() => console.timeEnd(name));
};

const method = (fn) => {
  const tasks = [];
  for (let i = 0; i < 1000; i++) {
    tasks.push(fn('find', ['tmp', '-iname', '*.js'], { stdio: 'inherit' }));
  }
  return Promise.all(tasks);
}

logTime(method(promisify(exec)), 'exec')
logTime(method(promisify(execFile)), 'execFile')

// $ node exec-execFile.js
// exec: 1746.430ms
// execFile: 321.752ms
// execFile is more efficient on Unix-type Operateing Systems,
// but it is not compatible with other systems like windows.
