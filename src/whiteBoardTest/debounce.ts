//create a debounce function.

const debounce = (mainFn: () => void, delay: number | undefined) => {
  let timer: number;
  return function (...args) {
    clearInterval(timer);
    timer = setInterval(() => {
      mainFn(...args);
    }, delay);
  };
};

// usage

function search() {
  console.log("searching");
}

const debounceSearch = debounce(search, 5000);
console.log(debounceSearch);
