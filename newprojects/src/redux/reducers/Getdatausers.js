import { ADD_USER_DATA} from "../actions/Action";

const initialState = {
    cartitems: [],
};

const GETDATAreducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                ...state,
                cartitemsdata: [...state.cartitems, action.payload],
            };

        default:
            return state;
    }
};

export default GETDATAreducers;
