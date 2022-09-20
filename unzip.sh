
i=0
OIFS="$IFS"

IFS=$'\n'
for file in `find . -type f -name "*.zip"`  
do
	filename="${file##*/}"
	echo "file = $file"
	/d/z/7z.exe x "${file}" -o/d/y/"${filename%.zip}"
	i=$((i+1))     
done
IFS="$OIFS"

