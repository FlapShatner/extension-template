export const getUsers = async () => {
  const res = await fetch('/a/server/users')
  const users = await res.json()
  return users
}

function toUpper(data) {
  const valuesUpper = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      valuesUpper[key] = value.toUpperCase();
    } else {
      valuesUpper[key] = value;
    }
  }
  return valuesUpper;
}


export const saveWindow = async (data) => {
const upperData = toUpper(data)
// console.log(upperData)
try {
    const res = await fetch('/a/server/save', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(upperData),
    })
    const saved = await res.json()
    return saved
} catch (error) {
    console.log(error) 
}
}

export const getVehicles = async () => {
    const res = await fetch('/a/server/vehicles')
    const vehicles = await res.json()
    console.log(vehicles)
}