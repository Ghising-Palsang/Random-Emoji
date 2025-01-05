// // console.log("hello");

// // // ==== Classes and Objects

// // let obj = {
// //     hello(){
// //         console.log("hello");
// //     }
// // };

// // let obj2 = {
// //     hi(){
// //         console.log("hi");
        
// //     }  
// // }

// // obj2.__proto__ = obj;


// // //=== Creating class

// // class Person{
// //     constructor(name, post){
// //         this.name = name;
// //         this.post = post;
// //     }


// //     eat(){
// //         console.log("eat");
        
// //     }

// //     sleep(){
// //         console.log("sleep");
        
// //     }
// // }

// // let newPerson1 = new Person("Alice", "Manager");



// // //==== Inheritance

// // class aPerson {

    
// //         constructor(name, post, age){
// //             this.name = name;
// //             this.post = post;
// //         }
    
    
// //         eat(){
// //             console.log("eat");
            
// //         }
    
// //         sleep(){
// //             console.log("sleep");
            
// //         }
    
// // }

// // class webDeveloper extends aPerson{
// //     constructor(name,post, age){
// //         super(name, post, age);
// //         this.age = age;
// //     }

// //     work(){
// //         super.eat();
// //         console.log("Solve Problem");
        
// //     }

    
// // }

// // let aPerson1 = new webDeveloper("Parsan", "Senior Developer",25 );






// // //==== try-catch

// // console.log(1);
// // console.log(1);
// // try{
// //     console.log(donut);
// // }catch(err)
// //     {console.log("err");
// // }
// // console.log(1);
// // console.log(1);
// // // console.log(1);



// //========== Callback, Promises, Async-await


// // function sum(a,b){
// //     console.log(a + b);
    
// // }

// // function calculator(a,b, sum){
// //     sum(a,b);
    
// // }

// // calculator(2,3,sum)
// // calculator(10,10, sum)



// // function getData(id,getNextData){
// //     setTimeout(()=>{
// //             console.log(id);
// //             if(getNextData){
// //         getNextData()
// //     } 
// //     },2000)   
    
// // }

// // getData(1, ()=>{
// //    console.log("getting data 2....");
// //    getData(2, ()=>{
// //        console.log("getting data 3....");
// //     getData(3,()=>{
// //            console.log("getting data 4....");
// //         getData(4)})}) 
// // });





// // ====== Promises

// let promise = new Promise((resolve, reject)=>{
//     console.log("hello");
//      resolve("success");
//     // reject("err")
// })




// function getData(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(id);
//             resolve("success");
           
    
//     },2000)   
    
//     })
// }

// //===== Promise Chain
// // getData(1).then((res)=>{
// //    return getData(2)
// // }).then((res)=>{
// //      return getData(3)
    
// // }).then((res)=>{
// //     console.log(res);
    
// // })




// //=== Async-await






// function getData(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(id);
//             resolve("success");
           
    
//     },2000)   
    
//     })
// }

// (async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })()


// ===== Practical Work
// ====== fetch data from API

const URL = `https://emojihub.yurace.pro/api/random`;
const body = document.querySelector("body");
const btn = document.querySelector("button");


const getEmojiData = (async()=>{
    try{
        let response = await fetch (URL);
        console.log(response);
        
        if(response.ok){
            let data = await response.json();
           console.log(data.htmlCode[0],data.htmlCode[1]);
           const p = document.querySelector("p");
           p.innerHTML = data.htmlCode[0],data.htmlCode[1];
          
           
           
           
            
        }else{
            console.log("Error");
            
        }
    }catch(error){
        console.log(`Network error : ${error.message}`);
        
    }
})();

btn.addEventListener("click",()=>{
    location.reload();
})






