import companyReducer from './company.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    company: companyReducer
});

export default rootReducer;