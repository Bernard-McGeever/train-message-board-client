import {HuxleyTwoGetResponse} from "../models/HuxleyTwoGetResponse";

export const MOCK_DEPARTURES_AND_ARRIVALS_BHM: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Manchester Piccadilly",
          "crs": "MAN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Southampton Central",
          "crs": "SOU",
          "via": "via Coventry",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "XC360700",
      "serviceIdPercentEncoded": "XB1aTxpcus%2F6LT1oFPhdxg%3D%3D",
      "serviceIdGuid": "4f5a1d5c-5c1a-cfba-fa2d-3d6814f85dc6",
      "serviceIdUrlSafe": "XB1aTxpcus_6LT1oFPhdxg",
      "sta": "10:59",
      "eta": "11:08",
      "std": "11:04",
      "etd": "11:09",
      "platform": "2A",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "XB1aTxpcus/6LT1oFPhdxg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Bromsgrove",
          "crs": "BMV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Lichfield Trent Valley",
          "crs": "LTV",
          "via": "via Four Oaks",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "qBBhQwB2iOFneaXoJs0Ecg%3D%3D",
      "serviceIdGuid": "436110a8-7600-e188-6779-a5e826cd0472",
      "serviceIdUrlSafe": "qBBhQwB2iOFneaXoJs0Ecg",
      "sta": "11:03",
      "eta": "11:07",
      "std": "11:05",
      "etd": "11:09",
      "platform": "8",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 6,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "qBBhQwB2iOFneaXoJs0Ecg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Hereford",
          "crs": "HFD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "NkmmhNqeyMdjxw04Z7ZKlw%3D%3D",
      "serviceIdGuid": "84a64936-9eda-c7c8-63c7-0d3867b64a97",
      "serviceIdUrlSafe": "NkmmhNqeyMdjxw04Z7ZKlw",
      "sta": "11:09",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "10B",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 3,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "NkmmhNqeyMdjxw04Z7ZKlw==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT354800",
      "serviceIdPercentEncoded": "h6IY8glmuJMD82RGcvAx7Q%3D%3D",
      "serviceIdGuid": "f218a287-6609-93b8-03f3-644672f031ed",
      "serviceIdUrlSafe": "h6IY8glmuJMD82RGcvAx7Q",
      "sta": "11:06",
      "eta": "11:19",
      "std": "11:10",
      "etd": "11:20",
      "platform": "1",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by train crew being delayed",
      "serviceID": "h6IY8glmuJMD82RGcvAx7Q==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Walsall",
          "crs": "WSL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "K4g%2BYLiJHuJNUHUyVp%2F1mA%3D%3D",
      "serviceIdGuid": "603e882b-89b8-e21e-4d50-7532569ff598",
      "serviceIdUrlSafe": "K4g-YLiJHuJNUHUyVp_1mA",
      "sta": null,
      "eta": null,
      "std": "11:10",
      "etd": "On time",
      "platform": null,
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 4,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a fault with the signalling system",
      "delayReason": null,
      "serviceID": "K4g+YLiJHuJNUHUyVp/1mA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Nottingham",
          "crs": "NOT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "rCqPGFuCgshwgY2R1uGocA%3D%3D",
      "serviceIdGuid": "188f2aac-825b-c882-7081-8d91d6e1a870",
      "serviceIdUrlSafe": "rCqPGFuCgshwgY2R1uGocA",
      "sta": null,
      "eta": null,
      "std": "11:12",
      "etd": "On time",
      "platform": "10A",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "rCqPGFuCgshwgY2R1uGocA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Newcastle",
          "crs": "NCL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Plymouth",
          "crs": "PLY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "XC159700",
      "serviceIdPercentEncoded": "FE0eDMR%2F8tuijC7eZD%2BMCw%3D%3D",
      "serviceIdGuid": "0c1e4d14-7fc4-dbf2-a28c-2ede643f8c0b",
      "serviceIdUrlSafe": "FE0eDMR_8tuijC7eZD-MCw",
      "sta": "11:08",
      "eta": "On time",
      "std": "11:12",
      "etd": "On time",
      "platform": "11B",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "FE0eDMR/8tuijC7eZD+MCw==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Walsall",
          "crs": "WSL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "%2FdHmxOFbu%2BDJEDzBeNKWPg%3D%3D",
      "serviceIdGuid": "c4e6d1fd-5be1-e0bb-c910-3cc178d2963e",
      "serviceIdUrlSafe": "_dHmxOFbu-DJEDzBeNKWPg",
      "sta": "11:12",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "2A",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 4,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a fault with the signalling system",
      "delayReason": null,
      "serviceID": "/dHmxOFbu+DJEDzBeNKWPg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Northampton",
          "crs": "NMP",
          "via": "via Coventry",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "S846eNCJ%2FIvUFshHE0r07Q%3D%3D",
      "serviceIdGuid": "783ace4b-89d0-8bfc-d416-c847134af4ed",
      "serviceIdUrlSafe": "S846eNCJ_IvUFshHE0r07Q",
      "sta": null,
      "eta": null,
      "std": "11:14",
      "etd": "On time",
      "platform": "4A",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 4,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "S846eNCJ/IvUFshHE0r07Q==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "10"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "11"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Preston",
          "crs": "PRE",
          "via": "via Wigan North Western",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT304800",
      "serviceIdPercentEncoded": "aEwmbpCmbGCq4V7V2bSv2A%3D%3D",
      "serviceIdGuid": "6e264c68-a690-606c-aae1-5ed5d9b4afd8",
      "serviceIdUrlSafe": "aEwmbpCmbGCq4V7V2bSv2A",
      "sta": "11:07",
      "eta": "On time",
      "std": "11:15",
      "etd": "On time",
      "platform": "6",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "aEwmbpCmbGCq4V7V2bSv2A==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:09:17.5696665+00:00",
  "locationName": "Birmingham New Street",
  "crs": "BHM",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": [
    {
      "value": "Buses are replacing trains between Walsall and Rugeley Trent Valley. More details can be found in <a href=\"http://nationalrail.co.uk/service_disruptions/308166.aspx\">Latest Travel News</a>."
    }
  ],
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_PAD: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Bristol Temple Meads",
          "crs": "BRI",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "GhVBvrD5NT16ph6UriOH3g%3D%3D",
      "serviceIdGuid": "be41151a-f9b0-3d35-7aa6-1e94ae2387de",
      "serviceIdUrlSafe": "GhVBvrD5NT16ph6UriOH3g",
      "sta": "11:08",
      "eta": "11:10",
      "std": null,
      "etd": null,
      "platform": "4",
      "operator": "Great Western Railway",
      "operatorCode": "GW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a broken down train",
      "delayReason": "This train has been delayed by a broken down train",
      "serviceID": "GhVBvrD5NT16ph6UriOH3g==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Heathrow Airport T4",
          "crs": "HAF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "w0gVQOoHq0qCj6tkgk%2BrTg%3D%3D",
      "serviceIdGuid": "401548c3-07ea-4aab-828f-ab64824fab4e",
      "serviceIdUrlSafe": "w0gVQOoHq0qCj6tkgk-rTg",
      "sta": "11:09",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "11",
      "operator": "Elizabeth Line",
      "operatorCode": "XR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "w0gVQOoHq0qCj6tkgk+rTg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Heathrow Airport T5",
          "crs": "HWV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "BWTcY5fxr%2FiCHPAkkhjbRg%3D%3D",
      "serviceIdGuid": "63dc6405-f197-f8af-821c-f0249218db46",
      "serviceIdUrlSafe": "BWTcY5fxr_iCHPAkkhjbRg",
      "sta": null,
      "eta": null,
      "std": "11:10",
      "etd": "On time",
      "platform": null,
      "operator": "Heathrow Express",
      "operatorCode": "HX",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "BWTcY5fxr/iCHPAkkhjbRg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Reading",
          "crs": "RDG",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "qcklzeNEIyMSXJBUU3mdAQ%3D%3D",
      "serviceIdGuid": "cd25c9a9-44e3-2323-125c-905453799d01",
      "serviceIdUrlSafe": "qcklzeNEIyMSXJBUU3mdAQ",
      "sta": null,
      "eta": null,
      "std": "11:11",
      "etd": "On time",
      "platform": null,
      "operator": "Elizabeth Line",
      "operatorCode": "XR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "qcklzeNEIyMSXJBUU3mdAQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Carmarthen",
          "crs": "CMN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "QqjPntv121XYE5484QwONQ%3D%3D",
      "serviceIdGuid": "9ecfa842-f5db-55db-d813-9e3ce10c0e35",
      "serviceIdUrlSafe": "QqjPntv121XYE5484QwONQ",
      "sta": "11:11",
      "eta": "11:29",
      "std": null,
      "etd": null,
      "platform": "8",
      "operator": "Great Western Railway",
      "operatorCode": "GW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by a late running freight train",
      "serviceID": "QqjPntv121XYE5484QwONQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Reading",
          "crs": "RDG",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "WzHfwQ6dcfWWlsYkuDfwSw%3D%3D",
      "serviceIdGuid": "c1df315b-9d0e-f571-9696-c624b837f04b",
      "serviceIdUrlSafe": "WzHfwQ6dcfWWlsYkuDfwSw",
      "sta": "11:17",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "12",
      "operator": "Elizabeth Line",
      "operatorCode": "XR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "WzHfwQ6dcfWWlsYkuDfwSw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Heathrow Airport T5",
          "crs": "HWV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "ZLig%2F%2FiTFQkwfP04HUsf7A%3D%3D",
      "serviceIdGuid": "ffa0b864-93f8-0915-307c-fd381d4b1fec",
      "serviceIdUrlSafe": "ZLig__iTFQkwfP04HUsf7A",
      "sta": "11:17",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "6",
      "operator": "Heathrow Express",
      "operatorCode": "HX",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "ZLig//iTFQkwfP04HUsf7A==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Heathrow Airport T4",
          "crs": "HAF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "k1WRtNdAM15m8WLqUNiyLQ%3D%3D",
      "serviceIdGuid": "b4915593-40d7-5e33-66f1-62ea50d8b22d",
      "serviceIdUrlSafe": "k1WRtNdAM15m8WLqUNiyLQ",
      "sta": null,
      "eta": null,
      "std": "11:18",
      "etd": "On time",
      "platform": "11",
      "operator": "Elizabeth Line",
      "operatorCode": "XR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "k1WRtNdAM15m8WLqUNiyLQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Oxford",
          "crs": "OXF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "8XBKB4voiuFPkExBxt7PZw%3D%3D",
      "serviceIdGuid": "074a70f1-e88b-e18a-4f90-4c41c6decf67",
      "serviceIdUrlSafe": "8XBKB4voiuFPkExBxt7PZw",
      "sta": null,
      "eta": null,
      "std": "11:20",
      "etd": "On time",
      "platform": "9",
      "operator": "Great Western Railway",
      "operatorCode": "GW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "8XBKB4voiuFPkExBxt7PZw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Heathrow Airport T5",
          "crs": "HWV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "dEIwdeMFFWSnQXIyiHVYWA%3D%3D",
      "serviceIdGuid": "75304274-05e3-6415-a741-723288755858",
      "serviceIdUrlSafe": "dEIwdeMFFWSnQXIyiHVYWA",
      "sta": "11:24",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "11",
      "operator": "Elizabeth Line",
      "operatorCode": "XR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "dEIwdeMFFWSnQXIyiHVYWA==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:10:36.5441027+00:00",
  "locationName": "London Paddington",
  "crs": "PAD",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_EUS: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Liverpool Lime Street",
          "crs": "LIV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT856800",
      "serviceIdPercentEncoded": "WoeKgQ3e8IlcDpZVSBPljA%3D%3D",
      "serviceIdGuid": "818a875a-de0d-89f0-5c0e-96554813e58c",
      "serviceIdUrlSafe": "WoeKgQ3e8IlcDpZVSBPljA",
      "sta": "10:03",
      "eta": "11:23",
      "std": null,
      "etd": null,
      "platform": "4",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of an object being caught on the overhead electric wires",
      "delayReason": "This train has been delayed by an object being caught on the overhead electric wires",
      "serviceID": "WoeKgQ3e8IlcDpZVSBPljA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT561802",
      "serviceIdPercentEncoded": "mJWuLbUr8%2F%2F0uZS%2BeLzFww%3D%3D",
      "serviceIdGuid": "2dae9598-2bb5-fff3-f4b9-94be78bcc5c3",
      "serviceIdUrlSafe": "mJWuLbUr8__0uZS-eLzFww",
      "sta": "10:57",
      "eta": "Delayed",
      "std": null,
      "etd": null,
      "platform": "5",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "mJWuLbUr8//0uZS+eLzFww==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Liverpool Lime Street",
          "crs": "LIV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT858800",
      "serviceIdPercentEncoded": "fOBMwKer5aQWcYy9QLIJbg%3D%3D",
      "serviceIdGuid": "c04ce07c-aba7-a4e5-1671-8cbd40b2096e",
      "serviceIdUrlSafe": "fOBMwKer5aQWcYy9QLIJbg",
      "sta": "11:00",
      "eta": "11:26",
      "std": null,
      "etd": null,
      "platform": "15",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by this train being late from the depot",
      "serviceID": "fOBMwKer5aQWcYy9QLIJbg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "10"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "11"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Liverpool Lime Street",
          "crs": "LIV",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT808800",
      "serviceIdPercentEncoded": "k6TrlnAabQEi2%2FLVL7kKtQ%3D%3D",
      "serviceIdGuid": "96eba493-1a70-016d-22db-f2d52fb90ab5",
      "serviceIdUrlSafe": "k6TrlnAabQEi2_LVL7kKtQ",
      "sta": null,
      "eta": null,
      "std": "11:07",
      "etd": "Delayed",
      "platform": null,
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "k6TrlnAabQEi2/LVL7kKtQ==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A5"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B5"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Chester",
          "crs": "CTR",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT421800",
      "serviceIdPercentEncoded": "C2v2NyLsYWdk1pAY%2BqxsiQ%3D%3D",
      "serviceIdGuid": "37f66b0b-ec22-6761-64d6-9018faac6c89",
      "serviceIdUrlSafe": "C2v2NyLsYWdk1pAY-qxsiQ",
      "sta": null,
      "eta": null,
      "std": "11:10",
      "etd": "On time",
      "platform": null,
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "C2v2NyLsYWdk1pAY+qxsiQ==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Tring",
          "crs": "TRI",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "DbRFXzfg4Bvmahl5hzz%2B1g%3D%3D",
      "serviceIdGuid": "5f45b40d-e037-1be0-e66a-1979873cfed6",
      "serviceIdUrlSafe": "DbRFXzfg4Bvmahl5hzz-1g",
      "sta": "11:10",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "10",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "DbRFXzfg4Bvmahl5hzz+1g==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Northampton",
          "crs": "NMP",
          "via": "via Milton Keynes Central",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "BUGJMQL05oE3fafUdfK%2FHg%3D%3D",
      "serviceIdGuid": "31894105-f402-81e6-377d-a7d475f2bf1e",
      "serviceIdUrlSafe": "BUGJMQL05oE3fafUdfK_Hg",
      "sta": null,
      "eta": null,
      "std": "11:15",
      "etd": "On time",
      "platform": "11",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "BUGJMQL05oE3fafUdfK/Hg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Watford Junction",
          "crs": "WFJ",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "LO723100",
      "serviceIdPercentEncoded": "AA7%2FoWmfahWBkiNVd9L9GA%3D%3D",
      "serviceIdGuid": "a1ff0e00-9f69-156a-8192-235577d2fd18",
      "serviceIdUrlSafe": "AA7_oWmfahWBkiNVd9L9GA",
      "sta": null,
      "eta": null,
      "std": "11:15",
      "etd": "On time",
      "platform": "9",
      "operator": "London Overground",
      "operatorCode": "LO",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "AA7/oWmfahWBkiNVd9L9GA==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT624800",
      "serviceIdPercentEncoded": "7lUucB1k4MoOVOa6Wflxgw%3D%3D",
      "serviceIdGuid": "702e55ee-641d-cae0-0e54-e6ba59f97183",
      "serviceIdUrlSafe": "7lUucB1k4MoOVOa6Wflxgw",
      "sta": "11:16",
      "eta": "11:28",
      "std": null,
      "etd": null,
      "platform": "4",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by this train being late from the depot",
      "serviceID": "7lUucB1k4MoOVOa6Wflxgw==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Manchester Piccadilly",
          "crs": "MAN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT714800",
      "serviceIdPercentEncoded": "7yauC%2B7Imn1ShfrCoNNPvQ%3D%3D",
      "serviceIdGuid": "0bae26ef-c8ee-7d9a-5285-fac2a0d34fbd",
      "serviceIdUrlSafe": "7yauC-7Imn1ShfrCoNNPvQ",
      "sta": null,
      "eta": null,
      "std": "11:20",
      "etd": "11:45",
      "platform": null,
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by an object being caught on the overhead electric wires earlier today",
      "serviceID": "7yauC+7Imn1ShfrCoNNPvQ==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:11:56.5788488+00:00",
  "locationName": "London Euston",
  "crs": "EUS",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_DBY: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Matlock Bath",
          "crs": "MTB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Derby",
          "crs": "DBY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "%2BgHldJaND%2BIkiZqpjGrZDg%3D%3D",
      "serviceIdGuid": "74e501fa-8d96-e20f-2489-9aa98c6ad90e",
      "serviceIdUrlSafe": "-gHldJaND-IkiZqpjGrZDg",
      "sta": "10:46",
      "eta": "11:16",
      "std": null,
      "etd": null,
      "platform": "4B",
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a passenger being taken ill on this train",
      "delayReason": "This train has been delayed by a passenger being taken ill on this train",
      "serviceID": "+gHldJaND+IkiZqpjGrZDg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Crewe",
          "crs": "CRE",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Nottingham",
          "crs": "NOT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "c%2FSa4TJzzsmuY0X7bF6rSw%3D%3D",
      "serviceIdGuid": "e19af473-7332-c9ce-ae63-45fb6c5eab4b",
      "serviceIdUrlSafe": "c_Sa4TJzzsmuY0X7bF6rSw",
      "sta": "11:19",
      "eta": "11:30",
      "std": "11:22",
      "etd": "11:31",
      "platform": "4A",
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by a speed restriction",
      "serviceID": "c/Sa4TJzzsmuY0X7bF6rSw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "London St Pancras (Intl)",
          "crs": "STP",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Sheffield",
          "crs": "SHF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "dgcMvMFZxH2dtboR89vwQg%3D%3D",
      "serviceIdGuid": "bc0c0776-59c1-7dc4-9db5-ba11f3dbf042",
      "serviceIdUrlSafe": "dgcMvMFZxH2dtboR89vwQg",
      "sta": "11:27",
      "eta": "11:31",
      "std": "11:28",
      "etd": "11:32",
      "platform": "3",
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by a late running train being in front of this one",
      "serviceID": "dgcMvMFZxH2dtboR89vwQg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Newcastle",
          "crs": "NCL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Plymouth",
          "crs": "PLY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "TgUgHWSm8tNoAOkyRm7oPA%3D%3D",
      "serviceIdGuid": "1d20054e-a664-d3f2-6800-e932466ee83c",
      "serviceIdUrlSafe": "TgUgHWSm8tNoAOkyRm7oPA",
      "sta": "11:26",
      "eta": "On time",
      "std": "11:31",
      "etd": "On time",
      "platform": "2",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 7,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "TgUgHWSm8tNoAOkyRm7oPA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Sheffield",
          "crs": "SHF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London St Pancras (Intl)",
          "crs": "STP",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "mrehH2W245EJpcK3Qi66Rw%3D%3D",
      "serviceIdGuid": "1fa1b79a-b665-91e3-09a5-c2b7422eba47",
      "serviceIdUrlSafe": "mrehH2W245EJpcK3Qi66Rw",
      "sta": "11:30",
      "eta": "On time",
      "std": "11:32",
      "etd": "On time",
      "platform": "6",
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "mrehH2W245EJpcK3Qi66Rw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Derby",
          "crs": "DBY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Matlock",
          "crs": "MAT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "8cFyChydAV5SfyOOFmCHcw%3D%3D",
      "serviceIdGuid": "0a72c1f1-9d1c-5e01-527f-238e16608773",
      "serviceIdUrlSafe": "8cFyChydAV5SfyOOFmCHcw",
      "sta": null,
      "eta": null,
      "std": "11:33",
      "etd": "On time",
      "platform": "4B",
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "8cFyChydAV5SfyOOFmCHcw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Nottingham",
          "crs": "NOT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Cardiff Central",
          "crs": "CDF",
          "via": "via Gloucester",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "Xt0E4tAQc8JtrBpDQUImZw%3D%3D",
      "serviceIdGuid": "e204dd5e-10d0-c273-6dac-1a4341422667",
      "serviceIdUrlSafe": "Xt0E4tAQc8JtrBpDQUImZw",
      "sta": "11:35",
      "eta": "On time",
      "std": "11:38",
      "etd": "On time",
      "platform": "3A",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "Xt0E4tAQc8JtrBpDQUImZw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Cardiff Central",
          "crs": "CDF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Nottingham",
          "crs": "NOT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "9dNguHWGO3jncd4z4f%2Bo6g%3D%3D",
      "serviceIdGuid": "b860d3f5-8675-783b-e771-de33e1ffa8ea",
      "serviceIdUrlSafe": "9dNguHWGO3jncd4z4f-o6g",
      "sta": "11:31",
      "eta": "On time",
      "std": "11:40",
      "etd": "On time",
      "platform": "4A",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "9dNguHWGO3jncd4z4f+o6g==",
      "adhocAlerts": null
    }
  ],
  "busServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Derby",
          "crs": "DBY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "East Midlands Airport (Bus)",
          "crs": "EMA",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "GZ59ilb%2BNnTQZloR5POthA%3D%3D",
      "serviceIdGuid": "8a7d9e19-fe56-7436-d066-5a11e4f3ad84",
      "serviceIdUrlSafe": "GZ59ilb-NnTQZloR5POthA",
      "sta": null,
      "eta": null,
      "std": "11:24",
      "etd": "On time",
      "platform": null,
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 1,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "GZ59ilb+NnTQZloR5POthA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "East Midlands Airport (Bus)",
          "crs": "EMA",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Derby",
          "crs": "DBY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "rIojt8Et6MZsFAaFyLEjYw%3D%3D",
      "serviceIdGuid": "b7238aac-2dc1-c6e8-6c14-0685c8b12363",
      "serviceIdUrlSafe": "rIojt8Et6MZsFAaFyLEjYw",
      "sta": "11:26",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "East Midlands Railway",
      "operatorCode": "EM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 1,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "rIojt8Et6MZsFAaFyLEjYw==",
      "adhocAlerts": null
    }
  ],
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:12:53.302979+00:00",
  "locationName": "Derby",
  "crs": "DBY",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_GLC: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Paisley Canal",
          "crs": "PCN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "FRJ1fKwgac2JK%2FRxEiHB5Q%3D%3D",
      "serviceIdGuid": "7c751215-20ac-cd69-892b-f4711221c1e5",
      "serviceIdUrlSafe": "FRJ1fKwgac2JK_RxEiHB5Q",
      "sta": null,
      "eta": null,
      "std": "11:12",
      "etd": "On time",
      "platform": "13R",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "FRJ1fKwgac2JK/RxEiHB5Q==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Carlisle",
          "crs": "CAR",
          "via": "via Kilmarnock",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "cK4NtDYG1PbTIil33Sbwfw%3D%3D",
      "serviceIdGuid": "b40dae70-0636-f6d4-d322-2977dd26f07f",
      "serviceIdUrlSafe": "cK4NtDYG1PbTIil33Sbwfw",
      "sta": null,
      "eta": null,
      "std": "11:13",
      "etd": "On time",
      "platform": "6R",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "cK4NtDYG1PbTIil33Sbwfw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Newton",
          "crs": "NTN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "h4XBqq0%2Fp89ovy0f56u9%2Fg%3D%3D",
      "serviceIdGuid": "aac18587-3fad-cfa7-68bf-2d1fe7abbdfe",
      "serviceIdUrlSafe": "h4XBqq0_p89ovy0f56u9_g",
      "sta": "11:13",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "h4XBqq0/p89ovy0f56u9/g==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Lanark",
          "crs": "LNK",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "eTwF%2BD0n6UCIMEdhyecrCw%3D%3D",
      "serviceIdGuid": "f8053c79-273d-40e9-8830-4761c9e72b0b",
      "serviceIdUrlSafe": "eTwF-D0n6UCIMEdhyecrCw",
      "sta": "11:13",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "eTwF+D0n6UCIMEdhyecrCw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Larkhall",
          "crs": "LRH",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "ejaIdaohxPz4kZLmTxLcSA%3D%3D",
      "serviceIdGuid": "7588367a-21aa-fcc4-f891-92e64f12dc48",
      "serviceIdUrlSafe": "ejaIdaohxPz4kZLmTxLcSA",
      "sta": "11:15",
      "eta": null,
      "std": "11:16",
      "etd": "On time",
      "platform": "16",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a fault on a train in front of this one",
      "delayReason": null,
      "serviceID": "ejaIdaohxPz4kZLmTxLcSA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Larkhall",
          "crs": "LRH",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Dalmuir",
          "crs": "DMR",
          "via": "via Yoker",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "GMZxA4q63w8k93sk6KJopw%3D%3D",
      "serviceIdGuid": "0371c618-ba8a-0fdf-24f7-7b24e8a268a7",
      "serviceIdUrlSafe": "GMZxA4q63w8k93sk6KJopw",
      "sta": "11:14",
      "eta": "On time",
      "std": "11:17",
      "etd": "On time",
      "platform": "17",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "GMZxA4q63w8k93sk6KJopw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "East Kilbride",
          "crs": "EKL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "BdGPW3MVbVEptwA6eWluOw%3D%3D",
      "serviceIdGuid": "5b8fd105-1573-516d-29b7-003a79696e3b",
      "serviceIdUrlSafe": "BdGPW3MVbVEptwA6eWluOw",
      "sta": null,
      "eta": null,
      "std": "11:17",
      "etd": "On time",
      "platform": "9R",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "BdGPW3MVbVEptwA6eWluOw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": "via Shotts",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "AiNpNSc7yQ4357OdbPKDtg%3D%3D",
      "serviceIdGuid": "35692302-3b27-0ec9-37e7-b39d6cf283b6",
      "serviceIdUrlSafe": "AiNpNSc7yQ4357OdbPKDtg",
      "sta": null,
      "eta": null,
      "std": "11:17",
      "etd": "On time",
      "platform": "3R",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "AiNpNSc7yQ4357OdbPKDtg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Kilmarnock",
          "crs": "KMK",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "0zol3%2BuuLOgKcxuFCIfvdg%3D%3D",
      "serviceIdGuid": "df253ad3-aeeb-e82c-0a73-1b850887ef76",
      "serviceIdUrlSafe": "0zol3-uuLOgKcxuFCIfvdg",
      "sta": "11:17",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "0zol3+uuLOgKcxuFCIfvdg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Ardrossan Harbour",
          "crs": "ADS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "7svNJWqclNAYauR5oQxefA%3D%3D",
      "serviceIdGuid": "25cdcbee-9c6a-d094-186a-e479a10c5e7c",
      "serviceIdUrlSafe": "7svNJWqclNAYauR5oQxefA",
      "sta": null,
      "eta": null,
      "std": "11:18",
      "etd": "On time",
      "platform": "14R",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "7svNJWqclNAYauR5oQxefA==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:13:51.9252316+00:00",
  "locationName": "Glasgow Central",
  "crs": "GLC",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_MKC: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Crewe",
          "crs": "CRE",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "sV7hk8klMSA6a4DHvbgo%2FA%3D%3D",
      "serviceIdGuid": "93e15eb1-25c9-2031-3a6b-80c7bdb828fc",
      "serviceIdUrlSafe": "sV7hk8klMSA6a4DHvbgo_A",
      "sta": "11:14",
      "eta": "On time",
      "std": "11:15",
      "etd": "On time",
      "platform": "4",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "sV7hk8klMSA6a4DHvbgo/A==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Crewe",
          "crs": "CRE",
          "via": "via Nuneaton & Stafford",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "cDPttqEGGGWgBWHcIiWgmA%3D%3D",
      "serviceIdGuid": "b6ed3370-06a1-6518-a005-61dc2225a098",
      "serviceIdUrlSafe": "cDPttqEGGGWgBWHcIiWgmA",
      "sta": "11:18",
      "eta": "On time",
      "std": "11:19",
      "etd": "On time",
      "platform": "6",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "cDPttqEGGGWgBWHcIiWgmA==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Northampton",
          "crs": "NMP",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "nqN%2BdWWgsqQs6RfFgFPrxg%3D%3D",
      "serviceIdGuid": "757ea39e-a065-a4b2-2ce9-17c58053ebc6",
      "serviceIdUrlSafe": "nqN-dWWgsqQs6RfFgFPrxg",
      "sta": "11:20",
      "eta": "On time",
      "std": "11:20",
      "etd": "On time",
      "platform": "3",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "nqN+dWWgsqQs6RfFgFPrxg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Northampton",
          "crs": "NMP",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "Gocr2RIPb4G55kLlhwk9RA%3D%3D",
      "serviceIdGuid": "d92b871a-0f12-816f-b9e6-42e587093d44",
      "serviceIdUrlSafe": "Gocr2RIPb4G55kLlhwk9RA",
      "sta": "11:21",
      "eta": "On time",
      "std": "11:22",
      "etd": "On time",
      "platform": "1",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "Gocr2RIPb4G55kLlhwk9RA==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": "via Northampton",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "2VfcsJY1%2BcSPtLnaYgO%2F0g%3D%3D",
      "serviceIdGuid": "b0dc57d9-3596-c4f9-8fb4-b9da6203bfd2",
      "serviceIdUrlSafe": "2VfcsJY1-cSPtLnaYgO_0g",
      "sta": "11:25",
      "eta": "On time",
      "std": "11:32",
      "etd": "On time",
      "platform": "5",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "2VfcsJY1+cSPtLnaYgO/0g==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A5"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B5"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Chester",
          "crs": "CTR",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT421800",
      "serviceIdPercentEncoded": "19cOO41sxGEQkhzDgDvwaw%3D%3D",
      "serviceIdGuid": "3b0ed7d7-6c8d-61c4-1092-1cc3803bf06b",
      "serviceIdUrlSafe": "19cOO41sxGEQkhzDgDvwaw",
      "sta": "11:40",
      "eta": "On time",
      "std": "11:41",
      "etd": "On time",
      "platform": "6",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "19cOO41sxGEQkhzDgDvwaw==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Northampton",
          "crs": "NMP",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "wQ%2BJH1Ua%2Bs4MWxY6Lanxrg%3D%3D",
      "serviceIdGuid": "1f890fc1-1a55-cefa-0c5b-163a2da9f1ae",
      "serviceIdUrlSafe": "wQ-JH1Ua-s4MWxY6Lanxrg",
      "sta": "11:41",
      "eta": "On time",
      "std": "11:41",
      "etd": "On time",
      "platform": "1",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "wQ+JH1Ua+s4MWxY6Lanxrg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "2"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "3"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "4"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "5"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "6"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "7"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "8"
          },
          {
            "coachClass": "First",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "9"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Manchester Piccadilly",
          "crs": "MAN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "VT714800",
      "serviceIdPercentEncoded": "L9jK4t3TxGYXMTY0SJWBLw%3D%3D",
      "serviceIdGuid": "e2cad82f-d3dd-66c4-1731-36344895812f",
      "serviceIdUrlSafe": "L9jK4t3TxGYXMTY0SJWBLw",
      "sta": "11:50",
      "eta": "12:14",
      "std": "11:50",
      "etd": "12:15",
      "platform": "6",
      "operator": "Avanti West Coast",
      "operatorCode": "VT",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by an object being caught on the overhead electric wires earlier today",
      "serviceID": "L9jK4t3TxGYXMTY0SJWBLw==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "Birmingham New Street",
          "crs": "BHM",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "fhrYrz8tlwY4dF0wHAk2vg%3D%3D",
      "serviceIdGuid": "afd81a7e-2d3f-0697-3874-5d301c0936be",
      "serviceIdUrlSafe": "fhrYrz8tlwY4dF0wHAk2vg",
      "sta": "11:52",
      "eta": "On time",
      "std": "11:52",
      "etd": "On time",
      "platform": "4",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "fhrYrz8tlwY4dF0wHAk2vg==",
      "adhocAlerts": null
    },
    {
      "formation": {
        "avgLoading": 0,
        "avgLoadingSpecified": false,
        "coaches": [
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "A3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "A4"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B1"
          },
          {
            "coachClass": "Standard",
            "toilet": {
              "status": 1,
              "value": "Accessible"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B2"
          },
          {
            "coachClass": "First",
            "toilet": {
              "status": 1,
              "value": "Standard"
            },
            "loading": 0,
            "loadingSpecified": false,
            "number": "B3"
          },
          {
            "coachClass": "Standard",
            "toilet": null,
            "loading": 0,
            "loadingSpecified": false,
            "number": "B4"
          }
        ]
      },
      "origin": [
        {
          "locationName": "London Euston",
          "crs": "EUS",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Milton Keynes Central",
          "crs": "MKC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "lmMot%2FvRrgfSIjH9rl7X%2Fg%3D%3D",
      "serviceIdGuid": "b7286396-d1fb-07ae-d222-31fdae5ed7fe",
      "serviceIdUrlSafe": "lmMot_vRrgfSIjH9rl7X_g",
      "sta": "11:54",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "2",
      "operator": "West Midlands Trains",
      "operatorCode": "LM",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 8,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "lmMot/vRrgfSIjH9rl7X/g==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:14:38.6982642+00:00",
  "locationName": "Milton Keynes Central",
  "crs": "MKC",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_CDF: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Fishguard Harbour",
          "crs": "FGH",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Cardiff Central",
          "crs": "CDF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "StdIvyuow%2BM7cijvm3G7ow%3D%3D",
      "serviceIdGuid": "bf48d74a-a82b-e3c3-3b72-28ef9b71bba3",
      "serviceIdUrlSafe": "StdIvyuow-M7cijvm3G7ow",
      "sta": "10:49",
      "eta": "11:21",
      "std": "10:53",
      "etd": null,
      "platform": null,
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a fault on this train",
      "delayReason": "This train has been delayed by a fault on this train",
      "serviceID": "StdIvyuow+M7cijvm3G7ow==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Bargoed",
          "crs": "BGD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Penarth",
          "crs": "PEN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "AW742800",
      "serviceIdPercentEncoded": "HB4alyTNCZIyenv1VHL0lw%3D%3D",
      "serviceIdGuid": "971a1e1c-cd24-9209-327a-7bf55472f497",
      "serviceIdUrlSafe": "HB4alyTNCZIyenv1VHL0lw",
      "sta": "11:15",
      "eta": "On time",
      "std": "11:16",
      "etd": "On time",
      "platform": "8",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "HB4alyTNCZIyenv1VHL0lw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Penarth",
          "crs": "PEN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Rhymney",
          "crs": "RHY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "AW735700",
      "serviceIdPercentEncoded": "DtXygfXgD1QnfbzKksW%2B8Q%3D%3D",
      "serviceIdGuid": "81f2d50e-e0f5-540f-277d-bcca92c5bef1",
      "serviceIdUrlSafe": "DtXygfXgD1QnfbzKksW-8Q",
      "sta": "11:15",
      "eta": "On time",
      "std": "11:16",
      "etd": "On time",
      "platform": "6",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "DtXygfXgD1QnfbzKksW+8Q==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Swansea",
          "crs": "SWA",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "London Paddington",
          "crs": "PAD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "7FCyyDVWcbGPfnaaZ8HTlw%3D%3D",
      "serviceIdGuid": "c8b250ec-5635-b171-8f7e-769a67c1d397",
      "serviceIdUrlSafe": "7FCyyDVWcbGPfnaaZ8HTlw",
      "sta": "11:16",
      "eta": "11:18",
      "std": "11:18",
      "etd": "11:19",
      "platform": "2",
      "operator": "Great Western Railway",
      "operatorCode": "GW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "7FCyyDVWcbGPfnaaZ8HTlw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Hereford",
          "crs": "HFD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Maesteg",
          "crs": "MST",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "AW903000",
      "serviceIdPercentEncoded": "VtBrC7M9zIWDKDDPSBMCbQ%3D%3D",
      "serviceIdGuid": "0b6bd056-3db3-85cc-8328-30cf4813026d",
      "serviceIdUrlSafe": "VtBrC7M9zIWDKDDPSBMCbQ",
      "sta": "11:16",
      "eta": "On time",
      "std": "11:19",
      "etd": "On time",
      "platform": "4A",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "VtBrC7M9zIWDKDDPSBMCbQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Radyr",
          "crs": "RDR",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Coryton",
          "crs": "COY",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "AW832700",
      "serviceIdPercentEncoded": "Gwtbswpw8Gozwwh6On%2BIrw%3D%3D",
      "serviceIdGuid": "b35b0b1b-700a-6af0-33c3-087a3a7f88af",
      "serviceIdUrlSafe": "Gwtbswpw8Gozwwh6On-Irw",
      "sta": "11:20",
      "eta": "On time",
      "std": "11:21",
      "etd": "On time",
      "platform": "6",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "Gwtbswpw8Gozwwh6On+Irw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Penzance",
          "crs": "PNZ",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Cardiff Central",
          "crs": "CDF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "0JEAgl64lIfoAkZYRt%2FV4Q%3D%3D",
      "serviceIdGuid": "820091d0-b85e-8794-e802-465846dfd5e1",
      "serviceIdUrlSafe": "0JEAgl64lIfoAkZYRt_V4Q",
      "sta": "11:22",
      "eta": "11:24",
      "std": null,
      "etd": null,
      "platform": "4A",
      "operator": "Great Western Railway",
      "operatorCode": "GW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "0JEAgl64lIfoAkZYRt/V4Q==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Maesteg",
          "crs": "MST",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Hereford",
          "crs": "HFD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "OSyn2usmeE6LJOly9bhwPw%3D%3D",
      "serviceIdGuid": "daa72c39-26eb-4e78-8b24-e972f5b8703f",
      "serviceIdUrlSafe": "OSyn2usmeE6LJOly9bhwPw",
      "sta": "11:10",
      "eta": "11:15",
      "std": "11:23",
      "etd": "On time",
      "platform": "1",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "OSyn2usmeE6LJOly9bhwPw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Aberdare",
          "crs": "ABA",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Barry Island",
          "crs": "BYI",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "AW955700",
      "serviceIdPercentEncoded": "7YLYRCQFG4T%2BM801miWS1g%3D%3D",
      "serviceIdGuid": "44d882ed-0524-841b-fe33-cd359a2592d6",
      "serviceIdUrlSafe": "7YLYRCQFG4T-M801miWS1g",
      "sta": "11:25",
      "eta": "On time",
      "std": "11:25",
      "etd": "On time",
      "platform": "8",
      "operator": "Transport for Wales",
      "operatorCode": "AW",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "7YLYRCQFG4T+M801miWS1g==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Nottingham",
          "crs": "NOT",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Cardiff Central",
          "crs": "CDF",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "ArUopaune3OmR4JLiSmyeA%3D%3D",
      "serviceIdGuid": "a528b502-a7ab-737b-a647-824b8929b278",
      "serviceIdUrlSafe": "ArUopaune3OmR4JLiSmyeA",
      "sta": "11:25",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "2",
      "operator": "CrossCountry",
      "operatorCode": "XC",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "ArUopaune3OmR4JLiSmyeA==",
      "adhocAlerts": null
    }
  ],
  "busServices": null,
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:15:56.1922051+00:00",
  "locationName": "Cardiff Central",
  "crs": "CDF",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": null,
  "platformAvailable": true,
  "areServicesAvailable": true
};

