#! /usr/bin/env bash

# run this script
# chmod +x move.sh
# ./move.sh

build_htdocs="/shared/httpd/static/htdocs/"

build_path="/shared/httpd/static/"

source_path="/shared/httpd/daiki/build/"

cd $build_path

pwd

rm -rf *

mkdir htdocs

cd htdocs

rsync -a "$source_path" . || exit 1
