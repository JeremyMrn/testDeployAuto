import Vue from 'vue'
import Vuex from 'vuex'
import {version} from '../../package.json'
/* eslint-disable */
Vue.use(Vuex)

// Default store state.
let store_state   =  {};

// Define default store state for an account.

// Define default store state.
const store_state_default = {
  tmp_id: 0,
  modal_convive_flag: false,
  modal_delete_flag: false,
  alertDelete: false,
  api_prod: true,
  convive_obj_tmp:{
    i: 0,
    dejeuner_id: "",
    firstname: "",
    lastname: "",
    society: "",
    activity: "",
    adress: "",
    postalCode: "",
    city: "",
    phone: "",
    mail: "",
  },
  api_capside_is_down: true,
  splash_already: false,
  force_load: true,
  jwt_token: null,
  current_dejeuner_image: null,
  current_club_id: 11,
  connected_clubs_ids: [],
  dejeuner_panier: [],
  societes: [],
  commandes_passees: [],
  annonces: [{
    id: 1,
    date: '11/11/2020',
    publication : "nationale",
    titre : "Nisi mihi",
    descriptif: "Nisi mihi Phaedrum, inquam, tu mentitum aut Zenonem putas, quorum utrumque audivi, cum mihi nihil sane praeter sedulitatem probarent, omnes mihi Epicuri sententiae satis notae sunt. atque eos, quos nominavi, cum Attico nostro frequenter audivi, cum miraretur ille quidem utrumque, Phaedrum autem etiam amaret, cotidieque inter nos ea, quae audiebamus, conferebamus, neque erat umquam controversia, quid ego intellegerem, sed quid probarem.\n" +
        "\n" +
        "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.\n" +
        "\n" +
        "Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum, sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua, quas subinde dimittebat ad principem.\n" +
        "\n" +
        "Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.",
    nomContact: 'Antoine',
    mailContact: 'Antoine@antoine.fr',
    telephoneContact: '0303033030',

  },{
    id: 2,
    date: '22/11/2020',
    publication : "nationale",
    titre : "Jke polma",
    descriptif: "Primi igitur omnium statuuntur Epigonus et Eusebius ob nominum gentilitatem oppressi. praediximus enim Montium sub ipso vivendi termino his vocabulis appellatos fabricarum culpasse tribunos ut adminicula futurae molitioni pollicitos.\n" +
        "\n" +
        "Dein Syria per speciosam interpatet diffusa planitiem. hanc nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia advecticiis ita adfluere copiis et internis, et Laodicia et Apamia itidemque Seleucia iam inde a primis auspiciis florentissimae.\n" +
        "\n" +
        "Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina; cuius socrus cum misceri sibi generum, flagrans eius amore, non impetraret, ut ferebatur, per palatii pseudothyrum introducta, oblato pretioso reginae monili id adsecuta est, ut ad Honoratum tum comitem orientis formula missa letali omnino scelere nullo contactus idem Clematius nec hiscere nec loqui permissus occideretur.\n" +
        "\n" +
        "\n" +
        "Quam ob rem circumspecta cautela observatum est deinceps et cum edita montium petere coeperint grassatores, loci iniquitati milites cedunt. ubi autem in planitie potuerint reperiri, quod contingit adsidue, nec exsertare lacertos nec crispare permissi tela, quae vehunt bina vel terna, pecudum ritu inertium trucidantur.\n" +
        "\n" +
        "\n" +
        "Haec dum oriens diu perferret, caeli reserato tepore Constantius consulatu suo septies et Caesaris ter egressus Arelate Valentiam petit, in Gundomadum et Vadomarium fratres Alamannorum reges arma moturus, quorum crebris excursibus vastabantur confines limitibus terrae Gallorum.",
    nomContact: 'Boris',
    mailContact: 'Boris@boris.fr',
    telephoneContact: '0303033030',

  },{
    id: 3,
    date: '20/11/2020',
    publication : "nationale",
    titre : "Mon Annonce",
    descriptif: "Nisi mihi Phaedrum, inquam, tu mentitum aut Zenonem putas, quorum utrumque audivi, cum mihi nihil sane praeter sedulitatem probarent, omnes mihi Epicuri sententiae satis notae sunt. atque eos, quos nominavi, cum Attico nostro frequenter audivi, cum miraretur ille quidem utrumque, Phaedrum autem etiam amaret, cotidieque inter nos ea, quae audiebamus, conferebamus, neque erat umquam controversia, quid ego intellegerem, sed quid probarem.\n" +
        "\n" +
        "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.\n" +
        "\n" +
        "Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum, sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua, quas subinde dimittebat ad principem.\n" +
        "\n" +
        "Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.",
    nomContact: 'Antoine',
    mailContact: 'Antoine@antoine.fr',
    telephoneContact: '0303033030',

  },{
    id: 4,
    date: '11/11/2021',
    publication : "nationale",
    titre : "lOPO",
    descriptif: "Nisi mihi Phaedrum, inquam, tu mentitum aut Zenonem putas, quorum utrumque audivi, cum mihi nihil sane praeter sedulitatem probarent, omnes mihi Epicuri sententiae satis notae sunt. atque eos, quos nominavi, cum Attico nostro frequenter audivi, cum miraretur ille quidem utrumque, Phaedrum autem etiam amaret, cotidieque inter nos ea, quae audiebamus, conferebamus, neque erat umquam controversia, quid ego intellegerem, sed quid probarem.\n" +
        "\n" +
        "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.\n" +
        "\n" +
        "Qui cum venisset ob haec festinatis itineribus Antiochiam, praestrictis palatii ianuis, contempto Caesare, quem videri decuerat, ad praetorium cum pompa sollemni perrexit morbosque diu causatus nec regiam introiit nec processit in publicum, sed abditus multa in eius moliebatur exitium addens quaedam relationibus supervacua, quas subinde dimittebat ad principem.\n" +
        "\n" +
        "Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse.",
    nomContact: 'Roguer',
    mailContact: 'Roger@Roger.fr',
    telephoneContact: '0303033030',

  },],
  adresse_facturation: {
    nomSociete: 'Capside',
    adresse: '13 rue Colbrant',
    codePostal: 59800,
    ville: 'Lille',
    pays: 'France',
    telephone: 1123456789,
  },
  adresses_facturations: [{
    nomSociete: 'Capside',
    adresse: '13 rue Colbrant',
    codePostal: 59800,
    ville: 'Lille',
    pays: 'France',
    telephone: 1123456789,
  }],
  clubs: [],
  dejeuner_already_purchased: [],
  listeConvives : [{
    dejeuner_id: 73,
    lastname: 'Henry',
    firstname: 'Bob',
    activity: 'cuisinier',
    society: 'Auchan'
  },{
    dejeuner_id: 73,
    lastname: 'Jack',
    firstname: 'Patrick',
    activity: 'postier',
    society: 'Laposte'
  },{
    dejeuner_id: 78,
    lastname: 'Henry',
    firstname: 'Poloma',
    activity: 'entrepreneur',
    society: 'Estice'
  },{
    dejeuner_id: 80,
    lastname: 'Henry',
    firstname: 'Nicolas',
    activity: 'développeur',
    society: 'Apple'
  },{
    dejeuner_id: 214,
    lastname: 'Henry',
    firstname: 'Poloma',
    activity: 'entrepreneur',
    society: 'Estice'
  },{
    dejeuner_id: 214,
    lastname: 'Henry',
    firstname: 'Poloma',
    activity: 'entrepreneur',
    society: 'Estice'
  },{
    dejeuner_id: 216,
    lastname: 'Henry',
    firstname: 'Poloma',
    activity: 'entrepreneur',
    society: 'Estice'
  },],
  dejeuner_buy_id: null,
  route_accueil : '/',
  logged_in_app: false,
  name_logged_in_app: "Michel Ramos",
  name_no_logged_in_app : "Visiteur",
  index: null,
  indexPresident: null,
  doublonDejeunerPanier: false,
  convives: [],
};

