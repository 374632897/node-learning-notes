const { spawn, log } = require('./main')

process.on('message', log('PROCESS_REVEIVED_MESSAGE: \n'));

// const subprocess = spawn('find', ['/tmp/testNpm', '-iname', '*.json', '-maxdepth', '1'], {
const subprocess = spawn('echo "{\\"name\\": 123 }"', {
  // 标准输出参数需要是 json, 而这里是文件名， 以 / 开头， 所以报错了
  stdio: ['pipe', 'ipc', 'inherit'],
  shell: true,
});
subprocess.on('message', log('SUBPROCESS_SEND_MESSAGE: \n'));
subprocess.on('data', (data) => {
  subprocess.send({ data: data.valueOf() })
});
