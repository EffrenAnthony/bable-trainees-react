// traer datos
import axios from 'axios'

const BASE_URL = 'https://api.pexels.com'
// https://api.pexels.com/videos/videos/2499611
export const _videosService = {
  getSingleVideo: async (id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/videos/${id}`
        , {
          headers: {
            "Authorization": process.env.REACT_APP_PEXELS_API_KEY
          }
        }
      )
      const video = response.data
      return video
    } catch (e) {
      console.error(e)
    }
  },
  getVideosAsyncAwait: async (videosQuantity) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/videos/popular?per_page=${videosQuantity}`
        , {
          headers: {
            "Authorization": process.env.REACT_APP_PEXELS_API_KEY
          }
        }
      )
      const videos = response.data.videos
      return videos
    } catch (e) {
      console.error(e)
    }
  },
  getVideosPromises: (videosQuantity) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.REACT_APP_PEXELS_API_KEY); return new Promise((resolve, reject) => {
      fetch(
        `${BASE_URL}/videos/popular?per_page=${videosQuantity}`,
        {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        }
      )
        .then(response => {
          // console.log(response)
          response.json()
            .then(data => {
              // console.log(data.videos)
              resolve(data.videos)
            })
            .catch(err => reject(err))
        })
        .catch(err => reject(err))
    })
  }
}