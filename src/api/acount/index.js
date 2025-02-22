import request from "@/api/request";
import CryptoJS from "crypto-js";

/**
 * @description 账户登录
 * @param dataForm
 * @returns {*}
 * @author webdyc
 */

export function login (options = {}) {
  // const nameArray = CryptoJS.enc.Utf8.parse(options.username);
  // options.username = CryptoJS.enc.Base64.stringify(nameArray);
  // const wordArray = CryptoJS.enc.Utf8.parse(options.password);
  // options.password = CryptoJS.enc.Base64.stringify(wordArray);
  options = Object.assign(
    {
      // 用户名
      username: "",
      // 密码。sha1加密码
      password: "",
      // 验证码
      code: "",
      uuid: "",
    },
    options
  );
  return request({
    url: process.env.VUE_APP_BASE_API + "/login",
    method: "post",
    data: options,
  });
}

/**
 * @description 获取验证码
 * @param dataForm
 * @returns {*}
 * @author webdyc
 */
export function sendCode () {
  return request({
    url: process.env.VUE_APP_BASE_API + "/captchaImage",
    method: "get",
    // 如果后端直接返回图片流的话，放开下面的注释
    // responseType: "blob",
  });
}

/**
 * @description 获取路由权限
 * @param dataForm
 * @returns {*}
 * @author webdyc
 */
export function getRole () {
  return request({
    url: process.env.VUE_APP_BASE_API + "/getRouters",
    method: "get",
  });
}

/**
 * @description 获取用户信息
 * @param dataForm
 * @returns {*}
 * @author webdyc
 */
export function userMessage () {
  return request({
    url: process.env.VUE_APP_BASE_API + "/getInfo",
    method: "get",
  });
}

/**
 * @description 登出
 * @param dataForm
 * @returns {*}
 * @author webdyc
 */

export function logout (tokenId) {
  return request({
    url: process.env.VUE_APP_BASE_API + "/monitor/online/" + tokenId,
    method: "get",
  });
}
