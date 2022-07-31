import { AuthState } from './AuthContext';

type AuthAction =
|{type:'login'}
|{type:'logout'}
|{type:'addIcon', payload: string }
|{type:'addUser', payload: string }


//generar el estado
export const authReducer= ( state: AuthState, action: AuthAction ): AuthState =>{

    switch (action.type) {
        case 'login':
                return {
                    ...state,
                    isLoggedIn: true,
                    username: 'no-user-yet'
                }
        case 'logout':
                return {
                    ...state,
                    isLoggedIn: false,
                    username: undefined,
                    favoriteIcon: undefined
                }
        case 'addIcon':
                return {
                    ...state,
                    favoriteIcon: action.payload
                }
        case 'addUser':
                return {
                    ...state,
                    username: action.payload
                }
        default:
            return state;
    }

}