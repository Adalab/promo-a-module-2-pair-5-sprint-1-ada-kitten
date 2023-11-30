'use strict';

const KittenList = document.querySelector('.js-list');

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastacio';
const kittenDescription1 =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';

const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDescription2 =
  ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDescription3 =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';


const KittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">${kittenDescription1}</p>
</article>
</li>`;

const KittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">${kittenDescription2}</p>
</li>`;

const KittenThree = `<li class="card">
  <img
    class="card_img"
    src="${kittenImage3}"
    alt="maine-coon-cat"
  />
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">${kittenDescription3}</p>
</li>`;

KittenList.innerHTML = KittenOne + KittenTwo + KittenThree;

const addButton = document.querySelector('.js_addButton');

const formSection = document.querySelector('.js_formSection');

addButton.addEventListener('click',(event)=> {
    formSection.classList.toggle('collapsed');
})

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');


buttonAdd.addEventListener('click', (event) => {
  event.preventDefault()

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;

  // Verificar si los campos obligatorios tienen contenido
if (valueName === '' || valuePhoto === '' || valueDesc === '') {
  // Mostrar mensaje de error si algún campo está vacío
  labelMessageError.innerHTML = 'Por favor, completa todos los campos obligatorios.';
} else {
const newKittenHTML = `<li class="card">
  <article>
    <img
    class="card_img"
    src="` + valuePhoto + `"
    alt="gatito"
    />
    <h3 class="card_title">` + valueName + `</h3>
    <h4 class="card_race">` + valueBreed + `</h4>
    <p class="card_description">
   ` + valueDesc + `
    </p>
  </article>
  </li>`;

  KittenList.innerHTML = KittenOne + KittenTwo + KittenThree + newKittenHTML;

  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputBreed.value = '';

}})

const buttoncancel = document.querySelector('.js-btn-cancel');

buttoncancel.addEventListener('click', (event) => {
  event.preventDefault() 

  formSection.classList.add('collapsed');

})

const input_search_desc = document.querySelector('.js_in_search_desc');
const buttonSearch = document.querySelector ('.js_search');
const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault() 
  const descrSearchText = input_search_desc.value; 
  let resultElement = "";

if( kittenDesc1.includes(descrSearchText) ) {
  resultElement += KittenOne;
  }
  
else if( kittenDesc2.includes(descrSearchText) ) {
    resultElement += KittenTwo;  
  }
  
else if( kittenDesc3.includes(descrSearchText) ) {
    resultElement += KittenThree;
  }

KittenList.innerHTML = resultElement;
  
});


