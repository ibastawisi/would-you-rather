(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{123:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getAll",(function(){return y})),n.d(a,"register",(function(){return k}));var r={};n.r(r),n.d(r,"login",(function(){return W}));var o={};n.r(o),n.d(o,"getAll",(function(){return U})),n.d(o,"create",(function(){return T})),n.d(o,"update",(function(){return D})),n.d(o,"remove",(function(){return R}));var c=n(0),s=n.n(c),i=n(40),u=n.n(i),l=(n(123),n(27)),d=n(18),p=n(15),j=n(21),b=n.n(j),h=n(16),O=n(14),f=n.n(O),m=n(17),x=n(33),v=n(43),g=n.n(v),w="https://would-you-rather-server.herokuapp.com/api/users",y=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(w);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(w,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=null,q=function(){return A},S=function(){var e=window.localStorage.getItem("authedUser");return e&&JSON.parse(e)},C=function(e){A="bearer ".concat(e.token),window.localStorage.setItem("authedUser",JSON.stringify(e))},W=function(){var e=Object(m.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://would-you-rather-server.herokuapp.com/api/login",t);case 2:return n=e.sent,C(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L="https://would-you-rather-server.herokuapp.com/api/questions",U=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(L);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),a={headers:{Authorization:n}},e.next=4,g.a.post(L,t,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q(),r={headers:{Authorization:a}},e.next=4,g.a.put("".concat(L,"/").concat(t),n,r);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),a={headers:{Authorization:n}},e.next=4,g.a.delete("".concat(L,"/").concat(t),a);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=Object(x.b)("app/load",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(j.showLoading)()),e.next=3,Promise.all([a.getAll(),o.getAll()]);case 3:return r=e.sent,n.dispatch(Object(j.hideLoading)()),c=S(),t=null===c||void 0===c?void 0:c.token,A=t?"bearer ".concat(t):null,e.abrupt("return",{users:r[0],questions:r[1],authedUser:c});case 8:case"end":return e.stop()}var t}),e)})));return function(t,n){return e.apply(this,arguments)}}()),I=Object(x.b)("app/login",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(j.showLoading)()),e.prev=1,e.next=4,r.login(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:if(e.prev=8,e.t0=e.catch(1),e.t0.response){e.next=12;break}throw e.t0;case 12:return e.abrupt("return",n.rejectWithValue(e.t0.response.data));case 13:return e.prev=13,n.dispatch(Object(j.hideLoading)()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,8,13,16]])})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(x.b)("app/register",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(j.showLoading)()),e.prev=1,e.next=4,a.register(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:if(e.prev=8,e.t0=e.catch(1),e.t0.response){e.next=12;break}throw e.t0;case 12:return e.abrupt("return",n.rejectWithValue(e.t0.response.data));case 13:return e.prev=13,n.dispatch(Object(j.hideLoading)()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,8,13,16]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(x.c)({name:"app",initialState:{authedUser:null,loading:!0,announcement:null},reducers:{setAuthedUser:function(e,t){e.authedUser=t.payload},setLoading:function(e,t){e.loading=t.payload},announce:function(e,t){e.announcement=t.payload},clearAnnouncement:function(e){e.announcement=null}},extraReducers:function(e){e.addCase(z.pending,(function(e){e.loading=!0})).addCase(z.fulfilled,(function(e,t){e.authedUser=t.payload.authedUser,e.loading=!1})).addCase(I.fulfilled,(function(e,t){e.authedUser=t.payload,e.announcement="Welcome back, ".concat(t.payload.name)})).addCase(F.fulfilled,(function(e,t){e.announcement="Account created! please login to continue"}))}}),Q=(N.reducer,n(22)),V=n(4),B=Object(x.c)({name:"questions",initialState:{},reducers:{load:function(e,t){return t.payload},addAnswer:function(e,t){var n=t.payload,a=n.question,r=n.answer,o=n.username;e[a.id][r].votes.push(o)},removeAnswer:function(e,t){var n=t.payload,a=n.question,r=n.answer,o=n.username,c=e[a.id][r].votes;e[a.id][r].votes=c.filter((function(e){return e!==o}))},add:function(e,t){e[t.payload.id]=t.payload}},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},t.payload.questions.reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(V.a)({},t.id,t))}),{})),e)}))}}),P=Object(x.b)("questions/answer",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(j.showLoading)()),n.dispatch(B.actions.addAnswer(t)),a=Object(h.a)(Object(h.a)({},t.question),{},Object(V.a)({},t.answer,Object(h.a)(Object(h.a)({},t.question[t.answer]),{},{votes:[].concat(Object(Q.a)(t.question[t.answer].votes),[t.username])}))),e.next=5,D(t.question.id,a);case 5:return!e.sent&&n.dispatch(B.actions.removeAnswer(t)),n.dispatch(Object(j.hideLoading)()),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(x.b)("questions/add",function(){var e=Object(m.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(Object(j.showLoading)()),e.next=3,o.create(t);case 3:return a=e.sent,n.dispatch(B.actions.add(a)),n.dispatch(Object(j.hideLoading)()),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Y=(B.reducer,Object(x.c)({name:"users",initialState:{},reducers:{load:function(e,t){return t.payload},add:function(e,t){e[t.payload.username]=t.payload}},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},t.payload.users.reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(V.a)({},t.username,t))}),{})),e)})).addCase(E.fulfilled,(function(e,t){e[t.payload.author].questions.push(t.payload.id)})).addCase(P.fulfilled,(function(e,t){e[t.payload.username].answers[t.payload.question.id]=t.payload.answer})).addCase(F.fulfilled,(function(e,t){e[t.payload.username]=t.payload}))}})),_=(Y.reducer,{app:Object(h.a)(Object(h.a)({},N.actions),{},{loadAsync:z,loginAsync:I,registerAsync:F,showLoading:j.showLoading,hideLoading:j.hideLoading}),users:Y.actions,questions:Object(h.a)(Object(h.a)({},B.actions),{},{addQuestionAsync:E,answerQuestionAsync:P})}),J={app:N.reducer,users:Y.reducer,questions:B.reducer,loadingBar:j.loadingBarReducer},H=n(12),M=n(223),G=n(212),$=n(222),K=n(224),X=n(225),Z=n(217),ee=n(227),te=n(1),ne=function(){var e=Object(c.useState)({username:"",name:"",password:""}),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(p.useDispatch)(),o=Object(d.g)(),s=function(e){var t=e.target,r=t.name,o=t.value;a(Object(h.a)(Object(h.a)({},n),{},Object(V.a)({},r,o)))},i=function(){var e=Object(m.a)(f.a.mark((function e(t){var c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r(_.app.registerAsync(n));case 3:(c=e.sent).error?r(_.app.announce((null===(s=c.payload)||void 0===s?void 0:s.error)||c.error.message)):(a({username:"",name:"",password:""}),o.push("/login"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsx)(M.a,{component:"main",maxWidth:"xs",children:Object(te.jsxs)(G.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(te.jsx)($.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(te.jsx)(K.a,{children:"how_to_reg"})}),Object(te.jsx)(X.a,{component:"h1",variant:"h5",children:"Register"}),Object(te.jsxs)(G.a,{component:"form",onSubmit:i,noValidate:!0,sx:{mt:1},children:[Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:s}),Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",onChange:s}),Object(te.jsx)(Z.a,{size:"small",margin:"dense",fullWidth:!0,id:"avatarURL",label:"Avatar URL",name:"avatarURL",autoComplete:"avatarURL",onChange:s}),Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:s}),Object(te.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"})]})]})})},ae=function(){var e=Object(c.useState)({username:"",password:""}),t=Object(H.a)(e,2),n=t[0],a=t[1],r=Object(p.useDispatch)(),o=Object(d.g)(),s=function(e){var t=e.target,r=t.name,o=t.value;a(Object(h.a)(Object(h.a)({},n),{},Object(V.a)({},r,o)))},i=function(){var e=Object(m.a)(f.a.mark((function e(t){var c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r(_.app.loginAsync(n));case 3:(c=e.sent).error?r(_.app.announce((null===(s=c.payload)||void 0===s?void 0:s.error)||c.error.message)):(a({username:"",password:""}),o.push("/"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsx)(M.a,{component:"main",maxWidth:"xs",children:Object(te.jsxs)(G.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(te.jsx)($.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(te.jsx)(K.a,{children:"how_to_reg"})}),Object(te.jsx)(X.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(te.jsxs)(G.a,{component:"form",onSubmit:i,noValidate:!0,sx:{mt:1},children:[Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:s}),Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:s}),Object(te.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(te.jsx)(l.b,{to:"/register",children:"Don't have an account? Sign Up"})]})]})})};function re(e){var t=new Date(e),n=t.toLocaleTimeString("en-US");return n.substr(0,5)+n.slice(-2)+" | "+t.toLocaleDateString()}var oe=n(228),ce=n(230),se=n(229),ie=n(231),ue=n(232),le=n(233),de=n.p+"static/media/404.f7f74b0b.svg",pe=function(){var e=Object(d.h)();return Object(te.jsxs)("div",{style:{textAlign:"center",marginTop:"2rem"},children:[Object(te.jsx)("img",{src:de,width:256,alt:"Resource Not Found"}),Object(te.jsxs)("h3",{children:["No match for ",Object(te.jsx)("code",{children:e.pathname})]})]})},je=function(e){var t=e.text,n=e.votes,a=e.totalVotes,r=e.active;return Object(te.jsx)(ee.a,{fullWidth:!0,variant:"outlined",value:"optionOne",sx:{p:3,m:1,alignItems:"flex-start",cursor:"auto"},startIcon:r&&Object(te.jsx)(K.a,{sx:{fontSize:"2rem !important"},children:"task_alt"}),children:Object(te.jsxs)(G.a,{display:"flex",flexDirection:"column",flex:1,alignItems:"center",children:[Object(te.jsx)(X.a,{children:t}),Object(te.jsxs)(G.a,{sx:{position:"relative",display:"inline-flex",margin:2},children:[Object(te.jsx)(le.a,{variant:"determinate",value:n/a*100}),Object(te.jsx)(G.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(te.jsx)(X.a,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(n/a*100),"%")})})]}),Object(te.jsxs)(X.a,{children:[n," out of ",a," votes"]})]})})},be=function(e){var t=e.id,n=Object(p.useDispatch)(),a=Object(d.g)(),r=Object(d.i)();r.id&&(t=r.id);var o=Object(p.useSelector)((function(e){return e.app.authedUser})),c=Object(p.useSelector)((function(e){return e.questions[t]})),s=Object(p.useSelector)((function(e){return e.users[null===c||void 0===c?void 0:c.author]}));if(!c)return Object(te.jsx)(pe,{});var i=null;o&&(i=c.optionOne.votes.includes(o.username)?"optionOne":c.optionTwo.votes.includes(o.username)?"optionTwo":null);var u=function(){var e=Object(m.a)(f.a.mark((function e(r){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!o){e.next=8;break}return s=r.currentTarget.value,e.next=5,n(_.questions.answerQuestionAsync({question:c,answer:s,username:o.username}));case 5:a.push("/questions/".concat(t)),e.next=10;break;case 8:n(_.app.announce("Please login to vote!")),a.push("/login");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsx)(l.b,{className:"question",to:"/questions/".concat(t),style:{cursor:r.id?"auto":"pointer"},children:Object(te.jsxs)(oe.a,{sx:{m:2},variant:"outlined",children:[Object(te.jsx)(se.a,{avatar:Object(te.jsx)($.a,{src:s.avatarURL,alt:"Avatar of ".concat(s.name)}),title:s.name,subheader:re(c.timestamp)}),Object(te.jsx)(ce.a,{children:Object(te.jsx)(X.a,{variant:"h5",textAlign:"center",children:"Would You Rather"})}),Object(te.jsx)(ie.a,{in:null!==i,timeout:"auto",unmountOnExit:!0,children:i&&Object(te.jsx)(ce.a,{children:Object(te.jsxs)(G.a,{sx:{display:"flex",justifyContent:"space-around"},children:[Object(te.jsx)(je,{text:c.optionOne.text,votes:c.optionOne.votes.length,totalVotes:c.optionOne.votes.length+c.optionTwo.votes.length,active:"optionOne"===i}),Object(te.jsx)(je,{text:c.optionTwo.text,votes:c.optionTwo.votes.length,totalVotes:c.optionOne.votes.length+c.optionTwo.votes.length,active:"optionTwo"===i})]})})}),!i&&Object(te.jsxs)(ue.a,{children:[Object(te.jsx)(ee.a,{fullWidth:!0,variant:"outlined",value:"optionOne",sx:{height:"5rem"},onClick:u,children:c.optionOne.text}),Object(te.jsx)(ee.a,{fullWidth:!0,variant:"outlined",value:"optionTwo",sx:{height:"5rem"},onClick:u,children:c.optionTwo.text})]})]})})},he=n(215),Oe=n(219),fe=n(235),me=n(234);var xe=function(){var e=Object(p.useSelector)((function(e){return Object.keys(e.questions).sort((function(t,n){return e.questions[n].timestamp-e.questions[t].timestamp}))})),t=Object(p.useSelector)((function(e){return e.app.authedUser})),n=Object(p.useSelector)((function(e){return e.users})),a=e,r=[];t&&(r=Object.keys(n[t.username].answers),a=a.filter((function(e){return!r.includes(e)})));var o=Object(c.useState)(t&&e.length>0?"2":"1"),s=Object(H.a)(o,2),i=s[0],u=s[1];return Object(c.useEffect)((function(){t&&e.length>0?u("2"):u("1")}),[t]),Object(te.jsxs)(he.a,{value:i,children:[Object(te.jsx)(G.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(te.jsxs)(Oe.a,{centered:!0,onChange:function(e,t){u(t)},children:[Object(te.jsx)(me.a,{label:"All Questions",value:"1"}),t&&e.length>0&&Object(te.jsx)(me.a,{label:"Unanswered Questions",value:"2"}),t&&e.length>0&&Object(te.jsx)(me.a,{label:"Answered Questions",value:"3"})]})}),Object(te.jsxs)(fe.a,{value:"1",sx:{p:0},children:[e.map((function(e){return Object(te.jsx)(be,{id:e},e)})),0===e.length&&Object(te.jsx)(X.a,{component:"h3",align:"center",sx:{p:3},children:"There's NO Questions Yet!"})]}),t&&e.length>0&&Object(te.jsxs)(fe.a,{value:"2",sx:{p:0},children:[a.map((function(e){return Object(te.jsx)(be,{id:e},e)})),0===a.length&&Object(te.jsx)(X.a,{component:"h3",align:"center",sx:{p:3},children:"You Answered All Questions!"})]}),t&&e.length>0&&Object(te.jsxs)(fe.a,{value:"3",sx:{p:0},children:[r.map((function(e){return Object(te.jsx)(be,{id:e},e)})),0===r.length&&Object(te.jsx)(X.a,{component:"h3",align:"center",sx:{p:3},children:"NO Answers?!"})]})]})},ve=n(236);var ge=function(){var e=Object(p.useSelector)((function(e){return e.app.authedUser})),t=Object(p.useSelector)((function(e){return e.users})),n=Object(p.useDispatch)();if(Object(c.useEffect)((function(){e||n(_.app.announce("Please login to view leaderboard!"))}),[e,n]),!e)return Object(te.jsx)(d.a,{to:"/login"});var a=Object.keys(t).sort((function(e,n){return t[n].questions.length+Object.keys(t[n].answers).length-(t[e].questions.length+Object.keys(t[e].answers).length)}));return Object(te.jsx)(te.Fragment,{children:a.map((function(e){return Object(te.jsxs)(oe.a,{variant:"outlined",sx:{display:"flex",m:2,height:128},children:[Object(te.jsx)(ve.a,{component:"img",sx:{width:128},image:t[e].avatarURL,alt:"Avatar of ".concat(t[e].name)}),Object(te.jsx)(G.a,{sx:{display:"flex",flexDirection:"column",flexGrow:1},children:Object(te.jsxs)(ce.a,{sx:{flex:"1 0 auto",p:"1rem !important"},children:[Object(te.jsx)(X.a,{component:"div",variant:"subtitle2",sx:{pb:1},children:t[e].name}),Object(te.jsxs)(X.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Asked: ",t[e].questions.length]}),Object(te.jsxs)(X.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Answered: ",Object.keys(t[e].answers).length]})]})}),Object(te.jsxs)(G.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",sx:{p:2,m:2,borderRadius:3,backgroundColor:"ButtonFace"},children:[Object(te.jsx)(X.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Score:"}),Object(te.jsx)(X.a,{variant:"h4",color:"text.primary",component:"h3",children:t[e].questions.length+Object.keys(t[e].answers).length})]})]},t[e].id)}))})},we=n(237),ye=n(226),ke=n(238),Ae=n(239),qe=function(){var e=Object(p.useSelector)((function(e){return e.app.authedUser})),t=Object(p.useDispatch)(),n=Object(d.h)();return Object(te.jsxs)(s.a.Fragment,{children:[Object(te.jsxs)(we.a,{sx:{borderBottom:1,borderColor:"divider"},children:[Object(te.jsx)(X.a,{component:l.c,to:"/",variant:"h5",color:"inherit",noWrap:!0,sx:{flex:1},children:"Would You Rather"}),e?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(X.a,{component:"span",variant:"subtitle2",color:"inherit",noWrap:!0,sx:{px:1},children:["Welcome, ",e.name]}),Object(te.jsx)(ee.a,{onClick:function(){A=null,window.localStorage.removeItem("authedUser"),t(_.app.setAuthedUser(null)),t(_.app.announce("Logged out!"))},children:"Logout"})]}):Object(te.jsx)(ee.a,{component:l.c,to:"/login",variant:"outlined",size:"small",children:"Login"})]}),Object(te.jsx)(ye.a,{sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:3},elevation:3,children:Object(te.jsxs)(ke.a,{showLabels:!0,value:n.pathname,children:[Object(te.jsx)(Ae.a,{value:"/",component:l.c,to:"/",label:"Home",icon:Object(te.jsx)(K.a,{children:"dashboard"})}),Object(te.jsx)(Ae.a,{value:"/add",component:l.c,to:"/add",label:"Add",icon:Object(te.jsx)(K.a,{children:"add"})}),Object(te.jsx)(Ae.a,{value:"/leaderboard",component:l.c,to:"/leaderboard",label:"Leaderboard",icon:Object(te.jsx)(K.a,{children:"leaderboard"})})]})})]})},Se=function(){var e=Object(p.useDispatch)(),t=Object(p.useSelector)((function(e){return e.app.authedUser})),n=Object(d.g)(),a=Object(c.useState)({optionOne:"",optionTwo:""}),r=Object(H.a)(a,2),o=r[0],s=r[1],i=function(e){var t=e.target,n=t.name,a=t.value;s(Object(h.a)(Object(h.a)({},o),{},Object(V.a)({},n,a)))},u=function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e(_.questions.addQuestionAsync(o));case 3:s({optionOne:"",optionTwo:""}),n.push("/");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){t||e(_.app.announce("Please login to add questions!"))}),[t,e]),t?Object(te.jsx)(M.a,{component:"main",maxWidth:"xs",children:Object(te.jsxs)(G.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(te.jsx)($.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(te.jsx)(K.a,{children:"alt_route"})}),Object(te.jsx)(X.a,{component:"h1",variant:"h5",children:"Would You Rather"}),Object(te.jsxs)(G.a,{component:"form",onSubmit:u,noValidate:!0,sx:{mt:1},children:[Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,id:"optionOne",label:"First Option",name:"optionOne",autoComplete:"optionOne",autoFocus:!0,onChange:i}),Object(te.jsx)(Z.a,{size:"small",margin:"dense",required:!0,fullWidth:!0,name:"optionTwo",label:"Second Option",id:"optionTwo",autoComplete:"optionTwo",onChange:i}),Object(te.jsx)(ee.a,{type:"submit",disabled:""===o.optionOne||""===o.optionTwo,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Submit"})]})]})}):Object(te.jsx)(d.a,{to:"/login"})},Ce=n(220);var We=function(){var e=Object(p.useSelector)((function(e){return e.app.announcement})),t=Object(p.useDispatch)();return Object(te.jsx)(Ce.a,{open:null!==e,autoHideDuration:3e3,onClose:function(){return t(_.app.clearAnnouncement())},message:e})},Le=n(216),Ue=n.p+"static/media/logo.b2e5a01e.svg",Te=function(){return Object(te.jsxs)("div",{style:{textAlign:"center",marginTop:"2rem"},children:[Object(te.jsx)("img",{src:Ue,width:256,alt:"Resource Not Found"}),Object(te.jsx)("h3",{children:"Would You Rather"})]})},De=function(){var e=Object(p.useDispatch)(),t=Object(p.useSelector)((function(e){return e.app.loading}));return Object(c.useEffect)((function(){e(_.app.loadAsync())}),[e]),Object(te.jsxs)(l.a,{children:[Object(te.jsx)(b.a,{}),Object(te.jsx)(We,{}),Object(te.jsx)(qe,{}),t?Object(te.jsx)(Te,{}):Object(te.jsx)(Le.a,{sx:{pb:7},children:Object(te.jsxs)(d.d,{children:[Object(te.jsx)(d.b,{path:"/",exact:!0,component:xe}),Object(te.jsx)(d.b,{path:"/register",component:ne}),Object(te.jsx)(d.b,{path:"/login",component:ae}),Object(te.jsx)(d.b,{path:"/questions/:id",component:be}),Object(te.jsx)(d.b,{path:"/add",component:Se}),Object(te.jsx)(d.b,{path:"/leaderboard",component:ge}),Object(te.jsx)(d.b,{path:"*",component:pe})]})})]})},Re=Object(x.a)({reducer:J});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(te.jsx)(s.a.StrictMode,{children:Object(te.jsx)(p.Provider,{store:Re,children:Object(te.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[160,1,2]]]);
//# sourceMappingURL=main.c7e1fcd0.chunk.js.map