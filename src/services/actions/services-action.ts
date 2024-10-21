import { ADD_FAVORITE_SERVICE, DELETE_FAVORITE_SERVICE, SET_FAVORITE_FLAGS, SET_INITIAL_FAVORITE_SERVICE, UPLOAD_FAVORITE_SERVICE } from "../constants"
import { AppDispatch } from "../types";
import data from "../../utils/new-data.json";
import { TCardType } from "../../utils/types";


type TAddFavoriteServiceAction = {
    readonly type: typeof ADD_FAVORITE_SERVICE;
    readonly item: TCardType;
}

type TUploadFavoriteServiceAction = {
    readonly type: typeof UPLOAD_FAVORITE_SERVICE;
    readonly storage: Array<string>;
}

type TDeleteFavoriteServiceAction = {
    readonly type: typeof DELETE_FAVORITE_SERVICE;
    readonly id: string;
}

type TSetInitialFavoriteServiceAction = {
    readonly type: typeof SET_INITIAL_FAVORITE_SERVICE;
}

type TSetFavoriteFlagsAction = {
    readonly type: typeof SET_FAVORITE_FLAGS;
}


export type TServicesAction = TAddFavoriteServiceAction |
    TUploadFavoriteServiceAction |
    TDeleteFavoriteServiceAction |
    TSetInitialFavoriteServiceAction |
    TSetFavoriteFlagsAction;

export const deleteFavoriteService = (id: string) :TServicesAction => ({
    type: DELETE_FAVORITE_SERVICE,
    id: id
})

export const setInitialFavoriteService = () :TServicesAction => ({
    type: SET_INITIAL_FAVORITE_SERVICE,
})

export const setFavoriteFlags = () :TServicesAction => ({
    type: SET_FAVORITE_FLAGS,
})

export const uploadInitialFavoriteService = (storage: Array<string>) :TServicesAction => ({
    type: UPLOAD_FAVORITE_SERVICE,
    storage: storage
})


export const addFavoriteService = (id: string) => {
    return function (dispatch: AppDispatch) {
        
        let favorite = data.cards.find(item => item.id === id);
            
        favorite !== undefined && dispatch({
            type: ADD_FAVORITE_SERVICE,
            item: favorite
        })
    }
}

export const uploadFavoriteService = (storage: string) => {
    return function(dispatch: AppDispatch) {
        let storageArray = storage.split(", ").filter(item => data.cards.find(item2 => item2.id === item) !== undefined);

        storageArray.length && dispatch(uploadInitialFavoriteService(storageArray))

        // storageArray.map(item => dispatch(addFavoriteService(item)))
    }
}
