(this.webpackJsonpeflex_dashboard=this.webpackJsonpeflex_dashboard||[]).push([[0],{102:function(e,n,a){},104:function(e,n,a){"use strict";a.r(n);var c=a(0),t=a.n(c),s=a(20),r=a.n(s),l=(a(73),a(11)),o=a.n(l),i=a(17),d=a(3),h=a(9),u=a(58),j=a.n(u),b=a(39),m=a(59),p=a(108),v=a(111),g=a(106),x=a(63),_=a(107),O=a(112),f=a(109),y=a(68),S=a(43),B=a.n(S);function k(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return"object"===typeof e&&Object.keys(e).forEach((function(c){var t=e[c];"object"!==typeof t?a[n?"".concat(n,".").concat(c):c]=t:a=k(t,n?"".concat(n,".").concat(c):c,a)})),a}var w=a(44);function N(e,n,a,c){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(o.a.mark((function e(n,a,c,t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c("progress"),e.next=4,n.start();case 4:return e.next=6,n.invoke("registerConnection",a);case 6:c("connected"),n.on("updateFromServer",(function(e){t((function(n){return n.concat([{timestamp:(new Date).toLocaleString(),message:e}])}))})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),c("disconnected"),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function C(e,n,a,c){return R.apply(this,arguments)}function R(){return(R=Object(i.a)(o.a.mark((function e(n,a,c,t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c("progress"),e.next=4,n.invoke("registerConnection",a);case 4:c("connected"),n.on("updateFromServer",(function(e){t((function(n){return n.concat([{timestamp:(new Date).toLocaleString(),message:e}])}))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c("disconnected"),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function L(e,n,a){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(o.a.mark((function e(n,a,c){var t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://eflex-web-proxy.herokuapp.com",t="".concat("https://eflex-web-proxy.herokuapp.com","/api/userhub"),s=(new w.a).withUrl(t).configureLogging(w.b.Information).withAutomaticReconnect().build(),e.next=5,N(s,n,a,c);case 5:s.onclose(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a("disconnected"),s.off("updateFromServer"),e.next=4,N(s,n,a,c);case 4:case"end":return e.stop()}}),e)})))),s.onreconnecting(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.off("updateFromServer"),a("progress");case 2:case"end":return e.stop()}}),e)})))),s.onreconnected(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(s,n,a,c);case 2:case"end":return e.stop()}}),e)}))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=a(64),A=a(1);function U(e){var n=e.onSearch,a=Object(c.useState)(""),t=Object(h.a)(a,2),s=t[0],r=t[1];return Object(A.jsx)("div",{className:"border rounded p-2",children:Object(A.jsxs)(g.a,{className:"align-items-end",children:[Object(A.jsx)(x.a,{sm:12,lg:4,children:Object(A.jsx)(F.a,{className:"mb-1",placeholder:"Search by config key to filter",onChange:function(e){return r(e.target.value)},value:s})}),Object(A.jsxs)(x.a,{sm:12,lg:4,children:[Object(A.jsx)(_.a,{size:"sm",variant:"outline-primary",className:"mb-1",onClick:function(){return n(s)},children:"Search"}),Object(A.jsx)(_.a,{size:"sm",variant:"outline-secondary",className:"ms-2 mb-1",onClick:function(){return r(""),void n("")},children:"Reset"})]})]})})}var E=a(110);function z(e){var n=e.errorMsg;return n?Object(A.jsx)(E.a,{variant:"danger",className:"m-2",children:n}):null}a(102);var D=function(){var e=Object(c.useState)({}),n=Object(h.a)(e,2),a=n[0],t=n[1],s=Object(c.useState)({}),r=Object(h.a)(s,2),l=r[0],u=r[1],S=Object(c.useState)([]),w=Object(h.a)(S,2),N=w[0],I=w[1],C=Object(c.useState)(),R=Object(h.a)(C,2),T=R[0],F=R[1],E=Object(c.useState)(["boxIdBin","boxIdText","analog_channels.0.id","analog_channels.0.name","analog_channels.0.volt","analog_channels.0.ampRating","analog_channels.1.id","analog_channels.1.name","analog_channels.1.volt","analog_channels.1.ampRating","analog_channels.2.id","analog_channels.2.name","analog_channels.2.volt","analog_channels.2.ampRating","analog_channels.3.id","analog_channels.3.name","analog_channels.3.volt","analog_channels.3.ampRating","analog_channels.4.id","analog_channels.4.name","analog_channels.4.volt","analog_channels.4.ampRating","analog_channels.5.id","analog_channels.5.name","analog_channels.5.volt","analog_channels.5.ampRating","analog_channels.6.id","analog_channels.6.name","analog_channels.6.volt","analog_channels.6.ampRating","analog_channels.7.id","analog_channels.7.name","analog_channels.7.volt","analog_channels.7.ampRating","load_channels.0.currentRating","load_channels.0.delayTime","load_channels.0.devices.0.name","load_channels.0.devices.0.phase","load_channels.0.devices.1.name","load_channels.0.devices.1.phase","load_channels.0.devices.2.name","load_channels.0.devices.2.phase","load_channels.1.currentRating","load_channels.1.delayTime","load_channels.1.devices.0.name","load_channels.1.devices.0.phase","load_channels.1.devices.1.name","load_channels.1.devices.1.phase","load_channels.1.devices.2.name","load_channels.1.devices.2.phase","load_channels.2.currentRating","load_channels.2.delayTime","load_channels.2.devices.0.name","load_channels.2.devices.0.phase","load_channels.2.devices.1.name","load_channels.2.devices.1.phase","load_channels.2.devices.2.name","load_channels.2.devices.2.phase","load_channels.3.name","load_channels.3.currentRating","load_channels.3.delayTime","load_channels.3.devices.0.name","load_channels.3.devices.0.phase","load_channels.3.devices.1.name","load_channels.3.devices.1.phase","load_channels.3.devices.2.name","load_channels.3.devices.2.phase","load_channels.4.delayTime","load_channels.4.devices.0.name","load_channels.4.devices.0.phase","load_channels.4.devices.1.name","load_channels.4.devices.1.phase","load_channels.4.devices.2.name","load_channels.4.devices.2.phase","load_channels.5.currentRating","load_channels.5.delayTime","load_channels.5.devices.0.name","load_channels.5.devices.0.phase","load_channels.5.devices.1.name","load_channels.5.devices.1.phase","load_channels.5.devices.2.name","load_channels.5.devices.2.phase","user_preferences.currency","user_preferences.lock_energy","user_preferences.time","user_preferences.energy_unit","key","name","at_home","selected_scheme","savings_selection","battery_saver_selection","tou_selection","demand_selection","currentLoadStatus","grid_type","energy_selection"]),D=Object(h.a)(E,2),H=D[0],J=(D[1],Object(c.useState)({})),Q=Object(h.a)(J,2),M=Q[0],V=Q[1],q=Object(c.useState)(!1),K=Object(h.a)(q,2),P=K[0],W=K[1],Y=Object(c.useState)(""),G=Object(h.a)(Y,2),X=G[0],Z=G[1];function $(e,n){j.a.get("".concat("https://eflex-web-proxy.herokuapp.com","/api/BoxFiles/File?UserIdBin=").concat(e,"&BoxIdBin=").concat(n,"&filename=config.json")).then((function(e){return e.data})).then((function(e){!function(e){try{var n=JSON.parse(b.Buffer.from(e,"base64").toString("ascii"));t(Object(d.a)({},n));var a=k(Object(d.a)({},n)),c={};Object.keys(a).filter((function(e){return!H.includes(e)})).forEach((function(e){c[e]=a[e]})),u(Object(d.a)({},c))}catch(s){console.log("error",s),Z(s.toString())}}(e)})).catch((function(e){return Z(e.toString())}))}function ee(e){if(e){var n=k(Object(d.a)({},a)),c={};Object.keys(n).filter((function(n){return n.startsWith(e)})).forEach((function(e){c[e]=n[e]})),V(Object(d.a)({},c)),W(!0)}else W(!1),V({})}function ne(){var e=a.at_home;return"boolean"===typeof e?e?"Home":"Away":""}function ae(){return Array.isArray(a.load_channels)?a.load_channels.reduce((function(e,n){return function(e){if(e){var n=e.years,a=e.months,c=e.date,t=e.hours,s=e.minutes,r=e.seconds,l=e.milliseconds;return!!(n&&a&&c&&t&&s&&r&&l)&&B()().utc().year(n).month(a).date(c).hour(t).minute(s).second(r).millisecond(l).isAfter(B()().utc())}return!1}(n.override?JSON.parse(n.override):null)&&e.push(n.name),e}),[]).join(","):""}function ce(){var e;return e="connected"===T?"green":"disconnected"===T?"red":"progress"===T?"yellow":"grey",Object(A.jsx)("div",{style:{backgroundColor:e},className:"socket-status-holder"})}return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(O.a,{bg:"dark",variant:"dark",children:Object(A.jsx)(f.a,{children:Object(A.jsx)(O.a.Brand,{children:"Eflex"})})}),Object(A.jsx)(z,{errorMsg:X}),Object(A.jsx)(f.a,{className:"mt-2",children:Object(A.jsxs)(g.a,{children:[Object(A.jsx)(x.a,{sm:{order:"last"},md:{span:6,order:"first"},children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"border rounded p-2 mb-2",children:Object(A.jsx)(y.a,{initialValues:{UserIdBin:"3rK2D4gvHAyn10CmYaKaCQ==",BoxIdBin:"EeuTzQQVrVCeIQJCCmQAAw=="},onSubmit:function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(n.UserIdBin,n.BoxIdBin),e.next=3,L(n.UserIdBin,F,I);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:function(e){return Object(A.jsx)(v.a,{onSubmit:e.handleSubmit,children:Object(A.jsxs)(g.a,{className:"align-items-end",children:[Object(A.jsxs)(x.a,{sm:12,lg:4,children:[Object(A.jsx)(v.a.Label,{children:"UserIdBin"}),Object(A.jsx)(v.a.Control,{required:!0,type:"text",placeholder:"UserIdBin",name:"UserIdBin",className:"mb-1",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.UserIdBin})]}),Object(A.jsxs)(x.a,{sm:12,lg:4,children:[Object(A.jsx)(v.a.Label,{children:"BoxIdBin"}),Object(A.jsx)(v.a.Control,{required:!0,type:"text",placeholder:"BoxIdBin",name:"BoxIdBin",className:"mb-1",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.BoxIdBin})]}),Object(A.jsxs)(x.a,{sm:12,lg:4,children:[Object(A.jsx)(_.a,{size:"sm",type:"submit",className:"mb-1",children:"Submit"}),Object(A.jsx)(_.a,{size:"sm",className:"ms-2 mb-1",variant:"outline-secondary",onClick:e.handleReset,children:"Reset"})]})]})})}})}),Object(A.jsxs)("div",{className:"border rounded p-2",children:[Object(A.jsx)("h6",{children:" Result "}),Object(A.jsx)(U,{onSearch:ee}),Object(A.jsx)("pre",{className:"config__viewer my-2",dangerouslySetInnerHTML:{__html:m.a.toHtml(P?M:l)}})]})]})}),Object(A.jsx)(x.a,{sm:{order:"last"},md:{span:6,order:"first"},children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"rounded border p-2 mb-2",children:[Object(A.jsx)("h6",{children:" Summary "}),Object(A.jsx)(p.a,{striped:!0,bordered:!0,hover:!0,className:"mb-0",children:Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Home / Away"}),Object(A.jsx)("td",{children:ne()})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Energy Selection"}),Object(A.jsx)("td",{children:a.energy_selection})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Battery Saver Selection"}),Object(A.jsx)("td",{children:a.battery_saver_selection})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"TOU Selection"}),Object(A.jsx)("td",{children:a.tou_selection})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Demand Selection"}),Object(A.jsx)("td",{children:a.demand_selection})]}),Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:"Overriden Loads"}),Object(A.jsx)("td",{children:ae()})]})]})})]}),Object(A.jsxs)("div",{className:"rounded border p-2 mb-2 socket__viewer",children:[Object(A.jsxs)("h6",{children:[" Socket Logs ",ce()," "]}),(null===N||void 0===N?void 0:N.length)>0?Object(A.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,className:"mb-0",style:{wordBreak:"break-word"},children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Local Time"}),Object(A.jsx)("th",{children:"Logs"})]})}),Object(A.jsx)("tbody",{children:N.map((function(e,n){return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:e.timestamp}),Object(A.jsx)("td",{children:e.message})]},n)}))})]}):Object(A.jsx)("span",{children:"[]"})]})]})})]})})]})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(n){var a=n.getCLS,c=n.getFID,t=n.getFCP,s=n.getLCP,r=n.getTTFB;a(e),c(e),t(e),s(e),r(e)}))};a(103);r.a.render(Object(A.jsx)(t.a.StrictMode,{children:Object(A.jsx)(D,{})}),document.getElementById("root")),H()},73:function(e,n,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.6a3e2414.chunk.js.map