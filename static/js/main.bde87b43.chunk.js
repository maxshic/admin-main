(this["webpackJsonpadmin-main"]=this["webpackJsonpadmin-main"]||[]).push([[0],{162:function(e,t,n){e.exports=n(381)},167:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),i=(n(167),n(5)),c=(n(109),n(101)),m=n.n(c),u=(n(169),n(147)),s=n.n(u),p=(n(171),n(30)),d=n.n(p),h=(n(175),n(105)),f=n.n(h),g=n(387),E=n(388),b={layout:{position:"relative",height:"100vh",minHeight:"500px",background:"linear-gradient(-45deg, rgb(238, 119, 82), rgb(231, 60, 126), rgb(35, 166, 213), rgb(35, 213, 171))",backgroundSize:"400% 400%",animation:"Gradient 15s ease infinite"},con:{width:"300px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50% ,-50%)"},remb:{color:"#ffffff"}},y=Object(i.i)((function(e){var t=Object(i.g)();return r.a.createElement("div",{style:b.layout},r.a.createElement("div",{style:b.con},r.a.createElement(d.a,{name:"loginForm",className:"loginForm",initialValues:{remember:!0},onFinish:function(e){console.log(e),t.push("/app")}},r.a.createElement(d.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7!"}]},r.a.createElement(f.a,{prefix:r.a.createElement(g.a,null),placeholder:"username"})),r.a.createElement(d.a.Item,{name:"loginpassword",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]},r.a.createElement(f.a,{prefix:r.a.createElement(E.a,null),type:"password",placeholder:"password"})),r.a.createElement(d.a.Item,null,r.a.createElement(d.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(s.a,{style:b.remb},"Remember"))),r.a.createElement(d.a.Item,null,r.a.createElement(m.a,{type:"primary",htmlType:"submit",className:"login-btn",block:!0},"Log in")))))})),v=(n(345),n(70)),x=n.n(v),k=(n(349),n(43)),w=n.n(k),F=n(389),O=n(390),j=n(39),I=n(386),S=n(385),z=n(108),D=n(159),C=function(e){var t=e.children,n=e.isFinished,a=e.animationDuration;return r.a.createElement("div",{style:{opacity:n?0:1,pointerEvents:"none",transition:"opacity ".concat(a,"ms linear")}},t)},N=function(e){var t=e.progress,n=e.animationDuration;return r.a.createElement("div",{style:{background:"#FF9900",height:2,left:0,marginLeft:"".concat(100*(-1+t),"%"),position:"fixed",top:0,transition:"margin-left ".concat(n,"ms linear"),width:"100%",zIndex:1031}},r.a.createElement("div",{style:{boxShadow:"0 0 10px #FF9900, 0 0 5px #FF9900",display:"block",height:"100%",opacity:1,position:"absolute",right:0,transform:"rotate(3deg) translate(0px, -4px)",width:100}}))},H=(n(356),n(156)),L=n.n(H),q=n(155),A=n.n(q),B=function(){return r.a.createElement("div",{style:{textAlign:"center",padding:"50px"}},r.a.createElement(L.a,{size:"large"}))},J=function(e){return A()({loader:e,loading:B})},T=[{path:"dashboard",name:"\u9996\u9875",component:J((function(){return n.e(4).then(n.bind(null,391))}))},{path:"chart",name:"\u56fe\u8868",component:J((function(){return n.e(3).then(n.bind(null,392))}))},{path:"form",name:"\u8868\u5355",component:function(){return r.a.createElement(r.a.Fragment,null)},children:[{path:"form/button",name:"\u6309\u94ae",component:J((function(){return n.e(5).then(n.bind(null,393))}))},{path:"form/input",name:"\u8f93\u5165\u6846",component:J((function(){return n.e(6).then(n.bind(null,394))}))}]},{path:"table",name:"\u8868\u683c",component:J((function(){return n.e(7).then(n.bind(null,395))}))}],W=w.a.Header,G=w.a.Sider,K=w.a.Content,M={con:{width:"100%",height:"100%"},content:{width:"auto",height:"100%",margin:"20px",padding:"15px",backgroundColor:"#fff",boxSizing:"border-box",minHeight:"500px"},header:{backgroundColor:"#ffffff",padding:"0 30px"},toggle:{display:"inline-block",cursor:"pointer",fontSize:"18px",transition:"all .3s"}},P=Object(i.i)((function(e){var t=e.location;console.log("props",e);var n=Object(i.h)(),o=n.path;console.log("match",n);var l=Object(z.a)(!1),c=l.state,m=l.toggle,u=Object(z.a)(!1),s=u.state,p=u.setTrue,d=u.setFalse;Object(a.useEffect)((function(){return console.log("start"),function(){console.log("end")}}),[t.pathname]);return r.a.createElement(w.a,{style:M.con},r.a.createElement(D.a,{isAnimating:s,key:t.pathname},(function(e){var t=e.isFinished,n=e.progress,a=e.animationDuration;return r.a.createElement(C,{isFinished:t,animationDuration:a},r.a.createElement(N,{progress:n,animationDuration:a}))})),r.a.createElement(G,{trigger:null,collapsible:!0,collapsed:c},r.a.createElement(x.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[t.pathname]},function e(t){return 0===t.length?r.a.createElement(r.a.Fragment,null):t.map((function(t){return t.children?r.a.createElement(x.a.SubMenu,{key:"/app/".concat(t.path),icon:r.a.createElement(g.a,null),title:t.name},e(t.children)):r.a.createElement(x.a.Item,{key:"/app/".concat(t.path),icon:r.a.createElement(g.a,null)},r.a.createElement(j.b,{to:"/app/".concat(t.path)},r.a.createElement("span",null,t.name)))}))}(T))),r.a.createElement(w.a,null,r.a.createElement(W,{style:M.header},r.a.createElement("div",{onClick:function(){return m()},style:M.toggle},c?r.a.createElement(F.a,null):r.a.createElement(O.a,null))),r.a.createElement(K,{style:M.content},r.a.createElement(I.a,null,r.a.createElement(S.a,{key:t.pathname,classNames:"fade",timeout:300,unmountOnExit:!0,onEnter:function(){return p()},onEntered:function(){return d()}},r.a.createElement(i.d,{location:t},r.a.createElement(i.b,{path:"".concat(o),exact:!0},r.a.createElement(i.a,{to:"".concat(o,"/dashboard")})),function e(t){return 0===t.length?r.a.createElement(r.a.Fragment,null):t.map((function(t){if(t.children)return e(t.children);var n=t.component;return r.a.createElement(i.b,{exact:!0,path:"/app/".concat(t.path),title:t.name,key:t.path,render:function(){return r.a.createElement(n,null)}})}))}(T)))))))})),R=function(){return r.a.createElement("div",null,"404")},V=Object(i.i)((function(e){var t=e.location;return Object(a.useEffect)((function(){}),[t.pathname]),Object(a.useLayoutEffect)((function(){}),[t.pathname]),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(i.a,{to:"/login"})),r.a.createElement(i.b,{path:"/login"},r.a.createElement(y,null)),r.a.createElement(i.b,{path:"/app",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(i.b,{path:"*"},r.a.createElement(R,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[162,1,2]]]);