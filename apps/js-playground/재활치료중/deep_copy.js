const obj = {a: 1, b: 2, c: {d: 3, e: 4}}
const copy = structuredClone(obj);

console.log("복사된 객체:", copy);
console.log("원본 객체:", obj);
console.log("\n==================================\n")
console.log("복사된 객체와 원본 객체는 다른 메모리 주소를 가짐:", copy !== obj);
console.log("복사된 객체의 중첩 객체도 원본 객체의 중첩 객체와 다른 메모리 주소를 가짐:", copy.c !== obj.c);

console.log("\n==================================\n")
console.log("복사된 객체의 중첩 객체의 속성도 원본 객체의 중첩 객체의 속성과 다른 메모리 주소를 가짐:", copy.c.d !== obj.c.d);

console.log("\n==================================\n")
console.log("복사된 객체의 중첩 객체의 속성 값과 원본 객체의 중첩 객체의 속성 값은 다른 값:", copy.c.d !== obj.c.d, "\n복사된 객체의 중첩 객체의 속성 값:", copy.c.d, "\n원본 객체의 중첩 객체의 속성 값:", obj.c.d);

console.log("\n==================================\n")
console.log(copy.c.d === obj.c.d)