console.log("Pigeon v6 Script Injected");
document.title = "Pigeon Booking Tab";
try {
  let pigeonFavIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3xJREFUSImdlc9PXUUcxc/MvcDDR3+89Cm1QiMSGiJtl/oXgJHEVNK0kph2oa0LtQtrE1cu9E9oXLkxNSYmFkKpae3ChYsubFNQ4gIlbVFKoVggpZTH4935nuMCgQu819JOcnPnzuJz7vnOme84PGYcuaG9gXybZCehl41qoAlBGpf4dwi8ZIz7r7bXjlViuHKL7w6poVTi5ya8b2RECUaBFEwCSdjqXDShl+Jn19/YOfpEgaODOizTOZOyRuIJ8PTaIxmPD76V70vzfPrjnUGdlun8M8BBqS4AvW0X739S1kH3gLqM6jHJPwM89aYodv/V9eIPqwLd19VoTsMb/7zaCQ6AUvAlExYCK8FX5o+KFlrHjzbejQHAPL80YlNZPmyJ0V4fbQrBXCL8PFnCVyMFzBY3wWFUXUR8AeCEO3JDe428XS4tZ/bF6KiPKyUQt+YN3b9MY4FuvRsSJhnlm2KSXZWiKK3BvvtzFkNT88hla/HBgTzyNR7N2yJ05Eo4P+mgKE7DQSqikkNxIN+stKFpgaGpeVy5eR+oyaImk8Gn+7cDAF7NZ7E08Af87ibIRetCYESnp9RcKS3CmoJ8DNRkgZrn8Hxt1ep6ISEsGJJ7Y7CQpOACyVdiUrsrRTHt4Pj+F9DRvAs7qiO8ll8TuHJzCnIOpEEz94BcPQx+pVQvxfaYnKcdHMxV4WBuDSwAZ3+bwq+j/4LOLz8kODcDZHfCnAcpxiZNkmwpd4jSDkbmEkwvJlhIiH/mirg4PImBO9NrcBctv83AwkMosw0BbiImecuolnInVCmFs9dG8ePQKPQ/TM5thsOBPgIpsLgIVWdu+2C8XOn4pwxAwtbgcDBEoAArLf3kjXE/KSvXW9IlWoZuDS7nYQ6WVNde8Ffba8cCeK5cb0l7INxTwB3MRd/gZMu4A4DXL880BLhhSnXpxhWXCsD0HRgcFkqGJWKr8Hla1IpTrRMeAK517ho38JhRTDeuxSiD+e178KAYngLuReE9nGqdAFIXzu+d+QsmnTFS6/ahKgOXb4B8vBU4CX8aH7X1rHA3XZn7eqe6CH5rVF2qcSGUiggPZ0GhclmIY/i4rT/N8xsFRg7X9xUttMr4tUlhNb5RNZDNgT7eCGeA7yHdgY3wsg7SY8/3dxvJ5FAgOkk2mdTAEBCKhQl5P2rmLyWZTB9OtoxXYvwHJB0UzJWce+8AAAAASUVORK5CYII=`;
  var link = document.querySelectorAll("link[type='image/x-icon']");
  link[0].href = pigeonFavIcon;
  link[1].href = pigeonFavIcon;
} catch (error) {};

// ------------------------------Declaring Some Variables starts here------------------------------
const pigeonBmirek = "webbm"; // required header for requests
var pigeonBmiyek = window.localStorage.getItem("nget-spa.b-m-k"); // required header for requests

const reccursionWaitTime = 2000;
const bnaRetryWaitTime = 3000;

let rapidApiCaptchaSolver = {
  method:"POST",
  url:"https://irctc-captcha-solver-api.p.rapidapi.com/api/captcha",
  "x-rapidapi-host": "irctc-captcha-solver-api.p.rapidapi.com",
  "x-rapidapi-key" : ""
};

const awsCaptchaSolverApi = 'https://eudmwig7d3.execute-api.ap-south-1.amazonaws.com/prodv1/pigeon-irctc-captcha-solver';

var pigeonPairs = {
  1: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: "",
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: (1000 * 6),
    beforeLoginWindowTime: 1000 * 90,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  2: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login",
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: "",
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: (1000 * 5),
    beforeLoginWindowTime: 1000 * 75,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  3: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: "",
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1000 * 1),
    beforeLoginWindowTime: 1000 * 60,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  4: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  5: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  6: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  7: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  8: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  9: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  10: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  11: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  12: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  13: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  14: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  15: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  16: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  17: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  },
  18: {
    clientTxnId: "",  // Transaction ID created by client while creating booking
    csrfToken: new Date().getTime().toString(), // Csrf Token
    pigeonPay: true,
    autofillCaptcha:false,
    pigeonCaptchaType: "Login", // current captcha type (handling by pigeon)
    pigeonGreq: new Date().getTime().toString(), // Greq for request headers, will be updated at loginCaptcha in response.status
    totalCollectibleAmount: null,
    irctcLoginSession: { loggedIn: false }, // IRCTC login session details
    hittingAvailibilityCount: 0,
    submitPassengerDataPigeonStatusTimerSeconds: 0,
    submitPassengerDataPigeonStatusTimerIntarvalId: null,
    beforeAvailablilityWindowTime: -(1500 * 1),
    beforeBookingWindowTime: -(1500 * 1),
    beforeLoginWindowTime: 1000 * 120,
    passengersSubmitTime:"",
    paymentInitiationTime:"",
    xhrObj:null,
    intervalObj:null,
    status:'not-started',
    bookingStopped:false
  }
};

var onePairProceededPayment = false; // To avoid multiple payments
var spdOnePair = false; // Submit Passengers Data One Pair
const advancedReservationPeriod = 120;
const advancedReservationPeriodBookingTime = {
  min:200,
  max:500
};
var irctcIdsData = {}; // IRCTC Id's Data loaded from pigeon local storage
var ticketName;
var ticketData = {}; // Ticket Data loaded from pigeon local storage
var ticketsData = {}; // Tickets Data loaded from pigeon local storage
var paymentOptionsData = {}; // Tickets Data loaded from pigeon local storage
var settingsData = {}; // Settings Data loaded from pigeon local storage
var serverSyncTimeDelay = 0;

var classBookingTimeGNDateSet = false;

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
  validateUser: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/validateUser?source=3",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "GET",
    authReq: true,
    csrf: true,
  },
  getTrainList: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/altAvlEnq/TC",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "POST",
    authReq: true,
    csrf: true
  },
  availablilityCheck: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/avlFarenquiry/TRAIN-NO/YYYYMMDD/SOURCE/DESTINATION/CLASS/QUOTA/N",
    referer: "https://www.irctc.co.in/nget/booking/train-list",
    method: "POST",
    authReq: true,
    csrf: true,
  },
  boardingStationEnq: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/boardingStationEnq",
    referer: "https://www.irctc.co.in/nget/booking/train-list",
    method: "POST",
    authReq: true,
    csrf: true,
  },
  createBookingAndBookingCaptcha: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/allLapAvlFareEnq/Y",
    referer: "https://www.irctc.co.in/nget/booking/train-list",
    method: "POST",
    authReq: true,
    csrf: true,
  },
  reloadBookingCaptcha: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/captchaganetate/clientTxnId/BOOKINGWS?nlpCaptchaException=true",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "GET",
    authReq: true,
    csrf: true,
  },
  verifyBookingCaptcha: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/addonServices",
    referer: "https://www.irctc.co.in/nget/train-search",
    method: "POST",
    authReq: true,
    csrf: true,
  },
  initiatePayment: {
    url: "https://www.irctc.co.in/eticketing/protected/mapps1/bookingInitPayment/ClientTxnId?insurenceApplicable=NA",
    method: "POST",
    authReq: true,
    csrf: true, 
  },
  testApi: {
    url: "https://www.irctc.co.in/nget/train-search",
    method: "GET",
    authReq: true,
    csrf: true 
  }
};

// Submit Passengers Data Wait Time
const submitPassengersDataWaitTime = {
  TQ: 20,
  PT: 20,
  GN: 20,
  LD: 20,
  SS: 20,
  HP: 20,
};

// Booking Timings
var classBookingTime;

// Payment Method Data
var paymentMethodData = {
  "PAYTM QR": {
    bankId: 117,
    type: "QR",
  },
  "PHONEPE QR": {
    bankId: 116,
    type: "UPI",
  },
  "IPAY UPI": {
    bankId: 113,
    type: "UPI",
  },
  "IPAY DEBIT/CREDIT CARD": {
    bankId: 117,
    type: "UPI",
  }
};

// ------------------------------Declaring Some Variables ends here------------------------------

// ------------------------------Some basic use function starts here------------------------------
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

function beautifyTime(time) {
  if (time<10) {
      return "0"+String(time);
  };
  return time;
};

function updatePigeonPairStatus(pairDOM, status, xhrObj=null, intervalObj=null) {
  let pairId = getPigeonPairId(pairDOM);
  pigeonPairs[pairId].status = status;
  pigeonPairs[pairId].xhrObj = xhrObj;
  pigeonPairs[pairId].intervalObj = intervalObj;
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var loginWaitTimeList = [];
function generateRandomLoginWaitTime() {
  while (true) {
    let waitTime;
    let found = false;
    while (!found) {
      waitTime = randomIntFromInterval(1000*180, 1000*300); // 3-5 minutes before
      if (loginWaitTimeList.length === 0) {
        found = true;
      }
      else{
        found = true;
        loginWaitTimeList.forEach(element => {
          if (Math.abs(element - waitTime) <= 1000*5) {
            found = false;
          };
        });
      };
    };
    if (found){
      loginWaitTimeList.push(waitTime);
      return waitTime;
    };
  };
};

var AvailablilityWaitTimeList = [];
function generateRandomAvailibilityWaitTime() {
  while (true) {
    let waitTime;
    let found = false;
    while (!found) {
      waitTime = randomIntFromInterval(1000*20, 1000*40); // 20-40 seconds before
      if (AvailablilityWaitTimeList.length === 0) {
        found = true;
      }
      else{
        found = true;
        AvailablilityWaitTimeList.forEach(element => {
          if (Math.abs(element - waitTime) <= 500) {
            found = false;
          };
        });
      };
    };
    if (found){
      AvailablilityWaitTimeList.push(waitTime);
      return waitTime;
    };
  };
};

let i = 1;
while (i <= 18) {
  pigeonPairs[i].beforeLoginWindowTime = (-1*generateRandomLoginWaitTime());
  pigeonPairs[i].beforeAvailablilityWindowTime = (-1*generateRandomAvailibilityWaitTime());
  i++;
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
// ------------------------------Some basic use function ends here------------------------------

// ------------------------------Chrome runtime messages handling starts here------------------------------
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
  }, function (response) {
    if (chrome.runtime.lastError) {
      chrome.runtime.connect();
    };    
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
  if (type === "deactivatePigeon") {
    document.querySelector('.tab-exists').classList.remove('d-none');
    document.title = "Pigeon Booking Tab (Duplicate)";
    sendResponse({"success":true});
  }
  else if (type === "fetchRequestResponse") {
    if (data.requestId === "irctcRedirectPayment") {
      handleRedirectPaymentResponse(data.pairId, data.response);
    } else if (data.requestId === "autofillCaptcha") {
      autofillCaptchaResponse(getPigeonPairDOM(data.pairId), JSON.parse(data.response).detected_text);
    };
  } else if (type === "selectTicket") {
    ticketData = ticketsData[data.ticketName];
    ticketName = data.ticketName;
    // Booking Timings
    let l = ticketData.journey.date.split('-');
    let a = new Date(l[0], parseInt(l[1])-1, l[2]);
    a.setDate(a.getDate() - (parseInt(ticketData.journey.tsd))-1);
    classBookingTime = {
      "1A": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "2A": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "3A": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "EC": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "3E": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "CC": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "EV": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 10, 0, 0, 0), // 10:00:00 AM for Same Day
      "SL": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 11, 0, 0, 0), // 11:00:00 AM for Same Day
      "2S": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 11, 0, 0, 0), // 11:00:00 AM for Same Day
      "GN": new Date(a.getFullYear(), a.getMonth(), a.getDate(), 8, 0, 0, 0), //  08:00:00 120 days from today
    };
    console.log("Current Ticket Data : ", ticketData);
    showPigeonDataOnPair("1");
  };
  sendResponse({ success: true });
  return true; // uncomment this line to fix error
});
// ------------------------------Chrome runtime messages handling ends here------------------------------

// ------------------------------XHR/FETCH Request functions for calling IRCTC API's starts here------------------------------
// Fetch Request (not returns response headers)
function fetchRequest(pairDOM, method, url, data = null, referer = null, contentType, csrf = false, authReq = false) {
  let pairId = pairDOM.getAttribute('data-pair');
  let csrfToken = pigeonPairs[pairId].csrfToken;
  headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.0",
    "Content-Language": "en",
    "Content-Type": "application/x-www-form-urlencoded",
    Bmirak: pigeonBmirek,
    Greq: pigeonPairs[pairId].pigeonGreq
  };
  if (authReq) {
    headers["Authorization"] = `${"Bearer"} ${pigeonPairs[pairId].irctcLoginSession.access_token}`;
  }
  if (contentType === "JSON") {
    headers["Content-Type"] = "application/json;charset=UTF-8";
  };
  if (pigeonBmiyek) {
    headers["Bmiyek"] = pigeonBmiyek;
  };
  if (csrf) {
    headers["Spa-Csrf-Token"] = csrfToken;
  };
  let request = fetch(url, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: headers,
    redirect: "follow",
    referrerPolicy: "same-origin",
    body: data
  }).then((response) => response.json()).then((responseJson) => {
      return responseJson;
  });
  return request;
};

// XHR Request (returns response headers with reponse)
async function xhrRequest(pairDOM, status=null, method, url, data = null, referer = null, contentType, csrf = false, authReq = false) {
  let proxyData = {enable:false};
  if (pairDOM.querySelector('.select-proxy').value !== '') {
    proxyData = settingsData.proxySettings[pairDOM.querySelector('.select-proxy').value];
    proxyData.enable = true;
  };
  await chrome.runtime.sendMessage({
    msg: {
      type: 'setProxy',
      data: proxyData
    },
    sender: 'bg_script',
    id: "pigeon"
  }, ()=>{});
  await delay(50);
  return new Promise(function (resolve, reject) {
    let pairId = getPigeonPairId(pairDOM);
    let xhr = new XMLHttpRequest();
    if (status) {
      updatePigeonPairStatus(pairDOM, status, xhr);
    };
    xhr.open(method, url);
    headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.0",
      "Content-Language": "en",
      "Content-Type": "application/x-www-form-urlencoded",
      Bmirak: pigeonBmirek,
      Greq: pigeonPairs[pairId].pigeonGreq
    };
    if (authReq) {
      headers["Authorization"] = `${"Bearer"} ${pigeonPairs[pairId].irctcLoginSession.access_token}`;
    };
    if (contentType === "JSON") { // Default is FORM data
      headers["Content-Type"] = "application/json;charset=UTF-8";
    };
    if (pigeonBmiyek) {
      headers["Bmiyek"] = pigeonBmiyek;
    };
    if (csrf) {
      headers["Spa-Csrf-Token"] = pigeonPairs[pairId].csrfToken;
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
        status: this.statusText,
        statusText: xhr.statusText
      });
    };
    xhr.send(data);
  });
};
// ------------------------------XHR/FETCH Request functions for calling IRCTC API's starts here------------------------------

// --------------------------------Loading Pigeon in DOM starts here--------------------------------
// Injecting Pigeon HTML in DOM
var irctcPigeonCnt = document.createElement("div");
irctcPigeonCnt.id = "pigeon-popup-cnt";
irctcPigeonCnt.classList.add("pigeon-popup-cnt");
irctcPigeonCnt.innerHTML = pigeonModelHTML; // pigeonModelHTML importing from data.js
document.body.appendChild(irctcPigeonCnt);

function showPigeonDataOnPair(pairId) {
  // Setting pigeon DOM variables (ex.-stations, train, date, etc...)
  let pairDOM = getPigeonPairDOM(pairId);
  let popup = pairDOM;
  popup.querySelector(".pair-data").innerText = `${ticketName} [${pairId}-18] (before ${(pigeonPairs[pairId].beforeBookingWindowTime*-1)/1000} sec)`;
  popup.querySelector(".stations").innerText = `${ticketData.journey.from}_${ticketData.journey.to}`;
  popup.querySelector(".train").innerText = ticketData.journey.train;
  popup.querySelector(".class").innerText = ticketData.journey.class;
  popup.querySelector(".date").innerText = ticketData.journey.date;

  // // Setting pigeon DOM preference autofill captcha
  // let a = pairDOM.querySelector(".pigeon-captcha-autofill-status");
  // let b = pairDOM.querySelector(".autofill-captcha-toggle-btn");
  // if (pigeonPairs[pairId].autofillCaptcha) {
  //   a.innerText = "Enabled";
  //   b.innerText = "Disable Autofill Captcha";
  // } else {
  //   a.innerText = "Disabled";
  //   b.innerText = "Enable Autofill Captcha";
  // };
  
  // Setting pigeon DOM preference Pigeon Pay
  a = pairDOM.querySelector(".pay-toggle-btn");
  if (pigeonPairs[pairId].pigeonPay) {
    a.innerText = "Stop Pay";
  } else {
    a.innerText = "Enable Pay";
  };

  let c = pairDOM.querySelector('.select-irctc-id');
  c.innerHTML = '<option value="">-Select ID-</option>';
  for (const key in irctcIdsData) {
    if (irctcIdsData[key].active) {
      let opt = document.createElement('option');
      opt.value = key;
      opt.innerText = key;
      c.appendChild(opt);
    };
  };

  try {
    c.querySelectorAll('option')[pairId].selected = true;
  } catch (error) {};
  
  let d = pairDOM.querySelector('.select-proxy');
  d.innerHTML = '<option value="">-MY IP-</option>';
  for (const key in settingsData.proxySettings) {
    if (settingsData.proxySettings[key].enable) {
      let opt = document.createElement('option');
      opt.value = key;
      opt.innerText = `PROXY #${key}`;
      d.appendChild(opt);
    };
  };

  let paymentOptionsList = Object.keys(paymentOptionsData);
  let paymentOptionDOM = pairDOM.querySelector('.select-payment-option');
  paymentOptionDOM.innerHTML = '';
  paymentOptionsList.forEach(element => {
    let opt = document.createElement('option');
    opt.value = element;
    opt.innerText = element;
    paymentOptionDOM.appendChild(opt);
  });
  paymentOptionDOM.value = ticketData.paymentOption;

  pairDOM.querySelector('.select-journey-quota').value = ticketData.journey.quota;

  // Setting availablilityCheck URL based on Pigeon saved Journey Data
  irctcApis.availablilityCheck.url = `https://www.irctc.co.in/eticketing/protected/mapps1/avlFarenquiry/${ticketData.journey.train}/${ticketData.journey.date.replaceAll("-", "")}/${ticketData.journey.from}/${ticketData.journey.to}/${ticketData.journey.class}/${getPairJourneyQuota(pairDOM)}/N`;
  pairDOM.querySelector(".pigeon-loader").style.display = "none";
};

