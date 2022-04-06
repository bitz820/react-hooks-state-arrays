import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilter] = useState("All")
  const foodsToDisplay = foods.filter((food)=> {
    if (filterBy === "All"){
      return true
    }else {
      return food.cuisine === filterBy
    }
  })


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  // function removeLi(id){
  //   const newArr = foods.filter(food => food.id !== id)
  //   setFoods(newArr)
  // }

  // const foodList = foods.map((food) => (
  //   <li onClick={() => removeLi(food.id)} key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  function updateHeat(id) {
    const newArr = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: ++food.heatLevel
        };

      } else {
        return food
      }
    })
    setFoods(newArr)
  }
  
  function filterFood(e){
    console.log(e)
    setFilter(e.target.value)
    // const newArr = filterBy.filter(food => food.cuisine === e.target.value)
    // setFilter(newArr)
    }



  const foodList = foodsToDisplay.map((food) => (
    <li onClick={() => updateHeat(food.id)} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


  return (
    <div>
      <select onChange={filterFood} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;


// import React, { useState } from "react";
// import { spicyFoods, getNewSpicyFood } from "../data";

// function SpicyFoodList() {
//   const [foods, setFoods] = useState(spicyFoods);

//   function handleAddFood() {
//     const newFood = getNewSpicyFood();
//     const newFoodArray = [...foods, newFood]
//     setFoods(newFoodArray);
//   }

//   // function handleRemoveFood(e){
//   //   console.log(foods)
//   //   console.log(e)
//   //   const result = foods.filter(food => food.name !== e.target.firstChild.data)
//   //   setFoods(result)
//   // }

//   function handleRemoveFood(id) {
//     console.log(id)
//     const newArray = foods.filter(food => food.id !== id)
//     setFoods(newArray)
//   }


//   const foodList = foods.map((food) => (
//     <li onClick={() => handleRemoveFood(food.id)} key={food.id}>
//       {/* <li onClick={(e) => handleRemoveFood(e)} key={food.id}> */}
//       {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
//     </li>
//   ));

//   return (
//     <div>
//       <button onClick={handleAddFood}>Add New Food</button>
//       <ul>{foodList}</ul>
//     </div>
//   );
// }

// export default SpicyFoodList;
