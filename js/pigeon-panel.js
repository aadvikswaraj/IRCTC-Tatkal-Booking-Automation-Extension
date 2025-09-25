chrome.runtime.connect();

// --------------------------- Configuring DOM and Basic Functions starts here --------------------------- 
// Switch Sections/Pages
function changeSection(e) {
  e.preventDefault();
  let page = e.srcElement.getAttribute("data-page");
  
  document.querySelectorAll(".navlinks a").forEach((element) => {
    element.classList.remove('active');
  });
  if (e.srcElement.getAttribute('data-dropdown') === 'false') {
    e.srcElement.classList.add('active');
  };
  if (e.srcElement.getAttribute('data-dropdown-link') === 'true') {
    e.srcElement.parentElement.parentElement.parentElement.querySelector('.link').classList.add('active');
  };

  if (page !== "data") {
    document.querySelectorAll("section").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelector(`section[data-page="${page}"]`).style.display = "flex";
    if (page === "settings") {
      changeSettings('main');
    };
  };
};

// all eventlisteners to all links of header
document.querySelectorAll('.navlinks a').forEach(element => {
  element.addEventListener('click', changeSection);
});

// save pigeon data on chome localstorage
function savePigeonData() {
  chrome.storage.local.set(pigeonData);
};
// --------------------------- Configuring DOM and Basic Functions ends here --------------------------- 

// --------------------------- Some Variables starts here --------------------------- 
var pigeonData = {
  ids: {},
  tickets:{},
  paymentOptions:{
    "PAYTM QR" : {
      paymentMethod:"PAYTM QR",
      active:true,
      default:true
      
    },
    "PHONEPE QR" : {
      paymentMethod:"PHONEPE QR",
      active:true,
      default:true
    }
  },
  settings: {
    bnaAutologin: true,
    autofillCaptcha: false,
    submitAutofillCaptcha: false,
    rapidapiCaptchaSolverApiKey: "",
    proxySettings:{
      1:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      },
      2:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      },
      3:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      },
      4:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      },
      5:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      },
      6:{
        enable: false,
        ip: "",
        port: "",
        username: "",
        password: ""
      }
    },
    ssSettings :{
      enable: false,
      beforeBoardingLimit: "",
      afterBoardingLimit: ""
    }
  }
};
// --------------------------- Some Variables ends here --------------------------- 

