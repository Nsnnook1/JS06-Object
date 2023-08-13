const theSentinel = {};

while (true) {
  const key = prompt("Enter a property key :");
  if (key === "stop") break;

  const value = prompt(`Enter the value :`);
  theSentinel[key] = value;
}

console.log("Properties Object:", theSentinel);