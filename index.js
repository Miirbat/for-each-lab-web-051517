function iterativeLog(array){
  array.forEach(function (element, index){
    console.log(`${index}: ${element}`)
  })
}

function iterate(minion_function){
  dogs = ["german shepherd", "your mom", "your sister", "your grandma"]
  dogs.forEach(function(element){
    console.log(minion_function(element))
  })
  return dogs
}

function doToArray(array, callback_function){
  array.forEach(function(element){
    console.log(callback_function(element))
  })
}
