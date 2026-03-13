function debounce(callback, delay) {
  let timerId = null;

  return function(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  }
}

function searchKeyword(keyword) {
  console.log("검색 API 요청:", keyword);
}

const debouncedSearch = debounce(searchKeyword, 500);

debouncedSearch("r")
debouncedSearch("re")
debouncedSearch("rea")
debouncedSearch("reac")
debouncedSearch("react")