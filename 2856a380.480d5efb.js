(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var r=a(1),i=a(6),n=(a(0),a(145)),b={id:"w600sdk",title:"W600-SDK",sidebar_label:"W600-SDK"},c={id:"basic_guides/w600sdk",title:"W600-SDK",description:"## Overview\r",source:"@site/docs\\basic_guides\\w600.md",permalink:"/Document/docs/basic_guides/w600sdk",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basic_guides/w600.md",sidebar_label:"W600-SDK",sidebar:"docs",previous:{title:"Throughput",permalink:"/Document/docs/basic_guides/throughput"},next:{title:"WizFi360 MQTT AT Command\ub97c \uc774\uc6a9\ud558\uc5ec Azure IoT Hub\uc5d0 \uc5f0\ub3d9",permalink:"/Document/docs/connect_to_cloud/standalone_mqtt"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Software SDK",id:"software-sdk",children:[]},{value:"Software SDK User Manual",id:"software-sdk-user-manual",children:[{value:"Basic",id:"basic",children:[]},{value:"Advanced",id:"advanced",children:[]}]},{value:"Chip vendor original page",id:"chip-vendor-original-page",children:[]}],o={rightToc:d};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"WizFi360 is based on the W600 chip which features ARM Cortex-M3 with 1MB on-chip flash and freeRTOS kernel. This page includes the software development kit (SDK) files, documents, and usage method. This SDK has integrated WizFi360 hardware driver (BSP), RTOS, TCP/IP protocol, Wi-Fi Protocol and other public function modules."),Object(n.b)("h2",{id:"software-sdk"},"Software SDK"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Item"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Detail"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Official SDK"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"mailto:wizfi@wiznet.io"}),"Contact us"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Official SDK from chip vendor"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_sdk_w60x_g3.02.00_190729.zip"}),"Download link"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"KEIL Flash Driver"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:w60x_qflash_driver_for_swd.zip"}),"Download link"))))),Object(n.b)("h2",{id:"software-sdk-user-manual"},"Software SDK User Manual"),Object(n.b)("h3",{id:"basic"},"Basic"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Item"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wizfi360_w600_sdk_guide_v0.0.1_e.pdf"}),"WizFi360_W600_SDK_Guide_v0.0.1_E")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the basic way to download and compile of W600 SDK in English.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wizfi360_w600_sdk_guide_v0.0.1_k.pdf"}),"WizFi360_W600_SDK_Guide_v0.0.1_K")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the basic way to download and compile of W600 SDK in Korean.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_sdk_user_manual_v1.1.pdf"}),"SDK User Manual V1.1")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the functions and usage of W600 SDK.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_sdk_demo_user_guide_v0.5.pdf"}),"SDK DEMO User Guide V0.5")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the demo code of SDK for developers.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_sdk_gcc_compiling_guide_v1.2.pdf"}),"SDK GCC Compiling Guide V1.2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes building in linux environment")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_sdk_at_command_v1.0.3.pdf"}),"AT Command V1.0.3")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the WM's AT instruction communication protocol.")))),Object(n.b)("h3",{id:"advanced"},"Advanced"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Item"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_firmware_generation_guide_v1.2.pdf"}),"Firmware Generation Guide V1.2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the firmware's format, storage address and image generation.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_firmware_update_guide_v1.2.pdf"}),"Firmware Update Guide V1.2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes how to update the firmware.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_qflash_management_guide_v1.2.pdf"}),"QFLASH Management Guide V1.2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes the management of QFLASH intergrated in chip.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_parameter_space_guide_v1.2.pdf"}),"Parameter Space Guide V1.2")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes how to deal with QFLASH management, key parameter space, system parameter space and user parameter space.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_secboot_function_guide_v1.1.pdf"}),"SECBOOT Function Guide V1.1")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes SECBOOT functions and usages for designer and developer.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360sdk:wm_w60x_swd_debugging_guide_v1.4.pdf"}),"SWD Debugging Guide V1.4")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Describes chip on-line debug configuration under KEIL IDE.")))),Object(n.b)("h2",{id:"chip-vendor-original-page"},"Chip vendor original page"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.winnermicro.com/en/html/1/156/158/497.html"}),"WinnerMicro W600 download Page")))}p.isMDXComponent=!0},145:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},l=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,b=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),l=p(a),f=r,m=l["".concat(b,".").concat(f)]||l[f]||s[f]||n;return a?i.a.createElement(m,c({ref:t},o,{components:a})):i.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,b=new Array(n);b[0]=f;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var o=2;o<n;o++)b[o]=a[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);