// Fetching autofill Data from Pigeon local Storage
chrome.storage.local.get(null, (result) => {
  irctcIdsData = result.ids;
  ticketsData = result.tickets;
  paymentOptionsData = result.paymentOptions;
  settingsData = result.settings;

  rapidApiCaptchaSolver["x-rapidapi-key"] = settingsData.rapidapiCaptchaSolverApiKey;

  initiateCheckProxyAuth();
  
  console.log("IRCTC ID'S Data : ", irctcIdsData);
  console.log("Tickets Data : ", ticketsData);
  console.log("Settings Data : ", settingsData);
});

// Deleting all IRCTC Scripts and Styles
document.querySelectorAll("script").forEach((element) => {
  delete element;
});
document.querySelectorAll("style").forEach((element) => {
  delete element;
});
document.querySelectorAll('link[rel="stylesheet"]').forEach((element) => {
  delete element;
});

document.querySelectorAll(".pigeon-make-payment button").forEach(element => {
  element.addEventListener("click", function() {
    let pairId =this.getAttribute('data-pair');
    let pairDOM = getPigeonPairDOM(pairId);
    pigeonPairs[pairId].pigeonPay = true;
    pairDOM.querySelector(".pigeon-make-payment").style.display = "none";
    initiatePayment(pairDOM);
}); 
});

// --------------------------------Loading Pigeon in DOM ends here--------------------------------

// ------------------------------Pigeon DOM Handling starts here------------------------------
function getPairJourneyQuota(pairDOM) {
  return pairDOM.querySelector('.select-journey-quota').value;
};

function getPairPaymentOption(pairDOM) {
  return paymentOptionsData[pairDOM.querySelector('.select-payment-option').value];
};

// Update Pigeon Status Msg
function updatePigeonStatus(pairDOM, msg) {
  pairDOM.querySelector(".status-msg").innerText = msg;
};

function submitPassengerDataPigeonStatusTimerIntervalFunc(pairDOM) {
  let pairId = pairDOM.getAttribute('data-pair');
  pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerSeconds--;
  updatePigeonStatus(pairDOM, `Submitting Passengers Data in ${pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerSeconds}s...`); // Updating Status Msg
  if (pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerSeconds === 0) {
    clearInterval(pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerIntarvalId);
  };
};

