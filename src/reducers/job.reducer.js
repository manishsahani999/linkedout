import { jobConstant } from '../actions/constants';

let job = {
  employees: [],
  applicants: []
}

export function jobReducer(state = job, action) {
  switch (action.type) {
    case jobConstant.CREATE_JOB:
      const job = { ...action.payload }
      return job;
    case jobConstant.GET_JOB: {
      const next = {...action.payload};
      return next;
    }
    case jobConstant.GET_JOB_WORKERS: {
      const next = {...action.payload};
      return next;
    }
    case jobConstant.GET_ALL_JOBS_FOR_WORKERS: {
      const next = { jobs: action.payload};
      return next;
    }
    case jobConstant.APPLY_FOR_JOB: {
      const next = { ...state, message: action.payload.message};
      return next;
    }
    case jobConstant.GET_EMPLOYER_JOBS: {
      const next = { jobs: action.payload };
      return next;
    }

    default:
      return state
  }
}