// --------------------------- Runtime Messaging starts here --------------------------- 
// Send Runtime Msg
function sendRuntimeMsg(msg_type, msg_body) {
  let senderName = "panel_script";
  chrome.runtime.sendMessage({
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
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log(message, sender, "bg_script received a msg");
  if (message.id !== "pigeon") {
    console.log(message);
    sendResponse({"success":true});
    return true;
  };
  const type = message.msg.type;
  const data = message.msg.data;
  if (type === "deactivatePanel") {
    document.querySelector('.tab-exists').classList.remove('d-none');
    document.title = "Pigeon Panel (Duplicate)";
    sendResponse({"success":true});
  }
  else if (type == "searchTrainBtwStnsResponse") {
    searchTrainBtwStnsResponse(data);
    sendResponse({"success":true});
  }
  else if (type == "trainAvailibilityResponse") {
    trainAvailibilityResponse(data);
    sendResponse({"success":true});
  }
  else{
    sendResponse({"success":true});
  };
  return true;  // uncomment this line to fix error
});
// --------------------------- Runtime Messaging ends here --------------------------- 

// --------------------------- Ticket Form starts here --------------------------- 
// Toggle display: none; in Ticket Form
function toggleTicketForm() {
  document.querySelector('.ticket-popup-cnt').classList.toggle('d-none');
};

// Handling add ticket btn event
document.querySelector('#add-ticket-btn').addEventListener('click', (e)=>{
  e.preventDefault();
  toggleTicketForm();
  showTicket(null, true);
});

// Handling close ticket popup btn event
document.querySelector('#close-ticket-popup-btn').addEventListener('click', (e)=>{
  e.preventDefault();
  toggleTicketForm();
});

// delete Ticket Btn Handler
function deleteTicket() {
  let ticketName = this.getAttribute('data-ticket-name');
  delete pigeonData.tickets[ticketName];
  showTickets();
  savePigeonData();
};

// edit Ticket Btn Handler
function editTicket() {
  let ticketName = this.getAttribute('data-ticket-name');
  toggleTicketForm();
  showTicket(ticketName);
};

// show Ticket in Popup
function showTicket(ticketName, clear=false) {
  let ticket;
  if (ticketName) {
    ticket = pigeonData.tickets[ticketName];
    document.querySelector('#ticket-name').disabled = true;
  } else{
    document.querySelector('#ticket-name').disabled = false;
  };
  // Journey details
  let journeyFrom = "";
  let journeyTo = "";
  let journeyDate = "";
  let journeyTrain = "";
  let journeyClass = "";
  let journeyQuota = "";
  let journeyTsd = "0";
  
  // Contact details
  let contactMobile = "";
  
  // Payment details
  let paymentOption = "";
  
  // Preference details
  let preferenceAutoUpgrade = false;
  let preferenceConfirmBerth = false;
  let preferenceInsurance = true;
  
  // Passengers details
  let passengers = [];
  
  if (!clear) {
    // Journey details
    journeyFrom = ticket.journey.from;
    journeyTo = ticket.journey.to;
    journeyDate = ticket.journey.date;
    journeyTrain = ticket.journey.train;
    journeyClass = ticket.journey.class;
    journeyQuota = ticket.journey.quota;
    journeyTsd = ticket.journey.tsd;
    
    // Contact details
    contactMobile = ticket.contact.mobile;
    
    // Payment details
    paymentOption = ticket.paymentOption;
    
    // Preference details
    preferenceAutoUpgrade = ticket.preferences.autoUpgrade;
    preferenceConfirmBerth = ticket.preferences.confirmBerth;
    preferenceInsurance = ticket.preferences.insurance;
    
    // Passengers details
    passengers = ticket.passengers;
  };
  
  // Journey details DOM
  document.querySelector("#journey-from").value = journeyFrom;
  document.querySelector("#journey-to").value = journeyTo;
  document.querySelector("#journey-date").value = journeyDate;
  document.querySelector("#journey-train").value = journeyTrain;
  document.querySelector("#journey-class").value = journeyClass;
  document.querySelector("#journey-quota").value = journeyQuota;
  document.querySelector("#journey-train-starting-date").value = journeyTsd;
  
  // Contact details DOM
  document.querySelector("#contact-mobile").value = contactMobile;
  
  let paymentOptionsList = Object.keys(pigeonData.paymentOptions);
  let paymentOptionDOM = document.querySelector("#payment-option");
  paymentOptionDOM.innerHTML = '';
  console.log(paymentOptionsList);
  paymentOptionsList.forEach(element => {
    let opt = document.createElement('option');
    opt.value = element;
    opt.innerText = element;
    paymentOptionDOM.appendChild(opt);
  });

  // Payment details DOM
  paymentOptionDOM.value = paymentOption;
  
  // Preferences DOM
  document.querySelector("#preference-auto-upgrade").checked = preferenceAutoUpgrade;
  document.querySelector("#preference-confirm-berth").checked = preferenceConfirmBerth;
  document.querySelector("#preference-insurance").checked = preferenceInsurance;
  
  if (!clear) {
    // Passengers details DOM
    let passengersDOM = document.querySelectorAll('.passenger-data');
    for (let i = 0; i < passengers.length; i++) {
      const passenger = passengers[i];
      const passengerDOM = passengersDOM[i];
      passengerDOM.querySelector('input[data-input="name"]').value = passenger.name;
      passengerDOM.querySelector('input[data-input="age"]').value = passenger.age;
      passengerDOM.querySelector('select[data-input="sex"]').value = passenger.sex;
      passengerDOM.querySelector('select[data-input="berth"]').value = passenger.berth;
      passengerDOM.querySelector('select[data-input="nationality"]').value = passenger.nationality;
      passengerDOM.querySelector('input[data-input="passport"]').value = passenger.passport;
    };
  }
  else{
    // Passengers details DOM
    let passengersDOM = document.querySelectorAll('.passenger-data');
    for (let i = 0; i < passengersDOM.length; i++) {
      const passengerDOM = passengersDOM[i];
      passengerDOM.querySelector('input[data-input="name"]').value = "";
      passengerDOM.querySelector('input[data-input="age"]').value = "";
      passengerDOM.querySelector('select[data-input="sex"]').value = "M";
      passengerDOM.querySelector('select[data-input="berth"]').value = "";
      passengerDOM.querySelector('select[data-input="nationality"]').value = "india";
      passengerDOM.querySelector('input[data-input="passport"]').value = "";
    };
  };
  
  // Ticket Name DOM
  document.querySelector("#ticket-name").value = ticketName;
};

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

// connect Irctc Ticket Btn Handler
async function connectIrctcTicket() {
  await chrome.runtime.connect();
  await delay(200);
  let ticketName = this.getAttribute('data-ticket-name');
  chrome.tabs.create({
    url: "https://www.irctc.co.in/nget/train-search"},
    (tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["js/data.js", "js/common.js", "js/crypto-js.js", "js/irctc_script.js"]
      });
      chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files:["css/common.css","css/irctc_script.css"]
      });
      sendRuntimeMsg('initiatePigeon', {
        pigeonTabId:tab.id,
        ticketName:ticketName
      });
  });
};
  