// Submit Passengers Data Timer for Pigeon Status Msg
function submitPassengerDataPigeonStatusTimer(pairDOM) {
  let pairId = pairDOM.getAttribute('data-pair');
  pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerSeconds = submitPassengersDataWaitTime[getPairJourneyQuota(pairDOM)];
  updatePigeonStatus(pairDOM, `Submitting Passengers Data in ${pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerSeconds}s...`); // Updating Status Msg
  pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerIntarvalId = 
  setInterval(submitPassengerDataPigeonStatusTimerIntervalFunc.bind(null, pairDOM), 1000);
};


document.querySelectorAll(".reload-pigeon-captcha-btn").forEach(element => {
  element.addEventListener("click", reloadPigeonCaptcha); // Pigeon Captcha Reload Handling
});

document.querySelectorAll(".pigeon-captcha").forEach(element => {
  element.addEventListener("submit", handlePigeonCaptchaSubmit); // Pigeon Captcha Submit Handling
});

// Toggle Pigeon Pay Btn
document.querySelectorAll(".pay-toggle-btn").forEach(element => {
  element.addEventListener("click", function() {
    let pairId = this.getAttribute('data-pair');
    let pairDOM = getPigeonPairDOM(pairId);
    let payBtn = pairDOM.querySelector(".pay-toggle-btn");
    if (pigeonPairs[pairId].pigeonPay) {
      pigeonPairs[pairId].pigeonPay = false;
      payBtn.innerText = "Enable Pay";
    } else {
      pigeonPairs[pairId].pigeonPay = true;
      payBtn.innerText = "Stop Pay";
    };
  });
});

// Stop Booking Btn
document.querySelectorAll(".stop-booking-btn").forEach(element => {
  element.addEventListener("click", function() {
    let pairId = this.getAttribute('data-pair');
    let pairDOM = getPigeonPairDOM(pairId);
    updatePigeonStatus(pairDOM, "Booking Stopped by User."); // Update Pigeon Status
    try {
      clearInterval(pigeonPairs[pairId].submitPassengerDataPigeonStatusTimerIntarvalId);
    } catch (error) {};
    try {
      clearInterval(pigeonPairs[pairId].intervalObj);
    } catch (error) {};
    try {
      pigeonPairs[pairId].xhrObj.abort();
    } catch (error) {};
    pigeonPairs[pairId].bookingStopped = true;
    console.log(pigeonPairs);
    console.log(pigeonPairs[pairId]);
    console.log(pairId);
    console.log(pigeonPairs[pairId].bookingStopped);
    enableNewBooking(pairDOM);
  });
});

document.querySelectorAll(".start-login-btn").forEach(element => {
  element.addEventListener("click", startLogin); // Login Btn Handling
});

function getPigeonPairDOM(pairId) {
  return document.querySelector(`.pigeon-pair[data-pair="${pairId}"] .pigeon-popup`);
};

function getPigeonPairId(pairDOM) {
  return pairDOM.getAttribute('data-pair');
};
// ------------------------------Pigeon DOM Handling ends here------------------------------

// ------------------------------Initiating Login starts here------------------------------
function disableNewBooking(pairDOM) {
  pairDOM.querySelector('.select-irctc-id').disabled = true;
  pairDOM.querySelector('.select-proxy').disabled = true;
  pairDOM.querySelector('.select-journey-quota').disabled = true;
  pairDOM.querySelector(".start-login-btn").disabled = true;
  pairDOM.querySelector(".stop-booking-btn").disabled = false;
};

function enableNewBooking(pairDOM) {
  pigeonPairs[getPigeonPairId(pairDOM)].bookingStopped = false;
  irctcIdsData[pairDOM.querySelector('.select-irctc-id').value].used = false;
  pairDOM.querySelector('.select-irctc-id').disabled = false;
  pairDOM.querySelector('.select-proxy').disabled = false;
  pairDOM.querySelector('.select-journey-quota').disabled = false;
  pairDOM.querySelector(".start-login-btn").disabled = false;
  pairDOM.querySelector(".stop-booking-btn").disabled = true;
};

// Start IRCTC Login (Called by startLoginBtn)
function startLogin() {
  let pairId = this.getAttribute('data-pair');
  let pairDOM = getPigeonPairDOM(pairId);
  let selectIrctcIdDOM =  pairDOM.querySelector('.select-irctc-id');
  if (selectIrctcIdDOM.value === "") {
    alert('Please Select IRCTC ID.');;
    return;
  }
  else if (irctcIdsData[selectIrctcIdDOM.value].used) {
    alert('This IRCTC ID already in Use by Another Pigeon Pair.');
    return;
  }
  else{
    irctcIdsData[selectIrctcIdDOM.value].used = true;
  };
  
  disableNewBooking(pairDOM);
  if (getPairJourneyQuota(pairDOM) === "TQ" || getPairJourneyQuota(pairDOM) === "PT") {
    let now = new Date();
    let waitTime = classBookingTime[ticketData.journey.class].getTime() - now.getTime() + pigeonPairs[pairId].beforeLoginWindowTime;
    if (waitTime < 0) {
      loadLoginCaptcha(pairDOM); // Initiating Loading Login Captcha
    } else {
      let waitTimeObj = new Date(classBookingTime[ticketData.journey.class].getTime() + pigeonPairs[pairId].beforeLoginWindowTime);
      updatePigeonStatus(pairDOM, `Wait for ${beautifyTime(waitTimeObj.getHours())}:${beautifyTime(waitTimeObj.getMinutes())}:${beautifyTime(waitTimeObj.getSeconds())} to Login IRCTC.`);
      let intervalObj = setTimeout(loadLoginCaptcha.bind(null, pairDOM), waitTime); // Initiating Initiating Loading Login Captcha at before Booking Time
      updatePigeonPairStatus(pairDOM, 'wait-login', null, intervalObj);
    };
  }
  else if (getPairJourneyQuota(pairDOM) === "GN") {
    let advanceBookingDate = new Date();
    advanceBookingDate.setDate(advanceBookingDate.getDate() + advancedReservationPeriod);
    advanceBookingDate.setHours(0);
    advanceBookingDate.setMinutes(0);
    advanceBookingDate.setSeconds(0);
    advanceBookingDate.setMilliseconds(0);

    let l = ticketData.journey.date.split('-');
    let dateOfJourney = new Date(l[0], parseInt(l[1])-1, l[2]);
    console.log(dateOfJourney);
    console.log(advanceBookingDate);
    if (dateOfJourney.getTime() < advanceBookingDate.getTime()) {
      loadLoginCaptcha(pairDOM);
      console.log('ok');
    }
    else{
      console.log('ok2');
      let now = new Date();
      if (!classBookingTimeGNDateSet) {
        classBookingTime["GN"].setDate(classBookingTime["GN"].getDate() - advancedReservationPeriod+1);
        classBookingTimeGNDateSet = true;
      };
      let waitTime = classBookingTime["GN"].getTime() - now.getTime() + pigeonPairs[pairId].beforeLoginWindowTime;
      if (waitTime < 0) {
        loadLoginCaptcha(pairDOM); // Initiating Loading Login Captcha
      } else {
        let waitTimeObj = new Date(classBookingTime["GN"].getTime() + pigeonPairs[pairId].beforeLoginWindowTime);
        updatePigeonStatus(pairDOM, `Wait for ${beautifyTime(waitTimeObj.getHours())}:${beautifyTime(waitTimeObj.getMinutes())}:${beautifyTime(waitTimeObj.getSeconds())} to Login IRCTC.`);
        let intervalObj = setTimeout(loadLoginCaptcha.bind(null, pairDOM), waitTime); // Initiating Initiating Loading Login Captcha at before Booking Time
        updatePigeonPairStatus(pairDOM, 'wait-login', null, intervalObj);
      };
    };
  } else {
    loadLoginCaptcha(pairDOM);
  };
};
// ------------------------------Initiating Login ends here------------------------------

// ------------------------------Handling Pigeon Captcha starts here------------------------------
// Pigeon Captcha DOM Handling
function pigeonCaptchaDOM(pairDOM, enable = false, manual = true, captchaImg) {
  // Loading DOM Elements
  let captchaImgDOM = pairDOM.querySelector(".pigeon-captcha-img");
  let pigeonCaptchaDOM = pairDOM.querySelector(".pigeon-captcha");
  let captchaInputDOM = pairDOM.querySelector(".pigeon-captcha-input");
  let reloadCaptchaBtnDOM = pairDOM.querySelector(".reload-pigeon-captcha-btn");
  let captchaSubmitBtnDOM = pairDOM.querySelector(".submit-pigeon-captcha-btn");
  // Handling Enable
  if (enable) {
    pigeonCaptchaDOM.classList.remove('d-none'); // DOM pigeon captcha enabled
    captchaInputDOM.value = "";
    if (manual) {
      //Handling Manual Captcha Filling
      updatePigeonStatus(pairDOM, `Please Enter ${pigeonCaptchaType} Captcha.`); // Updating Status Msg
      captchaInputDOM.value = "";
      captchaInputDOM.disabled = false;
      reloadCaptchaBtnDOM.disabled = false;
      captchaSubmitBtnDOM.disabled = false;
      captchaInputDOM.focus();
    } else {
      // Handling Automatic Captcha Filling
      captchaInputDOM.disabled = false;
      reloadCaptchaBtnDOM.disabled = false;
      captchaSubmitBtnDOM.disabled = false;
    };
    captchaImgDOM.src = "data:image/jpg;base64," + captchaImg; // Setting Captcha Img to DOM
  } else {
    pigeonCaptchaDOM.classList.add('d-none'); // DOM pigeon captcha enabled
  };
};

// Pigeon Captcha Submit Handling
function handlePigeonCaptchaSubmit(event) {
  event.preventDefault(); //Preventing Default Submit Behaviour
  let pairDOM = getPigeonPairDOM(this.getAttribute('data-pair'));
  pigeonCaptchaDOM(pairDOM, false); // Pigeon Captcha DOM disabled
  let captchaValue = pairDOM.querySelector(".pigeon-captcha-input").value; // Pigeon Captcha Value
  // Handling IRCTC Login
  if (pigeonCaptchaType === "Login") {
    loginIrctc(pairDOM, captchaValue); // Login to IRCTC
  } else if (pigeonCaptchaType === "Booking") {
    verifyBookingCaptcha(pairDOM, captchaValue); //Verify Booking Captcha
  };
};

