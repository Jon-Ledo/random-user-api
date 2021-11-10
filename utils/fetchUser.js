const URL = 'https://randomuser.me/api/'

const getUser = async() => {
  // setting up as async because we want to wait for the fetch to resolve
  const response = await fetch(URL)
  const data = await response.json()
  // destructure values
  const {
    phone, 
    email, 
    login:{password}, 
    location:{country}, 
    dob:{age},
    picture:{large},
    name: {first, last}
  } = data.results[0]

  return {
    phone,
    email,
    password,
    country,
    age,
    large,
    name: `${first} ${last}`,
  }
}

export default getUser