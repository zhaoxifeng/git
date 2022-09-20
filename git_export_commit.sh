#!/bin/sh
a=$(git diff --name-only ${1}^ ${1})
b=$(echo "$a"|xargs -d"\n" -iKK printf \"KK\"" ")
c="git archive -o ${1}.zip ${1} "${b}""
echo "${c}">${1}.sh
./${1}.sh
rm -f ${1}.sh
