import {
    GET_FORUMS,
    ADD_FORUM,
    DELETE_FORUM,
    FORUMS_LOADING
} from '../actions/types';

const initialState = {
    items: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FORUMS:
            return {
                ...state,
                forums: action.payload,
                loading: false
            };
            case DELETE_FORUM:
                return {
                    ...state,
                    forums: state.forums.filter(forum => forum._id !== action.payload)
                };
                case ADD_FORUM:
                    return {
                        ...state,
                        forums: [action.payload, ...state.forums]
                    };
                    case FORUMS_LOADING:
                        return {
                            ...state,
                            loading: true
                        };;
                        default:
                            return state;
    }
}