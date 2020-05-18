/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    Tutoriel par MrPikou / Abonnez-Vous !
*/

/* Chemin d'accès à votre logo
NE PAS CHANGER */
var l_serverImage = false;

/* Nom de Votre serveur
Changez le nom de votre serveur en dessous :*/
var l_serverName = "     " ;

/* Utiliser une vidéo en fond
NE PAS CHANGER */
var l_bgVideo = false;

/* Images de Fond
Placez 5 Images ! */
var l_bgImages = [
	"backgrounds/images/fond1.png",
	"backgrounds/images/fond2.png",
	"backgrounds/images/fond3.png",
	"backgrounds/images/fond4.png",
	"backgrounds/images/fond5.png",
	"backgrounds/images/fond6.png",
	"backgrounds/images/fond7.png",
	"backgrounds/images/fond8.png",
	"backgrounds/images/fond9.png",
];

/* Images dans le Désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_bgImagesRandom = true;

/* Delai ( millisecondes ) entre les images
NE PAS CHANGER */
var l_bgImageDuration = 3000;

/* Durée ( millisecondes ) de la transition entre les images*/
var l_bgImageFadeVelocity = 2000;

/* Mettre des images de fond ? ( "True" pour Oui / "False" pour Non )*/
var l_bgOverlay = true;

/* Pourcentage de "points noirs" sur les images de fond :*/
var l_bgDarkening = 100000000000000000000000000000000000000000;

/* Musique
Activer la musique en fond ? ( "True" pour Oui / "False" pour Non )*/
var l_music = true;

/*Montrer le nom de la musique ? ( "True" pour Oui / "False" pour Non )*/
var l_musicDisplay = false;

/*Playlist musicale
Placez les musiques que vous souhaitez après "ogg:" et leur nom après "name:"*/
var l_musicPlaylist = [
	{ogg: "songs/thrawn.ogg", name: "Thrawn"},
];

/*Musiques dans le désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_musicRandom = true;

/*Volume de la musiqe
Mettez un nombre entre 0 et 100*/
var l_musicVolume = 5;

/*Activer les messages personnalisés ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesEnabled = true;

/*Mettez vos messages pérsonnalisés en dessous
Remplacez le "Message #..." par votre message*/
var l_messages = [
"Tous propos racistes, antisémites, homophobes, sexistes ou à l'encontre d'une ethnie ou d'un groupe de personne sont interdits.",
"Toutes discriminations ou insultes envers un ou plusieurs joueurs sont interdites. Respectez tous les joueurs.",
"N'abusez pas de la vulgarité, les grosses insultes ne sont pas tolérées.",
" Les règles générales du RP sont imposées (pas de Freekill, NLR, MétaGaming, Mixe, etc).",
"Restez cohérant avec votre personnage, vos erreur pourrons êtres punis en RP.",
"Tout Comportement Hors RP est interdit. Ne détruisez pas les actions RP.",
"Le Flood et le Spam sur le chat sont interdit.",
"Il est strictement interdit de faire de la publicité sur le serveur."
];

/*Messages en désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesRandom = true;

/*Delai entre les changements de message ( millisecondes)
Il est conseillé de mettre la même valeur qu'à "Delai ( millisecondes ) entre les images"*/
var l_messagesDelay = 3000;

/*Durée de l'animation de changement d'image ( millisecondes ) */
var l_messagesFade = 1000;