// show tickets in table
function showTickets() {
  let ticketsDOM = document.querySelector('section[data-page="tickets"] tbody');
  ticketsDOM.innerHTML = '';
  if (Object.keys(pigeonData.tickets).length === 0) {
    ticketsDOM.innerHTML = `<tr><td colspan="7" style="text-align: center;">No Tickets</td></tr>`;
    return;
  };
  for (const key in pigeonData.tickets) {
    const element = pigeonData.tickets[key];
    let tr = document.createElement('tr');
    tr.setAttribute('data-irctc-id', key);
    tr.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
    <button type="button" data-ticket-name="" data-action="connect" class="action-btn">Connect</button>
    <button type="button" data-ticket-name="" data-action="edit" class="action-btn">Edit</button>
    <button type="button" data-ticket-name="" data-action="delete" class="action-btn">Delete</button>
    </td>`;
    
    let tds = tr.querySelectorAll('td');
    tds[0].innerText = key;
    tds[1].innerText = `${element.journey.from} to ${element.journey.to}`;
    tds[2].innerText = element.journey.class;
    tds[3].innerText = element.journey.quota;
    tds[4].innerText = element.journey.train;
    tds[5].innerText = element.journey.date;
    
    let connectBtn = tr.querySelector('button[data-action="connect"]');
    connectBtn.setAttribute('data-ticket-name', key);
    connectBtn.addEventListener('click', connectIrctcTicket);
    
    let editBtn = tr.querySelector('button[data-action="edit"]');
    editBtn.setAttribute('data-ticket-name', key);
    editBtn.addEventListener('click', editTicket);
    
    let deleteBtn = tr.querySelector('button[data-action="delete"]');
    deleteBtn.setAttribute('data-ticket-name', key);
    deleteBtn.addEventListener('click', deleteTicket);
    ticketsDOM.appendChild(tr);
    
  };
};

// Ticket form Submit Handling
document.querySelector('.ticket-popup-body').addEventListener('submit', (e)=>{
  e.preventDefault();
  
  // Ticket Name DOM
  let ticketName = document.querySelector("#ticket-name").value;

  // Journey details DOM
  let journeyFrom = document.querySelector("#journey-from").value;
  let journeyTo = document.querySelector("#journey-to").value;
  let journeyDate = document.querySelector("#journey-date").value;
  let journeyTrain = document.querySelector("#journey-train").value;
  let journeyClass = document.querySelector("#journey-class").value;
  let journeyQuota = document.querySelector("#journey-quota").value;
  let journeyTsd = document.querySelector("#journey-train-starting-date").value;
  
  // Contact details DOM
  let contactMobile = document.querySelector("#contact-mobile").value;
  
  // Payment details DOM
  let paymentOption = document.querySelector("#payment-option").value;
  
  // Preferences DOM
  let preferenceAutoUpgrade = document.querySelector("#preference-auto-upgrade").checked;
  let preferenceConfirmBerth =  document.querySelector("#preference-confirm-berth").checked;
  let preferenceInsurance =  document.querySelector("#preference-insurance").checked;

  // Passengers details DOM
  let passengersDOM = document.querySelectorAll('.passenger-data');
  let passengers = [];
  for (let i = 0; i < passengersDOM.length; i++) {
    const passengerDOM = passengersDOM[i];
    // passenger
    let passengerName = passengerDOM.querySelector('input[data-input="name"]').value;
    let passengerAge = passengerDOM.querySelector('input[data-input="age"]').value;
    let passengerSex = passengerDOM.querySelector('select[data-input="sex"]').value;
    let passengerBerth = passengerDOM.querySelector('select[data-input="berth"]').value;
    let passengerNationality = passengerDOM.querySelector('select[data-input="nationality"]').value;
    let passengerPassport = passengerDOM.querySelector('input[data-input="passport"]').value;
    if (passengerName !== "" && passengerAge !== "" && (passengerNationality === "india" || passengerPassport !== "")) {
      passengers.push({
        name:passengerName,
        age:passengerAge,
        sex:passengerSex,
        berth:passengerBerth,
        nationality:passengerNationality,
        passport:passengerPassport
      });
    }
    else if (passengerName === "" || passengerAge === "" && (passengerNationality === "india" || passengerPassport !== "")) {

     };
  };

  if (passengers.length === 0) {
    alert("Please add Passengers details.");
    return;  
  };

  pigeonData.tickets[ticketName] = {
    journey: {
        from: journeyFrom,
        to: journeyTo,
        date: journeyDate,
        train: journeyTrain,
        class: journeyClass,
        quota: journeyQuota,
        tsd:journeyTsd
    },
    passengers: passengers,
    contact: {
      mobile: contactMobile
    },
    fareLimit:"",
    preferences: {
      autoUpgrade: preferenceAutoUpgrade,
      confirmBerth: preferenceConfirmBerth,
      insurance: preferenceInsurance
    },
    paymentOption: paymentOption
  };
  toggleTicketForm();
  showTickets();
  savePigeonData();
});
// --------------------------- Ticket Form ends here ---------------------------

// --------------------------- Train Search starts here ---------------------------
// Toggle display: none; in Train Search
function toggleTrainSearchPopup() {
  document.querySelector('.train-search-popup-cnt').classList.toggle('d-none');
};

// Handling close Train Search btn event
document.querySelector('#close-train-search-popup-btn').addEventListener('click', (e)=>{
  e.preventDefault();
  toggleTrainSearchPopup();
});

document.querySelector('.train-search-action-cnt').addEventListener('submit', async (e)=>{
  e.preventDefault();
  document.querySelector('.train-search-fare-cnt').classList.add('d-none');
  document.querySelector('.train-search-availibility-cnt svg').classList.add('d-none');
  document.querySelector('#train-search-availibility-btn').classList.add('d-none');
  let journeyFrom = document.querySelector('#train-search-from').value;
  let journeyTo = document.querySelector('#train-search-to').value;
  let journeyDate = document.querySelector('#train-search-date').value.split('-').reverse().join('-');
  document.querySelector('.train-search-data tbody').innerHTML = `<tr><td colspan="18" style="text-align: center;">Loading Trains...</td></tr>`;
  let fromDone = false;
  let toDone = false;
  stationList.forEach(element => {
    if (element.sc === journeyFrom) {
      journeyFrom = element.en+' - '+element.sc;
      fromDone = true; 
    };
    if (element.sc === journeyTo) {
      journeyTo = element.en+' - '+element.sc;
      toDone = true; 
    };
    if (fromDone && toDone) {
      return;
    };
  });
  sendRuntimeMsg('searchTrainBtwStns', {
    from: journeyFrom,
    to: journeyTo,
    date: journeyDate
  });
});

function searchTrainBtwStnsResponse(response) {
  if (response.success) {
    document.querySelector('.train-search-data tbody').innerHTML = '';
    response.trains.forEach(element => {
      let tr = document.createElement('tr');
      tr.innerHTML = `
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      <td>X</td>
      `;
      let tdsDOM = tr.querySelectorAll('td');
      tdsDOM[0].innerText = element.trainNumber;
      tdsDOM[1].innerText = element.trainName;
      tdsDOM[2].innerText = element.fromStnCode;
      tdsDOM[3].innerText = element.toStnCode;
      tdsDOM[4].innerText = element.departureTime;
      tdsDOM[5].innerText = element.arrivalTime;
      tdsDOM[6].innerText = element.duration;
      tdsDOM[7].innerText = element.distance;
      if (element.avlClasses.includes('SL')) {
        tdsDOM[8].innerHTML = `<a data-class="SL" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">SL</a>`;
      };
      if (element.avlClasses.includes('2S')) {
        tdsDOM[9].innerHTML = `<a data-class="2S" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">2S</a>`;
      };
      if (element.avlClasses.includes('CC')) {
        tdsDOM[10].innerHTML = `<a data-class="CC" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">CC</a>`;
      };
      if (element.avlClasses.includes('1A')) {
        tdsDOM[11].innerHTML = `<a data-class="1A" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">1A</a>`;
      };
      if (element.avlClasses.includes('2A')) {
        tdsDOM[12].innerHTML = `<a data-class="2A" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">2A</a>`;
      };
      if (element.avlClasses.includes('3A')) {
        tdsDOM[13].innerHTML = `<a data-class="3A" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">3A</a>`;
      };
      if (element.avlClasses.includes('3E')) {
        tdsDOM[14].innerHTML = `<a data-class="3E" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">3E</a>`;
      };
      if (element.avlClasses.includes('EC')) {
        tdsDOM[15].innerHTML = `<a data-class="EC" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">EC</a>`;
      };
      if (element.avlClasses.includes('EV')) {
        tdsDOM[16].innerHTML = `<a data-class="EV" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">EV</a>`;
      };
      if (element.avlClasses.includes('EA')) {
        tdsDOM[17].innerHTML = `<a data-class="EA" data-train-type="${element.trainType.join(',')}" data-train="${element.trainNumber}" data-date="${response.journeyDate}" data-from="${element.fromStnCode}" data-to="${element.toStnCode}" href="#" style="text-decoration: none;">EA</a>`;
      };
      document.querySelector('.train-search-data tbody').appendChild(tr);
      let tdsLinkDOM = tr.querySelectorAll('td a');
      tdsLinkDOM.forEach(element => {
        element.addEventListener('click', function (e) {
          e.preventDefault();
          sendRuntimeMsg('trainAvailibility', {
            from: this.getAttribute('data-from'),
            to: this.getAttribute('data-to'),
            date: this.getAttribute('data-date'),
            train: this.getAttribute('data-train'),
            trainType: this.getAttribute('data-train-type'),
            quota: document.querySelector('#train-search-quota').value,
            class: this.getAttribute('data-class')
          });
          document.querySelector('.train-search-availibility-cnt svg').classList.remove('d-none');
          document.querySelector('#train-search-availibility-btn').classList.add('d-none');
          document.querySelector('.train-search-fare-cnt').classList.add('d-none');
        });
      });
    });
  }
  else{
    document.querySelector('.train-search-data tbody').innerHTML = `<tr><td colspan="18" style="text-align: center;">${response.errorMessage}</td></tr>`;
  };
};

