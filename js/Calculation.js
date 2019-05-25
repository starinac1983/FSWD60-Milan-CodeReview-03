
function calculateInsurance() {
	var name = document.getElementById("yourname").value;
	var age = Number(document.getElementById("age").value); 
	var hp =Number(document.getElementById("hp").value); 
	var insurance1 = document.getElementById("insurance").value;
	
	console.log(name,age,hp,insurance1);

		
if (insurance1 == "Austria") 
{
insurance=Math.floor((hp*100)/age+50); 
document.getElementById('output').innerHTML = name+" your insurance costs "+insurance+ "€";
}
else if (insurance1 == "Hungary")
{
insurance=Math.floor((hp*120)/age+100);
document.getElementById('output').innerHTML = name+" your insurance costs "+insurance+ "€";
}
else if (insurance1 == "Greece") {
insurance=Math.floor(((hp*150)/(age+3))+100);
document.getElementById('output').innerHTML = name+" your insurance costs "+insurance+ "€";
}

}
