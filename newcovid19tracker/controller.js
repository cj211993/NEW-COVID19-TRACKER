import {CovidTracker, UI} from './model.js'

const covidTracker = new CovidTracker();
const ui = new UI();

const formInput = document.querySelector('#form-input');

formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchCountry = document.querySelector('#country-input').value;

    if(searchCountry !== '') {
        covidTracker.getInfectedCountry(searchCountry).then((data) => {
            console.log(data);
            if(data.message === "Country not found or does't have any cases") {
            // Show alert
            ui.showAlert("Change a few things up and try submitting again. Country not found or does't have any case", 'alert alert-dismissible alert-danger');
            ui.clearCountry();
            ui.clearFields();
            } else {
            ui.showResult(data);
            ui.clearFields();
            }
        });
    } else {
    ui.clearCountry();
    }
});