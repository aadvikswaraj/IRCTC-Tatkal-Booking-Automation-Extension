var a = document.createElement('div');
a.classList.add('pigeon-popup-cnt');
a.innerHTML = `
<div class="pigeon-popup">
  <p>Changing All Passwords : <b id="pigeon-pass-count">0</b> of <b id="pigeon-pass-total">10</b></p>
</div>`;
document.body.append(a);

var csrfToken = new Date().getTime().toString();
var pigeonGreq = new Date().getTime().toString();
var irctcLoginSession = { loggedIn: false }; // IRCTC login session details

const pigeonBmirek = "webbm"; // required header for requests
var pigeonBmiyek = window.localStorage.getItem("nget-spa.b-m-k"); // required header for requests

const awsCaptchaSolverApi = 'https://eudmwig7d3.execute-api.ap-south-1.amazonaws.com/prodv1/pigeon-irctc-captcha-solver';

const reccursionWaitTime = 1000;

var irctcId = '';

var newPassword = '';

var irctcIdsData = {};

var IrctcIdCount = 0;

// All IRCTC API's
const irctcApis = {
  loginCaptcha: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/loginCaptcha",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "GET",
    authReq: false,
    csrf: false,
  },
  login: {
    url: "https://www.irctc.co.in/authprovider/webtoken",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "POST",
    authReq: false,
    csrf: false,
  },
  validateUserAndGenerateCsrf: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/validateUser?source=3",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "GET",
    authReq: true,
    csrf: true,
  },
  changePassword: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/userpasswordchange",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "POST",
    authReq: true,
    csrf: true
  }
};

// Fetching autofill Data from Pigeon local Storage
chrome.storage.local.get(null, (result) => {
  irctcIdsData = result.ids;
  document.querySelector('#pigeon-pass-total').innerText = Object.keys(irctcIdsData).length;
  console.log("IRCTC ID'S Data : ", irctcIdsData);
});

// Send Runtime Msg
function sendRuntimeMsg(msg_type, msg_body) {
  let senderName = "irctc_script";
  return chrome.runtime.sendMessage({
    msg: {
      type: msg_type,
      data: msg_body,
    },
    sender: senderName,
    id: "pigeon",
  });
};

// Receive Runtime Msg
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender, "irctc_script received a msg");
  if (message.id !== "pigeon") {
    return;
  }
  const type = message.msg.type;
  const data = message.msg.data;
  if (type === "fetchRequestResponse") {
    if (data.requestId === "passwordAutofillCaptcha") {
      autofillCaptchaResponse(JSON.parse(data.response).detected_text);
    };
  } else if (type === "newIrctcPassword") {
    newPassword = data.newPassword;
    console.log(newPassword);
    if (Object.keys(irctcIdsData).length === 0) {
      document.querySelector('.pigeon-popup p').innerHTML = 'All Passwords Changed Successfully!';
      console.log('done');
    }
    else{
      irctcId = Object.keys(irctcIdsData)[IrctcIdCount];
      loadLoginCaptcha();
      console.log(irctcId);
      console.log(IrctcIdCount);
      console.log('done 2');
    };
  };
  sendResponse({ success: true });
  return true; // uncomment this line to fix error
});

// generate url search params (used for creating formdata for fetchApi)
function generateURLSearchParams(data) {
  let response = new URLSearchParams();
  for (let key in data) {
    response.append(key, data[key]);
  }
  return response;
};

// Set multiple request headers on xhr object from dict/obj (used by xhr function)
function setXhrMultiReqHeaders(xhrObj, headers) {
  for (let key in headers) {
    let value = headers[key];
    xhrObj.setRequestHeader(key, value);
  };
};

// Convert String to Obj/String reveived in xhr Response Headers (used by xhr function)
function xhrResponseHeaderStringtoObj(allResponseHeaders) {
  let arr = allResponseHeaders.split("\r\n");
  let headers = arr.reduce(function (acc, current, i) {
    let parts = current.split(": ");
    acc[parts[0]] = parts[1];
    return acc;
  }, {});
  return headers;
};

