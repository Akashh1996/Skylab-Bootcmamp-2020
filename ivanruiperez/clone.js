function clone(object) {
  let cloneObject = Object.assign({}, object, { spain: "Polinya" });
  return cloneObject;
}
let cityCountries = { spain: "Barcelona", usa: "New York" };
clone(cityCountries);
