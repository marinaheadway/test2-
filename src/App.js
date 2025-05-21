
import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import MyList from './MyList';
import MyMealsIngredients from './MyMealsAndIngredients';

function App() {


const [mealPlans, setMealPlans]= useState([]);

const [selectedDay, setSelectedDay]= useState(false);


const addMeal = () => {
  const newMeal={
    title:"Today is ....",
    id : uuid(),
    mealForADay: "",
    ingredients:""
  }
setMealPlans([newMeal,...mealPlans])
  console.log("newMeal")
}

const deleteDay=(mealId)=> {
  setMealPlans(mealPlans.filter(({id})=> id!== mealId))
}

const updateDay = (myUpdatedMeal) =>{
  const updatedMeals = mealPlans.map ((mealPlan)=> {
    if(mealPlan.id === myUpdatedMeal.id) {
      return myUpdatedMeal;
    }
    return mealPlan;
  })
  setMealPlans(updatedMeals)
}


const getActiveMeal =()=> {
  return mealPlans.find(({id}) => id === selectedDay)
}

  return (
    <div className="App">
     <MyList 
      mealPlans ={mealPlans}
       addMeal={addMeal} 
       deleteDay={deleteDay}
       selectedDay={selectedDay}
       setSelectedDay={setSelectedDay}/>

     <MyMealsIngredients 
     selectedDay={getActiveMeal()} 
     updateDay = {updateDay} />

    </div>
  );
}

export default App;
