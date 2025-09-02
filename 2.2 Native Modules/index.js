const fs = require("fs");
//fs.writeFile("message.txt" , "Hello World!" ,   (err) => {
  //  if (err) throw err;
    //console.log("   The file has been saved!");
//});

//to get in the folder  :   cd '.\2.2 Native Modules\'

fs.readFile("./message.txt",'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 