import { HomeState } from "../app/screens/home/types";
import { DetailsState } from '../app/screens/Details/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] end


/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  homeState: HomeState;
  details?: DetailsState;
  // [INSERT NEW REDUCER KEY ABOVE] end

}