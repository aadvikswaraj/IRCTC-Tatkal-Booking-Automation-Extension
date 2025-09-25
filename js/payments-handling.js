console.log("Pigeon Payments Script Injected");
document.title = "Pigeon Booking Tab";
try {
    let pigeonFavIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3xJREFUSImdlc9PXUUcxc/MvcDDR3+89Cm1QiMSGiJtl/oXgJHEVNK0kph2oa0LtQtrE1cu9E9oXLkxNSYmFkKpae3ChYsubFNQ4gIlbVFKoVggpZTH4935nuMCgQu819JOcnPnzuJz7vnOme84PGYcuaG9gXybZCehl41qoAlBGpf4dwi8ZIz7r7bXjlViuHKL7w6poVTi5ya8b2RECUaBFEwCSdjqXDShl+Jn19/YOfpEgaODOizTOZOyRuIJ8PTaIxmPD76V70vzfPrjnUGdlun8M8BBqS4AvW0X739S1kH3gLqM6jHJPwM89aYodv/V9eIPqwLd19VoTsMb/7zaCQ6AUvAlExYCK8FX5o+KFlrHjzbejQHAPL80YlNZPmyJ0V4fbQrBXCL8PFnCVyMFzBY3wWFUXUR8AeCEO3JDe428XS4tZ/bF6KiPKyUQt+YN3b9MY4FuvRsSJhnlm2KSXZWiKK3BvvtzFkNT88hla/HBgTzyNR7N2yJ05Eo4P+mgKE7DQSqikkNxIN+stKFpgaGpeVy5eR+oyaImk8Gn+7cDAF7NZ7E08Af87ibIRetCYESnp9RcKS3CmoJ8DNRkgZrn8Hxt1ep6ISEsGJJ7Y7CQpOACyVdiUrsrRTHt4Pj+F9DRvAs7qiO8ll8TuHJzCnIOpEEz94BcPQx+pVQvxfaYnKcdHMxV4WBuDSwAZ3+bwq+j/4LOLz8kODcDZHfCnAcpxiZNkmwpd4jSDkbmEkwvJlhIiH/mirg4PImBO9NrcBctv83AwkMosw0BbiImecuolnInVCmFs9dG8ePQKPQ/TM5thsOBPgIpsLgIVWdu+2C8XOn4pwxAwtbgcDBEoAArLf3kjXE/KSvXW9IlWoZuDS7nYQ6WVNde8Ffba8cCeK5cb0l7INxTwB3MRd/gZMu4A4DXL880BLhhSnXpxhWXCsD0HRgcFkqGJWKr8Hla1IpTrRMeAK517ho38JhRTDeuxSiD+e178KAYngLuReE9nGqdAFIXzu+d+QsmnTFS6/ahKgOXb4B8vBU4CX8aH7X1rHA3XZn7eqe6CH5rVF2qcSGUiggPZ0GhclmIY/i4rT/N8xsFRg7X9xUttMr4tUlhNb5RNZDNgT7eCGeA7yHdgY3wsg7SY8/3dxvJ5FAgOkk2mdTAEBCKhQl5P2rmLyWZTB9OtoxXYvwHJB0UzJWce+8AAAAASUVORK5CYII=`;
    var link = document.querySelectorAll("link[type='image/x-icon']");
    link[0].href = pigeonFavIcon;
    link[1].href = pigeonFavIcon;
  } catch (error) {};

var pigeonPaymentData;
var paymentIntiatedTime;
var paymentCompletedTime;

// Send Runtime Msg
function sendRuntimeMsg(msg_type, msg_body) {
    let senderName = "pigeon_payments_script";
    chrome.runtime.sendMessage({
    msg: {
        type: msg_type,
        data: msg_body,
    },
    sender: senderName,
    id: "pigeon",
});
};

// Update Pigeon Status Msg
function updatePigeonStatus(msg) {
    document.querySelector(".status-msg").innerText = msg;
};

var pigeonPhonePeQRIntervallId;
var pigeonPhonePeQRStep2IntervallId;
function phonePeQR() {
    // updatePigeonStatus("PhonePe QR Step 1/2...");
    // document.querySelector('.pigeon-loader p').innerText = "PhonePe QR is Loading...";
    // pigeonPhonePeQRIntervallId = setInterval(() => {
    //     let showQrBtn = document.querySelector(".showQRButton__1hkk9");
    //     if (showQrBtn) {
    //         showQrBtn.click();
    //         clearInterval(pigeonPhonePeQRIntervallId);
    //         updatePigeonStatus("PhonePe QR Step 2/2...");
    //         pigeonPhonePeQRStep2IntervallId = setInterval(() => {
    //             let qr = document.querySelector('.qr__3q4Hu');
    //             if (qr) {
    //                 paymentIntiatedTime = new Date().toLocaleTimeString();
    //                 updatePigeonStatus("Scan PhonePe QR and Pay.");
    //                 document.querySelector('.pigeon-qr img').src = qr.src;
    //                 clearInterval(pigeonPhonePeQRStep2IntervallId);
    //                 document.querySelector('.pigeon-loader').style.display = "none";
    //                 document.querySelector('.pigeon-qr').style.display = "flex";
    //             }
    //         }, 50);
    //     };
    // }, 50);
};

var pigeonPaytmQRIntervalId;
function paytmQR() {
    updatePigeonStatus("Paytm QR Step 1/1...");
    document.querySelector('.pigeon-loader p').innerText = "Paytm QR is Loading...";
    pigeonPaytmQRIntervalId = setInterval(() => {
        let qr = document.querySelector('img[data-key="qr-code"]');
        if (qr) {
            paymentIntiatedTime = new Date().toLocaleTimeString();
            updatePigeonStatus("Scan Paytm QR and Pay.");
            document.querySelector('.pigeon-qr img').src = qr.src;
            clearInterval(pigeonPaytmQRIntervalId);
            document.querySelector('.pigeon-loader').style.display = "none";
            document.querySelector('.pigeon-qr').style.display = "flex";
        }
    }, 50);
};

var pigeonRazorPayQrIntervalId;
var pigeonRazorPayQrStep2IntervalId;
var pigeonRazorPayQrStep3IntervalId;
var pigeonRazorPayQrStep4IntervalId;
function razorPayQr() {
    // document.querySelector(".razorpay-container").style.zIndex = '1';
    updatePigeonStatus("RazorPay QR Step 1/4...");
    document.querySelector('.pigeon-loader p').innerText = "RazorPay is Loading...";
    pigeonRazorPayQrIntervalId = setInterval(() => {
        let upiBtn = document.querySelector('button[method="upi"]');
        if (upiBtn) {
            upiBtn.click();
            clearInterval(pigeonRazorPayQrIntervalId);
            updatePigeonStatus("RazorPay QR Step 2/4...");
            pigeonRazorPayQrStep2IntervalId = setInterval(() => {
                let showQrBtn = document.querySelector('#showQr .option');
                if (showQrBtn) {
                    showQrBtn.click();
                    clearInterval(pigeonRazorPayQrStep2IntervalId);
                    updatePigeonStatus("RazorPay QR Step 3/4...");
                    pigeonRazorPayQrStep3IntervalId = setInterval(() => {
                        let continuePay = document.querySelector('.btn.svelte-f4xbwp');
                        if (continuePay) {
                            continuePay.click();
                            clearInterval(pigeonRazorPayQrStep3IntervalId);
                            updatePigeonStatus("RazorPay QR Step 4/4...");
                            pigeonRazorPayQrStep4IntervalId = setTimeout(() => {
                                let qr = document.querySelector('.qr-image img');
                                if (qr) {
                                    updatePigeonStatus("Scan RazorPay QR and Pay.");
                                    document.querySelector('.pigeon-qr img').src = qr.src;
                                    clearInterval(pigeonRazorPayQrStep4IntervalId);
                                    document.querySelector('.pigeon-loader').style.display = "none";
                                    document.querySelector('.pigeon-qr').style.display = "flex";
                                };
                            }, 50);
                        }
                    }, 50);
                }
            }, 50);
        };
    }, 50);
};

var pigeonIpayUpiIntervalId;
function ipayUPI() {
    updatePigeonStatus("Ipay UPI Step 1/1...");
    document.querySelector('.pigeon-loader p').innerText = "Ipay UPI is Loading...";
    pigeonIpayUpiIntervalId = setInterval(() => {
        if (loading2.style.display === "none") {
            clearInterval(pigeonIpayUpiIntervalId);
            vpaCheck.value = pigeonPaymentData.paymentUpiId;
            document.querySelector('#upi-sbmt').click();
            paymentIntiatedTime = new Date().toLocaleTimeString();
            updatePigeonStatus("Request Sent, Check Phone.");
            document.querySelector('.pigeon-loader').style.display = "none";
            document.querySelector('.pigeon-upi').style.display = "flex";
        };
    }, 50);
};

var mbkwIntervalId;
var mbkwStep2IntervalId;
var mbkwStep3IntervalId;
function mbkwWallet() {
    updatePigeonStatus("Mobikwik Wallet AutoPay Step 1/4...");
    document.querySelector('.pigeon-loader p').innerText = "Mobikwik Wallet AutoPay Sending OTP...";
    if (logininput && signinFrm) {
        logininput.value = pigeonPaymentData.paymentMbkwNo;
        signinFrm.click();
        mbkwIntervalId = setInterval(() => {
            if (signinlyr.style.display === "none") {
                updatePigeonStatus("Mobikwik Wallet AutoPay Step 2/4...");
                document.querySelector('.pigeon-loader p').innerText = "Mobikwik Wallet AutoPay Autofilling OTP...";
                clearInterval(mbkwIntervalId);
                sendRuntimeMsg('mbkwOtp');
            };
        }, 50);
    };
};

function mbkwWalletStep2() {
    updatePigeonStatus("Mobikwik Wallet AutoPay Step 3/4...");
    document.querySelector('.pigeon-loader p').innerText = "Mobikwik Wallet AutoPay Autofilling OTP 2...";
    if (otpinput) {
        paymentIntiatedTime = new Date().toLocaleTimeString();
        sendRuntimeMsg('mbkwOtp2');
    }
    else{
        updatePigeonStatus("Insufficient Balance in Mobikwik Wallet.");
        document.querySelector('.pigeon-loader p').innerText = "Insufficient Balance in Mobikwik Wallet.";
    };
};

var pigeonCnt = document.createElement('div');
pigeonCnt.id = 'pigeon-popup-cnt';
pigeonCnt.classList.add('pigeon-popup-cnt');
pigeonCnt.innerHTML = pigeonPaymentsModelHTML; // pigeonPaymentsModelHTML importing from data.js
document.body.appendChild(pigeonCnt);

// Receive Runtime Msg
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message, sender, "irctc_script received a msg");
    if (message.id !== "pigeon") {
        return;
    }
    const type = message.msg.type;
    const data = message.msg.data;
    if (type === "selectPaymentMethod") {
        pigeonPaymentData = data.paymentData;
        console.log('Pigeon Payment Data : ', data.paymentData);
        document.querySelector('.status-msg').classList.add('focus');
        switch (data.paymentData.paymentMethod) {
            case "PHONEPE QR":
                phonePeQR();
                break;
                
            case "PAYTM QR":
                paytmQR();
                break;
            
            case "IPAY UPI":
                ipayUPI();
                break;
            
            case "MOBIKWIK WALLET BYPASS":
                mbkwWallet();
                break;
        
            default:
                break;
        };
        if (!["MOBIKWIK WALLET BYPASS", "AMAZONPAY WALLET BYPASS"].includes(data.paymentData.paymentMethod)) {
            window.navigation.addEventListener("navigate", function(e) {
                console.log('location changed detected!');
                paymentCompletedTime = new Date().toLocaleTimeString();
                updatePigeonStatus('Redirecting for PNR...');
                sendRuntimeMsg('confirmBooking', {
                    paymentIntiatedTime:paymentIntiatedTime,
                    paymentCompletedTime:paymentCompletedTime
                });
            });
        };
    }
    else if (type === "mbkwOtpResponse") {
        let interval = setInterval(() => {
            if (document.querySelector('.fullpageLoader').style.display === 'none' && otpinput) {
                clearInterval(interval);
                console.log(data.otp);
                console.log(otpinput);
                otpinput.value = data.otp;
                verifyotpid[0].click();
                sendRuntimeMsg('mbkwStep2');
            };
        }, 100);
    }
    else if (type === "mbkwOtp2Response") {
        let interval2 = setInterval(() => {
            if (document.querySelector('.fullpageLoader').style.display === 'none' && otpinput) {
                clearInterval(interval2);
                console.log(data.otp);
                console.log(otpinput);
                otpinput.value = data.otp;
                document.querySelector('input[value="Pay Now"]').click();
                paymentCompletedTime = new Date().toLocaleTimeString();
                sendRuntimeMsg('confirmBooking', {
                    paymentIntiatedTime:paymentIntiatedTime,
                    paymentCompletedTime:paymentCompletedTime
                });
            };
        }, 100);
    }
    else if (type === "mbkwStep2Response") {
        mbkwWalletStep2();
        window.navigation.addEventListener("navigate", function(e) {
            console.log('location changed detected!');
        });
    };
    sendResponse({ success: true });
return true; // uncomment this line to fix error
});