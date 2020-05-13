/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const questions = [
 
  '¿Qué prefieres, mac Donalds, o burger king?.',
  '¿Qué prefieres, matematicas, o geografia?.',
  '¿Qué prefieres, estudiar, o dormir?.',
  '¿Qué prefieres, leche, u orchata?.',
  '¿Qué prefieres, mirar la television, o mirar netflix?.',
  '¿Qué prefieres, salir a pasear, o estar sentado al sofa?.',
  '¿Qué prefieres, jugar a futbol, o jugar a basquet?.',
  '¿Qué prefieres, macarrones, o spaguettis?.',
  '¿Qué prefieres, lasaña, o canelones?.',
  '¿Qué prefieres, beber mucha agua, o beber mucha leche?.',
  '¿Qué prefieres, mucho dulce, o mucho salado?.',
  '¿Qué prefieres, ir a la piscina, o ir a la playa?.',
  '¿Qué prefieres, verano, o invierno?.',
  '¿Qué prefieres, primavera, u otoño?.',
  '¿Qué prefieres, ser como batman, o ser superman?.',
  '¿Qué prefieres, ser el bueno de la pelicula, o ser el malo?.',
  '¿Qué prefieres, jugar a tenis, o jugar a volley?.',
  '¿Qué prefieres, salir a correr, o correr en cinta?.',
  '¿Qué prefieres, dormir mucho pero en el sofa, o dormir poco en la cama?.',
  '¿Qué prefieres, poder volar, o poder sumergite en el agua durante mucho tiempo?.',
  '¿Qué prefieres, jugar en el movil, o jugar en el ordenador?.',
  '¿Qué prefieres, cantar mal y ser escuchado, o cantar bien y no ser escuchado?.',
  '¿Qué prefieres, disney o warner bros?.',
  '¿Qué prefieres, winnie the pooh, o cenicienta?.',
  '¿Qué prefieres, toy story, o ted la pelicula?.',
  '¿Qué prefieres, comer una manzana, o comer una pera?.',
  '¿Qué prefieres, comer muchas chucherias, o jugar con tu amigo mucho tiempo?.',
  '¿Qué prefieres, leer muchos cuentos, o escuchar mucha musica?.',
  '¿Qué prefieres, ir muy rapido, o ir muy lento?.',
  '¿Qué prefieres, volver a empezar, o seguir avanzando?.',
  '¿Qué prefieres, ser un superheroe en medio de un desastre, o ser normal y que no haya un desastre?.',
  '¿Qué prefieres, ser pintor, o ser electricista?.',
  '¿Qué prefieres, ser un youtuber famoso, o ser un cantante famoso?.',
  '¿Qué prefieres, enamorarte de un desconocido, o enamorarte de tu mejor amigo?.',
  '¿Qué prefieres, prefieres agua salda, o agua dulce?.',
  '¿Qué prefieres, prefieres agua muy fria, o agua muy caliente?.',
  '¿Qué prefieres, ser pinocho, o ser ratatui?.',
  '¿Qué prefieres, ser una rana, o un canguro?.',
  '¿Qué prefieres, el rey leon, o la sirenita?.',
  '¿Qué prefieres, ser un dalmata, o ser un leon?.',
  '¿Qué prefieres, escribir un refran, o contar un poema?.',
  '¿Qué prefieres, ser un cisne, o ser sirenita?.',
  '¿Qué prefieres, hercules, o iron man?.',
  '¿Qué prefieres, poder nadar como sirenita, o ser fuerte como hercules.',
  '¿Qué prefieres, buscar a wallie en tu ciudad, o ser un entrenador pokemon y buscar pokemon?.',
  '¿Qué prefieres, ser Olaf de Frozen, o ser Elsa de frozen?.',
  '¿Qué prefieres, leer un cuento que no te guste, o leer un cuento que te guste?.',
  '¿Qué prefieres, pedir tres deseos y no poder pedir la persona que te gusta, o pedir a la persona que te gusta sin poder elegir tres deseos?.',
  '¿Qué prefieres, volar como en up, o dar besos de hielo como en frozen?.',
  '¿Qué prefieres, abandonar y volver a empezar, o avanzar sin abandonar?.',
  '¿Qué prefieres, ser rey en un reino que no te gusta, o ser principe en un reino que si te gusta?.',
  '¿Qué prefieres, ser rey sin corona, o no ser nadie y tener corona?.',
  '¿Qué prefieres, un dia de mucha lluvia, o un dia de mucho calor?.',
  '¿Qué prefieres, ver a un angel, o ver un demonio?.',
  '¿Qué prefieres, un digimon, o un pokemon?.',
  '¿Qué prefieres, jugar al sonic, o jugar al mario?.',
  '¿Qué prefieres, enterrar el oro, o tirar el oro al mar?.',
  '¿Qué prefieres, ser un pirata y navegar los mares, o ser pirata y navegar por las nuves?.',
  '¿Qué prefieres, que prefieres un ataque con una buena defensa, o una buena defensa con un buen ataque?.',
  '¿Qué prefieres, perder el partido y no hacer amigos, o hacer amigos y perder el partido?.',
  '¿Qué prefieres, ganar y perder un amigo, perder y ganar a un amigo?.',
  '¿Qué prefieres, messi, o cristiano ronaldo?.',
  '¿Qué prefieres, jugar de delantero, o de portero?.',
  '¿Qué prefieres, real madrid, o el barcelona?.',
  '¿Qué prefieres, ser feliz siempre y estar solo, o estar siempre triste pero acompañado?.',
  '¿Qué prefieres, ser el vaquero bueno, o ser el vaquero malo?.',
  '¿Qué prefieres, ser iron man, o ser spiderman?.',
  '¿Qué prefieres, volar como un halcon, o nadar como un tiburon?.',
  '¿Qué prefieres, hacer surf, o ir en patinete?.',
  '¿Qué prefieres, mirar peliculas de amor, o ver series de amor?.',
  '¿Qué prefieres, jugar al ordenador, o jugar en la nintendo switch?.',
  '¿Qué prefieres, conducir un coche, o conducir una moto?.',
  '¿Qué prefieres, conducir un cohete, o conducir un submarino?.',
  '¿Qué prefieres, pantalones cortos, o pantalones largos?.',
  '¿Qué prefieres, ser feliz y hacer sufrir a tu familia, o ser infeliz y que tu familia sea feliz?.',
  '¿Qué prefieres, jugar al pilla pilla, o jugar al escondite?.',
  '¿Qué prefieres, que el dinero da la felicidad, o que el dinero no de la felicidad?.',
  '¿Qué prefieres, tener muchos amigos pero malos, o tener pocos amigos y buenos?.',
  '¿Qué prefieres, que las calles sean de oro, o que las calles fueran de chocolate?.',
  '¿Qué prefieres, ir a visitar el cielo, o visitar el infierno?.',
  '¿Qué prefieres, levantarse y pensar en tu futuro, o irte a dormir sin pensar en nada?.',
  '¿Qué prefieres, aconseguir tu objetivo sin esfuerzo, o esforzarte para aconseguir tu objetivo?.',
  '¿Qué prefieres, la luz, o la oscuridad?.',
  '¿Qué prefieres, tener miedo, o que te den un susto de muerte?.',
  '¿Qué prefieres, ayudar a tu mama, o ayudar a tu mejor amigo?.',
  '¿Qué prefieres, pedir ayuda y superar el obstaculo, o no pedir ayuda y no superar el obstaculo?.',
  '¿Qué prefieres, ser el alpha, o ser el omega?.',
  '¿Qué prefieres, ir a la luna, o ir a marte?.',
  '¿Qué prefieres, amar a tus enemigos, u odiar a tus amigos?.',
  '¿Qué prefieres, cantar muchas canciones, o recitar muchos poemas?.',
  '¿Qué prefieres, vivir soñando, o soñar viviendo?.',
  '¿Qué prefieres, tener un gato, o tener un perro?.',
  '¿Qué prefieres, caminar descalzo en la arena, o caminar descalzo en el agua?.',
  '¿Qué prefieres, llevar uniforme bonito, o llevar la ropa que quieras pero fea?.',
  '¿Qué prefieres, decir una mentira y hacer feliz a una persona, o decir la verdad y no mentir?.',
  '¿Qué prefieres, vivir emocionado, o emocionado por vivir?.',
  '¿Qué prefieres, volar a los cuatro vientos, o nadar hasta el infinito?.',
  '¿Qué prefieres, ser un extraterrestre, o ser un duende?.',
  '¿Qué prefieres, dar muchos abrazos, o dar muchas cosquillas?.',
  '¿Qué prefieres, escuchar una cancion que te gusta, o escuchar muchas que no te gusten?.',
  '¿Qué prefieres, fingir una sonrisa, o que te fingan una sonrisa?.',
  '¿Qué prefieres, aprobar un examen copiando, o suspender sin haber estudiado?.',
  '¿Qué prefieres, enamorarte a primera vista, o enamorarte de alguien que conoces?.',
  '¿Qué prefieres, utilizar boligrafo, o utilizar lapiz?.',
  '¿Qué prefieres, ser feliz con poco, o tener mucho y ser infeliz?.',
  '¿Qué prefieres, irte pronto para volver, o irte tarde para no volver?.',
  '¿Qué prefieres, utilizar los pies como manos, o utilizar las manos como pies?.',
  '¿Qué prefieres, soñar, sueños bonitos, o no soñar y vivir cosas bonitas?.',
  '¿Qué prefieres, ser un soñador soñando, o vivir sin ser un soñador?.',
  '¿Qué prefieres, que huela muy mal, o comer algo que tenga un sabor muy malo?.',
  '¿Qué prefieres, que huela muy bien, o comer algo que tenga muy buen sabor?.',
  '¿Qué prefieres, ir a una ciudad maravilla, o ser una maravilla como persona?.',
  '¿Qué prefieres, poder tocar las nuves, o poder tocar la luna?.',
  '¿Qué prefieres, vivir como un super heroe, o vivir como un entrenador pokemon?.',
  '¿Qué prefieres, ser como budy o ser como buzz lightyear?.',
  '¿Qué prefieres, ser un dinosaurio, o ser un animal actual?.',
  '¿Qué prefieres, ser un delfin, o ser una orca?.',
  '¿Qué prefieres, ser un pajaro, o ser un pez?.',
  '¿Qué prefieres, fantasia o ciencia ficción?.',
  '¿Qué prefieres, vivir en el mundo de frozen, o ser cenicienta?.',
  '¿Qué prefieres, vivir en barcelona, o vivir en madrid?.',
  '¿Qué prefieres, estar en el sud, o ester en el norte?.',
  '¿Qué prefieres, ir a la montanya en verano, o ir a la playa en invierno?.',
  '¿Qué prefieres, hacer surf, o hacer esqui?.',
  '¿Qué prefieres, cada dia fuera extra ordinario, o que extra ordinario fuera cada dia?.',
  '¿Qué prefieres, ser un lengendario, o ser una leyenda?.',
  '¿Qué prefieres, disfrazarte de pez, o disfrazarte de platano?.',
  '¿Qué prefieres, comer pizza, o comer un helado?.',
  '¿Qué prefieres, leer muchos libros que no valgan nada, o leyer un libro muy bueno?.',
  '¿Qué prefieres, ser el policia, o ser el caco?.',
  '¿Qué prefieres, ser polocia, o ser bombero?.',
  '¿Qué prefieres, ser un caballero, o ser un payaso?.',
  '¿Qué prefieres, que caiga el sol, o que caiga la luna?.',
  '¿Qué prefieres, leer una pagina con tu futuro, o leer todo tu pasado?.',
  '¿Qué prefieres, una mirada en el cielo, o una mirada que dice mil palabras?.',
  '¿Qué prefieres, ser napoleon, o ser julio cesar?.',
  '¿Qué prefieres, vivir en francia, o vivir en italia?.',
  '¿Qué prefieres, ser chino, o ser japones?.',
  '¿Qué prefieres, un helado de chocolate, o un helado vainilla?.',
  '¿Qué prefieres, chucherias, o pizza?.',
  '¿Qué prefieres, piña con queso, o jamon dulce con chocolate?.',
  '¿Qué prefieres, ir a un parque de atracciones normal, o ir a un parque de atracciones con agua?.',
  '¿Qué prefieres, vivir de noche, o vivir de dia?.',
  '¿Qué prefieres, que sea tu mejor dia pero llueva, o que no llueva pero sea el dia más bonito?.',
  '¿Qué prefieres, ser un elefante, o ser un rinoceronte?.',
  '¿Qué prefieres, ser el patito feo y convertirte en cisne, o ser un dalmata siempre?.',
  '¿Qué prefieres, vivir como un mono, o vivir como un oso perezoso?.',
  '¿Qué prefieres, vivir en la jungla, o vivir en la sabana?.',
  '¿Qué prefieres, tener el cuello como una jirafa, o tener mucho pelo, como un gorila?.',
  '¿Qué prefieres, padre de familia, o los simpson?.',
  '¿Qué prefieres, tener poder de volar, o el poder de hacerte invisible?.',
  '¿Qué prefieres, tener poderes magicos, o poder volar?.',
  '¿Qué prefieres, poder ser como spiderman, o poder ser como iron man?.',
  '¿Qué prefieres, ser un elefante, o ser un pinguino?.',
  '¿Qué prefieres, que prefieres aire caliente en verano, o aire frio en invierno?.',
  '¿Qué prefieres, estudiar matematicas, o estudiar lengua?.',
  '¿Qué prefieres, silvar muy fuerte, o chillar muy fuerte?.',
  '¿Qué prefieres, no ser nada pero ser alguien, o no ser alguien pero ser algo?.',
  '¿Qué prefieres, vivir feliz pero rico, o vivir pobre pero feliz?.',
  '¿Qué prefieres, no aconseguir tu objetivo y animar a tu amigo aconseguirlo, o aconseguir tu objetivo y no animar a tu amigo?.',
  '¿Qué prefieres, ayudar alguien y no pedir un favor, o no ayudar alguien y pedir algun favor?.',
  '¿Qué prefieres, estar siempre al lado de tu mama, o estar al lado de tu papa?.',
  '¿Qué prefieres, ser una persona exitosa, o ser una persona con mucha felicidad?.',
  '¿Qué prefieres, ser una cabra, o ser una oveja?.',
  '¿Qué prefieres, tener un perro, o tener un conejo?.',
  '¿Qué prefieres, nike, o adidas?.',
  '¿Qué prefieres, vivir diez vidas de cien años, o vivir una vida de mil años?.',
  '¿Qué prefieres, saltar muy alto, o correr muy rapido?.',
  '¿Qué prefieres, ser obi wan kenovi, o ser darth vader?.',
  '¿Qué prefieres, ser un jedi, o ser un sith?.',
  '¿Qué prefieres, ser los vengadores, o ser thanos?.',
  '¿Qué prefieres, tener un imperio pobre, o ser millonario sin tener un imperio?.',
  '¿Qué prefieres, dormir mucho y comer poco, o comer mucho y dormir poco?.',
  '¿Qué prefieres, ser grande como una montaña, o ser pequeño como una canica?.',
  '¿Qué prefieres, ser un caracol, o ser una mosca?.',
  '¿Qué prefieres, ser un cocodrilo, o ser un aguila?.',
  '¿Qué prefieres, ser una medusa, o ser una medusa?.',
  '¿Qué prefieres, hbo, o netflix?.',
  '¿Qué prefieres, whatsapp, o youtube?.',
  '¿Qué prefieres, tener movil, o tener un ordenador?.',
  '¿Qué prefieres, ir a una ciudad perdida en el cielo, o ir a una ciudad perdida debajo del agua?.',
  '¿Qué prefieres, ser zeus, o ser triton?.',
  '¿Qué prefieres, tener poder de luz, o poder de agua?.',
  '¿Qué prefieres, tener un barco de papel, o tener papel pero no saber hacer un barco?.',
  '¿Qué prefieres, decir verdades y fallar a una persona, o decir mentiras y no fallar a nadie?.',
  '¿Qué prefieres, ser una estrella de futbol, o ser una estrella de tennis?.',
  '¿Qué prefieres, vivir improvisando, o vivir escribiendo tu vida?.',
  '¿Qué prefieres, tener una mision en la vida, o no tener una mision pero tener poderes?.',
  '¿Qué prefieres, tener garras como un oso, o tener dientes como un tiburos?.',
  '¿Qué prefieres, ser la persona más responsable del mundo y no ser feliz, o ser la persona más feliz del mundo pero nada responsable?.',
  '¿Qué prefieres, vivir para siempre pero aburrido, o ser divertido pero no vivir para siempre?.',
  '¿Qué prefieres, que calle la razon, o que hable la verdad?.',
  '¿Qué prefieres, flotar en el agua, o flotar en las nubes?.',
  '¿Qué prefieres, prefieres tirar un tiro libre en basquet, o tirar un penalti en futbol?.',
  '¿Qué prefieres, vivir siempre con 5 años, o vivir siempre 65 años?.',
  '¿Qué prefieres, ir al espacio, o ir a lo más profundo del mar?.',
  '¿Qué prefieres, ir a un desierto, o ir al polo norte?.',
  '¿Qué prefieres, papa noel, o los reyes magos?.',
];

