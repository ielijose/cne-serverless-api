const axios = require("axios")

const CNEService = module.exports

CNEService.query = async (nac, ci) => {
  try {
    const response = await axios.get(
      `http://www4.cne.gob.ve/consultamovil?nacionalidad=${nac}&cedula=${ci}&tipo=RE`
    )

    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
