import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getJobs)
      .post('', this.postJob)
  }
  async getJobs(req, res, next) {
    try {
      const query = req.query
      const jobs = await jobsService.getJobs(query)
      return res.send(jobs)
    } catch (error) {
      next(error)
    }
  }
  async postJob(req, res, next) {
    try {
      const jobData = req.body
      const newJob = await jobsService.postJob(jobData)
      return res.send(newJob)
    } catch (error) {
      next(error)
    }
  }
}