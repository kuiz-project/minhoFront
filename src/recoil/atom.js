import { atom } from "recoil";

export const LoginState = atom({
  key: "LoginState",
  default: false,
});

export const currentFileState = atom({
  key: "currentFileState",
  default: "",
});

// 디렉토리 상황
export const directoryState = atom({
  key: "directoryState",
  default: [],
});