export const MOCK_DEPARTURES_AND_ARRIVALS_EDB: HuxleyTwoGetResponse = {
  "trainServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Dundee",
          "crs": "DEE",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "drvz6ueytr4V1YqoI4sRQw%3D%3D",
      "serviceIdGuid": "eaf3bb76-b2e7-beb6-15d5-8aa8238b1143",
      "serviceIdUrlSafe": "drvz6ueytr4V1YqoI4sRQw",
      "sta": "11:17",
      "eta": "Cancelled",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": true,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a shortage of train crew",
      "delayReason": null,
      "serviceID": "drvz6ueytr4V1YqoI4sRQw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Cowdenbeath",
          "crs": "COW",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "s9MT8wvj%2BShwZJF%2BrHQDmA%3D%3D",
      "serviceIdGuid": "f313d3b3-e30b-28f9-7064-917eac740398",
      "serviceIdUrlSafe": "s9MT8wvj-ShwZJF-rHQDmA",
      "sta": null,
      "eta": null,
      "std": "11:18",
      "etd": "Cancelled",
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": true,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a shortage of train crew",
      "delayReason": null,
      "serviceID": "s9MT8wvj+ShwZJF+rHQDmA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Tweedbank",
          "crs": "TWB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "9m3sIuqghzZIPcHr8xgdBQ%3D%3D",
      "serviceIdGuid": "22ec6df6-a0ea-3687-483d-c1ebf3181d05",
      "serviceIdUrlSafe": "9m3sIuqghzZIPcHr8xgdBQ",
      "sta": "11:18",
      "eta": "Cancelled",
      "std": null,
      "etd": null,
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": true,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": "This train has been cancelled because of a shortage of train crew",
      "delayReason": null,
      "serviceID": "9m3sIuqghzZIPcHr8xgdBQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Aberdeen",
          "crs": "ABD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "SR031500",
      "serviceIdPercentEncoded": "r7jON1RFCysZkHobFh2imA%3D%3D",
      "serviceIdGuid": "37ceb8af-4554-2b0b-1990-7a1b161da298",
      "serviceIdUrlSafe": "r7jON1RFCysZkHobFh2imA",
      "sta": "11:22",
      "eta": "11:27",
      "std": null,
      "etd": null,
      "platform": "7",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": "This train has been delayed by a late running train being in front of this one",
      "serviceID": "r7jON1RFCysZkHobFh2imA==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Helensburgh Central",
          "crs": "HLC",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "r4PZZGzk%2Flz94GQWfuHLRQ%3D%3D",
      "serviceIdGuid": "64d983af-e46c-5cfe-fde0-64167ee1cb45",
      "serviceIdUrlSafe": "r4PZZGzk_lz94GQWfuHLRQ",
      "sta": "11:23",
      "eta": "11:26",
      "std": null,
      "etd": null,
      "platform": "12",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "r4PZZGzk/lz94GQWfuHLRQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Dunblane",
          "crs": "DBL",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "SR861200",
      "serviceIdPercentEncoded": "Gck11bka28NRndEhJ83FvQ%3D%3D",
      "serviceIdGuid": "d535c919-1ab9-c3db-519d-d12127cdc5bd",
      "serviceIdUrlSafe": "Gck11bka28NRndEhJ83FvQ",
      "sta": "11:26",
      "eta": "11:28",
      "std": null,
      "etd": null,
      "platform": "9",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "Gck11bka28NRndEhJ83FvQ==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Glasgow Central",
          "crs": "GLC",
          "via": "via Shotts",
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "nJU87hrvXC%2BU%2BKgbU%2FnVMg%3D%3D",
      "serviceIdGuid": "ee3c959c-ef1a-2f5c-94f8-a81b53f9d532",
      "serviceIdUrlSafe": "nJU87hrvXC-U-KgbU_nVMg",
      "sta": null,
      "eta": null,
      "std": "11:27",
      "etd": "On time",
      "platform": "14",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "nJU87hrvXC+U+KgbU/nVMg==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Aberdeen",
          "crs": "ABD",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "cZYUx025ySwiPPlBtxBW1Q%3D%3D",
      "serviceIdGuid": "c7149671-b94d-2cc9-223c-f941b71056d5",
      "serviceIdUrlSafe": "cZYUx025ySwiPPlBtxBW1Q",
      "sta": null,
      "eta": null,
      "std": "11:30",
      "etd": "On time",
      "platform": null,
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 0,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "cZYUx025ySwiPPlBtxBW1Q==",
      "adhocAlerts": null
    }
  ],
  "busServices": [
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Berwick-upon-Tweed",
          "crs": "BWK",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": null,
      "serviceIdPercentEncoded": "yZAmyFMWOXGn5Wn2jTSkGw%3D%3D",
      "serviceIdGuid": "c82690c9-1653-7139-a7e5-69f68d34a41b",
      "serviceIdUrlSafe": "yZAmyFMWOXGn5Wn2jTSkGw",
      "sta": "11:30",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "BUS",
      "operator": "London North Eastern Railway",
      "operatorCode": "GR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 1,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "yZAmyFMWOXGn5Wn2jTSkGw==",
      "adhocAlerts": null
    },
    {
      "formation": null,
      "origin": [
        {
          "locationName": "Dunbar",
          "crs": "DUN",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "destination": [
        {
          "locationName": "Edinburgh",
          "crs": "EDB",
          "via": null,
          "futureChangeTo": null,
          "assocIsCancelled": false
        }
      ],
      "currentOrigins": null,
      "currentDestinations": null,
      "rsid": "SR434500",
      "serviceIdPercentEncoded": "PhndsILtn4eD2myBi%2FodzQ%3D%3D",
      "serviceIdGuid": "b0dd193e-ed82-879f-83da-6c818bfa1dcd",
      "serviceIdUrlSafe": "PhndsILtn4eD2myBi_odzQ",
      "sta": "11:33",
      "eta": "On time",
      "std": null,
      "etd": null,
      "platform": "BUS",
      "operator": "ScotRail",
      "operatorCode": "SR",
      "isCircularRoute": false,
      "isCancelled": false,
      "filterLocationCancelled": false,
      "serviceType": 1,
      "length": 0,
      "detachFront": false,
      "isReverseFormation": false,
      "cancelReason": null,
      "delayReason": null,
      "serviceID": "PhndsILtn4eD2myBi/odzQ==",
      "adhocAlerts": null
    }
  ],
  "ferryServices": null,
  "generatedAt": "2022-10-15T10:16:30.6191008+00:00",
  "locationName": "Edinburgh",
  "crs": "EDB",
  "filterLocationName": null,
  "filtercrs": null,
  "filterType": 0,
  "nrccMessages": [
    {
      "value": "Trains running between Glasgow Queen Street and Oban / Mallaig may be delayed due to severe weather. More details can be found in <a href=\"//nationalrail.co.uk/service_disruptions/308164.aspx\">Latest Travel News</a>."
    }
  ],
  "platformAvailable": true,
  "areServicesAvailable": true
};
