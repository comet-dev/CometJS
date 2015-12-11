#!/bin/sh
buildPackage = "./comet-build/build"

if[$buildPackage == "False"];
  then 
  mkdir $buildPackage 
  find $buildPackage
  
addAPackage(){
  $buildPackage == "True";
  compress $buildPackage
  unzip $buildPackage
}  
