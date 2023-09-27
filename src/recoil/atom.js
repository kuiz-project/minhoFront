import { atom } from "recoil";

export const LoginState = atom({
  key: "LoginState",
  default: false,
});

export const FooterState = atom({
  key: "FooterState",
  default: false,
});

export const currentPdfUrl = atom({
  key: "currentPdfUrl",
  default: "",
});

export const currentFile = atom({
  key: "currentFile",
  default: "",
});
