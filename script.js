// NUMBERS AND STRINGS (NOMBRES ET CHAINES DE CARACTÉRES) :

var x = 12;
var xToString = x.toString();
console.log(xToString);
console.log(x);

console.log('--------------');



var nom = 'Julien';
console.log(nom);
var nomLength= nom.length;
console.log(nomLength);

console.log('--------------');



var xString = '12';
var xNumber = parseInt(xString);
console.log(xNumber);
console.log(xString);

console.log('--------------');



var xString = '12.34567';
var xNumber = parseFloat(xString);
console.log(xNumber);
console.log(xString);

console.log('--------------');



let myString1 = 'Bonjour Julien';
let position = myString1.indexOf('Julien');
console.log(position);

console.log('--------------');



let myString2 = 'Bonjour Julien';
let myNewString = myString2.replace('Julien','Sandra');
console.log(myNewString);

console.log('--------------');



let string1 = 'hello';
let string2 = 'Julien';
let string3 = 'Sandra';
let myNewString2 = string1 + string2 + string3;
let myNewString3 = string1 + ' ' + string2 + ' ' + string3;
console.log(myNewString2);
console.log(myNewString3);

console.log('--------------');


// OPERATORS (OPÉRATEUR) :

let = x;
x = 12;
console.log(x);

console.log('--------------');

let x2 = 20;
let y2 = 5;
let result = x2 + y2;
console.log(result);

console.log('--------------');

let x3 = 20;
let y3 = 5;
let result1 = x3 - y3;
console.log(result1);

console.log('--------------');

let x4 = 20;
let y4 = 5;
let result2 = x4 * y4;
console.log(result2);

console.log('--------------');

let x5 = 12;
let y5 = 5;
let result3 = x5 / y5;
console.log(result3);

console.log('--------------');

//DEBUT MODULO (LE RESTE DE LA DIVISION) :
let x6 = 12;
let y6 = 5;
let result4 = x6 % y6;
console.log(result4);
// FIN MODULO (LE RESTE DE LA DIVISION) :

console.log('--------------');

let x7 = 20;
x7++;
console.log(x7);

console.log('--------------');

let x8 = 20;
x8--;
console.log(x8);

console.log('--------------');

let x9 = 20;
let result5 = ++x9;
console.log(result5);

console.log('--------------');

let x10 = 20;
// x10 ++;
// OU
//x10 = x10 + 1;
// OU
x10 += 1;
console.log(x10);

console.log('--------------');

let x11 = 20;
let y11 = 5;
//x11 += y11;
// OU
x11 = x11 + y11;
console.log(x11);

console.log('--------------');

let x12 = 20;
let y12 = 5;
x12 -= y12
console.log(x12);

console.log('--------------');



// LES COMMENTAIRES :

// Commentaire pour une ligne.

/*
Commentaire pour plusieurs ligne (comme en CCS)
*/



// BOOLÉENS ET COMPARAISON :

let myBooleen = true;
console.log(myBooleen);

console.log('--------------');

let x13 = 5;
let myBooleen1 = (x13 === 5); // X13 est égale (strictement égale) à 5 ?
console.log(myBooleen1); // Réponse du booleen "TRUE".

console.log('--------------');

let x14 = 5;
let myBooleen2 = (x14 !== 5); // X14 est différents de 5 ?
console.log(myBooleen2); // Réponse du booleen "FALSE".

console.log('--------------');

let x15 = 5;
let myBooleen3 = (x15 === '5'); // X14 est égale (strictement égale) à 5 (sous format string, chaîne de caractéres '5') ?
console.log(myBooleen3); // Réponse du booleen "FALSE".

console.log('--------------');

let x16 = 5;
let myBooleen4 = (x16 == '5'); // X13 est égale à 5 ?
console.log(myBooleen4); // Réponse du booleen "TRUE".

console.log('--------------');

let x17 = 5;
let myBooleen5 = (x17 > 20); // X13 est supérieure à 20 ?
console.log(myBooleen5); // Réponse du booleen "FALSE".

console.log('--------------');

let x18 = 5;
let myBooleen6 = (x18 < 20); // X13 est inférieure à 2 ?
console.log(myBooleen6); // Réponse du booleen "TRUE".

console.log('--------------');

