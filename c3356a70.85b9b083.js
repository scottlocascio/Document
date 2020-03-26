(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var b=a(1),n=a(9),r=(a(0),a(187)),c={id:"arduino_atcmd_e",title:"Connect to Azure IoT Hub using Arduino Mega 2560 + WizFi360 Azure AT Command",sidebar_label:"Arduino AT Cmd",keywords:["WizFi360","Arduino"]},l={id:"connect_to_cloud/arduino_atcmd_e",title:"Connect to Azure IoT Hub using Arduino Mega 2560 + WizFi360 Azure AT Command",description:"## Getting Started\r",source:"@site/docs\\connect_to_cloud\\arduino_azure_atcmd_e.md",permalink:"/Document/docs/connect_to_cloud/arduino_atcmd_e",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/connect_to_cloud/arduino_azure_atcmd_e.md",sidebar_label:"Arduino AT Cmd",sidebar:"docs",previous:{title:"Arduino Mega 2560 + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/arduino_atcmd"},next:{title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud55c Azure IoT Hub \uc5f0\ub3d9 \uc608\uc81c",permalink:"/Document/docs/connect_to_cloud/arduino_mqtt"}},i=[{value:"Getting Started",id:"getting-started",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"Introduction",id:"introduction",children:[]},{value:"Device preparation",id:"device-preparation",children:[{value:"Hardware configuration",id:"hardware-configuration",children:[]},{value:"Device connection",id:"device-connection",children:[]}]},{value:"AT Commands",id:"at-commands",children:[{value:"1. Set current WiFi mode (not saved in flash)",id:"1-set-current-wifi-mode-not-saved-in-flash",children:[]},{value:"2. Enable DHCP",id:"2-enable-dhcp",children:[]},{value:"3. List available APs",id:"3-list-available-aps",children:[]},{value:"4. Connect to AP",id:"4-connect-to-ap",children:[]},{value:"5. Azure IoT Hub configuration set",id:"5-azure-iot-hub-configuration-set",children:[]},{value:"6. Set MQTT Topic",id:"6-set-mqtt-topic",children:[]},{value:"7. Connect to Azure",id:"7-connect-to-azure",children:[]},{value:"8. Publish a message",id:"8-publish-a-message",children:[]}]},{value:"Running sample code",id:"running-sample-code",children:[{value:"Download sample Arduino code",id:"download-sample-arduino-code",children:[]},{value:"Modify parameters",id:"modify-parameters",children:[]},{value:"Results",id:"results",children:[]}]}],o={rightToc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("h3",{id:"hardware-requirement"},"Hardware Requirement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Arduino Mega 2560 board"),Object(r.b)("li",{parentName:"ul"},"Desktop or laptop computer"),Object(r.b)("li",{parentName:"ul"},"USB cable"),Object(r.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),Object(r.b)("h3",{id:"software-requirement"},"Software Requirement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MS Azure Account (To create Azure account ",Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://azure.microsoft.com/ko-kr/free/"}),"press here"),".)"),Object(r.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://catalog.azureiotsolutions.com/docs?title=Azure/azure-iot-device-ecosystem/manage_iot_hub"}),"Azure IoT Explorer")),Object(r.b)("li",{parentName:"ul"},"Arduino IDE")),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"Microsoft Azure is cloud computing service.\nUsing ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"}),"WizFi360")," we can connect to Azure services, transmit data and monitor status."),Object(r.b)("p",null,"In this document we will guide how to connect Arduino Mega 2560 + WizFi360 to MS Azure Services.\nThic process consists of following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Azure IoT Hub preparation"),Object(r.b)("li",{parentName:"ul"},"IoT device registration"),Object(r.b)("li",{parentName:"ul"},"Connect to Azure IoT and transmit data")),Object(r.b)("p",null,"For Azure IoT Hub setup and IoT device creation please refer to ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"}),"Azure Cloud Introduction"),"."),Object(r.b)("p",null,"For this guide ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start"}),"WizFi360-EVB-Shield")," Evaluation board was used."),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png",alt:null}))),Object(r.b)("h2",{id:"device-preparation"},"Device preparation"),Object(r.b)("h3",{id:"hardware-configuration"},"Hardware configuration"),Object(r.b)("p",null,"In this guide we will use Arduino Mega2560 and WizFi360-EVB-SHield. In Arduino Code we will use UART1 for ocmmunication with WizFi360-EVB-Shield. To do so we need to connect TX1, RX1 pins of Arduino board with RXD and TXD pins of WizFi360-EVB-Shield. Also, switch RXD/TXD Selector OFF in order to enable communication through pin not USB."),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_wizfi360_connection_new.png",alt:null}))),Object(r.b)("p",null,"To use DHT11 sensor from WizFi360-EVB-Shield connect D14 pin on EVB board to D14 pin on Arduino Mega."),Object(r.b)("h3",{id:"device-connection"},"Device connection"),Object(r.b)("p",null,"After configuring hardware connect Arduino Mega2560 board with PC. CHeck port number in Device Manager."),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_device_manager_port.png",alt:null}))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If everything setup correctly, then COM port can be checked in Device manager as shown on picture above.")),Object(r.b)("h2",{id:"at-commands"},"AT Commands"),Object(r.b)("h3",{id:"1-set-current-wifi-mode-not-saved-in-flash"},"1. Set current WiFi mode (not saved in flash)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CWMODE_CUR\nSyntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWMODE:","<","mode",">"," ",Object(r.b)("br",null)," OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR=","<","mode",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Mode"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Station mode")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"SoftAP mode (factory default)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Station+SoftAP mode")))),Object(r.b)("h3",{id:"2-enable-dhcp"},"2. Enable DHCP"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CWDHCP_CUR\nSyntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWDHCP_CUR?"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWDHCP_CUR:","<","para",">"," ",Object(r.b)("br",null)," OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR=","<","para",">",",","<","en",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"DIsable SoftAP DHCP & Station DHCP.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Enable SoftAP DHCP & Disable Station DHCP.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"2"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Disable SoftAP DHCP & enable Station DHCP.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"3"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Enable SoftAP DHCP & Station DHCP. (factory default)")))),Object(r.b)("h3",{id:"3-list-available-aps"},"3. List available APs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CWLAP\nSyntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWLAP"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWLAP:(","[<","ecn",">",",","<","ssid",">",",","<","rssi",">",",","<","mac",">",",","<","channel",">",",","<","wps",">]",")")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ecn",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0: Open ",Object(r.b)("br",null)," 1: WEP ",Object(r.b)("br",null)," 2: WPA_PSK",Object(r.b)("br",null),"3: WPA2_PSK",Object(r.b)("br",null),"4:WPA_WPA2_PSK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ssid",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. AP\uc758 ssid")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","rssi",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"signal strength")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","mac",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. AP\uc758 mac")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","wps",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0: Disable WPS ",Object(r.b)("br",null)," 1: Enable WPS")))),Object(r.b)("h3",{id:"4-connect-to-ap"},"4. Connect to AP"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+CWJAP_CUR\nSyntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWJAP_CUR=","<","ssid",">",",","<","pwd",">",",","[<","bssid",">]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWJAP_CUR:","<","ssid",">",",","<","bssid",">",",","<","channel",">",",","<","rssi",">"," ",Object(r.b)("br",null)," OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ssid",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. Target AP' ssid. MAX: 32 bytes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","pwd",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. Target AP' password. MAX: 64-byte ASCII")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","bssid",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, target AP' MAC address, used in case if there are several APs with same SSID.")))),Object(r.b)("h3",{id:"5-azure-iot-hub-configuration-set"},"5. Azure IoT Hub configuration set"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+AZSET"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+AZSET=","<","iothub_name",">",",","<","device_id",">",",","<","device_key",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","hub ID",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. IoT Hub ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","device ID",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. IoT Device ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","key",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, IoT Device Key")))),Object(r.b)("h3",{id:"6-set-mqtt-topic"},"6. Set MQTT Topic"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+MQTTTOPIC"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+MQTTTOPIC=","<","publish topic",">",",","<","subscribe topic",">",",","<","subscribe topic2",">",",","<","subscribe topic3",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("p",null,"Defined values:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","publish topic",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, topic where WizFi360 will publish")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, topic where WizFi360 will subscribe")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic2",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, topic where WizFi360 will subscribe")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic3",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, topic where WizFi360 will subscribe")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"This command shall be set before connecting to broker."),Object(r.b)("li",{parentName:"ul"},"<","subscribe topic2",">"," & ","<","subscribe topic3",">"," are available in Firmware v1.0.5.0 and later."))),Object(r.b)("h3",{id:"7-connect-to-azure"},"7. Connect to Azure"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+AZCON"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+AZCON"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"CONNECT ",Object(r.b)("br",null)," OK")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note:\n\u2022 Before sending this ocmmand, AT+AZSET command & AT+MQTTTOPIC command shall be set.\n\u2022 After connection data can be sent to Azure server using AT+MQTTPUB command.\n\u2022 For more details please refer to ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support"}),"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support"),".")),Object(r.b)("h3",{id:"8-publish-a-message"},"8. Publish a message"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"AT Command:")," AT+MQTTPUB"),Object(r.b)("p",null,"Syntax:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+MQTTPUB=","<","message",">"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note:\n\u2022 This command shall be used when MQTT connection is established.\n\u2022 Topic where data will be published is set with AT+MQTTTOPIC command, user shall define topic before connecting to broker.")),Object(r.b)("h2",{id:"running-sample-code"},"Running sample code"),Object(r.b)("h3",{id:"download-sample-arduino-code"},"Download sample Arduino code"),Object(r.b)("p",null,"Please download Arduino sample code from link below and open ino project file."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Sample can be found at below path."),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"samples/Wi-Fi/Arduino_Azure_Atcmd_Wizfi360"))),Object(r.b)("h3",{id:"modify-parameters"},"Modify parameters"),Object(r.b)("p",null,"Update your credentials (WiFi ssid, WiFi pwd, Hub ID, Device ID, Device Key) in order to connect to Azure IoT Hub."),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{className:"language-cpp"}),'//WiFi credentials\nchar ssid[] = "XXXXXXXXXXXXXXXXXX";    // your network SSID (name)\nchar pass[] = "XXXXXXXXXXXXXXXXXX";        // your network password\n\n//Azure Hub & Device credentials\nchar IotHubname[] = "XXXXXXXXXXXXXXX";\nchar DeviceId[] = "XXXXXXXXXXXXX";\nchar DevicePrimaryKey[] = "XXXXXXXXXXXXXXXXXX";\n')),Object(r.b)("p",null,"As shown on below picture, check your board & port, then compile code."),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_port_check.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_board_check.png",alt:null}))),Object(r.b)("p",null,"When compile is done, upload to board. When upload is done, you will see 'avrdude done. Thank you.' message. "),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_ide_upload.png",alt:null}))),Object(r.b)("p",null,"Use Serial monitor to check if code was successfully uploaded to Adruino Mega2560 board."),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_serial_monitor_results.JPG",alt:null}))),Object(r.b)("h3",{id:"results"},"Results"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'Press "Start" button in Telemetry Section in IoT Hub Explorer.',Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},'"Start" button shall be pressed before sending data using MQTTPUB commands.'))),Object(r.b)("li",{parentName:"ol"},"Check data sent with MQTTPUB command.")),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Arduino_Azure_atcmd_IoT_Explorer_results.JPG",alt:null}))))}d.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=b,j=p["".concat(c,".").concat(m)]||p[m]||O[m]||r;return a?n.a.createElement(j,l({ref:t},o,{components:a})):n.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);