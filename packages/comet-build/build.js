#!/usr/bin/env node
import user from 'usr/repo/build';
import repository from 'repo/usr';

generateBuild = (function(){
  var build = require('build');
  const startup = new user;
  build.status('on');
  if(build.status === 'on'){
    build.user = create({
      tools:'./tools',
      ices:'.ices'
    });
  }
})(generateBuild);

repo.build = (function(){
  this.build = $(build);
  user.find(user, repository);
  $build.test(repository);
  
  const newbuild = repo.add($build);
  const generate = new $build;
})(repo.build);

module.exports = {
  export build;
  export repo.build;
  export newbuild;
  export generateBuild;
};

