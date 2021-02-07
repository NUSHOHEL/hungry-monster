 getInputValue = () => {
    let inputValue = document.getElementById('input-field').value;
    let api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    // let Api =`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`
    fetch(api)
    .then(res => res.json())
    .then(data => displayMeals(data));
 
     displayMeals = data =>{
            data.meals.forEach(meal => {
        let mealsDiv = document.getElementById('meals');
        let mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealList = ` 
        <img onclick="displayMealDetails(${meal.idMeal})" src="${meal.strMealThumb}">
        <div class="heading">
        <h6>${meal.strMeal}</h6>
        </div>       
        `;
        mealDiv.innerHTML = mealList;
        mealsDiv.appendChild(mealDiv);
            });
    }

}

 displayMealDetails = data =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ data+'';
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data.meals));
}

 displayDetails = meals =>{
meals = meals[0];
console.log(meals);
const mealDiv = document.getElementById('mealDetail');
const mealDetails = document.createElement('div');
mealDetails.className = 'detailsMeal'
const element = `
<img src=${meals.strMealThumb}>
<h4>${meals.strMeal}</h4>
<h6>Ingredient</h6>
<ul>
    <li>${meals.strMeasure1} ${meals.strIngredient1}</li>
    <li>${meals.strMeasure2} ${meals.strIngredient2}</li>
    <li>${meals.strMeasure3} ${meals.strIngredient3}</li>
    <li>${meals.strMeasure4} ${meals.strIngredient4}</li>
    <li>${meals.strMeasure5} ${meals.strIngredient5}</li>
    <li>${meals.strMeasure6} ${meals.strIngredient6}</li>
    <li>${meals.strMeasure7} ${meals.strIngredient7}</li>
    <li>${meals.strMeasure8} ${meals.strIngredient8}</li>
    <li>${meals.strMeasure9} ${meals.strIngredient9}</li>
</ul>
`;
mealDetails.innerHTML = element;
mealDiv.appendChild(mealDetails);


}

 