function trainAvailibilityResponse(response) {
  let btn = document.querySelector('#train-search-availibility-btn');
  document.querySelector('.train-search-availibility-cnt svg').classList.add('d-none');
  btn.classList.remove('d-none');
  if (response.success) {
    btn.innerText = response.availablityStatus;
    btn.setAttribute('data-from', response.journeyFrom);
    btn.setAttribute('data-to', response.journeyTo);
    btn.setAttribute('data-date', response.journeyDate);
    btn.setAttribute('data-train', response.journeyTrain);
    btn.setAttribute('data-quota', response.journeyQuota);
    btn.setAttribute('data-class', response.journeyClass);
    btn.setAttribute('data-tsd', response.tsd);
    if (response.baseFare !== 0) {
      document.querySelector('.train-search-fare-cnt').classList.remove('d-none');
      document.querySelector('.train-search-fare').innerText = response.totalCollectibleAmount;
    };
  }
  else{
    document.querySelector('#train-search-availibility-btn').innerText = response.errorMessage;
  };
};

document.querySelector('.train-search-trigger-btn').addEventListener('click', ()=>{
  document.querySelector('#train-search-from').value = document.querySelector('#journey-from').value;
  document.querySelector('#train-search-to').value = document.querySelector('#journey-to').value;
  document.querySelector('#train-search-date').value = document.querySelector('#journey-date').value;
  document.querySelector('#train-search-quota').value = document.querySelector('#journey-quota').value;
  document.querySelector('.train-search-data tbody').innerHTML = `<tr><td colspan="18" style="text-align: center;">No Trains Found.</td></tr>`;
  document.querySelector('.train-search-availibility-cnt svg').classList.add('d-none');
  document.querySelector('#train-search-availibility-btn').classList.add('d-none');
  toggleTrainSearchPopup();
  document.querySelector('.train-search-fare-cnt').classList.add('d-none');
  document.querySelector('.train-search-action-cnt .primary-btn').click();
});

