class CovidTracker {
    async getInfectedCountry(country) {
        const countryResponse = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
        const countryName = await countryResponse.json();    
        
        return countryName;
    }
}

class UI {
    constructor() {
        this.result = document.querySelector('#result');
        this.input = document.querySelector('#country-input');  
    }  
    showResult(country) {
        this.result.innerHTML =`
        <div class="col mb-3">
                    <h2 class="text-center">WORLD MAP</h2>
                        <img src="img/clay-banks-no2blvVYoJw-unsplash.jpg" alt="" class="img-fluid mb2">
                        <h3><b><u>Three Important Ways to Slow the Spread</u></b></h3>
                        <p><i>1. Wear a mask to protect yourself and others and stop the spread of COVID-19.</i></p>
                        <p><i>2. Stay at least 6 feet (about 2 arm lengths) from others who don’t live with you.</i></p>
                        <p><i>3. Avoid crowds. The more people you are in contact with, the more likely you are to be exposed to COVID-19.</i></p>
                    </div>
                    <div class="col md-9">
                        <h1 class="alert bg-dark">Country</h1>
                        <h3 class="alert bg-danger">Total Cases</h3>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group bg-dark text-white">Active cases: ${country.country}</li>
                            <li class="list-group bg-light text-black">Critical cases: ${country.cases}</li>
                            <li class="list-group bg-dark text-white">Recovered cases: ${country.recovered}</li>
                            <li class="list-group bg-light text-black">Total Deaths: ${country.deaths}</li>
                            <li class="list-group bg-dark text-white">Total cases: ${country.todayCases}</li>
                            <li class="list-group bg-light text-black">Today Deaths: ${country.todayDeaths}</li>
                            <li class="list-group bg-dark text-white">Today Recovered: ${country.todayRecovered}</li>
                            <li class="list-group bg-light text-black">Total Test: ${country.tests}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    showAlert(message, className) {
        // clear any reamaining alerts
        this.clearAlert();
        // Create DIV
        const div = document.createElement('div');
        // add class
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert alert
        container.insertBefore(div, search)
        setTimeout(() => {
            this.clearAlert();
        }, 5000);
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
    clearCountry() {    
        this.result.innerHTML = '';
    }
    clearFields() {
        this.input.value = '';  
    }
}
export {CovidTracker, UI}