import {FETCH_WEATHER_FAIL,FETCH_WEATHER_REQUEST,FETCH_WEATHER_SUCCESS} from '../actions/actionTypes'
const initState={
    loading:false,
    weather:[],
   
    error:""
}

const rootReducer=(state=initState,action)=>{
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {loading:true}
          case FETCH_WEATHER_SUCCESS:
              return {...state,
        weather: action.payload,
        loading: false,
        error: "",}
        case FETCH_WEATHER_FAIL:
            return{...state,
        error: action.payload,
        loading: false,
        weather: [],}
        default:
            return state
    }
   
}

export default rootReducer