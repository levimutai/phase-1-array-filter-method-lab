// Code your solution here
// Case-insensitive match of full name
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Match names that start with the provided letters
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Match driver objects where name property matches the query
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name === query);
}