document.querySelector('#train-search-availibility-btn').addEventListener('click', function () {
  if (confirm(`Journey From: ${this.getAttribute('data-from')}\nJourney To: ${this.getAttribute('data-to')}\nJourney Date: ${this.getAttribute('data-date')}\nJourney Train: ${this.getAttribute('data-train')}\nJourney Class: ${this.getAttribute('data-class')}\nJourney Quota: ${this.getAttribute('data-quota')}\nAre you Sure for it?`)){
    document.querySelector('#journey-from').value = this.getAttribute('data-from');
    document.querySelector('#journey-to').value = this.getAttribute('data-to');
    document.querySelector('#journey-date').value = this.getAttribute('data-date').split('-').reverse().join('-');
    document.querySelector('#journey-train').value = this.getAttribute('data-train');
    document.querySelector('#journey-class').value = this.getAttribute('data-class');
    document.querySelector('#journey-quota').value = this.getAttribute('data-quota');
    document.querySelector('#journey-train-starting-date').value = this.getAttribute('data-tsd');
    toggleTrainSearchPopup();
  };
});
// --------------------------- Train Search ends here ---------------------------

// --------------------------- Payment Option Form starts here --------------------------- 
// Toggle display: none; in Payment Option Form
function togglePaymentOptionForm() {
  document.querySelector('.payment-option-popup-cnt').classList.toggle('d-none');
};

// Handling add Payment Option btn event
document.querySelector('#add-payment-option-btn').addEventListener('click', (e)=>{
  e.preventDefault();
  togglePaymentOptionForm();
  showPaymentOption(null, true);
});

// Handling close Payment Option popup btn event
document.querySelector('#close-payment-option-popup-btn').addEventListener('click', (e)=>{
  e.preventDefault();
  togglePaymentOptionForm();
});

// toggle Payment Option Active Btn
function togglePaymentOptionActive() {
  let paymentOptionName = this.getAttribute('data-payment-option-name');
  if (pigeonData.paymentOptions[paymentOptionName].active) {
    pigeonData.paymentOptions[paymentOptionName].active = false;
  }
  else{
    pigeonData.paymentOptions[paymentOptionName].active = true;
  };
  console.log('Active Toggle triggered.');
  showPaymentOptions();
  savePigeonData();
};

// edit Ticket Btn Handler
function editPaymentOption() {
  let paymentOptionName = this.getAttribute('data-payment-option-name');
  if (!["PAYTM QR", "PHONEPE QR"].includes(paymentOptionName)) {
    togglePaymentOptionForm();
    showPaymentOption(paymentOptionName);
  }
  else{
    alert('System default Payment Option can\'t be edited.');
  };
};

// delete Payment Option Handler
function deletePaymentOption() {
  let paymentOptionName = this.getAttribute('data-payment-option-name');
  if (!["PAYTM QR", "PHONEPE QR"].includes(paymentOptionName)) {
    if (confirm('Are you sure, you wants to delete it?')) {
      delete pigeonData.paymentOptions[paymentOptionName];
      showPaymentOptions();
      savePigeonData();
    };
  }
  else{
    alert('System default Payment Option can\'t be deleted.');
  };
};

function configPaymentOptionDetailsDOM() {
  let paymentMethod = document.querySelector('#payment-option-config-method').value;
  let upiIdCnt = document.querySelector('#upi-id-cnt');
  if (paymentMethod === "IPAY UPI") {
    upiIdCnt.classList.remove('d-none');
    upiIdCnt.querySelector('input').required = true;
  };
};

// show Ticket in Popup
function showPaymentOption(paymentOptionName, clear=false) {
  let paymentOption;
  if (paymentOptionName) {
    paymentOption = pigeonData.paymentOptions[paymentOptionName];
    document.querySelector('#payment-option-config-name').disabled = true;
  } else{
    document.querySelector('#payment-option-config-name').disabled = false;
  };
  // Payment Option Config Data
  let paymentMethod = "IPAY UPI";

  // Payment Option Details Data
  let paymentUpiId = "";
  
  if (!clear) {
    // Payment Option Config Data
    paymentMethod = paymentOption.paymentMethod;
    
    // Payment Option Details Data
    paymentUpiId = paymentOption.paymentUpiId;
  };
  
  // Payment config DOM
  document.querySelector("#payment-option-config-name").value = paymentOptionName;
  document.querySelector("#payment-option-config-method").value = paymentMethod;
  
  // Payment details DOM
  document.querySelector("#payment-upi-id").value = paymentUpiId;
  configPaymentOptionDetailsDOM();
  configPaymentOptionDetailsDOM();
};

document.querySelector('#payment-option-config-method').addEventListener('change', configPaymentOptionDetailsDOM);
  
