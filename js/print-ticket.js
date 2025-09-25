
function appendPassengerDOM(passengerObject) {
    let trDOM = document.createElement('tr');
    trDOM.setAttribute('_ngcontent-uid-c92','');
    trDOM.setAttribute('align','center');
    trDOM.setAttribute('style',`padding-top: 10px; font-family: Calibri; font-size: 14px; color: black;`);
    trDOM.setAttribute('class','ng-star-inserted');
    trDOM.innerHTML = `
        <td _ngcontent-uid-c92="" width="3%"><span class="pigeon-passenger-serial-no"></span>.</td>
        <td class="pigeon-passenger-name" _ngcontent-uid-c92="" width="19%" align="left"></td>
        <td _ngcontent-uid-c92="" width="7%" align="left">
        &nbsp;&nbsp;<span class="pigeon-passenger-age"></span>
        </td>
        <td _ngcontent-uid-c92="" width="9%" align="left">
        &nbsp;&nbsp;<span
            _ngcontent-uid-c92=""
            class="ng-star-inserted"
            >&nbsp;&nbsp;</span
        ><span class="pigeon-passenger-sex"></span></td>
        <!----><!----><!---->
        <td
        _ngcontent-uid-c92=""
        align="left"
        width="25%"
        style="font-family: Calibri; font-size: 14px; color: black"
        class="ng-star-inserted"
        >
        &nbsp;&nbsp;<span class="pigeon-passenger-booking-status"></span><span
            _ngcontent-uid-c92=""
            class="ng-star-inserted"
            >/<span class="pigeon-passenger-booking-coach"></span></span
        ><!----><span _ngcontent-uid-c92="" class="ng-star-inserted"
            >/<span class="pigeon-passenger-booking-seat"></span></span
        ><!----><span _ngcontent-uid-c92="" class="ng-star-inserted"
            >/<span class="pigeon-passenger-booking-seat-type"></span></span
        ><!---->
        </td>
        <!----><!----><!----><!----><!---->
        <td
        _ngcontent-uid-c92=""
        align="left"
        width="25%"
        style="font-family: Calibri; font-size: 14px; color: black"
        class="ng-star-inserted"
        >
        &nbsp;&nbsp;<span class="pigeon-passenger-current-status"></span>
        <span _ngcontent-uid-c92="" class="ng-star-inserted"
            >/<span class="pigeon-passenger-current-coach"></span></span
        ><!----><span _ngcontent-uid-c92="" class="ng-star-inserted"
            >/<span class="pigeon-passenger-current-seat"></span></span
        ><!----><span _ngcontent-uid-c92="" class="ng-star-inserted"
            >/<span class="pigeon-passenger-current-seat-type"></span></span
        ><!---->
        </td>`;
    trDOM.querySelector('.pigeon-passenger-serial-no').innerText = passengerObject.passengerSerialNumber;
    trDOM.querySelector('.pigeon-passenger-name').innerText = passengerObject.passengerName;
    trDOM.querySelector('.pigeon-passenger-age').innerText = passengerObject.passengerAge;
    trDOM.querySelector('.pigeon-passenger-sex').innerText = passengerObject.passengerGenderCode;
    trDOM.querySelector('.pigeon-passenger-booking-status').innerText = passengerObject.bookingStatus;
    trDOM.querySelector('.pigeon-passenger-booking-coach').innerText = passengerObject.bookingCoachId;
    trDOM.querySelector('.pigeon-passenger-booking-seat').innerText = passengerObject.bookingBerthNo;
    trDOM.querySelector('.pigeon-passenger-booking-seat-type').innerText = passengerObject.passengerBerthChoice;
    trDOM.querySelector('.pigeon-passenger-current-status').innerText = passengerObject.currentStatus;
    trDOM.querySelector('.pigeon-passenger-current-coach').innerText = passengerObject.currentCoachId;
    trDOM.querySelector('.pigeon-passenger-current-seat').innerText = passengerObject.currentBerthNo;
    trDOM.querySelector('.pigeon-passenger-current-seat-type').innerText = passengerObject.currentBerthChoice;
    document.querySelector('#pigeon-passengers').appendChild(trDOM);
};

