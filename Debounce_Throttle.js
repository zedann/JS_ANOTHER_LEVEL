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


// throttle prevent function from being calling too much -> scrolling (get called once in specific time)

function throttle(fn, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    const ctx = this;

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(ctx, args);
    }

  }

}


function handleScroll() {
  console.log("scroll even at", window.screenY)
}


const throttledScroll = throttle(handleScroll, 200);

window.addEventListener('scroll', throttledScroll)