// show payment options in table
function showPaymentOptions() {
  let paymentOptionsDOM = document.querySelector('section[data-page="payment-options"] tbody');
  paymentOptionsDOM.innerHTML = '';
  if (Object.keys(pigeonData.paymentOptions).length === 0) {
    paymentOptionsDOM.innerHTML = `<tr><td colspan="4" style="text-align: center;">No Payment Options</td></tr>`;
    return;
  };
  for (const key in pigeonData.paymentOptions) {
    const element = pigeonData.paymentOptions[key];
    let tr = document.createElement('tr');
    tr.setAttribute('data-payment-option-name', key);
    tr.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td style="min-width: 250px;">
      <button type="button" data-payment-option-name="" data-action="active" class="action-btn">Activate</button>
      <button type="button" data-payment-option-name="" data-action="edit" class="action-btn">Edit</button>
      <button type="button" data-payment-option-name="" data-action="delete" class="action-btn">Delete</button>
    </td>`;
    
    let tds = tr.querySelectorAll('td');
    tds[0].innerText = key;
    tds[1].innerText = element.paymentMethod;
    if (["PAYTM QR", "PHONEPE QR"].includes(element.paymentMethod)) {
      tds[2].innerText = "Scan QR and Pay (System default)";
    }
    else if (element.paymentMethod === "IPAY UPI") {
      tds[2].innerText = `UPI ID : ${element.paymentUpiId}, Payment Request will be sent on this.`;
    };

    let activeBtn = tr.querySelector('button[data-action="active"]');
    activeBtn.setAttribute('data-payment-option-name', key);
    activeBtn.addEventListener('click', togglePaymentOptionActive);
    if (element.active) {
      activeBtn.innerText = "Deactivate";
    };

    let connectBtn = tr.querySelector('button[data-action="active"]');
    connectBtn.setAttribute('data-payment-option-name', key);
    connectBtn.addEventListener('click', togglePaymentOptionActive);
    
    let editBtn = tr.querySelector('button[data-action="edit"]');
    editBtn.setAttribute('data-payment-option-name', key);
    editBtn.addEventListener('click', editPaymentOption);
    
    let deleteBtn = tr.querySelector('button[data-action="delete"]');
    deleteBtn.setAttribute('data-payment-option-name', key);
    deleteBtn.addEventListener('click', deletePaymentOption);

    paymentOptionsDOM.appendChild(tr);
  };
};

// Ticket form Submit Handling
document.querySelector('.payment-option-popup-body').addEventListener('submit', (e)=>{
  e.preventDefault();
  let paymentOptionName = document.querySelector("#payment-option-config-name").value;
  
  if (!["PAYTM QR", "PHONE QR"].includes(paymentOptionName)) {
    // Payment Option Config Data
    let paymentMethod = document.querySelector("#payment-option-config-method").value;
    
    // Payment Option Details Data
    let paymentUpiId = document.querySelector("#payment-upi-id").value;

    pigeonData.paymentOptions[paymentOptionName] = {
      paymentMethod:paymentMethod,
      paymentUpiId:paymentUpiId
    };
    togglePaymentOptionForm();
    showPaymentOptions();
    savePigeonData();
  }
  else{
      alert('Reserved Name!');
  };
});
// --------------------------- Payment Option Form ends here ---------------------------

// --------------------------- IRCTC ID'S starts here --------------------------- 
// Add IRCTC Id form Submit Handling
document.querySelector('.add-irctc-id-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  let idDOM = document.querySelector('#new-irctc-id');
  let passwordDOM = document.querySelector('#new-irctc-password');
  let id = idDOM.value;
  let password = passwordDOM.value;
  
  if (!pigeonData.ids[id]) {
    pigeonData.ids[id] = {
      password:password,
      active:true
    };
  }
  else if (confirm("Do you wants to overwrite exiting IRCTC ID's password?")) {
    pigeonData.ids[id].password = password;
  };
  idDOM.value = "";
  showIrctcIds();
  savePigeonData();
});

// toggle Irctc Id Active Btn
function toggleIrctcIdActive() {
  let irctcId = this.getAttribute('data-irctc-id');
  if (pigeonData.ids[irctcId].active) {
    pigeonData.ids[irctcId].active = false;
  }
  else{
    pigeonData.ids[irctcId].active = true;
  };
  console.log('Active Toggle triggered');
  showIrctcIds();
  savePigeonData();
};

// Delete Irctc Id Btn
function deleteIrctcId() {
  let irctcId = this.getAttribute('data-irctc-id');
  delete pigeonData.ids[irctcId];
  savePigeonData();
  showIrctcIds();
};

// Show Irctc Ids
function showIrctcIds() {
  let irctcIdsDOM = document.querySelector('section[data-page="irctc-ids"] tbody');
  irctcIdsDOM.innerHTML = "";
  document.querySelector('.irctc-ids-count-data[data-irctc-ids-count-type="all"]').innerText = Object.keys(pigeonData.ids).length;
  let activeCount = 0;
  
  if (Object.keys(pigeonData.ids).length === 0) {
    irctcIdsDOM.innerHTML = `<tr><td colspan="3" style="text-align: center;">No IRCTC ID'S</td></tr>`;
    return;
  };
  for (const key in pigeonData.ids) {
    const element = pigeonData.ids[key];
    let tr = document.createElement('tr');
    tr.setAttribute('data-irctc-id', key);
    tr.innerHTML = `
    <td></td>
    <td></td>
    <td>
    <button type="button" data-irctc-id="" data-action="active" class="action-btn">Activate</button>
    <button type="button" data-irctc-id="" data-action="delete" class="action-btn">Delete</button>
    </td>`;
    
    let tds = tr.querySelectorAll('td');
    tds[0].innerText = key;
    tds[1].innerText = element.password;
    
    let activeBtn = tr.querySelector('button[data-action="active"]');
    activeBtn.setAttribute('data-irctc-id', key);
    activeBtn.addEventListener('click', toggleIrctcIdActive);
    if (element.active) {
      activeBtn.innerText = "Deactivate";
      activeCount++;
    };
    document.querySelector('.irctc-ids-count-data[data-irctc-ids-count-type="active"]').innerText = activeCount;
    document.querySelector('.irctc-ids-count-data[data-irctc-ids-count-type="inactive"]').innerText = Object.keys(pigeonData.ids).length-activeCount;
    
    let deleteBtn = tr.querySelector('button[data-action="delete"]');
    deleteBtn.setAttribute('data-irctc-id', key);
    deleteBtn.addEventListener('click', deleteIrctcId);
    irctcIdsDOM.appendChild(tr);
  };
};
document.querySelector('#change-all-password-btn').addEventListener('click', (e)=>{
  let newPassword = prompt('Please Enter New Password (min. 1 uppercase, 1 lowercase and 1 number)');
  if ( newPassword && newPassword !== '') {
    chrome.tabs.create({
      url: "https://www.irctc.co.in/nget/train-search"},
      (tab) => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["js/data.js", "js/common.js", "js/crypto-js.js", "js/change-all-pass.js"]
        });
        chrome.scripting.insertCSS({
          target: { tabId: tab.id },
          files:["css/common.css","css/change-all-pass.css"]
        });
        sendRuntimeMsg('initiateChangePassword', {
          pigeonTabId:tab.id,
          newPassword:newPassword
        });
    });
  };
});

