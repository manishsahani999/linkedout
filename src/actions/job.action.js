import { jobsService } from "services";
import { jobConstant } from "./constants";
import { history } from "helpers/history";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { __WORKER_JOB_SHOW } from "routes";
import { __EMPLOYER_DASHBOARD } from "routes";

const postJob = (data) => {
  return (dispatch) => {
    jobsService.postJob(data).then((data) => {
      dispatch({ type: jobConstant.CREATE_JOB, payload: data });
      history.push(__EMPLOYER_DASHBOARD);
      return { type: jobConstant.CREATE_JOB, payload: data };
    });
  };
};

const getJob = (id) => {
  return (dispatch) => {
    dispatch(showLoading());
    jobsService.getJob(id).then((data) => {
      setTimeout(() => {
        dispatch(hideLoading());
      }, 2000);
      dispatch({ type: jobConstant.GET_JOB, payload: data });
      return { type: jobConstant.GET_JOB, payload: data };
    });
  };
};

const getJobWorkers = (id) => {
  return (dispatch) => {
    jobsService.getJobWorkers(id).then((data) => {
      dispatch({ type: jobConstant.GET_JOB_WORKERS, payload: data });
      return { type: jobConstant.GET_JOB_WORKERS, payload: data };
    });
  };
};

const getAllJobsForWorker = () => {
  return (dispatch) => {
    jobsService.getAllJobsForWorker().then((data) => {
      dispatch({ type: jobConstant.GET_ALL_JOBS_FOR_WORKERS, payload: data });
      return { type: jobConstant.GET_ALL_JOBS_FOR_WORKERS, payload: data };
    });
  };
};

const getEmployerJobs = () => {
  return (dispatch) => {
    jobsService.getEmployerJobs().then((data) => {
      dispatch({ type: jobConstant.GET_EMPLOYER_JOBS, payload: data });
      return { type: jobConstant.GET_EMPLOYER_JOBS, payload: data };
    });
  };
};

const apply = (id, data) => {
  return (dispatch) => {
    jobsService.apply(id, data).then((data) => {
      history.push(__WORKER_JOB_SHOW(id));
      dispatch({ type: jobConstant.APPLY_FOR_JOB, payload: data });
      return { type: jobConstant.APPLY_FOR_JOB, payload: data };
    });
  };
};

const updataApplicationStatus = (id, status) => {
  return (dispatch) => {
    jobsService.updataApplicationStatus(id, status).then((data) => {
      history.push(__EMPLOYER_DASHBOARD);
      dispatch({ type: jobConstant.UPDATE_JOB_APPLICATION_STATUS, payload: data });
      return { type: jobConstant.UPDATE_JOB_APPLICATION_STATUS, payload: data };
    });
  };
};

export const jobActions = {
  postJob,
  getJob,
  getJobWorkers,
  getAllJobsForWorker,
  apply,
  updataApplicationStatus,
  getEmployerJobs
};
