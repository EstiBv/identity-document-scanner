(this["webpackJsonpidentity-document-scanner"]=this["webpackJsonpidentity-document-scanner"]||[]).push([[0],{22:function(e,a,c){},23:function(e,a,c){},30:function(e,a,c){"use strict";c.r(a);var t=c(16),n=c.n(t),s=(c(22),c(23),c(2)),i=c(10),r=c.p+"static/media/id-card.f892d793.png",m=c(4),l=c(1),d=c.n(l),j=c(0),o=d.a.memo((function(e){return Object(j.jsx)("div",{className:"Camera",id:"2",role:"main",children:Object(j.jsxs)("div",{className:"Camera__mainTaken",children:[Object(j.jsx)("h2",{className:"Camera__mainTaken--title",children:"Take a picture"}),Object(j.jsx)("p",{className:"Camera__mainTaken--paragraph",children:"Fit your ID card inside the frame."}),Object(j.jsx)("p",{className:"Camera__mainTaken--paragraph",children:"The picture will be taken automatically."}),Object(j.jsx)(m.b,{to:"/scanAccepted",children:Object(j.jsx)("section",{className:"Camera__mainTaken--cardContainer",children:Object(j.jsx)("img",{src:r,alt:"ID card template",className:"Camera__mainTaken--cardContainerBg"})})}),Object(j.jsxs)("div",{className:"Camera__mainTaken--msgContainer",children:[Object(j.jsx)("div",{className:"Camera__mainTaken--msgIcon","aria-label":"image icon check"}),Object(j.jsx)("p",{className:"Camera__mainTaken--msgPicture",children:" Picture taken!"})]}),Object(j.jsx)(m.b,{to:"/scanAccepted",className:"Camera__mainTaken--btnCancel","aria-labelledby":"Cancel",children:"Cancel"})]})})})),b=d.a.memo((function(e){return Object(j.jsx)("div",{className:"Camera",role:"main",children:Object(j.jsxs)("div",{className:"Camera__mainError",children:[Object(j.jsx)("h2",{className:"Camera__mainError--title",children:"Take a picture"}),Object(j.jsx)("p",{className:"Camera__mainError--paragraph",children:"Fit your ID card inside the frame."}),Object(j.jsx)("p",{className:"Camera__mainError--paragraph",children:"The picture will be taken automatically."}),Object(j.jsx)(m.b,{to:"/scanRejected",children:Object(j.jsx)("section",{className:"Camera__mainError--cardContainer",children:Object(j.jsx)("img",{src:r,alt:"ID card",className:"Camera__mainError--cardContainerBg"})})}),Object(j.jsxs)("article",{className:"Camera__main--msgContainer",children:[Object(j.jsx)("div",{className:"Camera__main--msgIcon"}),Object(j.jsx)("p",{className:"Camera__main--msgPicture",children:" Too much glare"})]}),Object(j.jsxs)(m.b,{to:"/scanRejected",className:"Camera__mainError--btnCancel","aria-labelledby":"Cancel",children:[" ","Cancel"]})]})})})),h=function(){return fetch("https://front-exercise.z1.digital/evaluations",{method:"POST"}).then((function(e){return e.json()})).then((function(e){return e.summary})).catch((function(e){return console.log("Ha sucedido un error en la petici\xf3n")}))},_=function(){return Object(j.jsx)("div",{className:"Camera__main--loading ","aria-label":"lodaer"})},p=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(!1),s=Object(i.a)(n,2),r=s[0],m=s[1],d=Object(l.useState)(!1),p=Object(i.a)(d,2),O=p[0],u=p[1],x=Object(l.useState)(""),N=Object(i.a)(x,2),g=(N[0],N[1]);Object(l.useEffect)((function(){h().then((function(e){t(e),g(v.url)}))}),[]);var C=null===c||void 0===c?void 0:c.outcome,v={url:""};return Object(j.jsxs)("div",{className:"Camera",role:"main",children:[!0===r&&"Approved"===C?Object(j.jsx)(o,{img:v.url}):!0===r&&"Approved"!==C?Object(j.jsx)(b,{img:v.url}):void 0,Object(j.jsx)("div",{className:"Camera",children:Object(j.jsxs)("div",{className:"Camera__main",children:[Object(j.jsx)("h2",{className:"Camera__main--title",children:"Take a picture"}),Object(j.jsx)("p",{className:"Camera__main--paragraph",children:"Fit your ID card inside the frame."}),Object(j.jsx)("p",{className:"Camera__main--paragraph",children:"The picture will be taken automatically."}),Object(j.jsxs)("section",{className:"Camera__main--cardContainer",onClick:function(e){var a=document.getElementsByTagName("video")[0];if(a&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){a.srcObject=e,a.play()}));var c=document.getElementById("canvas"),t=c.getContext("2d");t.drawImage(a,0,0,289,175),t.createImageData(289,175),t.fill(),v.url=c.toDataURL("image/png"),v.url.replace(/^data:image\/(png|jpg);base64,/,""),u(!0)}setTimeout((function(){m(!0),u(!1)}),8e3)},children:[Object(j.jsx)("video",{id:"video",width:"289",height:"175",autoPlay:!0}),Object(j.jsx)("canvas",{id:"canvas",width:"289",height:"175"})]}),Object(j.jsx)("div",{className:"Camera__main--msgContainer",children:!0===O?Object(j.jsx)(_,{}):""})]})})]})},O=c.p+"static/media/ID-bg.a826b8dc.svg",u=function(){return Object(j.jsxs)("div",{className:"scanEmpty",children:[Object(j.jsx)("header",{className:"scanEmpty__headerHome",children:Object(j.jsx)("h2",{className:"scanEmpty__headerHome--logo",children:"BankClient"})}),Object(j.jsxs)("main",{className:"scanEmpty__mainHome",children:[Object(j.jsx)("h2",{className:"scanEmpty__mainHome--title",children:"Scan your ID"}),Object(j.jsx)("p",{className:"scanEmpty__mainHome--paragraph",children:"Take a picture. It may take time to validate your personal information."}),Object(j.jsx)("section",{className:"scanEmpty__mainHome--cardContainer",children:Object(j.jsx)("div",{className:"scanEmpty__mainHome--cardBg",children:Object(j.jsx)("img",{src:O,alt:"ID card template",className:"scanEmpty__mainHome--cardSVG"})})}),Object(j.jsx)(m.b,{to:"/camera",className:"scanEmpty__mainHome--btnPrimary","aria-label":"enter",children:"Take picture"})]})]})},x=function(){return Object(j.jsxs)("div",{className:"scanRejected",children:[Object(j.jsx)("header",{className:"scanRejected__headerHome",children:Object(j.jsx)("h2",{className:"scanRejected__headerHome--logo",children:"BankClient"})}),Object(j.jsxs)("main",{className:"scanRejected__mainHome",children:[Object(j.jsx)("h2",{className:"scanRejected__mainHome--title",children:"Scan your ID"}),Object(j.jsx)("p",{className:"scanRejected__mainHome--paragraph",children:"Take a picture. It may take time to validate your personal information."}),Object(j.jsxs)("section",{className:"scanRejected__mainHome--cardContainer",children:[Object(j.jsx)("div",{className:"scanRejected__mainHome--cardBg","aria-label":"image identity card template"}),Object(j.jsx)("div",{className:"scanRejected__mainHome--msgScan",children:"Rejected"})]}),Object(j.jsx)(m.b,{to:"/camera",className:"scanRejected__mainHome--btnPrimary",children:"Retake picture"})]})]})},N=function(){return Object(j.jsxs)("div",{className:"scanAccepted",children:[Object(j.jsx)("header",{className:"scanAccepted__headerHome",children:Object(j.jsx)("h2",{className:"scanAccepted__headerHome--logo",children:"BankClient"})}),Object(j.jsxs)("main",{className:"scanAccepted__mainHome",children:[Object(j.jsx)("h2",{className:"scanAccepted__mainHome--title",children:"Scan your ID"}),Object(j.jsx)("p",{className:"scanAccepted__mainHome--paragraph",children:"Take a picture. It may take time to validate your personal information."}),Object(j.jsx)(m.b,{to:"/",className:"scanAccepted__mainHome--linkRoute",children:Object(j.jsxs)("section",{className:"scanAccepted__mainHome--cardContainer",children:[Object(j.jsx)("div",{className:"scanAccepted__mainHome--cardBg","aria-label":"image identity card template"}),Object(j.jsx)("div",{className:"scanAccepted__mainHome--msgScan",children:"Accepted"})]})})]})]})},g=function(){return Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(s.a,{path:"/camera",children:Object(j.jsx)(p,{})}),Object(j.jsx)(s.a,{path:"/cameraError",component:b}),Object(j.jsx)(s.a,{path:"/cameraTaken",component:o}),Object(j.jsx)(s.a,{path:"/scanRejected",component:x}),Object(j.jsx)(s.a,{path:"/scanAccepted",component:N})]})};n.a.render(Object(j.jsx)(m.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e9d8ca02.chunk.js.map