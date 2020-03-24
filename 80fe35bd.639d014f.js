(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(6),o=(n(0),n(145)),a={id:"http_server",title:"HTTP Server using WizFi360",sidebar_label:"HTTP Server"},c={id:"basic_guides/http_server",title:"HTTP Server using WizFi360",description:"## Introduction\r",source:"@site/docs\\basic_guides\\http_server.md",permalink:"/Document/docs/basic_guides/http_server",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basic_guides/http_server.md",sidebar_label:"HTTP Server",sidebar:"docs",previous:{title:"HTTP Client using WizFi360",permalink:"/Document/docs/basic_guides/http_client"},next:{title:"Throughput",permalink:"/Document/docs/basic_guides/throughput"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Hardware environment",id:"hardware-environment",children:[]},{value:"Library download",id:"library-download",children:[]},{value:"Execution",id:"execution",children:[{value:"Open example",id:"open-example",children:[]},{value:"Code",id:"code",children:[]},{value:"Result",id:"result",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"HTTP(Hypertext transfer protocol) is a communication protocol for exchanging data between server and client on the Web. HTTP exchanges data in the form that the client sends the request and the server sends the reply to the request. At this time, Server transmits response such as HTML, JSON, etc., and uses port 80. HTTP is a TCP-based protocol. WizFi360 can communicate the HTTP communication by creating TCP Server. The HTTP protocol must be implemented by the user."),Object(o.b)("h2",{id:"hardware-environment"},"Hardware environment"),Object(o.b)("p",null,"This document uses Arduino Mega2560 and WizFi360-EVB-Shield. To communicate with the WizFi360-EVB-Shield using UART1 in the Arduino Code, connect the TX1 and RX1 pins of Arduino to the RXD and TXD pins of the WizFi360-EVB-Shield. In the WizFi360-EVB-Shield, change the RXD / TXD Selector to OFF to enable UART communication via the pin, not the USB."),Object(o.b)("p",null,"You can also use D0 ~ D8 Pin as TXD / RXD Pin by using UART Select Pin header. If you use it, you can connect without Wiring by placing WizFi360-EVB-Shield on Arduino. "),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/http_client/http_client.png",alt:null}))),Object(o.b)("h2",{id:"library-download"},"Library download"),Object(o.b)("p",null,"Download the library from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wizfi/WizFi360EVB-Arduino"}),"Github")," and copy it in the \u201clibraries\u201d folder inside your sketchbook."),Object(o.b)("h2",{id:"execution"},"Execution"),Object(o.b)("h3",{id:"open-example"},"Open example"),Object(o.b)("p",null,"Launch Arduino and Open the WebServer example as shown below."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/http_server/http_server_arduino_ide.png",alt:null}))),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)("p",null,"Update your AP credentials (SSID and password) to connect WizFi360.\nSerial1 is the serial communicating with Arduino and WizFi360 and should have the same baud rate as WizFi360. The factory default baud rate for WizFi360 is 115200, and if you have not changed it, enter 115200.\nEnter the address of the HTTP server to connect to server. You can enter ip address or domain address. In this case, connect to arduino.cc."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/http_server/http_server_code.png",alt:null}))),Object(o.b)("p",null,"Arduino (WizFi360-EVB-Shield) transmits the following HTML data when Web client connects. If you want to send other data, you can modify it below."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/http_server/http_server_code_1.png",alt:null}))),Object(o.b)("h3",{id:"result"},"Result"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Check the firmware version. The current firmware version is 3.0.0."),Object(o.b)("li",{parentName:"ol"},"Attempted to connect to the AP, succeeded, and assigned a virtual IP address of 192.168.1.118."),Object(o.b)("li",{parentName:"ol"},"TCP Server was created and WebServer was opened."),Object(o.b)("li",{parentName:"ol"},"Check the connection of the client and receive the Get method data from the client"),Object(o.b)("li",{parentName:"ol"},"HTML data sent to client.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/http_server/http_server_result.png",alt:null}))))}s.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,h=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(h,c({ref:t},u,{components:n})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);