// XHR Request (returns response headers with reponse)
function xhrRequest(method, url, data = null, referer = null, contentType, csrf = false, authReq = false) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      headers = {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.0",
        "Content-Language": "en",
        "Content-Type": "application/x-www-form-urlencoded",
        Bmirak: pigeonBmirek,
        Greq: pigeonGreq
      };
      if (authReq) {
        headers["Authorization"] = `${"Bearer"} ${irctcLoginSession.access_token}`;
      };
      if (contentType === "JSON") { // Default is FORM data
        headers["Content-Type"] = "application/json;charset=UTF-8";
      };
      if (pigeonBmiyek) {
        headers["Bmiyek"] = pigeonBmiyek;
      };
      if (csrf) {
        headers["Spa-Csrf-Token"] = csrfToken;
      };
      setXhrMultiReqHeaders(xhr, headers);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          let responseHeaders = xhrResponseHeaderStringtoObj(xhr.getAllResponseHeaders());
          resolve({
            status: this.status,
            statusText: xhr.statusText,
            headers: responseHeaders,
            response: this.response
          });
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.statusText
        });
      };
      xhr.send(data);
    });
};

// Load Login Captcha
async function loadLoginCaptcha(reload = false) {
  let response;
  try {
    // Loading Login Captcha IRCTC API
    response = await xhrRequest(irctcApis.loginCaptcha.method, irctcApis.loginCaptcha.url, null, irctcApis.loginCaptcha.referer);
    response = JSON.parse(response.response); // Updating csrfToken
    console.log(response);
  } catch (error) {
    console.log(error);
    setTimeout(loadLoginCaptcha.bind(null, reload), reccursionWaitTime);  // Reccursion
    return;
  };

  if (response.status) {
    pigeonGreq = response.status; // Upading Greq
    autofillCaptcha(response.captchaQuestion);
  } else {
    setTimeout(loadLoginCaptcha.bind(null, reload), reccursionWaitTime);  // Reccursion
    return;
  };
};

function autofillCaptcha(captchaQuestion) {
  sendRuntimeMsg("fetchRequest", {
    pairId: null,
    requestId: "passwordAutofillCaptcha",
    url:awsCaptchaSolverApi,
    method:"POST",
    msg_type:"JSON",
    msg:{captcha:"1", base64_image:captchaQuestion}
  });
};

function autofillCaptchaResponse(captchaText) {
  if (captchaText === "") {
    reloadLoginCaptcha();
    return;
  };
  console.log("Your Autofill Captcha : ", captchaText);
  loginIrctc(captchaText);
};

// Encrypt function
function encryptMessage(message, passphrase) {
  // Encrypt using AES with CBC mode and PKCS7 padding
  passphrase = CryptoJS.enc.Utf8.parse(passphrase);
  let encrypted = CryptoJS.AES.encrypt(message, passphrase, {
    iv: passphrase,
  }).toString();
  return encrypted;
};

// Decrypt function
function decryptMessage(encryptedMessage, passphrase) {
  // Decrypt using AES with CBC mode and PKCS7 padding
  passphrase = CryptoJS.enc.Utf8.parse(passphrase);
  let decrypted = CryptoJS.AES.decrypt(encryptedMessage, passphrase, {
    iv: passphrase,
  }).toString(CryptoJS.enc.Utf8);
  return decrypted;
};

// Encrypt Login Data
function encryptLoginData(captcha) {
  let loginData = getLoginData();
  let key = (captcha + pigeonGreq + "AAAAAAAAAAAAAAAA").substring(0, 16);
  let data = loginData.username + "#UP#" + btoa(loginData.password) + "#UP#" + new Date().getTime();
  return encryptMessage(data, key);
};

// Get Pigeon Pair Login Credentials
function getLoginData() {
  return {
    'username': irctcId,
    'password':irctcIdsData[irctcId].password
  };
};

