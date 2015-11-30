var input = ["config"];
"config": function(token){
  if(input[0] === "config"){
    print(input.push("()"));
    print(input.fontcolor("blue"));
  }
  for(var i=0;i<token.length; i++){
    token.splice(input[0]).push(";");
    token.print(input[0]);
    token.find(input[0]);
  }
}

