import { FETCH_SOCKET_DATA } from "./actionTypes";

const initialStateSocketData = {
    socketData: null
};

const socketData = (state = initialStateSocketData, action) => {
    switch (action.type) {
        case FETCH_SOCKET_DATA:
            return {
                ...state,
                socketData: action.payload
            };
        default:
            return state;
    }
}

export default socketData;