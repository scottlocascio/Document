(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(1),n=a(6),i=(a(0),a(142)),c={id:"intro",title:"Getting Started",sidebar_label:"Introduction"},o={id:"intro",title:"Getting Started",description:"## Overview",source:"@site/docs\\intro.md",permalink:"/Document/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Resources",permalink:"/Document/docs/resources"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Details",id:"details",children:[]},{value:"Evaluation Boards",id:"evaluation-boards",children:[]},{value:"Custom Modules",id:"custom-modules",children:[]}],p={rightToc:b};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360-CON"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360-PA"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/wizfi360-con.png",alt:"WizFi360-CON"}))),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/wizfi360-pa.png",alt:"WizFi360-PA"})))))),Object(i.b)("p",null,"WizFi360 is a low cost and low-power consumption industrial-grade WiFi\nmodule. It is compatible with IEEE802.11 b/g/n standard and supports\nSoftAP, Station and SoftAP+Station modes. The serial port baud rate can\nbe up to 2Mbps, which can meet the requirement of various applications."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WiFi 2.4G, 802.11 b/g/n"),Object(i.b)("li",{parentName:"ul"},"Support Station / SoftAP / SoftAP+Station operation modes"),Object(i.b)("li",{parentName:"ul"},"Support \u201cData pass-through\u201d and \u201cAT command data transfer\u201d mode"),Object(i.b)("li",{parentName:"ul"},"Support serial AT command configuration"),Object(i.b)("li",{parentName:"ul"},"Support TCP Server / TCP Client / UDP operating mode"),Object(i.b)("li",{parentName:"ul"},"Support configuration of operating channel 0 ","~"," 13"),Object(i.b)("li",{parentName:"ul"},"Support auto 20MHz / 40MHz bandwidth"),Object(i.b)("li",{parentName:"ul"},"Support WPA","_","PSK / WPA2","_","PSK encryption"),Object(i.b)("li",{parentName:"ul"},"Serial port baud rate up from 600bps to 2Mbps with 16 common values"),Object(i.b)("li",{parentName:"ul"},"Support up to 5 TCP / UDP links"),Object(i.b)("li",{parentName:"ul"},"Obtaining IP address automatically from the DHCP server (Station\nmode)"),Object(i.b)("li",{parentName:"ul"},"DHCP service for Wireless LAN clients (AP mode)"),Object(i.b)("li",{parentName:"ul"},"Support DNS for communication with servers by domain name"),Object(i.b)("li",{parentName:"ul"},"Support \u201cKeep-Alive\u201d to monitor TCP connection"),Object(i.b)("li",{parentName:"ul"},"Support \u201cPing\u201d for monitoring network status"),Object(i.b)("li",{parentName:"ul"},"Built-in SNTP client for receiving the network time"),Object(i.b)("li",{parentName:"ul"},"Support built-in unique MAC address and user configurable"),Object(i.b)("li",{parentName:"ul"},"Support firmware upgrade by UART Download / OTA (via WLAN)"),Object(i.b)("li",{parentName:"ul"},"Industrial grade (operating temperature range: -40 \xb0 C ","~"," 85 \xb0 C)"),Object(i.b)("li",{parentName:"ul"},"CE, FCC certification\u2003")),Object(i.b)("h2",{id:"details"},"Details"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start"}),"Documents")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#datasheet"}),"Datasheet"),"\n: A brief introduce about WizFi360. These documents describe the\nFeatures, package information and etc. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#at_instruction_set"}),"AT Instruction\nset"),":\nIt describes the AT Command of WizFi360 and you can confirm the\nreturn message by AT command of WizFi360."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#at_command_examples"}),"AT command Example"),":\nIt includes the Basic example using AT command and it is\nexamples of TCP, UDP, SSL use."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/wiki/doku.php?id=products:wizfi360:wizfi360ds:start#quick_start_guide"}),"Quick Start Guide"),":\nThe examples using the WizFi360-EVB or WizFi360io, it describes\nthe scenarios in order from Hardware setting to example of AT\ncommand use")))),Object(i.b)("h2",{id:"evaluation-boards"},"Evaluation Boards"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360-EVB-Mini"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360-EVB-Shield"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/WizFi360-mini.png",alt:"WizFi360-CON"}))),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/img_evb_mini.png",alt:"WizFi360-PA"})))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"- NodeMCU Pin-Compatible"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Arduino Pin-Compatible")))),Object(i.b)("h2",{id:"custom-modules"},"Custom Modules"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360io-H"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"WizFi360io-C"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/img_evb_mini_2.png",alt:"WizFi360-CON"}))),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/img_evb_shield_2.png",alt:"WizFi360-PA"})))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Similar to XBee pinout"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"5V operation")))))}l.isMDXComponent=!0},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,s=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?n.a.createElement(s,o({ref:t},p,{components:a})):n.a.createElement(s,o({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);