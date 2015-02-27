file="tweetnacl-js/nacl.js"
newfile="nacl.js"
cat $file | head --lines=-1 | tail --lines=+3 > $newfile
echo "nacl = {}" | cat - $newfile > /tmp/out && mv /tmp/out $newfile
