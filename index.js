// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newArray = drivers.map(function(name) {
    return name.toLowerCase()
  })
  return newArray;
}

function nameToAttributes(drivers) {
  const newObject = drivers.map(function(driver) {
    firstName = driver.split(" ")[0];
    lastName = driver.split(" ")[1];
    return Object.assign({}, { firstName: firstName, lastName: lastName });
  });
  return newObject;
}

function attributesToPhrase(drivers) {
  const newArray = drivers.map(function(driver) {
    name = driver.name
    home = driver.hometown
    return `${name} is from ${home}`
  });
  return newArray;
}
