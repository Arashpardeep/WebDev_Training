// console.log('start');

// const getInfo = (arg) => {
//     setTimeout(() => {
//         arg({ info: 'Job done!' });
//     }, 2000);
// };

// let update = getInfo();
// console.log(update.info);

// ===========================
// problems of asynchronous JS
// ===========================

// const getInfo = () => {
//   setTimeout(() => {
//       return { info: 'Job done!' };
//   }, 2000);
// };

// let update = getInfo();
// console.log(update.info);
// TypeError: Cannot read properties of undefined (reading 'info')

// ===============================================
// solution to asynchronous JS - callback function
// ===============================================

const getInfo = (arg) => {
  setTimeout(() => {
    arg({ info: "Job done!" });
  }, 2000);
};

getInfo((abc) => {
  console.log(abc.info);
});
