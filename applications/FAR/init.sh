#!/bin/sh

#Note : On reçoit 3 paramètres :
# - Numéro version npm
# - id de l'app
# - Nom de lapp.

# Dowload plugins.
npm i cordova-plugin-splashscreen@5.0.4
npm i cordova-plugin-androidx@2.0.0
npm i cordova-plugin-androidx-adapter@1.1.1
npm i cordova-plugin-firebasex@10.2.0-cli
npm i cordova-plugin-enable-multidex
npm i cordova-plugin-file
npm i cordova-plugin-statusbar
npm i cordova-plugin-network-information
npm i cordova-res
npm i cordova-plugin-whitelist
npm i cordova-plugin-android-permissions
npm i cordova-plugin-nativegeocoder
npm i cordova-plugin-geolocation
npm i cordova-plugin-inappbrowser
npm i cordova-plugin-screen-orientation


# AJout plugin pour notification.
cordova plugin add cordova-plugin-androidx-adapter@1.1.1
cordova plugin add cordova-plugin-androidx@2.0.0
cordova plugin add cordova-plugin-firebasex@10.2.0-cli
cordova plugin add cordova-plugin-splashscreen@5.0.4
cordova plugin add cordova-plugin-enable-multidex
cordova plugin add cordova-plugin-file@6.0.2
cordova plugin add cordova-plugin-whitelist
cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-android-permissions
cordova plugin add cordova-plugin-nativegeocoder
cordova plugin add cordova-plugin-geolocation
cordova plugin add cordova-plugin-inappbrowser
cordova plugin add cordova-plugin-screen-orientation

# Gestion des plateformes.
cordova platform remove android
cordova platform remove ios

cordova platform add android@8.0.0
cordova platform add android@8.0.0
cordova platform add ios@6.1.0
cordova platform add ios@6.1.0

# On va recopier le contenue du fichier par défaut customConfigFile.xml dans le config.xml du projet cordova.
echo $(cat ../../customConfigFile.xml) > config.xml

# On remplace les default place holder par les valeurs en paramètres.
echo $(sed "s/APP_VERSION/${1}/g" config.xml) > config.xml
echo $(sed "s/VUE_APP_ID/${2}/g" config.xml) > config.xml
echo $(sed "s/VUE_APP_NAME_APP/${3}/g" config.xml) > config.xml


# Enable build for IOS
#sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

# Génération des îcones.
cordova-res android
cordova-res ios
cordova-res

# Allow Android compilation
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_261.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH

cordova prepare android
cordova build android
#cordova run android

cordova prepare ios
#cordova build ios