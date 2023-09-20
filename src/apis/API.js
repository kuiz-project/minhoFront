import axios from "axios";

/**
 * 사용자 관리
 */

// 회원가입
export const userPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/signup",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 아이디 중복 확인({userid})
export const IdCheckGetAPI = axios.create({
  baseURL: "/api/user/findId",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그인
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/login",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 로그아웃
export const logoutPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/logout",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 비밀번호 변경
export const userpwChangePostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/change-password",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
