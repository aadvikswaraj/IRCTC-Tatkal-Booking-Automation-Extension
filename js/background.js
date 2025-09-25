// import "https://cdn.jsdelivr.net/npm/tesseract-js@0.0.1/lib/tesseract.min.js";
console.log("background.js");
var unreadMsgApi = "http://3.110.212.170:8000/get-unread-sms/";
const awsCaptchaSolverApi = 'https://eudmwig7d3.execute-api.ap-south-1.amazonaws.com/prodv1/pigeon-irctc-captcha-solver';

// Send Msg on Pigeon Tab
function sendMsgonPigeonTab(msg_type, msg_body) {
  let senderName = "bg_script";
  chrome.storage.session.get(null, function (result) {
    try {
      chrome.tabs.sendMessage(result.pigeonTabId, {
        msg: {
          type: msg_type,
        data: msg_body
      },
      sender: senderName,
      id: "pigeon"
    }, ()=>{});
    
  } catch (error) {};
});
};

// Send Msg on Panel Tab
function sendMsgonPanelTab(msg_type, msg_body) {
  let senderName = "bg_script";
  chrome.storage.session.get(null, function (result) {
    try {
      chrome.tabs.sendMessage(result.panelTabId, {
        msg: {
          type: msg_type,
          data: msg_body
        },
        sender: senderName,
        id: "pigeon"
      }, ()=>{});
    } catch (error) {};
  });
};

// Send Msg on Panel Tab
function sendMsgonTabId(tabId, msg_type, msg_body) {
  let senderName = "bg_script";
  chrome.storage.session.get(null, function (result) {
    try {
      chrome.tabs.sendMessage(tabId, {
        msg: {
          type: msg_type,
          data: msg_body
        },
        sender: senderName,
        id: "pigeon"
      }, ()=>{});
    } catch (error) {};
  });
};

// Generate Form Data
function generateFormData(Obj) {
  let formData = new FormData();
  for (const key in Obj) {
    const value = Obj[key];
    formData.append(key, value);
  };
  return formData;
};


function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};

function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

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

chrome.runtime.onConnect.addListener(function() {});

