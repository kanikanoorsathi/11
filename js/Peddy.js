// Creates loadCatagories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
}
// const buttonDemo ={
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

const loadButton =(id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${(id)}`)
    .then((res) => res.json())
    .then((data) => displaypets(data.data))
    .catch((error) => console.log(error));
}
// Creates displayCatagories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories")
    categories.forEach((item) => {
        console.log(item);
        // Create a button
        const buttonContainer = document.createElement("div");
        // button.classList = 'btn';
        // button.innerText =item.category;
        buttonContainer.innerHTML =`
        <button onclick="loadButton('${item.category}')" class="btn">
        <img class="w-5 h-5 object-cover" src="${item.category_icon}" alt="">
        ${item.category}
        <button>
        `
        // add button to categories container
        categoriesContainer.append(buttonContainer);
    });
}

loadCategories();

// Creates petsCards
const petsCards = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displaypets(data.pets))
    .catch((error) => console.log(error));

}
// const cardDemo = {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

// // Creates displaypets
const displaypets = (pets) =>{
const petsContainer = document.getElementById("pets-Cards")
petsContainer.innerHTML = "";
pets. forEach ((pet) => {
    console.log(pet);
    const card = document.createElement("div");
    card.classList = "card shadow m-4"
    card.innerHTML=`
    <figure class="px-3 pt-2">
     <img
       src=${pet.image}
       alt="pets"
       class="rounded-xl" />
    </figure>
    <div class="p-5 items-start text-start">
      <h2 class="card-title">${pet.pet_name}</h2>
      <div class=" flex">
         <img class="w-2 h-4 pt-2 mr-2 " src="./new-img/Breed.png" alt="">
         <p class="text-sm">Breed: ${pet.breed}</p>
      </div>
      <div class=" flex">
         <img class="w-2 h-4 pt-2 mr-2 " src="./new-img/Birth.png" alt="">
         <p class="text-sm">Birth: ${pet.date_of_birth}</p>
      </div>
      <div class=" flex">
         <img class="w-2 h-4 pt-2 mr-2 " src="./new-img/Gender.png" alt="">
         <p class="text-sm">Gender: ${pet.gender}</p>
      </div>
      <div class=" flex">
         <img class="w-2 h-4 pt-2 mr-2 " src="./new-img/Price.png" alt="">
         <p class="text-sm">Price: ${pet.price}</p>
      </div>
      <div class=" flex border rounded-md mt-2 p-3 cursor-pointer">
         <img class="border rounded p-1" src="./new-img/right.png" alt="">
         <p class="text-sm border rounded p-1 mx-2 text-emerald-700">Adopt</p>
         <p class="text-sm border rounded p-1 text-emerald-700">Details</p>
      </div>
    </div>
    `
    petsContainer.append(card);
})
}
petsCards()

