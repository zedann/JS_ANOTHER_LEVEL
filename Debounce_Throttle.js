/*
 * fn -> like search function to run after user stop typing with delay(to ensure that he stopped)
 * */
function debounce(fn, delay) {
  let timerId;

  return function(...args) {

    clearTimeout(timerId)

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);


  };
}

function searchAPI(query) {
  console.log(`Searching for :${query}`)
}


const debouncedSearch = debounce(searchAPI, 500);

document.getElementById('search').addEventListener('keyup', (e) => {
  debouncedSearch(e.target.value)
})


// throttle

function(fn, delay) {
  let lastCall = 0;

}
