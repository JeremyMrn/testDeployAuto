#!/bin/bash

# Copie des fichiers env et deploy du serveur Node.
cp configs/$1/$1.env .env
cp configs/$1/icon.png ./assets/icon.png
vue-cli-service serve