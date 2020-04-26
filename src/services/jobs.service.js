import { api } from "api";
import { handle } from "api";

const postJob = (data) =>
  api
    .post("/jobs/createJob", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(handle);

const getJob = (id) => api.get("/jobs/" + id).then(handle);

const getJobWorkers = (id) => api.get("/jobs/" + id + "/worker").then(handle);

const getAllJobsForWorker = () => api.get("/jobs/").then(handle);

const apply = (id, data) =>
  api.patch("/jobs/" + id + "/apply", data).then(handle);

const updataApplicationStatus = (id, status) =>
  api.post("/jobs/application/" + id + "", status).then(handle);

const getEmployerJobs = () => api.get("/jobs/").then(handle);

export const jobsService = {
  postJob,
  getJob,
  getJobWorkers,
  getAllJobsForWorker,
  apply,
  updataApplicationStatus,
  getEmployerJobs
};