// Reload Login Captcha
function reloadPigeonCaptcha(event) {
  pairDOM = getPigeonPairDOM(this.getAttribute('data-pair'));
  if (pigeonCaptchaType === "Login") {
    reloadLoginCaptcha(pairDOM); // Reloading Login Captcha
  } else if (pigeonCaptchaType === "Booking") {
    reloadBookingCaptcha(pairDOM);
  };
};
// ------------------------------Handling Pigeon Captcha ends here------------------------------

// ------------------------------Handling Autofill Pigeon Captcha starts here------------------------------
function awakeAutofillCaptchaApi() {
  sendRuntimeMsg("fetchRequest", {
    pairId:"",
    requestId: "awakeAutofillCaptcha",
    url: awsCaptchaSolverApi,
    method:"POST",
    msg_type:"JSON",
    msg:{captcha:"1", base64_image:"iVBORw0KGgoAAAANSUhEUgAAAMsAAAAyCAYAAADyZi/iAAAFV0lEQVR42u1dYWSVURieK/sxiSuTzMQkMzMx6cfMRGZmJiOTJOnPJJmJ9CPJFZPMZCKTZGZkksmMTDL7EUkmmZjJTDImM5O53L6T99bp3Tnfed97b7O++zwcfTvnvO8595zzfOe87znnq6ICAAAAAAAAAAAAAAAAAAAAAIBSIseAFgHyA+MzGxunlPLTTH5OKd/G5JeSThaQ8f8lyxPWd7cUsqkobDP5bBT2KXTcYvJPQRZgr5Kll/XdK4Vsa86NToWOGSbbC7IAe5Ush1jfmZkiJZS9acn9sJ4zRcxMh0AWIHF2S5TvpSUzbj3PCuVPs3IXy8HAB1n+b7I8Zv13Wzgr2LPJEe3sZMph5T4GWYC9TpazrP9mBTItVv6PFPdBMzuZcli5PQXUvYOcFAtR2CIHg/n3E8WfLuVgNvZYFCaisEovC/Ni+EJltYIsySdLtcNu2ReQuWHlH6W4EalXzeingW3joKLOpxzLRx8MiRuLIQvZdq8FZT2PQhpkSTZhPrE+bA/kn7LynqW4HituRjAj5PjsJKzrQE6PDYUtxpFWEDNPzjTIklyyPGJ9mAnYK1tW3mqKT0vtlijtLivvobCefY59nRGaaSopTyUtLd+zvOtRqCuALJPW81AUmqgNUvQ85Jglp0GW5JKlh/Xh65i8J30eLDZDtcboeKO1V6I89czVvBaFEwFST7ByXhZAlrxrvD1Gpt3hBj8PsiSTLGmp3cKWQU9Y2qiVdlNhr6QFdZzSurhplllkco0FkKVfUFa/xBUOsiSDMAuSnXgyYp077uxEwAuPfCcrZ0FQtzomM6P4XX3SJaaHLMtCV3iKPGO5uNkVZEkGWUZYPw568tn2ymGWZp8I2PLID7JyRgR1u85kzil+V63mSI+DLBlFWZlQG4IsybRb5hx5mkMnhJnn6IQjfZ6Vc0ZQt0kmU6/8bTa+K8miOevWxWRfgCzJJMuB0Ani6O9roRPCJt631icbIsvKOCCo27LD4A4FH34oyaLZ/znIPXAgS3IJ84H1ZVfMG77Xo8O2WyZZWjfT/15Yr61cCaEhi7L9UiFigizJIcsD1pf3WPqmlVbj0VHjs1toT8LGcAHLqD1LFof8NshSPnbLvJV23PYQBfTYXqFmK/4d098trBffw0j9wzbAzAKIOnu/w27J74xfld5ojNLHrLxXKK7KYa9UCeu1XoyBXwxZYLMAcR3+zmW3MHvlfEDHBSvvM4o7w/S+VdRparduVMIbBmgGyzDrzyGK37DvrwR01PG3q8Meuq+o0x1+XmsXyaLZZ7mLfZbyIsuOGYAODOaxItSzask0hDxtAV2NjuM4R3aJLJod/GXs4JcXWVy2hX1/ZUyoxz7EOOCzhRT1mpUe9iwxWX7VXyA3gLNhsFtybJ/jolDHJY/8X142RZ0aHJuN5pzafqF8m/AWqAvbOHUM+Dr/fsw2xVGhjvoYHYMF1uuiQ9cqfWmmOb9coiVRDS0pzW9Zkg7OwH2WYVoSpqzl4TDus5Q3Wbo9g/yrUs+aR09XEXW77BicJdmQ9JAl7Tjmj5uSwO8OrfQMyHGlngmHDtVXK2MM/jnFADZlPjMX17Rkobhq4R38SeUd/CxGWzIIM+8YDJeVOvocOt6UsI5m6XXPHLsn13aWbIdN8uKN0Vm1tEJn3NddOugFsEJlZckDZr7u0iL0mOVC1xgAAC+gnSe7v6FVAMBNluAOPwAAFc5bohm0CgDsJEqt40BoM1oGAP6QpJrc3avF/MdPAJBkksRdbTYzzDG0EgDEk8V8iLAJLQQAf8iyQYTJf9V/nG6iptA6AAAAAAAAAAAAAAAAJcJPZWazepuWcRkAAAAASUVORK5CYII="}
  });
};

function autofillCaptcha(pairDOM, captchaQuestion) {
  if (!pigeonPairs[getPigeonPairId(pairDOM)].bookingStopped) {
    updatePigeonStatus(pairDOM, "Autofilling Captcha...");
    sendRuntimeMsg("fetchRequest", {
      pairId:getPigeonPairId(pairDOM),
      requestId: "autofillCaptcha",
      url:awsCaptchaSolverApi,
      method:"POST",
      msg_type:"JSON",
      msg:{captcha:"1", base64_image:captchaQuestion}
    });
  }
  else{
    updatePigeonStatus(pairDOM, "Booking Stopped by User."); // Update Pigeon Status
  };
};

function autofillCaptchaResponse(pairDOM, captchaText) {
  if (!pigeonPairs[getPigeonPairId(pairDOM)].bookingStopped) {
    if (captchaText === "") {
      updatePigeonStatus(pairDOM, "Autofill Failed!, Please Enter Captcha.");
      return;
    };
    pairDOM.querySelector(".pigeon-captcha-input").value = captchaText;
    console.log("Your Autofill Captcha : ", captchaText);
    // let pairId = getPigeonPairId(pairDOM);
    if ((pigeonCaptchaType === "Login" && settingsData.submitAutofillLoginCaptcha) || (pigeonCaptchaType === "Booking" && settingsData.submitAutofillBookingCaptcha)) {
      pairDOM.querySelector('.submit-pigeon-captcha-btn').click();
    }
    else {
      updatePigeonStatus(pairDOM, "Please Check Autofill Captcha and submit it.");
    };
  }
  else{
    updatePigeonStatus(pairDOM, "Booking Stopped by User."); // Update Pigeon Status
  };
};

// ------------------------------Handling Pigeon Captcha ends here------------------------------

