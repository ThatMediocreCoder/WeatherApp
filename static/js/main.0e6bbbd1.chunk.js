(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(4),i=a.n(r),o=(a(10),a(2)),d="97f2310ad387ae2eef69b41f1da620f8",l="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)({}),i=Object(o.a)(r,2),u=i[0],h=i[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),m=b[0],x=b[1];return Object(n.jsx)("div",{className:function(){switch(m){case"Clear":return"clear";case"Clouds":return"cloudy";case"Haze":return"haze";case"Rain":return"rain";case"Snow":return"snow";case"Sunny":return"sunny";default:return"app"}}(),children:Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"search-box",children:Object(n.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search",onChange:function(e){return s(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(a,"&units=metric&appid=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),console.log(e),x(e.weather[0].main),s("")}))}})}),Object(n.jsxs)("div",{className:"bottom-text",children:[Object(n.jsx)("p",{className:"bottom-left",children:"*Search by City name or ZIP Code"}),Object(n.jsx)("p",{className:"bottom-right",children:"Weather by ThatMediocreCoder"})]}),"undefined"!=typeof u.main?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"location-box",children:[Object(n.jsxs)("div",{className:"location",children:[u.name,", ",u.sys.country]}),Object(n.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(n.jsxs)("div",{className:"weather-box",children:[Object(n.jsxs)("div",{className:"temp",children:[Object(n.jsxs)("div",{children:[Math.round(u.main.temp),"\xb0c"]}),Object(n.jsxs)("div",{className:"minMax",children:[Math.round(u.main.temp_min),"/",Math.round(u.main.temp_max)," \xb0c"]})]}),Object(n.jsxs)("div",{className:"weather",children:["Condition: ",u.weather[0].main]}),Object(n.jsxs)("div",{className:"weather",children:["Feels Like: ",Math.round(u.main.feels_like),"\xb0c"]}),Object(n.jsxs)("div",{className:"weather",children:["Visibility: ",u.visibility/1e3," KM/s"]})]})]}):""]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),h()}},[[11,1,2]]]);
//# sourceMappingURL=main.0e6bbbd1.chunk.js.map