export {};

// Property does not exist on type void in TypeScript

// EXAMPLE 1 - Functions that don't return anything return `void`

// 👇️ const getPromise: () => void
const getPromise = () => {
  Promise.resolve(42);
};

// ---------------------------------------------------

// // EXAMPLE 2 - Make sure to return a value from the function

// // 👇️ const getPromise: () => Promise<number>
// const getPromise = () => {
//   return Promise.resolve('bobbyhadz.com');
// };

// // ✅ Works
// getPromise().then((value) => {
//   console.log(value); // 👉️ "bobbyhadz.com"
// });

// ---------------------------------------------------

// // EXAMPLE 3 - Forgetting to return an object from a function

// const getObj = () => {
//   const obj = { name: 'Bobby Hadz' };

//   return obj;
// };

// console.log(getObj().name); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // EXAMPLE 4 - All code paths of the function should return a value

// const getPromise = (): Promise<number> => {
//   if (Math.random()) {
//     return Promise.resolve(42);
//   }

//   return Promise.resolve(33);
// };
