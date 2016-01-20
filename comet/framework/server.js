var server = {
  establishedAt:'1.100.COMET'
}
var cometServer = new server;
cometServer.write("1.100.COMET")&&cometServer.getServerID();
if(cometServer === 'invalid'){
  catch(e){
    try {
      cometServer.overwrite("1.100.CAPP");
    }
  }
}
