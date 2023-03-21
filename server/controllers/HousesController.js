import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .get('/:houseId', this.getHouseById)
      .post('', this.newHouse)
      .put('/:houseId', this.editHouse)
      .delete('/:houseId', this.deleteHouse)
  }




  async getHouses(req, res, next) {
    try {
      let query = req.query
      let houses = await housesService.getHouses(query)
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async getHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.getHouseById(houseId)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async newHouse(req, res, next) {
    try {
      let houseData = req.body
      let newHouse = await housesService.createHouse(houseData)
      return res.send(newHouse)
    } catch (error) {
      next(error)
    }
  }
  async editHouse(req, res, next) {
    try {
      let houseId = req.params.houseId
      let houseEdits = req.body
      let editedHouse = await housesService.editHouse(houseId, houseEdits)
      return res.send(editedHouse)
    } catch (error) {
      next(error)
    }
  }
  async deleteHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      await housesService.deleteHouse(houseId)
      return res.send(`This house at ${houseId} has been deleted`)
    } catch (error) {
      next(error)
    }
  }
}