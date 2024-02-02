const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (error, fileContent) => {
    if (error) {
      console.error("Error reading file:", error.message);
    }
    
    else {
      console.log("File Content:\n" + fileContent);
    }
  });
}

// Testcases
readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");
