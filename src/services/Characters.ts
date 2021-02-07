import { type } from 'os'
import {API_URI} from '../utils/constans'

const getCharaters = async () => {
    const _json = await fetch(API_URI)
    const personajes = await _json.json()

    return personajes.results
}

export default getCharaters