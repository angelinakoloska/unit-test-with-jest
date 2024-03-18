const promiseToTest = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 300);
});

module.exports = promiseToTest