function appendFareInfoDOM(key, value) {
    let trDOM = document.createElement('tr');
    trDOM.setAttribute('_ngcontent-uid-c92', '');
    trDOM.setAttribute('class', 'ng-star-inserted');
    trDOM.innerHTML = `<tr _ngcontent-uid-c92="" class="ng-star-inserted">
        <td
        _ngcontent-uid-c92=""
        width="60%"
        style="
            font-family: Calibri;
            font-size: 13px;
            color: black;
            margin-left: -2px;
            position: absolute;
        "
        class="ng-star-inserted"
        >
        ${key}
        </td>
        <!---->
        <td
        _ngcontent-uid-c92=""
        width="40%"
        style="
            font-family: Calibri;
            font-size: 13px;
            color: black;
        "
        class="ng-star-inserted"
        >
        ₹ ${value}
    </td>`;
    document.querySelector('#pigeon-fare-info-list').appendChild(trDOM);
};

function paintTicket(object) {
    document.title = `${object.pnrNumber}`;
    document.querySelector('#pigeon-from-station').innerText = `${object.fromStationName} (${object.fromStation})`;
    document.querySelector('#pigeon-boarding-station').innerText = `${object.boardingAtName} (${object.boardingAt})`;
    document.querySelector('#pigeon-to-station').innerText = `${object.toStationName} (${object.toStation})`;
    document.querySelector('#pigeon-train-start-date').innerText = `Start Date* ${object.dateOfJourney}`;
    document.querySelector('#pigeon-boarding-date-time').innerText = `Departure* ${object.scheduledDepartureTime.split(' ').reverse().join(' ')}`;
    document.querySelector('#pigeon-arrival-date-time').innerText = `Arrival* ${object.scheduledArrivalTime.split(' ').reverse().join(' ')}`;
    document.querySelector('#pigeon-pnr').innerText = `${object.pnrNumber}`;
    document.querySelector('#pigeon-train-details').innerText = `${object.trainNo} / ${object.trainName}`;
    document.querySelector('#pigeon-train-class').innerText = `${object.classCode}`;
    document.querySelector('#pigeon-train-quota').innerText = `${object.quota}`;
    document.querySelector('#pigeon-travel-distance').innerText = `${object.distance} KM`;
    document.querySelector('#pigeon-booking-date-time').innerText = `${object.dateOfBooking}`;
    document.querySelector('#pigeon-ticket-transaction-id').innerText = `${object.transactionID}`;
    document.querySelector('#pigeon-ticket-invoice-no').innerText = `${object.invoiceNumber}`;
    document.querySelector('#pigeon-ticket-supplier-address').innerText = `${object.suplierAddress}`;
    document.querySelector('#pigeon-sac-code').innerText = `${object.sacCode}`;
    document.querySelector('#pigeon-gstin').innerText = `${object.gstinSuplier}`;
    document.querySelector('#pigeon-taxable-amount').innerText = `${object.taxableAmt}`;
    document.querySelector('#pigeon-cgst-rate').innerText = `${object.cgstRate}`;
    document.querySelector('#pigeon-cgst-amount').innerText = `${object.prsCgstCharge}`;
    document.querySelector('#pigeon-igst-rate').innerText = `${object.igstRate}`;
    document.querySelector('#pigeon-igst-amount').innerText = `${object.prsIgstCharge}`;
    document.querySelector('#pigeon-total-tax').innerText = `${object.totalPRSGst}`;
    document.querySelector('#pigeon-supplier-state-code').innerText = `${object.gstStateName}/${object.gstStateCode}`;
    object.fareInfoData.forEach(element => {
        appendFareInfoDOM(element.paramName, element.message);
    });
    object.passengerList.forEach(element => {
        appendPassengerDOM(element);
    });
    const qrcode = new QRCode(document.querySelector('qr-code'), {
        text: object.qrCodeText,
        width: 200,
        height: 200,
        colorDark : '#000',
        colorLight : '#fff',
        correctLevel : QRCode.CorrectLevel.H
      });
};

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    console.log(message, sender, "bg_script received a msg");
  if (message.id !== "pigeon") {
    console.log(message);
    sendResponse({"success":true});
    return true;
  };
  const type = message.msg.type;
  const data = message.msg.data;
  if (type === "paintTicket") {
    paintTicket(data.ticketObject);
  }
  else{
    sendResponse({"success":true});
  };
  return true;  // uncomment this line to fix error
});