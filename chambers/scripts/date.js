//Obtains the submitted time
const today = new Date(); 

function datetimeLocal(datetime) {
    // Creates an object to hold the submited date
    let date = new Date(datetime);

    // Set up the minuts by reducing the UTC Minutes - timezone minezones
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

    // Thank
    return date.toISOString().slice(0, 16);
}


// Append the date into the form
const date = document.getElementById('date');
date.value = datetimeLocal(today);