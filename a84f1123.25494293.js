(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{122:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return o})),i.d(t,"default",(function(){return u}));var r=i(1),a=i(6),n=(i(0),i(139)),c={id:"wizfi360_shield",title:"WizFi360-EVB-Shield",sidebar_label:"WizFi360-EVB-Shield"},l={id:"wizfi360_shield",title:"WizFi360-EVB-Shield",description:"![WizFi360-EVB-Shield](/Document/img/wizfi360-evb.jpg)\r",source:"@site/docs\\wizfi360_shield.md",permalink:"/Document/docs/wizfi360_shield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wizfi360_shield.md",sidebar_label:"WizFi360-EVB-Shield",sidebar:"docs",previous:{title:"Resources",permalink:"/Document/docs/resources"},next:{title:"WizFi360-EVB-Mini",permalink:"/Document/docs/wizfi360_mini"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Quick Start Guide",id:"quick-start-guide",children:[]},{value:"Datasheet",id:"datasheet",children:[]},{value:"Technical Reference",id:"technical-reference",children:[{value:"Ref Schematic &amp; Other Board Schematics",id:"ref-schematic--other-board-schematics",children:[]},{value:"Library",id:"library",children:[]}]},{value:"ETC",id:"etc",children:[{value:"Serial Port Driver",id:"serial-port-driver",children:[]},{value:"Sensor Datasheets",id:"sensor-datasheets",children:[]}]}],b={rightToc:o};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/wizfi360-evb.jpg",alt:"WizFi360-EVB-Shield"}))),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"This document describes WizFi360-EVB-Shield. WizFi360-EVB-Shield is a development board for experiment, test and verification of WizFi360. WizFi360-EVB-Shield can also be used as an Arduino shield. WizFi360 is a low cost and low-power consumption industrial-grade WiFi module. It is compatible with IEEE802.11 b/g/n standard and supports SoftAP, Station and SoftAP+Station modes. The serial port baud rate can be up to 2Mbps, which can meet the requirement of various applications."),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"WizFi360",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"WiFi 2.4G, 802.11 b/g/n"),Object(n.b)("li",{parentName:"ul"},"Support Station / SoftAP / SoftAP+Station operation modes"),Object(n.b)("li",{parentName:"ul"},"Support \u201cData pass-through\u201d and \u201cAT command data transfer\u201d mode"),Object(n.b)("li",{parentName:"ul"},"Support serial AT command configuration"),Object(n.b)("li",{parentName:"ul"},"Support TCP Server / TCP Client / UDP operating mode"),Object(n.b)("li",{parentName:"ul"},"Support configuration of operating channel 0 ~ 13"),Object(n.b)("li",{parentName:"ul"},"Support auto 20MHz / 40MHz bandwidth"),Object(n.b)("li",{parentName:"ul"},"Support WPA_PSK / WPA2_PSK encryption"),Object(n.b)("li",{parentName:"ul"},"Serial port baud rate up from 600bps to 2Mbps with 16 common values"),Object(n.b)("li",{parentName:"ul"},"Support up to 5 TCP / UDP links"),Object(n.b)("li",{parentName:"ul"},"Obtaining IP address automatically from the DHCP server (Station mode)"),Object(n.b)("li",{parentName:"ul"},"DHCP service for Wireless LAN clients (AP mode)"),Object(n.b)("li",{parentName:"ul"},"Support DNS for communication with servers by domain name"),Object(n.b)("li",{parentName:"ul"},"Support \u201cKeep-Alive\u201d to monitor TCP connection"),Object(n.b)("li",{parentName:"ul"},"Support \u201cPing\u201d for monitoring network status"),Object(n.b)("li",{parentName:"ul"},"Built-in SNTP client for receiving the network time"),Object(n.b)("li",{parentName:"ul"},"Support built-in unique MAC address and user configurable"),Object(n.b)("li",{parentName:"ul"},"Support firmware upgrade by UART Download / OTA (via WLAN)"),Object(n.b)("li",{parentName:"ul"},"Industrial grade (operating temperature range: -40 \xb0 C ~ 85 \xb0 C)"),Object(n.b)("li",{parentName:"ul"},"CE, FCC certification\u2003"))),Object(n.b)("li",{parentName:"ul"},"ETC",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Built-in UART to USB chip",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"CP2104-GM"),Object(n.b)("li",{parentName:"ul"},"Micro USB B Type Connector"))),Object(n.b)("li",{parentName:"ul"},"UART Selector",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"JP1, JP2, JP3"),Object(n.b)("li",{parentName:"ul"},"2.54mm Pin Header"))),Object(n.b)("li",{parentName:"ul"},"Built-in Sensors",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Temprature/Humidity Sensor: DHT11"),Object(n.b)("li",{parentName:"ul"},"CDS Sensor: GL5537"))),Object(n.b)("li",{parentName:"ul"},"Built-in Tact Switchs",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"System Reset Switch: S1"),Object(n.b)("li",{parentName:"ul"},"WiFi Reset Switch: S2"))),Object(n.b)("li",{parentName:"ul"},"Built-in LED Indicators",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"D13 LED"))),Object(n.b)("li",{parentName:"ul"},"Built-in Level Shifters",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The voltage of the RXD/TXD signal changes according to the main board platform voltage."))),Object(n.b)("li",{parentName:"ul"},"Built-in DIP Switchs",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"UART RXD/TXD Selector: SW1"),Object(n.b)("li",{parentName:"ul"},"UART RTS/CTS Selector: SW2"),Object(n.b)("li",{parentName:"ul"},"Sensor/RESET Pins Selector: SW3")))))),Object(n.b)("h2",{id:"quick-start-guide"},"Quick Start Guide"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113e.pdf"}),"Quick Start Guide")),Object(n.b)("h2",{id:"datasheet"},"Datasheet"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360-evb-shield_ds_112_en.pdf"}),"Download")),Object(n.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(n.b)("h3",{id:"ref-schematic--other-board-schematics"},"Ref Schematic & Other Board Schematics"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/07_WizFi_Module/WizFi360-EVB-Shield"}),"Link to Github")),Object(n.b)("h3",{id:"library"},"Library"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wizfi/Release"}),"Link to Github")),Object(n.b)("h2",{id:"etc"},"ETC"),Object(n.b)("h3",{id:"serial-port-driver"},"Serial Port Driver"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"CP210x USB to UART Bridge VCP Drivers")),Object(n.b)("h3",{id:"sensor-datasheets"},"Sensor Datasheets"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.micropik.com/PDF/dht11.pdf"}),"DHT11 Humidity & Temperature Sensor Datasheet")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.kth.se/social/files/54ef17dbf27654753f437c56/GL5537.pdf"}),"GL5537 Datasheet"))))}u.isMDXComponent=!0},139:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var r=i(0),a=i.n(r);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):l({},t,{},e)),i},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(i),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||n;return i?a.a.createElement(m,l({ref:t},b,{components:i})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,c=new Array(n);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<n;b++)c[b]=i[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);