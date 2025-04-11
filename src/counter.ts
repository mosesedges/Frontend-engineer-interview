export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

const card = {
  URL: "https://jsonplaceholder.typicode.com/todos/1",
  request: async () => {
    const response = await fetch(card.URL);
    return await response.json();
  },
};
