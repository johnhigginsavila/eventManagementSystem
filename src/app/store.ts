import { tassign } from 'tassign';
import { SIGNED_UP, SIGNED_IN, CHECK_USER_SESSION, FETCH_USER_LIST, SIGN_UP_ATTEMPT, SIGNED_OUT, CHANGED_PAGE } from './actions';
import { IUserData } from './interfaces/user/user-data.interface';


export interface IAppState {
    userSession: IUserData;
    usersList: IUserData[];
    page:string;
    signedIn: {
        success: string;
        error: string;
    };
    signedUp: {
        success: string;
        error: string;
    };
    signUpAttempt:boolean;
}

export const INITIAL_STATE: IAppState = {
    userSession: null,
    usersList: [],
    page: null,
    signedIn: {
        success: null,
        error: null
    },
    signedUp: {
        success:null,
        error:null
    },
    signUpAttempt:false
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type){
        case FETCH_USER_LIST: return fetchUserList(state, action);
        case SIGN_UP_ATTEMPT: return signUpAttempt(state, action);
        case SIGNED_UP: return signedUp(state, action);
        case SIGNED_IN: return signedIn(state, action);
        case CHANGED_PAGE: return changedPage(state, action);
        case SIGNED_OUT: return signedOut(state, action);
        case CHECK_USER_SESSION: return checkUserSession(state, action);
    }
    return state;
}

const fetchUserList = (state, action) => {
    return tassign(state, {
        userSession: action.userSession,
        usersList: action.usersList,
        page: state.page,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt
    });
}

const signUpAttempt = (state, action) => {
    return tassign(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: action.signUpAttempt
    });
}

const signedUp = (state, action) => {
    return tassign(state, {
        userSession: action.user,
        usersList: state.usersList.concat(action.user),
        page: state.page,
        signedIn: state.signedIn,
        signedUp: action.signedUp,
        signUpAttempt: action.signUpAttempt
    });
}

const signedIn = (state, action) => {
    return tassign(state, {
        userSession: action.user,
        usersList: state.usersList,
        page: state.page,
        signedIn: action.signedIn,
        signedUp: action.signedUp,
        signUpAttempt: action.signUpAttempt
    });
}

const signedOut = (state, action) => {
    return tassign(state, {
        userSession: null,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt
    });
}

const checkUserSession  = (state, action) => {
    return tassign(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: state.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt
    });
}

const changedPage = (state, action) => {
    return tassign(state, {
        userSession: state.userSession,
        usersList: state.usersList,
        page: action.page,
        signedIn: state.signedIn,
        signedUp: state.signedUp,
        signUpAttempt: state.signUpAttempt
    });
}