//Jack and Jill Went Up the Hill - American Literature
//by Mother Goose

//Jack and Jill went up the hill,
//To fetch a pail of water;
//Jack fell down, and broke his crown.
//And Jill came tumbling after.

//let water = true;
let water = false;


// 1. Create a Promise to fetch the water
let promise = new Promise(function (resolve, reject) {
  if (water) {
    
    // Pretend a delay of 3 sec to fetch it!
    setTimeout(function () {
      // Fetched the water. Let's resolve the promise
      resolve("WATER!");
    }, 3000);
    
  } else {
    setTimeout(function () {
      // Reject it as the disaster happend.
      reject(
      new Error(
        "Jack fell down and broke his crown. And Jill came tumbling after."
      )
      );
      }, 5000);
    }
  
});

// 2. Function to Set up the handler to handle a promise result.
// It is to inform the parents when the result is available.
const ParentsCooking = () => {
  
  // The handler function to handle the resolved promise
  promise.then(function (result) {
    // Fetched the water. Now parents can start the cooking
    console.log(`Cooking rice with the ${result}`);
  });
  
  // 2. Inform parents
  // but this time we are using the .catch
  promise.catch(function (error) {
    console.log(`OMG!!! ${error.message}`);
  });
};

// 3. Calling the function to activate the set up.
ParentsCooking();


