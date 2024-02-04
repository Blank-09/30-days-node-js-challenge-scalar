const { exec } = require("child_process");

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return console.log(`Error executing command: ${error.message}`);
    }

    if (stderr) {
      return console.log("Command stderr: ", stderr);
    }

    console.log("Command stdout: ", stdout);
  });
}

executeCommand("ls -la");
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
