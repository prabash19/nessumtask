import Cookies from "js-cookie";

const CryptoJS = require("crypto-js");

const COOKIE_NAME = "m31A";

export const setUser = (data) => {
  Cookies.set(
    COOKIE_NAME,
    CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.REACT_APP_SECRET_KEY
    ),
    { expires: 1, secure: true }
  );
};

export const getUser = () => {
  const data = Cookies.get(COOKIE_NAME);
  if (data) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      )
    );
  }
  return {
    token: "",
  };
};

export const removeUser = () => {
  Cookies.remove(COOKIE_NAME);
};
