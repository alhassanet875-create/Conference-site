let liste=JSON.parse(localStorage.getItem("participants"))||[];

document.getElementById("total").innerText=liste.length;

let table=document.getElementById("table");

liste.forEach(p=>{

table.innerHTML+=`

<tr>

<td>${p.nom}</td>
<td>${p.prenom}</td>
<td>${p.email}</td>
<td>${p.telephone}</td>
<td>${p.date}</td>

</tr>

`;

});

let jours={};

liste.forEach(p=>{

jours[p.date]=(jours[p.date]||0)+1;

});

new Chart(document.getElementById("chart"),{

type:"bar",

data:{

labels:Object.keys(jours),

datasets:[{

label:"Inscriptions",

data:Object.values(jours)

}]

}

});