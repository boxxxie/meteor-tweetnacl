file="tweetnacl-js/nacl.js"
newfile="nacl.js"

##remove the top and bottom lines of the file
cat $file | head --lines=-1 | tail --lines=+3 > $newfile

##create nacl object for meteor (first use is to append it)
echo "nacl = {}" | cat - $newfile > /tmp/out && mv /tmp/out $newfile

##make meteor specific npm calls
sed -i 's/require/Npm.require/g' $newfile

##replace general client detection with meteor specific client detection
sed -i "s/typeof window !== 'undefined'/Meteor.isClient/g" $newfile

##replace general sever detection with meteor specific server detection
sed -i "s/typeof Npm.require !== 'undefined'/Meteor.isServer/g" $newfile
