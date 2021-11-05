
// const cat1 = { 
//     name: 'Locki',
//    friendly: true,
//    speak: () => console.log("Meow! Meow!"),
//    LikeDogs: true
// };
// cat1.name = "Locki";
// cat1["sit"] = () => console.log("Sit");
// delete cat1.LikeDogs;
// cat1.hasOwnProperty('Meowing');
// cat1.hasOwnProperty('LikesEatingOranges');
// const target = {a: 2, b: 5};
// const source = {b: 3, c: 1};
 
// const returnedTarget = Object.assign(target, source);
//  console.log(target);

//  console.log(returnedTarget);
 
//  //Object.create()
//  const person = {
//      isHuman: false,
//      printIntroduction: function(){
//          console.log(`My name is ${this.name}. Am i a human? ${thus.isHuman}`);
//      }
//      };
//      const Pill = Object.create(person);
//      Pill.name = 'Pillypth';
//      Pill.isHuman = true;
//      Pill.printIntroduction();
     //------------------------------------------------
// const object1= {
//     a: 'smth',
//     b: 55
// };
// for (const [key, value] of Object.entries(object1)){
//     console.log(`${key}: ${value}`);
// }
// const obj = {
//     prop: 10
// };
// Object.freeze(obj);
// obj.prop = 33;
// console.log(obj.prop);
// const obj1= {
//     a: 'all inc',
//     b: 322,
//     c: true
// };
// console.log(Object.keys(obj1));
const cat = {
    friendly: true,
    likeDogs: false,
    speak: () => console.log('Meow Meow'),
};
const Miky = Object.assign({}, cat);
Miky.name = 'Miky';
Miky.age = 4;
const Locky = Object.assign({}, cat);
Locky.name = 'Locky';
Locky.age = 0.6;
delete cat.likeDogs;
console.log("The cats name is -", Miky.name,',', Locky.name);
console.log("The cats age is -", 'Miky', Miky.age, 'Locky', Locky.age);

cat.speak()
if (cat.friendly) {
    console.log("Cat need pet ▼・ᴥ・▼!!!")
}