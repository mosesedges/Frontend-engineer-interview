import { BrowserRouter, Routes, Route } from "react-router";
import FullWidthCard from "./components/FullWidthCard";
import { data } from "./utils/patientsData";
import "./App.css";

export function Details() {
  const names = data
    .map((user) => user.firstName + " " + user.lastName)
    .toSorted();
  console.log(names);

  return (
    <div>
      <div className="pb-12 m-12 w-[18rem] h-[2rem]">
        <select
          name="patients"
          id="patientName"
          onChange={(event) => {
            event.target.value === "Caffe Latte" && alert("Caffe Latte");
          }}
        >
          <option value="" className="border-02">
            Sort by: Patient name A-Z{" "}
          </option>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row justify-around w-[82rem] h-[24rem]">
        <table>
          <thead>
            <tr className="p-8 border-b-2 border-opacity-0 m-6">
              <th className="px-48 ">Name</th>
              <th className=" px-38">Nhs number</th>
              <th className=" px-48">Vaccine type</th>
            </tr>
          </thead>

          {data.map((user) => {
            return (
              <tbody className="border-b-2 pb-28 m-12 bg-amber-100">
                <tr>
                  <td>{user.firstName + ", " + user.lastName}</td>
                  <td>{user.nhsNumber}</td>
                  <td>{user.vaccineType}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

function App() {
  const details = [
    "Make your money more Edge",
    "Automate bills. Organise how you spend. Save in clever new ways. All with a free Edge Current Account.",
    () => alert("opening account page"),
    "Open a new account",
    true,
    ["/src/assets/man.jpg", "money"],
  ];

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<FullWidthCard details={details}/>} /> */}
        <Route index element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
