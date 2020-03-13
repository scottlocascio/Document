(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return p}));var r=i(1),a=i(6),n=(i(0),i(139)),c={id:"wizfi360io",title:"WizFi360io",sidebar_label:"WizFi360io"},o={id:"wizfi360io",title:"WizFi360io",description:"## Overview\r",source:"@site/docs\\wizfi360io.md",permalink:"/Document/docs/wizfi360io",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/wizfi360io.md",sidebar_label:"WizFi360io",sidebar:"docs",previous:{title:"WizFi360-EVB-Mini",permalink:"/Document/docs/wizfi360_mini"},next:{title:"Firmware Upgrade Guide",permalink:"/Document/docs/basic_guides/firmware_upgrade"}},l=[{value:"Overview",id:"overview",children:[]},{value:"WizFi360io-C",id:"wizfi360io-c",children:[]},{value:"WizFi360io-H",id:"wizfi360io-h",children:[]},{value:"Features",id:"features",children:[]},{value:"Quick Start Guide",id:"quick-start-guide",children:[]},{value:"Datasheet",id:"datasheet",children:[]},{value:"Technical Reference",id:"technical-reference",children:[{value:"Ref Schematic &amp; Other Board Schematics",id:"ref-schematic--other-board-schematics",children:[]},{value:"Library",id:"library",children:[]}]},{value:"ETC",id:"etc",children:[{value:"WizFi360io-C Connector Datasheet",id:"wizfi360io-c-connector-datasheet",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"This page describes the io interface boards using WizFi360. WizFi360io series boards can be customized according to customers' requests."),Object(n.b)("h2",{id:"wizfi360io-c"},"WizFi360io-C"),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/wizfi360io-c.png",alt:"WizFi360io-C"}))),Object(n.b)("p",null,"WizFi360io-C cable connector type io interface board. The operating voltage of the WizFi360io-C and the UART voltage are 5V. WizFi360io-C can connect the UART interface to the connector. The part name of the connector mounted on WizFi360io-C is \u201cSMW200-06\u201d. The cable connector that can be connected to \u201cSMW200-06\u201d is \u201cSMH200-06\u201d."),Object(n.b)("h2",{id:"wizfi360io-h"},"WizFi360io-H"),Object(n.b)("p",null,Object(n.b)("img",Object(r.a)({parentName:"p"},{src:"/Document/img/wizfi360-h.png",alt:"WizFi360io-H"}))),Object(n.b)("p",null,"WizFi360io-H is a pin header type io interface board. The form factor of WizFi360io is an Xbee interface module. 2.00mm pin header is used, similar to the Xbee pin layout. But it is not exactly compatible."),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"WizFi360",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"WiFi 2.4G, 802.11 b/g/n"),Object(n.b)("li",{parentName:"ul"},"Support Station / SoftAP / SoftAP+Station operation modes"),Object(n.b)("li",{parentName:"ul"},"Support \u201cData pass-through\u201d and \u201cAT command data transfer\u201d mode"),Object(n.b)("li",{parentName:"ul"},"Support serial AT command configuration"),Object(n.b)("li",{parentName:"ul"},"Support TCP Server / TCP Client / UDP operating mode"),Object(n.b)("li",{parentName:"ul"},"Support configuration of operating channel 0 ~ 13"),Object(n.b)("li",{parentName:"ul"},"Support auto 20MHz / 40MHz bandwidth"),Object(n.b)("li",{parentName:"ul"},"Support WPA_PSK / WPA2_PSK encryption"),Object(n.b)("li",{parentName:"ul"},"Serial port baud rate up from 600bps to 2Mbps with 16 common values"),Object(n.b)("li",{parentName:"ul"},"Support up to 5 TCP / UDP links"),Object(n.b)("li",{parentName:"ul"},"Obtaining IP address automatically from the DHCP server (Station mode)"),Object(n.b)("li",{parentName:"ul"},"DHCP service for Wireless LAN clients (AP mode)"),Object(n.b)("li",{parentName:"ul"},"Support DNS for communication with servers by domain name"),Object(n.b)("li",{parentName:"ul"},"Support \u201cKeep-Alive\u201d to monitor TCP connection"),Object(n.b)("li",{parentName:"ul"},"Support \u201cPing\u201d for monitoring network status"),Object(n.b)("li",{parentName:"ul"},"Built-in SNTP client for receiving the network time"),Object(n.b)("li",{parentName:"ul"},"Support built-in unique MAC address and user configurable"),Object(n.b)("li",{parentName:"ul"},"Support firmware upgrade by UART Download / OTA (via WLAN)"),Object(n.b)("li",{parentName:"ul"},"Industrial grade (operating temperature range: -40 \xb0 C ~ 85 \xb0 C)"),Object(n.b)("li",{parentName:"ul"},"CE, FCC certification"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"WizFi360io-C"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"5V Operating Voltage",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Built-in LDO"),Object(n.b)("li",{parentName:"ul"},"WizFi360 operates at 3.3V"))),Object(n.b)("li",{parentName:"ul"},"5V voltage level UART",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Built-in Level Shifters"),Object(n.b)("li",{parentName:"ul"},"WizFi360 operates at 3.3V"))),Object(n.b)("li",{parentName:"ul"},"SMW200-06 Mounted",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Cable side connector is SMH200-06"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"WizFi360io-H"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"3.3V Operating Voltage",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Xbee Form Factor"),Object(n.b)("li",{parentName:"ul"},"2.00mm Pin Header")))))),Object(n.b)("h2",{id:"quick-start-guide"},"Quick Start Guide"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360qs_v113e.pdf"}),"Quick Start Guide")),Object(n.b)("h2",{id:"datasheet"},"Datasheet"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-c_ds_102_en.pdf"}),"WizFi360io-C")),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:wizfi360ds:wizfi360io-h_ds_101_en.pdf"}),"WizFi360io-H")),Object(n.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(n.b)("h3",{id:"ref-schematic--other-board-schematics"},"Ref Schematic & Other Board Schematics"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/07_WizFi_Module/WizFi360-EVB-Shield"}),"Link to Github")),Object(n.b)("h3",{id:"library"},"Library"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/wizfi/Release"}),"Link to Github")),Object(n.b)("h2",{id:"etc"},"ETC"),Object(n.b)("h3",{id:"wizfi360io-c-connector-datasheet"},"WizFi360io-C Connector Datasheet"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/lib/exe/fetch.php/products:wizfi360:board:wizfi360io-c:smw200-nn.pdf"}),"SMW200-06")))}p.isMDXComponent=!0},139:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var r=i(0),a=i.n(r);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):o({},t,{},e)),i},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(i),s=r,d=u["".concat(c,".").concat(s)]||u[s]||m[s]||n;return i?a.a.createElement(d,o({ref:t},b,{components:i})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,c=new Array(n);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<n;b++)c[b]=i[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,i)}s.displayName="MDXCreateElement"}}]);