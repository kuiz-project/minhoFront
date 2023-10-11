import { atom } from "recoil";
import { selector } from "recoil";
import { myfolderAPI } from "../apis/API";

export const LoginState = atom({
  key: "LoginState",
  default: false,
});

export const currentFileState = atom({
  key: "currentFileState",
  default: "",
});

export const directoryState = atom({
  key: "directoryState",
  default: [],
});

export const updatedDirectory = selector({
  key: "updatedDirectory",
  get: async () => {
    const res = await myfolderAPI.get("");
    return res.data.folderDtos.map((folder) => ({
      ...folder,
      isSelected: false,
    }));
  },
});