// If store state find in localStorage.
if(localStorage.getItem('store')){

  // Retrieve store state from localStorage.
  store_state = JSON.parse(localStorage.getItem('store'));

  // Vérification que la version du store est bien à jour.
  if(!Object.prototype.hasOwnProperty.call(store_state, "version_package") || getProp(store_state, ['version_package']) != version){

    // Mise à jour du localStorage
    console.warn("MISE A JOUR", getProp(store_state_default, ['version_package']));
    store_state = store_state_default;

  }else {

    console.warn("PAS DE MISE A JOUR", getProp(store_state_default, ['version_package']));

    //Vérification que le localStorage est à jour.

    //Add property if necessary
    for (let prop in store_state_default) {

      // S'il n'a pas la propriété, on lui ajoute celle par défaut.
      if (!Object.prototype.hasOwnProperty.call(store_state, prop)) {

        //Affectation.
        store_state[prop] = store_state_default[prop];
      }
    }

    //Remove property if necessary
    for (let prop in store_state) {

      //S'il n'a pas la propriété, on lui ajoute celle par défaut.
      if (!Object.prototype.hasOwnProperty.call(store_state_default, prop)) {

        //Remove.
        delete store_state[prop];
      }
    }
  }

}else{
  store_state = store_state_default;
}

function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

