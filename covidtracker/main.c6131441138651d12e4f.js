!function(t){function a(a){for(var n,r,l=a[0],s=a[1],p=a[2],c=0,m=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(a);m.length;)m.shift()();return i.push.apply(i,p||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,l=1;l<e.length;l++){var s=e[l];0!==o[s]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},o={1:0},i=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/covidtracker/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var p=0;p<l.length;p++)a(l[p]);var u=s;i.push([18,0,3]),e()}({1:function(t,a,e){t.exports={categorySelect:"categorySelect-2hsja",buttonGroup:"buttonGroup-hAlKE",checked:"checked-2HEWh",perCapita:"perCapita-3XZGa"}},16:function(t,a,e){t.exports={map:"map-2a3w7"}},17:function(t,a,e){t.exports={app:"app-19qm0"}},18:function(t,a,e){e(19),t.exports=e(28)},28:function(t,a,e){"use strict";e.r(a);var n=e(0),o=e.n(n),i=e(5),r=e.n(i),l=e(6),s=e.n(l),p=e(11),u=e.n(p),c=e(12),m=e.n(c),d=e(13),D=e.n(d),f=e(3),I=e.n(f),h=e(14),v=e.n(h),C=e(15),y=e.n(C),g=e(7),b=e.n(g),N=e(4),k=e.n(N),P=e(2),M=e.n(P),E=e(1),S=e.n(E);function x(t){var a=t.dataPoints,e=t.dataPointIndex,n=t.vacDataIndex,i=t.perCapita,r=t.onChangeCategory,l=t.onChangePerCapita;function s(t){var e=Number.parseInt(t.target.value,10),o=n;return o>=a[e].times.length&&(o=0),r(e,o)}function p(t){var a=Number.parseInt(t.target.value,10);return r(e,a)}function u(t){return l(t.target.checked)}var c,m=a.map((function(t,a){var n=e===a,i=M()(k()({},S.a.checked,n));return o.a.createElement("label",{key:a,className:i},o.a.createElement("input",{type:"radio",name:"dataPoint",value:a,checked:n,onChange:s}),t.label)})),d=a[e].vacData.map((function(t,a){var e=n===a,i=M()(k()({},S.a.checked,e));return o.a.createElement("label",{key:t.key,className:i},o.a.createElement("input",{type:"radio",name:"vacData",value:a,checked:e,onChange:p}),t.label)})),D=(c=M()(k()({},S.a.checked,i)),o.a.createElement("label",{className:c},o.a.createElement("input",{type:"checkbox",name:"perCapita",value:"perCapita",checked:i,onChange:u}),"Per 100,000"));return o.a.createElement("div",{className:S.a.categorySelect},o.a.createElement("div",{className:S.a.buttonGroup},m),o.a.createElement("div",{className:S.a.buttonGroup},d),o.a.createElement("div",{className:M()(S.a.perCapita,S.a.buttonGroup)},D))}var A=e(8),O=e.n(A);function w(t){for(var a=t.label,e=t.perCapita,n=t.colors,i=["4979-5536","5536-6789","6789-8179","8179+"],r=["<200,000","200,000-500,000","500,000-1M","1M+"],l=[],s=0;s<4;s++){var p=n[s];!0===e?l.push(o.a.createElement("span",{style:{backgroundColor:"".concat(p),width:191,color:"#ffffff",fontSize:20}},i[s])):l.push(o.a.createElement("span",{style:{backgroundColor:"".concat(p),width:191,color:"#ffffff",fontSize:20}},r[s]))}return o.a.createElement("div",{className:O.a.Legend},a," ",e?"Per 100,000 People":null,o.a.createElement("div",{className:O.a.colordivs},l),"Data obtained from CDC COVID-19 Database Values listed are 10th, median, and 90th percentile respectively")}var V=e.p+"655164e4c3b036ab47c1c53112a2df02.svg",R=e(9),T=e(16),G=e.n(T);function W(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=b()(t);if(a){var o=b()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return y()(this,e)}}var L=["#e60000","#ff369e","#0095ff","#2679ff"],j=[{label:"COVID-19 Vaccination Status as of 2021-30-01",vacData:[{key:"admin1",label:"Persons With 1+ Doses Per 100,000"}]}],K=function(t){v()(n,t);var a,e=W(n);function n(t){var a;return m()(this,n),(a=e.call(this,t)).state={dataPointIndex:0,vacDataIndex:0,perCapita:!0},a.onChangeCategory=a.onChangeCategory.bind(I()(a)),a.onChangePerCapita=a.onChangePerCapita.bind(I()(a)),a.svgRef=o.a.createRef(),a}return D()(n,[{key:"render",value:function(){var t=this.state,a=t.dataPointIndex,e=t.vacDataIndex,n=t.perCapita,i=this.onChangeCategory,r=this.onChangePerCapita,l=this.svgRef,s=j[a].label;return o.a.createElement("div",{className:G.a.map},o.a.createElement(x,{dataPoints:j,dataPointIndex:a,vacDataIndex:e,perCapita:n,onChangeCategory:i,onChangePerCapita:r}),o.a.createElement("object",{type:"image/svg+xml",data:V,ref:l}),o.a.createElement(w,{label:s,perCapita:n,colors:L}))}},{key:"onChangeCategory",value:function(t,a){this.setState({dataPointIndex:t,vacDataIndex:a})}},{key:"onChangePerCapita",value:function(t){this.setState({perCapita:t})}},{key:"componentDidMount",value:(a=u()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadSVG();case 2:this.updateSVG();case 3:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.updateSVG()}},{key:"loadSVG",value:function(){var t=this.svgRef.current;return new Promise((function(a){t.onload=function(){t.contentDocument.onload=a}}))}},{key:"updateSVG",value:function(){for(var t=this.state,a=t.dataPointIndex,e=t.vacDataIndex,n=t.perCapita,o=j[a].vacData[e].key,i=this.svgRef.current.contentDocument,r=0,l=Object.keys(R.states);r<l.length;r++){var s=l[r],p=R.states[s],u=p.population,c=p[o],m=c/(u/1e5),d=i.getElementById(s);if(null===d)throw new Error('SVG element with ID "'.concat(s,'" not found'));var D=n?m:c;if(D<5536){var f="".concat(L[0]);d.style.fill=f}else if(D<=6789){var I="".concat(L[1]);d.style.fill=I}else if(D<=8179){var h="".concat(L[2]);d.style.fill=h}else{var v="".concat(L[3]);d.style.fill=v}}}}]),n}(o.a.Component);var H=function(){return o.a.createElement(K,null)},Y=e(17),J=e.n(Y);window.onload=function(){var t=document.createElement("div");t.classList.add(J.a.app),document.body.appendChild(t),r.a.render(o.a.createElement(H,null),t)}},8:function(t,a,e){t.exports={Legend:"Legend-1bB10",colordivs:"colordivs-pX9NY",values:"values-1ODft"}},9:function(t){t.exports=JSON.parse('{"states":{"AK":{"stateID":"AK","name":"Alaska","totalDist":"192350","admin1":"88654","population":"731545"},"AL":{"stateID":"AL","name":"Alabama","totalDist":"659400","admin1":"256601","population":"4903185"},"AR":{"stateID":"AR","name":"Arkansas","totalDist":"453500","admin1":"221552","population":"3017804"},"AZ":{"stateID":"AZ","name":"Arizona","totalDist":"1012275","admin1":"439897","population":"7278717"},"CA":{"stateID":"CA","name":"California","totalDist":"5640225","admin1":"2415659","population":"39512223"},"CO":{"stateID":"CO","name":"Colorado","totalDist":"813400","admin1":"409939","population":"5758736"},"CT":{"stateID":"CT","name":"Connecticut","totalDist":"577625","admin1":"329149","population":"3565287"},"DC":{"stateID":"DC","name":"District of Columbia","totalDist":"148325","admin1":"57152","population":"705749"},"DE":{"stateID":"DE","name":"Delaware","totalDist":"143775","admin1":"72684","population":"973764"},"FL":{"stateID":"FL","name":"Florida","totalDist":"3220350","admin1":"1554179","population":"21477737"},"GA":{"stateID":"GA","name":"Georgia","totalDist":"1448825","admin1":"693085","population":"10617423"},"HI":{"stateID":"HI","name":"Hawaii","totalDist":"226800","admin1":"89428","population":"1415872"},"IA":{"stateID":"IA","name":"Iowa","totalDist":"398600","admin1":"174655","population":"3155070"},"ID":{"stateID":"ID","name":"Idaho","totalDist":"221550","admin1":"88975","population":"1787065"},"IL":{"stateID":"IL","name":"Illinois","totalDist":"1658725","admin1":"685529","population":"12671821"},"IN":{"stateID":"IN","name":"Indiana","totalDist":"929900","admin1":"475928","population":"6732219"},"KS":{"stateID":"KS","name":"Kansas","totalDist":"412375","admin1":"157720","population":"2913314"},"KY":{"stateID":"KY","name":"Kentucky","totalDist":"650050","admin1":"312373","population":"4467673"},"LA":{"stateID":"LA","name":"Louisiana","totalDist":"620425","admin1":"339450","population":"4648794"},"MA":{"stateID":"MA","name":"Massachusetts","totalDist":"1057000","admin1":"422803","population":"6892503"},"MD":{"stateID":"MD","name":"Maryland","totalDist":"881675","admin1":"375525","population":"6045680"},"ME":{"stateID":"ME","name":"Maine","totalDist":"211150","admin1":"93513","population":"1344212"},"MI":{"stateID":"MI","name":"Michigan","totalDist":"1361500","admin1":"695236","population":"9986857"},"MN":{"stateID":"MN","name":"Minnesota","totalDist":"834550","admin1":"340311","population":"5639632"},"MO":{"stateID":"MO","name":"Missouri","totalDist":"834700","admin1":"313161","population":"6137428"},"MS":{"stateID":"MS","name":"Mississippi","totalDist":"425000","admin1":"191145","population":"2976149"},"MT":{"stateID":"MT","name":"Montana","totalDist":"141650","admin1":"71534","population":"1068778"},"NC":{"stateID":"NC","name":"North Carolina","totalDist":"1400375","admin1":"729507","population":"10488084"},"ND":{"stateID":"ND","name":"North Dakota","totalDist":"106875","admin1":"63773","population":"762062"},"NE":{"stateID":"NE","name":"Nebraska","totalDist":"288375","admin1":"120121","population":"1934408"},"NH":{"stateID":"NH","name":"New Hampshire","totalDist":"203550","admin1":"92305","population":"1359711"},"NJ":{"stateID":"NJ","name":"New Jersey","totalDist":"1231525","admin1":"616618","population":"8882190"},"NM":{"stateID":"NM","name":"New Mexico","totalDist":"317800","admin1":"189082","population":"2096829"},"NV":{"stateID":"NV","name":"Nevada","totalDist":"339900","admin1":"179805","population":"3080156"},"NY":{"stateID":"NY","name":"New York","population":"19453561"},"OH":{"stateID":"OH","name":"Ohio","totalDist":"1553900","admin1":"716677","population":"11689100"},"OK":{"stateID":"OK","name":"Oklahoma","totalDist":"594925","admin1":"323625","population":"3956971"},"OR":{"stateID":"OR","name":"Oregon","totalDist":"614525","admin1":"299508","population":"4217737"},"PA":{"stateID":"PA","name":"Pennsylvania","totalDist":"1973775","admin1":"777260","population":"12801989"},"PR":{"stateID":"PR","name":"Puerto Rico","totalDist":"530850","admin1":"174840","population":"3193694"},"RI":{"stateID":"RI","name":"Rhode Island","totalDist":"157525","admin1":"63263","population":"1059361"},"SC":{"stateID":"SC","name":"South Carolina","totalDist":"558050","admin1":"322195","population":"5148714"},"SD":{"stateID":"SD","name":"South Dakota","totalDist":"123800","admin1":"70502","population":"884659"},"TN":{"stateID":"TN","name":"Tennessee","totalDist":"953600","admin1":"400950","population":"6829174"},"TX":{"stateID":"TX","name":"Texas","totalDist":"3659550","admin1":"1804291","population":"28995881"},"UT":{"stateID":"UT","name":"Utah","totalDist":"401375","admin1":"219468","population":"3205958"},"VA":{"stateID":"VA","name":"Virginia","totalDist":"1186375","admin1":"598853","population":"8535519"},"VT":{"stateID":"VT","name":"Vermont","totalDist":"99750","admin1":"47485","population":"623989"},"WA":{"stateID":"WA","name":"Washington","totalDist":"1005500","admin1":"496008","population":"7614893"},"WI":{"stateID":"WI","name":"Wisconsin","totalDist":"793750","admin1":"339296","population":"5822434"},"WV":{"stateID":"WV","name":"West Virginia","totalDist":"278400","admin1":"181839","population":"1792147"},"WY":{"stateID":"WY","name":"Wyoming","population":"578759","totalDist":"85750","admin1":"41441"}},"national":{"stateID":"national","name":"National","population":"328239523"}}')}});
//# sourceMappingURL=main.c6131441138651d12e4f.js.map