let x19 = 5;
let myBooleen7 = (x19 >= 20); // X13 est supérieure ou égale à 20 ?
console.log(myBooleen7); // Réponse du booleen "FALSE".

console.log('--------------');

let x20 = 5;
let myBooleen8 = (x20 <= 20); // X13 est inférieure ou égale à 2 ?
console.log(myBooleen8); // Réponse du booleen "TRUE".

console.log('--------------');

// MAINTRENANT IL Y A UNE AUTRE FAÇON QUI PERMET DE LIER PLUSIEURS QUESTIONS DANS UNE MÊME QUESTIONS : 

// && ET :
let x21 = 5;
let y21 = 20;
let myBooleen9 = (x21>3 && y21<30); // x21 supérieure à 3 ET y21 inférieur à 30 ?
console.log(myBooleen9); // Réponse du booleen "TRUE".

console.log('--------------');

let x22 = 5;
let y22 = 20;
let myBooleen10 = (x22<3 && y22>30); // x22 inférieure à 3 ET y22 supérieure à 30 ?
console.log(myBooleen10); // Réponse du booleen "FALSE".

console.log('--------------');

// || OU :
let x23 = 5;
let y23 = 20;
let myBooleen11 = (x23>3 || y23<30); // x23 supérieure à 3 OU y23 inférieur à 30 ?
console.log(myBooleen11); // Réponse du booleen "TRUE".

console.log('--------------');

let x24 = 5;
let y24 = 20;
let myBooleen12 = (x24<3 && y24>30); // x24 inférieure à 3 ET y24 supérieure à 30 ?
console.log(myBooleen12); // Réponse du booleen "FALSE".

console.log('--------------');

// RÉCAPITULARIF (RESULTAT) && - || : 
    console.log('--------------');
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);
    console.log('--------------');
    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    console.log(false || false);
    console.log('--------------');
    console.log(!true); // ! = NOT, l'inverse de true c'est false.
    console.log(!false); // ! = NOT, l'inverse de false c'est true.

    console.log('--------------');

// LES CONDITIONS :
    /**
     * if = SI (début d'une condition)
     * else if = SINON SI (vérifie une deuxiéme conditions (au besoin) )
     * else = sinon (fin de la condition)
     */

    // La syntaxe d'une condition : 
    /* if(condition) {
        console.log('Execute ce code');
    } */

    // Complément d'une condition :
    /* if(condition) {
        console.log('Execute ce code');
    }
    else {
        console.log('Alors executes ce code la!');
    }

    if(condition1) {
        console.log('Execute ce code');
    }
    else if (condition2) {
        console.log("La condition1 n'est pas vraie mais la 2 l'est");
    }
    else {
        console.log('Alors executes ce code la!');
    } */

    // EXEMPLES :

    let speed = 70;
    /**
     * OU
     * let speed = 90;
     * OU
     * let speed = 190;
     */

    if(speed < 80) {
        console.log('Tu roules à la bonne vitesse');
    }
    else if(speed < 100) {
        console.log('Il faut que tu ralentisse un petit peu');
    }
    else {
        console.log('À fond les gazs');
    }

    console.log('--------------');

    // ON PEUT AUSSI LES INBRIQUER LES UNS DANS LES AUTRES :

    let speed2 = 40;

    if(speed2 < 80) {
        if(speed2 < 50) {
            console.log('Accélére un peu');
        }
        else {
            console.log('Tu roules à la bonne vitesse');
        }
    }
    else if(speed2 < 100) {
        console.log('Il faut que tu ralentisse un petit peu');
    }
    else {
        console.log('À fond les gazs');
    }

    console.log('--------------');



    // SWITCH SYNTAXE : Parcour les variables ou conditions une par une jusqu'à ce qu'il trouve ce qu'il cherche pui sort du SWITCH par le BREAK. DEFAULT et la fin du SWITCH donc pas besoins de BREAK

    /* switch(variable OU condition) {
        case 1:
            break;
        case 2:
            break;
        default:
    } */

    let favoriteColor = 'blue';
    // OU
    /**
     * let favoriteColor = 'red';
     * let favoriteColor = 'green';
     */

    switch(favoriteColor) {
        case 'blue':
            console.log("Waouu! Le bleu c'est trop beau");
            break;
        case 'red':
            console.log("J'aimerais bien une voiture rouge");
            break;
        default:
            console.log("Je ne connais pas ta couleur");
    }

    console.log('--------------');

    // POSSIBLE DE METTRE PLUSIEURS CASE POUR UN BREAK :

    let favoriteColor2 = 'red';
    // OU
    /**
     * let favoriteColor2 = 'yellow';
     * let favoriteColor2 = 'blue';
     * let favoriteColor2 = 'red';
     * let favoriteColor2 = 'green';
     */

    switch(favoriteColor2) {
        case 'green':
        case 'blue':
            console.log("Waouu! Le bleu et le vert c'est trop beau");
            break;
        case 'yellow':
        case 'red':
            console.log("J'aimerais bien une voiture ou jaune rouge");
            break;
        default:
            console.log("Je ne connais pas ta couleur");
    }

    console.log('--------------');



