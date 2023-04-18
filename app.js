"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

function initApp() {
  const postobject = parseJSONString(
    '{"name":"John", "age":30, "city":"New York"}'
  );
  console.log(postobject);

  const user = { name: "John", age: 30, city: "New York" };
  const cars = ["Ford", "BMW", "Audi", "Fiat", "VW"];

  console.log(stringify(user));

  console.log(stringify(cars));
}

function parseJSONString(jsonString) {
  const parsed = JSON.parse(jsonString);
  console.log(parsed);
  return parsed;
}

function stringify(object) {
  const jsonString = JSON.stringify(object);
  console.log(jsonString);
  return jsonString;
}
