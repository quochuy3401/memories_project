import * as api from "../api";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "SIGN_IN", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "SIGN_IN", payload: data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => {
  return { type: "LOG_OUT" };
};

export const autoSignIn = () => (dispatch) => {
const profile = JSON.parse(localStorage.getItem("profile"));
  return { type: "AUTO_SIGNIN", payload: profile };
};
