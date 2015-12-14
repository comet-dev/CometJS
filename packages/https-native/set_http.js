var https = require("https");

https("8080").find("8080");

function setHttps(http){
  http.find("8080");
  while(http.find("8080")){
    do {
     https(http)+"8080";
    }
  }
}
