// Get all the countries with a population of less than 2 lakhs using Filter method
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
function reqListener() {
	const countriesData = JSON.parse(this.responseText);
    var population=countriesData.filter((x)=>x.population<200000);
    console.log(population);
}