var button=document.getElementById("event");
var table=document.getElementById("items");
var input=document.getElementById("country");


function draw(){
	table.querySelectorAll('*').forEach(n => n.remove());
			if(input.value!==""){
				
 			 fetch("https://covid19.mathdro.id/api/countries/"+input.value+"/deaths").then(response=>{
 			 	return response.json();
 			 }).then(data=>{

 			 		th1=document.createElement("th");
 			 		th2=document.createElement("th");
 			 		th3=document.createElement("th");
 			 		th4=document.createElement("th");
 			 		th5=document.createElement("th");
 			 		th1.appendChild(document.createTextNode("State"));
 			 		th2.appendChild(document.createTextNode("Confirmed"));
 			 		th3.appendChild(document.createTextNode("Recovered"));
 			 		th4.appendChild(document.createTextNode("Active"));
 			 		th5.appendChild(document.createTextNode("Deaths"));

 			 		tr=document.createElement("tr");
 			 		tr.appendChild(th1);
 			 		tr.appendChild(th2);
 			 		tr.appendChild(th3);
 			 		tr.appendChild(th4);
 			 		tr.appendChild(th5);
 			 		table.appendChild(tr);




 			 	if(data[0].provinceState===null){
 			 		var state=data[0].countryRegion;
 			 		var confirmed=data[0].confirmed;
 			 		var recovered=data[0].recovered;
 			 		var active=data[0].active;
 			 		var deaths=data[0].deaths;


 			 		th1=document.createElement("th");
 			 		th2=document.createElement("th");
 			 		th3=document.createElement("th");
 			 		th4=document.createElement("th");
 			 		th5=document.createElement("th");
 			 		th1.appendChild(document.createTextNode(state));
 			 		th2.appendChild(document.createTextNode(confirmed));
 			 		th3.appendChild(document.createTextNode(recovered));
 			 		th4.appendChild(document.createTextNode(active));
 			 		th5.appendChild(document.createTextNode(deaths));

 			 		tr=document.createElement("tr");
 			 		tr.appendChild(th1);
 			 		tr.appendChild(th2);
 			 		tr.appendChild(th3);
 			 		tr.appendChild(th4);
 			 		tr.appendChild(th5);
 			 		table.appendChild(tr);

 			 	}else{
 			 	for(var i=0;i<30;i++){
              
 			 		var state=data[i].provinceState;
 			 		var confirmed=data[i].confirmed;
 			 		var recovered=data[i].recovered;
 			 		var active=data[i].active;
 			 		var deaths=data[i].deaths;
                    th1=document.createElement("th");
 			 		th2=document.createElement("th");
 			 		th3=document.createElement("th");
 			 		th4=document.createElement("th");
 			 		th5=document.createElement("th");

 			 		
 			 		th1.appendChild(document.createTextNode(state));
 			 		th2.appendChild(document.createTextNode(confirmed));
 			 		th3.appendChild(document.createTextNode(recovered));
 			 		th4.appendChild(document.createTextNode(active));
 			 		th5.appendChild(document.createTextNode(deaths));
 			 		tr=document.createElement("tr");
 			 		tr.appendChild(th1);
 			 		tr.appendChild(th2);
 			 		tr.appendChild(th3);
 			 		tr.appendChild(th4);
 			 		tr.appendChild(th5);
 			 		table.appendChild(tr);
 			 	
 			 }
 			}
 			 	
 			 }	);
 			}
 			 
}

