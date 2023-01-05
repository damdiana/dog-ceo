let breedsSelect = document.querySelector("#breeds");

insertBreedOptions();
displayImages('retriever');

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

async function displayImages(breed) {
    try {
        let resp = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
        let jsonResponse = await resp.json();
        console.log(jsonResponse);

        jsonResponse.message.forEach((src) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Cute doggo";
            document.body.appendChild(img);
        })

    } catch (err) {
        console.log('Something went wrong', err);
        let errorParagraph = document.createElement('p');
        errorParagraph.innerText = 'Nu am putut incarca imaginile. Te rugam sa incerci din nou.'
        document.body.appendChild(errorParagraph);

    }
}
