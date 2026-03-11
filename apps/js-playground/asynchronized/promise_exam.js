// 1. delay
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    if (!ms || ms < 0) reject("delay 함수 오류 발생");
    setTimeout(() => resolve("delay 함수 실행"), ms)
  });
}

// 2. fetch mocking


// 3. promise.all
const log = (text) => {
  console.log(text);
}

const getData = (text, sec) => {
  return new Promise((resolve, reject) => {
    if (sec < 0 || !sec) reject('sec must be positive number');
    setTimeout(() => resolve(text), sec);
  })
}

Promise.all([
  getData('data1', 1000),
  getData('data2', 500),
  getData('data3', 300),
]).then(res => log(res)).catch(console.error);

const user = {
  id: 1,
  name: 'lee',
  age: 20,
}

const mockData = (isSuccess) => {
  return new Promise((resolve, reject) => {
    if (isSuccess) resolve(user);
    else reject(new Error('[Mock Error] 네트워크 에러'));
  });
}