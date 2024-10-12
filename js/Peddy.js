// Creates loadCatagories
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
}
// Creates displayCatagories
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories")
    categories.forEach((item) => {
        console.log(item);
        // Create a button
        const button = document.createElement("button");
        button.classList = 'btn';
        button.innerText = item.category;

        // add button to categories container
        categoriesContainer.append(button);
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
const cardDemo = {
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
}

// // Creates displaypets
const displaypets = (pets) =>{
const petsContainer = document.getElementById("pets-Cards")
pets. forEach ((pet) => {
    console.log(pet);
    const card = document.createElement("div");
    card.classList = "card shadow m-4"
    card.innerHTML=`
    <figure class="px-10 pt-10">
     <img
       src=${pet.image}
       alt="pets"
       class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `
    petsContainer.append(card);
})
}
petsCards()

