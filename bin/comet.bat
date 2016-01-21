@echo off
echo "Starting Comet-Dev..."
start "./bin/comet"
prompt "Type in repo url."
start "./packages/comet-build/build"
exit


