import axios from 'axios'

const baseUrl = 'api/persons'

//for local testing use this url: http://localhost:3002/persons
//when building use this url: /api/persons


const getAll = async () => {
  try {
    const request =  await axios.get(baseUrl)
    return request.data
  } catch (error) {
    console.error('Error getting persons', error)
    return []
}
}

 const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
   return response.data
}

 const update = async (id, personObject) => {
  const request = axios.put(`${baseUrl}/${id}`, personObject)
  const response = await request
   return response.data
}

 const remove = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request
   return response.data
}

const personService = { 
  getAll: getAll, 
  create: create, 
  remove: remove,
  update: update
}

export default personService