(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),i=r(9),a=(r(0),r(187)),o={id:"location_tracker",title:"Location Tracker with WizFi360",sidebar_label:"Location Tracker",keywords:["WizFi360","location tracking","unwired labs"]},c={id:"other_guides/location_tracker",title:"Location Tracker with WizFi360",description:"## \uc2dc\uc791\ud558\uae30 \uc804\uc5d0\r",source:"@site/docs\\other_guides\\location_tracker.md",permalink:"/Document/docs/other_guides/location_tracker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/other_guides/location_tracker.md",sidebar_label:"Location Tracker",sidebar:"docs",previous:{title:"WizFi360 AT Command\ub97c \uc774\uc6a9\ud558\uc5ec AWS IoT\uc5d0 \uc5f0\uacb0",permalink:"/Document/docs/connect_to_cloud/standalone_aws_atcmd_kr"}},l=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",children:[{value:"Hardware Requirement",id:"hardware-requirement",children:[]},{value:"Software Requirement",id:"software-requirement",children:[]}]},{value:"\uc18c\uac1c",id:"\uc18c\uac1c",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc900\ube44",id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44",children:[{value:"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815",id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815",children:[]},{value:"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0",id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0",children:[]}]},{value:"Unwired Labs Geolocation API",id:"unwired-labs-geolocation-api",children:[]},{value:"\ub3d9\uc791 \uc608\uc81c",id:"\ub3d9\uc791-\uc608\uc81c",children:[{value:"Arduino \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc",id:"arduino-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc",children:[]},{value:"Modify parameters",id:"modify-parameters",children:[]},{value:"5. \ub3d9\uc791 \uc608\uc81c \uacb0\uacfc",id:"5-\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc",children:[]}]},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"\ub2e4\uc74c-\ub2e8\uacc4",children:[]}],b={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0"),Object(a.b)("h3",{id:"hardware-requirement"},"Hardware Requirement"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Arduino Mega 2560 board"),Object(a.b)("li",{parentName:"ul"},"Desktop and/or laptop computer"),Object(a.b)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),Object(a.b)("li",{parentName:"ul"},"WizFi360-EVB-Shield")),Object(a.b)("h3",{id:"software-requirement"},"Software Requirement"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Preferred Serial Terminal (TeraTerm, YAT, etc.)"),Object(a.b)("li",{parentName:"ul"},"Arduino IDE"),Object(a.b)("li",{parentName:"ul"},"ArduinoJson library (version 6.14.1 was used in this guide )")),Object(a.b)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),Object(a.b)("p",null,"This guide was inspired by post on ","[https://www.instructables.com]","."),Object(a.b)("p",null,"Using unwiredlabs geolocation API it is possible to get location coordinates without GPS and even display.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/mqtt_atcmd_wizfi360_required_item_1.png",alt:"WizFi360"}))),Object(a.b)("h2",{id:"\ub514\ubc14\uc774\uc2a4-\uc900\ube44"},"\ub514\ubc14\uc774\uc2a4 \uc900\ube44"),Object(a.b)("h3",{id:"\ud558\ub4dc\uc6e8\uc5b4-\uc124\uc815"},"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815"),Object(a.b)("p",null,"\uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 Arduino Mega2560 \uacfc WizFi360-EVB-Shield \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Arduino Code \uc5d0\uc11c UART1 \uc744 \uc0ac\uc6a9\ud558\uc5ec WizFi360-EVB-Shield \uc640 \ud1b5\uc2e0\ud558\uae30 \uc704\ud574, Arduino \uc758 TX1, RX1 Pin \uacfc WizFi360-EVB-Shield \uc758 RXD, TXD pin \uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4. WizFi360-EVB-Shield \uc5d0\uc11c RXD/TXD Selector \ub97c OFF \ub85c \ubcc0\uacbd\ud558\uc5ec USB \uac00 \uc544\ub2cc Pin \uc744 \ud1b5\ud574 UART \ud1b5\uc2e0\uc744 \ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/mega2560_wizfi360_connection.JPG",alt:"HW Setting"}))),Object(a.b)("h3",{id:"\ub514\ubc14\uc774\uc2a4-\uc5f0\uacb0"},"\ub514\ubc14\uc774\uc2a4 \uc5f0\uacb0"),Object(a.b)("p",null,"\ud558\ub4dc\uc6e8\uc5b4 \uc124\uc815 \ud6c4 USB \ucee4\ub125\ud130\ub97c \uc774\uc6a9\ud558\uc5ec Arduino Mega2560 Rev3 \ubcf4\ub4dc\uc640 PC\ub97c \uc5f0\uacb0\ud569\ub2c8\ub2e4. PC \uc6b4\uc601\uccb4\uc81c \uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c \uc7a5\uce58\uc640 \uc5f0\uacb0\ub41c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/Arduino_Azure_atcmd_device_manager_port.png",alt:"Check port"}))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Arduino IDE\ub97c \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ud558\uba74, \uc704\uc640 \uac19\uc774 \uc7a5\uce58 \uad00\ub9ac\uc790\uc5d0\uc11c COM \ud3ec\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(a.b)("h2",{id:"unwired-labs-geolocation-api"},"Unwired Labs Geolocation API"),Object(a.b)("p",null,"As mentioned before, in this guide we are going to use Unwired Labs (",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.unwiredlabs.com/"}),"https://www.unwiredlabs.com/"),") Geolocation API.\nPlease go to the website and sign up.\nOn sign up page, fill in your name, email and use case.\nSelect accountt type. For this guide free version was used, however please consider that there is limit for daily usage."),Object(a.b)("p",null,"Please check your email with API token. Please copy it as it will be necessary for the code below."),Object(a.b)("h2",{id:"\ub3d9\uc791-\uc608\uc81c"},"\ub3d9\uc791 \uc608\uc81c"),Object(a.b)("h3",{id:"arduino-\uc608\uc81c-\ucf54\ub4dc-\ub2e4\uc6b4\ub85c\ub4dc"},"Arduino \uc608\uc81c \ucf54\ub4dc \ub2e4\uc6b4\ub85c\ub4dc"),Object(a.b)("p",null,"\ub2e4\uc74c \ub9c1\ud06c\uc5d0\uc11c Arduino \uc608\uc81c \ucf54\ub4dc\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud55c \ud6c4, ino \ud655\uc7a5\uc790\uc758 \ud504\ub85c\uc81d\ud2b8 \ud30c\uc77c\uc744 \uc2e4\ud589 \uc2dc\ud0b5\ub2c8\ub2e4."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\uc608\uc81c\ub294 \ub2e4\uc74c \uacbd\ub85c\uc5d0 \uc704\uce58\ud558\uace0 \uc788\ub294 Project\ub97c \ucc38\uace0 \ubc14\ub78d\ub2c8\ub2e4."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"samples/Wi-Fi/Arduino_Azure_Atcmd_Wizfi360"))),Object(a.b)("h3",{id:"modify-parameters"},"Modify parameters"),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Fill in your own WiFi/hotspot credentials. Also paste the API token that was received in email."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'//WiFi credentials\nchar ssid[] = "XXXXXXXXXXXXXXXXXX";    // your network SSID (name)\nchar pass[] = "XXXXXXXXXXXXXXXXXX";        // your network password\n\n// UnwiredLabs API_Token\nString token = "XXXXXXXXXXXXXXXXXXXXXX";\n')),Object(a.b)("p",null,"\ub2e4\uc74c \uadf8\ub9bc\uacfc \uac19\uc774 Arduino Mega2560 \ubcf4\ub4dc\uc640 \ud3ec\ud2b8\ub97c \uc120\ud0dd\ud558\uace0, \ucef4\ud30c\uc77c\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/arduino_ide_screen.png",alt:"Board check"}))),Object(a.b)("p",null,"\ucef4\ud30c\uc77c\uc774 \uc644\ub8cc \ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc5c5\ub85c\ub4dc\ub97c \uc218\ud589\ud558\uc5ec \ucd5c\uc885\uc801\uc73c\ub85c \ubcf4\ub4dc\uc5d0 \uc5c5\ub85c\ub4dc\ub97c \uc218\ud589 \ud569\ub2c8\ub2e4. \uc5c5\ub85c\ub4dc\uac00 \uc815\uc0c1\uc801\uc73c\ub85c \uc644\ub8cc\ub418\uba74 'avrdude done. Thank you.' \uba54\uc2dc\uc9c0\ub97c \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/compile_upload_complete.JPG",alt:"Upload check"}))),Object(a.b)("p",null,"\uc5c5\ub85c\ub4dc\ub97c \uc644\ub8cc\ud55c \ud6c4, \uc2dc\ub9ac\uc5bc \ubaa8\ub2c8\ud130\ub97c \uc774\uc6a9\ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c Arduino Mega2560 \ubcf4\ub4dc\uc5d0 \uc5c5\ub85c\ub4dc \ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(a.b)("a",{name:"Step-5-Read_Data_From_IoT_Hub"}),Object(a.b)("h3",{id:"5-\ub3d9\uc791-\uc608\uc81c-\uacb0\uacfc"},"5. \ub3d9\uc791 \uc608\uc81c \uacb0\uacfc"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"After uploading code to Arduino board results can be checked on serial monitor.")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/serial_monitor_screenshot.JPG",alt:"Result check"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Google Maps can be used to verify location coordinates.")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/Document/img/other_guides/location_tracker/google_maps_screenshot.JPG",alt:"Google map check"}))),Object(a.b)("a",{name:"Next"}),Object(a.b)("h2",{id:"\ub2e4\uc74c-\ub2e8\uacc4"},"\ub2e4\uc74c \ub2e8\uacc4"),Object(a.b)("p",null,"In next guide we will connect WizFi360 with Google Location API."))}u.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||a;return r?i.a.createElement(m,c({ref:t},b,{components:r})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<a;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);