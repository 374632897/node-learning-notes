const { spawn, log, logEvent } = require('./main')

const spawnAfterMainThreadExit = () => {
  const write = spawn('for i in {1..10}; do echo "Hello `date +%s`" >> /tmp/test.name && sleep 1; done', {
    shell: true,
  });
  logEvent(write);
}
spawnAfterMainThreadExit()
