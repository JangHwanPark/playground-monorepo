// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures

function outer(callback, val) {
  let cnt = 0;
  return callback(val);
}

function inner(val) {
  if (val) {
    console.log(`클로저: ${cnt}, ${val}`)
    cnt += val;
  } else {
    console.log(`클로저: ${cnt}`)
    cnt++;
  }
}

// 상태를 숨기고 싶을때
// 실행할때마다 이전값 기억
// 특정함수만 사용하는 전용 상태