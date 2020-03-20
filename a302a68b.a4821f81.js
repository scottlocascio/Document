(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(6),c=(r(0),r(140)),o={id:"arduino_mqtt",title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud55c Azure IoT Hub \uc5f0\ub3d9 \uc608\uc81c",sidebar_label:"Arduino MQTT"},i={id:"connect_to_cloud/arduino_mqtt",title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud55c Azure IoT Hub \uc5f0\ub3d9 \uc608\uc81c",description:"## \uc2dc\uc791\ud558\uae30 \uc804\uc5d0\r",source:"@site/docs\\connect_to_cloud\\arduino_mqtt.md",permalink:"/Document/docs/connect_to_cloud/arduino_mqtt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/connect_to_cloud/arduino_mqtt.md",sidebar_label:"Arduino MQTT",sidebar:"docs",previous:{title:"Arduino Mega 2560 + WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/arduino_atcmd"},next:{title:"Connect WizFi360 to AWS IoT using AT Command",permalink:"/Document/docs/connect_to_cloud/standalone_aws_atcmd"}},b=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",children:[]},{value:"\uc18c\uac1c",id:"\uc18c\uac1c",children:[]},{value:"Step 1: \ud544\uc218 \uad6c\uc131 \uc694\uc18c",id:"step-1-\ud544\uc218-\uad6c\uc131-\uc694\uc18c",children:[{value:"Hadrware",id:"hadrware",children:[]},{value:"Software",id:"software",children:[]}]},{value:"Step 2: Device \uc900\ube44",id:"step-2-device-\uc900\ube44",children:[{value:"1. Hardware \uc900\ube44",id:"1-hardware-\uc900\ube44",children:[]},{value:"2. Device \uc5f0\uacb0",id:"2-device-\uc5f0\uacb0",children:[]}]},{value:"Step 3: \ub3d9\uc791 \uc608\uc81c",id:"step-3-\ub3d9\uc791-\uc608\uc81c",children:[{value:"1. \uc608\uc81c Download \ubc0f \uc2e4\ud589",id:"1-\uc608\uc81c-download-\ubc0f-\uc2e4\ud589",children:[]},{value:"2. Parameter \uac12 \uc218\uc815",id:"2-parameter-\uac12-\uc218\uc815",children:[]},{value:"3. Project Compile \ubc0f Upload",id:"3-project-compile-\ubc0f-upload",children:[]}]},{value:"Step 4: \ub3d9\uc791 \uc608\uc81c \uacb0\uacfc",id:"step-4-\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc",children:[]},{value:"\ub354 \ubcf4\uae30",id:"\ub354-\ubcf4\uae30",children:[]}],l={rightToc:b};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://portal.azure.com/"}),Object(c.b)("strong",{parentName:"a"},"Azure Portal")),"\uc5d0 Login\uc744 \ud569\ub2c8\ub2e4. \uacc4\uc815\uc774 \uc5c6\ub294 \uacbd\uc6b0, \uacc4\uc815 \uc0dd\uc131 \ud6c4\uc5d0 Login\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4."),Object(c.b)("p",{parentName:"blockquote"},"\u203b \ubcf8 \ubb38\uc11c\ub294 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/ko-kr/free/"}),Object(c.b)("strong",{parentName:"a"},"\uccb4\ud5d8 \uacc4\uc815")),"\uc73c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4."),Object(c.b)("p",{parentName:"blockquote"},"Azure Portal\uc744 \uc0ac\uc6a9\ud558\uc5ec IoT Hub \ub9cc\ub4e4\uae30 \ub4f1 \uc55e\uc120 \uc77c\ub828\uc758 \uacfc\uc815\uc5d0 \ub300\ud558\uc5ec ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"}),"Azure Cloud \uc11c\ube44\uc2a4 \uc18c\uac1c"),"\ub97c \ucc38\uc870\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal"}),"[MS] Azure Portal\uc744 \uc0ac\uc6a9\ud558\uc5ec IoT Hub \ub9cc\ub4e4\uae30")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md"}),"Azure Portal\uc744 \uc0ac\uc6a9\ud558\uc5ec Blob Storage \ub9cc\ub4e4\uae30")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md"}),"Azure Portal\uc744 \uc0ac\uc6a9\ud558\uc5ec Stream Analytics \ub9cc\ub4e4\uae30")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md"}),"Azure Portal\uc744 \uc0ac\uc6a9\ud558\uc5ec Stream Analytics \uc791\uc5c5 \uc785 \xb7 \ucd9c\ub825 \uad6c\uc131 \ubc0f \ubcc0\ud658 Query \uc815\uc758")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md"}),"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\ub3d9")))),Object(c.b)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Microsoft Azure Service"),"\uc5d0 ",Object(c.b)("strong",{parentName:"p"},"WizFi360"),"\uc744 ",Object(c.b)("strong",{parentName:"p"},"\uc5f0\ub3d9"),"\ud558\uc5ec, Data\ub97c Cloud\ub85c \uc804\uc1a1\ud558\uace0, Monitoring\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"Data \ud1b5\uc2e0\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uad6c\uc870\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_data_communication_structure.png",alt:null}))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"MQTT AT Command"),"\ub97c \uc774\uc6a9\ud558\uc5ec, IoT Hub Service \uc5f0\uacb0 \ubc0f Data \uc1a1\uc2e0\uc744 \ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"IoT Hub\ub85c \uc1a1\uc2e0\uc774 \ub41c Data\ub294 Stream Analytics\ub97c \ud1b5\ud558\uc5ec Data \uc800\uc7a5\uc18c Blob Storage\ub85c \uc800\uc7a5\uc774 \ub429\ub2c8\ub2e4."),Object(c.b)("p",null,"\ubcf8 \ubb38\uc11c\ub294 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.arduino.cc/"}),"Arduino")," \uae30\ubc18 WizFi360 MQTT AT Command \uc774\uc6a9\ud55c Microsoft Azure Service \uc5f0\ub3d9 \uc608\uc81c\uc5d0 \ub300\ud558\uc5ec Guide\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),Object(c.b)("h2",{id:"step-1-\ud544\uc218-\uad6c\uc131-\uc694\uc18c"},"Step 1: \ud544\uc218 \uad6c\uc131 \uc694\uc18c"),Object(c.b)("p",null,"\ubcf8 \ubb38\uc11c\ub97c \ub530\ub77c\ud558\uae30 \uc804\uc5d0 \ub2e4\uc74c \ud56d\ubaa9\uc774 \uc900\ube44\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"hadrware"},"Hadrware"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Desktop or Laptop Computer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"}),"WizFi360-EVB-Shield"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://store.arduino.cc/usa/mega-2560-r3"}),"Arduino Mega 2560"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"USB Type-B Cable"),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_3.png",alt:null}))))),Object(c.b)("h3",{id:"software"},"Software"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.arduino.cc/en/main/software"}),"Arduino IDE")),Object(c.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)")),Object(c.b)("h2",{id:"step-2-device-\uc900\ube44"},"Step 2: Device \uc900\ube44"),Object(c.b)("h3",{id:"1-hardware-\uc900\ube44"},"1. Hardware \uc900\ube44"),Object(c.b)("p",null,"WizFi360-EVB-Shield\ub294 Arduino Mega 2560\uacfc \uacb0\ud569\uc744 \ud558\uc5ec \uc0ac\uc6a9\ub418\uc5b4 \uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c WizFi360-EVB-Shield\uc758 DIP Switch \uc124\uc815 \ubc0f Jumper Cable \uc5f0\uacb0\uc774 \ub2e4\uc74c\uacfc \uac19\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},"SW1 : Off"),Object(c.b)("li",{parentName:"ul"},"SW2 : Off"),Object(c.b)("li",{parentName:"ul"},"SW3 : On"),Object(c.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield : D8 - Arduino Mega 2560 : 18"),Object(c.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield : D2 - Arduino Mega 2560 : 19"),Object(c.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield : SDA - Arduino Mega 2560 : 14"))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_3.png",alt:null}))),Object(c.b)("h3",{id:"2-device-\uc5f0\uacb0"},"2. Device \uc5f0\uacb0"),Object(c.b)("p",null,"Hardware \uc124\uc815 \ud6c4, USB Type-B Cable\uc744 \uc774\uc6a9\ud558\uc5ec Arduino Mega 2560\uc744 Desktop \ud639\uc740 Laptop Computer\uc640 \uc5f0\uacb0\uc744 \ud569\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\uc7a5\uce58 \uad00\ub9ac\uc790"),"\uc5d0\uc11c Arduino Mega 2560\uacfc \uc5f0\uacb0\ub41c ",Object(c.b)("strong",{parentName:"p"},"COM Port"),"\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/device_management_3.png",alt:null}))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Arduino IDE\ub97c \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub97c \ud558\uc600\ub2e4\uba74 \uc704\uc640 \uac19\uc774 \uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",{parentName:"blockquote"},"\uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM Port\ub97c \ud655\uc778 \ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, \ub2e4\uc74c Link\uc758 \uc124\uba85\uc5d0 \ub530\ub77c \uc124\uc815 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.arduino.cc/en/Guide/DriverInstallation"}),"Manually install Drivers on Windows")))),Object(c.b)("h2",{id:"step-3-\ub3d9\uc791-\uc608\uc81c"},"Step 3: \ub3d9\uc791 \uc608\uc81c"),Object(c.b)("h3",{id:"1-\uc608\uc81c-download-\ubc0f-\uc2e4\ud589"},"1. \uc608\uc81c Download \ubc0f \uc2e4\ud589"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\uc608\uc81c Download"),"\ub97c \ud55c \ud6c4, .ino \ud655\uc7a5\uc790\ub97c \uc120\ud0dd\ud558\uc5ec ",Object(c.b)("strong",{parentName:"p"},"Project \uc2e4\ud589"),"\ud569\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\uc608\uc81c\ub294 \ub2e4\uc74c \uacbd\ub85c\uc5d0 \uc704\uce58\ud558\uace0 \uc788\ub294 Project\ub97c \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"samples/Wi-Fi/Arduino_Mqtt_Atcmd_Wizfi360")))),Object(c.b)("h3",{id:"2-parameter-\uac12-\uc218\uc815"},"2. Parameter \uac12 \uc218\uc815"),Object(c.b)("p",null,"Azure IoT Hub\uc5d0 \uc5f0\uacb0\uc744 \ud558\uae30 \uc704\ud558\uc5ec, \ub2e4\uc74c\uc758 Parameter\ub97c \uc218\uc815\ud569\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'/* Wi-Fi info */\nchar ssid[] = "xxxxxxxxxx";\nchar password[] = "xxxxxxxxxx";\n\n/* MQTT info */\nint alive_time = xx;    // range : 30 ~ 300\n\n/* Azure info */\nchar hub_name[] = "xxxxxxxxxx";\nchar host_name[] = "xxxxxxxxxx";\nchar device_id[] = "xxxxxxxxxx";\nchar device_key[] = "xxxxxxxxxx";\nchar sas_token[] = "xxxxxxxxxx";\n')),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_arduino_ide_1.png",alt:null}))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"SAS Token \uc0dd\uc131"),"\uc740 \ub2e4\uc74c\uc744 \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),Object(c.b)("ul",{parentName:"blockquote"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md"}),"Device Explorer\ub97c \uc0ac\uc6a9\ud558\uc5ec SAS Token \uc0dd\uc131\ud558\uae30")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md"}),"Azure IoT Explorer\ub97c \uc0ac\uc6a9\ud558\uc5ec SAS Token \uc0dd\uc131\ud558\uae30")))),Object(c.b)("h3",{id:"3-project-compile-\ubc0f-upload"},"3. Project Compile \ubc0f Upload"),Object(c.b)("p",null,"\uc0ac\uc6a9\ud558\ub294 Board, COM Port \uc120\ud0dd \ud6c4, Compile \ubc0f Upload\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note :"),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Stream Analytics \uc2e4\ud589")," \uc911\uc774\uc5b4\uc57c Blob Storage\ub85c Data\uac00 \uc804\ub2ec\ub429\ub2c8\ub2e4.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_arduino_ide_2.png",alt:null}))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_arduino_ide_3.png",alt:null}))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/execute_project_through_arduino_ide_4.png",alt:null}))),Object(c.b)("h2",{id:"step-4-\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc"},"Step 4: \ub3d9\uc791 \uc608\uc81c \uacb0\uacfc"),Object(c.b)("p",null,"Terminal Program\uc73c\ub85c WizFi360\uc5d0\uc11c Azure IoT Hub\ub85c \uc804\uc1a1\ud558\ub294 Data, Blob Storage\uc5d0\uc11c WizFi360\uc73c\ub85c\ubd80\ud130 \uc218\uc2e0\ud55c Data\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/result_execute_project_through_arduino_ide_1.png",alt:null}))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/Document/img/azure_cloud/result_execute_project_through_arduino_ide_2.png",alt:null}))),Object(c.b)("h2",{id:"\ub354-\ubcf4\uae30"},"\ub354 \ubcf4\uae30"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/IoT_device/Connectivities/Wi-Fi/standalone_mqtt_atcmd_wizfi360.md"}),"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Auzre IoT Hub\uc5d0 \uc5f0\ub3d9"))))}u.isMDXComponent=!0},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,O=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return r?n.a.createElement(O,i({ref:t},l,{components:r})):n.a.createElement(O,i({ref:t},l))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);