// LOOPS (LES BOUCLES) : 

// SERT À EXECUTER UN CERTAINS CODES PLUSIEURS FOIS, TANT QU'UNE CERTAINE CONDITION EST RÉALISER, ON EXECUTE LE CODES.

    // PREMIER TYPE DE BOUCLE, WHILE, SYNTAXE :

    let number = 0;

    while(number < 3) {
        console.log(number);
        number ++;
    }

    console.log('--------------');

    // VARIANT DU WHILE, LE DO WHILE

    let number1 = 0;

    do {
        console.log(number1);
        number ++;
    }
    while(number1 > 0 && number1 < 3)

    console.log('--------------');

    // AUTRE DE TYPE DE BOUCLE QUI EST BEAUCOUP UTILISER, LE FOR :
        
        // SYNTAXE:

            /* for(Partie1; Partie2; Partie3) {
                CODE À EXECUTER
            }
            */

            // COMMENT IL FONCTIONNE :

                // Partie1 = c'est la partie initialisation, c'est-à-dire que c'est une partie qui se produit une fois, au début.
                // Partie2 = c'est la partie condition, c'est ici qu'on met la condition qu'on veux vérifier à chaque fois avant d'éxecuter le code.
                // Partie3 = c'est la partie qu'une fois que j'ai vérifier la condition, je fait deux choses : 
                    // - je fait le code qui à executer.
                    // - et la Partie3 (donc sa me permet de mettre souvent à jour des choses)

                    for(let number2 = 0; number2 < 5; number2 ++) {
                        console.log(number2);
                    }

                    console.log('--------------');



// FONCTIONS : C'est en générale une entiter qui prendre des paramétres qui va faire quelques choses avec ses paramétres (un calcul ou peu importe) et qui va nous retourner une valeur baser sur ses paramétres.

    // SYNTAXE :
    /*
    function nom(parameter1, parameter2, etc...) {
        CODE A EXECUTER
        return result;
    }
    */

    function multiply(number1, number2, number3) {
        return number1 * number2 * number3;
    }

    let a = 5;
    let b = 6;

    let result6 = multiply(a, b, a);
    console.log(result6);

    console.log('--------------');



// SCOPE, les scopes des variables :

    function multiply(number1, number2, number3) {
        let resultMultiply = number1 * number2 * number3;
        return resultMultiply;
    }

    let a1 = 5;
    let b1 = 6;

    let result7 = multiply(a1, b1, a1);
    console.log(result7);

    // OU (fonction global pour le resulMultiply):

    function multiply(number1, number2, number3) {
        resultMultiply = number1 * number2 * number3;
        return resultMultiply;
    }

    console.log('--------------');

    let a2 = 5;
    let b2 = 6;

    let result8 = multiply(a2, b2, a2);
    console.log(resultMultiply);

    console.log('--------------');



// ARRAYS, les tableaux :

    let fruits = ['pomme', 'fraise', 'banane', 'framboise'];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);
    console.log(fruits[3]);
    console.log(fruits[4]);

    console.log('--------------');

    // PARCOURIR UN TABLEAU COMPLET AVEC UNE FONCTION :

    let fruits2 = ['pomme', 'fraise', 'banane', 'framboise'];
    //for (let i = 0; Ceci est la premier partie du for) + ( i < fruits2.length; on va lui dire, tant que i est inférieur à la longueur de fruits) + ( i++ (on fait i++ pour le parcourir))
    for (let i = 0; i < fruits2.length; i++) {
        console.log(fruits2[i]);
    }

    console.log('--------------');

    let fruits3 = ['pomme', 'fraise', 'banane', 'framboise'];
    
    for (let i = 0; i <= fruits3.length; i++) {
        console.log(fruits3[i]);
    }

    console.log('--------------');


