(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){},113:function(e,t,n){},115:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(15),o=n(10),i=n(11),s=n(13),u=n(12),l=n(14),m=n(4),p=n(3),f=n(54),g=n.n(f),h=n(120),d=n(123),E=n(22),b=(n(96),n(6)),v=(n(98),function(e){var t=e.message;return r.a.createElement(p.a,{className:"d-flex"},r.a.createElement(p.a,{className:"icon"},r.a.createElement("img",{width:"30px",height:"30px",src:t.url}),r.a.createElement("p",null," ","".concat(t.name)," ")),r.a.createElement(p.a,{className:"message"},r.a.createElement("p",null," ","".concat(t.text)," ")))});(function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handle=function(e){13==e.keyCode&&(n.setState({value:e.target.value}),e.target.value="")},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{className:"chat w-100"},r.a.createElement(p.a,{className:"textarea"},this.props.messages.map(function(t,n){return r.a.createElement(v,{key:n,message:Object(b.a)({},t,{text:e.state.value})})})),r.a.createElement(p.a,{className:"input"},r.a.createElement(p.b,{onKeyDown:this.handle,onChange:this.handleOnChange})))}}]),t}(a.Component)).defaultProps={messages:[]};n(100),n(102);var y=function(){new E.Howl({src:["music/1.mp3"],autoplay:!0,volume:.9})},O=function(){new E.Howl({src:["music/2.mp3"],autoplay:!0,volume:.9})},j=n(19),w=n(8),k={hoverable:!0,pressable:!0,focusable:!0,init:{scale:1,boxShadow:"0px 0px 0px rgba(0,0,0,0)"},hover:{scale:1.03,boxShadow:"0px 10px 15px rgba(0,0,0,0.5)"},press:{scale:1.04,boxShadow:"0px 2px 5px rgba(0,0,0,0.4)"},blur:{scale:1,transition:{type:"spring",stiffness:800}}},x={focusable:!0,init:{color:"#ccc",scale:1},focus:{color:"#000",scale:1.2},blur:{scale:1,transition:{type:"spring",stiffness:900}}},S=function(e,t){var n=w.b.div(t);return function(t){return r.a.createElement(n,null,r.a.createElement(e,t))}},N=function(e){var t=e.handler;return r.a.createElement("p",{className:"modal-cross",onClick:t},"X")},_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.concat().reduceRight(function(e,t){return t(e)},e)}}(function(e){return S(e,k)})(N),L=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handler=function(){O(),n.props.joke(),n.props.history.push(n.props.to),n.props.close()},n.keyClose=function(e){e.keyCode==n.props.closeKey&&n.handler()},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.children;return this.props.appear&&r.a.createElement("div",{onKeyDown:this.keyClose,className:"modal-layer"},r.a.createElement(p.a,{className:"inner-modal-layer"},this.props.isLogin?r.a.createElement(N,{handler:this.handler}):r.a.createElement(_,{handler:this.handler}),e))}}]),t}(a.Component),C=Object(d.a)(Object(m.b)(function(e){return{isLogin:e.isLogin}},function(e){return{joke:function(){return e({type:"IRONY"})}}})(L)),M=(n(105),function(e){return r.a.createElement("div",{className:"blur-container",style:e.is?(t=e.kernel,{filter:"blur(".concat(t,"px)")}):{}},e.children);var t});M.defaultProps={kernel:3};n(107);var T=Object(m.b)(null,function(e){return{selectName:function(t){return e(function(e){return{type:"SELECT_NAME",payload:e}}(t))}}})(function(e){var t=e.selectName;return r.a.createElement(p.a,null,r.a.createElement("p",{className:"text-center"}," \u0411\u0430\u043a\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0437\u0432\u0438\u0449\u0435: "),r.a.createElement(p.b,{onKeyDown:function(e){13==e.keyCode&&(t(e.target.value),e.target.value="")},placeholder:"\u0418\u043c\u044f"}))}),A=(n(109),function(e){var t,n=e.text,a=e.placement;return r.a.createElement("div",{className:"my_message ".concat((t=a,"bottom"===t?"my_message-bottom":"my_message-top"))},r.a.createElement("p",{className:"discription-text"},n))}),I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={is:!1},n.close=function(){return n.setState({is:!1})},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.children!==this.props.children&&this.setState({is:!0})}},{key:"componentDidUpdate",value:function(e,t){this.state.is&&(clearTimeout(this.id),this.id=setTimeout(this.close,this.props.time))}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,this.state.is&&this.props.children)}}]),t}(a.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.placement;return r.a.createElement(I,{time:this.props.time},r.a.createElement(A,{text:t,placement:n}))}}]),t}(a.PureComponent);P.defaultProps={time:4e3};n(111);var D=w.b.input(x),R=Object(m.b)(function(e){return{socket:e.socket}},function(e){return{postMessage:function(t){return e(function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1],{type:"POST_MESSAGE",payload:e}}(t))},sendMessage:function(t,n){return e(function(e,t){return function(n){e.emit("send-message",t)}}(t,n))}}})(function(e){var t=e.postMessage,n=e.socket,a=e.sendMessage;return r.a.createElement(D,{className:"input-field",placeholder:"\u0427\u0410\u0422",onKeyDown:function(e){13==e.keyCode&&(t(e.target.value),a(n,e.target.value),e.target.value="")}})}),K=n(121),G=function(e){var t=e.url,n=e.to;return r.a.createElement(K.a,{to:n},r.a.createElement("img",{width:"50px",height:"50px",src:t}))},H=function(e){var t=e.score,n=e.url,a=e.message;return r.a.createElement(p.a,{onClick:y,className:"statistic-item"},r.a.createElement(G,{url:n,to:"/"}),r.a.createElement("p",null," ",t," "),r.a.createElement(P,{placement:"bottom",text:a}))},W=Object(m.b)(function(e){return{messages:e.messages}})(function(e){e.value,e.color;var t=e.list,n=e.messages;return r.a.createElement(a.Fragment,null,r.a.createElement("ul",{className:"statistics statistics-list"},t.map(function(e,t){return r.a.createElement("li",{key:t}," ",r.a.createElement(H,{message:n[e.race],score:e.score,url:e.url})," ")})))}),X=(n(113),function(e){var t=e.url,n=e.onClick,a=e.selected?"heroes_selected":"heroes";return r.a.createElement("i",{onClick:n,className:a},r.a.createElement("img",{width:"100px",height:"100px",src:t}))}),U=["blue","red","green"],Y=Object(m.b)(function(e){return{race:e.race}},function(e){return{selectRace:function(t){return e(function(e){return{type:"SELECT_RACE",payload:e}}(t))}}})(function(e){var t=function(t){return function(){y(),e.selectRace(U[t])}},n=e.configs,a=e.description,c=n.urls,o=n.descriptions;return r.a.createElement(p.a,{className:"class-selector"},r.a.createElement(p.a,{className:"class-selector__classes"},c.map(function(n,a){return r.a.createElement(X,{onClick:t(a),selected:U[a]===e.race,key:a,url:n})})),a&&r.a.createElement(p.a,{className:"class-selector__description"},r.a.createElement("p",{className:"discription-text"},o[e.race])))}),z=(n(115),function(e){var t=e.onClick,n=e.url,a=e.to;return r.a.createElement(K.a,{to:a},r.a.createElement("img",{width:"120px",onClick:t,height:"120px",className:"kok",src:n}))}),F=Object(m.b)(function(e){return{text:e.message}},function(e){return{joke:function(){return e({type:"JOKE"})}}})(function(e){var t,n=e.url,a=e.text,c=Object(j.a)(e,["url","text"]);return r.a.createElement(p.a,{fluid:!0,className:"game-bar_container"},r.a.createElement("div",{className:"game-bar-hero"},r.a.createElement(z,{onClick:(t=c.joke,function(){y(),t()}),url:n,to:"/"}),r.a.createElement(P,{time:5e3,placement:"top",text:a})),r.a.createElement(R,null))}),J=Object(m.b)(function(e){return{race:e.race}})(function(e){var t=e.isLogin,n=e.login,c=e.configs,o=Object(j.a)(e,["isLogin","login","configs"]);return r.a.createElement(C,{appear:!0,close:n,to:"/game",closeKey:13},!t&&r.a.createElement(a.Fragment,null,r.a.createElement("hr",null),r.a.createElement(T,null),r.a.createElement("hr",null)),r.a.createElement("p",{className:"text-center"},"\u0420\u0430\u0441\u0430: ",o.race," "),r.a.createElement("hr",null),r.a.createElement(Y,{description:!0,configs:c}),r.a.createElement("hr",null))}),V={alive:function(e){return e>=1},rules:function(e){return 0},name:"init"},B=function(e){var t=Math.floor(e.width/80),n=Math.floor(e.height/60),a=Math.min(n,t),r=e.getContext("2d"),c=[],o=0,i="init",s=[],u=0,l=function(e){return e},m=function(e){c[e.name]=Object(b.a)({},e,{id:o++,count:0})},p=function(e){var t=c[e];t.alive,t.rules;i=e};m(V),p(i);var f=function(){var e=h,t=e.x,n=e.y;l(t,n)};e.addEventListener("mousemove",function(e){var a=d(e),r=a.x,c=a.y;h={x:Math.floor(r/t),y:Math.floor(c/n)},function(e,t){s=s.filter(function(n){return Math.abs(n.x-e)+Math.abs(n.y-t)>50})}(r,c)}),e.addEventListener("mousedown",function(t){f(),e.addEventListener("mousemove",f)}),e.addEventListener("mouseup",function(){e.removeEventListener("mousemove",f)});var g=[],h={},d=function(t){return{x:t.pageX-e.offsetLeft,y:t.pageY-e.offsetTop}},E=function(e,a){var o=g[e+80*a].race,i=c[o].image;i&&r.drawImage(i,e*t,a*n)},v=function(e,o){var i=g[e+80*o].race,s=c[i].shadow;s&&(r.beginPath(),r.fillStyle="rgba(".concat(s.r,",").concat(s.g,",").concat(s.b,",0.18)"),r.arc((e+.8)*t,(o+.8)*n,a,0,2*Math.PI),r.fill())};return{addConfig:m,use:function(e){p(e)},getStatistics:function(e){return c[e][o]},setLoot:function(e){e.img;e.size},getPower:function(){return u},initPower:function(e){return u=e},onMouse:function(e){return l=e},paint:function(){r.clearRect(0,0,e.width,e.height);for(var t=0;t<80;++t)for(var n=0;n<60;++n)g[t+80*n].alive?E(t,n):v(t,n)},set:function(e){g=e}}};(function(e){var t=0,n=e.length,a=e.map(function(e){return new E.Howl({src:e,volume:.9,onend:function(){a[t=(t+1)%n].play()}})});return{play:function(){return a[0].play()}}})(["music/Polyphia G.O.A.T. (Official Music Video).mp3","music/Polyphia \u2013 O.D..mp3","music/Polyphia - Crush.mp3"]).play();var Z=["./icon1.png","./icon2.png","./icon3.png"],q={blue:"./icon1.png",red:"./icon2.png",green:"./icon3.png"},Q={blue:{r:100,g:100,b:255},red:{r:255,g:100,b:100},green:{r:5,g:100,b:5}},$=["./hero1.png","./hero.png","./hero2.png","./waterbear.png"],ee=$.map(function(e){return new Image});ee.forEach(function(e,t){return e.src=$[t]});var te=[{name:"blue",image:ee[0],shadow:Q.blue},{name:"red",image:ee[1],shadow:Q.red},{name:"green",image:ee[2],shadow:Q.green}],ne={urls:Z,descriptions:{blue:"\u0441\u0443\u043f\u0435\u0440 \u0431\u044b\u0441\u0442\u0440\u044b\u0435",red:"\u0441\u0443\u043f\u0435\u0440 \u0441\u0438\u043b\u044c\u043d\u044b\u0435",green:"\u0441\u0443\u043f\u0435\u0440 \u043f\u043b\u043e\u0434\u043e\u0432\u0438\u0442\u044b\u0435"}},ae=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={statistics:[]},n.init=function(){n.resize(),n.engine=B(n._canvas.current),te.forEach(n.engine.addConfig),n.change(),n.engine.onMouse(function(e,t){return n.props.sendMousePosition(n.socket,e,t)})},n.resize=function(){var e=n._canvas.current.parentElement;n._canvas.current.width=e.clientWidth,n._canvas.current.height=e.clientHeight},n.login=function(){n.change(),n.props.Login(),n.props.sendLoginInfo(n.socket,n.props.config)},n.change=function(){n.engine.use(n.props.race)},n._canvas=Object(a.createRef)(),n.engine=null,n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.init(),this.socket=g()(),this.props.initSocket(this.socket,this.engine),window.addEventListener("resize",this.init)}},{key:"render",value:function(){var e=this,t=(this.state.statistics,Q[this.props.race]);return r.a.createElement(a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(J,{isLogin:e.props.isLogin,login:e.login,configs:ne})}}),r.a.createElement(M,{kernel:14,is:!this.props.isLogin},r.a.createElement("div",{className:"h-100 w-100 background tools"},r.a.createElement("canvas",{ref:this._canvas}),r.a.createElement(W,{color:"rgb(".concat(t.r,",").concat(t.g,",").concat(t.b),value:100,list:this.props.stats}),r.a.createElement(p.a,{className:"d-flex"},r.a.createElement(F,{url:q[this.props.race]})))))}}]),t}(a.Component),re=Object(d.a)(Object(m.b)(function(e){return{isLogin:e.isLogin,race:e.race,config:{race:e.race,name:e.name},stats:[{race:"blue",url:Z[0],score:e.statistics[0]},{race:"red",url:Z[1],score:e.statistics[1]},{race:"green",url:Z[2],score:e.statistics[2]}]}},function(e){return{initSocket:function(t,n){return e(function(e,t){return function(n){e.on("new-players",function(e){n(function(e){return{type:"NEW_PLAYERS",payload:e}}(e))}),e.on("response-message",function(e){n(function(e){return{type:"SHOW_MESSAGE",payload:e}}(e))}),n(function(e){return{type:"ADD_SOCKET",payload:e}}(e)),e.on("render",function(e){t.set(e),t.paint()}),e.on("statistics",function(e){n(function(e){return{type:"SHOW_STATISTICS",payload:e}}(e))})}}(t,n))},Login:function(){return e({type:"LOGIN"})},sendMousePosition:function(t,n,a){return e(function(e,t,n){return function(a){var r={x:t,y:n};e.emit("send-mouse-position",r)}}(t,n,a))},sendLoginInfo:function(t,n){return e(function(e,t){return function(n){e.emit("send-login-info",t)}}(t,n))}}})(ae)),ce={race:"red",messages:{},message:"let's start",isLogin:!1,statistics:[0,0,0]},oe=["\u043f\u0440\u0435\u0434\u0430\u0442\u0435\u043b\u044c!!!","\u0434\u0430,\u0434\u0430 \u0431\u0440\u043e\u0441\u044c \u043d\u0430\u0441 \u0432 \u0441\u0430\u043c\u044b\u0439 \u0432\u0430\u0436\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442...","\u0442\u0440\u0443\u0441\u043b\u0438\u0432\u0430\u044f \u0431\u0443\u043a\u0430\u0448\u043a\u0430!!!","\u041e\u0442 \u043c\u0435\u043d\u044f \u0438 \u0442\u043e '\u0411\u041e\u041b\u042c\u0428\u0415' \u0442\u043e\u043b\u043a\u0443","\u041e\u0434\u043d\u043e\u043a\u043b\u0435\u0442\u043e\u0447\u043d\u043e\u0435!!!"],ie=["\u0421\u0435\u0440\u044c\u0435\u0437\u043d\u043e?! \u0442\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e? \u0410 \u0445\u043e\u0447\u0435\u0448\u044c \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u044c \u0432 '\u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0432\u043e\u0439\u043d\u0435'?=)))","\u041d\u0443 \u0438 \u0433\u043b\u0443\u043f\u043e\u0432\u0430\u0442 \u0442\u044b...=)","\u041c\u043e\u043b\u043e\u0434\u0435\u0446!!! \u0442\u044b \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043b!!!"],se=n(20),ue=n(58),le=n(122),me=(n(117),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}),pe=Object(se.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_NAME":return Object(b.a)({},e,{name:t.payload});case"JOKE":return Object(b.a)({},e,{message:oe[Math.floor(Math.random()*oe.length)]});case"SHOW_STATISTICS":return Object(b.a)({},e,{statistics:t.payload});case"LOGIN":return Object(b.a)({},e,{isLogin:!0});case"IRONY":return Object(b.a)({},e,{message:e.isLogin?e.message:ie[Math.floor(Math.random()*ie.length)]});case"LOGOUT":return Object(b.a)({},e,{isLogin:!1});case"SELECT_RACE":return Object(b.a)({},e,{race:t.payload});case"NEW_PLAYERS":return Object(b.a)({},e,{players:t.payload});case"SET_POPULATION_SIZE":return Object(b.a)({},e,{population:t.payload});case"POST_MESSAGE":return Object(b.a)({},e,{message:t.payload});case"ADD_SOCKET":return Object(b.a)({},e,{socket:t.payload});case"SHOW_MESSAGE":var n=t.payload,a=n.race,r=n.message,c=Object(b.a)({},e.messages);return c[a]=r,Object(b.a)({},e,{messages:c});default:return e}},Object(se.c)(Object(se.a)(ue.a),me));pe.dispatch({type:"INIT"}),Object(c.render)(r.a.createElement(m.a,{store:pe},r.a.createElement(le.a,null,r.a.createElement(re,null))),document.getElementById("root"))},59:function(e,t,n){e.exports=n(119)},93:function(e,t){},96:function(e,t,n){},98:function(e,t,n){}},[[59,2,1]]]);
//# sourceMappingURL=main.d5adcb3c.chunk.js.map