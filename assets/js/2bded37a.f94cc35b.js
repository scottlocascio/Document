(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9491],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return i?n.createElement(f,a(a({ref:t},u),{},{components:i})):n.createElement(f,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8995:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},Highlight:function(){return c},default:function(){return d}});var n=i(4034),r=i(9973),o=(i(7294),i(3905)),a={id:"airkiss",title:"Airkiss Configuration Guide",sidebar_label:"Airkiss Configuration",keywords:["WizFi360","AirKiss"]},s={unversionedId:"basic_guides/airkiss",id:"basic_guides/airkiss",isDocsHomePage:!1,title:"Airkiss Configuration Guide",description:"backgroundColor: color,",source:"@site/docs/basic_guides/airkiss.md",sourceDirName:"basic_guides",slug:"/basic_guides/airkiss",permalink:"/Document/docs/basic_guides/airkiss",editUrl:"https://github.com/wizfi/Document/tree/master/docs/basic_guides/airkiss.md",version:"current",sidebar_label:"Airkiss Configuration",frontMatter:{id:"airkiss",title:"Airkiss Configuration Guide",sidebar_label:"Airkiss Configuration",keywords:["WizFi360","AirKiss"]},sidebar:"docs",previous:{title:"W600-SDK",permalink:"/Document/docs/basic_guides/w600sdk"},next:{title:"Program WizFi360 using Arduino IDE",permalink:"/Document/docs/basic_guides/arduino_ide"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Airkiss sequence",id:"airkiss-sequence",children:[]},{value:"Android Application",id:"android-application",children:[{value:"Connect with AirKiss",id:"connect-with-airkiss",children:[]},{value:"TCP Client Test",id:"tcp-client-test",children:[]}]}],c=function(e){var t=e.children,i=e.color;return(0,o.kt)("span",{style:{backgroundColor:i,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",t," ")},u={toc:l,Highlight:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide we introduce Airkiss method to configure WizFi360."),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(5672).Z})),(0,o.kt)("h2",{id:"airkiss-sequence"},"Airkiss sequence"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set module to station mode using ",(0,o.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"AT+CWMODE_DEF=1"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Airkiss start using ",(0,o.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"AT+CWSTARTSMART=2"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch Android app and input WiFi AP' SSID and password.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check AP connection status")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start WizFi360 Server mode"))),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u2022 SmartConfig is only available in the Station mode. (AT+CWMODE_CUR=1)",(0,o.kt)("br",null),'\n\u2022 The message "smart get wifi info" means that SmartConfig has successfully acquired the AP\ninformation. WizFi360 will try to connect to the target AP.',(0,o.kt)("br",null),'\n\u2022 The message "smartconfig connected wifi" is printed if the connection is successful. Use command AT+CWSTOPSMART to stop SmartConfig before running other commands. Please make sure that you do not execute other commands during SmartConfig.',(0,o.kt)("br",null),"\n\u2022 The LED(PB_07) is blinking fast during running Oneshot via Airkiss.",(0,o.kt)("br",null),"\nThe LED(PB_07) is blinking slowly during running Oneshot via WebServer.\u2022 SmartConfig "))),(0,o.kt)("h2",{id:"android-application"},"Android Application"),(0,o.kt)("h3",{id:"connect-with-airkiss"},"Connect with AirKiss"),(0,o.kt)("p",null,"Prior configuring WizFi360 module it is necessary to set settings in Android application.\nThis procedure is simple and contains following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch application on smartphone which is connected to AP."),(0,o.kt)("li",{parentName:"ol"},'Input SSID and password, then press "Setting" button.'),(0,o.kt)("li",{parentName:"ol"},"Wait while WizFi360 is connected to AP."),(0,o.kt)("li",{parentName:"ol"},"Upon completion app will display MAC and IP addresses.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(1967).Z})),(0,o.kt)("h3",{id:"tcp-client-test"},"TCP Client Test"),(0,o.kt)("p",null,"It is possible to test TCP connection between WizFi360 and smartphone, where smartphone will be TCP client and WizFi360 will be used as server."),(0,o.kt)("p",null,"To conduct test follow below procedures:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Press "Menu" button on top left side of application. Then press "TCP Client Test"'),(0,o.kt)("li",{parentName:"ol"},'Check IP address and port, then click "Connect" button. When application is connected, button will be changed to "Disconnect".'),(0,o.kt)("li",{parentName:"ol"},'Input a message and press "Send" button.'),(0,o.kt)("li",{parentName:"ol"},"App will display message on the screen when it is received from server.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(3449).Z})))}d.isMDXComponent=!0},1967:function(e,t,i){"use strict";t.Z=i.p+"assets/images/airkiss_android_app-a806834d958209610a3d3cf13e025360.png"},3449:function(e,t,i){"use strict";t.Z=i.p+"assets/images/airkiss_android_tcp-87ccfb4d5719da904103e186f7834673.png"},5672:function(e,t,i){"use strict";t.Z=i.p+"assets/images/airkiss_diagran-6ff2355647b0fbf80babd496e83432b3.png"}}]);