// ------------------------------Handling IRCTC Login Captcha starts here------------------------------
// Load Login Captcha
async function loadLoginCaptcha(pairDOM, reload = false, onInvalid = false) {
  let pairId = getPigeonPairId(pairDOM);
  pigeonCaptchaDOM(pairDOM, false); // Pigeon Captcha DOM disabled
  // Updating Status Msg
  if (reload) {
    if (onInvalid) {
      updatePigeonStatus(pairDOM, "Invalid Captcha. Reloading Login Captcha...");
    } else {
      updatePigeonStatus(pairDOM, "Reloading Login Captcha...");
    }
  } else {
    updatePigeonStatus(pairDOM, "Getting Login Captcha...");
  }

  let response;
  try {
    // Loading Login Captcha IRCTC API
    response = await xhrRequest(pairDOM, 'load-captcha', irctcApis.loginCaptcha.method, irctcApis.loginCaptcha.url, null, irctcApis.loginCaptcha.referer);
    response = JSON.parse(response.response); // Updating csrfToken
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(loadLoginCaptcha.bind(null, pairDOM, reload, onInvalid), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  if (response.status) {
    pigeonPairs[pairId].pigeonGreq = response.status; // Upading Greq
  } else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(loadLoginCaptcha.bind(null, pairDOM, reload, onInvalid), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  // Handling Autofill Enable/Disable
  pigeonCaptchaType = "Login"; // Setting Pigeon Captcha Type
  if (settingsData.autofillLoginCaptcha) {
    // Handling Autofill Captcha
    pigeonCaptchaDOM(pairDOM, true, false, response.captchaQuestion);
    autofillCaptcha(pairDOM, response.captchaQuestion);
  } else {
    // Handling Manual Captcha
    pigeonCaptchaDOM(pairDOM, true, true, response.captchaQuestion);
  };
};
// ------------------------------Handling IRCTC Login Captcha ends here------------------------------

// ------------------------------Handling IRCTC Login starts here------------------------------

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
function encryptLoginData(pairDOM, captcha) {
  let loginData = getPairLoginData(pairDOM);
  let key = (captcha + pigeonPairs[getPigeonPairId(pairDOM)].pigeonGreq + "AAAAAAAAAAAAAAAA").substring(0, 16);
  let data = loginData.username + "#UP#" + btoa(loginData.password) + "#UP#" + new Date().getTime();
  return encryptMessage(data, key);
};

// Get Pigeon Pair Login Credentials
function getPairLoginData(pairDOM) {
  let irctcId = pairDOM.querySelector('.select-irctc-id').value;
  return {
    'username': irctcId,
    'password':irctcIdsData[irctcId].password
  };
};

// Login IRCTC
async function loginIrctc(pairDOM, captcha) {
  let pairId = getPigeonPairId(pairDOM);
  updatePigeonStatus(pairDOM, "Login Started..."); // Updating Status Msg
  // Preparing FormData for Login Request
  let data = generateURLSearchParams({
    grant_type: "password",
    data: encryptLoginData(pairDOM, captcha),
    captcha: captcha,
    uid: pigeonPairs[pairId].pigeonGreq,
    otpLogin: "false",
    lso: "",
    encodedPwd: "true"
  });

  let response;
  try {
    // Requesting Login to IRCTC
    response = await xhrRequest(pairDOM, 'login-irctc', irctcApis.login.method, irctcApis.login.url, data, irctcApis.login.referer, "FORM", false, false);
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    console.log(response);
    response = JSON.parse(response.response); // Updating csrfToken
    console.log(response);
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(loginIrctc.bind(null, pairDOM, captcha), reccursionWaitTime); // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  if (response.token_type === "bearer") {
    // Login Sucess Handling 
    pigeonPairs[pairId].irctcLoginSession.loggedIn = true;
    pigeonPairs[pairId].irctcLoginSession.access_token = response.access_token;
    pigeonPairs[pairId].irctcLoginSession.refresh_token = response.refresh_token;
    pigeonPairs[pairId].irctcLoginSession.token_type = response.token_type;
    updatePigeonStatus(pairDOM, "Login Success."); // Updating Pigeon Status
    validateUser(pairDOM); // Initiating validateUser
  } else if (response.error === "unauthorized") {
      // Unauthorized Login Handling
      if (response.error_description === "Invalid User") {
        updatePigeonStatus(pairDOM, "Invalid User, Check Your Id."); // Updating Pigeon Status
        enableNewBooking(pairDOM);
      } else if (response.error_description === "Bad credentials") {
        updatePigeonStatus(pairDOM, "Bad credentials, Check your Password."); // Updating Pigeon Status
        enableNewBooking(pairDOM);
      } else if (response.error_description === "Invalid Captcha....") {
        reloadLoginCaptcha(pairDOM, true); // Reloading Login Captcha due to Invalid Captcha
      };
  } else if (response.errorMessage) {
      updatePigeonStatus(pairDOM, response.errorMessage);
      enableNewBooking(pairDOM);
  } else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(loginIrctc.bind(null, pairDOM, captcha), reccursionWaitTime); // Recurrsion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };
};

// Reload Login Captcha
function reloadLoginCaptcha(pairDOM, onInvalid = false) {
  loadLoginCaptcha(pairDOM, true, onInvalid); // Reloading Login Captcha
}
// ------------------------------Handling IRCTC Login ends here------------------------------

// ------------------------------Handling IRCTC Validating User and Creating Csrf Token starts here------------------------------
// Validating User and Creating Csrf Token
async function validateUser(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  updatePigeonStatus(pairDOM, "Validating User..."); // Updating Status Msg
  let response;
  try {
    // Validating User IRCTC API
    response = await xhrRequest(pairDOM, 'validate-user', irctcApis.validateUser.method, irctcApis.validateUser.url, null,
      irctcApis.validateUser.referer, null, irctcApis.validateUser.csrf, 
      irctcApis.validateUser.authReq);
    
      pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
      response = JSON.parse(response.response); // Updating csrfToken
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(validateUser.bind(null, pairDOM), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  if (response.userId) {
    getTrainList(pairDOM); // Getting Train List
  } else if (response.error) {
    updatePigeonStatus(pairDOM, response.error);
    enableNewBooking(pairDOM);
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(validateUser.bind(null, pairDOM), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };
};
// ------------------------------Handling IRCTC Validating User and Creating Csrf Token ends here------------------------------

// ------------------------------Handling IRCTC Get Train List starts here------------------------------
async function getTrainList(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  updatePigeonStatus(pairDOM, "Hitting Train List..."); // Updating Status Msg
  // Preparing JSON for Get Train List Request
  let data = {
    concessionBooking: false,
    srcStn: ticketData.journey.from,
    destStn: ticketData.journey.to,
    jrnyClass: "",
    jrnyDate: ticketData.journey.date.replaceAll("-", ""),
    quotaCode: getPairJourneyQuota(pairDOM),
    currentBooking: "false",
    flexiFlag: false,
    handicapFlag: false,
    ticketType: "E",
    loyaltyRedemptionBooking: false,
    ftBooking: false
  };

  let response;
  try {
    // Get Train List IRCTC API
    response = await xhrRequest(pairDOM, 'train-list', irctcApis.getTrainList.method, irctcApis.getTrainList.url, JSON.stringify(data),
      irctcApis.getTrainList.referer, "JSON", irctcApis.getTrainList.csrf, irctcApis.getTrainList.authReq);
    
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Parsing JSON
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(getTrainList.bind(null, pairDOM), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  }
  if (response.trainBtwnStnsList) {
    initiateBooking(pairDOM); // Initialing Booking
  } else if (response.error) {
    updatePigeonStatus(pairDOM, response.error);
    enableNewBooking(pairDOM);
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(getTrainList.bind(null, pairDOM), reccursionWaitTime);  // Reccursion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };
};
// ------------------------------Handling IRCTC Get Train List ends here------------------------------

// ------------------------------Handling Initiate Booking starts here------------------------------
function initiateBooking(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  if (getPairJourneyQuota(pairDOM) === "TQ" || getPairJourneyQuota(pairDOM) === "PT") {
    updatePigeonStatus(pairDOM, "Waiting for Booking Window to Open...");
    let now = new Date();
    let waitTime = classBookingTime[ticketData.journey.class].getTime() - now.getTime() + pigeonPairs[pairId].beforeAvailablilityWindowTime;
    if (waitTime < 0) {
      startBooking(pairDOM); // Start Booking
    } else {
      let intervalObj = setTimeout(startBooking.bind(null, pairDOM), waitTime); // Initiating Start Booking at Booking Time
      updatePigeonPairStatus(pairDOM, 'wait-booking', null, intervalObj);
    }
  } else if (getPairJourneyQuota(pairDOM) === "GN") {
    updatePigeonStatus(pairDOM, "Waiting for Booking Window to Open...");
    let advanceBookingDate = new Date();
    advanceBookingDate.setDate(advanceBookingDate.getDate() + advancedReservationPeriod);
    advanceBookingDate.setHours(0);
    advanceBookingDate.setMinutes(0);
    advanceBookingDate.setSeconds(0);
    advanceBookingDate.setMilliseconds(0);

    let l = ticketData.journey.date.split('-');
    let dateOfJourney = new Date(l[0], parseInt(l[1])-1, l[2]);
    if (dateOfJourney.getTime() < advanceBookingDate.getTime()) {
      startBooking(pairDOM); // Start Booking
    }
    else{
      let now = new Date();
      let waitTime = classBookingTime["GN"].getTime() - now.getTime() + pigeonPairs[pairId].beforeAvailablilityWindowTime;
      if (waitTime < 0) {
        startBooking(pairDOM); // Start Booking
      } else {
        let intervalObj = setTimeout(startBooking.bind(null, pairDOM), waitTime); // Initiating Start Booking at Booking Time
        updatePigeonPairStatus(pairDOM, 'wait-booking', null, intervalObj);
      };
    };
  };
};
// ------------------------------Handling Initiate Booking ends here------------------------------

// ------------------------------Handling Start Booking starts here------------------------------
async function startBooking(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  let availableResponse = await getAvailablility(pairDOM);
  if (availableResponse.available) {
    checkBoarding(pairDOM); // Initiating Check Boarding
  } else {
    if (availableResponse.retry) {
      if (pigeonPairs[pairId].hittingAvailibilityCount === 1) {
        updatePigeonStatus(pairDOM, 'Waiting for ## Remove...');
        let waitTime;
        let now = new Date();
        if (getPairJourneyQuota(pairDOM) === "GN") {
          waitTime = classBookingTime["GN"].getTime() - now.getTime() + -1*randomIntFromInterval(advancedReservationPeriodBookingTime.min, advancedReservationPeriodBookingTime.max);
        }
        else {
          waitTime = classBookingTime[ticketData.journey.class].getTime() - now.getTime() + pigeonPairs[pairId].beforeBookingWindowTime;
        };
        let intervalObj = setTimeout(startBooking.bind(null, pairDOM), waitTime); // Reccursion
        updatePigeonPairStatus(pairDOM, 'wait-booking-availablility', null, intervalObj);
      }
      else{
        //Recursion paused due to network overload on irctc blocking
        // let intervalObj = setTimeout(startBooking.bind(null, pairDOM), reccursionWaitTime); // Reccursion
        // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
      };
    };
  };
};
// ------------------------------Handling Start Booking ends here------------------------------

// ------------------------------Handling IRCTC Availablility Check starts here------------------------------
// Get Availablility
function getAvailablility(pairDOM) {
  return new Promise(async function (resolve, reject) {
    let pairId = getPigeonPairId(pairDOM);
    let resolveResponse = { available: false, retry: true };
    let authReq = true;
    if (pigeonPairs[pairId].hittingAvailibilityCount === 0) {
      updatePigeonStatus(pairDOM, "Getting Availablility..."); // Updating Status Msg
    } else {
      updatePigeonStatus(pairDOM, `Count(${pigeonPairs[pairId].hittingAvailibilityCount}) Getting Availablility...`); // Updating Status Msg
    }
    pigeonPairs[pairId].hittingAvailibilityCount++;

    // Preparing JSON for Get Availablility Request
    let data = {
      paymentFlag: "N",
      concessionBooking: false,
      ftBooking: false,
      loyaltyRedemptionBooking: false,
      moreThanOneDay: true,
      isLogedinReq: pigeonPairs[pairId].irctcLoginSession.loggedIn,
      ticketType: "E",
      quotaCode: getPairJourneyQuota(pairDOM),
      trainNumber: ticketData.journey.train,
      fromStnCode: ticketData.journey.from,
      toStnCode: ticketData.journey.to,
      journeyDate: ticketData.journey.date.replaceAll("-", ""),
      classCode: ticketData.journey.class,
    };

    let totalFare;
    let availablityStatus;
    let reasonType;

    let response;
    irctcApis.availablilityCheck.url = `https://www.irctc.co.in/eticketing/protected/mapps1/avlFarenquiry/${ticketData.journey.train}/${ticketData.journey.date.replaceAll("-", "")}/${ticketData.journey.from}/${ticketData.journey.to}/${ticketData.journey.class}/${getPairJourneyQuota(pairDOM)}/N`;
    try {
      // Get Availablility IRCTC API
      response = await xhrRequest(pairDOM, 'availablility', irctcApis.availablilityCheck.method, irctcApis.availablilityCheck.url, JSON.stringify(data),
        irctcApis.availablilityCheck.referer, "JSON", irctcApis.availablilityCheck.csrf, authReq);
      
      pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
      response = JSON.parse(response.response); // Parsing JSON
      totalFare = response.totalFare;
      availablityStatus = response.avlDayList[0].availablityStatus;
      reasonType = response.avlDayList[0].reasonType;
    } catch (error) {
      resolve(resolveResponse);
      return;
    }

    if (totalFare) {
      pairDOM.querySelector(".availibility-data").classList.remove('d-none');
      pairDOM.querySelector(".availibility-data .seats").innerText = availablityStatus;
      
      
      if (availablityStatus === "NOT AVAILABLE") {
        pairDOM.querySelector(".availibility-data .fare").innerText = 0;
      }
      else{ 
        pairDOM.querySelector(".availibility-data .fare").innerText = parseFloat(totalFare) + 23.6;
      };
      if (reasonType === "W" && availablityStatus === "NOT AVAILABLE") {
        updatePigeonStatus(pairDOM, "No Seats Available."); // Updating Status Msg
        resolveResponse.retry = false;
        resolve(resolveResponse);
      }
    } else if (response.errorMessage) {
      updatePigeonStatus(pairDOM, response.errorMessage);
      enableNewBooking(pairDOM);
      resolveResponse.retry = false;
      resolve(resolveResponse);
    } else if (response.error) {
      updatePigeonStatus(pairDOM, response.error);
      enableNewBooking(pairDOM);
      resolveResponse.retry = false;
      resolve(resolveResponse);
    }  else {
      updatePigeonStatus(pairDOM, "Unable to fetch Availibility.");
      resolveResponse.retry = false;
      resolve(resolveResponse);
      return;
    };
    resolveResponse.available = reasonType === "S" && availablityStatus !== "NOT AVAILABLE";
    resolve(resolveResponse); // Returns Train Availibility Obj
  });
};
// ------------------------------Handling IRCTC Availablility Check ends here------------------------------

// ------------------------------Handling IRCTC Check Boarding starts here------------------------------
// Check Boarding
async function checkBoarding(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  // Preparing JSON for Check Boarding Request
  let data = {
    clusterFlag: "N",
    onwardFlag: "N",
    cod: "false",
    reservationMode: "WS_TA_B2C",
    autoUpgradationSelected: false,
    gnToCkOpted: false,
    paymentType: 1,
    twoPhaseAuthRequired: false,
    captureAddress: 0,
    alternateAvlInputDTO: [
      {
        trainNo: ticketData.journey.train,
        destStn: ticketData.journey.to,
        srcStn: ticketData.journey.from,
        jrnyDate: ticketData.journey.date.replaceAll("-", ""),
        quotaCode: getPairJourneyQuota(pairDOM),
        jrnyClass: ticketData.journey.class,
        concessionPassengers: false,
      },
    ],
    passBooking: false,
    journalistBooking: false,
  };
  updatePigeonStatus(pairDOM, "Checking Boarding..."); // Updating Status Msg

  let response;
  try {
    // Checking Boarding IRCTC API
    response = await xhrRequest(pairDOM, 'check-boarding', irctcApis.boardingStationEnq.method, irctcApis.boardingStationEnq.url, JSON.stringify(data),
      irctcApis.boardingStationEnq.referer, "JSON", true, true);
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Parsing JSON
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(checkBoarding.bind(null, pairDOM), reccursionWaitTime);  // Recurrsion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  if (response.boardingStationList) {
    if (settingsData.spdOnePair) {
      if (spdOnePair) {
        updatePigeonStatus(pairDOM, "Another Pair Submitted Passengers Data.");
        return;
      }
      else{
        submitPassengerDataPigeonStatusTimer(pairDOM); // Setting Submit Passengers Data Timer to Status Msg
        setTimeout(createBooking.bind(null, pairDOM), submitPassengersDataWaitTime[getPairJourneyQuota(pairDOM)] * 1000); // Initiating Create Booking
        awakeAutofillCaptchaApi();
        spdOnePair = true;
      };
    }
    else{
      submitPassengerDataPigeonStatusTimer(pairDOM); // Setting Submit Passengers Data Timer to Status Msg
      setTimeout(createBooking.bind(null, pairDOM), submitPassengersDataWaitTime[getPairJourneyQuota(pairDOM)] * 1000); // Initiating Create Booking
      awakeAutofillCaptchaApi();
    };
  } else if (response.errorMessage === "Booking not allowed. Please try again.") {
    if (settingsData.bnaAutologin) {
      updatePigeonStatus(pairDOM, "Booking not Allowed. Retrying Login...");
      setTimeout(loadLoginCaptcha.bind(null, pairDOM), bnaRetryWaitTime); // Recurrsion
      return;
    } else {
      updatePigeonStatus(pairDOM, "Booking not Allowed. Retry Login!");
      enableNewBooking(pairDOM);
    };
  } else if (response.error) {
    updatePigeonStatus(pairDOM, response.error);
    enableNewBooking(pairDOM);
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(checkBoarding.bind(null, pairDOM), reccursionWaitTime); // Recurrsion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };
};
// ------------------------------Handling IRCTC Check Boarding ends here------------------------------

// ------------------------------Handling IRCTC Create Booking starts here------------------------------
// Generate Passenger List for Create Booking API
function generatePassengerList() {
  let passengers = [];
  let passengerSerialNo = 1;
  ticketData.passengers.forEach((passenger) => {
    passengers.push({
      passengerName: passenger.name,
      passengerAge: parseInt(passenger.age),
      passengerGender: passenger.sex,
      passengerBerthChoice: passenger.preference,
      passengerFoodChoice: null,
      passengerBedrollChoice: null,
      passengerNationality: "IN",
      passengerCardTypeMaster: null,
      passengerCardNumberMaster: null,
      psgnConcType: null,
      psgnConcCardId: null,
      psgnConcDOB: null,
      psgnConcCardExpiryDate: null,
      psgnConcDOBP: null,
      softMemberId: null,
      softMemberFlag: null,
      psgnConcCardExpiryDateP: null,
      passengerVerified: false,
      masterPsgnId: null,
      mpMemberFlag: null,
      passengerForceNumber: null,
      passConcessionType: "0",
      passUPN: null,
      passBookingCode: null,
      passengerSerialNumber: passengerSerialNo,
      childBerthFlag: true,
      passengerCardType: "NULL_IDCARD",
      passengerIcardFlag: false,
      passengerCardNumber: null,
    });
    passengerSerialNo++;
  });
  return passengers;
}

// Generate and Save Client Transaction Id (Sent to IRCTC via Create Booking)
// This Transaction Id will be used to Handle this Booking
function generateAndSaveClientTxnId(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  let clientTxnId = new Date().getTime().toString(36);
  pigeonPairs[pairId].clientTxnId = clientTxnId;
  irctcApis.reloadBookingCaptcha.url = `https://www.irctc.co.in/eticketing/protected/mapps1/captchaganetate/${clientTxnId}/BOOKINGWS?nlpCaptchaException=true`;
  return clientTxnId;
};

// Create Booking and Booking Captcha
async function createBooking(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  let loginData = getPairLoginData(pairDOM);

  let paymentType = "2";
  if (["MOBIKWIK WALLET BYPASS", "AMAZONPAY WALLET BYPASS"].includes(getPairPaymentOption(pairDOM).paymentMethod)) {
    paymentType = "3";
  };

  // Preparing JSON for Create Booking Request
  let data = {
    clusterFlag: "N",
    onwardFlag: "N",
    cod: "false",
    reservationMode: "WS_TA_B2C", //*
    autoUpgradationSelected: ticketData.preferences.autoUpgrade,
    gnToCkOpted: false,
    paymentType: paymentType,
    twoPhaseAuthRequired: false,
    captureAddress: 0,
    wsUserLogin: loginData.username,
    moreThanOneDay: false,
    clientTransactionId: generateAndSaveClientTxnId(pairDOM),
    boardingStation: ticketData.journey.from,
    reservationUptoStation: ticketData.journey.to,
    mobileNumber: ticketData.contact.mobile,
    ticketType: "E",
    mainJourneyTxnId: null,
    mainJourneyPnr: "",
    captcha: "",
    generalistChildConfirm: false,
    ftBooking: false,
    loyaltyRedemptionBooking: false,
    nosbBooking: false,
    warrentType: 0,
    ftTnCAgree: false,
    bookingChoice: 1,
    bookingConfirmChoice: 1,
    bookOnlyIfCnf: ticketData.preferences.confirmBerth,
    returnJourney: false,
    connectingJourney: false,
    lapAvlRequestDTO: [
      {
        trainNo: ticketData.journey.train,
        journeyDate: ticketData.journey.date.replaceAll("-", ""),
        fromStation: ticketData.journey.from,
        toStation: ticketData.journey.to,
        journeyClass: ticketData.journey.class,
        quota: getPairJourneyQuota(pairDOM),
        coachId: null,
        reservationChoice: 4,
        ignoreChoiceIfWl: false,
        travelInsuranceOpted: JSON.stringify(ticketData.preferences.insurance),
        warrentType: 0,
        coachPreferred: false,
        autoUpgradation: false,
        bookOnlyIfCnf: ticketData.preferences.confirmBerth,
        addMealInput: null,
        concessionBooking: false,
        passengerList: generatePassengerList(),
        ssQuotaSplitCoach: "N"
      },
    ],
    gstDetails: {
      gstIn: "",
      error: null
    }
  };
  updatePigeonStatus(pairDOM, "Submitting Passenger data..."); // Updating Status Msg

  let response;
  try {
    // Create Booking IRCTC API
    response = await xhrRequest(pairDOM, 'create-booking', irctcApis.createBookingAndBookingCaptcha.method, irctcApis.createBookingAndBookingCaptcha.url,
      JSON.stringify(data), irctcApis.createBookingAndBookingCaptcha.referer, "JSON", irctcApis.createBookingAndBookingCaptcha.csrf,
      irctcApis.createBookingAndBookingCaptcha.authReq);
    
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Parsing JSON
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(createBooking.bind(null, pairDOM), reccursionWaitTime);  // Recurrsion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
    return;
  };

  if (response.totalCollectibleAmount !== "0.0") {
    // Handling After Creating Booking
    pigeonPairs[pairId].passengersSubmitTime = new Date().toLocaleTimeString();
    console.log("Passengers Sumbit Time : ", pigeonPairs[pairId].passengersSubmitTime);
    let captchaObj = response.captchaDto; // Booking Captcha
    pigeonPairs[pairId].totalCollectibleAmount = response.totalCollectibleAmount;
    pairDOM.querySelector(".availibility-data .fare").innerText = parseFloat(pigeonPairs[pairId].totalCollectibleAmount);
    handleBookingCaptcha(pairDOM, false, captchaObj.captchaQuestion); // Handling Booking Captcha
  } else if (response.errorMessage === "Booking not allowed. Please try again.") {
    // Handling Create Booking Error
    if (settingsData.bnaAutologin) {
      updatePigeonStatus(pairDOM, "Booking not Allowed. Retrying Login...");
      setTimeout(loadLoginCaptcha.bind(null, pairDOM), bnaRetryWaitTime); // Recurrsion
      return;
    } else {
      updatePigeonStatus(pairDOM, "Booking not Allowed. Retry Login!");
      enableNewBooking(pairDOM);
    };
  } else if (response.error === "invalid_token") {
    updatePigeonStatus(pairDOM, "Login Failed."); // Updating Status Msg
    enableNewBooking(pairDOM);
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else if (response.error) {
    updatePigeonStatus(pairDOM, response.error);
    enableNewBooking(pairDOM);
  }
  else {
    //Recursion paused due to network overload on irctc blocking
    // let intervalObj = setTimeout(createBooking.bind(null, pairDOM), reccursionWaitTime); // Recurrsion
    // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
  };
};
// ------------------------------Handling IRCTC Create Booking ends here------------------------------

// ------------------------------Handling IRCTC Booking Captcha starts here------------------------------
async function handleBookingCaptcha(pairDOM, reload = false, captchaQuestion = null) {
  let pairId = getPigeonPairId(pairDOM);
  pigeonCaptchaDOM(pairDOM, false); // Pigeon Captcha DOM disabled
  let response;
  if (reload) {
    updatePigeonStatus(pairDOM, "Reloading Booking Captcha..."); // Updating Status Msg

    try {
      // Reloading Booking Captcha IRCTC API
      response = await xhrRequest(pairDOM, 'booking-captcha', irctcApis.reloadBookingCaptcha.method, irctcApis.reloadBookingCaptcha.url, null,
        irctcApis.reloadBookingCaptcha.referer, null, irctcApis.reloadBookingCaptcha.csrf,irctcApis.reloadBookingCaptcha.authReq);
      
      pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
      response = JSON.parse(response.response); // Parsing JSON
    } catch (error) {
      //Recursion paused due to network overload on irctc blocking
      // let intervalObj =setTimeout(handleBookingCaptcha.bind(null, true), reccursionWaitTime); // Reccursion
      //  updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
      return;
    };

    if (response.captchaQuestion) {
      captchaQuestion = response.captchaQuestion; // Setting captchaQuestion
    } else if (response.errorMessage) {
      updatePigeonStatus(pairDOM, response.errorMessage);
    } else {
      //Recursion paused due to network overload on irctc blocking
      // let intervalObj = setTimeout(handleBookingCaptcha.bind(null, true), reccursionWaitTime); // Reccursion
      // updatePigeonPairStatus(pairDOM, 'process-reccursion', null, intervalObj);
      return;
    };
  };
  // Handling Autofill Enable/Disable
  pigeonCaptchaType = "Booking"; // Setting Pigeon Captcha Type
  if (settingsData.autofillBookingCaptcha) {
    // Handling Autofill Captcha
    pigeonCaptchaDOM(pairDOM, true, false, captchaQuestion);
    autofillCaptcha(pairDOM, captchaQuestion);
  } else {
    // Handling Manual Captcha
    pigeonCaptchaDOM(pairDOM, true, true, captchaQuestion);
  }
}

// Reload Booking Captcha
function reloadBookingCaptcha(pairDOM) {
  handleBookingCaptcha(pairDOM, true, null);
}

// Verify Booking Captcha
async function verifyBookingCaptcha(pairDOM, captcha) {
  let pairId = getPigeonPairId(pairDOM);
  // Setting Verify Booking Captcha URL
  updatePigeonStatus(pairDOM, "Verfying Booking Captcha..."); // Updating Status Msg
  let requestJson = {
    "captchaAns": captcha,
    "captchaType": "BOOKINGWS",
    "clientTxnId": pigeonPairs[pairId].clientTxnId,
    "paymentType": 2,
    "addonLapServices": [
        {
            "travelInsuranceOpted": true
        }
    ]
}

  let response;
  try {
    // Verify Booking Captcha IRCTC API
    response = await xhrRequest(pairDOM, 'verify-booking-captcha', irctcApis.verifyBookingCaptcha.method, irctcApis.verifyBookingCaptcha.url, JSON.stringify(requestJson),
      irctcApis.verifyBookingCaptcha.referer, "JSON", irctcApis.verifyBookingCaptcha.csrf, irctcApis.verifyBookingCaptcha.authReq);
    
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Parsing JSON
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // setTimeout(verifyBookingCaptcha.bind(null, captcha), reccursionWaitTime); // Recurrsion
    return;
  };

  if (response.totalCollectibleAmount) {
    // Handling Verify Booking Captcha Success
    updatePigeonStatus(pairDOM, "Now to Initiate Payment..."); // Updating Status Msg
    initiatePayment(pairDOM); // Initiate Payment
  } else if (response.status === "FAIL") {
    if (response.error === "Invalid Captcha") {
      handleBookingCaptcha(pairDOM, false, response.captchaQuestion); // Handling Failed Booking Captcha
    } else if (response.error === "No seats available") {
      updatePigeonStatus(pairDOM, "No Seats Available."); // Updating Status Msg
    };
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else if (response.error) {
    updatePigeonStatus(pairDOM, response.error);
    enableNewBooking(pairDOM);
  } else {
    //Recursion paused due to network overload on irctc blocking
    // setTimeout(verifyBookingCaptcha.bind(null, pairDOM, captcha), reccursionWaitTime); // Recurrsion
    return;
  };
};
// ------------------------------Handling IRCTC Booking Captcha ends here------------------------------

// ------------------------------Handling IRCTC Initiate Payment starts here------------------------------
// Initiating Payment
async function initiatePayment(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  // Setting Verify Booking Captcha URL
  irctcApis.initiatePayment.url = `https://www.irctc.co.in/eticketing/protected/mapps1/bookingInitPayment/${pigeonPairs[pairId].clientTxnId}?insurenceApplicable=`;

  // Preparing Initiate Payment Data
  let data = {
    bankId: paymentMethodData[getPairPaymentOption(pairDOM).paymentMethod].bankId,
    txnType: 1,
    paramList: [],
    amount: pigeonPairs[pairId].totalCollectibleAmount,
    transationId: 0,
    txnStatus: 1
  };
  updatePigeonStatus(pairDOM, "Initiating Payment..."); // Updating Status Msg
  pairDOM.querySelector(".pay-toggle-btn").disabled = true;

  let response;
  try {
    // Initiate Payment IRCTC API
    console.log(pigeonPairs[pairId].clientTxnId);
    console.log(irctcApis.initiatePayment.url);
    response = await xhrRequest(pairDOM, 'initite-payment', irctcApis.initiatePayment.method, irctcApis.initiatePayment.url,JSON.stringify(data),
      irctcApis.initiatePayment.referer, "JSON", irctcApis.initiatePayment.csrf, irctcApis.initiatePayment.authReq);
    
    pigeonPairs[pairId].csrfToken = response.headers["csrf-token"]; // Updating csrfToken
    response = JSON.parse(response.response); // Parsing JSON
  } catch (error) {
    //Recursion paused due to network overload on irctc blocking
    // setTimeout(initiatePayment.bind(null, pairDOM), reccursionWaitTime);  // Recurrsion
    return;
  };

  if (!response.errorMessage && !response.errorMsg) {
    redirectPayment(pairDOM); // Redirecting Payment
  } else if (response.errorMessage) {
    updatePigeonStatus(pairDOM, response.errorMessage);
    enableNewBooking(pairDOM);
  } else if (response.errorMsg) {
    updatePigeonStatus(pairDOM, response.errorMsg);
    enableNewBooking(pairDOM);
  } else if (response.error) {
    enableNewBooking(pairDOM);
    if (response.error === "invalid_token") {
      updatePigeonStatus(pairDOM, "Login Failed.");
      enableNewBooking(pairDOM);
    }
    else{
      updatePigeonStatus(pairDOM, response.error);
      enableNewBooking(pairDOM);
    };
  } else {
    //Recursion paused due to network overload on irctc blocking
    // setTimeout(initiatePayment.bind(null, pairDOM), reccursionWaitTime); // Reccursion
    return;
  };
};
// ------------------------------Handling IRCTC Initiate Payment ends here------------------------------

// ------------------------------Handling Redirect Payment starts here------------------------------
// Generate Form Data
function generateFormData(Obj) {
  let formData = new FormData();
  for (const key in Obj) {
    const value = Obj[key];
    formData.append(key, value);
  }
  return formData;
}

// IRCTC Payment Redirect Step 1
async function redirectPayment(pairDOM) {
  let pairId = getPigeonPairId(pairDOM);
  let loginData = getPairLoginData(pairDOM);
  // Preparing Redirect Payment Data
  let data = {
    token: pigeonPairs[pairId].irctcLoginSession.access_token,
    txn: `${loginData.username}:${pigeonPairs[pairId].clientTxnId}`
  };
  data[`${loginData.username}:${pigeonPairs[pairId].clientTxnId}`] = `${(new Date).getTime() / (1e5 * Math.random())}${pigeonPairs[pairId].csrfToken}${(new Date).getTime() / (1e6 * Math.random())}`;
  updatePigeonStatus(pairDOM, "Redirecting Payment..."); // Updating Status Msg
  let ticketSession = {
    pairId:pairId,
    loginData:loginData,
    ticketName:ticketName,
    ticketData:ticketData,
    clientTxnId:pigeonPairs[pairId].clientTxnId,
    pigeonGreq:pigeonPairs[pairId].pigeonGreq,
    irctcLoginSession:pigeonPairs[pairId].irctcLoginSession,
    passengersSubmitTime:pigeonPairs[pairId].passengersSubmitTime
  };
  sendRuntimeMsg("fetchRequest", {
    pairId:pairId,
    "ticketSession":ticketSession,
    requestId: "irctcRedirectPayment",
    url:"https://www.wps.irctc.co.in/eticketing/PaymentRedirect",
    method:"POST",
    msg_type:"FORM",
    msg:data,
    headers:{
      Origin: "https://www.irctc.co.in",
      Referer: "https://www.irctc.co.in/"
    }
  });
};

// Handle Redirect Payment Response
function handleRedirectPaymentResponse(pairId, response) {
  let pairDOM = getPigeonPairDOM(pairId);
  if (pigeonPairs[pairId].pigeonPay) {
    if (onePairProceededPayment) {
      updatePigeonStatus(pairDOM, "Another Pair Proceeded Payment.");
      return;
    };
    onePairProceededPayment = true;
    let DOMparser = new DOMParser();
    let responseDOM = DOMparser.parseFromString(response, "text/html");
    let domForm = responseDOM.querySelector("form");
    handlePaymentMethod(getPigeonPairDOM(pairId), domForm);
  } else {
  updatePigeonStatus(pairDOM, "Please Approve for Payment."); // Updating Status Msg
  pairDOM.querySelector(".pigeon-make-payment").style.display = "flex";
  };
}
// ------------------------------Handling Redirect Payment ends here------------------------------

// ------------------------------Handling Bank Payment starts here------------------------------

let bankRediectPaymentApi = {
  "PAYU UPI": {
    url: "https://www.irctcipay.com/pgui/jsp/irctcRequestAction"
  },
  "PAYTM QR": {
    url: "https://securegw.paytm.in/theia/processTransaction?orderid=YOUR-ORDER-ID"
  },
  "RAZORPAY UPI": {
    url: "https://checkout.razorpay.com/orders/order_OHZIzgOkqfpJFr?x_ranid=OHZIze2D5ePnYz"
  },
  "PHONEPE QR": {
    url: "https://mercury-t2.phonepe.com/transact/v2?token=YOUR-TOKEN"
  },
  "RAZORPAY QR": {
    url: "https://checkout.razorpay.com/orders/order_OHZIzgOkqfpJFr?x_ranid=OHZIze2D5ePnYz"
  }
};

// Handling Payment Method
function handlePaymentMethod(pairDOM, domForm) {
  console.log("Payment Method : ", getPairPaymentOption(pairDOM).paymentMethod);
  pairDOM.querySelector('.status-msg').classList.add('focus'); // Adding focus to Status Msg
  // document.querySelector(".stop-booking-btn").disabled = true;
  document.body.appendChild(domForm);
  switch (getPairPaymentOption(pairDOM).paymentMethod) {
    case "IPAY UPI":
      updatePigeonStatus(pairDOM, "Redirecting for IPAY UPI..."); // Updating Status Msg
      break;

    case "PHONEPE QR":
      updatePigeonStatus(pairDOM, "Redirecting for PhonePe QR..."); // Updating Status Msg
      break;

    case "PAYTM QR":
      updatePigeonStatus(pairDOM, "Redirecting for Paytm QR..."); // Updating Status Msg
      break;

    case "PAYTM UPI":
      updatePigeonStatus(pairDOM, "Redirecting for Paytm UPI..."); // Updating Status Msg
      break;

    case "RAZORPAY UPI":
      updatePigeonStatus(pairDOM, "Redirecting for RazorPay UPI..."); // Updating Status Msg
      break;

    case "RAZORPAY QR":
      updatePigeonStatus(pairDOM, "Redirecting for RazorPay QR..."); // Updating Status Msg
      break;

    case "PAYU UPI":
      updatePigeonStatus(pairDOM, "Redirecting for PAYU QR..."); // Updating Status Msg
      break;

    default:
      break;
  };
  sendRuntimeMsg("bankPayments", {
    paymentData:getPairPaymentOption(pairDOM)
  });
  domForm.submit();
};
// ------------------------------Handling Bank Payment ends here------------------------------

// ------------------------------Handling Pigeon Tab Pair's starts here------------------------------
document.querySelectorAll('.pair-tab-btn').forEach(element => {
  element.addEventListener('click', createPigeonPair);
});
function createPigeonPair() {
  let pigeonPairsActiveDOM = document.querySelectorAll('.pigeon-pair[data-active="true"]');
  if (pigeonPairsActiveDOM.length === 18) {
    alert('Maximum 18 Pairs Allowed by Pigeon.');
    }
    else{
    let pigeonPairsDOM = document.querySelectorAll('.pigeon-pair');
    pigeonPairsDOM[pigeonPairsActiveDOM.length].classList.remove('d-none');
    pigeonPairsDOM[pigeonPairsActiveDOM.length].setAttribute('data-active', 'true');
    showPigeonDataOnPair(pigeonPairsActiveDOM.length+1);
  };
  console.log('Create pigeon Pair Called...');
};
// ------------------------------Handling Pigeon Tab Pair's ends here------------------------------

// window.addEventListener('beforeunload', function (e) {
//   chrome.runtime.onMessage.removeListener()
// });

awakeAutofillCaptchaApi();

function serverSyncTime() {
  targetElement = document.querySelector("body > app-root > app-home > div.header-fix > app-header > div.col-sm-12.h_container > div.text-center.h_main_div > div.row.col-sm-12.h_head1 > span > strong");
  // Initialize a variable to store the last known content
  let lastContent = targetElement.innerText;
  let lastTime = new Date();
  
  // Function to check if the content has changed
  function checkForChanges() {
      const currentContent = targetElement.innerText;
      const currentTime = new Date();
      if (currentContent !== lastContent) {
          let a = currentContent.split('[')[1].split(']')[0].split(':');
          currentTime.setHours(a[0]);
          currentTime.setMinutes(a[1]);
          currentTime.setSeconds(a[2]);
          currentTime.setMilliseconds(0);
          let y = currentTime.getTime() - lastTime.getTime();
          if (y > 2000) {
            serverSyncTimeDelay = y;
            afterServerTimeSync();
            console.log('IRCTC Clock Ahead by :', y/1000,'sec');
            clearInterval(z);
          }
          lastTime = currentTime;
          lastContent = currentContent; // Update the last known content
      };
  };
  
  // Set an interval to check for changes every 500 milliseconds
  const z = setInterval(checkForChanges, 10);
};

var bookingWaitTimeList = [];
function generateRandomBookingWaitTime() {
  while (true) {
    let waitTime;
    let found = false;
    while (!found) {
      waitTime = randomIntFromInterval(5000, 10000); // 5.5-10 seconds before
      if (bookingWaitTimeList.length === 0) {
        found = true;
      }
      else{
        found = true;
        bookingWaitTimeList.forEach(element => {
          if (Math.abs(element - waitTime) <= 200) {
            found = false;
          };
        });
      };
    };
    if (found) {
      bookingWaitTimeList.push(waitTime);
      return waitTime;
    };
  };
};

i = 1;
while (i <= 18) {
  pigeonPairs[i].beforeBookingWindowTime = (-1*generateRandomBookingWaitTime());
  console.log('Pair',i,'Booking Time is',pigeonPairs[i].beforeBookingWindowTime);
  i++;
};
console.log('Booking Wait Times : ', bookingWaitTimeList.sort(function(a, b){return a-b}));
console.log('Pigeon Pairs : ',pigeonPairs);

function afterServerTimeSync() {
  document.querySelector('.pigeon-top-header .irctc-ahead-time').classList.remove('d-none');
  document.querySelector('.pigeon-top-header .irctc-ahead-time').innerText = `${serverSyncTimeDelay/1000} sec`;
  document.querySelector('.pigeon-top-header svg').classList.add('d-none');
};
try {
  serverSyncTime();
} catch (error) {};

//Make the DIV element draggagle:
dragElement(document.querySelector("#pigeon-popup-1"));
dragElement(document.querySelector("#pigeon-popup-2"));
dragElement(document.querySelector("#pigeon-popup-3"));
dragElement(document.querySelector("#pigeon-popup-4"));
dragElement(document.querySelector("#pigeon-popup-5"));
dragElement(document.querySelector("#pigeon-popup-6"));
dragElement(document.querySelector("#pigeon-popup-7"));
dragElement(document.querySelector("#pigeon-popup-8"));
dragElement(document.querySelector("#pigeon-popup-9"));
dragElement(document.querySelector("#pigeon-popup-10"));
dragElement(document.querySelector("#pigeon-popup-11"));
dragElement(document.querySelector("#pigeon-popup-12"));
dragElement(document.querySelector("#pigeon-popup-13"));
dragElement(document.querySelector("#pigeon-popup-14"));
dragElement(document.querySelector("#pigeon-popup-15"));
dragElement(document.querySelector("#pigeon-popup-16"));
dragElement(document.querySelector("#pigeon-popup-17"));
dragElement(document.querySelector("#pigeon-popup-18"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(`#${elmnt.id} .head-control`)) {
    /* if present, the header is where you move the DIV from:*/
    document.querySelector(`#${elmnt.id} .head-control`).onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

var checkProxyAuthCount = 1;
var checkProxyAuthCountMax = 6;
async function checkProxyAuth() {
  if (settingsData.proxySettings[checkProxyAuthCount].enable) {
    proxyData = settingsData.proxySettings[checkProxyAuthCount];
    await chrome.runtime.sendMessage({
      msg: {
        type: 'setProxy',
        data: proxyData
      },
      sender: 'irctc_script',
      id: "pigeon"
    }, ()=>{});
    await delay(500);
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(irctcApis.testApi.method, irctcApis.testApi.url);
      xhr.onload = async function () {
        resolve(true);
        await chrome.runtime.sendMessage({
          msg: {
            type: 'setProxy',
            data: {enable:false}
          },
          sender: 'irctc_script',
          id: "pigeon"
        }, ()=>{});
      }
      xhr.onerror = function () {
        if (this.status === 0) {
          resolve(false);
        }
        else{
          resolve(true);
        };
      };
      xhr.send();
    });
  }
  else{
    return true;
  }
};

async function initiateCheckProxyAuth() {
  if (checkProxyAuthCount === 1) {
    toggleProxyAuth(true);
  };

  askforProxyAuth(true);
  let response = await checkProxyAuth();
  if (response) {
    if (checkProxyAuthCount < checkProxyAuthCountMax) {
      checkProxyAuthCount++;
      initiateCheckProxyAuth();
    }
    else{
      toggleProxyAuth(false);
    };
  }
  else{
    askforProxyAuth(false);
  };
};
function askforProxyAuth(buffer=false) {
  if (!buffer) {
    document.querySelector('.checking-proxy-auth-config-loader').classList.add('d-none');
    document.querySelector('.proxy-auth-config-status-cnt').classList.remove('d-none');
    document.querySelector('.proxy-auth-config-status-details').innerText = `Proxy #${checkProxyAuthCount} (${settingsData.proxySettings[checkProxyAuthCount].ip}:${settingsData.proxySettings[checkProxyAuthCount].port}:${settingsData.proxySettings[checkProxyAuthCount].username}:${settingsData.proxySettings[checkProxyAuthCount].password})`;
    document.querySelector('#proxy-auth-config-btn').setAttribute('data-ip', settingsData.proxySettings[checkProxyAuthCount].ip);
    document.querySelector('#proxy-auth-config-btn').setAttribute('data-port', settingsData.proxySettings[checkProxyAuthCount].port);
    document.querySelector('#proxy-auth-config-btn').setAttribute('data-username', settingsData.proxySettings[checkProxyAuthCount].username);
    document.querySelector('#proxy-auth-config-btn').setAttribute('data-password', settingsData.proxySettings[checkProxyAuthCount].password);
    document.querySelector('.proxy-auth-config-status-details').setAttribute('data-proxy', checkProxyAuthCount);
  }
  else{
    document.querySelector('.checking-proxy-auth-config-loader').classList.remove('d-none');
    document.querySelector('.proxy-auth-config-status-cnt').classList.add('d-none');
  };
};

function toggleProxyAuth(active=false) {
  let a = document.querySelector('.pigeon-proxy-auth-config-cnt');
  if (active) {
    a.classList.remove('d-none');
  }
  else{
    a.classList.add('d-none');
  };
};


document.querySelector('#proxy-auth-config-btn').addEventListener('click', function () {
  alert(`Please enter Username: ${this.getAttribute('data-username')}, Password: ${this.getAttribute('data-password')} for Host: ${this.getAttribute('data-ip')}:${this.getAttribute('data-port')} in Opening Tab after clicking ok, close opened www.google.com after entering Authentication Credentials!`);
  sendRuntimeMsg('openProxyAuthInput');
});

document.querySelector('#proxy-auth-proceed-btn').addEventListener('click', initiateCheckProxyAuth);