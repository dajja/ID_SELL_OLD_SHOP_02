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
    if (action.type === "SAVE_CART") {
        return {
            ...state,
            cart: [...action.payload],
        }
    }
    if (action.type === "ADD_TO_CART") {
        let { paycak } = action;
        let { cart } = state;
       /*  let findIndex = cart.findIndex((e, i) => e.id === paycak.id);
        if (findIndex === -1) {
            cart.push({ id: paycak.id, number: 1, image: paycak.image, price: paycak.price, name: paycak.name});
            return {
                ...state,
                cart: [...cart],
            }
        }
        cart[findIndex].number = cart[findIndex].number + 1; */
        cart.push(
            {
                id:paycak.id,
                name:paycak.name,
                image:paycak.image,
                price:paycak.price,
                number:1
            }
        )
        return {
            ...state,
            cart: [...cart],
        }
    }
    if(action.type==="EDIT_TO_CART"){
        let { paycak } = action;
        let { cart } = state;
        let findIndexCart=cart.findIndex((e,i)=>e.id===paycak.id)
        cart[findIndexCart].number+=1
        return {
            ...state,
            cart: [...cart],
        }

    }
    if (action.type === "REMOVE_FROM_CART") {
        let { payload } = action;
        let { cart } = state;
        return {
            ...state,
            cart: cart.filter((item) => item.id !== payload.id)
        }
    }
    if (action.type === "INCREASE") {
        let { payload} = action;
        let { cart } = state;
        return {
            ...state,
            cart: cart.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        number: item.number + 1,
                    }
                }
                return item;
            })
        }
    }
    if (action.type === "DECREASE") {
        let { payload } = action;
        let {cart} = state;
        return {
            ...state,
            cart: cart.map(item => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        number: item.number - 1,
                    }
                }
                return item;
            })
            .filter(item => item.number > 0)
        }
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