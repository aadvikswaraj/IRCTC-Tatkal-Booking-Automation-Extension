console.log('Booking Status Script Injected.');
document.title = "Pigeon Booking Tab";
try {
  let pigeonFavIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3xJREFUSImdlc9PXUUcxc/MvcDDR3+89Cm1QiMSGiJtl/oXgJHEVNK0kph2oa0LtQtrE1cu9E9oXLkxNSYmFkKpae3ChYsubFNQ4gIlbVFKoVggpZTH4935nuMCgQu819JOcnPnzuJz7vnOme84PGYcuaG9gXybZCehl41qoAlBGpf4dwi8ZIz7r7bXjlViuHKL7w6poVTi5ya8b2RECUaBFEwCSdjqXDShl+Jn19/YOfpEgaODOizTOZOyRuIJ8PTaIxmPD76V70vzfPrjnUGdlun8M8BBqS4AvW0X739S1kH3gLqM6jHJPwM89aYodv/V9eIPqwLd19VoTsMb/7zaCQ6AUvAlExYCK8FX5o+KFlrHjzbejQHAPL80YlNZPmyJ0V4fbQrBXCL8PFnCVyMFzBY3wWFUXUR8AeCEO3JDe428XS4tZ/bF6KiPKyUQt+YN3b9MY4FuvRsSJhnlm2KSXZWiKK3BvvtzFkNT88hla/HBgTzyNR7N2yJ05Eo4P+mgKE7DQSqikkNxIN+stKFpgaGpeVy5eR+oyaImk8Gn+7cDAF7NZ7E08Af87ibIRetCYESnp9RcKS3CmoJ8DNRkgZrn8Hxt1ep6ISEsGJJ7Y7CQpOACyVdiUrsrRTHt4Pj+F9DRvAs7qiO8ll8TuHJzCnIOpEEz94BcPQx+pVQvxfaYnKcdHMxV4WBuDSwAZ3+bwq+j/4LOLz8kODcDZHfCnAcpxiZNkmwpd4jSDkbmEkwvJlhIiH/mirg4PImBO9NrcBctv83AwkMosw0BbiImecuolnInVCmFs9dG8ePQKPQ/TM5thsOBPgIpsLgIVWdu+2C8XOn4pwxAwtbgcDBEoAArLf3kjXE/KSvXW9IlWoZuDS7nYQ6WVNde8Ffba8cCeK5cb0l7INxTwB3MRd/gZMu4A4DXL880BLhhSnXpxhWXCsD0HRgcFkqGJWKr8Hla1IpTrRMeAK517ho38JhRTDeuxSiD+e178KAYngLuReE9nGqdAFIXzu+d+QsmnTFS6/ahKgOXb4B8vBU4CX8aH7X1rHA3XZn7eqe6CH5rVF2qcSGUiggPZ0GhclmIY/i4rT/N8xsFRg7X9xUttMr4tUlhNb5RNZDNgT7eCGeA7yHdgY3wsg7SY8/3dxvJ5FAgOkk2mdTAEBCKhQl5P2rmLyWZTB9OtoxXYvwHJB0UzJWce+8AAAAASUVORK5CYII=`;
  var link = document.querySelectorAll("link[type='image/x-icon']");
  link[0].href = pigeonFavIcon;
  link[1].href = pigeonFavIcon;
} catch (error) {};
var bookingResponse;

var ticketSession;
const pigeonBmirek = "webbm"; // required header for requests
var pigeonBmiyek = window.localStorage.getItem("nget-spa.b-m-k"); // required header for requests
const irctcApis = {
    bookingData: {
        url:"https://www.wps.irctc.co.in/eticketing/protected/mapps1/bookingData/Client-txn-id",
        method:"GET",
        authReq:true,
        csrf: true
    },
    logout: {
      url:"https://www.irctc.co.in/eticketing/protected/mapps1/logout",
      method:"POST",
      authReq:true,
      csrf: true
    }
};

var pigeonCnt = document.createElement('div');
pigeonCnt.id = 'pigeon-popup-cnt';
pigeonCnt.classList.add('pigeon-popup-cnt');
pigeonCnt.innerHTML = pigeonBookingStatusModelHTML; // pigeonPaymentsModelHTML importing from data.js
document.body.appendChild(pigeonCnt);

// Send Runtime Msg
function sendRuntimeMsg(msg_type, msg_body) {
    let senderName = "booking_status_script";
    chrome.runtime.sendMessage({
    msg: {
        type: msg_type,
        data: msg_body,
    },
    sender: senderName,
    id: "pigeon",
});
};

// Receive Runtime Msg
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    console.log(message, sender, "booking_status_script received a msg");
    if (message.id !== "pigeon") {
        return;
    }
    const type = message.msg.type;
    const data = message.msg.data;
    if (type === "ticketSessionData") {
      ticketSession = data.ticketSession;
      console.log(ticketSession);
      document.querySelector('.pigeon-loader').classList.add('d-none');
      let popup = document.querySelector('.pigeon-popup');
      popup.querySelector(".stations").innerText = `${ticketSession.ticketData.journey.from}_${ticketSession.ticketData.journey.to}`;
      popup.querySelector(".train").innerText = ticketSession.ticketData.journey.train;
      popup.querySelector(".class-and-quota").innerText = `${ticketSession.ticketData.journey.class}:${ticketSession.ticketData.journey.quota}`;
      popup.querySelector(".date").innerText = ticketSession.ticketData.journey.date;
      popup.querySelector(".payment-data b").innerText = `${ticketSession.ticketData.paymentOption}`;
      popup.querySelector(".pair-id").innerText = `Pair #${ticketSession.pairId}`;
      popup.querySelector(".irctc-id b").innerText = ticketSession.loginData.username;

      document.querySelector('.status-msg').classList.add('focus');
      updatePigeonStatus("Checking for PNR...");
      
      irctcApis.bookingData.url = `https://www.wps.irctc.co.in/eticketing/protected/mapps1/bookingData/${ticketSession.clientTxnId}`;
      
      let response = await xhrRequest(irctcApis.bookingData.method, irctcApis.bookingData.url, null, null, null, irctcApis.bookingData.csrf, irctcApis.bookingData.authReq);
      response = JSON.parse(response.response);
      bookingResponse = response;
      document.querySelector('#passengers-submit-time-msg b').innerText = ticketSession.passengersSubmitTime;
      document.querySelector('#payment-initiated-time-msg b').innerText = ticketSession.paymentIntiatedTime;
      document.querySelector('#payment-time-msg b').innerText = ticketSession.paymentCompletedTime;
      if (response.userDetail.lastTxnStatus === "Not Booked") {
        document.querySelector('.booking-status-img .success-icon').classList.add('d-none');
        document.querySelector('#booking-status-msg b').innerText = "Not Booked";
        try {
          if (response.bookingResponseDTO[0].errorMessage) {
            updatePigeonStatus(`Ticket Not Booked - ${response.bookingResponseDTO[0].errorMessage}.`);
          }
          else{
            updatePigeonStatus('Ticket Not Booked.');
          };
        } catch (error) {
          updatePigeonStatus('Ticket Not Booked.');
        };
        document.querySelector('.status-msg').classList.remove('focus');
        document.querySelector('.status-msg').classList.add('red');
      }
      else if (response.userDetail.lastTxnStatus === "Booked") {
        document.querySelector('.booking-status-img .fail-icon').classList.add('d-none');
        document.querySelector('#booking-status-msg b').innerText = "Booked";
        document.querySelector('#booking-status-pnr b').innerText = response.bookingResponseDTO[0].pnrNumber;
        document.querySelector("#booking-status-pnr").classList.remove('d-none');
        updatePigeonStatus(`Sucess by Pigeon. ${ticketSession.paymentIntiatedTime}`);
        document.querySelector('.status-msg').classList.remove('focus');
        document.querySelector('.status-msg').classList.add('green');
      }
      else if (response.userDetail.lastTxnStatus === "Settled") {
        document.querySelector('.booking-status-img .success-icon').classList.add('d-none');
        document.querySelector('#booking-status-msg b').innerText = "Not Booked";
        try {
          if (response.bookingResponseDTO[0].errorMessage) {
            updatePigeonStatus(`Ticket Not Booked - ${response.bookingResponseDTO[0].errorMessage}.`);
          }
          else{
            updatePigeonStatus('Ticket Not Booked.');
          };
        } catch (error) {
          updatePigeonStatus('Ticket Not Booked.');
        };
        document.querySelector('.status-msg').classList.remove('focus');
        document.querySelector('.status-msg').classList.add('orange');
      }
      else {
        document.querySelector('.booking-status-img .success-icon').classList.add('d-none');
        document.querySelector('#booking-status-msg b').innerText = "Not Booked";
        updatePigeonStatus("Ticket Not Booked.");
        document.querySelector('.status-msg').classList.remove('focus');
      };
      document.querySelector('.booking-status-inacitve').classList.add('d-none');
  };
  sendResponse({ success: true });
  return true; // uncomment this line to fix error
});

// Update Pigeon Status Msg
function updatePigeonStatus(msg) {
    document.querySelector(".status-msg").innerText = msg;
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
        Greq: ticketSession.pigeonGreq
      };
      if (authReq) {
        headers["Authorization"] = `${"Bearer"} ${ticketSession.irctcLoginSession.access_token}`;
      };
      if (contentType === "JSON") { // Default is FORM data
        headers["Content-Type"] = "application/json;charset=UTF-8";
      };
      if (pigeonBmiyek) {
        headers["Bmiyek"] = pigeonBmiyek;
      };
      if (csrf) {
        headers["Spa-Csrf-Token"] = new Date().getTime().toString();
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

document.querySelector('#pigeon-print-ticket-btn').addEventListener('click', function (e) {
  e.preventDefault();
  let PNR = this.parentElement.querySelector('b').innerText;
});