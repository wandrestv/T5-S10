const contenido= document.getElementById("contenido");

let nombre = "Wilmer Ândrés Trujillo Vera";
let edad = 22;

let edades=[1, 60, 40, 7, 78, 90, 22];
addContent("<h2>"+nombre+"</h2>"+"<h3>"+edad+"</h3>");


for(let i=6; i <= 10; i++){
    addContent("<h3>La edad es de "+i+" años</h3>");
}
function addContent(newContent){
    contenido.innerHTML += newContent;
}


for(let i=0; i < edades.length; i++){
    addContent("<h3>La edad es de: "+edades[i]+" años.</h3>");
}
function addContent(newContent){
    contenido.innerHTML += newContent;
}

