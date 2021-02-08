getInputValue = () =>{
    const searchBox = document.getElementById('input-field').value;
    if(searchBox == ""){  
        swal({
        text: "Please Enter Your Meal Name.",
      });
    }
       else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`)
        .then(response => response.json())
        .then(data => displayMeals(data))
      }

let defaultbody = document.getElementById('meals').innerHTML ="";
let defaultMealDetails = document.getElementById("mealDetail").innerHTML = "";

displayMeals = data =>{

            if(data.meals == null){
                swal({
                    text: "Please check spelling!",
                  });
            }else{
                data.meals.forEach(meal => {
                    let mealsDiv = document.getElementById('meals');
                    let mealDiv = document.createElement('div');
                    mealDiv.className = 'meal';
                    const mealList = ` 
                    <div onclick = "displayMealDetails(${meal.idMeal})">
                        <div>
                            <img src="${meal.strMealThumb}">
                        </div>    
                        <div class="heading">
                            <h6>${meal.strMeal}</h6>
                        </div>      
                    </div>
                    `;
                    mealDiv.innerHTML = mealList;
                    mealsDiv.appendChild(mealDiv);
                        });
            }
        }  
}
displayMealDetails = data =>{
    let defaultMealDetails = document.getElementById("mealDetail").innerHTML = "";
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ data+'';
    fetch(url)
    .then(response => response.json())
    .then(data => displayDetails(data.meals));
}
displayDetails = meals =>{
    meals = meals[0];
    const mealDiv = document.getElementById('mealDetail');
    const mealDetails = document.createElement('div');
    mealDetails.className = 'detailsMeal'
    const element = `
    <img src=${meals.strMealThumb}>
    <div class = detailHeadings>
        <h4>${meals.strMeal}</h4>
        <h6>Ingredient</h6>
    </div>
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
