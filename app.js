let breedsSelect = document.querySelector("#breeds");

insertBreedOptions();

async function insertBreedOptions() {
    try {
        let resp = await fetch('https://dog.ceo/api/breeds/list/all');
        let jsonResponse = await resp.json();
        console.log(jsonResponse);

        breedsSelect.innerHTML = "";
        Object.keys(jsonResponse.message).forEach(breed => {
            const newOption = document.createElement('option');
            newOption.value = breed;
            newOption.innerText = breed;
            breedsSelect.appendChild(newOption);
        })

    } catch (err) {
        console.log('Something went wrong', err);
        let errorParagraph = document.createElement('p');
        errorParagraph.innerText = 'Nu am putut sa descarcam lista. Te rugam sa incerci din nou.';
        document.body.appendChild(errorParagraph);
    }
}

