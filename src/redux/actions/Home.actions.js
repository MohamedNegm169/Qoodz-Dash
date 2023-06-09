import { homeConstants } from "../../constants/home.constants";
import { HomeService } from "../services";

export const homeActions = {
  getParteners,
};

let dispatchActionHandler = (type, data, dispatch) => {
  dispatch({ type, data });
};

function getParteners(data, setToken, setUser) {
  return async (dispatch) => {
    let result = await HomeService.getParteners(data);
    dispatchActionHandler(homeConstants.GET_PARTENERS, result, dispatch);
  };
}
