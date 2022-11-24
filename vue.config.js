module.exports = {
    // Dossier dans lequel l'application sera compiler.
    outputDir: './cordova/www',

    // permettra d’ajouter un chemin relatif aux fichiers de l’application. Sans cela, vous aurez une belle page blanche lors du démarrage de l’application dans votre smartphone
    publicPath: './',

    transpileDependencies: [
      'vuetify'
    ]
}

// POur plus d'infos voir : https://fr.jeffprod.com/blog/2018/creer-une-application-android-avec-cordova-et-vuejs/
