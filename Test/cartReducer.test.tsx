import {
    GET_CARTS_STARTED,
    GET_CARTS_SUCCEEDED,
    GET_CARTS_FAILED
} from '../src/lib/constants/actionTypes';
import cartData from '../src/reducers/index';
import initialState from '../src/reducers/initialState';

describe("cart reducer", () => {

    it("cart reducer start render", () => {
        const action: any = {
            type: GET_CARTS_STARTED,
        };
        const cartList: any = initialState.cartData

        expect(cartData(cartList, action)).toEqual({
            [cartList]: {
            carts: [],
            cart: {},
            isLoading: false,
            error: null
            }
        });
    });

    it("cart reducer sucess render", () => {
        const action: any = {
            type: GET_CARTS_SUCCEEDED,
        };
        const cartList: any = initialState.cartData

        expect(cartData(cartList, action)).toEqual({
            carts: [],
            cart: {},
            isLoading: false,
            error: null

        });
    });

    it("cart reducer failed render", () => {
        const action: any = {
            type: GET_CARTS_FAILED,
        };
        const cartList: any = initialState.cartData

        expect(cartData(cartList, action)).toEqual({
            carts: [],
            cart: {},
            isLoading: false,
            error: null

        });
    });
});

