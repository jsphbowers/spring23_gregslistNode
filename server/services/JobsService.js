import { dbContext } from "../db/DbContext.js"

class JobsService {
  async getJobs(query) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }
  async postJob(jobData) {
    const newJob = await dbContext.Jobs.create(jobData)
    return newJob
  }

}

export const jobsService = new JobsService()