// Login IRCTC
async function loginIrctc(captcha) {
  // Preparing FormData for Login Request
  let data = generateURLSearchParams({
    grant_type: "password",
    data: encryptLoginData(captcha),
    captcha: captcha,
    uid: pigeonGreq,
    otpLogin: "false",
    lso: "",
    encodedPwd: "true"
  });

  let response;
  try {
    // Requesting Login to IRCTC
    response = await xhrRequest(irctcApis.login.method, irctcApis.login.url, data, irctcApis.login.referer, "FORM", false, false);
    csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Updating csrfToken
  } catch (error) {
    setTimeout(loginIrctc.bind(null, captcha), reccursionWaitTime); // Reccursion
    return;
  };

  if (response.message === "SUCESS") {
    // Login Sucess Handling
    irctcLoginSession.loggedIn = true;
    irctcLoginSession.access_token = response.access_token;
    irctcLoginSession.refresh_token = response.refresh_token;
    irctcLoginSession.token_type = response.token_type;
    validateUser(); // Initiating validateUser
  } else if (response.error === "unauthorized") { // Unauthorized Login Handling
      if (response.error_description === "Invalid Captcha....") {
        reloadLoginCaptcha(true); // Reloading Login Captcha due to Invalid Captcha
      }
      else{
        IrctcIdCount += 1;
        if (Object.keys(irctcIdsData).length === IrctcIdCount) {
          document.querySelector('.pigeon-popup p').innerHTML = 'All Passwords Changed Successfully!';
        }
        else{
          document.getElementById('pigeon-pass-count').innerText = IrctcIdCount;
          irctcId = Object.keys(irctcIdsData)[IrctcIdCount];
          loadLoginCaptcha();
        };
      };
  } else if (response.errorMessage) { } 
  else {
    setTimeout(loginIrctc.bind(null, captcha), reccursionWaitTime); // Recurrsion
    return;
  };
};

// Reload Login Captcha
function reloadLoginCaptcha() {
  loadLoginCaptcha(true); // Reloading Login Captcha
}
// ------------------------------Handling IRCTC Login ends here------------------------------

// ------------------------------Handling IRCTC Validating User starts here------------------------------
// Validating User
async function validateUser() {
  let response;
  try {
      // Validating User IRCTC API
      response = await xhrRequest(irctcApis.validateUserAndGenerateCsrf.method, irctcApis.validateUserAndGenerateCsrf.url, null,
      irctcApis.validateUserAndGenerateCsrf.referer, null, irctcApis.validateUserAndGenerateCsrf.csrf, 
      irctcApis.validateUserAndGenerateCsrf.authReq);
    
      csrfToken = response.headers["csrf-token"]; // Updating csrfToken
      response = JSON.parse(response.response); // Updating csrfToken
  } catch (error) {
    setTimeout(validateUser, reccursionWaitTime); // Reccursion
    return;
  };

  if (response.userId) {
    changeIrctcPassword(); // Change Irctc Password
  } else if (response.errorMessage) { }
  else {
    setTimeout(validateUser, reccursionWaitTime); // Reccursion
    return;
  };
};
// ------------------------------Handling IRCTC Validating User ends here------------------------------

// ------------------------------Handling IRCTC change Password starts here------------------------------
// Login IRCTC
async function changeIrctcPassword() {
  // Preparing FormData for Change IRCTC Password Request
  let loginData = getLoginData();
  data = JSON.stringify({
    source: 10,
    userId: loginData.username,
    oldPassword: loginData.password,
    newPassword: newPassword,
    confPassword: newPassword
  });

  let response;
  try {
    // Change Password of IRCTC Account
    response = await xhrRequest(irctcApis.changePassword.method, irctcApis.changePassword.url, data, irctcApis.changePassword.referer, "JSON", true, true);
    csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Updating csrfToken
  } catch (error) {
    setTimeout(changeIrctcPassword, reccursionWaitTime); // Reccursion
    return;
  };

  if (response.status === "Your Password has been changed Successfully.") {
    IrctcIdCount += 1;
    if (Object.keys(irctcIdsData).length === IrctcIdCount) {
      document.querySelector('.pigeon-popup p').innerHTML = 'All Passwords Changed Successfully!';
      irctcIdsData[irctcId].password = newPassword;
      savePigeonData();
    }
    else{
      document.getElementById('pigeon-pass-count').innerText = IrctcIdCount;
      irctcIdsData[irctcId].password = newPassword;
      savePigeonData();
      irctcId = Object.keys(irctcIdsData)[IrctcIdCount];
      setTimeout(loadLoginCaptcha, 3000);
    };
  } else if (response.error === "unauthorized") { // Unauthorized Login Handling
      reloadLoginCaptcha(); // Reloading Login Captcha due to Invalid Captcha
  } else if (response.errorMessage) { } 
  else {
    setTimeout(changeIrctcPassword, reccursionWaitTime); // Recurrsion
    return;
  };
};
// ------------------------------Handling IRCTC change Password ends here------------------------------

// save pigeon data on chome localstorage
function savePigeonData() {
  chrome.storage.local.set({ids:irctcIdsData});
};