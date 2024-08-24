// Get all the countries from Asia continent /region using Filter method

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
function reqListener() {
	const countriesData = JSON.parse(this.responseText);
    var asia =countriesData.filter((countrie)=>countrie.region==="Asia"); 
    console.log(asia);
}