#!/bin/sh

executable = "bin/comet"
cd comet
cd /bin
if[/bin == true]
echo "Checking for Comet executable :-) ..."
then
  find $executable
check_if_Executable(){
  if[$executable == true]
  then
    compress $executable
    echo "Executable Compressed!"
    exit
}

check_if_Executable
