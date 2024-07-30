echo "Creating family.js"
filename="js/family.js"
echo "" > $filename

echo "Appending modules to family.js"
cat js/chart.js >> $filename
cat js/utils.js >> $filename
cat js/constants.js >> $filename
cat js/markers.js >> $filename
cat js/data.js >> $filename
cat js/stories.js >> $filename
cat js/preprocess.js >> $filename
cat js/sidebar.js >> $filename
cat js/sources.js >> $filename
cat js/checks.js >> $filename
cat js/template/utils.js >> $filename
cat js/template/node.js >> $filename
cat js/template/link.js >> $filename
cat js/template/photo.js >> $filename
cat js/template/markers.js >> $filename
cat js/template/text.js >> $filename
cat js/main.js >> $filename

echo "Creating family.min.js"
uglifyjs --compress --mangle --output js/family.min.js -- js/family.js
