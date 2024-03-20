#!/usr/bin/env bash

if [[ $# -ne 2 ]]; then
	echo "Usage: $0 <filename>"
	exit
fi

file="./src/content/articles/$1.md"

create_file() {
	touch $file
	echo "---" > $file
	echo "title:" >> $file
	echo "description:" >> $file
	echo "pubDate:" >> $file
	echo "draft:" >> $file
	echo "---" >> $file
}

if [[ -e $file ]]; then
	echo "File already exists!"
else
	create_file
fi
