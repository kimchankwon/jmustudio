(this.webpackJsonpjmustudio=this.webpackJsonpjmustudio||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),c=a.n(l),r=(a(73),a(70)),m=a(142),i=a(144),u=a(145),s=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Loading"))},h="/home",d="/",p="/about",E="/contact",y="/tutors",f="/tutor/:tutorID",b="/tutor",k=[{id:"jaekwon",name:"Jae Kwon Kim"},{id:"daniel",name:"Daniel Test Kim"}],w=m.a.Header,g=m.a.Content,v=m.a.Footer,j=function(e){var t=Object(n.useState)(!0),a=Object(r.a)(t,2),l=a[0],c=a[1],f=Object(n.useState)(""),j=Object(r.a)(f,2),x=j[0],O=j[1],T=function(t){t.key!==x&&e.history.push(t.key)},I=function(e){return x===e};return Object(n.useEffect)((function(){c(!0),O(e.history.location.pathname),c(!1)}),[e.history.location.pathname]),l?o.a.createElement(s,null):o.a.createElement(m.a,null,o.a.createElement(w,{style:{position:"fixed",width:"100%",background:"black",zIndex:100}},o.a.createElement(i.a,{className:"menu",theme:"dark",mode:"horizontal",onClick:T,defaultSelectedKeys:["".concat(x)],style:{background:"black",fontFamily:"Open Sans"}},o.a.createElement(i.a.Item,{className:"menuitem",key:d},o.a.createElement(u.a,{spin:!0}),"LOGO ",o.a.createElement(u.a,{spin:!0})),I("/tutors")?o.a.createElement(i.a.Item,{className:"menuitem",key:y,style:{float:"right"}},"TUTORS"):o.a.createElement(i.a.SubMenu,{className:"submenu",title:"TUTORS",key:y,onTitleClick:T,style:{float:"right",backgroundColor:I("/tutors")?"white":"",color:I("/tutors")?"black":""}},k.map((function(e){var t=e.id,a=e.name;return o.a.createElement(i.a.Item,{className:"submenuitem",key:"".concat(b,"/").concat(t)},a)}))),o.a.createElement(i.a.Item,{className:"menuitem",key:E,style:{float:"right"}},"CONTACT"),o.a.createElement(i.a.Item,{className:"menuitem",key:p,style:{float:"right"}},"ABOUT"),o.a.createElement(i.a.Item,{className:"menuitem",key:h,style:{float:"right"}},"HOME"))),o.a.createElement(g,{style:{padding:"0 50px",marginTop:64}},o.a.createElement("div",{className:"site-layout-content"},e.children)),o.a.createElement(v,{style:{textAlign:"center"}},"JMU STUDIO \xa92020"))},x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h1",null,"This is the home page"),o.a.createElement("h1",null,"many description stuffs")))},O=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Some motto"),o.a.createElement("h1",null,"we care about our students"),o.a.createElement("h1",null,"founded in 2020"),o.a.createElement("h1",null,"Location: Parramatta"))},T=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"email: jmu-studio@gmail.com"),o.a.createElement("h1",null,"Facebook: facebook.com/jmustudio"))},I=a(143),N=a(85),S=a.n(N),C=I.a.Meta,K=function(e){return k.map((function(t){var a=t.id,n=t.name;return o.a.createElement(I.a,{onClick:function(){e.history.push("".concat(b,"/").concat(a))},hoverable:!0,style:{width:240},cover:o.a.createElement("img",{alt:"example",src:S.a})},o.a.createElement(C,{title:n,description:"desc"}))}))},D=a(10),F={jaekwon:{name:"Jae Kwon Kim",website:"https://www.facebook.com/jaekwon.baritone/"},daniel:{name:"Daniel Test Kim",website:"https://www.facebook.com/jaekwon.baritone/"}},J=function(){var e=Object(D.f)().tutorID;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h1",null,F[e].name," Tutor"),o.a.createElement("p",null,F[e].website)))},U=a(146),M=function(){return o.a.createElement(U.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist."})},A=a(63),B=[{exact:!0,path:h,component:x,layout:j},{exact:!0,path:d,component:x,layout:j},{exact:!0,path:p,component:O,layout:j},{exact:!0,path:y,component:K,layout:j},{exact:!0,path:f,component:J,layout:j},{exact:!0,path:E,component:T,layout:j}],L=function(){return o.a.createElement(A.a,null,o.a.createElement(D.c,null,B.map((function(e,t){var a=e.exact,n=e.path,l=e.component,c=e.layout;e.props;return o.a.createElement(D.a,{key:t,exact:a,path:n,render:function(e){return o.a.createElement(c,{history:e.history},o.a.createElement(l,e))}})})),o.a.createElement(D.a,{component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(139);c.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){},85:function(e,t,a){e.exports=a.p+"static/media/jaekwon1.932b6ebb.jpg"},95:function(e,t,a){e.exports=a(140)}},[[95,1,2]]]);
//# sourceMappingURL=main.f8d1b20c.chunk.js.map