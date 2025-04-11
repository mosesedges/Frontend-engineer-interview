import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import removeDuplicates from "./whiteBoardTest/removeDublicates.ts";
import reverse from "./whiteBoardTest/reverse.ts";
import flatten from "./whiteBoardTest/flattenArrays.ts";

const body = document.querySelector("body");

const card = body?.querySelector(".card-carousel");

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  card?.textContent ??
  `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

//document.querySelector("#app")!.innerHTML = `<h1> This is a carousel </h1>`;

removeDuplicates("This is is a test test case");
reverse("Hello world");
flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10] as number[]);

//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const cardRequest = {
  URL: "https://jsonplaceholder.typicode.com/todos/3",
  request: async () => {
    const response = await fetch(cardRequest.URL);
    return await response.json();
  },
};

console.log(await cardRequest.request());
