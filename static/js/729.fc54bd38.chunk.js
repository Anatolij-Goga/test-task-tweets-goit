"use strict";(self.webpackChunktest_task_tweets_goit=self.webpackChunktest_task_tweets_goit||[]).push([[729],{729:function(n,t,e){e.r(t),e.d(t,{default:function(){return dn}});var r=e(683),o=e(433),a=e(439),i=e(791),s=function(n){try{var t=localStorage.getItem(n);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},l=e(861),c=e(757),p=e.n(c),x=e(243),u="https://64442ec790738aa7c080f1f8.mockapi.io/api/v1/users";function d(){return d=(0,l.Z)(p().mark((function n(){var t,e,r=arguments;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,x.Z.get("".concat(u,"?page=").concat(t,"&limit=3"));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function f(){return(f=(0,l.Z)(p().mark((function n(t,e){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.Z.put("".concat(u,"/").concat(t),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g,h,b,w,m,Z,v,k,j,y,F,P,S,z,L,C,_,Y,N,O,B=e(168),I=e(87),D=e(444),E=(0,D.ZP)(I.rU)(g||(g=(0,B.Z)(["\n  display: flex;\n  text-align: center;\n  max-width: 200px;\n  margin: 0 auto;\n  padding: 8px 16px;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: calc(24 / 18);\n  text-decoration: none;\n  border-radius: 20px;\n  border: solid 1px #373737;\n  cursor: pointer;\n  color: #373737;\n  background-color: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: rgb(227, 227, 227);\n    background-color: #5736a3;\n  }\n"]))),A=e(184),G=function(n){var t=n.to,e=n.children;return(0,A.jsx)(E,{to:t,children:e})},M=D.ZP.div(h||(h=(0,B.Z)(["\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 36px;\n  height: 100%;\n  border-radius: 20px;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  background-image: url('/src/images/bg-1.png'),\n    url('/src/images/Logo-76x22.png');\n  background-position: top 28px right 36px, top 20px left 20px;\n  background-repeat: no-repeat, no-repeat;\n  color: #ebd8ff;\n  &::after {\n    position: absolute;\n    content: '';\n    z-index: 0;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 10px;\n    transform: translateY(-50%);\n    background-color: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),W=D.ZP.div(b||(b=(0,B.Z)(["\n  z-index: 1;\n  display: flex;\n  margin-top: auto;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),J=D.ZP.img(w||(w=(0,B.Z)(["\n  background-color: #5736a3;\n  border-radius: 50%;\n"]))),H=D.ZP.div(m||(m=(0,B.Z)(["\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 16px;\n  padding-bottom: 26px;\n"]))),T=D.ZP.p(Z||(Z=(0,B.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: calc(24 / 20);\n  text-transform: uppercase;\n"]))),U=D.ZP.p(v||(v=(0,B.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  line-height: calc(24 / 20);\n  text-transform: uppercase;\n"]))),q=D.ZP.button(k||(k=(0,B.Z)(["\n  position: relative;\n  padding: 14px;\n  width: 196px;\n  height: 50px;\n  color: #373737;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: calc(22 / 18);\n  text-transform: uppercase;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border-style: none;\n  cursor: pointer;\n  background-color: ",";\n  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;\n  ","\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.isFollowing?"#5CD3A8":"#EBD8FF"}),(function(n){return n.isFollowing&&(0,D.iv)(j||(j=(0,B.Z)(["\n      transform: rotateY(360deg);\n      &::before {\n        transform: rotateY(360deg);\n        transform-origin: right center;\n      }\n    "])))}),(function(n){return n.isFollowing?"#EBD8FF":"#5CD3A8"})),K=D.ZP.span(y||(y=(0,B.Z)(["\n  transform: ",";\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 50%;\n    transform-origin: left center;\n    transform-style: preserve-3d;\n    transition: transform 0.3s ease-in-out;\n  }\n"])),(function(n){return n.isFollowing?"rotateY(-360deg)":"rotateY(0deg)"})),Q=function(n){var t=n.id,e=n.avatar,r=n.tweets,o=n.followers,a=n.onFollowClick,i=!0===s("tweet_".concat(t));return(0,A.jsxs)(M,{children:[(0,A.jsx)(W,{children:(0,A.jsx)(J,{width:62,height:62,src:e,alt:"user avatar"})}),(0,A.jsxs)(H,{children:[(0,A.jsxs)(T,{children:[r.toLocaleString("en-IN")," Tweets"]}),(0,A.jsxs)(U,{children:[o.toLocaleString("en-IN")," Followers"]})]}),(0,A.jsx)(q,{type:"button",onClick:function(){a(t,i)},isFollowing:i,children:(0,A.jsx)(K,{isFollowing:i,children:i?"Following":"Follow"})})]})},R=D.ZP.div(F||(F=(0,B.Z)(["\n  padding: 20px;\n  width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),V=D.ZP.ul(P||(P=(0,B.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 0 0 20px 0;\n  margin-top: 10px;\n"]))),X=D.ZP.li(S||(S=(0,B.Z)(["\n  width: 380px;\n  height: 460px;\n  border-radius: 20px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n"]))),$=function(n){var t=n.users,e=n.onFollowClick;return(0,A.jsx)(R,{children:(0,A.jsx)(V,{children:t.map((function(n){var t=n.id,r=n.tweets,o=n.followers,a=n.avatar;return(0,A.jsx)(X,{children:(0,A.jsx)(Q,{id:t,tweets:r,followers:o,avatar:a,onFollowClick:e})},t)}))})})},nn=D.ZP.button(z||(z=(0,B.Z)(["\n  display: flex;\n  text-align: center;\n  max-width: 200px;\n  margin: 0 auto;\n  padding: 8px 16px;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: calc(24 / 18);\n  text-decoration: none;\n  border-radius: 20px;\n  border: solid 1px #373737;\n  cursor: pointer;\n  color: #373737;\n  background-color: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    color: rgb(227, 227, 227);\n    background-color: #5736a3;\n  }\n"]))),tn=function(n){var t=n.onBtnLoadMore;return(0,A.jsx)(nn,{type:"button",onClick:t,children:"Load More"})},en=e(402),rn=D.ZP.div(L||(L=(0,B.Z)(["\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 113%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),on=function(n){return n?(0,A.jsx)(rn,{children:(0,A.jsx)(en.Nx,{width:"400",color:"#573657"})}):(0,A.jsx)(en.Nx,{width:"400",color:"#573657"})},an=(0,D.F4)(C||(C=(0,B.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),sn=D.ZP.select(_||(_=(0,B.Z)(["\n  padding: 8px;\n  margin-top: 8px;\n  border: none;\n  border-radius: 4px;\n  color: #333;\n  background-color: linear-gradient(\n    to right,\n    rgb(201, 214, 255),\n    rgb(226, 226, 226)\n  );\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  font-size: 20px;\n  font-weight: 900;\n  transform: translateY(-10px);\n  animation: "," 0.2s ease forwards;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);\n  }\n"])),an),ln=D.ZP.option(Y||(Y=(0,B.Z)(["\n  display: block;\n  padding: 8px 16px;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: #fff;\n  color: #333;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  &:hover {\n    background-color: #f8f8f8;\n  }\n"]))),cn=[{value:"show all",label:"SHOW ALL"},{value:"follow",label:"FOLLOW"},{value:"followings",label:"FOLLOWINGS"}],pn=function(n){var t=n.value,e=n.setSelectedFilter;return(0,A.jsx)(sn,{value:t,onChange:function(n){e(n.target.value)},children:cn.map((function(n){return(0,A.jsx)(ln,{value:n.value,children:n.label},n.value)}))})},xn=D.ZP.section(N||(N=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n  flex-direction: column;\n  font-size: 18px;\n"]))),un=D.ZP.p(O||(O=(0,B.Z)(["\n  font-size: 50px;\n  margin-top: 220px;\n  margin-bottom: 220px;\n  font-weight: 900;\n"]))),dn=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],l=t[1],c=(0,i.useState)(!1),p=(0,a.Z)(c,2),x=p[0],u=p[1],g=(0,i.useState)("show all"),h=(0,a.Z)(g,2),b=h[0],w=h[1],m=(0,i.useState)(1),Z=(0,a.Z)(m,2),v=Z[0],k=Z[1],j=(0,i.useState)(!0),y=(0,a.Z)(j,2),F=y[0],P=y[1];(0,i.useEffect)((function(){u(!0),P(!1),function(){return d.apply(this,arguments)}(v).then((function(n){l((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n))})),u(!1),P(!0)})).catch(console.log)}),[v]),(0,i.useEffect)((function(){12===e.length&&1!==v&&P(!1)}),[v,e.length]);var S=function(n,t){switch(t){case"show all":default:return n;case"follow":return n.filter((function(n){return!0!==s("tweet_".concat(n.id))}));case"followings":return n.filter((function(n){return!0===s("tweet_".concat(n.id))}))}}(e,b);return x?(0,A.jsx)(on,{}):(0,A.jsxs)(xn,{children:[(0,A.jsx)(G,{to:"/",children:"Go Back"}),(0,A.jsx)(pn,{value:b,setSelectedFilter:w}),(0,A.jsx)($,{users:S,onFollowClick:function(n,t){var o=e.map((function(e){if(e.id===n){var o=(0,r.Z)((0,r.Z)({},e),{},{followers:e.followers+(t?-1:1)});return function(n,t){f.apply(this,arguments)}(e.id,{followers:o.followers}),o}return e}));l(o),function(n,t){try{var e=JSON.stringify(t);localStorage.setItem(n,e)}catch(r){console.error("Set state error",r.message)}}("tweet_".concat(n),!t)}}),0===S.length&&(0,A.jsx)(un,{children:"No subscriptions"}),x&&S.length&&on(v),F&&(0,A.jsx)(tn,{onBtnLoadMore:function(){k((function(n){return n+1}))},disabled:x})]})}}}]);
//# sourceMappingURL=729.fc54bd38.chunk.js.map