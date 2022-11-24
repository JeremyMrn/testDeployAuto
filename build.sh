#!/bin/bash

# Copie des fichiers env.
cp configs/$1/$1.env .env

# On récupère le numéro de version de npm.
num_version_npm=$(cat ./package.json | grep -m 1 version | sed 's/[^0-9.]//g')

# Lecture du fichier Env.
export $(grep -v -e '^#' -e '^$' .env)

#VUE_APP_NAME_APP="Face aux risques"

# Suppression de l'ancien dossier cordova/build s'il existe.
rm -rf ./applications/$VUE_APP_NAME_APP

# On se déplace vers le dossier.
cd ./applications/


# On initialise un projet cordova
cordova create $VUE_APP_NAME_APP $VUE_APP_ID $VUE_APP_NAME_APP

# On retourne à la racine.
cd ../

# Copie des fichiers env et deploy du serveur Node en mode production.
cp configs/$1/$1.env .env
mkdir ./applications/$VUE_APP_NAME_APP/resources/
cp configs/$1/icon.png ./applications/$VUE_APP_NAME_APP/resources/icon.png
cp -R configs/$1/res/ ./applications/$VUE_APP_NAME_APP/resources/res/
cp configs/$1/splash.png ./applications/$VUE_APP_NAME_APP/resources/splash.png
cp configs/$1/google-services.json ./applications/$VUE_APP_NAME_APP/google-services.json #Android notification.
cp configs/$1/GoogleService-Info.plist ./applications/$VUE_APP_NAME_APP/GoogleService-Info.plist #Android IOS.

vue-cli-service build

# Copie du script de génération Cordova.
cp init.sh ./applications/$VUE_APP_NAME_APP/init.sh

# On se déplace dans le working directory cordova.
cd ./applications/$VUE_APP_NAME_APP/

# On execute le script avec les paramètres)
sh init.sh $num_version_npm $VUE_APP_ID "${VUE_APP_NAME_APP}"





