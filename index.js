// Add your code here
// 

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   function updateDogs(object) {
//     fetch("http://localhost:3000/dogs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//       body: JSON.stringify(object),
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (object) {
//         console.log(object);
//       })
//       .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//       });
//   }


function submitData(name, email){
    const bioData = {
        name : name,
        email : email
    }
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bioData)
    })
    .then(res => res.json())
    .then(function(data){document.body.innerHTML = data.id})
    .catch(function(error){
        alert("Bad request");
        document.body.innerHTML += error.message
    })
}
console.log(data)

  