document.querySelector('#delete-all-password-btn').addEventListener('click', (e)=>{
  if (confirm('Are you sure to delete all IRCTC Id\'s?')) {
    pigeonData.ids = {};
    savePigeonData();
    showIrctcIds();
  };
});

document.querySelector('#add-bulk-irctc-ids-btn').addEventListener('click', (e)=>{
  if (confirm('Do your text file is ready as username$password with IRCTC ID\'S to load here, Please confirm it for text file input?')) {
    document.querySelector('#add-bulk-irctc-ids-file').click();
  };
});

document.querySelector('#add-bulk-irctc-ids-file').addEventListener('input', ()=>{
  let fileToLoad = document.querySelector("#add-bulk-irctc-ids-file").files[0];
  let fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
      let textFromFileLoaded = fileLoadedEvent.target.result;
      console.log(textFromFileLoaded);
      let idsTxt = textFromFileLoaded.split('\n');
      idsTxt.forEach(idTxt => {
        idTxt = idTxt.replaceAll('\r','');
        idTxt = idTxt.split('$');
        let username = idTxt[0];
        let password = idTxt[1];
        pigeonData.ids[username] = {password:password, active:true};
      });
      savePigeonData();
      showIrctcIds();
  };
  fileReader.readAsText(fileToLoad, "UTF-8");
});
// --------------------------- IRCTC ID'S ends here --------------------------- 

function changeSettings(type) {
  let typesList = ["main", "proxy"];
  for (let i = 0; i < typesList.length; i++) {
    document.querySelector(`.${typesList[i]}-settings`).classList.add('d-none');
  };
  document.querySelector(`.${type}-settings`).classList.remove('d-none');
};
// --------------------------- Main settings starts here ---------------------------
function showMainSettings() {
  document.querySelector('#autofill-login-captcha').checked = pigeonData.settings.autofillLoginCaptcha;
  document.querySelector('#submit-autofill-login-captcha').checked = pigeonData.settings.submitAutofillLoginCaptcha;
  document.querySelector('#autofill-booking-captcha').checked = pigeonData.settings.autofillBookingCaptcha;
  document.querySelector('#submit-autofill-booking-captcha').checked = pigeonData.settings.submitAutofillBookingCaptcha;
  document.querySelector('#spd-onepair').checked = pigeonData.settings.spdOnePair;
  document.querySelector('#bna-autologin').checked = pigeonData.settings.bnaAutologin;
};

document.querySelector('.main-settings-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  pigeonData.settings.autofillLoginCaptcha = document.querySelector('#autofill-login-captcha').checked;
  pigeonData.settings.submitAutofillLoginCaptcha = document.querySelector('#submit-autofill-login-captcha').checked;
  pigeonData.settings.autofillBookingCaptcha = document.querySelector('#autofill-booking-captcha').checked;
  pigeonData.settings.submitAutofillBookingCaptcha = document.querySelector('#submit-autofill-booking-captcha').checked;
  pigeonData.settings.spdOnePair = document.querySelector('#spd-onepair').checked;
  pigeonData.settings.bnaAutologin = document.querySelector('#bna-autologin').checked;
  savePigeonData();
});

// --------------------------- Main settings ends here ---------------------------

// --------------------------- Proxy settings starts here ---------------------------
function showProxySettings() {
  if (pigeonData.settings.proxySettings) {
    let i = 1;
    while (i <= 6) {
      document.querySelector(`#proxy-ip-p${i}`).value = pigeonData.settings.proxySettings[i].ip;
      document.querySelector(`#proxy-port-p${i}`).value = pigeonData.settings.proxySettings[i].port;
      document.querySelector(`#proxy-username-p${i}`).value = pigeonData.settings.proxySettings[i].username;
      document.querySelector(`#proxy-password-p${i}`).value = pigeonData.settings.proxySettings[i].password;
      document.querySelector(`#proxy-status-p${i}`).checked = pigeonData.settings.proxySettings[i].enable;
      i++;
    };
  };
};

document.querySelector('.proxy-settings-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  
  let i = 1;
  while (i <= 6) {
    pigeonData.settings.proxySettings[i].ip = document.querySelector(`#proxy-ip-p${i}`).value;
    pigeonData.settings.proxySettings[i].port = document.querySelector(`#proxy-port-p${i}`).value;
    pigeonData.settings.proxySettings[i].username = document.querySelector(`#proxy-username-p${i}`).value;
    pigeonData.settings.proxySettings[i].password = document.querySelector(`#proxy-password-p${i}`).value;
    pigeonData.settings.proxySettings[i].enable = document.querySelector(`#proxy-status-p${i}`).checked;
    i++;
  };
  
  savePigeonData();
});

document.querySelector("#proxy-settings-btn").addEventListener('click', changeSettings.bind(null, 'proxy'));
document.querySelector("#back-to-main-settings-proxy-settings-btn").addEventListener('click', changeSettings.bind(null, 'main'));
// --------------------------- Proxy settings ends here ---------------------------

