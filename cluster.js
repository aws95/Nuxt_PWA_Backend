var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    // Create a worker
    cluster.fork();
  }
  //listen to dying workers
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  require("./app.js");
  console.log("process Id:", process.pid);
}
