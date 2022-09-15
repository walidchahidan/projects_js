// let success = true;
// let promess = new Promise(function(resolve, reject){
//     if (success) {
//       let a=1;
//       let b=5;
//         const results=a+b;
//           resolve(results);

//     } else {
//         const results = {
//             message: "This failed!"
//         };

//         reject(results);
//     }
// });

// promess.then(success => {
//   console.log(success);
// }).catch(error => {
//   console.log(error.message);
// })

// function nbrPair(nombre) {
//   let promess = new Promise(function (resolve, reject) {
//     if (nombre % 2 == 0) {
//       const results = nombre * nombre;
//       resolve(results);
//     } else {
//       const results = {
//         message: "nombre impair! ",
//       };
//       reject(results);
//     }
//   });
//   return promess;
// }
// nbrPair(3).then((results) => {
//     console.log(results);
//   }).catch(error => {
//     console.log(error.message);
//   })

// function sommeTab(n) {
//   let tab = [2, 10, 5, 9, 30];
//   let somme = 0;
//   let promess = new Promise(function (resolve, reject) {
//     if (n <= tab.length && n>0) {
//       for (let i = 0; i < n; i++) {
//         somme = somme + tab[i];
//       }
//       resolve(somme);
//     } else if (n>tab.length || n == 0) {
//       reject("nombre grand ou egale 0");
//     }
//   });
//   return promess;
// }


// let prom = sommeTab(3);
// // console.log(prom);
// prom
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

 



/*let promess = new Promise(function(resolve,reject){
  let phrase="I Love You";
  if(phrase.length>5){
       let regex = /(\w+) (\w+) (\w+)/g;
       resolve(phrase.replace(regex,"$3 $2 $1"));
  }else{
    reject("Phrase Incorrect")
  }
});

promess.then((phrase)=>{
  console.log(phrase);
}).catch((message) =>{
  console.log(message);
});
*/
// async function remplirTab(n){
  //   let tab=[];
  //   for(let i=0 ; i<n ;i++){
  //     tab[i]=i+1
  
  //   }
  //   return tab[i];
  // }
  // remplirTab(5);


//  function remplirTab(n){
//    let tab=[];
//    let promess = new Promise(function(resolve){
//     for (let i = 0; i<n ;i++) {
//       tab[i]=i+1;
     
//     }
//     resolve(tab);
//    });
//    return promess;
//  }
 
//   let prom = remplirTab(5);
//  prom.then((res) => {
//    console.log(res);
//  });
   
    // console.log(tab[i]);
   

    // let url = "https://jsonplaceholder.typicode.com/users";
    
    // function getUsersdata(url){
    //   fetch(url)
    // .then((users) => {
    //   return users.json();
    // })
    // .then((result) => {
    //   for(let i=0 ; i<10 ;i++){

    //     let use = result[i];
    //     console.log(use.name , use.username);
    //   }
      
    // });
    // }
    // getUsersdata(url);


 let url = "https://type.fit/api/quotes";
 

    function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async function getQuotes(url) {
      let quote = document.getElementById("quote");
      let auth = document.getElementById("auth");
      let data = await fetch(url);
      let data2 = await data.json();
      let nbr = randomBetween(1,100);

      
        let user = data2[nbr];
        // console.log(user.text);
        // console.log(user.author);
       quote.textContent=user.text;
       auth.textContent=user.author;


    }
    
    getQuotes(url);
    // let button = document.querySelector("button");
    // button.addEventListener("click", function () {
    //   getApiData(url);
    // });

   
  
  

