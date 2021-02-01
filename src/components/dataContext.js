import { createContext } from 'react'

const jsonData = require('./assets/groundsData.json')


const dataContext = createContext(jsonData);

export default dataContext