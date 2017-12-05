/*+++++++++++++++++++++TRAER ELEMENTOS DEL HTML AL JS+++++++++++++++++++++++++*/
document.body.onload = addElement;
var maxChars = 140; //número máximo de caracteres antes de cambiar de signo



/*++++++++++FUNCIÓN PARA CREAR, DEFINIR ATRIBUTOS, AGREGAR ELEMENTOS Y POSICIONAR
ELEMENTOS AL DOM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function addElement () {
/*+++++++++++++++++++++++++CREAR LOS ELEMENTOS NECESARIOS++++++++++++++++++++++*/
  //crear elemento 'section'
  var section = document.createElement("section");

  // crea elemento 'header'
  var header = document.createElement("header");
  // creando primer DIV - RETO
  var div1 = document.createElement("div");
  var title = document.createElement("p");
  var salute = document.createElement("p");
  var occupation = document.createElement("p");
  var code = document.createElement("p");
  var line1 = document.createElement("hr");

  // creando segundo DIV - INPUT
  var div2 = document.createElement("div");
  // contenedor de botón y contador
  var divBut = document.createElement("div");
  // creando tercer DIV - Visualiza mensaje
  var div3 = document.createElement("div");
  // creando botón TWEET
  var tweetButton = document.createElement("button");
  // creando espacio para que el usuario escriba
  //var textArea = document.getElementById("text-area-id");
  var textArea = document.createElement("textArea");
  // crea un TEXTAREA para el contador
  var textAreaCount = document.createElement("textArea");

  var subContainer = document.createElement("section");
  //var msgTuit = document.createElement("article");


/*+++++++++++++++DEFINIR ATRIBUTOS PARA LOS ELEMENTOS CREADOS++++++++++++++++++*/

  // Agrega el texto "Twitter" al 'header'
  var headerContent = document.createTextNode("Twitter");
  //Agrega el texto "Tweet" al botón
  var textButton = document.createTextNode("TWEET");
  // SECTION
  section.style.backgroundColor = "#A1AFB4"; //fondo gris del contenedor
  section.id = "container";
  subContainer.id = "subcontainer-id";
  // HEADER
  header.style.backgroundColor = "#6FD2F1";
  //DIV1 RETO DE CÒDIGO
  div1.style.backgroundColor = "white";
  div1.id = "div1-reto-id";
  div1.style.color = "black";
  //DIV2 INPUT
  div2.id = "div2-input-id";
  div2.style.color = "black";
  //DIVBUT contenedor de botón y CONTADOR
  divBut.id = "div-but-id";
  //TWEETBUTTON
  tweetButton.id = "button-id";
  tweetButton.disabled = true;
  tweetButton.style.backgroundColor = "#A1ADB7";
  //TEXTAREA
  textArea.id = "text-area-id";


  textArea.placeholder="¿Qué estás pensando?";

  //TEXTAREA COUNT
  textAreaCount.id = "text-area-count-id";
  textAreaCount.value = 140;

  title.innerText = 'Reto de Código';
  title.id = "title-id";
  salute.innerText = "Hola,";
  salute.id = "salute-id";
  occupation.innerText = "soy front-end developer jr.";
  occupation.id = "occupation-id";
  code.innerText = "CÓDIGO";
  code.id = "code-id";

  line1.id = "line1-id";



/*+++++++++++++++++++++++++++++++++++AGREGANDO EVENTOS++++++++++++++++++++++++++++*/
  tweetButton.onclick = functionClic;
  textArea.addEventListener('keyup', e => {
    var negative = document.getElementById("text-area-count-id").value = Number(maxChars - textArea.value.length);

    if(negative < 0 || textArea.value.length == 0){
      textAreaCount.style.color = "red";
      tweetButton.disabled = true;
      tweetButton.style.backgroundColor = "#A1ADB7";
    }
    else if(textArea.value.length >= 120 && textArea.value.length < 130){
      textAreaCount.style.color = "orange";
      tweetButton.disabled = false;
      tweetButton.style.backgroundColor = "#6FD2F1";
    }
    else if(textArea.value.length >= 130 && textArea.value.length < 141){
      textAreaCount.style.color = "#1978B5";
      tweetButton.disabled = false;
      tweetButton.style.backgroundColor = "#6FD2F1";
    }
    else{
      textAreaCount.style.color = "black";
      tweetButton.disabled = false;
      tweetButton.style.backgroundColor = "#6FD2F1";
    }
  }
);
// Inspirado en https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize

textArea.addEventListener('change', e => {
  resize();
});
/*++++++++++++++++++++POSICIÓN DONDE SE CREAN LOS ELEMENTOS+++++++++++++++++++++++*/
  // Agrega texto al 'HEADER' creado.
  header.appendChild(headerContent);
  //Agrega SECTION como hijo de BODY
  document.body.appendChild(section);

  //Agrega HEADER como hijo de SECTION
  section.appendChild(header);
  //Agrega DIV1 como hijo de 'section'
  section.appendChild(div1);
  //Agrega DIVBUT como hijo de section
  section.appendChild(div2);

  //Agrega TWEETBUTTON como hijo de DIV2
  divBut.appendChild(tweetButton);

  //Agrega TEXTAREA como hijo de DIV2
  div2.appendChild(textArea);

  //Agrega DIV2 como hijo de 'section'
  div2.appendChild(divBut);

  // Agrega texto al 'BOTÒN' creado.
  tweetButton.appendChild(textButton);

  //Agrega TEXTAREA CONTADOR como hijo de DIV2
  divBut.appendChild(textAreaCount);
  section.appendChild(subContainer);

  div1.appendChild(title);
  div1.appendChild(salute);
  div1.appendChild(occupation);
  div1.appendChild(line1);
  div1.appendChild(code);
}

/*+++++++++++++++++++++++++++++++++FUNCIONES++++++++++++++++++++++++++++++++++++*/
//Inspirado de w3schools.comA

function functionClic(){
  var newTuit = document.createElement("section");
  var textTuit = document.createTextNode(document.getElementById("text-area-id").value);
  var tuitList = document.getElementById("subcontainer-id");
  var timeStamp = document.createElement("PRE");
  var date = new Date();
  newTuit.className = "msgTuit";
  newTuit.appendChild(textTuit);

  //tuitList.insertBefore(newTuit, tuitList.childNodes[0]); //Inserta los tuits al principio
  tuitList.appendChild(newTuit); //Inserta los tuits al final
  timeStamp.appendChild(document.createTextNode(date.getHours()+":"+date.getMinutes()));
  newTuit.appendChild(timeStamp);

  document.getElementById("text-area-id").value = "";//limpia el textarea INPUT
  document.getElementById("text-area-count-id").value = 140;
  divChange();
}

function divChange(){
  document.getElementById("subcontainer-id").style.color = 'black';
  document.getElementById("subcontainer-id").style.fontFamily = "monospace";
  document.getElementById("subcontainer-id").style.fontSize = 14;
}

//function resize(){
  //document.getElementById("text-area-id").style.height = 'auto';
  //document.getElementById("text-area-id").style.height = document.getElementById("text-area-id").scrollHeight + 'px';

//}
