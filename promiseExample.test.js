const promiseToTest = require("./promiseExample")

test('the data is peanut butter, with then', () => {
    return promiseToTest.then(data => {
      expect(data).toBe('peanut butter');
    });
});

test('the data is peanut butter, with async await', async () => {
    const data = await promiseToTest;
    expect(data).toBe('peanut butter');
});