(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var b=a(1),r=a(6),n=(a(0),a(146)),c={id:"mbed_atcmd",title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",sidebar_label:"Mbed AT Cmd"},l={id:"connect_to_cloud/mbed_atcmd",title:"NUCLEO-L476RG + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",description:"## \uc2dc\uc791\ud558\uae30 \uc804\uc5d0\r",source:"@site/docs\\connect_to_cloud\\mbed_azure_atcmd_e.md",permalink:"/Document/docs/connect_to_cloud/mbed_atcmd",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/connect_to_cloud/mbed_azure_atcmd_e.md",sidebar_label:"Mbed AT Cmd",sidebar:"docs",previous:{title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud55c Azure IoT Hub \uc5f0\ub3d9 \uc608\uc81c",permalink:"/Document/docs/connect_to_cloud/mbed_mqtt"},next:{title:"Arduino Mega 2560 + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/arduino_atcmd"}},i=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"\uc18c\uac1c",id:"\uc18c\uac1c",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc900\ube44",id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44",children:[{value:"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815",id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0",id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0",children:[]}]},{value:"AT \uba85\ub839\uc5b4",id:"at-\uba85\ub839\uc5b4",children:[{value:"1. Set current WiFi mode (not saved in flash)",id:"1-set-current-wifi-mode-not-saved-in-flash",children:[]},{value:"2. Enable DHCP",id:"2-enable-dhcp",children:[]},{value:"3. List available APs",id:"3-list-available-aps",children:[]},{value:"4. Connect to AP",id:"4-connect-to-ap",children:[]},{value:"5. Azure IoT Hub configuration set",id:"5-azure-iot-hub-configuration-set",children:[]},{value:"6. Set MQTT Topic",id:"6-set-mqtt-topic",children:[]},{value:"7. Connect to Azure",id:"7-connect-to-azure",children:[]},{value:"8. Publish a message",id:"8-publish-a-message",children:[]}]},{value:"\ub3d9\uc791 \uc608\uc81c",id:"\ub3d9\uc791-\uc608\uc81c",children:[{value:"Mbed \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc",id:"mbed-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc",children:[]},{value:"Modify parameters",id:"modify-parameters",children:[]},{value:"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc",id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc",children:[]}]},{value:"\ub354 \ubcf4\uae30",id:"\ub354-\ubcf4\uae30",children:[]}],O={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0"),Object(n.b)("h3",{id:"hardware-requirement"},"Hardware Requirement"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://os.mbed.com/platforms/ST-Nucleo-L476RG/"}),"NUCLEO-L476RG")),Object(n.b)("li",{parentName:"ul"},"Desktop or laptop computer"),Object(n.b)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),Object(n.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),Object(n.b)("h3",{id:"software-requirement"},"Software Requirement"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Microsoft Azure Account (Azure \uad6c\ub3c5\uc774 \uc544\uc9c1 \uc5c6\ub294 \uacbd\uc6b0 \uccb4\ud5d8 \ubb34\ub8cc",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://azure.microsoft.com/ko-kr/free/"}),"\uacc4\uc815"),"\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.)"),Object(n.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://catalog.azureiotsolutions.com/docs?title=Azure/azure-iot-device-ecosystem/manage_iot_hub"}),"Azure IoT Explorer")),Object(n.b)("li",{parentName:"ul"},"MBED Studio / MBED Online Compiler")),Object(n.b)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),Object(n.b)("p",null,"Microsoft Azure \ub294 Microsoft \uc758 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4.\nMicrosoft Azure \uc758 \uc11c\ube44\uc2a4\uc5d0 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"}),"WizFi360")," \uc744 \uc5f0\ub3d9\ud558\uc5ec \ub370\uc774\ud130\ub97c \ud074\ub77c\uc6b0\ub4dc\ub85c \uc804\uc1a1\ud558\uace0, \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(n.b)("p",null,"\ubcf8 \ubb38\uc11c\uc5d0\uc11c\ub294 NUCLEO-L476G + WizFi360 \uc774\uc6a9\ud558\uc5ec MS Azure Services\uc5d0 \uc5f0\uacb0 \ubc29\ubc95\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ub2e4\uc74c \ub2e8\uacc4\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Azure IoT Hub \uc900\ube44"),Object(n.b)("li",{parentName:"ul"},"IoT \ub514\ubc14\uc774\uc2a4 \ub4f1\ub85d"),Object(n.b)("li",{parentName:"ul"},"Azure IoT\uc640 \uc5f0\uacb0 \ubc0f \ub370\uc774\ud130 \ud1b5\uc2e0")),Object(n.b)("p",null,"Azure IoT Hub \uc900\ube44\uc640 IoT \ub514\ubc14\uc774\uc2a4 \ub4f1\ub85d \uacfc\uc815 \ub300\ud574 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"}),"Azure Cloud \uc18c\uac1c")," \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(n.b)("p",null,"WiFi\ubaa8\ub4c8 \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:board:wizfi360-evb:start"}),"WizFi360-EVB-Shield")," Evaluation \ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png",alt:null}))),Object(n.b)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44"},"\ub514\ubc14\uc774\uc2a4 \uc900\ube44"),Object(n.b)("h3",{id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815"},"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815"),Object(n.b)("p",null,"WizFi360-EVB-Shield\ub294 NUCLEO-L476RG\uc640 \uacb0\ud569\uc744 \ud558\uc5ec \uc0ac\uc6a9\ub418\uc5b4 \uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c WizFi360-EVB-Shield\uc758 DIP Switch \ubc0f UART Jumper Pin\uc744 \ub2e4\uc74c\uacfc \uac19\uc774 \uc124\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(n.b)("blockquote",null,Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"SW1 : Off"),Object(n.b)("li",{parentName:"ul"},"SW2 : Off"),Object(n.b)("li",{parentName:"ul"},"SW3 : On"),Object(n.b)("li",{parentName:"ul"},"D2 : UART Tx"),Object(n.b)("li",{parentName:"ul"},"D8 : UART Rx"))),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_2.png",alt:null}))),Object(n.b)("h3",{id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0"},"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0"),Object(n.b)("p",null,"Hardware \uc124\uc815 \ud6c4, Mini USB Cable\uc744 \uc774\uc6a9\ud558\uc5ec NUCLEO-L476RG\ub97c Desktop \ud639\uc740 Laptop Computer\uc640 \uc5f0\uacb0\uc744 \ud569\ub2c8\ub2e4."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\uc7a5\uce58 \uad00\ub9ac\uc790"),"\uc5d0\uc11c NUCLEO-L476RG\uc640 \uc5f0\uacb0\ub41c ",Object(n.b)("strong",{parentName:"p"},"COM Port"),"\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/device_management_2.png",alt:null}))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM Port\ub97c \ud655\uc778 \ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, \ub2e4\uc74c Link\uc5d0\uc11c Driver\ub97c Downlonad\ud558\uc5ec \uc124\uce58\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"[ST-LINK, ST-LINK/V2, ST-LINK/V2-1 USB driver][Link-St_Link_St_Link_V2_St_Link_V2_1_Usb_Driver]"))),Object(n.b)("h2",{id:"at-\uba85\ub839\uc5b4"},"AT \uba85\ub839\uc5b4"),Object(n.b)("h3",{id:"1-set-current-wifi-mode-not-saved-in-flash"},"1. Set current WiFi mode (not saved in flash)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+CWMODE_CUR\nSyntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR?"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWMODE:","<","mode",">"," ",Object(n.b)("br",null)," OK")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR=","<","mode",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Mode"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Station mode")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"2"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"SoftAP mode (factory default)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"3"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Station+SoftAP mode")))),Object(n.b)("h3",{id:"2-enable-dhcp"},"2. Enable DHCP"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+CWDHCP_CUR\nSyntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWDHCP_CUR?"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWDHCP_CUR:","<","para",">"," ",Object(n.b)("br",null)," OK")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWMODE_CUR=","<","para",">",",","<","en",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"SoftAP DHCP \uc640 Station DHCP \ub97c disable \ud55c\ub2e4.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"SoftAP DHCP \ub294 enable \ud558\uace0 Station DHCP \ub294 disable \ud55c\ub2e4.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"2"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"2: SoftAP DHCP \ub294 disable \ud558\uace0 Station DHCP \ub294 enable \ud55c\ub2e4.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"3"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"SoftAP DHCP \uc640 Station DHCP \ub97c enable \ud55c\ub2e4. (factory default)")))),Object(n.b)("h3",{id:"3-list-available-aps"},"3. List available APs"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+CWLAP\nSyntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Query"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWLAP"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWLAP:(","[<","ecn",">",",","<","ssid",">",",","<","rssi",">",",","<","mac",">",",","<","channel",">",",","<","wps",">]",")")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ecn",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0: Open ",Object(n.b)("br",null)," 1: WEP ",Object(n.b)("br",null)," 2: WPA_PSK",Object(n.b)("br",null),"3: WPA2_PSK",Object(n.b)("br",null),"4:WPA_WPA2_PSK")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ssid",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. AP\uc758 ssid")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","rssi",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"signal strength")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","mac",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. AP\uc758 mac")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","wps",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0: WPS\ub294 disable\ub41c\ub2e4 ",Object(n.b)("br",null)," 1: WPS\ub294 enable\ub41c\ub2e4")))),Object(n.b)("h3",{id:"4-connect-to-ap"},"4. Connect to AP"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+CWJAP_CUR\nSyntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+CWJAP_CUR=","<","ssid",">",",","<","pwd",">",",","[<","bssid",">]"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"+CWJAP_CUR:","<","ssid",">",",","<","bssid",">",",","<","channel",">",",","<","rssi",">"," ",Object(n.b)("br",null)," OK")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","ssid",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. Target AP\uc758 ssid. MAX: 32 bytes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","pwd",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. Target AP\uc758 password. MAX: 64-byte ASCII")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","bssid",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, target AP \uc758 MAC address, \uac19\uc740 SSID \ub97c \uac00\uc9c4 \uc5ec\ub7ec \uac1c\uc758 AP \ub4e4\uc774 \uc788\uc744 \ub54c \uc0ac\uc6a9\ub41c\ub2e4.")))),Object(n.b)("h3",{id:"5-azure-iot-hub-configuration-set"},"5. Azure IoT Hub configuration set"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+AZSET"),Object(n.b)("p",null,"Syntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+AZSET=","<","iothub_name",">",",","<","device_id",">",",","<","device_key",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","hub ID",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. IoT Hub\uc758 ID")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","device ID",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter. IoT Device\uc758 ID")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","key",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, IoT Device\uc758 Key")))),Object(n.b)("h3",{id:"6-set-mqtt-topic"},"6. Set MQTT Topic"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+MQTTTOPIC"),Object(n.b)("p",null,"Syntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+MQTTTOPIC=","<","publish topic",">",",","<","subscribe topic",">",",","<","subscribe topic2",">",",","<","subscribe topic3",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(n.b)("p",null,"Defined values:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","publish topic",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, WizFi360 \uc774 publish \ud558\ub294 topic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic2",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"<","subscribe topic3",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"string parameter, WizFi360 \uc774 subscribe \ud558\ub294 topic")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note:"),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},"\uc774 command \ub294 broker \uc5d0 \uc5f0\uacb0\ud558\uae30\uc804\uc5d0 \uc124\uc815\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(n.b)("li",{parentName:"ul"},"<","subscribe topic2",">"," \uc640 ","<","subscribe topic3",">","\ub294 Firmware v1.0.5.0 \uc774\ud6c4 version \ubd80\ud130 \uc0ac\uc6a9\uac00\ub2a5 \ud569\ub2c8\ub2e4."))),Object(n.b)("h3",{id:"7-connect-to-azure"},"7. Connect to Azure"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+AZCON"),Object(n.b)("p",null,"Syntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+AZCON"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"CONNECT ",Object(n.b)("br",null)," OK")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note:\n\u2022 \uc774 command \ub97c \uc804\uc1a1\ud558\uae30\uc804\uc5d0 AT+AZSET command \uc640 AT+MQTTTOPIC command \ub97c \uc124\uc815\ud569\ub2c8\ub2e4.\n\u2022 Connect \uc774\ud6c4 AT+MQTTPUB command \ub97c \ud1b5\ud574 Azure Sever \uc5d0 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.\n\u2022 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support"}),"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support")," \ub97c \ucc38\uc870\ud558\uc138\uc694.")),Object(n.b)("h3",{id:"8-publish-a-message"},"8. Publish a message"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"AT Command:")," AT+MQTTPUB"),Object(n.b)("p",null,"Syntax:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Command"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Response"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Set"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"AT+MQTTPUB=","<","message",">"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"OK")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note:\n\u2022 \uc774 command \ub294 MQTT \uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc744 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4.\n\u2022 Publish \ud55c data \uc758 topic \uc740 AT+MQTTTOPIC command \uc5d0 \uc758\ud574 \uacb0\uc815\ub418\uba70, \uc0ac\uc6a9\uc790\ub294 broker \uc5d0 \uc5f0\uacb0\ud558\uae30\uc804\uc5d0 topic \uc744 \uc124\uc815\ud569\ub2c8\ub2e4.")),Object(n.b)("h2",{id:"\ub3d9\uc791-\uc608\uc81c"},"\ub3d9\uc791 \uc608\uc81c"),Object(n.b)("h3",{id:"mbed-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc"},"Mbed \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\uc608\uc81c Download"),"\ub97c \ud55c \ud6c4, ",Object(n.b)("strong",{parentName:"p"},"File")," > ",Object(n.b)("strong",{parentName:"p"},"Open Workspace"),"\uc744 \uc120\ud0dd\ud558\uc5ec ",Object(n.b)("strong",{parentName:"p"},"Project \uc2e4\ud589"),"\ud569\ub2c8\ub2e4."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"\uc608\uc81c\ub294 \ub2e4\uc74c \uacbd\ub85c\uc5d0 \uc704\uce58\ud558\uace0 \uc788\ub294 Project\ub97c \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"samples/Wi-Fi/Mbed_Azure_Atcmd_Wizfi360"))),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_1.png",alt:null}))),Object(n.b)("p",null,"Online Compiler \uacbd\uc6b0 \ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c Compiler\uc5d0 import\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://os.mbed.com/users/vikshin/code/Mbed-Azure-Atcmd-WizFi360/"}),"https://os.mbed.com/users/vikshin/code/Mbed-Azure-Atcmd-WizFi360/"),"\n",Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Mbed_Azure_online_compiler.JPG",alt:null})))),Object(n.b)("h3",{id:"modify-parameters"},"Modify parameters"),Object(n.b)("p",null,"Azure IoT Hub \uc5f0\uacb0 \uc704\ud55c WiFi ssid, WiFi password, Hub ID, Device ID, Device Key \ubcc0\uacbd\ud558\uc5ec \ud14c\uc2a4\ud2b8 \ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",Object(b.a)({parentName:"pre"},{className:"language-cpp"}),'/* WiFi info */\nchar ssid[] = "XXXXXXXXXXXXXXXXXXXXXXXX";\nchar password[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\n\n/* Azure info */\nchar hub_name[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\nchar device_id[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX";\nchar device_primary_key[] = "XXXXXXXXXXXXXXXXXXXXXXXXXX=";\n')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Run Program"),"\uc744 \ub20c\ub7ec Project Build \ubc0f Run\uc744 \ud569\ub2c8\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_mbed_studio_3.png",alt:null}))),Object(n.b)("p",null,"\uc5c5\ub85c\ub4dc\ub97c \uc644\ub8cc\ud55c \ud6c4, \uc2dc\ub9ac\uc5bc \ubaa8\ub2c8\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c Nucleo \ubcf4\ub4dc\uc5d0 \uc5c5\ub85c\ub4dc \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Mbed_Azure_atcmd_serial_monitor.JPG",alt:null}))),Object(n.b)("h3",{id:"\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc"},"\ub3d9\uc791 \uc608\uc81c \uacb0\uacfc"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},'IoT Explorer \uc5d0\uc11c Telemetry Section\uc548\uc5d0 "Start" \ubc84\ud2bc\uc744 \ub204\ub985\ub2c8\ub2e4.',Object(n.b)("blockquote",{parentName:"li"},Object(n.b)("p",{parentName:"blockquote"},'MQTTPUB \uba85\ub839\uc744 \ud1b5\ud574 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uae30 \uc804\uc5d0 "Start" \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc57c \ud569\ub2c8\ub2e4.'))),Object(n.b)("li",{parentName:"ol"},"MQTTPUB command\uc73c\ub85c \uc218\uc2e0\ud55c \ub370\uc774\ud130\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(b.a)({parentName:"p"},{src:"/Document/img/azure_cloud/Mbed_Azure_atcmd_iot_explorer.JPG",alt:null}))),Object(n.b)("h2",{id:"\ub354-\ubcf4\uae30"},"\ub354 \ubcf4\uae30"),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_azure_atcmd_wizfi360.md"}),"WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0")))}p.isMDXComponent=!0},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),p=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},o=function(e){var t=p(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=p(a),j=b,d=o["".concat(c,".").concat(j)]||o[j]||m[j]||n;return a?r.a.createElement(d,l({ref:t},O,{components:a})):r.a.createElement(d,l({ref:t},O))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var O=2;O<n;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);