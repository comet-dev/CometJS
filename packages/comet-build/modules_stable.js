var cmd = {
  cmp:"cmd.compile()"
}
var input = "";
cmd.cmpl = function(command){
  if(input === cmd.cmp){
    cmd.cmp.fontcolor("purple");
    input.compile(cmd.cmp);
  }
  cmd.cmp.parse(input);
  command = input + cmd.cmp;
  for(var i=0;i<command.length; i++){
    command.push(input);
  }
  while(cmd.cmp.parse(input)){
    input.parse(command);
    input.confirm(cmd.cmp);
  }
}
cmd.cmpl(cmd.cmp);
