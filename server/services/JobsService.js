import { dbContext } from "../db/DbContext.js"

class JobsService {
  async getJobs(query) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }
  postJob(jobData) {

  }

}

export const jobsService = new JobsService()