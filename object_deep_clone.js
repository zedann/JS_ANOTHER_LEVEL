const projectx = {
  name: "projectx",
  language: "javascript",
  frameworks: ["nextjs", "expressjs"]
}
function deepClone(obj) {
  if (obj == null || typeof obj != 'object')
    return obj;


  const initialValue = Array.isArray(obj) ? [] : {};


  const clonedObj = Object.keys(obj).reduce((acc, key) => {
    acc[key] = deepClone(obj[key]);
    return acc;
  }, initialValue)


  return clonedObj

}

let projectY = deepClone(projectx);

// console.log(projectY, "x\n", projectx)
// projectY.name = "projecty"
// console.log("\n", projectY, "x\n", projectx)

// simulate acc behavior
let test = {}

test['name'] = projectx['name']

test['name'] = "test"

console.log(projectx)


