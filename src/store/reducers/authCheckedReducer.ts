/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 19-04-2017
 */

 import { Action } from "@ngrx/store";
 import { MainActions } from '../actions/mainActions';

 export interface IAuthCheckedState {
   authChecked: boolean;
   currentCreds?: any
 };

 export const intitialState:IAuthCheckedState = {
   authChecked: false,
 }

 export function reducer (state:IAuthCheckedState = intitialState, action:Action):IAuthCheckedState {
     //console.log('CURRENT USER REDUCER-> ', action);
     switch (action.type) {
       case MainActions.LOGIN_SUCCESS:{
         console.log(state, action.payload)
          return Object.assign({}, state, { authChecked: true, currentCreds: action.payload.token })
       }

       case MainActions.CHECK_AUTH_SUCCESS: {
         return Object.assign({}, state, { authChecked: true })
       }
       case MainActions.CHECK_AUTH_FAILED: {
         return Object.assign({}, state, { authChecked: false })
       }

       case MainActions.TOKEN_DELETE: {
         return Object.assign({}, intitialState)
       }

       default: {
         return <IAuthCheckedState>state;
       }
     }
 };
