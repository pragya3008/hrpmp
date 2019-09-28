(window["webpackJsonpneural-pmp"]=window["webpackJsonpneural-pmp"]||[]).push([[0],{25:function(e,t,a){e.exports=a(45)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),s=a.n(o),c=(a(30),a(2)),i=a(3),l=a(5),u=a(4),m=a(6),d=(a(31),a(32),a(14)),h=a(10),p=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row ",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",{id:"welcomeText"},"Performance Management Authentication App"),r.a.createElement("a",{href:"/Employee",className:"button"},"Employee"),r.a.createElement("a",{href:"/admin",className:"button success"},"Administrator")))}}]),t}(n.Component)),f=a(7);a(34);function b(e,t){return new Promise((function(a,n){fetch("http://localhost/react-php/api/index.php?tp="+e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json().then((function(e){a(e)}))})).catch((function(e){n(e)}))}))}var g=a(22),v=(a(38),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={data:[],userFeed:"",redirectToReferrer:!1,name:""},a.getUserFeed=a.getUserFeed.bind(Object(f.a)(a)),a.feedUpdate=a.feedUpdate.bind(Object(f.a)(a)),a.onChange=a.onChange.bind(Object(f.a)(a)),a.deleteFeed=a.deleteFeed.bind(Object(f.a)(a)),a.editFeed=a.editFeed.bind(Object(f.a)(a)),a.deleteFeedAction=a.deleteFeedAction.bind(Object(f.a)(a)),a.logout=a.logout.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){sessionStorage.getItem("userData")?this.getUserFeed():this.setState({redirectToReferrer:!0})}},{key:"feedUpdate",value:function(e){var t=this;e.preventDefault();var a={user_id:JSON.parse(sessionStorage.getItem("userData")).userData.user_id,feed:this.state.userFeed};this.state.userFeed&&b("feedUpdate",a).then((function(e){var a=e;t.setState({data:a.feedData})}))}},{key:"deleteFeed",value:function(e){var t=this;Object(g.confirmAlert)({title:"Delete Feed",message:"Are you sure to delete this feed.",buttons:[{label:"Yes",onClick:function(){return t.deleteFeedAction(e)}},{label:"No"}]})}},{key:"deleteFeedAction",value:function(e){var t=this,a=e.target.getAttribute("value"),n=document.getElementById("del").getAttribute("data"),r={user_id:JSON.parse(sessionStorage.getItem("userData")).userData.user_id,feed_id:n};r&&b("feedDelete",r).then((function(e){t.state.data.splice(a,1),t.setState({data:t.state.data}),e.success?alert(e.success):alert(e.error)}))}},{key:"getUserFeed",value:function(){var e=this,t=JSON.parse(sessionStorage.getItem("userData"));this.setState({name:t.userData.name});var a={user_id:t.userData.user_id};t&&b("feed",a).then((function(t){var a=t;a.feedData&&(e.setState({data:a.feedData}),console.log(e.state))}))}},{key:"onChange",value:function(e){this.setState({userFeed:e.target.value})}},{key:"logout",value:function(){sessionStorage.setItem("userData",""),sessionStorage.clear(),this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){return this.state.redirectToReferrer?r.a.createElement(h.a,{to:"/login"}):r.a.createElement("div",{className:"row",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("button",{onClick:this.logout,className:"logout"},"Logout"),r.a.createElement("form",{onSubmit:this.feedUpdate,method:"post"},r.a.createElement("input",{name:"userFeed",onChange:this.onChange,value:this.state.userFeed,type:"text",placeholder:"Write your feed here..."}),r.a.createElement("input",{type:"submit",value:"Post",className:"button",onClick:this.feedUpdate}))))}}]),t}(n.Component)),E=a(15),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={username:"",password:"",redirectToReferrer:!1},e.employee=e.employee.bind(Object(f.a)(e)),e.onChange=e.onChange.bind(Object(f.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"employee",value:function(){var e=this;this.state.username&&this.state.password&&b("login",this.state).then((function(t){var a=t;a.userData?(sessionStorage.setItem("userData",JSON.stringify(a)),e.setState({redirectToReferrer:!0})):alert(t.error)}))}},{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirectToReferrer?r.a.createElement(h.a,{to:"/home"}):sessionStorage.getItem("userData")?r.a.createElement(h.a,{to:"/home"}):r.a.createElement("div",{className:"row",id:"Body"},r.a.createElement("div",{className:"medium-5 columns left"},r.a.createElement("h4",null,"Employee Login"),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:this.onChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),r.a.createElement("input",{type:"submit",className:"button",value:"Login",onClick:this.login}),r.a.createElement("a",{href:"/forgotpassword"},"Forgot Password")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:"",email:"",name:"",redirectToReferrer:!1},a.forgotpassword=a.forgotpassword.bind(Object(f.a)(a)),a.onChange=a.onChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"forgotpassword",value:function(){var e=this;this.state.username&&this.state.password&&this.state.email&&this.state.name&&b("signup",this.state).then((function(t){var a=t;a.userData?(sessionStorage.setItem("userData",JSON.stringify(a)),e.setState({redirectToReferrer:!0})):alert(t.error)}))}},{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return this.state.redirectToReferrer||sessionStorage.getItem("userData")?r.a.createElement(h.a,{to:"/home"}):r.a.createElement("div",{className:"row ",id:"sBody"},r.a.createElement("div",{className:"medium-5 columns left"},r.a.createElement("h4",null,"Forgot Password"),r.a.createElement("input",{type:"text",name:"email",placeholder:"Email",onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",onChange:this.onChange}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),r.a.createElement("input",{type:"submit",className:"button",value:"Sign Up",onClick:this.signup}),r.a.createElement("a",{href:"/employee"},"Login")))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row small-up-2 medium-up-3 large-up-4",id:"Body"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("h2",null,"404 Page")))}}]),t}(n.Component),w=function(){return r.a.createElement(d.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:p}),r.a.createElement(h.b,{path:"/home",component:v}),r.a.createElement(h.b,{path:"/employee",component:O}),r.a.createElement(h.b,{path:"/forgotpassword",component:j}),r.a.createElement(h.b,{path:"*",component:y})))},C=(a(44),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"callout headcolor",id:"Header"},r.a.createElement("div",{className:"row column"},r.a.createElement("a",{href:"/"},r.a.createElement("h1",{id:"tit"},this.props.name))))}}]),t}(n.Component)),N=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row",id:"footer"},r.a.createElement("div",{className:"medium-12 columns"},r.a.createElement("p",null,"Copyright 2019 , ",r.a.createElement("a",{href:"https://neuralinfo.org"}," Neural"))))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"showSidebar",value:function(){console.log("HI")}},{key:"render",value:function(){return r.a.createElement("div",{className:"title-bar hide-for-large"},r.a.createElement("div",{className:"title-bar-left"},r.a.createElement("button",{className:"menu-icon",type:"button","data-open":"my-info",onClick:this.showSidebar}),r.a.createElement("span",{className:"title-bar-title"},this.props.name," ")))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={appName:"HrPMP",home:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"off-canvas-wrapper"},r.a.createElement("div",{className:"off-canvas-wrapper-inner","data-off-canvas-wrapper":!0},r.a.createElement("div",{className:"off-canvas-content","data-off-canvas-content":!0},r.a.createElement(S,{name:this.state.appName}),r.a.createElement(C,{name:this.state.appName}),r.a.createElement(w,{name:this.state.appName}),r.a.createElement("hr",null),r.a.createElement(N,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.33d14259.chunk.js.map