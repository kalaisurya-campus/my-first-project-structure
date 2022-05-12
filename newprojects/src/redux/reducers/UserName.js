import { USERNAME } from "../actions/Action";

const initialState = {
    username: "",
};
export const usernamereducer = (state = initialState, action) => {
    switch (action.type) {
        case USERNAME:
            console.log(action, "action payload data");
            return Object.assign({}, state, {
                ...action.data,
                username: action.data,
            });

        default:
            return state;
    }
};
