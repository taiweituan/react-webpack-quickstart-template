// State argument is not aplication state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'JOB_SELECTED':
            console.log(`payload ${JSON.stringify(action.payload)}`);
            return action.payload;
    }
    return state;
}