// PLUSIEURS FONCTIONS AVEC DES ARRAYS (POUR INFO LA PREMIER LIGNE DE NOTRE TABLEAU A L'IDENTIFIANT 0 ET NON 1):

    // RAJOUT D'UN ÉLÉMENTS DANS UN ARRAYS : 

    let fruits4 = ['pomme', 'fraise', 'banane', 'framboise'];
                // -- 0 --,  -- 1 --,  -- 2 --,   -- 3 -- etc ...

    fruits4.push('kiwi'); // .push(); rajoute un élément dans notre tableau    
    // fruits4.push('ananas');
    // fruits4.push('mangue');
    console.log(fruits4);

    console.log('--------------');

    // RETIRE UN ÉLÉMENTS DANS UN ARRAYS :

    fruits4.pop(); // .pop(); retire le dernier element dans notre tableau, il ne prend pas de valeur dans les ();
    // fruits4.pop()
    // fruits4.pop()
    console.log(fruits4);

    console.log('--------------');

    // .slice(); C'EST UNE FONCTION QUI PREND DEUX ARGUMENTS, 1 INDEX DE DÉBUT ET 1 INDEX DE FIN ET QUI NOUS RETOURNE LE SOUS ARRAY DEMANDER :

    let fruits5 = ['pomme', 'fraise', 'banane', 'framboise', 'kiwi', 'mangue'];
    console.log(fruits5);

    let agrumes1 = fruits5.slice(2, 4);
    let agrumes2 = fruits5.slice(3, 5);
    console.log(agrumes1); // montre à partir du 2 (banane) inclus jusqu'à 4 (kiwi) mais non inclus, donc il s'arrete au 3 (framboise).
    console.log(agrumes2); // montre à partir du 3 (framboise) inclus jusqu'à 5 (mangue) mais non inclus, donc il s'arrete au 4 (kiwi).

    console.log('--------------');

    let fruits6 = ['pomme', 'fraise', 'banane', 'framboise', 'kiwi', 'mangue'];
    console.log(fruits5);

    let agrumes3 = fruits6.slice(2);
    console.log(agrumes3); // montre à partir du 2 (banane) inclus et parcour jusqu'à la fin de notre tableau.

    console.log('--------------');

    // POSSIBILITER DE METTRE EN PLUS D'UN STRING DANS UN ARRAY, UN NUMBER, UN BOOLEAN :

    let myArray = ['pomme', 15, true];
    console.log(myArray);
    
    // POSSIBILITER DE METTRE UN ARRAY DANS UN ARRAY : 

        let myArrayDouble = [[0, 3] , [5, 6, 7] , ['Julien', 'Sandra', 'Rose', 'Myla']];
        console.log(myArrayDouble); // indique ce que contient notre array en nombre : (Array(2)= 0, 1), (Array(3)= 5, 6, 7), (Array(3)= 8, 9, 10, 11)

        // je choisi comme ceci ceux que je veux afficher comme valeur dans mes 3 array :
        console.log(myArrayDouble[0] [1]); // Array 0, je demande le numéros 1 dans mon array 0 qui est le number 3.
        console.log(myArrayDouble[1] [2]); // Array 1, je demande le numéros 2 dans mon array 1 qui est le number 7.
        console.log(myArrayDouble[2] [3]); // Array 2, je demande le numéros 3 dans mon array 2 qui est le string Myla.

        console.log('--------------');

    

