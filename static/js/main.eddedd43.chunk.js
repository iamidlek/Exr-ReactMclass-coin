(this.webpackJsonpmastercourse1=this.webpackJsonpmastercourse1||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var c=t(23),i=t.n(c),r=t(9),o=t(22),a=t(4),s=t(8),l=t(17),d="https://api.coinpaprika.com/v1";function j(){return fetch("".concat(d,"/coins")).then((function(n){return n.json().then((function(n){return n.slice(0,50)}))}))}var h=t(45),b=t.n(h),u=t(15),x=Object(u.b)({key:"isDark",default:!0}),p=t(1);var O,m,f,g,v,y,k=function(n){var e=n.coinId,t=Object(u.c)(x),c=Object(l.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(d,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),i=c.isLoading,r=c.data;return Object(p.jsx)("div",{children:i?"Loading chart...":Object(p.jsx)(b.a,{type:"candlestick",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:t?"dark":"light"},chart:{type:"candlestick",height:900,background:"transparent",foreColor:"black",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},xaxis:{type:"datetime"},yaxis:{show:!1}}})})},C=t(5),w=t(0);function _(n){if(n)return n>0}var q=Object(s.d)(O||(O=Object(r.a)(["\n  0% {\n    transform: none;\n    opacity: 0;\n  }\n  1% {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n"]))),S=s.c.div(m||(m=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  main:first-child {\n    animation-delay: 0.2s;\n  }\n  main:nth-child(2) {\n    animation-delay: 0.4s;\n  }\n  main:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  main:nth-child(4) {\n    animation-delay: 0.8s;\n  }\n  main:nth-child(5) {\n    animation-delay: 1s;\n  }\n  main:last-child {\n    animation-delay: 1.2s;\n  }\n"]))),D=s.c.main(f||(f=Object(r.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: white;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 15px;\n  margin: 10px 0;\n  padding: 20px;\n  transform: translateY(-5px);\n  opacity: 0;\n  animation: "," 0.5s linear forwards;\n"])),q),P=s.c.h3(g||(g=Object(r.a)(["\n  width: 50%;\n  color: black;\n  font-size: 12px;\n  font-weight: 600;\n"]))),L=s.c.div(v||(v=Object(r.a)(["\n  width: 50%;\n"]))),I=s.c.h3(y||(y=Object(r.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.isPositive?"lightgreen":"red"}));var U,z,M,Q,F,A,T,B,E,H,R=function(n){var e=n.coinId,t=n.tickersData,c=Object(w.useState)(),i=Object(C.a)(c,2),r=i[0],o=i[1],a=Object(w.useState)(!0),s=Object(C.a)(a,2),l=s[0],d=s[1];return Object(w.useEffect)((function(){o(t),d(!1)}),[e,t]),Object(p.jsx)(S,{children:l?"Loading Price...":Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:"Price :"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0,children:["$ ",null===r||void 0===r?void 0:r.quotes.USD.price.toFixed(3)]})})]}),Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:" Max Change rate in last 24h:"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0===_(null===r||void 0===r?void 0:r.quotes.USD.market_cap_change_24h),children:[null===r||void 0===r?void 0:r.quotes.USD.market_cap_change_24h," %"]})})]}),Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:" Change rate (last 30 Minutes):"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0===_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_30m),children:[null===r||void 0===r?void 0:r.quotes.USD.percent_change_30m," %"]})})]}),Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:" Change rate (last 1 hours):"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0===_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h),children:[null===r||void 0===r?void 0:r.quotes.USD.percent_change_1h," %"]})})]}),Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:" Change rate (last 12 hours):"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0===_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_12h),children:[null===r||void 0===r?void 0:r.quotes.USD.percent_change_12h," %"]})})]}),Object(p.jsxs)(D,{children:[Object(p.jsx)(P,{children:" Change rate (last 24 hours):"}),Object(p.jsx)(L,{children:Object(p.jsxs)(I,{isPositive:!0===_(null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h),children:[null===r||void 0===r?void 0:r.quotes.USD.percent_change_24h," %"]})})]})]})})},$=t(34),J=s.c.h1(U||(U=Object(r.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),Y=s.c.div(z||(z=Object(r.a)(["\n  font-size: 18px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n  color: ",";\n  margin-top: 20px;\n"])),(function(n){return n.theme.textColor})),G=s.c.span(M||(M=Object(r.a)(["\n  text-align: center;\n  display: block;\n"]))),K=s.c.div(Q||(Q=Object(r.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),N=s.c.header(F||(F=Object(r.a)(["\n  height: 15vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),V=s.c.div(A||(A=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),W=s.c.div(T||(T=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),X=s.c.p(B||(B=Object(r.a)(["\n  margin: 20px 0px;\n  color: ",";\n"])),(function(n){return n.theme.textColor})),Z=s.c.div(E||(E=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),nn=s.c.span(H||(H=Object(r.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var en,tn,cn,rn,on,an,sn,ln=function(){var n=Object(a.h)().coinId,e=Object(a.e)().state,t=Object(a.f)("/:coinId/price"),c=Object(a.f)("/:coinId/chart"),i=Object(l.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(d,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,s=i.data,j=Object(l.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(d,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),h=j.isLoading,b=j.data,u=r||h;return Object(p.jsxs)(K,{children:[Object(p.jsx)($.a,{children:Object(p.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===s||void 0===s?void 0:s.name})}),Object(p.jsxs)(N,{children:[Object(p.jsx)(J,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===s||void 0===s?void 0:s.name}),Object(p.jsx)(Y,{children:Object(p.jsx)(o.b,{to:"/",children:"Main Page"})})]}),u?Object(p.jsx)(G,{children:"Loading..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(V,{children:[Object(p.jsxs)(W,{children:[Object(p.jsx)("span",{children:"Rank:"}),Object(p.jsx)("span",{children:null===s||void 0===s?void 0:s.rank})]}),Object(p.jsxs)(W,{children:[Object(p.jsx)("span",{children:"Symbol:"}),Object(p.jsxs)("span",{children:["$",null===s||void 0===s?void 0:s.symbol]})]}),Object(p.jsxs)(W,{children:[Object(p.jsx)("span",{children:"Price:"}),Object(p.jsxs)("span",{children:["$",null===b||void 0===b?void 0:b.quotes.USD.price.toFixed(3)]})]})]}),Object(p.jsx)(X,{children:null===s||void 0===s?void 0:s.description}),Object(p.jsxs)(V,{children:[Object(p.jsxs)(W,{children:[Object(p.jsx)("span",{children:"Total Suply:"}),Object(p.jsx)("span",{children:null===b||void 0===b?void 0:b.total_supply})]}),Object(p.jsxs)(W,{children:[Object(p.jsx)("span",{children:"Max Supply:"}),Object(p.jsx)("span",{children:null===b||void 0===b?void 0:b.max_supply})]})]}),Object(p.jsxs)(Z,{style:{height:"30px",lineHeight:"30px"},children:[Object(p.jsx)(nn,{isActive:null!==c,children:Object(p.jsx)(o.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(p.jsx)(nn,{isActive:null!==t,children:Object(p.jsx)(o.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"price",element:Object(p.jsx)(R,{coinId:n,tickersData:b})}),Object(p.jsx)(a.a,{path:"chart",element:Object(p.jsx)(k,{coinId:n})})]})]})]})},dn=s.c.div(en||(en=Object(r.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),jn=s.c.header(tn||(tn=Object(r.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),hn=s.c.ul(cn||(cn=Object(r.a)([""]))),bn=s.c.li(rn||(rn=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  a {\n    padding: 20px 0;\n    transition: color 0.2s ease-in;\n    display: block;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),un=s.c.h1(on||(on=Object(r.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),xn=s.c.span(an||(an=Object(r.a)(["\n  text-align: center;\n  display: block;\n"]))),pn=s.c.img(sn||(sn=Object(r.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var On=function(){var n=Object(u.d)(x),e=Object(l.useQuery)("allCoins",j),t=e.isLoading,c=e.data;return Object(p.jsxs)(dn,{children:[Object(p.jsx)($.a,{children:Object(p.jsx)("title",{children:"\ucf54\uc778"})}),Object(p.jsxs)(jn,{children:[Object(p.jsx)(un,{children:"\ucf54\uc778"}),Object(p.jsx)("button",{onClick:function(){return n((function(n){return!n}))},children:"Toggle Mode"})]}),t?Object(p.jsx)(xn,{children:"Loading..."}):Object(p.jsx)(hn,{children:null===c||void 0===c?void 0:c.map((function(n){return Object(p.jsxs)(bn,{children:[Object(p.jsx)(pn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),Object(p.jsxs)(o.b,{to:{pathname:"/".concat(n.id,"/chart")},state:{name:n.name,rank:n.rank},children:[n.name," \u2192"]})]},n.id)}))})]})};var mn,fn=function(){return Object(p.jsx)(o.a,{basename:"/Exr-ReactMclass-coin",children:Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"/:coinId/*",element:Object(p.jsx)(ln,{})}),Object(p.jsx)(a.a,{path:"/",element:Object(p.jsx)(On,{})})]})})},gn=t(51),vn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},yn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},kn=Object(s.b)(mn||(mn=Object(r.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:","\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var Cn=function(){var n=Object(u.c)(x);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(s.a,{theme:n?vn:yn,children:[Object(p.jsx)(kn,{}),Object(p.jsx)(fn,{}),Object(p.jsx)(gn.ReactQueryDevtools,{initialIsOpen:!0})]})})},wn=new l.QueryClient;i.a.render(Object(p.jsx)(u.a,{children:Object(p.jsx)(l.QueryClientProvider,{client:wn,children:Object(p.jsx)(Cn,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.eddedd43.chunk.js.map