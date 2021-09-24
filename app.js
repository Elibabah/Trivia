/*Trivia
Author: Elibabah!
Proyecto: 1 Bootcamp Coding Ajusco
15 septiembre 2021 
Entrega: 24 septiembre 2021*/


const aceptation = confirm("Do you want to do this TRIVIA about Studio Ghibli?");
//condicional de bienvenida y trae el nombre del user
if (aceptation) {
    alert("Follow me!");
    let UserName = prompt("What is your name?");
    console.log(UserName) // muéstrame el Username 
    alert("Welcome, " + UserName);

    var contadorBuenas = 0;
    var contadorMalas = 0;

    //Pregunta 1:
    let question1 = prompt("1. ¿Qué significa <Ghibli> para el Studio? \n\n a. Avión de combate italiano Caproni Ghibli \n b. Automóvil deportivo Maserati Ghibli  \n c. Viento cálido soplando a través del Sahara");
    if (question1 == "c") {
        alert("correcto")
        contadorBuenas++;
        console.log(contadorBuenas);
    } else {
        alert("incorrecto")
        document.getElementById("r1").innerHTML = "Respuesta correcta: c";
        contadorMalas++;
    }

    //Pregunta 2:
    let question2 = prompt("2. ¿Quiénes fundaron Studio Ghibli? \n\n a. Joe Hisaishi y Hayao Miyazaki \n b. Hayao Miyazaki y Lee-Ru-ma  \n c. Hayao Miyazaki, Isao Takahata y Toshio Suzuki");
    if (question2 == "c") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r2").innerHTML = "Respuesta correcta: c";
        contadorMalas++;
    }
    //Pregunta 3:
    let question3 = prompt("3. ¿Cuál de las siguientes películas recibió el Oso de Oro y el Óscar por mejor cinta animada en el 2002? \n\n a. La princesa Mononoke \n b. El viaje de Chihiro \n c. El viento se levanta");
    if (question3 == "b") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r3").innerHTML = "Respuesta correcta: b";
        contadorMalas++;
    }
    //Pregunta 4:
    let question4 = prompt("4. ¿Cuál de las siguientes películas pertenece a Studio Ghibli? \n\n a. Arrietty \n b. Heidi \n c. Los niños lobo");
    if (question4 == "a") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r4").innerHTML = "Respuesta correcta: a";
        contadorMalas++;
    }
    //Pregunta 5:
    let question5 = prompt("5. ¿Cuál ha sido la última película de Hayao Miyazaki? \n\n a. Ponyo \n b. Mi vecino Totoro \n c. El viento se levanta");
    if (question5 == "c") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r5").innerHTML = "Respuesta correcta: c";
        contadorMalas++;
    }
    //Pregunta 6:
    let question6 = prompt("6. ¿Cómo se llama el demonio de fuego que mueve <El castillo ambulante>? \n\n a. Calcifer \n b. Bruja Calamidad \n c. Howl ");
    if (question6 == "a") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r6").innerHTML = "Respuesta correcta: a";
        contadorMalas++;
    }
    //Pregunta 7:
    let question7 = prompt("7. Las películas <El castillo en el cielo> y <El castillo vagabundo> se basan en los libros de: \n\n a. Diana Wynne Jones \n b. J.K Rowling \n c. Oliver Jeffers");
    if (question7 == "a") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r7").innerHTML = "Respuesta correcta: a";
        contadorMalas++;
    }
    //Pregunta 8:
    let question8 = prompt("8. ¿Cuál es el nombre que le otorgan a Chihiro en los baños termales? \n\n a. Jiji \n b. Sosuke \n c. Zen");
    if (question8 == "c") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r8").innerHTML = "Respuesta correcta: c";
        contadorMalas++;
    }
    //Pregunta 9:
    let question9 = prompt("9. ¿Qué actividad realiza Kiki cuando viaja a la ciudad? \n\n a. Construye aviones \n b. Hace entregas a domicilio \n c. Hornea pan");
    if (question9 == "b") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r9").innerHTML = "Respuesta correcta: b";
        contadorMalas++;
    }
    //Pregunta 10:
    let question10 = prompt("10. ¿Qué nombre le dan al hollín en <El viaje de Chihiro>? \n\n a. Susuwataris \n b. Sin rostro \n c. Kodama");
    if (question10 == "a") {
        alert("correcto")
        contadorBuenas++;
    } else {
        alert("incorrecto")
        document.getElementById("r10").innerHTML = "Respuesta correcta: a";
        contadorMalas++;
    }
    document.getElementById("contadorBuenas").innerHTML = "Correct: " + contadorBuenas + " of 10. ¡Good job!";
}

//SALIDA
else {
    alert("Goodbye, Totoro! :(");

}