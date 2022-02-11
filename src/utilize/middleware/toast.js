import * as constant from "../../routes/constants";
import { toast } from "react-toastify";

const toasty =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (action.type === constant.TOAST_ERROR) {
      return toast(action.payload.message, { type: "error" });
    } else if (action.type === constant.TOAST_SUCCESS) {
      return toast(action.payload.message, { type: "success" });
    }else if (action.type === constant.TOAST_WARNING) {
      return toast(action.payload.message, { type: "warning" });
    } 
    else {
      next(action);
    }
  };
export default toasty;
