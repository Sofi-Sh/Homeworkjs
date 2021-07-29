// function wakeup(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout( ()=> {
//             console.log('Я прокидаюсь о 7:30 год')
//             if(time< 8){ console.log('Прокинутись')
//                 resolve('Wake up');
//             }else {
//                 console.log('Проспала');
//                 reject('Проспала, сиди вдома');
//             }
//
//
//         },200);
//
//
//     });
// }
//
// function getashower (){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('Піти в душ');
//             resolve ('Get a shower');
//         },300);
//         });
// }
//
// function haveBreakfast() {
//     return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//           console.log('Поснідати');
//           resolve ('have breakfast');
//       },1000) ;
//     });
// }
//
// function gotoWork(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//          console.log('Поїхати на роботу');
//          resolve('go to work');
//         },700);
//     });
// }
//
// function work() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//            console.log('Попрацювати на роботі') ;
//            resolve ('at work')
//         },800);
//     });
// }
// function haveLunch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Піти на обід');
//             resolve ('have lunch');
//         },300) ;
//     });
// }
//
// function goShopping(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Піти за покупками');
//             resolve('go shopping');
//         },500);
//     });
// }
//
// function gotoHome(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Поїхати додому');
//             resolve('go to home');
//         },400);
//     });
// }
//
// function havesupper() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Приготувати вечерю та повечеряти');
//             resolve ('have supper');
//         },350) ;
//     });
// }
// function hobby() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Прочитати 5 сторінок книги');
//             resolve ('hobby');
//         },500) ;
//     });
// }
// function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Піти спати');
//             resolve ('goodnight');
//         },660) ;
//     });
// }

// wakeup(7)
//
// .then((value) => {
//     return getashower();
// })
//     .then((value)=>{
//         return haveBreakfast();
//     })
//     .then((value) => {
//         return gotoWork();
//     })
//     .then((value)=>{
//         return work();
//     })
//     .then((value)=>{
//         haveLunch();
//     })
//     .then((value)=>{
//         return goShopping();
//     })
//     .then((value)=>{
//         return gotoHome();
//     })
//     .then((value)=>{
//         return havesupper()
//     })
//     .then((value) => {
//        return  hobby();
//     })
//     .then((value) => {
//        return  sleep();
//     })
// .catch(reason => {
//     console.log('*****************ERROR**********');
//     console.log(reason);
// })
//
// function wakeup(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Я прокидаюсь о 7:30 год')
//             if (time < 8) {
//                 console.log('Прокинутись')
//                 resolve('Wake up');
//             } else {
//                 console.log('Проспала');
//                 reject('Проспала, сиди вдома');
//             }
//
//
//         }, 200);
//
//
//     });
// }
//
// function getashower() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Піти в душ');
//             resolve('Get a shower');
//         }, 300);
//     });
// }
//
// function haveBreakfast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Поснідати');
//             resolve('have breakfast');
//         }, 1000);
//     });
// }
//
// function gotoWork() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Поїхати на роботу');
//             resolve('go to work');
//         }, 700);
//     });
// }
//
// function work() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Попрацювати на роботі');
//             resolve('at work')
//         }, 800);
//     });
// }
//
// function haveLunch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Піти на обід');
//             resolve('have lunch');
//         }, 300);
//     });
// }
//
// function goShopping() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Піти за покупками');
//             resolve('go shopping');
//         }, 500);
//     });
// }
//
// function gotoHome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Поїхати додому');
//             resolve('go to home');
//         }, 400);
//     });
// }
//
// function havesupper() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Приготувати вечерю та повечеряти');
//             resolve('have supper');
//         }, 350);
//     });
// }
//
// function hobby() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Прочитати 5 сторінок книги');
//             resolve('hobby');
//         }, 500);
//     });
// }
//
// function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Піти спати');
//             resolve('goodnight');
//         }, 660);
//     });
// }
//
// async function myWorkingDay() {
//     try {
//         const day = await wakeup(7);
//         console.log(day);
//         const shower = await getashower();
//         const breakfast = await haveBreakfast();
//         const goWork = await gotoWork();
//         const work1 = await work();
//         const lunch = await haveLunch();
//         const shop = await goShopping();
//         const home = await gotoHome();
//         const supper = await havesupper();
//         const read =await hobby();
//         const sl = await sleep();
//
//     } catch (e) {
//         console.warn('EROR');
//         console.warn(e);
//     }
//
// }
//
// myWorkingDay();