// Receive Runtime Msg
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log(message, sender, "bg_script received a msg");
  if (message.id !== "pigeon") {
    console.log(message);
    sendResponse({"success":true});
    return true;
  };
  const type = message.msg.type;
  const data = message.msg.data;
  if (type === "initiatePigeon") {
    chrome.storage.session.get(null, function (result) {
      if (result.pigeonTabId) {
        console.log(result.pigeonTabId);
        sendMsgonPigeonTab('deactivatePigeon');
      };
    });
    setTimeout(() => {
      console.log(data.pigeonTabId);
      chrome.storage.session.set({pigeonTabId: data.pigeonTabId});
      let interval3 = setInterval(async () => {
        let pigeonTab;
        try {
          pigeonTab = await chrome.tabs.get(data.pigeonTabId);
        } catch (error) {
          pigeonTab = {url:"", status:""};
        };
        var URL = "https://www.irctc.co.in/nget/train-search";
        
        if (pigeonTab.url.includes(URL) && pigeonTab.status === "complete") {
          setTimeout(() => {
            sendMsgonPigeonTab('selectTicket', {
              ticketName:data.ticketName
            });
          }, 100);
          clearInterval(interval3);
        };
      }, 100);
      sendResponse({"success":true});
    }, 100);
  }
  else if (type === "initiateChangePassword") {  
    let interval4 = setInterval(async () => {
      let pigeonTab;
      try {
        pigeonTab = await chrome.tabs.get(data.pigeonTabId);
      } catch (error) {
        pigeonTab = {url:"", status:""};
      };
      var URL = "https://www.irctc.co.in/nget/train-search";
      
      if (pigeonTab.url.includes(URL) && pigeonTab.status === "complete") {
        chrome.storage.session.set({pigeonTabId : data.pigeonTabId});
        setTimeout(() => {
          sendMsgonPigeonTab('newIrctcPassword', {newPassword:data.newPassword});
        }, 100);
        clearInterval(interval4);
      };
    }, 100);
    sendResponse({"success":true});
  }
  else if (type === "openPigeon") {
    chrome.storage.session.get(null, function (result) {
      if (result.panelTabId) {
        sendMsgonPanelTab('deactivatePanel');
      };
    });
    chrome.storage.session.set({panelTabId :(await chrome.tabs.create({url:"pages/pigeon-panel.html"})).id})
    sendResponse({"success":true});
  }
  else if(type === "fetchRequest") {
    let msg;
    let method;
    let headers;
    let msg_type;
    
    let requestId = data.requestId;
    let url = data.url;
    data.method ? method = data.method : method = "GET";
    data.headers ? headers = data.headers : headers = {};
    data.msg_type ? msg_type = data.msg_type : msg_type = "FORM";
    data.msg ? msg = data.msg : msg = '';
    if (msg_type === "FORM") {
      msg = generateURLSearchParams(msg);
      headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    else if (msg_type === "JSON") {
      msg = JSON.stringify(msg);
      headers["Content-Type"] = "application/json;charset=UTF-8";
    };
    console.log(headers);
    let request;
    if (['GET', 'HEAD'].includes(method)) {
      request = fetch(url, {
        mode:"no-cors",
        method: method,
        headers:headers,
        redirect: "follow"
      }).then((response) => response.text()).then((responseText) => {
        return responseText;
      });
    }
    else{
      request = fetch(url, {
        mode:"no-cors",
        method: method,
        headers:headers,
        redirect: "follow",
        body: msg
      }).then((response) => response.text()).then((responseText) => {
        return responseText;
      });
    }
    let response = await request;
    if (requestId === "irctcRedirectPayment") {
      chrome.storage.session.set({ticketSession: data.ticketSession});
    };
    if (sender === 'panel_script') {
      sendMsgonPanelTab("fetchRequestResponse", {
        "requestId":requestId,
        "response":response
      });
    }
    else {
      sendMsgonPigeonTab("fetchRequestResponse", {
        "requestId":requestId,
        "response":response,
        "pairId":data.pairId
      });
    };
    sendResponse({"success":true});
  }
  else if (type === "bankPayments") {
    console.log("Bank Payments Initiated.");
    let interval = setInterval(async () => {
      chrome.storage.session.get(null, async function (result) {
        let pigeonTab = await chrome.tabs.get(result.pigeonTabId);
        let paymentURLs = ["https://mercury-t2.phonepe.com/transact/v2", "https://securegw.paytm.in/theia/processTransaction", "https://checkout.razorpay.com/orders", "https://www.irctcipay.com/pgui/jsp/surchargePaymentPage.jsp", "https://api.payu.in/public/","https://walletapi.mobikwik.com/securewallet"];
        for (let i = 0; i < paymentURLs.length; i++) {
          const paymentURL = paymentURLs[i];
          if (pigeonTab.url.includes(paymentURL) && pigeonTab.status === "complete") {
            chrome.scripting.executeScript({
              target: { tabId: result.pigeonTabId },
              files: ["js/common.js", "js/data.js", "js/payments-handling.js"]
            });
              
            chrome.scripting.insertCSS({
              target: { tabId: result.pigeonTabId },
              files: ["css/common.css", "css/payments-handling.css"]
            });
            setTimeout(() => {
              sendMsgonPigeonTab('selectPaymentMethod', {
                paymentData:data.paymentData
              });
            }, 100);
            clearInterval(interval);
            break;
          };
        };
      })
    }, 100);
    sendResponse({"success":true});
  }
  else if (type === "confirmBooking") {
    console.log("Confirm Booking Initiated.");
    let interval2 = setInterval(async () => {
      chrome.storage.session.get(null, async function (result) {
        let pigeonTab = await chrome.tabs.get(result.pigeonTabId);
        var URLs = ["https://www.irctc.co.in/nget/booking-confirm", "https://www.irctc.co.in/nget/error"];
  
        for (let i = 0; i < URLs.length; i++) {
          const URL = URLs[i];
          if (pigeonTab.url.includes(URL) && pigeonTab.status === "complete") {
            chrome.scripting.executeScript({
              target: { tabId: result.pigeonTabId },
              files: ["js/common.js", "js/data.js", "js/booking-status.js"]
            });
            
            chrome.scripting.insertCSS({
              target: { tabId: result.pigeonTabId },
              files: ["css/common.css", "css/booking-status.css"]
            });
            
            chrome.storage.session.get(null, async function (result) {
              result.ticketSession.paymentIntiatedTime = data.paymentIntiatedTime;
              result.ticketSession.paymentCompletedTime = data.paymentCompletedTime;
              
              setTimeout(() => {
                console.log(result.ticketSession);
                sendMsgonPigeonTab('ticketSessionData', {
                  ticketSession:result.ticketSession
                });
              }, 100);
            })
            
            clearInterval(interval2);
          };
        };
      });
    }, 100);
    sendResponse({"success":true});
  } 
  else if (type === 'setProxy') {
    if (data.enable) {
      await setProxyForPage(data.ip, data.port, data.username, data.password, 'https://www.irctc.co.in/*');
    }
    else{
      await clearProxy();
    };
    sendResponse({"success":true});
  }
  else if (type === "searchTrainBtwStns") {
    let journeyFrom = data.from;
    let journeyTo = data.to;
    let journeyDate = data.date;
    let captchaReq = (await (await fetch('https://www.indianrail.gov.in/enquiry/CaptchaConfig')).text());
    let captchaBase64;
    let captchaSoln;
    let fetchTrainsURL = `https://www.indianrail.gov.in/enquiry/CommonCaptcha?dt=${journeyDate}&sourceStation=${journeyFrom}&destinationStation=${journeyTo}&flexiWithDate=y&inputPage=TBIS&language=en`;
    if (captchaReq == '1') {
      let captchaImg = await fetch('https://www.indianrail.gov.in/enquiry/captchaDraw.png');
      let blob =  new Blob([(await captchaImg.blob())], {type: 'image/jpg'});
      captchaBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
      });
      captchaBase64 = await changeImageBackgroundColor(captchaBase64, 'white');
      captchaBase64 = captchaBase64.replace('data:image/png;base64,', '');
      let captchaImagetoText = (await (await fetch(awsCaptchaSolverApi, {
        method:"POST",
        body:JSON.stringify({captcha:"0", base64_image:captchaBase64})
      })).json()).detected_text;
      captchaImagetoText = captchaImagetoText.replace(' = ?','');
      captchaImagetoText = captchaImagetoText.split(' ');
      if (captchaImagetoText[1] === "-") {
        captchaSoln = parseInt(captchaImagetoText[0])-parseInt(captchaImagetoText[2]);
      }
      else if (captchaImagetoText[1] === "+") {
        captchaSoln = parseInt(captchaImagetoText[0])+parseInt(captchaImagetoText[2]);
      };
      chrome.storage.local.set({indianRailCaptchaValue:captchaSoln});
      console.log('Indian Rail Captcha Value :', captchaSoln);
      fetchTrainsURL = `https://www.indianrail.gov.in/enquiry/CommonCaptcha?inputCaptcha=${captchaSoln}&dt=${journeyDate}&sourceStation=${journeyFrom}&destinationStation=${journeyTo}&flexiWithDate=y&inputPage=TBIS&language=en`;
    };
    let r = {success:false};
    let response = (await (await fetch(fetchTrainsURL)).json());
    if (response.errorMessage) {
      r.errorMessage = response.errorMessage;
    }
    else{
      r.success = true;
      r.trains = response.trainBtwnStnsList;
      r.journeyDate = journeyDate;
    };
    sendMsgonPanelTab('searchTrainBtwStnsResponse', r);
    sendResponse({"success":true});
    console.log(r);
  }
  else if (type === "trainAvailibility") {
    let journeyFrom = data.from;
    let journeyTo = data.to;
    let journeyDate = data.date;
    let journeyTrain = data.train;
    let trainType = data.trainType;
    let journeyQuota = data.quota;
    let journeyClass = data.class;
    let captchaReq = (await (await fetch('https://www.indianrail.gov.in/enquiry/CaptchaConfig')).text());
    let captchaBase64;
    let captchaSoln;
    let fetchAvailibilityURL = `https://www.indianrail.gov.in/enquiry/CommonCaptcha?inputPage=TBIS_CALL_FOR_FARE&trainNo=${journeyTrain}&dt=${journeyDate}&sourceStation=${journeyFrom}&destinationStation=${journeyTo}&classc=${journeyClass}&quota=${journeyQuota}&traintype=${trainType}&language=en`;
    if (captchaReq == '1') {
      let captchaImg = await fetch('https://www.indianrail.gov.in/enquiry/captchaDraw.png');
      let blob =  new Blob([(await captchaImg.blob())], {type: 'image/jpg'});
      captchaBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
      });
      captchaBase64 = await changeImageBackgroundColor(captchaBase64, 'white');
      captchaBase64 = captchaBase64.replace('data:image/png;base64,', '');
      let captchaImagetoText = (await (await fetch(awsCaptchaSolverApi, {
        method:"POST",
        body:JSON.stringify({captcha:"0", base64_image:captchaBase64})
      })).json()).detected_text;
      captchaImagetoText = captchaImagetoText.replace(' = ?','');
      captchaImagetoText = captchaImagetoText.split(' ');
      if (captchaImagetoText[1] === "-") {
        captchaSoln = parseInt(captchaImagetoText[0])-parseInt(captchaImagetoText[2]);
      }
      else if (captchaImagetoText[1] === "+") {
        captchaSoln = parseInt(captchaImagetoText[0])+parseInt(captchaImagetoText[2]);
      };
      chrome.storage.local.set({indianRailCaptchaValue:captchaSoln});
      console.log('Indian Rail Captcha Value :', captchaSoln);
      fetchAvailibilityURL = `https://www.indianrail.gov.in/enquiry/CommonCaptcha?inputCaptcha=${captchaSoln}&inputPage=TBIS_CALL_FOR_FARE&trainNo=${journeyTrain}&dt=${journeyDate}&sourceStation=${journeyFrom}&destinationStation=${journeyTo}&classc=2A&quota=GN&traintype=ST%2CSP&language=en`;
    };
    let r = {success:false};
    let response = (await (await fetch(fetchAvailibilityURL)).json());
    if (response.errorMessage) {
      r.errorMessage = response.errorMessage;
    }
    else{
      let response2 = (await (await fetch(`https://www.indianrail.gov.in/enquiry/CommonCaptcha?inputPage=TBIS_SCHEDULE_CALL&trainNo=${journeyTrain}&journeyDate=${journeyDate}&sourceStation=${journeyFrom}&language=en`)).json());
      let sourceDayCount = parseInt(response2.stationList[0].dayCount);
      let FromDayCount;
      response2.stationList.forEach(element => {
        if (element.stationCode === journeyFrom) {
          FromDayCount = parseInt(element.dayCount);
          return;
        };
      });
      r.tsd = FromDayCount-sourceDayCount;
      r.success = true;
      r.journeyFrom = data.from;
      r.journeyTo = data.to;
      r.journeyDate = data.date;
      r.journeyTrain = data.train;
      r.journeyQuota = data.quota;
      r.journeyClass = data.class;
      r.availablityStatus = response.avlDayList[0].availablityStatus;
      r.totalCollectibleAmount = response.totalCollectibleAmount;
      r.baseFare = response.baseFare;
    };
    sendMsgonPanelTab('trainAvailibilityResponse', r);
    sendResponse({"success":true});
  }
  else if (type === 'openProxyAuthInput') {
    let tabId = (await chrome.tabs.create({url:"https://www.google.com"})).id;
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["js/proxy-auth-input.js"]
    });
    sendResponse({"success":true});
  }
  else if (type === 'printTicket') {
    let tabId = (await chrome.tabs.create({url:"pages/print-ticket.html"})).id;
    sendMsgonTabId(tabId, 'paintTicket', {ticketObject: data.ticketObject});
    sendResponse({"success":true});
  }
  else{
    sendResponse({"success":true});
  };
  return true;  // uncomment this line to fix error
});

