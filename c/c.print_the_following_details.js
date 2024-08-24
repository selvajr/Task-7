// Print the following details name, capital, flag, using forEach method
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
function reqListener() {
    var countryData=JSON.parse(this.response);
    countryData.forEach((country)=>{
        console.log("countrie name:",country.name.common,",","Capital:", country.capital,",","Flag:",country.flags.png)
})}