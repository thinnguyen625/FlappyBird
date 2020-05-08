export default (state = {}, {type} = {}) => {
    switch(type) {
        case "START":
            return {...state, state: 'playing'}
        default: 
        return state
    }
}