(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{133:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(145)),o={id:"mqtt_client",title:"MQTT Client",sidebar_label:"MQTT Client"},c={id:"basic_guides/mqtt_client",title:"MQTT Client",description:"## Introduction\r",source:"@site/docs\\basic_guides\\mqtt_client.md",permalink:"/Document/docs/basic_guides/mqtt_client",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basic_guides/mqtt_client.md",sidebar_label:"MQTT Client",sidebar:"docs",previous:{title:"SPI Guide",permalink:"/Document/docs/basic_guides/spi_guide"},next:{title:"Hardware Design Guide",permalink:"/Document/docs/basic_guides/hardware_design"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Local Test Environment",id:"local-test-environment",children:[]},{value:"WizFi360 AT Commands",id:"wizfi360-at-commands",children:[{value:"Station Mode",id:"station-mode",children:[]},{value:"MQTT Connect &amp; Data Publish",id:"mqtt-connect--data-publish",children:[]}]}],b={rightToc:l};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"MQTT is a light weight messaging protocol for use on top of the TCP/IP protocol. It is designed for connections with remote locations where a \u201csmall code footprint\u201d is required or the network bandwidth is limited.It is a communication protocol which almost can link all networked objects with the external, and it is used as a sensor. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/MQTT"}),"https://en.wikipedia.org/wiki/MQTT")),Object(i.b)("h2",{id:"local-test-environment"},"Local Test Environment"),Object(i.b)("p",null,"Brokers acting as Mqtt Servers mainly use the Mosquitto program. Download and install the Mosquitto tool from the following link. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://mosquitto.org"}),"https://mosquitto.org"),"\nConnect your Mosquitto-installed PC and WizFi360 to the same Router (AP)."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/mqtt_client/fig1.png",alt:null}))),Object(i.b)("p",null,"Open a command prompt window and navigate to the path where Mosquitto is installed. (cd C: \\ Program Files \\ mosquitto)\nThen run the following command: (mosquitto -c mosquitto.conf -p 1883 -v) 1883 is the port number, and Mqtt usually uses the 1883 port number."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/basic_guides/mqtt_client/fig2.png",alt:null}))),Object(i.b)("h2",{id:"wizfi360-at-commands"},"WizFi360 AT Commands"),Object(i.b)("p",null,"Use following commands to connect to Wi-Fi AP."),Object(i.b)("h3",{id:"station-mode"},"Station Mode"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"AT Command"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"AT",Object(i.b)("br",null)," AT+CWMODE_CUR=1",Object(i.b)("br",null),"AT+CWDHCP_CUR=1,1",Object(i.b)("br",null),"AT+CWLAP",Object(i.b)("br",null),"AT+CWJAP_CUR=\u201dssid\u201d,\u201dpassword\u201d",Object(i.b)("br",null),"AT+CIPSTA_CUR?"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/basic_guides/mqtt_client/fig3.png",alt:null})))))),Object(i.b)("h3",{id:"mqtt-connect--data-publish"},"MQTT Connect & Data Publish"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"AT Command"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Terminal"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'AT+MQTTSET="USER_ID","PASSWORD","CLIENT_ID",60',Object(i.b)("br",null),'AT+MQTTTOPIC="PUB_TOPIC","SUB_TOPIC"',Object(i.b)("br",null),'AT+MQTTCON=0,"192.168.1.102",1883',Object(i.b)("br",null),"AT+MQTTPUB=\u201d0123456789\u201d"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(i.b)("img",Object(r.a)({parentName:"td"},{src:"/Document/img/basic_guides/mqtt_client/fig4.png",alt:null})))))))}s.isMDXComponent=!0},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),s=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},u=function(t){var e=s(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,b=l(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,p=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(p,c({ref:e},b,{components:n})):a.a.createElement(p,c({ref:e},b))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);