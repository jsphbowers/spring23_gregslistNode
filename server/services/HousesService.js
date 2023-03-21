import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {



  async getHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }
  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    if (!house) {
      throw new BadRequest("Ain't no house with dat ID!!!")
    }
    return house
  }

  async createHouse(houseData) {
    const newHouse = await dbContext.Houses.create(houseData)
    return newHouse
  }
  async editHouse(houseId, houseEdits) {
    let originalHouse = await this.getHouseById(houseId)

    originalHouse.address = houseEdits.address ? houseEdits.address : originalHouse.address
    originalHouse.color = houseEdits.color ? houseEdits.color : originalHouse.color
    originalHouse.beds = houseEdits.beds ? houseEdits.beds : originalHouse.beds
    originalHouse.baths = houseEdits.baths ? houseEdits.baths : originalHouse.baths
    originalHouse.price = houseEdits.price ? houseEdits.price : originalHouse.price

    await originalHouse.save()

    return originalHouse

  }
  async deleteHouse(houseId) {
    const foundHouse = await this.getHouseById(houseId)
    await foundHouse.remove()
    return
  }

}

export const housesService = new HousesService()