

// document.getElementById('h1').onclick = function(){
//         console.log("welcome to codelandia");
// }

// let h1 = document.getElementById('h1');

// h1.addEventListener('click',sayHello);


// function sayHello(){
//     console.log("welcome");
// }

// document.addEventListener('DOMContentLoaded',addAllEvents);

// function addAllEvents(){

// }

// document.getElementById('h1').addEventListener('click',function(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
// })

// let elems = Array.from(document.getElementsByTagName('input'));

// elems.forEach(item => {
//     item.addEventListener('click', function (e) {
//         if (e.target.type === 'text') {
//             console.log(e);
//         }
//     });
// })

// let form = document.getElementById('my-form');
// form.addEventListener('submit',function(e){
//     console.log(e);

//    e.preventDefault();
// });

// keyboard

//keypress

// document.addEventListener('keyup',function(e){
//     console.log(e.key);
// });


document.getElementById('txt').addEventListener('focus',function(e){
    console.log('Codelandia');
});

document.getElementById('txt').addEventListener('blur',function(e){
    console.log('Codelandia blur event');
});

//keyup


//keydown