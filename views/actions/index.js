export function selectJob(job) {
    //selectjob is an ActionCreator, it nees to return an action,
    // an object with a type property.
    return {
        type: "JOB_SELECTED",  // always uppercase
        payload: job
    };
}