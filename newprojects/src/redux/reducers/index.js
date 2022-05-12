import { usernamereducer } from "./UserName";
import { combineReducers } from "redux";
import GETDATAreducers from "./Getdatausers";

const IndexReducers = combineReducers({
    usernames: usernamereducer,
    getdatauserapi: GETDATAreducers,
});

export default IndexReducers;
