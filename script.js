//Oriol Boix Anfosso

//Optica

const database1 = 'optica';
const collection11 = 'proveidors';
const collection12 = 'brands';
const collection13 = 'ulleres';
const collection14 = 'clients';
const collection15 = 'vendes';

// Create a new database.
use(database1);

// Create a new collection.
db.createCollection(collection11);
db.createCollection(collection12);
db.createCollection(collection13);
db.createCollection(collection14);
db.createCollection(collection15);

db.proveidors.insertOne({ "_id": "12345678A", "nom": "ulleres precioses", "adreca": { "carrer":"Catalunya","numero":"22-24","pis":2, "porta":2,"ciutat":"Olot","codi postal":"14084", "pais":"Catalunya" }, "telefon":"972886655","fax":"972886654","nif":"12345678A"})

db.brands.insertOne({ "_id":"Perfect Glasses", "proveidor nif": "12345678A"})

db.brands.insertOne({ "_id":"Ulleres boniques", "proveidor nif": "12345678A"})

db.ulleres.insertOne({ "marca":"Perfect Glasses", "vidre esquerre":{"graduacio": 1.2, "color": "transparent"}, "vidre dret": {"graduacio": 1.8, "color":"transparent" }, "muntura":{"tipus":"flotant", "color":"marro"}, "preu":69.99})

db.ulleres.insertOne({ "marca":"Ulleres boniques", "vidre esquerre":{"graduacio": 1.0, "color": "transparent"}, "vidre dret": {"graduacio": 1.2, "color":"transparent" }, "muntura":{"tipus":"pasta", "color":"blanc"}, "preu":59.99})

db.clients.insertOne({"_id":"3746628K","nom":"Laura","adreca":{"carrer":"santa susana", "numero": "33", "codi postal":"87633", "ciutat": "Calella"}, "telf": "677554332", "correu electronic":"laura@mongo.cat", "client amic": "98765432C"})

db.clients.insertOne({"_id":"98765432C","nom":"Carla","adreca":{"carrer":"santa susana", "numero": "22", "codi postal":"87633", "ciutat": "Calella"}, "telf": "676548221", "correu electronic":"carla@mongo.cat" })

db.vendes.insertOne({ "ulleres": ObjectId("618ba1ff508b4bead79006a6"), "empleat":{"nom":"Josep"}, "client": "98765432C", "data": "12-11-2021"})


//Pizzeria

const database2 = 'pizzeria';
const collection21 = 'productes';
const collection22 = 'botigues';
const collection23 = 'clients';


// Create a new database.
use(database2);

// Create a new collection.
db.createCollection(collection21);
db.createCollection(collection22);
db.createCollection(collection23);

db.productes.insertOne({"_id":1,"tipus":"pizza","nom":"napolitana","descripcio":"pizza di napoli","imatge":"napolitana.png","preu":12.99,"categoria":{"id":1,"nom":"italianes"}})

db.productes.insertOne({"_id":2,"tipus":"hamburguesa","nom":"completa","descripcio":"burguer completa","imatge":"burguer.png","preu":9.99})

db.productes.insertOne({"_id":3,"tipus":"beguda","nom":"top","descripcio":"top beer ever","imatge":"top.png","preu":3.99})

db.botigues.insertOne({"_id":"botiga central","adreca":{"carrer":"passeig de gracia","codi postal":"08005","localitat":"Barcelona","provincia":"Barcelona"}, "empleats":[{"id":"28297499G","nom":"Anna","cognoms":"Casamitjana","telf":"644773322","rol":"cuiner"},{"id":"123987456H","nom":"Carles","cognoms":"Bonastre", "telf":"93776321","rol":"repartidor"}]})

db.clients.insertOne({"_id":"667885442N","nom":"Aniol","cognoms":"Siurana","adreca":{"carrer":"pintor josep","codi postal":"08033", "localitat":{"id":1,"nom":"Barcelona","provincia":{"id":1,"nom":"Barcelona"}}},"comandes":[{"id":1,"data":"19-11-2021","hora":"20:33","a repartir":true,"productes":[{"id_producte":1,"quantitat":2},{"id_producte":3,"quantitat":3}],"preu total":33.95,"repartidor":"123987456H","data repartiment":"19-11-2021","hora lliurament":"20:55"},{"id":2,"data":"21-11-2021","hora":"21:12","a repartir": false,"productes":[{"id_producte":2,"quantitat":4},{"id_producte":3,"quantitat":4}],"preu total":55.92}]})



//Youtube

const database3 = 'youtube';
const collection31 = 'videos';
const collection32 = 'usuaris';


// Create a new database.
use(database3);

// Create a new collection.
db.createCollection(collection31);
db.createCollection(collection32);


db.videos.insertOne({ "_id":"483kl","titol":"Mongodb tutorial","descripcio":"Apren Mongodb rapidament","grandaria en Mb":245, "nom arxiu":"mongodb_tutorial.mp4","durada en segons":19876,"thumbnail":"483kl.png","numero de reproduccions": 20456,"numero de likes": 1234,"numero de dislikes":24,"estat":"public","etiquetes":[{"id":23,"nom":"tutorials"},{"id":12,"nom":"mongodb"}],"publisher":"laura@mongo.db","data publicacio":"11-09-2017"})

db.usuaris.insertOne({"_id":"12345678S","email":"laura@mongo.db","password":"fhreuohfi","nom d'usuari":"laura","data neixement":"17-12-1987","sexe":"fem","pais":"Catalunya","codi postal":"06083","videos publicats":[{"id":"483kl"},{"id":"123tt"}],"canals creats":[{"id":1,"nom":"Best tutorials","descripcio":"els meus tutorials","data creacio":"10-09-2016"},{"id":3,"nom":"Sports events","descripcio":"esdeveniments esportius","data creacio":"26-12-2013"}],"canals subscrits":[{"canal_id":2},{"canal_id":7},{"canal_id":11}],"likes":[{"video_id":"347yu"},{"video_id":"998hg"},{"video_id":"483kl"}],"dislikes":[{"video_id":"762op"}],"playlists":[{"id":23,"nom":"tutorials preferits","data publicacio":"12-08-2018","estat":"public","videos":[{"video_id":"347yu"},{"video_id":"483kl"}]}],"comentaris":[{"id":21,"data i hora":"30-07-2015","video_id":"347yu","comentari":"video molt bo","usuaris agrada":[{"id_usuari":"12345678S","data":"20-09-2020"},{"id_usuari":"123876444T","data":"21-08-2109"}]},{"id":4,"data i hora":"11-09-2017 20:33","video_id":"483kl","comentari":"impressionant video","usuaris agrada":[{"id_usuari":"777666555Y","data":"03-02-2011"}]}]})