// OBJETS : C'EST PLUS ADAPTER POUR D'ÉCRIRE LE MONDE TEL QU'ON LE PERCOIT, UN OBJET SA A DES PROPRIÉTER (PROPERTY) ET DES METHODES (DES METHODES C'EST DES FONCTIONS) :

    // SYNTAXE D'UN OBJET :
    /**
     * 
     * let objet = {
        propertyName1: propertyValue1, // le nom1 de la propriéter et sa valeur1
        propertyName2: propertyValue2, // le nom2 de la propriéter et sa valeur2
        methode1: function() {

        }
        };
     */

    let dog = {
        name: 'Myla',
        color: 'Noir & blanche',
        age: 5
    };
    console.log(dog); // j'affiche le résultat complet de mon objet dog.
    console.log(dog.color); // j'affiche le resultat demander qui est color de mon objet dog.
    console.log(dog['name']); // autre façon d'afficher le resulat demander qui est name de mon objet dog.

    console.log('--------------');

    // ON PEUX FAIRE UN BOUCLE (FOR) POUR LISTER TOUT LES PROPRIÉTER DE NOTRE OBJET :

    let me = {
        firstName: 'Julien',
        lastName: 'Perrot',
        age: 33,
        adress: '69, rue Sigefroi',
        city: 'Bettembourg',
        mail: 'jperrot@mikado.lu'
    };
    console.log(me);

    console.log('--------------');

    for(let property in me) {
        console.log(me[property]); // Parcoure toutes les propriéter et les valeurs de mon objet sous forme de boucle jusqu'à la fin.
    }

    console.log('--------------');

    // AUTRE FACON DE CRÉER UN OBJET EN UTILISANT LE CONSTRUCTEUR DE LA CLASSE OBJET : 

    let dog2 = new Object();
    dog2.name = 'Myla';
    dog2.color = 'Noir & blanche';
    dog2.age = 5;
    dog2.type = 'Bouledogue français';
    dog2.surname = 'Boudie';
    console.log(dog2);

    for(let property2 in dog2) {
        console.log(dog2[property2]);
    }

    console.log('--------------');

    // CRÉATION D'UNE METHODE (FUNCTION) AVEC UN OBJET :

    let me2 = new Object();
    me2.firstName = 'Julien';
    me2.lastName = 'Perrot';
    me2.age = 33;
    me2.adress = '69, rue Sigefroi';
    me2.city = 'Bettembourg';
    me2.mail = 'jperrot@mikado.lu';
    me2.job2 = function() {
        console.log('DEV front-end Junior') // cette fonction est déclarer (DEV front-end Junior) et elle est attribuer à me2.job2 mais je ne l'ai pas éxecuter. Donc rien ne s'affiche avec le console.log('DEV front-end Junior')
    };

    me2.job2(); // et la j'affiche ma fonction déclarer (DEV front-end Junior) qui est attribuer a me2.job2 et vu qu'il s'agit d'une fonction, je dois utiliser des parenthéses () pour dire execute la fonction.

    console.log('--------------');

    // EXEMPLE POUR FAIRE ABOYER PLUSIEURS FOIS MYLA (DONNER UNE METHODE À UN OBJET) :

    let dog4 = new Object();
    dog4.name = 'Myla';
    dog4.color = 'Noir & blanche';
    dog4.age = 5;
    dog4.type = 'Bouledogue français';
    dog4.surname = 'Boudis';
    dog4.aboie = function(number) {
        while(number>0) {
            //console.log('Wouaf');
            console.log(number.toString() + ' Wouaf');
            number--; // Pour éviter une boucle infinie.
        }
    };

    dog4.aboie(4);

    console.log('--------------');



// FONCTIONS CONSTRUCTEURS : 

    // CRÉER DES OBJETS QUI ONT LE MÊME TYPE, ON UTILISE LES FONCTIONS CONSTRUCTEURS :

        // COMMENT FAIRE : 

            // CREATION DE LA FONCTION CONSTRUCTEUR POUR DOG : 

            function Dog(nameDog, colorDog, ageDog, typeDog, surnameDog) {
                this.name = nameDog;
                this.color = colorDog;
                this.age = ageDog;
                this.type = typeDog;
                this.surname = surnameDog;
                this.aboie = function() {
                    console.log('Wouaf ' + this.name);
                }
            }

            // OU (CONVERSION DE LA FONCTION EN CLASSE ES2015)
            /**
             * class Dog {
                constructor(nameDog, colorDog, ageDog, typeDog, surnameDog) {
                    this.name = nameDog;
                    this.color = colorDog;
                    this.age = ageDog;
                    this.type = typeDog;
                    this.surname = surnameDog;
                }
            }
             */

                let chien1 = new Dog('Myla', 'Noir & blanche', 5, 'Bouledogue français', 'Boudie');
                let chien2 = new Dog('Lacie', 'Marron, noir & blanche', 7, 'Beagle', 'Patechoune');
                console.log(chien1);
                console.log(chien2);

                chien1.aboie();
                chien2.aboie();