export const __LOGIN_ROUTE = '/login';


/**
 * Employer Routes
 *
 */
export const __EMPLOYER_DASHBOARD = '/employer/dashboard';
export const __JOB_INDEX = '/employer/jobs';
export const __JOB_CREATE = '/employer/job/create';
export const __JOB_SHOW = id => '/employer/job/show/'+id;
export const __JOB_WORKERS_SHOW = id => '/employer/job/show/' + id + '/worker';

/**
 * Worker Routes
 *
 */
export const __WORKER_DASHBOARD = '/workers/dashboard';
export const __WORKER_JOB_INDEX = '/workers/jobs';
export const __WORKER_JOB_SHOW = id => '/workers/jobs/show/'+id;
export const __WORKER_JOB_APPLY = id => __WORKER_JOB_SHOW(id) + '/apply';