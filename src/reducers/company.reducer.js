const initialState = {
    items: []
};

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return Object.assign({}, state, {
                items: state.items.concat(action.items)
            })
        default:
            return state;
    }
}

export default companyReducer;