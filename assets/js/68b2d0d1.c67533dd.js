(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[316],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3990:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=a(4034),r=a(9973),o=(a(7294),a(3905)),i={id:"standalone_mqtt_e",title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",sidebar_label:"Standalone MQTT",keywords:["WizFi360"]},l={unversionedId:"connect_to_cloud/standalone_mqtt_e",id:"connect_to_cloud/standalone_mqtt_e",isDocsHomePage:!1,title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",description:"Getting started",source:"@site/docs/connect_to_cloud/standalone_mqtt_atcmd_e.md",sourceDirName:"connect_to_cloud",slug:"/connect_to_cloud/standalone_mqtt_e",permalink:"/Document/docs/connect_to_cloud/standalone_mqtt_e",editUrl:"https://github.com/wizfi/Document/tree/master/docs/connect_to_cloud/standalone_mqtt_atcmd_e.md",version:"current",sidebar_label:"Standalone MQTT",frontMatter:{id:"standalone_mqtt_e",title:"Connect to Azure IoT Hub using WizFi360 MQTT AT Command",sidebar_label:"Standalone MQTT",keywords:["WizFi360"]},sidebar:"docs",previous:{title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\ub3d9",permalink:"/Document/docs/connect_to_cloud/standalone_mqtt"},next:{title:"WizFi360 Azure AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/standalone_atcmd"}},p=[{value:"Getting started",id:"getting-started",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Step 1: Required items",id:"step-1-required-items",children:[{value:"Hadrware",id:"hadrware",children:[]},{value:"Software",id:"software",children:[]}]},{value:"Step 2: Device preparation",id:"step-2-device-preparation",children:[{value:"1. Hardware preparation",id:"1-hardware-preparation",children:[]},{value:"2. Device connection",id:"2-device-connection",children:[]}]},{value:"Step 3: Sample application",id:"step-3-sample-application",children:[{value:"1. Mode setting",id:"1-mode-setting",children:[]},{value:"2. DHCP setting",id:"2-dhcp-setting",children:[]},{value:"3. Connect to AP",id:"3-connect-to-ap",children:[]},{value:"4. MQTT Connection setting",id:"4-mqtt-connection-setting",children:[]},{value:"5. Topic Setting",id:"5-topic-setting",children:[]},{value:"6. Connect to Broker",id:"6-connect-to-broker",children:[]},{value:"7. Publish Message",id:"7-publish-message",children:[]}]},{value:"Step 4: Results",id:"step-4-results",children:[{value:"1. Start job in Stream Analytics",id:"1-start-job-in-stream-analytics",children:[]},{value:"2. Check output",id:"2-check-output",children:[]}]}],u={toc:p};function c(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Login to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},(0,o.kt)("strong",{parentName:"a"},"Azure Portal")),"."),(0,o.kt)("p",{parentName:"blockquote"},"\u203b In this guide we will procedd with ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/ko-kr/free/"},(0,o.kt)("strong",{parentName:"a"},"free account")),".\nTo learn how to create IoT Hub please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud"},"Azure Cloud Service Introduction"),"."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/azure/iot-hub/iot-hub-create-through-portal"},"[MS] Create IoT Hub using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_blob_storage_through_azure_portal.md"},"Create Blob storage using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/create_stream_analytics_through_azure_portal.md"},"Create Stream Analytics using Azure Portal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/blob/master/docs/Azure_Cloud/configure_stream_analytics_job_input_output_and_define_the_transformation_query_through_azure_portal.md"},"Setup Queries in Stream Analytics using Azure Portal")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"It is possible to connect to ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Azure Service")," using ",(0,o.kt)("strong",{parentName:"p"},"WizFi360"),", send data to cloud and monitor current status."),(0,o.kt)("p",null,"Data communication will be established as following."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/mqtt_data_communication_structure.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MQTT AT Commands")," will be used to connect to IoT Hub Service & send data."),(0,o.kt)("p",null,"Data sent to IoT Hub will be saved in Blob Storage through Stream Analytics."),(0,o.kt)("p",null,"In this guide we will use WizFi360 to connect to Microsoft Azure Services using MQTT AT Command."),(0,o.kt)("h2",{id:"step-1-required-items"},"Step 1: Required items"),(0,o.kt)("p",null,"Items below are required for this guide."),(0,o.kt)("h3",{id:"hadrware"},"Hadrware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Desktop or Laptop Computer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://wizwiki.net/wiki/doku.php/products:wizfi360:start"},"WizFi360-EVB-Shield"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Micro 5 Pin USB Cable"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/mqtt_atcmd_wizfi360_required_item_1.png",alt:null})))),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, Hercules, etc . . .)")),(0,o.kt)("h2",{id:"step-2-device-preparation"},"Step 2: Device preparation"),(0,o.kt)("h3",{id:"1-hardware-preparation"},"1. Hardware preparation"),(0,o.kt)("p",null,"WizFi360-EVB-Shield will be used in ",(0,o.kt)("strong",{parentName:"p"},"Standalone mode"),". Therefore DIP Switch and jumper cables shall be connected as following:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"SW1 : On"),(0,o.kt)("li",{parentName:"ul"},"SW2 : Off"),(0,o.kt)("li",{parentName:"ul"},"SW3 : Off"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/set_wizfi360_evb_shield_dip_sw_1.png",alt:null})),(0,o.kt)("h3",{id:"2-device-connection"},"2. Device connection"),(0,o.kt)("p",null,"After connecting hardware, connect WizFi360-EVB-Shield to Desktop or Laptop using USB Cable."),(0,o.kt)("p",null,"Check ",(0,o.kt)("strong",{parentName:"p"},"COM Port")," from ",(0,o.kt)("strong",{parentName:"p"},"Device Manager"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/device_management_1.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If COM port cannot be found in Device manager, check drivers from link below."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"CP210x USB to UART Bridge VCP Drivers")))),(0,o.kt)("h2",{id:"step-3-sample-application"},"Step 3: Sample application"),(0,o.kt)("p",null,"To learn more about ",(0,o.kt)("strong",{parentName:"p"},"WizFi360")," please refer to ",(0,o.kt)("a",{parentName:"p",href:"http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113k.pdf"},(0,o.kt)("strong",{parentName:"a"},"Quick Start Guide")),", ",(0,o.kt)("a",{parentName:"p",href:"http://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360_atset_v106k.pdf"},(0,o.kt)("strong",{parentName:"a"},"AT Instruction Set")),"."),(0,o.kt)("h3",{id:"1-mode-setting"},"1. Mode setting"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"AT+CWMODE_CUR=1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,o.kt)("h3",{id:"2-dhcp-setting"},"2. DHCP setting"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"AT+CWDHCP_CUR=1,1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,o.kt)("h3",{id:"3-connect-to-ap"},"3. Connect to AP"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'AT+CWJAP_CUR="',(0,o.kt)("strong",{parentName:"td"},"ssid"),'","',(0,o.kt)("strong",{parentName:"td"},"password"),'" ',(0,o.kt)("br",null),(0,o.kt)("br",null)," Example : ",(0,o.kt)("br",null),' AT+CWJAP_CUR="',(0,o.kt)("strong",{parentName:"td"},"wiznet"),'","',(0,o.kt)("strong",{parentName:"td"},"0123456789"),'"'),(0,o.kt)("td",{parentName:"tr",align:"left"},"WIFI CONNECTED ",(0,o.kt)("br",null)," WIFI GOT IP ",(0,o.kt)("br",null),(0,o.kt)("br",null)," OK")))),(0,o.kt)("h3",{id:"4-mqtt-connection-setting"},"4. MQTT Connection setting"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'AT+MQTTSET="',(0,o.kt)("strong",{parentName:"td"},"iot_hub_host_name"),"/",(0,o.kt)("strong",{parentName:"td"},"device_id"),'/?api-version=2018-06-30","',(0,o.kt)("strong",{parentName:"td"},"sas_token"),'","',(0,o.kt)("strong",{parentName:"td"},"device_id"),'",60',(0,o.kt)("br",null),(0,o.kt)("br",null)," Example : ",(0,o.kt)("br",null),' AT+MQTTSET="',(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTHub.azure-devices.net"),"/",(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTDevice"),'/?api-version=2018-06-30","',(0,o.kt)("strong",{parentName:"td"},"SharedAccessSignature sr=MyWizFi360IoTHub.azure-devices.net%2Fdevices%2FMyWizFi360IoTDevice&sig=t3R9nDS7ezMGBdb%2FNd5ktb3xQx5jx4NC02n325vRA6c%3D&se=1611895717"),'","',(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTDevice"),'",60'),(0,o.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For ",(0,o.kt)("strong",{parentName:"p"},"SAS Token creation")," please refer below."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_device_explorer.md"},"Create SAS Token using Device Explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Wiznet/azure-iot-kr/tree/master/docs/Azure_Cloud/create_sas_token_through_azure_iot_explorer.md"},"Create SAS Token using Azure IoT Explorer")))),(0,o.kt)("h3",{id:"5-topic-setting"},"5. Topic Setting"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'AT+MQTTTOPIC="devices/',(0,o.kt)("strong",{parentName:"td"},"device_id"),'/messages/events/",devices/',(0,o.kt)("strong",{parentName:"td"},"device_id"),"/messages/devicebound/# ",(0,o.kt)("br",null),(0,o.kt)("br",null)," Example : ",(0,o.kt)("br",null),' AT+MQTTTOPIC="devices/',(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTDevice"),'/messages/events/","devices/',(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTDevice"),'/messages/devicebound/#"'),(0,o.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,o.kt)("h3",{id:"6-connect-to-broker"},"6. Connect to Broker"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'AT+MQTTCON=1,"',(0,o.kt)("strong",{parentName:"td"},"iot_hub_host_name"),'",8883 ',(0,o.kt)("br",null),(0,o.kt)("br",null)," Example : ",(0,o.kt)("br",null),' AT+MQTTCON=1,"',(0,o.kt)("strong",{parentName:"td"},"MyWizFi360IoTHub.azure-devices.net"),'",8883'),(0,o.kt)("td",{parentName:"tr",align:"left"},"CONNECT ",(0,o.kt)("br",null),(0,o.kt)("br",null)," OK")))),(0,o.kt)("h3",{id:"7-publish-message"},"7. Publish Message"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note :"),(0,o.kt)("p",{parentName:"blockquote"},"When publishing data, ",(0,o.kt)("a",{parentName:"p",href:"#Run_Stream_Analytics"},(0,o.kt)("strong",{parentName:"a"},"Start Stream Analytics"))," to forward data to Blob Storage.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Response"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},'AT+MQTTPUB="publish_data" ',(0,o.kt)("br",null),(0,o.kt)("br",null)," Example : ",(0,o.kt)("br",null),' AT+MQTTPUB="{"deviceId":"MyWizFi360IoTDevice","temperature":21.97,"humidity":43.58}"'),(0,o.kt)("td",{parentName:"tr",align:"left"},"OK")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/standalone_mqtt_atcmd_wizfi360_set_up_and_run_wizfi360_1.png",alt:null})),(0,o.kt)("h2",{id:"step-4-results"},"Step 4: Results"),(0,o.kt)("h3",{id:"1-start-job-in-stream-analytics"},"1. Start job in Stream Analytics"),(0,o.kt)("p",null,"Select in Stream Analytics ",(0,o.kt)("strong",{parentName:"p"},"Introduction")," > ",(0,o.kt)("strong",{parentName:"p"},"Start")," > ",(0,o.kt)("strong",{parentName:"p"},"Current")," > ",(0,o.kt)("strong",{parentName:"p"},"Start"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_2.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_3.png",alt:null})),(0,o.kt)("h3",{id:"2-check-output"},"2. Check output"),(0,o.kt)("p",null,"1) Select in Blob Storage ",(0,o.kt)("strong",{parentName:"p"},"Introduction")," > ",(0,o.kt)("strong",{parentName:"p"},"Container"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_4.png",alt:null})),(0,o.kt)("p",null,"2) Select Container in List."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_5.png",alt:null})),(0,o.kt)("p",null,"3) Select Blob in list."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_6.png",alt:null})),(0,o.kt)("p",null,"4) Click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," to check data received from WizFi360."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_7.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/Document/img/azure_cloud/start_the_stream_analytics_job_and_check_the_output_8.png",alt:null})))}c.isMDXComponent=!0}}]);