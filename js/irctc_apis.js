clientTxnID = (new Date).getTime().toString(36);
const APIs = {
    loginCaptcha:{
        title:"",
        desc:"",
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/loginCaptcha",
        method:"GET",
        dataSent:null,
        dataReceived:{
            "captchaType": "LCAPTCHA",
            "captchaQuestion": "iVBORw0KGgoAAAANSUhEUgAAAMsAAAAyCAYAAADyZi/iAAAD9UlEQVR42u2cT2QcURzHI1ZERKmIiKqQQ/TQQ1hRVdFLRERVLtVDxR5Kj7GH3qMiVFVFVOkpeohQEVURpSoqeghVkUNFiarooUpVRKwq29/jbYyfNzNv/mR2U58PP83uvPeb6fp95733m9+btjYAAAAAAAAAAAAAAIiiXq9fEpsTeyt2KPZHrGb/3hJ7IVYRu8ivBb5BFcVAQl+DUc4K+v9cEHtVTwBRAHmI5UFCX3PNDEo5xbjY73pCkv5GRA1icXGQ0NdBs8Qi7sfsVCvIB7FpM9oE2vWK3RJbFfuLWCCLWPSdeSzBXT3IYVFBZtYdYr8CpzKiuevRb0BsBbFAWrE8VZ9fevpZVf0WCxTLhjrV9Gn+RkQNYmkwrD6bu3RPjI+expQmQLmIIBO3o+o0a6f9GxE1iOUkEOSfHfV1NcZHVbXfzRpk0nzCTJHEvtmUr6HmMapcRixQpFicwR/hY1e1n/EJspBz94lthuQIajEj2qeCEh+koRHLScCed2SWyiH9R8KmbUnFYoP/S0QsarHcVscfIhYoVCz2+xW98A/p/0y1W/GdvjhirZEkMNOuebt+ardtzRP5JdX/ueo/Zb9vF7sn9tpm5czocyy2L7YsNolYIE+xjDlSwSXVtyR2FJZqTiGWuk0Blz2vfV2vV8Suin31iOvPYldYs0Aui1e7uA5SUccrUQ8xU4plKsG1f1d9xwPJAB/MaDOBWCAPsejylU11/J06PptRLB8TXvuxY1RqsGfF3GXbdtmn+XuOEXMIsUBWsQw4AnrQHhuMK7xMIZZqTotwk03rDunTLfY+6iaAWCBVIDhGjzmfUSelWEZzEItZQ/XF9OtzlOOMIBbIKhbnusRRNHknB7F0JLx21/pkwbPvE9XvMWKBrGIpOYorHzmKL0tZxZLi2l3l+BOefSd9p2KIBbwDwVFcqevAFlMKMatYttOOTtKuUy/0EQvkIZbhmBTscJPEspax/iy0OgCxQOpAcNR/NdjJMMXLKpZ5xAKtKJZqiFhmmiiWm47r6WQaBs0Wi6u40nw+10SxdDiuKe0C/w1igVzEYtvq4srljJm2zEHoeJOLb+p4wfflHFqQRA1iyT0QChLLdcdDyf6YPv2Oh5JDEe0P00z1ALG0lFisn03HW12iyl22wrYVhPTZSFvsCYil1cSi3+5St5vIKg3RWJFUHJvLTOVyb4z/WdVn31Y4txNBiOVMicX6uuZ6/VIMP3z27Ntp2xGbvxDLfyEW62/I7MP3FMp6XMGl8n3DR4xEFGI5E2IJ+DW7PJfsbshaYKPXts2ClVP6NdXK920G7qerkJOIAgAAAAAAAAAAAAAAAAAAAAAAAACAluUfm+dQlo8HFC0AAAAASUVORK5CYII=",
            "captchaTime": "2024-05-29T06:02:15.767",
            "status": "GQ:0bcc6b55-bffd-4aa7-bc97-9fb528350c23",
            "timeStamp": "2024-05-29T06:02:15.767",
            "nlpcaptchEnabled": "false",
            "captcha": "10"
        },
        headers:{
            Bmirak: "webbm",
            Bmiyek:"44459D6D422C3AC8F4F5C751F8F755FA",
            Greq:"1716942735129"
        }
    },
    login:{
        title:"",
        desc:"",
        url:"https://www.irctc.co.in/authprovider/webtoken",
        method:"POST",
        dataSent:{
            type:"FormData",
            data:{
                grant_type: "password",
                data: "sHntWKehXHojTCld2DQApE5uo bzt opXSK6XvEBFdIKOGe1 V/o4eYsxwyOyD89",
                captcha: "Mr6t",
                uid: "GQ:0bcc6b55-bffd-4aa7-bc97-9fb528350c23",
                otpLogin: false,
                lso: "",
                encodedPwd: true
            }
        },
        dataReceived:{
            "access_token": "3176ed17-dde6-4999-9732-cfb85e75e9d3",
            "token_type": "bearer",
            "refresh_token": "a90983dd-804d-4a7a-820c-fada140e098e",
            "expires_in": 43199,
            "message": "SUCESS"
        },
        headers:{
            Bmirak: "webbm",
            Bmiyek:"44459D6D422C3AC8F4F5C751F8F755FA",
            Greq:"1716942735129"
        }
    },
    validateUserAndGenerateCsrf:{
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/validateUser?source=3",
        method:"GET",
        title:"",
        desc:"",
        dataReceived: {
            "existenceFlag": "false",
            "mpOldStatus": "0",
            "spouseOldStatus": "0",
            "mpCardExpFlag": "false",
            "funcType": "0",
            "mpSpouseFlag": "0",
            "spouseExistenceFlag": "false",
            "mpFileExistFlag": "false",
            "updatePhoto": "false",
            "cardStatus": "1",
            "userName": "DCwWPIazYymQtJ/B9uc16w==",
            "userId": "100000173374614",
            "firstName": "aadvik swaraj",
            "gender": "M",
            "dob": "90tA/t1j2Ud8VM6SxjzUfA==",
            "email": "yiZ1J9y6yn3JjjSzdRKr/6/BVdCUsv/ft2N5cE5KMMU=",
            "countryId": "94",
            "mobile": "o5wWs2Ikyy3KfB4NWNQZFw==",
            "isdCode": "91",
            "verified": "true",
            "emailVerified": "true",
            "mobileVerified": "true",
            "userEnableState": "1",
            "mobileAppConfigDTO": {
                "formFillCheckStartTime": "460",
                "formFillCheckEndTime": "720",
                "captchaFillCheckStartTime": "465",
                "captchaFillCheckEndTime": "720",
                "minmPsgnInputTime": "20000#20000#25000#25000#30000#30000",
                "minmCaptchaInputTime": "0",
                "minmPaymentTime": "5000",
                "formFillCheckEnable": "1",
                "paymentCompletCheckEnable": "1",
                "gstEnable": "true"
            },
            "informationMessage": [
                {
                    "message": "IR recovers only 57% of cost of travel on an average.",
                    "popup": "false",
                    "paramName": "ERS"
                },
                {
                    "message": "0",
                    "popup": "false",
                    "paramName": "GOVT_ADS_ENABLE"
                },
                {
                    "message": "0",
                    "popup": "false",
                    "paramName": "CAPTCHA_POC_ENABLE"
                }
            ],
            "rdsFlag": "0",
            "aadhaarVerifyFlag": "0",
            "eWalletExpireFlag": "false",
            "eWalletAadhaarRegisterFlag": "true",
            "renewFlag": "0",
            "otpLogin": "0",
            "rolles": [
                "1",
                "1",
                "0",
                "1",
                "0",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "0",
                "0",
                "1",
                "1",
                "0",
                "0",
                "1",
                "1",
                "0",
                "1"
            ],
            "userPaymentFlag": "false",
            "timeStamp": "2024-06-01T10:28:25.947",
            "kycAddressDisplayStat": "false",
            "deactivationReason": "0",
            "enable": "1",
            "userIdHash": "44459D6D422C3AC8F4F5C751F8F755FA",
            "aadhaarReverifyFlag": "false",
            "masterList": "1",
            "fevJourney": "true",
            "softBankList": [
                {
                    "bankId": "101",
                    "bankName": "IRCTC SBI Co-Brand Loyalty Credit Card",
                    "paymentMode": "0",
                    "enableFlag": "false",
                    "displaySection": "0",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "102",
                    "bankName": "IRCTC BOB Co-Brand Loyalty Credit Card",
                    "paymentMode": "0",
                    "enableFlag": "false",
                    "displaySection": "0",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "103",
                    "bankName": "IRCTC HDFC Co-Brand Loyalty Credit Card",
                    "paymentMode": "0",
                    "enableFlag": "false",
                    "displaySection": "0",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                }
            ],
            "ersTktSendEmailFlag": "1",
            "ersTktDownloadFlag": "1",
            "ratingOptions": [
                {
                    "v": "1",
                    "en": "Look and feel",
                    "hi": "उपयोगकर्ता अंतरपृष्ठ"
                },
                {
                    "v": "2",
                    "en": "Captcha",
                    "hi": "कॅप्चा"
                },
                {
                    "v": "3",
                    "en": "Login",
                    "hi": "लॉगिन"
                },
                {
                    "v": "4",
                    "en": "OTP",
                    "hi": "ओटीपी"
                },
                {
                    "v": "5",
                    "en": "Payment Issues",
                    "hi": "भुगतान सम्बंधित समस्याएं"
                },
                {
                    "v": "6",
                    "en": "Registration",
                    "hi": "पंजीकरण"
                },
                {
                    "v": "7",
                    "en": "Others",
                    "hi": "अन्य"
                }
            ]
        },
        reqHeaders:{
            "Spa-Csrf-Token": "1717009651002"
        },
        resHeaders:{
            "Csrf-Token": "1717009758699--224730117"
        }
    },
    getTrainList : {
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/altAvlEnq/TC",
        method:"POST",
        title:"",
        desc:"",
        dataSent:{
            "concessionBooking": false,
            "srcStn": "PNBE",
            "destStn": "KOTA",
            "jrnyClass": "",
            "jrnyDate": "20240719",
            "quotaCode": "GN",
            "currentBooking": "false",
            "flexiFlag": false,
            "handicapFlag": false,
            "ticketType": "E",
            "loyaltyRedemptionBooking": false,
            "ftBooking": false
        },
        dataReceived:{
            "trainBtwnStnsList": [
                {
                    "trainNumber": "09448",
                    "trainName": "PNBE ADI  SPL",
                    "fromStnCode": "PNBE",
                    "toStnCode": "KOTA",
                    "arrivalTime": "16:35",
                    "departureTime": "22:30",
                    "distance": "1146",
                    "duration": "18:05",
                    "runningMon": "N",
                    "runningTue": "N",
                    "runningWed": "N",
                    "runningThu": "N",
                    "runningFri": "Y",
                    "runningSat": "N",
                    "runningSun": "N",
                    "avlClasses": [
                        "3A",
                        "SL"
                    ],
                    "trainType": [
                        "ST",
                        "SP"
                    ],
                    "atasOpted": "false",
                    "flexiFlag": "false",
                    "trainOwner": "0",
                    "trainsiteId": "C"
                },
                {
                    "trainNumber": "12948",
                    "trainName": "AZIMABAD EXPRES",
                    "fromStnCode": "PNBE",
                    "toStnCode": "KOTA",
                    "arrivalTime": "17:40",
                    "departureTime": "23:45",
                    "distance": "1146",
                    "duration": "17:55",
                    "runningMon": "N",
                    "runningTue": "N",
                    "runningWed": "Y",
                    "runningThu": "N",
                    "runningFri": "Y",
                    "runningSat": "N",
                    "runningSun": "N",
                    "avlClasses": [
                        "2A",
                        "3A",
                        "SL"
                    ],
                    "trainType": [
                        "SP"
                    ],
                    "atasOpted": "false",
                    "flexiFlag": "false",
                    "trainOwner": "0",
                    "trainsiteId": "C"
                },
                {
                    "trainNumber": "19670",
                    "trainName": "HUMSAFAR EXPRESS",
                    "fromStnCode": "PPTA",
                    "toStnCode": "KOTA",
                    "arrivalTime": "01:20",
                    "departureTime": "00:15",
                    "distance": "1287",
                    "duration": "25:05",
                    "runningMon": "N",
                    "runningTue": "N",
                    "runningWed": "N",
                    "runningThu": "N",
                    "runningFri": "Y",
                    "runningSat": "N",
                    "runningSun": "N",
                    "avlClasses": [
                        "3A",
                        "SL"
                    ],
                    "trainType": [
                        "O"
                    ],
                    "atasOpted": "false",
                    "flexiFlag": "false",
                    "trainOwner": "0",
                    "trainsiteId": "C"
                },
                {
                    "trainNumber": "13239",
                    "trainName": "PNBE KOTA EXP",
                    "fromStnCode": "PNBE",
                    "toStnCode": "KOTA",
                    "arrivalTime": "11:55",
                    "departureTime": "11:45",
                    "distance": "1240",
                    "duration": "24:10",
                    "runningMon": "Y",
                    "runningTue": "N",
                    "runningWed": "Y",
                    "runningThu": "Y",
                    "runningFri": "Y",
                    "runningSat": "N",
                    "runningSun": "N",
                    "avlClasses": [
                        "1A",
                        "2A",
                        "3A",
                        "3E",
                        "SL"
                    ],
                    "trainType": [
                        "SP"
                    ],
                    "atasOpted": "false",
                    "flexiFlag": "false",
                    "trainOwner": "0",
                    "trainsiteId": "C"
                }
            ],
            "quotaList": [
                "SS",
                "GN",
                "HP",
                "LD",
                "PH",
                "DP"
            ],
            "timeStamp": "2024-05-31T08:02:29.659",
            "vikalpInSpecialTrainsAccomFlag": "false",
            "oneStopJourny": "false",
            "serveyFlag": "false",
            "alternateEnquiryFlag": "false"
        },
        reqHeaders:{
            "Spa-Csrf-Token": "1717009651002"
        },
        resHeaders:{
            "Csrf-Token": "1717009758699--224730117"
        }
    },
    availablilityCheck:{
        title:"",
        desc:"",
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/avlFarenquiry/TRAIN-NO/YYYYMMDD/SOURCE/DESTINATION/class/QUOTA/N",
        method:"POST",
        dataSent:{
            type:"JSON",
            data:{
                "paymentFlag": "N",
                "concessionBooking": false,
                "ftBooking": false,
                "loyaltyRedemptionBooking": false,
                "moreThanOneDay": true,
                "isLogedinReq": false,
                "ticketType": "E",
                "quotaCode": "TQ",
                "trainNumber": "13240",
                "fromStnCode": "KOTA",
                "toStnCode": "PNBE",
                "journeyDate": "YYYYMMDD",
                "classCode": "2A"
            }
        },
        dataReceived:{
            "trainName": "KOTA PNBE EXP",
            "distance": "1240",
            "reqEnqParam": "13240#KOTA#PNBE#KOTA#2A",
            "quota": "TQ",
            "enqClass": "2A",
            "from": "KOTA",
            "to": "PNBE",
            "trainNo": "13240",
            "baseFare": "1978",
            "reservationCharge": "50",
            "superfastCharge": "0",
            "fuelAmount": "0.0",
            "totalConcession": "0",
            "tatkalFare": "500",
            "serviceTax": "127.0",
            "otherCharge": "0",
            "cateringCharge": "0",
            "dynamicFare": "0",
            "totalFare": "2655",
            "travelInsuranceCharge": "0.0",
            "travelInsuranceServiceTax": "0.0",
            "insuredPsgnCount": "0",
            "nextEnqDate": "2024-06-01T00:00:00.000",
            "timeStamp": "2024-05-29T06:47:30.816",
            "otpAuthenticationFlag": "0",
            "cateringFlag": "0",
            "totalCollectibleAmount": "2655.0",
            "avlDayList": [
                {
                    "availablityDate": "29-5-2024",
                    "availablityStatus": "TQWL5/WL5", // NOT AVAILABLE for no seat
                    "reasonType": "S", // S-Bookable, W-Future Bookable on Time and also for NOT Available
                    "availablityType": "3",
                    "currentBkgFlag": "N",
                    "wlType": "11",
                    "delayFlag": "N",
                    "delay": "0"
                }
            ],
            "informationMessage": [
                {
                    "message": "* IR recovers only 57% of cost of travel on an average.\n* Rounding off  to next multiple of Rs. 5 is included in Base fare.\n* Final fare based on passenger(s) added will be displayed on REVIEW JOURNEY page including concessions / dynamic fare charges etc. whichever applicable.\n",
                    "popup": "false",
                    "paramName": "FARE_BREAKUP"
                },
                {
                    "message": "Forgo Concession Opted",
                    "popup": "false",
                    "paramName": "FORGO_CONC"
                }
            ],
            "reTry": "false",
            "altAvlEnabled": "true",
            "altTrainEnabled": "true",
            "altClsEnabled": "true",
            "taRdsFlag": "false",
            "upiRdsFlag": "false",
            "rdsTxnPwdFlag": "false",
            "ftBookingMsgFlag": "false"
        },
        headers:{
            Bmirak: "webbm",
            Bmiyek:"44459D6D422C3AC8F4F5C751F8F755FA",
            Greq:"1716942735129"
        }
    },
    boardingStationEnq:{
        url: "https://www.irctc.co.in/eticketing/protected/mapps1/boardingStationEnq",
        method: "POST",
        title:"",
        desc:"",
        dataSent:{
            "clusterFlag": "N",
            "onwardFlag": "N",
            "cod": "false",
            "reservationMode": "WS_TA_B2C",
            "autoUpgradationSelected": false,
            "gnToCkOpted": false,
            "paymentType": 1,
            "twoPhaseAuthRequired": false,
            "captureAddress": 0,
            "alternateAvlInputDTO": [
                {
                    "trainNo": autofillData.journey_details.train,
                    "destStn": autofillData.journey_details.destination,
                    "srcStn": autofillData.journey_details.from,
                    "jrnyDate": autofillData.journey_details.date.replaceAll('-',''),
                    "quotaCode": autofillData.journey_details.quota,
                    "jrnyClass": autofillData.journey_details.class,
                    "concessionPassengers": false
                }
            ],
            "passBooking": false,
            "journalistBooking": false
        },
        dataReceived:{
            "boardingStationList": [
                {
                    "stnNameCode": "PATNA JN - PNBE",
                    "arrivalTime": "--",
                    "departureTime": "11:45",
                    "routeNumber": "1",
                    "haltTime": "--",
                    "distance": "0",
                    "dayCount": "1",
                    "stnSerialNumber": "1",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "DANAPUR - DNR",
                    "arrivalTime": "11:58",
                    "departureTime": "12:00",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "10",
                    "dayCount": "1",
                    "stnSerialNumber": "2",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "BIHTA - BTA",
                    "arrivalTime": "12:11",
                    "departureTime": "12:13",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "28",
                    "dayCount": "1",
                    "stnSerialNumber": "3",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "ARA JN - ARA",
                    "arrivalTime": "12:33",
                    "departureTime": "12:35",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "50",
                    "dayCount": "1",
                    "stnSerialNumber": "4",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "BUXAR - BXR",
                    "arrivalTime": "13:24",
                    "departureTime": "13:26",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "118",
                    "dayCount": "1",
                    "stnSerialNumber": "5",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "ZAMANIA - ZNA",
                    "arrivalTime": "14:05",
                    "departureTime": "14:07",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "168",
                    "dayCount": "1",
                    "stnSerialNumber": "6",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "DD UPADHYAYA JN - DDU",
                    "arrivalTime": "15:30",
                    "departureTime": "15:40",
                    "routeNumber": "1",
                    "haltTime": "00:10",
                    "distance": "212",
                    "dayCount": "1",
                    "stnSerialNumber": "7",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "VARANASI JN - BSB",
                    "arrivalTime": "16:25",
                    "departureTime": "16:35",
                    "routeNumber": "1",
                    "haltTime": "00:10",
                    "distance": "229",
                    "dayCount": "1",
                    "stnSerialNumber": "8",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "SULTANPUR - SLN",
                    "arrivalTime": "18:55",
                    "departureTime": "19:00",
                    "routeNumber": "1",
                    "haltTime": "00:05",
                    "distance": "372",
                    "dayCount": "1",
                    "stnSerialNumber": "9",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "NIHALGARH - NHH",
                    "arrivalTime": "19:43",
                    "departureTime": "19:45",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "423",
                    "dayCount": "1",
                    "stnSerialNumber": "10",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "LUCKNOW NR - LKO",
                    "arrivalTime": "23:10",
                    "departureTime": "23:20",
                    "routeNumber": "1",
                    "haltTime": "00:10",
                    "distance": "512",
                    "dayCount": "1",
                    "stnSerialNumber": "11",
                    "boardingDate": "2024-07-19T00:00:00.000"
                },
                {
                    "stnNameCode": "KANPUR CENTRAL - CNB",
                    "arrivalTime": "01:10",
                    "departureTime": "01:15",
                    "routeNumber": "1",
                    "haltTime": "00:05",
                    "distance": "586",
                    "dayCount": "2",
                    "stnSerialNumber": "12",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "RURA - RURA",
                    "arrivalTime": "01:56",
                    "departureTime": "01:58",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "630",
                    "dayCount": "2",
                    "stnSerialNumber": "13",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "ETAWAH JN - ETW",
                    "arrivalTime": "03:00",
                    "departureTime": "03:02",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "725",
                    "dayCount": "2",
                    "stnSerialNumber": "14",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "AGRA CANTT - AGC",
                    "arrivalTime": "05:10",
                    "departureTime": "05:15",
                    "routeNumber": "1",
                    "haltTime": "00:05",
                    "distance": "862",
                    "dayCount": "2",
                    "stnSerialNumber": "17",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "MATHURA JN - MTJ",
                    "arrivalTime": "06:40",
                    "departureTime": "07:10",
                    "routeNumber": "1",
                    "haltTime": "00:30",
                    "distance": "916",
                    "dayCount": "2",
                    "stnSerialNumber": "18",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "BHARATPUR JN - BTE",
                    "arrivalTime": "07:33",
                    "departureTime": "07:35",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "949",
                    "dayCount": "2",
                    "stnSerialNumber": "19",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "BAYANA JN - BXN",
                    "arrivalTime": "08:05",
                    "departureTime": "08:07",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "991",
                    "dayCount": "2",
                    "stnSerialNumber": "20",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "HINDAUN CITY - HAN",
                    "arrivalTime": "08:33",
                    "departureTime": "08:35",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "1024",
                    "dayCount": "2",
                    "stnSerialNumber": "21",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "GANGAPUR CITY - GGC",
                    "arrivalTime": "09:10",
                    "departureTime": "09:15",
                    "routeNumber": "1",
                    "haltTime": "00:05",
                    "distance": "1068",
                    "dayCount": "2",
                    "stnSerialNumber": "22",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "SAWAI MADHOPUR - SWM",
                    "arrivalTime": "09:58",
                    "departureTime": "10:00",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "1132",
                    "dayCount": "2",
                    "stnSerialNumber": "23",
                    "boardingDate": "2024-07-20T00:00:00.000"
                },
                {
                    "stnNameCode": "INDARGARH - IDG",
                    "arrivalTime": "10:23",
                    "departureTime": "10:25",
                    "routeNumber": "1",
                    "haltTime": "00:02",
                    "distance": "1169",
                    "dayCount": "2",
                    "stnSerialNumber": "24",
                    "boardingDate": "2024-07-20T00:00:00.000"
                }
            ],
            "timeStamp": "2024-05-30T03:21:52.928",
            "mealChoiceenable": "false",
            "bkgCfgs": [
                {
                    "seniorCitizenApplicable": "false",
                    "foodChoiceEnabled": "false",
                    "idRequired": "false",
                    "bedRollFlagEnabled": "false",
                    "maxMasterListPsgn": "6",
                    "maxPassengers": "6",
                    "maxInfants": "2",
                    "minNameLength": "3",
                    "maxNameLength": "16",
                    "srctznAge": "60",
                    "srctnwAge": "58",
                    "maxARPDays": "120",
                    "maxRetentionDays": "5",
                    "minPassengerAge": "5",
                    "maxPassengerAge": "125",
                    "maxChildAge": "11",
                    "minIdCardLength": "4",
                    "maxIdCardLength": "16",
                    "minPassportLength": "6",
                    "maxPassportLength": "9",
                    "srctzTAge": "60",
                    "lowerBerthApplicable": "true",
                    "newTimeTable": "true",
                    "childBerthMandatory": "false",
                    "validIdCardTypes": [
                        "NULL_IDCARD",
                        "DRIVING_LICENSE",
                        "PASSPORT",
                        "PANCARD",
                        "VOTER_ICARD",
                        "GOVT_ICARD",
                        "STUDENT_ICARD",
                        "BANK_PASSBOOK",
                        "CREDIT_CARD",
                        "UNIQUE_ICARD"
                    ],
                    "applicableBerthTypes": [
                        "LB",
                        "UB",
                        "SL",
                        "SU"
                    ],
                    "suvidhaTrain": "false",
                    "specialTatkal": "false",
                    "atasEnable": "false",
                    "gatimaanTrain": "false",
                    "travelInsuranceEnabled": "true",
                    "travelInsuranceFareMsg": "Do you want to take Travel Insurance\n(₹0.45/person)?",
                    "uidVerificationPsgnInputFlag": "0",
                    "uidVerificationMasterListFlag": "2",
                    "uidMandatoryFlag": "0",
                    "gstDetailInputFlag": "true",
                    "gstinPattern": "^([0]{1}[1-9]{1}|[1]{1}[0-9]{1}|[2]{1}[0-7]{1}|[2]{1}[9]{1}|[3]{1}[0-8]{1})[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[a-zA-Z0-9]{1}[A-Za-z]{1}[a-zA-Z0-9]{1}$",
                    "forgoConcession": "false",
                    "twoSSReleaseFlag": "false",
                    "beyondArpBooking": "false",
                    "acuralBooking": "false",
                    "redemptionBooking": "false",
                    "trainsiteId": "C",
                    "bonafideCountryList": [
                        "NP",
                        "BT"
                    ],
                    "pmfInputEnable": "false",
                    "pmfInputMandatory": "false",
                    "pmfInputMaxLength": "0",
                    "paymentOption": {
                        "header": "Payment Mode",
                        "type": "Radio",
                        "defaultValue": "3",
                        "options": [
                            {
                                "value": "3",
                                "label": "Pay through Credit & Debit Cards / Net Banking / Wallets / Bharat QR / Pay on Delivery/ Rewards and Others",
                                "desc": "Convenience Fee: ₹30/- + GST"
                            },
                            {
                                "value": "2",
                                "label": "Pay through BHIM/UPI",
                                "desc": "Convenience Fee: ₹20/- + GST"
                            }
                        ]
                    },
                    "captureAddress": "0",
                    "trainNo": "13239"
                }
            ]
        }
    },
    createBookingAndBookingCaptcha : {
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/allLapAvlFareEnq/Y",
        method:"POST",
        title:"",
        desc:"",
        dataSent:{
            "clusterFlag": "N",
            "onwardFlag": "N",
            "cod": "false",
            "reservationMode": "WS_TA_B2C",//*
            "autoUpgradationSelected": false,
            "gnToCkOpted": false,
            "paymentType": "2",
            "twoPhaseAuthRequired": false,
            "captureAddress": 0,
            "wsUserLogin": "aadvik96",
            "moreThanOneDay": false,
            "clientTransactionId": "lwr5cuhi",//*
            "boardingStation": "PNBE",
            "reservationUptoStation": "KOTA",
            "mobileNumber": "9693031342",
            "ticketType": "E",
            "mainJourneyTxnId": null,
            "mainJourneyPnr": "",
            "captcha": "",
            "generalistChildConfirm": false,
            "ftBooking": false,
            "loyaltyRedemptionBooking": false,
            "nosbBooking": false,
            "warrentType": 0,
            "ftTnCAgree": false,
            "bookingChoice": 1,
            "bookingConfirmChoice": 1,
            "bookOnlyIfCnf": false,
            "returnJourney": false,
            "connectingJourney": false,
            "lapAvlRequestDTO": [
                {
                    "trainNo": "13239",
                    "journeyDate": "20240703",
                    "fromStation": "PNBE",
                    "toStation": "KOTA",
                    "journeyClass": "3A",
                    "quota": "GN",
                    "coachId": null,
                    "reservationChoice": "99",
                    "ignoreChoiceIfWl": true,
                    "travelInsuranceOpted": "true",
                    "warrentType": 0,
                    "coachPreferred": false,
                    "autoUpgradation": false,
                    "bookOnlyIfCnf": false,
                    "addMealInput": null,
                    "concessionBooking": false,
                    "passengerList": [
                        {
                            "passengerName": "Aman Raj",
                            "passengerAge": 16,
                            "passengerGender": "M",
                            "passengerBerthChoice": "",
                            "passengerFoodChoice": null,
                            "passengerBedrollChoice": null,
                            "passengerNationality": "IN",
                            "passengerCardTypeMaster": null,
                            "passengerCardNumberMaster": null,
                            "psgnConcType": null,
                            "psgnConcCardId": null,
                            "psgnConcDOB": null,
                            "psgnConcCardExpiryDate": null,
                            "psgnConcDOBP": "2007-11-17T18:30:00.000Z",
                            "softMemberId": null,
                            "softMemberFlag": null,
                            "psgnConcCardExpiryDateP": null,
                            "passengerVerified": false,
                            "masterPsgnId": "100000716704319",
                            "mpMemberFlag": null,
                            "passengerForceNumber": null,
                            "passConcessionType": "0",
                            "passUPN": null,
                            "passBookingCode": null,
                            "passengerSerialNumber": 1,
                            "childBerthFlag": true,
                            "passengerCardType": "NULL_IDCARD",
                            "passengerIcardFlag": false,
                            "passengerCardNumber": null
                        }
                    ],
                    "ssQuotaSplitCoach": "N"
                }
            ],
            "gstDetails": {
                "gstIn": "",
                "error": null
            }
        },
        dataReceived:{
            "avlFareResponseDTO": [
                {
                    "trainName": "KOTA PNBE EXP",
                    "distance": "1280",
                    "reqEnqParam": "13238#KOTA#PNBE#KOTA#3A",
                    "quota": "GN",
                    "enqClass": "3A",
                    "from": "KOTA",
                    "to": "PNBE",
                    "trainNo": "13238",
                    "baseFare": "1398",
                    "reservationCharge": "40",
                    "superfastCharge": "0",
                    "fuelAmount": "0.0",
                    "totalConcession": "0",
                    "tatkalFare": "0",
                    "serviceTax": "72.0",
                    "otherCharge": "0",
                    "cateringCharge": "0",
                    "dynamicFare": "0",
                    "totalFare": "1510",
                    "wpServiceCharge": "20.0",
                    "wpServiceTax": "3.6",
                    "travelInsuranceCharge": "0.37",
                    "travelInsuranceServiceTax": "0.08",
                    "insuredPsgnCount": "1",
                    "nextEnqDate": "2024-07-05T00:00:00.000",
                    "preEnqDate": "2024-06-20T00:00:00.000",
                    "timeStamp": "2024-05-29T07:13:38.625",
                    "otpAuthenticationFlag": "0",
                    "totalCollectibleAmount": "1534.05",
                    "avlDayList": [
                        {
                            "availablityDate": "4-7-2024",
                            "availablityStatus": "AVAILABLE-0128",
                            "reasonType": "S",
                            "availablityType": "1",
                            "currentBkgFlag": "N",
                            "wlType": "8224",
                            "delayFlag": "N",
                            "delay": "0"
                        }
                    ],
                    "informationMessage": [
                        {
                            "message": "* IR recovers only 57% of cost of travel on an average.\n* Rounding off  to next multiple of Rs. 5 is included in Base fare.\n* Final fare based on passenger(s) added will be displayed on REVIEW JOURNEY page including concessions / dynamic fare charges etc. whichever applicable.\n",
                            "popup": "false",
                            "paramName": "FARE_BREAKUP"
                        },
                        {
                            "message": "Forgo Concession Opted",
                            "popup": "false",
                            "paramName": "FORGO_CONC"
                        }
                    ],
                    "reTry": "false",
                    "taRdsFlag": "false",
                    "upiRdsFlag": "false",
                    "rdsTxnPwdFlag": "true",
                    "ftBookingMsgFlag": "false",
                    "trainsiteId": "B"
                }
            ],
            "totalCollectibleAmount": "1534.05",
            "bankDetailDTO": [
                {
                    "bankId": "78",
                    "bankName": "Credit & Debit cards / Net Banking / Wallet / UPI (Powered by Paytm)",
                    "paymentMode": "13",
                    "message": "NIL, For all UPI Transactions </br> NIL, For all Rupay Debit Cards </br> 0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000 .</br>0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹ 2000 </br>1.0 % + Applicable Taxes for all domestic Credit Cards</br>₹ 10 + Applicable Taxes for Netbanking transactions</br>1.8 % + Applicable Taxes for E-wallet transactions",
                    "enableFlag": "true",
                    "displaySection": "9",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "98",
                    "bankName": "Credit & Debit cards /Net Banking/Wallets/UPI/ International Cards (Powered by PayU)",
                    "paymentMode": "13",
                    "message": "- NIL, for all UPI Transactions </br> - NIL, for all domestic Rupay Debit Cards </br> - 0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000 </br> - 0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹ 2000 </br> - 1.0 % + Applicable Taxes for all domestic Credit Cards </br> - 3.5 % + Applicable Taxes for International Cards </br> - ₹ 10 + Applicable Taxes for Netbanking transactions  </br> - 1.80 % + Applicable Taxes for E-wallet transactions",
                    "enableFlag": "true",
                    "displaySection": "9",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "105",
                    "bankName": "Credit & Debit cards / Net Banking / UPI (Powered by Razorpay)",
                    "paymentMode": "13",
                    "message": "NIL, for UPI Transaction </br> NIL, for all Rupay Debit Cards </br> 0.4% + Applicable Taxes for Other Domestic Debit Cards up to ₹2000 </br> 0.9% + Applicable Taxes for Other Domestic Debit Cards more than ₹2000 </br> 1.0% + Applicable Taxes for all domestic Credit Cards </br> ₹10 + Applicable Taxes for Netbanking transactions </br> 3.5% + Applicable Taxes, for International Cards",
                    "enableFlag": "true",
                    "displaySection": "9",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "113",
                    "bankName": "Credit cards/Debit cards/Netbanking/UPI (Powered by IRCTC)",
                    "paymentMode": "9",
                    "message": "NIL for UPI Transaction,\nNIL for all Rupay Debit Cards,0.4 % + Applicable Taxes for Other Domestic Debit Cards up to ₹ 2000, \n0.9 % + Applicable Taxes for Other Domestic Debit Cards more than ₹2000, \n1.8 % + Applicable Taxes for all domestic Credit Cards, \n₹10 + Applicable Taxes for Netbanking transactions,\n1.8 % + Applicable Taxes for all Autopay Transactions,",
                    "enableFlag": "true",
                    "displaySection": "18",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "116",
                    "bankName": "Credit & Debit cards / Wallet / UPI (Powered by PhonePe)",
                    "paymentMode": "13",
                    "message": "NIL for UPI Transaction,\nNIL for all Rupay Debit Cards,\n0.4 % + Applicable Taxes for Other Domestic Debit Cards up to ₹2000,\n0.9 % + Applicable Taxes for Other Domestic Debit Cards more than ₹2000,\n1.0 % + Applicable Taxes for all Domestic Credit Cards,\n1.8 % + Applicable Taxes for E-wallet transactions",
                    "enableFlag": "true",
                    "displaySection": "9",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "117",
                    "bankName": "Pay using BHIM (Powered by PAYTM ) also accepts UPI",
                    "paymentMode": "13",
                    "message": "Nil",
                    "enableFlag": "true",
                    "displaySection": "17",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                },
                {
                    "bankId": "151",
                    "bankName": "Amazon Pay UPI",
                    "paymentMode": "13",
                    "message": "Nil",
                    "enableFlag": "true",
                    "displaySection": "17",
                    "cardInputFlag": "0",
                    "travelAgentFlag": "0",
                    "txnPasswordMandatory": "false",
                    "groupId": "0",
                    "displaySequence": "0",
                    "juspayEnableFlag": "0"
                }
            ],
            "captchaDto": {
                "captchaType": "BOOKINGWS",
                "captchaQuestion": "iVBORw0KGgoAAAANSUhEUgAAAMsAAAAyCAYAAADyZi/iAAAECElEQVR42u2cT2QdQRzHa0VURYknKirK01NULz30EDmUioioClWRQ0WoqoqIUFHVQ4SeoqdeqiIqQkQPEVWiengqSlT1UBWqKnqoUBVREY/XWaZsf3552Z2dzb4/nw8jz+7M9+1mf9+3M7+d2RMnAAAAAAAAAAAAAADypSLgPwKQwiwVj2RpWE3H/FkSm/+YUnTQPm/bRlkkgjBLVmY5yMEsBVN+il0lB+2S0Ag1C0QQZsnKLEvHbRa7/YZyLPcS6I4r7YeIHsziS7fVlD0hfzUPs9h9y2L3rildMTSLynmsEDmYxadZxoT0t6yP4QizdJiyI6qsx9BcF21+mXKGyMEsPs3yTkg/zNMsdv+I0p0araJ3R6k/QtQ0lgF6TJk35Xs4qDZl35QfNjM0kLVZjEy3kC2bcjZvs9g6q8qdolOp12W7alFWia7GMUm7KS9jDLTf/utKZGSWOSG7dhx3t5hm6bQGqWoCpfv1WzMV1K9RPibITG3ZtKpXsxiJFmVscK1WzGLrjSr/j+HI/ltJumtQf2ZZUy5w+At/0ZTAlvDzk2hWJwOzDAvJsPsX1JJZDrlz7NgfD+3O85oIaxyjyAANxyh9Ver32bFMJQOzvBGSs8eVZEhoFm1MsqSMaXarjbeg/szyRVzgiRhtJnybxTQ/p0gWa9Estv7tGN3Vu0RYY2W+/nuecVS3x7YLbLbMp1lmZCIhiyD3qaPcCRMfP9SPWWbFBZ5JEdxpAjU037bLM4mczaI9oa/YbUUirLHMIvvYAwnaDnoM1AHl+UVQ62ax7bS5X+NEV+OZRaZpCwnaFjwGqjTtXNZB7lOHdT3NYZb9FAES+AgSm24tC6luzAK1ZpaDNBfZk1keCJmNPAIVs0A93Fm+CpmxhO3LHo4hiLPQDLMwZsltzGKaXFGW7Z5MqCGzUW0Ox9Ems1mYBY4aWB9rNixchy4knjpobAiNPgeNfqGxiVlAXuTHKZ6zzKbs5xeUaTOXHM5hQWhMOWhMCo0FzALyIvfm9QRfmTLzyfEcbgqd9w4am4fNIsYsEL3Qcm7YZIw2U2nnhoXmcH0JhNBpUWb6DiVof115INqKWUC70HLW8UHWs45N1cvKd55OcQ7TSsD3xGjXoxht2uH7MUsTGeaVEvvh2pULkW6XXM+ynMIsz0TTFymPP1DezVWx45nBqBHN51N227xSvxR3mg1maV6zJF0p+dk1dWyDVb6dsdfTOZRSvJcsbNvu+N2YpQkNsxJzDX6Ha5Ao60C2PJ5DYGcE7CYwSVj3kcsdBbNgmjBD9txmxsq2bNuVgP1pgyTMVolm9zM4h1Y7Flu0ma69yLmEd7UPdt9w0oegmAUAAAAAAAAAAAAAAAAAAAAAAAAAAOqav6tONipWbdteAAAAAElFTkSuQmCC",
                "captchaTime": "2024-05-29T07:13:38.631",
                "timeStamp": "2024-05-29T07:13:38.631",
                "nlpcaptchEnabled": "false",
                "captcha": "10"
            },
            "zeroFareBooking": "false"
        },
        headers:{
            "Authorization": "Bearer 3176ed17-dde6-4999-9732-cfb85e75e9d3",
            "csref":""
        }
    },
    refreshBookingCaptcha:{
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/captchaganetate/clientTxnId/BOOKINGWS?nlpCaptchaException=true",
        method:"GET",
        title:"",
        desc:"",
        dataReceived:{
            "captchaType": "BOOKINGWS",
            "captchaQuestion": "iVBORw0KGgoAAAANSUhEUgAAAMsAAAAyCAYAAADyZi/iAAAECElEQVR42u1cQUhVQRQV+UiEBCIhESG0iGgRgoSEuBAkWombkGgZRIiIRJsWIiJChLgKIVq0CHETLkKiTUi4kEBCIiSCkE+4EEEiQj5tXndqhMftPv3z33vz7vx3DlyU9/8/78z8e3Rm7sxraQEAAAAAAAAAAAAAAAAAAACA8BBF0SWKRxQrFLsUhxS/7c9de32K4kpZ9UcMyBpdCZAaddyjl+K9I+06RZ+SPvKmH2YpsVno5YWU9AsF949X/TBLCc1ClysUq8LbtykmKXooWu17WymuUkxQfBI+88bwee6XQvTDLAGZJUPeZUZtxvVjdX72rn1/HMue+6UQ/TBLycxCNPcZ7S+KfkeOPoqfjGfMU58Uph9mKZFZiKKT4gejvdMg1y3GY5KvM+f+KFQ/zFIus8zx8XpKvteMbyYF1007vKpS1CxfTZN+mKUkZrET3X1G2ZuSs4fx7R9NrOttD/3oolhLWJ+oadd/Av90QrsmkN26zTLI6LYy0viR8Q45rO6ZYdXXYxbzapr1n8C7KLTHFElHkdn6zcKHMI8z0jjDeOcczPLqyBRWX3zJ9zLFC836E95TibWLz4kGkdVhmGWF0Y1kpHGY8a44mMXgoJ7hlEb9wuvtFO+ENu6lHTICfs2yw+guZKTxHOPdcTTLSKj62WtnhSFdZBcsuhv5vvNAacySpmOEQlxrRhorvO7h0J5Nh/uo0x+73i2Y+e+8ypjI1/cNs2Rnltw6jU9iHdozWcR/2az0x1bU9oS2mc2dZ3x+3zBLc5tlIGSzGP1CkTSy86s2TCTCnbP4GsYcOiRbW+D6a8K1Z8jc8M1SZXTnc5ogV/Noj0b9AqaQtc25dDysbek1NP0MprjajqxtDrPwot5sRhqn6y0WpjSLOv0CTI3lFDI3fLMM5bRdZJPx3sjJLOr0J+xpe9voYTishukxi4+NiAdZbkTUrt9W7NezOj0Ksygxi+WbyXmL+3ye7dGo3xpmQ1o+hlnCNot0eOp2g1yjwonFrpzNolI//dpB8UHIzeUWIEyzWM57QpIMOHL0C8dyJ320R6t+a5gtwTAvkcmBmsXyLgnFtXGHZOUFwlWf7dGq326m3BYM8xzZHK5ZKsJ43eDzMY8SGk94lJBZLj3t2Sxq9VvDfBHus4iMDtAsMf4nKeeLT11WfXKYg6nUb3cFVIX7zSOrAzVLbPl0zTHJNlwfP5TjHEylfmuY78K9Z5HZgZoldi/zYO2HdltJ1Z4XT/yLrK09GvWbA2rRv4eSYw9ZSQzbllB4ewD9ACBPWr81eiQY+oGyGeaisN3ELMFeg34A+D/hrgs1ir2sHh4B/UCzGWbUFgHjYeobHdAPAAAAAAAAAAAAAAAAAAAAAAAAAMXgD5ooDkiVI5vJAAAAAElFTkSuQmCC",
            "captchaTime": "2024-05-29T07:44:23.805",
            "timeStamp": "2024-05-29T07:44:23.806",
            "nlpcaptchEnabled": "false",
            "captcha": "10"
        },
        headers:{
            "Authorization": "Bearer 3176ed17-dde6-4999-9732-cfb85e75e9d3",
            "csref":""
        }
    },
    verifyBookingCaptcha:{
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/captchaverify/clientTxnId/BOOKINGWS/captcha-txt",
        method:"GET",
        title:"",
        desc:"",
        dataReceived:[{
            "captchaType": "BOOKINGWS",
            "captchaQuestion": "iVBORw0KGgoAAAANSUhEUgAAAMsAAAAyCAYAAADyZi/iAAAEOUlEQVR42u2dT2RcQRzHY0VUD0vUqqgoVTnEqhJVEVGhqqJ6KFVV1cMSOVTl1kNVVISoiqjKpYeqilwqYkX1UjlUVOmhcqha1oqKqrJW1VpraX/Dbxk/896+/7N57/vhd9n33m9+nZlv38xv5k0GBgAAAAAAAAAAAAAAAAAAAECi/BMEeSYMIfy3yP6S/SArk70mmyc7j1YFaRRLOyb/h2TLZKNoYZAWsWzGLUYWzRBaGlgRS8ByhnjYpHM5TEx0KUd2gmyW7AHZe7KOQTRfyUbQ2uCoiKUkiqrFEZMaepGtGQRTVcJCi4OjIJY9UdTjOGOix2bI6sLVNloc9LVYyO24KEYNlU7FHRM9OmUYls16eO4S2QZn2tqceVNJg00vzwOIJUwZq6KYnaRi4gm+zieXewtk7zwkDnbJTib5ZgYZEAu5HCT7LYq5nqBY8vx20BlzEErFR6atyskFiAViicz/bcMaSC7JmHj4pHPfcM+uYai4wkPIHFuR7Kk2tNuCWCCWKP1/EEUsJx0TubgrXG6I63PiukpxT7r4mzSkwSEWiCWU79OG/nTGglimhMvP4npNXC958DkHsUAsUfpekhNjGzGRi2PCZUNkvnQqPvx+h1gglij85jj1qnPHVkxyE6b2+zNx7YkPn4sQC8QShd9Z4brea2KfoFja2u87ftdhXP6NEAvEEshvWbhetRmTy5tFprWHffgchlgglrA+Rwwr5+O2YuoxZ2mF2IeWg1gglrA+H3ldNU9ILNNO8cgFy35KkIBsiKXqNxUbs1gc11nwZgE2O+aMcNlUwyDLMckV/HntWh1zFmCrY24Il+s2Y+L9W22nhVFkw0A/dcwJyzGtCHcfxXWsswArHXNBuNu3GZNhYq+40mPY6GcFvwKxQCxBfe332t2bVEwsgoZwteVwb81pTuPiv4S9YRBLUD8XDSer5JOOib/Bf2Hox9+cJu8Ou46ne7yxmhALxBLUz0vh6k3cMXHqtsAT7QX+ytF0ussXdV+PMh2/Z9HuKfJv3TLeQiwQi18fxw3/005HFVMIWjwJH/RQZsG0i9iFmuFLyQ56VHbE0gnoYy7oJDkmsRyorJbfs8JYMGWP3+AXDLE20aPSK5RcFI2tPqYSfh4mIJY2zy2q2lnHatJdjKBeuqe7HPCQq8OfG6jFzavijarzE70qvWLJi8b+hVrxVX/XvGTbQDobG4fQ+au/dVF/i6iV9Da2XN1eQq14rrsxw24F/LmLlDb2qGET4UTG62Tb44EaZ3k+o7OHXpW+DlHgifCh256pjNZNF5UwuKWE0/0Umj8gU+s5z+W2fn7DFNG70tMRWi6ZpbrplMYMi8UPKlN2Ez0sG2JR20DOoYYCiUX93ZcLqLn0dYQ/LJgmC0StI9zweuJKhuZx98he8daZOtdXi63BJ2yuhdmhAAAAAAAAAAAAAABC8h81Gwh3rFyAVQAAAABJRU5ErkJggg==",
            "captchaTime": "2024-05-29T08:02:22.358",
            "status": "FAIL",
            "error": "Invalid Captcha",
            "timeStamp": "2024-05-29T08:02:22.359",
            "nlpcaptchEnabled": "false",
            "captcha": "10"
        },
        {
            "status": "SUCCESS",
            "timeStamp": "2024-05-29T08:00:41.771"
        }]
    },
    initiatePayment:{
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/bookingInitPayment/clientTxnId?insurenceApplicable=",
        method:"POST",
        title:"",
        desc:"",
        dataSent:{
            "bankId": 113,
            "txnType": 1,
            "paramList": [],
            "amount": "1499.05",
            "transationId": 0,
            "txnStatus": 1
        },
        dataReceived:{
            "transationId": "0",
            "bankId": "113",
            "txnType": "0",
            "txnStatus": "12",
            "txnDate": "2024-05-29T08:03:47.027",
            "amount": "1499.05",
            "timeStamp": "2024-05-29T08:03:47.058",
            "upiModeOpted": "0",
            "remainingBalance": "0.0",
            "loyaltyNum": "0",
            "withoutOTP": "false",
            "paramList": [
                {
                    "key": "TXN",
                    "value": "100005012582280"
                },
                {
                    "key": "REDIRECT",
                    "value": "TRUE"
                },
                {
                    "key": "SEGREGATE_BOOKING_ENQUIRY",
                    "value": "1"
                }
            ]
        }
    },
    paymentRedirect:{
        url:"https://www.wps.irctc.co.in/eticketing/PaymentRedirect",
        method:"POST",
        type:"DOC",
        dataSent:{
            type:"FormData",
            data:{
            "token": "access_token",
            "txn": "irctcId:clientTxnId",
            "irctcId:clientTxnId": "17722503.002892261716950923577--14670519362053372.0689132398",
            "irctcId:clientTxnId": "118709258.815940381716951790759--896062331966959.1760117803",

        }}
    },
    bookingData:{
        url:"https://www.wps.irctc.co.in/eticketing/protected/mapps1/bookingData/Client-txn-id",
        method:"GET",
        auth:true,
        dataReceived:{
            "userDetail": {
                "existenceFlag": "false",
                "mpOldStatus": "0",
                "spouseOldStatus": "0",
                "mpCardExpFlag": "false",
                "funcType": "0",
                "mpSpouseFlag": "0",
                "spouseExistenceFlag": "false",
                "mpFileExistFlag": "false",
                "updatePhoto": "false",
                "cardStatus": "1",
                "userName": "DCwWPIazYymQtJ/B9uc16w==",
                "userId": "100000173374614",
                "firstName": "aadvik swaraj",
                "gender": "M",
                "dob": "90tA/t1j2Ud8VM6SxjzUfA==",
                "email": "yiZ1J9y6yn3JjjSzdRKr/6/BVdCUsv/ft2N5cE5KMMU=",
                "countryId": "94",
                "mobile": "o5wWs2Ikyy3KfB4NWNQZFw==",
                "isdCode": "91",
                "verified": "true",
                "emailVerified": "true",
                "mobileVerified": "true",
                "userEnableState": "1",
                "mobileAppConfigDTO": {
                    "formFillCheckStartTime": "460",
                    "formFillCheckEndTime": "720",
                    "captchaFillCheckStartTime": "465",
                    "captchaFillCheckEndTime": "720",
                    "minmPsgnInputTime": "20000#20000#25000#25000#30000#30000",
                    "minmCaptchaInputTime": "0",
                    "minmPaymentTime": "5000",
                    "formFillCheckEnable": "1",
                    "paymentCompletCheckEnable": "1",
                    "gstEnable": "true"
                },
                "informationMessage": [
                    {
                        "message": "IR recovers only 57% of cost of travel on an average.",
                        "popup": "false",
                        "paramName": "ERS"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "GOVT_ADS_ENABLE"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "CAPTCHA_POC_ENABLE"
                    }
                ],
                "lastTxnId": "100005020211037",
                "lastTxnStatus": "Not Booked",
                "lastTxnTimeStamp": "2024-06-01T21:40:01.828",
                "showLastTxn": "false",
                "rdsFlag": "0",
                "aadhaarVerifyFlag": "0",
                "eWalletExpireFlag": "false",
                "eWalletAadhaarRegisterFlag": "true",
                "renewFlag": "0",
                "otpLogin": "0",
                "rolles": [
                    "1",
                    "1",
                    "0",
                    "1",
                    "0",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "1"
                ],
                "timeStamp": "2024-06-01T21:41:12.950",
                "kycAddressDisplayStat": "false",
                "deactivationReason": "0",
                "enable": "1",
                "userIdHash": "44459D6D422C3AC8F4F5C751F8F755FA",
                "aadhaarReverifyFlag": "false",
                "masterList": "1",
                "fevJourney": "true",
                "softBankList": [
                    {
                        "bankId": "101",
                        "bankName": "IRCTC SBI Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "102",
                        "bankName": "IRCTC BOB Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "103",
                        "bankName": "IRCTC HDFC Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    }
                ],
                "ersTktSendEmailFlag": "1",
                "ersTktDownloadFlag": "1",
                "ratingOptions": [
                    {
                        "v": "1",
                        "en": "Look and feel",
                        "hi": "उपयोगकर्ता अंतरपृष्ठ"
                    },
                    {
                        "v": "2",
                        "en": "Captcha",
                        "hi": "कॅप्चा"
                    },
                    {
                        "v": "3",
                        "en": "Login",
                        "hi": "लॉगिन"
                    },
                    {
                        "v": "4",
                        "en": "OTP",
                        "hi": "ओटीपी"
                    },
                    {
                        "v": "5",
                        "en": "Payment Issues",
                        "hi": "भुगतान सम्बंधित समस्याएं"
                    },
                    {
                        "v": "6",
                        "en": "Registration",
                        "hi": "पंजीकरण"
                    },
                    {
                        "v": "7",
                        "en": "Others",
                        "hi": "अन्य"
                    }
                ]
            },
            "retryBooking": "false",
            "timeStamp": "2024-06-01T21:41:12.958",
            "bankErrorFlag": "true"
        },
        dataReceived2:{
            "bookingResponseDTO": [
                {
                    "trainName": "PNBE KOTA EXP",
                    "distance": "1240",
                    "boardingStn": "PNBE",
                    "boardingDate": "2024-06-12T11:45:00.000",
                    "journeyDate": "2024-06-12T00:00:00.000",
                    "trainOwner": "0",
                    "reservationCharge": "20",
                    "superfastCharge": "0",
                    "fuelAmount": "0.0",
                    "tatkalFare": "0",
                    "serviceTax": "0.0",
                    "cateringCharge": "0",
                    "totalFare": "550",
                    "wpServiceCharge": "10.0",
                    "wpServiceTax": "1.8",
                    "insuredPsgnCount": "0",
                    "serverId": "DM06AP30MS4",
                    "timeStamp": "2024-06-11T01:42:49.494",
                    "otpAuthenticationFlag": "0",
                    "reservationId": "0",
                    "lapNumber": "0",
                    "numberOfpassenger": "1",
                    "timeTableFlag": "0",
                    "pnrNumber": "6137092266",
                    "departureTime": "11:45",
                    "arrivalTime": "11:55",
                    "reasonType": "S",
                    "reasonIndex": "1",
                    "informationMessage": [
                        "N        S",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    "destArrvDate": "2024-06-13T11:55:00.000",
                    "bookingDate": "2024-06-11T01:42:48.000",
                    "numberOfChilds": "0",
                    "numberOfAdults": "1",
                    "trainNumber": "13239",
                    "fromStn": "PNBE",
                    "destStn": "KOTA",
                    "resvnUptoStn": "KOTA",
                    "fromStnName": "PATNA JN",
                    "boardingStnName": "PATNA JN",
                    "resvnUptoStnName": "KOTA JN",
                    "journeyClass": "SL",
                    "journeyQuota": "GN",
                    "insuranceCharge": "0.0",
                    "totalCollectibleAmount": "561.8",
                    "psgnDtlList": [
                        {
                            "passengerSerialNumber": "1",
                            "passengerName": "SDGSDDF",
                            "passengerAge": "25",
                            "passengerGender": "M",
                            "passengerBedrollChoice": "false",
                            "passengerIcardFlag": "false",
                            "childBerthFlag": "true",
                            "passengerNationality": "IN",
                            "fareChargedPercentage": "0.0",
                            "validationFlag": "N",
                            "bookingStatusIndex": "3",
                            "bookingStatus": "WL",
                            "bookingBerthNo": "112",
                            "bookingStatusDetails": "WL/112",
                            "currentStatusIndex": "3",
                            "currentStatus": "WL",
                            "currentBerthNo": "49",
                            "passengerNetFare": "550",
                            "currentStatusDetails": "WL/49",
                            "insuranceIssued": "No",
                            "psgnwlType": "0",
                            "dropWaitlistFlag": "false"
                        }
                    ],
                    "clientTransactionId": "lx9emsqf",
                    "scheduleDepartureFlag": "true",
                    "scheduleArrivalFlag": "true",
                    "serviceChargeTotal": "11.8",
                    "ticketType": "E-ticket",
                    "bookedQuota": "GENERAL",
                    "ersGovMsg": "false",
                    "avlForVikalp": "true",
                    "ersDisplayMessage": [
                        "IR recovers only 57% of cost of travel on an average.",
                        "This ticket is booked on a personal user ID. Its sale/purchase is an offence u/s 143 of the Railways Act, 1989.",
                        "For enquiry and integrated railway helpline, please dial 139."
                    ],
                    "gstCharge": {
                        "totalPRSGst": "0.0",
                        "irctcCgstCharge": "0.0",
                        "irctcSgstCharge": "0.0",
                        "irctcIgstCharge": "1.8",
                        "irctcUgstCharge": "0.0",
                        "totalIrctcGst": "1.8"
                    },
                    "gstFlag": "false",
                    "ticketStatus": "WL",
                    "monthBkgTicket": "1",
                    "sai": "false",
                    "journeyLap": "0",
                    "sectorId": "false",
                    "canSpouseFlag": "false",
                    "mahakalFlag": "false",
                    "rrHbFlag": "YY",
                    "mealChoiceEnable": "false",
                    "complaintFlag": "0",
                    "qrCodeText": "PNR No.:6137092266,\nTXN ID:100005038582292,\nPassenger Name:SDGSDDF,\n\t\tGender:M,\n\t\tAge:25,\n\t\tStatus:WL/112,\nQuota:GENERAL (GN),\nTrain No.:13239,\nTrain Name:PNBE KOTA EXP,\nScheduled Departure:12-Jun-2024 11:45,\nDate Of Journey:12-Jun-2024,\nBoarding Station:PATNA JN - PNBE,\nClass:SLEEPER_CLASS (SL),\nFrom:PATNA JN - PNBE,\nTo:KOTA JN - KOTA,\nTicket Fare: Rs550.0,\nIRCTC C Fee: Rs11.8+PG Charges Extra",
                    "bankNameDis": "Credit cards/Debit cards/Netbanking/UPI (Powered by IRCTC)",
                    "bankPaymentMode": "Multiple Payment Service (Credit & Debit Cards/ Netbanking /Wallets)",
                    "travelnsuranceRefundAmount": "0.0",
                    "addOnOpted": "false",
                    "metroServiceOpted": "false",
                    "eligibleForMetro": "false",
                    "multiLapFlag": "false",
                    "mlUserId": "0",
                    "mlReservationStatus": "0",
                    "mlTransactionStatus": "0",
                    "mlJourneyType": "0",
                    "timeDiff": "0",
                    "mlTimeDiff": "0",
                    "totalRefundAmount": "0.0",
                    "travelProtectOpted": "false",
                    "dmrcRefundStatusId": "0",
                    "dmrcRefundAmount": "0.0",
                    "dmrcCancellationCharge": "0.0",
                    "dmrcCancellationId": "0",
                    "dmrcBooking": "false",
                    "postMealRefundStatusId": "0",
                    "postMealRefundAmount": "0.0",
                    "postMealCancellationCharge": "0.0",
                    "postMealComplaintFlag": "0",
                    "postMealOpt": "false",
                    "mealCancellationId": "0"
                }
            ],
            "userDetail": {
                "existenceFlag": "false",
                "mpOldStatus": "0",
                "spouseOldStatus": "0",
                "mpCardExpFlag": "false",
                "funcType": "0",
                "mpSpouseFlag": "0",
                "spouseExistenceFlag": "false",
                "mpFileExistFlag": "false",
                "updatePhoto": "false",
                "cardStatus": "1",
                "userName": "LWERnLhPitC4p0XJPggt3A==",
                "userId": "100000879734802",
                "firstName": "Lovely Gupta",
                "gender": "M",
                "dob": "YWsIAl53DeecXwGAm35ZYw==",
                "email": "ZDGxDwcB3W6lwEf3mt8Mil80Lpl1A9hxIwQAU3IEA9Q=",
                "countryId": "94",
                "mobile": "JgclM6M+8O1cQoOPYT6fbQ==",
                "isdCode": "91",
                "verified": "true",
                "emailVerified": "true",
                "mobileVerified": "true",
                "userEnableState": "1",
                "mobileAppConfigDTO": {
                    "formFillCheckStartTime": "460",
                    "formFillCheckEndTime": "720",
                    "captchaFillCheckStartTime": "465",
                    "captchaFillCheckEndTime": "720",
                    "minmPsgnInputTime": "20000#20000#25000#25000#30000#30000",
                    "minmCaptchaInputTime": "0",
                    "minmPaymentTime": "5000",
                    "formFillCheckEnable": "1",
                    "paymentCompletCheckEnable": "1",
                    "gstEnable": "true"
                },
                "informationMessage": [
                    {
                        "message": "IR recovers only 57% of cost of travel on an average.",
                        "popup": "false",
                        "paramName": "ERS"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "GOVT_ADS_ENABLE"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "CAPTCHA_POC_ENABLE"
                    }
                ],
                "lastTxnId": "100005038582292",
                "lastTxnStatus": "Booked",
                "lastTxnTimeStamp": "2024-06-11T01:41:49.298",
                "showLastTxn": "false",
                "rdsFlag": "0",
                "aadhaarVerifyFlag": "0",
                "eWalletExpireFlag": "false",
                "eWalletAadhaarRegisterFlag": "true",
                "renewFlag": "0",
                "otpLogin": "0",
                "rolles": [
                    "1",
                    "1",
                    "0",
                    "1",
                    "0",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "1"
                ],
                "timeStamp": "2024-06-11T01:42:49.487",
                "kycAddressDisplayStat": "false",
                "deactivationReason": "0",
                "enable": "1",
                "userIdHash": "8C05CA624251A65313F2B5283A30DCE4",
                "aadhaarReverifyFlag": "false",
                "masterList": "0",
                "fevJourney": "true",
                "softBankList": [
                    {
                        "bankId": "101",
                        "bankName": "IRCTC SBI Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "102",
                        "bankName": "IRCTC BOB Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "103",
                        "bankName": "IRCTC HDFC Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    }
                ],
                "ersTktSendEmailFlag": "1",
                "ersTktDownloadFlag": "1",
                "ratingOptions": [
                    {
                        "v": "1",
                        "en": "Look and feel",
                        "hi": "उपयोगकर्ता अंतरपृष्ठ"
                    },
                    {
                        "v": "2",
                        "en": "Captcha",
                        "hi": "कॅप्चा"
                    },
                    {
                        "v": "3",
                        "en": "Login",
                        "hi": "लॉगिन"
                    },
                    {
                        "v": "4",
                        "en": "OTP",
                        "hi": "ओटीपी"
                    },
                    {
                        "v": "5",
                        "en": "Payment Issues",
                        "hi": "भुगतान सम्बंधित समस्याएं"
                    },
                    {
                        "v": "6",
                        "en": "Registration",
                        "hi": "पंजीकरण"
                    },
                    {
                        "v": "7",
                        "en": "Others",
                        "hi": "अन्य"
                    }
                ]
            },
            "qrCodeText": "PNR No.:6137092266,\nTXN ID:100005038582292,\nPassenger Name:SDGSDDF,\n\t\tGender:M,\n\t\tAge:25,\n\t\tStatus:WL/112,\nQuota:GENERAL (GN),\nTrain No.:13239,\nTrain Name:PNBE KOTA EXP,\nScheduled Departure:12-Jun-2024 11:45,\nDate Of Journey:12-Jun-2024,\nBoarding Station:PATNA JN - PNBE,\nClass:SLEEPER_CLASS (SL),\nFrom:PATNA JN - PNBE,\nTo:KOTA JN - KOTA,\nTicket Fare: Rs550.0,\nIRCTC C Fee: Rs11.8+PG Charges Extra\n",
            "transactionId": "100005038582292",
            "bankNameDis": "Credit cards/Debit cards/Netbanking/UPI (Powered by IRCTC)",
            "bankPaymentMode": "Multiple Payment Service (Credit & Debit Cards/ Netbanking /Wallets)",
            "bookingDate": "2024-06-11T01:42:49.496",
            "totalCollectibleAmount": "561.8",
            "retryBooking": "false",
            "timeStamp": "2024-06-11T01:42:49.496",
            "bankErrorFlag": "false"
        },
        dataReceived3:{
            "bookingResponseDTO": [
                {
                    "errorMessage": "Choice of Confirm berths not met - (134972130)",
                    "otpAuthenticationFlag": "0",
                    "lapNumber": "0",
                    "retryBooking": "true",
                    "sai": "false",
                    "journeyLap": "0",
                    "sectorId": "false",
                    "canSpouseFlag": "false",
                    "mahakalFlag": "false",
                    "mealChoiceEnable": "false",
                    "complaintFlag": "0",
                    "travelnsuranceRefundAmount": "0.0",
                    "addOnOpted": "false",
                    "metroServiceOpted": "false",
                    "eligibleForMetro": "false",
                    "multiLapFlag": "false",
                    "mlUserId": "0",
                    "mlReservationStatus": "0",
                    "mlTransactionStatus": "0",
                    "mlJourneyType": "0",
                    "timeDiff": "0",
                    "mlTimeDiff": "0",
                    "totalRefundAmount": "0.0",
                    "travelProtectOpted": "false",
                    "dmrcRefundStatusId": "0",
                    "dmrcRefundAmount": "0.0",
                    "dmrcCancellationCharge": "0.0",
                    "dmrcCancellationId": "0",
                    "dmrcBooking": "false",
                    "postMealRefundStatusId": "0",
                    "postMealRefundAmount": "0.0",
                    "postMealCancellationCharge": "0.0",
                    "postMealComplaintFlag": "0",
                    "postMealOpt": "false",
                    "mealCancellationId": "0"
                }
            ],
            "userDetail": {
                "existenceFlag": "false",
                "mpOldStatus": "0",
                "spouseOldStatus": "0",
                "mpCardExpFlag": "false",
                "funcType": "0",
                "mpSpouseFlag": "0",
                "spouseExistenceFlag": "false",
                "mpFileExistFlag": "false",
                "updatePhoto": "false",
                "cardStatus": "1",
                "userName": "KILA2llDh1yPvFoF4ta83g==",
                "userId": "100000879731311",
                "firstName": "Arbind Kumar Gupta",
                "gender": "M",
                "dob": "C2OYn1n0nMehoTar9zYqsQ==",
                "email": "TH3uvHi6kWCg7AGFo0DtRFDRY4EZvr5jTX8d2twlmYs=",
                "countryId": "94",
                "mobile": "7ZtybUJ/RpPv6Lm8OTxx6g==",
                "isdCode": "91",
                "verified": "true",
                "emailVerified": "true",
                "mobileVerified": "true",
                "userEnableState": "1",
                "mobileAppConfigDTO": {
                    "formFillCheckStartTime": "460",
                    "formFillCheckEndTime": "720",
                    "captchaFillCheckStartTime": "465",
                    "captchaFillCheckEndTime": "720",
                    "minmPsgnInputTime": "20000#20000#25000#25000#30000#30000",
                    "minmCaptchaInputTime": "0",
                    "minmPaymentTime": "5000",
                    "formFillCheckEnable": "1",
                    "paymentCompletCheckEnable": "1",
                    "gstEnable": "true"
                },
                "informationMessage": [
                    {
                        "message": "IR recovers only 57% of cost of travel on an average.",
                        "popup": "false",
                        "paramName": "ERS"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "GOVT_ADS_ENABLE"
                    },
                    {
                        "message": "0",
                        "popup": "false",
                        "paramName": "CAPTCHA_POC_ENABLE"
                    }
                ],
                "lastTxnId": "100005040952703",
                "lastTxnStatus": "Settled",
                "lastTxnTimeStamp": "2024-06-12T10:01:38.144",
                "showLastTxn": "false",
                "rdsFlag": "0",
                "aadhaarVerifyFlag": "0",
                "eWalletExpireFlag": "false",
                "eWalletAadhaarRegisterFlag": "true",
                "renewFlag": "0",
                "otpLogin": "0",
                "rolles": [
                    "1",
                    "1",
                    "0",
                    "1",
                    "0",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "0",
                    "1",
                    "1",
                    "0",
                    "1"
                ],
                "timeStamp": "2024-06-12T10:02:47.488",
                "kycAddressDisplayStat": "false",
                "deactivationReason": "0",
                "enable": "1",
                "userIdHash": "EEF08E677D6EE30BDDEFB312497D9523",
                "aadhaarReverifyFlag": "false",
                "masterList": "0",
                "fevJourney": "true",
                "softBankList": [
                    {
                        "bankId": "101",
                        "bankName": "IRCTC SBI Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "102",
                        "bankName": "IRCTC BOB Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    },
                    {
                        "bankId": "103",
                        "bankName": "IRCTC HDFC Co-Brand Loyalty Credit Card",
                        "paymentMode": "0",
                        "enableFlag": "false",
                        "displaySection": "0",
                        "cardInputFlag": "0",
                        "travelAgentFlag": "0",
                        "txnPasswordMandatory": "false",
                        "groupId": "0",
                        "displaySequence": "0",
                        "juspayEnableFlag": "0"
                    }
                ],
                "ersTktSendEmailFlag": "1",
                "ersTktDownloadFlag": "1",
                "ratingOptions": [
                    {
                        "v": "1",
                        "en": "Look and feel",
                        "hi": "उपयोगकर्ता अंतरपृष्ठ"
                    },
                    {
                        "v": "2",
                        "en": "Captcha",
                        "hi": "कॅप्चा"
                    },
                    {
                        "v": "3",
                        "en": "Login",
                        "hi": "लॉगिन"
                    },
                    {
                        "v": "4",
                        "en": "OTP",
                        "hi": "ओटीपी"
                    },
                    {
                        "v": "5",
                        "en": "Payment Issues",
                        "hi": "भुगतान सम्बंधित समस्याएं"
                    },
                    {
                        "v": "6",
                        "en": "Registration",
                        "hi": "पंजीकरण"
                    },
                    {
                        "v": "7",
                        "en": "Others",
                        "hi": "अन्य"
                    }
                ]
            },
            "totalCollectibleAmount": "0.0",
            "retryBooking": "true",
            "timeStamp": "2024-06-12T10:02:48.514",
            "bankErrorFlag": "false"
        }
    },
    cancelTicket:{
        url:"https://www.irctc.co.in/eticketing/protected/mapps1/cancelTkt/TransactionId/YNNNNN?dmrcToken=0"
    }
};

// Encrypt function
function encryptMessage(message, passphrase) {
    // Encrypt using AES with CBC mode and PKCS7 padding
    passphrase = CryptoJS.enc.Utf8.parse(passphrase);
    let encrypted = CryptoJS.AES.encrypt(message, passphrase, {iv: passphrase}).toString();
    return encrypted;
};

// Decrypt function
function decryptMessage(encryptedMessage, passphrase) {
    // Decrypt using AES with CBC mode and PKCS7 padding
    passphrase = CryptoJS.enc.Utf8.parse(passphrase);
    let decrypted = CryptoJS.AES.decrypt(encryptedMessage,passphrase, {iv: passphrase}).toString(CryptoJS.enc.Utf8);
    return decrypted;
  };