const startVoice = 'Iniciando Skill, ¿Qué prefieres? Edición para toda la familia. ¿Qué prefieres? Como funciona, o empezar a jugar?';
const helpGame = 'Te voy a explicar la ayuda de la Skill, ¿Qué prefieres? Edición para toda la familia. Hay más de 400 preguntas en el juego. Para responder las preguntas del juego, solo tienes que nombrar una de las dos respuestas que te ofreceré. Para cerrar la Skill solo tienes que decir; no más preguntas. ¿Qué prefieres? Como funciona, o empezar a jugar?';


function randomQuestion() { 
    const factArr = questions;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = randomFact;
    
    return speechOutput;
    
} 



const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    
    return handlerInput.responseBuilder
      .speak(startVoice)
      .reprompt(startVoice)
      .getResponse();
  },
};



const playHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'play';
  },
  handle(handlerInput) {

    return handlerInput.responseBuilder
      .speak(randomQuestion())
      .reprompt(randomQuestion())
      .getResponse();
    
  },
};


const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    
    return handlerInput.responseBuilder
      .speak(helpGame)
      .reprompt(startVoice)
      .getResponse();
  },
};


const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {

    return handlerInput.responseBuilder
      .speak('Cerrando la Skill ¿Qué prefieres? Edición para toda la familia.')
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};



const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Ha ocurrido un error.')
      .reprompt('Ha ocurrido un error.')
      .getResponse();
  },
};


const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    playHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
