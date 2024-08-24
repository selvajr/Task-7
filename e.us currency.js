// Print the country that uses US dollars as currency.
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
function reqListener() {
    const countriesData = JSON.parse(this.responseText);
	// this.responseText;
	for (let ind = 0; ind < countriesData.length; ind++) {
        if (countriesData[ind].currencies?.USD){
	console.log(countriesData[ind].name.common," this country currencie is US Dollars");
	}
}
    }