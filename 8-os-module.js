const os = require(`os`);

const user = os.userInfo();

console.log(`the system up time is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  realise: os.release(),
  totalMemory: os.totalmem(),
  freememory: os.freemem(),
};

console.log(currentOs);
