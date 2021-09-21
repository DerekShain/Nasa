import axios from 'axios'
import { AppState } from '../AppState'
import { SpacePic } from '../models/SpacePics'
import { logger } from '../utils/Logger'
const apiKey = 'api_key=U5IN6eDHmClgfEQ7X8gWfCq3DxT4bkfUH2yJTUUr'

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})
class SpaceService {
  async findSpacePic(query) {
    const res = await nasaApi.get(`?${apiKey}&date=${query}`)
    logger.log('the res', res)
    AppState.apod = new SpacePic(res.data)
  }
}

export const spaceService = new SpaceService()

// https://api.nasa.gov/planetary/apod?api_key=U5IN6eDHmClgfEQ7X8gWfCq3DxT4bkfUH2yJTUUr