const store = new Vuex.Store({
  state: store_state,
  getters: {
    // Il me faut un getter ou je passe le nom de ma variable en paramètre et que ça enregistre tout seul.

     getObj: (state) => (variable) => { return getSafe(() => store.state[variable], []) },
    // Il me faut un getter ou je passe le nom de ma variable en paramètre et que ça enregistre tout seul.
     getSousObj: (state) => (variable, sous_variable) => { return getSafe(() => store.state[variable][sous_variable], []) },
    // Il me faut un getter ou je passe le nom de ma variable en paramètre et que ça enregistre tout seul.
     getSousSousObj: (state) => (variable, sous_variable, sous_sous_variable) => { return getSafe(() => store.state[variable][sous_variable][sous_sous_variable], []) }
  },
  mutations: {

    delObj(state, payload){
      Vue.set(store.state, payload.variable, {});
    },
    // AJoute un set complet d'objet dans le champ indiquer.
    setObj (state, payload) {

      if(payload.sous_id != undefined){

        if(payload.sous_sous_id != undefined && payload.sous_sous_sous_id != undefined){
          setProp(store.state, [payload.variable, payload.sous_id, payload.sous_sous_id, payload.sous_sous_sous_id], payload.data);
        }else if(payload.sous_sous_id != undefined){
          setProp(store.state, [payload.variable, payload.sous_id, payload.sous_sous_id], payload.data);
        }else{
          setProp(store.state, [payload.variable, payload.sous_id], payload.data);
        }

      }else{

        if(payload.variable == "comptes"){
          console.log("store.state", store.state);
        }

        setProp(store.state, [payload.variable], payload.data);
      }

      //console.warn("SAVED payload", payload);
      saveStore();

      //console.log("AFTER", state[payload.variable]);
    }
  },
  actions: {
    setObj(context, payload){
      //console.warn("ACTIONS SET OBJ", payload);

      return context.commit('setObj', payload);
    }

  },
})


export default store;

// Premier appel à l'enregistrement des données.
saveStore();

/*
 * saveStore
 * @description : Enregistre le store de Vuex (Dynamique) dans le store du navigateur local (Persistant)
 * @return Void.
 */
function saveStore(){

  try {
    localStorage.setItem('store', JSON.stringify(store.state));
  }catch(e){
    console.error("Erreur de taille de stockage");
    window.dispatchEvent(new CustomEvent('STORAGE_FULL'));
  }

}

function setProp (obj, props, value) {
  const prop = props.shift()
  if (!obj[prop]) {
    Vue.set(obj, prop, {})
  }
  if (!props.length) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      obj[prop] = { ...obj[prop], ...value }
    } else {
      obj[prop] = value
    }
    return
  }
  setProp(obj[prop], props, value)
}


function getProp (obj, props) {
  const prop = props.shift()
  if (!obj[prop] || !props.length) {
    return obj[prop]
  }
  return getProp(obj[prop], props)
}