async function changeImageBackgroundColor(base64_image, bg_color) {
  const response = await fetch(base64_image);
  const blob = await response.blob();
  const imageBitmap = await createImageBitmap(blob);

  const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
  const ctx = canvas.getContext('2d');

  // Fill the canvas with the background color
  ctx.fillStyle = bg_color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the image on top of the background color
  ctx.drawImage(imageBitmap, 0, 0);

  // Convert the canvas back to a base64 image
  const newBlob = await canvas.convertToBlob();
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(newBlob);
  });
}

function loadUnreadMsgs() {
  let request = fetch(unreadMsgApi, {
    mode:"no-cors",
    method: "GET",
    redirect: "follow"
  }).then((response) => response.json()).then((responseJson) => {
    return responseJson;
  });
  return request;
};

function setProxyForPage(proxyAddress, proxyPort, proxyUsername, proxyPassword, pageUrl) {
  return new Promise((resolve, reject) => {
    const config = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "http",
          host: proxyAddress,
          port: parseInt(proxyPort)
        },
        bypassList: []
      }
    };

    chrome.proxy.settings.set({ value: config, scope: "regular" }, () => {
      console.log("Proxy settings applied for pages.");
      resolve();
    });

    // Since onAuthRequired is not supported in declarativeNetRequest,
    // we would handle it through setting up a proxy with credentials directly if possible
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [{
        id: 1,
        priority: 1,
        action: { type: "modifyHeaders", requestHeaders: [{ header: "Proxy-Authorization", operation: "set", value: "Basic " + btoa(proxyUsername + ":" + proxyPassword) }] },
        condition: { urlFilter: pageUrl, resourceTypes: ["main_frame", "sub_frame"] }
      }],
      removeRuleIds: [1]
    }, () => {
      console.log("Proxy authentication header set.");
      resolve();
    });
  });
}

function clearProxy() {
  return new Promise((resolve, reject) => {
    const config = { mode: "direct" };
    chrome.proxy.settings.set({ value: config, scope: "regular" }, () => {
      console.log("Proxy cleared.");
      resolve();
    });

    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1]
    }, () => {
      console.log("Proxy authentication header removed.");
      resolve();
    });
  });
}

clearProxy();