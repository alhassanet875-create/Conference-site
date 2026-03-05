document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault();

let nom=document.getElementById("nom").value;
let prenom=document.getElementById("prenom").value;
let email=document.getElementById("email").value;
let telephone=document.getElementById("telephone").value;

let participant={nom,prenom,email,telephone,date:new Date().toLocaleDateString()};

let liste=JSON.parse(localStorage.getItem("participants"))||[];

liste.push(participant);

localStorage.setItem("participants",JSON.stringify(liste));

document.getElementById("message").innerText="Inscription réussie";

document.getElementById("qrcode").innerHTML="";

new QRCode(document.getElementById("qrcode"),{

text:nom+" "+prenom+" "+email,
width:128,
height:128

});

});