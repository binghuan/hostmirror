#!/bin/sh
##screencapture

osascript -e 'tell application "Terminal" to do script "ngrok http 80"'
sudo pkill node
localhost.sh&

trap 'pkill ngrok; sudo pkill node; exit;' INT

fileNameWithExt="img.png"
imageName=$(echo "${fileNameWithExt}" | sed 's/.png//g')
while [ true ] ;
do
    screencapture -x -t png ${fileNameWithExt};

    cp -f ${fileNameWithExt} ${imageName}1440x900.png
    sips -z 900 1440 ${imageName}1440x900.png

    cp -f ${fileNameWithExt} ${imageName}1280x800.png
    sips -z 800 1280 ${imageName}1280x800.png

    cp -f ${fileNameWithExt} ${imageName}960x540.png
    sips -z 540 960 ${imageName}960x540.png

    cp -f ${fileNameWithExt} ${imageName}720x450.png
    sips -z 450 720 ${imageName}720x450.png

    sleep 0.03;
done