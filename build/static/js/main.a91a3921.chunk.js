(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(54)},42:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(11),r=t(12),l=t(15),i=t(14),c=t(0),s=t.n(c),o=t(17),m=t.n(o),u=(t(42),t(3)),d=Object(u.f)((function(e){return Object(c.useEffect)((function(){window.scrollTo(0,0)})),e.children})),g=t(18),b=t(9),p=t(16),v=t(33),E=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.Helmet,null,s.a.createElement("title",null,this.props.pageTitle," || Prijsplafond energie "),s.a.createElement("meta",{name:"description",content:"Grasbeemd 42 \u2013 Projectoverzicht en materiaalplanner"})))}}]),t}(c.Component),h=t(23),k=t.n(h),j=t(7),f=t(58),w=t(59);var N=function(e){var a=Object(c.useState)(!1),t=Object(p.a)(a,2),n=t[0],r=t[1],l=function(){return r(!1)};return s.a.createElement("div",{className:"text-center"},s.a.createElement("sup",null,s.a.createElement(j.d,{onClick:function(){return r(!0)},style:{color:"blue",height:"20px",width:"20px"}})),s.a.createElement(f.a,{show:n,onHide:l},s.a.createElement(f.a.Header,{closeButton:!0},s.a.createElement("h4",null,e.title)),s.a.createElement(f.a.Body,null,s.a.createElement("p",null,e.text),s.a.createElement("a",{href:e.link,className:""},"Meer informatie (bron)")),s.a.createElement(f.a.Footer,null,s.a.createElement(w.a,{variant:"secondary",onClick:l},"Close"))))},O=t(20),y=t(19),_=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).menuTrigger=r.menuTrigger.bind(Object(O.a)(r)),r.CLoseMenuTrigger=r.CLoseMenuTrigger.bind(Object(O.a)(r)),window.addEventListener("load",(function(){console.log("All assets are loaded")})),r}return Object(r.a)(t,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t,n=this.props,r=n.logo,l=n.color,i=void 0===l?"default-color":l;return t="light"===r?s.a.createElement("img",{src:"/assets/images/logo/logo-light.png",alt:"Digital Agency"}):"dark"===r?s.a.createElement("img",{src:"/assets/images/logo/logo-dark.png",alt:"Digital Agency"}):"symbol-dark"===r?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-dark.png",alt:"Digital Agency"}):"symbol-light"===r?s.a.createElement("img",{src:"/assets/images/logo/logo-symbol-light.png",alt:"Digital Agency"}):s.a.createElement("img",{src:"/assets/images/logo/logo.png",alt:"Digital Agency"}),s.a.createElement("header",{className:"header-area formobile-menu header--transparent ".concat(i)},s.a.createElement("div",{className:"header-wrapper",id:"header-wrapper"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"logo"},s.a.createElement("a",{href:"/"},t))),s.a.createElement("div",{className:"header-right"},s.a.createElement("nav",{className:"mainmenunav d-lg-block"},s.a.createElement("ul",{className:"mainmenu"},s.a.createElement("li",null,s.a.createElement(y.b,{to:"/home"},"Home")),s.a.createElement("li",null,s.a.createElement(y.b,{to:"/about"},"About")))),s.a.createElement("div",{className:"header-btn"}),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(j.e,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(j.f,null))))))}}]),t}(c.Component),W=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{className:"footer-area"},s.a.createElement("div",{className:"footer-wrapper"},s.a.createElement("div",{className:"row align-items-end row--0"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"footer-right","data-black-overlay":"6"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 col-sm-12 col-12"},s.a.createElement("div",{className:"footer-link"},s.a.createElement("h4",null,"Quick Link"),s.a.createElement("ul",{className:"ft-link"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.epexspot.com/en/market-data"},"Elektriciteit spotmarkt")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://tradingeconomics.com/commodity/eu-natural-gas"},"Gas sportmarkt")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"},"Belastingdienst energiebelasting"))))))))))))}}]),t}(c.Component);var C=function(e){var a=Object(c.useMemo)((function(){return e.varprijs*e.verbruik}),[e]),t=Object(c.useMemo)((function(){return"gas"===e.type?e.varprijs>1.5?e.verbruik>1200?1800+e.varprijs*(e.verbruik-1200):1.5*e.verbruik:e.varprijs*e.verbruik:"electriciteit"===e.type?e.varprijs>.7?e.verbruik>2400?1680+e.varprijs*(e.verbruik-2400):.7*e.verbruik:e.varprijs*e.verbruik:"error"}),[e]);return s.a.createElement("div",{className:"ml-2"},s.a.createElement("table",{className:"table table-sm table-borderless"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null),s.a.createElement("th",null,"Zonder plafond"),s.a.createElement("th",null,"Met plafond"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("div",{className:"row"},"Verbruik (","gas"===e.type?" m3/jaar":"kWh/jaar","): ")),s.a.createElement("td",null,e.verbruik," "),s.a.createElement("td",null,e.verbruik," ")),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("div",{className:"row"},"Variable kosten:")),s.a.createElement("td",null,Math.round(a)),s.a.createElement("td",null,Math.round(t))),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("div",{className:"row"},"Vaste kosten:","gas"===e.type?s.a.createElement(N,{title:"Vaste kosten gas",text:"Voor gas wordt rekening gehouden met de transportkosten van de netbeheerder liander (dit is het grootste deel, maar kan per energielerancier/netbeheerder verschillen) voor een aansluiting van 500-4000 Nm3/jaar",link:"https://www.liander.nl/uwtarieven/?ref=22743"}):s.a.createElement(N,{title:"Vaste kosten elektriciteit",text:"Voor elektriciteit wordt rekening gehouden met de transportkosten van de netbeheerder liander voor een aansluiting van 3x25A. Daarnaast krijgt elke elektriciteitsaansluiting een korting van 681 euro/aansluiting/jaar",link:"https://www.liander.nl/uwtarieven/?ref=22743"}))," "),s.a.createElement("td",null,"gas"===e.type?180:-433),s.a.createElement("td",null,"gas"===e.type?180:-433)),s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("div",{className:"row"},"Totaal: ")),s.a.createElement("td",null,"gas"===e.type?Math.round(180+a):Math.round(-433+a)),s.a.createElement("td",null,"gas"===e.type?Math.round(180+t):Math.round(-433+t))))))};var M=function(){var e=Object(c.useState)(!1),a=Object(p.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(1200),l=Object(p.a)(r,2),i=l[0],o=l[1],m=Object(c.useState)({energiebelasting:.36322,ODE:.0865,basisprijs:185}),u=Object(p.a)(m,2),d=u[0],v=u[1],h=Object(c.useState)(2400),f=Object(p.a)(h,2),w=f[0],O=f[1],y=Object(c.useState)({energiebelasting:.03679,ODE:.0305,basisprijs:350}),M=Object(p.a)(y,2),A=M[0],D=M[1],x=Object(c.useState)(2.08),F=Object(p.a)(x,2),T=F[0],B=F[1],S=Object(c.useState)(.42),z=Object(p.a)(S,2),L=z[0],V=z[1];return Object(c.useEffect)((function(){B(Math.round(100*(d.energiebelasting+d.ODE+d.basisprijs*(31.65/3600)))/100)}),[d]),Object(c.useEffect)((function(){V(Math.round(100*(A.energiebelasting+A.ODE+A.basisprijs/1e3))/100)}),[A]),s.a.createElement(s.a.Fragment,null,s.a.createElement(E,{pageTitle:"Berekening"}),s.a.createElement(_,{logo:"symbol-dark",headertransparent:"header--transparent",colorblack:"color--black",logoname:"logo.png"}),s.a.createElement("div",{className:"rn-page-title-area pt--120 pb--190 bg_image bg_image--default","data-black-overlay":"5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"rn-page-title text-center pt--100"},s.a.createElement("h2",{className:"title theme-gradient"},"Energie prijsplafond")))))),s.a.createElement("div",{className:"rn-service-details ptb--120 bg_color--1"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"service-details-inner"},s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"row sercice-details-content align-items-center"},s.a.createElement("div",{className:"col-lg-12 col-12 order-2 order-lg-1"},s.a.createElement("div",{className:"details mt_md--30 mt_sm--30"},s.a.createElement("h2",null,"Berekening")))),s.a.createElement("div",{className:"row sercice-details-content align-items-center"},s.a.createElement("div",{className:"col-lg-12 col-12 order-2 order-lg-1"},s.a.createElement("div",{className:"details mt_md--30 mt_sm--30"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6 "},s.a.createElement("h4",null,"Aardgas"),s.a.createElement("div",{className:"col-10 "},s.a.createElement("label",{htmlFor:"aardgas-verbruik-nm3"},"Jaarlijks verbruik (m",s.a.createElement("sup",null,"3"),"/jaar)"),s.a.createElement("input",{id:"aardgas-verbruik-nm3",type:"number",value:i,name:"verbruik",onChange:function(e){return o(e.target.value)}}),s.a.createElement("label",{htmlFor:"var-prijs-aardgas"},"Contractprijs aardgas (euro/m3)"),s.a.createElement("input",{id:"var-prijs-aardgas",type:"number",value:T,name:"varprijsgas",onChange:function(e){return B(e.target.value)}}),s.a.createElement("span",{className:"btn btn-transparant",onClick:function(){return n(!t)}},t?s.a.createElement(j.a,null):s.a.createElement(j.b,null)," Bereken variable prijs"),t?s.a.createElement("div",{className:"col-md-10 offset-1"},s.a.createElement("label",{htmlFor:"aardgas-belasting-nm3"},s.a.createElement("div",{className:"row"},"Aardgas belasting (euro/m3) ",s.a.createElement(N,{title:"Aardgas belasting",text:"Belasting per m3 op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 170.000 m3/jaar is de belasting per m3 constant.",link:"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}))),s.a.createElement("input",{disabled:!0,id:"aardgas-belasting-nm3",type:"number",name:"energiebelasting",value:d.energiebelasting,onChange:function(e){return v(Object(b.a)(Object(b.a)({},d),{},Object(g.a)({},e.target.name,e.target.value)))}}),s.a.createElement("label",{htmlFor:"aardgas-ode-nm3"},s.a.createElement("div",{className:"row"},"Aardgas ODE (euro/m3)",s.a.createElement(N,{title:"Aardgas ODE",text:"ODE (opslag duurzame energie) per m3 op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 170.000 m3/jaar is de ODE per m3 constant.",link:"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}))),s.a.createElement("input",{disabled:!0,id:"aardgas-ode-nm3",type:"number",name:"ODE",value:d.ODE,onChange:function(e){return v(Object(b.a)(Object(b.a)({},d),{},Object(g.a)({},e.target.name,e.target.value)))}}),s.a.createElement("label",{htmlFor:"aardgas-basisprijs-nm3"},s.a.createElement("div",{className:"row"},"Aardgas basisprijs (euro/MWh)",s.a.createElement(N,{title:"Aardgas basisprijs",text:"Bij een variabel contract wordt aardgas op de spotmarkt gekocht (huidige prijs is de vinden in de bron onderaan) en wordt ingekocht per MWh (1000 kWh). 1 m3 nederlands aardgas staat gelijk aan 0.0088 MWh,                                                                                 de prijs in MWh moet gedeeld worden door 114 om uit te komen op een prijs per m3",link:"https://tradingeconomics.com/commodity/eu-natural-gas"}))),s.a.createElement("input",{id:"aardgas-basisprijs-nm3",type:"number",defaultValue:185,name:"basisprijs",value:d.basisprijs,onChange:function(e){return v(Object(b.a)(Object(b.a)({},d),{},Object(g.a)({},e.target.name,e.target.value)))}})):s.a.createElement(s.a.Fragment,null," "))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h4",null,"Elektriciteit"),s.a.createElement("div",{className:"col-10"},s.a.createElement("label",{htmlFor:"elektriciteit-verbruik-kWh"},"Jaarlijks verbruik (kWh/jaar)"),s.a.createElement("input",{id:"elektriciteit-verbruik-kWh",type:"number",name:"verbruik",value:w,onChange:function(e){return O(e.target.value)}}),s.a.createElement("label",{htmlFor:"var-prijs-elektriciteit"},"Contractprijs elektriciteit (euro/kWh)"),s.a.createElement("input",{id:"var-prijs-elektriciteit",type:"number",value:L,name:"varprijselektriciteit",onChange:function(e){return V(e.target.value)}}),s.a.createElement("span",{className:"btn btn-transparant",onClick:function(){return n(!t)}},t?s.a.createElement(j.a,null):s.a.createElement(j.b,null)," Bereken variable prijs"),t?s.a.createElement("div",{className:"col-md-10 offset-1"},s.a.createElement("label",{htmlFor:"elektriciteit-belasting-nm3"},s.a.createElement("div",{className:"row"},"Elektriciteit belasting (euro/kWh)",s.a.createElement(N,{title:"Elektriciteit belasting",text:"Belasting per kWh op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 10.000 kWh/jaar is de belasting per kWh constant.",link:"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}))),s.a.createElement("input",{disabled:!0,id:"elektriciteit-belasting-nm3",type:"number",name:"energiebelasting",value:A.energiebelasting,onChange:function(e){return D(Object(b.a)(Object(b.a)({},A),{},Object(g.a)({},e.target.name,e.target.value)))}}),s.a.createElement("label",{htmlFor:"elektriciteit-ode-kWh"},s.a.createElement("div",{className:"row"},"ODE belasting (euro/kWh)",s.a.createElement(N,{title:"Elektriciteit belasting",text:"ODE (opslag duurzame energie) per kWh op aardgas hangt af van verbruik, voor een zolang verbruiker lager blijft dan 10.000 kWh/jaar is de ODE per kWh constant.",link:"https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/overige_belastingen/belastingen_op_milieugrondslag/tarieven_milieubelastingen/tabellen_tarieven_milieubelastingen"}))),s.a.createElement("input",{disabled:!0,id:"elektriciteit-ode-kWh",type:"number",name:"ODE",value:A.ODE,onChange:function(e){return D(Object(b.a)(Object(b.a)({},A),{},Object(g.a)({},e.target.name,e.target.value)))}}),s.a.createElement("label",{htmlFor:"elektriciteit-basisprijs-kWh"},s.a.createElement("div",{className:"row"},"Basisprijs elektriciteit (euro/MWh)",s.a.createElement(N,{title:"Elektriciteit basisprijs",text:"Bij een variabel contract wordt elektriciteit op de spotmarkt gekocht (huidige prijs is de vinden in de bron onderaan) en wordt ingekocht per MWh (1000 kWh).",link:"https://www.epexspot.com/en/market-data"}))),s.a.createElement("input",{id:"elektriciteit-basisprijs-kWh",type:"number",defaultValue:185,name:"basisprijs",value:A.basisprijs,onChange:function(e){return D(Object(b.a)(Object(b.a)({},A),{},Object(g.a)({},e.target.name,e.target.value)))}})):s.a.createElement(s.a.Fragment,null," "))))))),s.a.createElement("div",{className:"row my-4"}),s.a.createElement("div",{className:"row sercice-details-content pb--80 align-items-center"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"details mt_md--30 mt_sm--30"},s.a.createElement("div",{className:"row gap-5"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",null,"Overzicht aardgas"),s.a.createElement(C,{verbruik:i,varprijs:T,type:"gas"})),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",null,"Overzicht elektriciteit"),s.a.createElement(C,{verbruik:w,varprijs:L,type:"electriciteit"})))))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(k.a,{showUnder:160},s.a.createElement(j.c,null))),s.a.createElement(W,null))},A=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(_,{logo:"symbol-dark",headertransparent:"header--transparent",colorblack:"color--black",logoname:"logo.png"}),s.a.createElement("div",{className:"error-page-inner bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",{className:"title theme-gradient"},"404!"),s.a.createElement("h3",{className:"sub-title"},"Page not found"),s.a.createElement("span",null,"The page you were looking for could not be found."),s.a.createElement("div",{className:"error-button"},s.a.createElement("a",{className:"rn-button-style--2 btn-solid",href:"/home"},"Back To Homepage"))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(k.a,{showUnder:160},s.a.createElement(j.c,null))),s.a.createElement(W,null))}}]),t}(c.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){Object(l.a)(c,e);var a=Object(i.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return function(){var e=t(53),a=e.spawn;e.spawn=function(){console.log("spawn called"),console.log(arguments);var e=a.apply(this,arguments);return e}}(),s.a.createElement(y.a,{basename:"/"},s.a.createElement(d,null,s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"".concat("","/home"),component:M}),s.a.createElement(u.a,{path:"".concat("","/404"),component:A}),s.a.createElement(u.a,{component:A}))))}}]),c}(c.Component);m.a.render(s.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");D?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):x(a,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.a91a3921.chunk.js.map