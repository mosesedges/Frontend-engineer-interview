import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import removeDuplicates from "./whiteBoardTest/removeDublicates.ts";
import reverse from "./whiteBoardTest/reverse.ts";
import flatten from "./whiteBoardTest/flattenArrays.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
removeDuplicates("This is is a test test case");
reverse("Hello world");
flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10] as number[]);

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
