import data from '../../utils/new-data.json'
import { TCardType } from '../../utils/types'
import { TServicesAction } from '../actions/services-action'
import { ADD_FAVORITE_SERVICE, DELETE_FAVORITE_SERVICE, SET_FAVORITE_FLAGS, SET_INITIAL_FAVORITE_SERVICE, UPLOAD_FAVORITE_SERVICE } from '../constants'


type TInitialState = {
    allServices: Array<TCardType>,
    favoriteServices: Array<TCardType>
}

const initialState : TInitialState = {
    allServices: data.cards,
    favoriteServices: []
}

export const servicesReducer = (state=initialState, action: TServicesAction) => {

    switch (action.type) {
        case ADD_FAVORITE_SERVICE: {
            return {
                ...state,
                allServices: state.allServices.map(item => item.id === action.item.id ? {
                    ...item,
                    flag: true
                } : item),
                favoriteServices: [
                    ...state.favoriteServices, 
                    {
                        ...action.item,
                        flag: true
                    }
                ]
            }
        }

        case DELETE_FAVORITE_SERVICE: {
            return {
                ...state,
                allServices: state.allServices.map(item => item.id === action.id ? {
                    ...item,
                    flag: false
                } : item),
                favoriteServices: state.favoriteServices.filter(item => item.id !== action.id)
            }
        }

        case UPLOAD_FAVORITE_SERVICE: {
            return {
                ...state,
                allServices: state.allServices.map(item => action.storage.find(item2 => item2 === item.id) ? {
                    ...item,
                    flag: true
                } : item ),
                favoriteServices: action.storage.map(item => data.cards.find(item2 => item2.id === item)).filter(item => item !== undefined)
                
            }
        }

        case SET_FAVORITE_FLAGS: {
            return {
                ...state,
                favoriteServices: state.favoriteServices.map(item => ({
                    ...item,
                    flag: true
                }))
                
            }
        }

        case SET_INITIAL_FAVORITE_SERVICE: {
            return initialState
        }    


        default: {
            return initialState
        }
    }
}