// --------------------------- Config Pigeon starts here ---------------------------
function configPigeon() {
  chrome.storage.local.get(null, (savedData)=>{
    if (Object.keys(savedData).length !== 0) {
      pigeonData = savedData;
    };
    console.log(pigeonData);
    showIrctcIds();
    showTickets();
    showPaymentOptions();
    showMainSettings();
    showProxySettings();
    setTimeout(() => {
      document.querySelector('.pigeon-loader').classList.add('d-none');
    }, 1000);
  });
};
// --------------------------- Config Pigeon ends here ---------------------------

// --------------------------- Login Pigeon starts here ---------------------------
function loginPigeon(e) {
  e.preventDefault();
  let id = "aadvik";
  let password = "0000";
  let validity = new Date(2024, 5, 20, 0, 0, 0, 0);
  let todayDate = new Date();
  todayDate.setHours(0);
  todayDate.setMinutes(0);
  todayDate.setSeconds(0);
  todayDate.setMilliseconds(0);
  let pigeonId = document.querySelector('#pigeon-id').value;
  let pigeonPassword = document.querySelector('#pigeon-password').value;
  if (pigeonId === id && pigeonPassword === password) {
    if (validity.getTime() >= todayDate.getTime()) {
      document.querySelector('.login-pigeon-popup-cnt').classList.add('d-none');
      document.querySelector('.pigeon-id b').innerText = document.querySelector('#pigeon-id').value;
    }
    else{
      alert('Your Validity Expired, Ask your Seller!');
    };
  }
  else{
    alert('Please enter valid Pigeon Id and Password!');
  };
};
document.querySelector('.pigeon-login-form').addEventListener('submit', loginPigeon);
// --------------------------- Login Pigeon ends here ---------------------------

// --------------------------- Pigeon Notice starts here ---------------------------
function closePigeonNotice() {
  document.querySelector('.pigeon-notice-popup-cnt').classList.add('d-none');
};
document.querySelector("#close-pigeon-notice-btn").addEventListener('click', closePigeonNotice);
// --------------------------- Pigeon Notice ends here ---------------------------

configPigeon();
document.querySelector('.login-pigeon-popup-cnt').classList.add('d-none');
closePigeonNotice();

function downloadObjectAsJson(exportObj, exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

document.querySelector('.download-backup-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  let backupData = pigeonData;
  console.log('download backup');
  let fileName = document.querySelector('#backup-file-name').value;
  if (fileName.length !== 0) {
    if (document.querySelector('#backup-irctc-ids').checked) {
      backupData.ids = {};
    };
    if (document.querySelector('#backup-payment-options').checked) {
      backupData.paymentOptions = {};
    };
    if (document.querySelector('#backup-settings').checked) {
      backupData.settings.bnaAutologin = false;
      backupData.settings.autofillCaptcha = false;
      backupData.settings.submitAutofillCaptcha = false;
      backupData.settings.rapidapiCaptchaSolverApiKey = '';
    };
    if (document.querySelector('#backup-tickets').checked) {
      backupData.tickets = {};
    };
    downloadObjectAsJson(backupData, fileName);
  }
  else{
    alert('Please enter backup file name.');
  }
});

async function parseJsonFile(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = event => resolve(JSON.parse(event.target.result))
    fileReader.onerror = error => reject(error)
    fileReader.readAsText(file);
  });
};


document.querySelector('.upload-backup-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  let backupFile = document.querySelector('#backup-file').files[0];
  const backupData = await parseJsonFile(backupFile);
  console.log(backupData);
  if (document.querySelector('#delete-old-data').checked) {
    pigeonData.ids = backupData.ids;
    pigeonData.paymentOptions = backupData.paymentOptions;
    pigeonData.settings = backupData.settings;
    pigeonData.tickets = backupData.tickets;
  }
  else{
    for (const key in backupData.ids) {
      const value = backupData.ids[key];
      pigeonData.ids[key] = value;
    };
    for (const key in backupData.paymentOptions) {
      const value = backupData.paymentOptions[key];
      pigeonData.paymentOptions[key] = value;
    };
    for (const key in backupData.tickets) {
      const value = backupData.tickets[key];
      pigeonData.tickets[key] = value;
    };
    pigeonData.settings = backupData.settings;
    console.log(pigeonData);
  };
  savePigeonData();
  configPigeon();
});

function changeBackuptoUpload() {
  document.querySelector('.download-backup').classList.add('d-none');
  document.querySelector('.upload-backup').classList.remove('d-none');
};

function toggleBackupSection() {
  document.querySelector('.download-backup').classList.toggle('d-none');
  document.querySelector('.upload-backup').classList.toggle('d-none');
};

document.querySelector('#upload-backup-btn').addEventListener('click', toggleBackupSection);
document.querySelector('#back-to-download-backup-btn').addEventListener('click', toggleBackupSection);

document.querySelectorAll('input[data-text="upper"]').forEach(element => {
  element.addEventListener('input', function () {
    this.value = this.value.toUpperCase();
  });
});


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].sc.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].sc.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].sc.substr(val.length) + " - ";
          b.innerHTML += arr[i].en;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].sc + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
};

autocomplete(document.getElementById("journey-from"), stationList);
autocomplete(document.getElementById("journey-to"), stationList);
autocomplete(document.getElementById("train-search-from"), stationList);
autocomplete(document.getElementById("train-search-to"), stationList);