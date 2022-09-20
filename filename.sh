$ s=/the/path/foo.txt
$ echo ${s##*/}
foo.txt
$ s=${s##*/}
$ echo ${s%.txt}
foo
$ echo ${s%.*}
foo