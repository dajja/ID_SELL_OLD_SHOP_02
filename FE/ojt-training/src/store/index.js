import { combineReducers, legacy_createStore as createStore } from 'redux';

let initialState = {
    products: [],
    cart: [],
}
const productReducer = (state = initialState, action) => {
    if (action.type === "SAVE_PRODUCTS") {
        return {
            ...state,
            products: [...action.payload],
        }
    }
    if (action.type === "ADD_TO_CART") {
        let { paycak } = action;
        let { cart } = state;
        let findIndex = cart.findIndex((e, i) => e.id === paycak.id);
        if (findIndex === -1) {
            cart.push({ id: paycak.id, number: 1, image: paycak.image, price: paycak.price, name: paycak.name});
            return {
                ...state,
                cart: [...cart],
            }
        }
        cart[findIndex].number = cart[findIndex].number + 1;
        return {
            ...state,
            cart: [...cart],
        }
    }
    if (action.type === "REMOVE_FROM_CART") {

    }
    if (action.type === "INCREASE") {

    }
    if (action.type === "DECREASE") {

    }
    return state;
};
// const userReducer = () => {
//     return {
//         users: [],
//     }
// }
// const reducers = combineReducers({
//     products: productReducer,
//     users: userReducer,
// })
const store = createStore(
    productReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;