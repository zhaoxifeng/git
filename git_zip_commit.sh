#!/bin/sh
a=$(git diff --name-only $1)
echo $a