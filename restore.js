var fs = require("fs");

function main() {
  fs.readdir("./node_modules", function (err, dirs) {
    if (err) {
      console.log(err);
      return;
    }
    dirs.forEach(function(dir){
      if (dir.indexOf(".") !== 0) {
        var packageJsonFile = "./node_modules/" + dir + "/package.json";
        if (fs.existsSync(packageJsonFile)) {
          fs.readFile(packageJsonFile, function (err, data) {
            if (err) {
              console.log(err);
            }
            else {
             
			  if(IsJsonString(data)){
				  var json = JSON.parse(data);
				  if(json.hasOwnProperty(json.name)){
				console.log('"'+json.name+'": "' + json.version + '",');  
			  }
			  else{
				  console.log('"'+dir+'": "' + "1.0.0" + '",');
			  }
			  }
			  else{
				  console.log('"'+dir+'": "' + "1.0.0" + '",');
			  }
			  
              
            }
          });
        }
      }
    });

  });
}
function IsJsonString(str) {
try {
JSON. parse(str);
} catch (e) {
return false;
}
return true;
}
main();