import axios from "axios";

/**
 * 사용자 관리
 */

// 회원가입
export const userPostAPI = axios.create({
  method: "post",
  baseURL: "http://localhost:8080/api/user/signup",
  withCredentials: true,
});

// 아이디 중복 확인({userid})
export const IdCheckGetAPI = axios.create({
  baseURL: "http://localhost:8080/api/user/findId",
  withCredentials: true,
});

// 로그인
export const loginPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/login",
  withCredentials: true,
});

// 로그아웃
export const logoutPostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/logout",
  withCredentials: true,
});

// 비밀번호 변경
export const userpwChangePostAPI = axios.create({
  method: "post",
  baseURL: "/api/user/change-password",
  withCredentials: true,
});
