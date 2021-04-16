(this["webpackJsonpgfc-app"]=this["webpackJsonpgfc-app"]||[]).push([[0],{70:function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(24),c=r.n(a),s=r(53),o=r(93),l=r(91),d=r(87),h=r(95),p=r(96),u=r(97),f=r(9),j=r(10),m=r(12),b=r(11),g={apiKey:"AIzaSyCAp-t_WKWx0sfpOM5_-5yeC9g-ZcrkWcI",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"13EFowc_DLa9c9D4OeGK2X7bdQFPtVmfQf1EHpUmBM5w"};function y(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Remedesivir!A4:G"}).then((function(t){var r=t.result.values.map((function(e){return{org:e[0],name:e[1],contact:e[2],timings:e[3],status:e[4],remarks:e[5],verified_by:e[6]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Remedesivir Supplier Data.")}))}))}var v=r(92),O=r(88),x=r(2),w=[{property:"org",header:Object(x.jsx)(v.a,{children:"Organization"}),size:"small"},{property:"name",header:Object(x.jsx)(v.a,{children:"Name"})},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"timings",header:Object(x.jsx)(v.a,{children:"Time"}),size:"small"},{property:"status",header:Object(x.jsx)(v.a,{children:"Status"}),size:"small"},{property:"remarks",header:Object(x.jsx)(v.a,{children:"Remarks"})},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],z=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{org:"fetching...",name:"fetching...",contact:"fetching...",timings:"fetching...",status:"fetching...",remarks:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){y(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:w,data:t})}}]),r}(n.a.Component);function C(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Medical Store!A3:G"}).then((function(t){var r=t.result.values.map((function(e){return{storename:e[0],city:e[1],area:e[2],contact:e[3],areacover:e[4],remarks:e[5],verified_by:e[6]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Medical Store Data.")}))}))}var S=[{property:"storename",header:Object(x.jsx)(v.a,{children:"Medical Store"}),size:"small"},{property:"city",header:Object(x.jsx)(v.a,{children:"City"}),size:"small"},{property:"area",header:Object(x.jsx)(v.a,{children:"Area"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"areacover",header:Object(x.jsx)(v.a,{children:"Area Covered"}),size:"small"},{property:"remarks",header:Object(x.jsx)(v.a,{children:"Remarks"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],k=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{storename:"fetching...",city:"fetching...",area:"fetching...",contact:"fetching...",areacover:"fetching...",remarks:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){C(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:S,data:t})}}]),r}(n.a.Component);function D(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Doctor on Call!A3:G"}).then((function(t){var r=t.result.values.map((function(e){return{doctor:e[0],location:e[1],contact:e[2],service:e[3],time:e[4],verified_by:e[6]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Doctor Data.")}))}))}var _=[{property:"doctor",header:Object(x.jsx)(v.a,{children:"Doctor Name"}),size:"small"},{property:"location",header:Object(x.jsx)(v.a,{children:"Location"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"service",header:Object(x.jsx)(v.a,{children:"Services"}),size:"small"},{property:"time",header:Object(x.jsx)(v.a,{children:"Time"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],I=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{doctor:"fetching...",location:"fetching...",contact:"fetching...",service:"fetching...",time:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){D(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:_,data:t})}}]),r}(n.a.Component);function N(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Emergency Number!A3:F"}).then((function(t){var r=t.result.values.map((function(e){return{org:e[0],name:e[1],contact:e[2],status:e[3],verified_by:e[4]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Emergency Contact Data.")}))}))}var A=[{property:"org",header:Object(x.jsx)(v.a,{children:"Organization"}),size:"small"},{property:"name",header:Object(x.jsx)(v.a,{children:"Name"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"status",header:Object(x.jsx)(v.a,{children:"Status"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],L=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{org:"fetching...",name:"fetching...",contact:"fetching...",status:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){N(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:A,data:t})}}]),r}(n.a.Component);function K(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Websites for COVID19!A3:E"}).then((function(t){var r=t.result.values.map((function(e){return{city:e[0],website:e[1],purpose:e[2],details:e[3],verified_by:e[4]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Websites for COVID 19 Data.")}))}))}var J=r(94),E=[{property:"city",header:Object(x.jsx)(v.a,{children:"City"}),size:"small"},{property:"website",header:Object(x.jsx)(v.a,{children:"Website"}),render:function(e){return Object(x.jsx)(J.a,{href:e.website,label:"Tap Here"})}},{property:"purpose",header:Object(x.jsx)(v.a,{children:"Purpose"}),size:"small"},{property:"details",header:Object(x.jsx)(v.a,{children:"Details"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],M=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{city:"fetching...",website:"fetching...",purpose:"fetching...",details:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){K(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:E,data:t})}}]),r}(n.a.Component);function F(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Oxygen!A3:G"}).then((function(t){var r=t.result.values.map((function(e){return{org:e[0],name:e[1],contact:e[2],timings:e[3],status:e[4],remarks:e[5],verified_by:e[6]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Oxygen Data.")}))}))}var P=[{property:"org",header:Object(x.jsx)(v.a,{children:"Organization"}),size:"small"},{property:"name",header:Object(x.jsx)(v.a,{children:"Name"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"timings",header:Object(x.jsx)(v.a,{children:"Timings"}),size:"small"},{property:"status",header:Object(x.jsx)(v.a,{children:"Status"}),size:"small"},{property:"remarks",header:Object(x.jsx)(v.a,{children:"Remarks"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],B=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{org:"fetching...",name:"fetching...",contact:"fetching...",timings:"fetching...",status:"fetching...",remarks:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){F(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:P,data:t})}}]),r}(n.a.Component);function V(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Food For Covid Patients!A3:K"}).then((function(t){var r=t.result.values.map((function(e){return{city:e[0],area:e[1],org:e[2],charges:e[3],ld:e[4],person:e[5],contact:e[6],foodfor:e[7],conditions:e[8],verified_by:e[10]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Food Data.")}))}))}var R=[{property:"city",header:Object(x.jsx)(v.a,{children:"City"}),size:"small"},{property:"area",header:Object(x.jsx)(v.a,{children:"Area Covered"}),size:"small"},{property:"org",header:Object(x.jsx)(v.a,{children:"Organization"}),size:"small"},{property:"charges",header:Object(x.jsx)(v.a,{children:"Charges"}),size:"small"},{property:"ld",header:Object(x.jsx)(v.a,{children:"Lunch/Dinner"}),size:"small"},{property:"person",header:Object(x.jsx)(v.a,{children:"Contact Person"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact Number"}),size:"small"},{property:"foodfor",header:Object(x.jsx)(v.a,{children:"Food For?"}),size:"small"},{property:"conditions",header:Object(x.jsx)(v.a,{children:"Conditions"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],G=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{city:"fetching...",area:"fetching...",org:"fetching...",charges:"fetching...",ld:"fetching...",person:"fetching...",contact:"fetching...",foodfor:"fetching...",conditions:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){V(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:R,data:t})}}]),r}(n.a.Component);function W(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:g.spreadsheetId,range:"Plasma Support!A3:G"}).then((function(t){var r=t.result.values.map((function(e){return{platform:e[0],person:e[1],contact:e[2],remarks:e[3],verified_by:e[5]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Plasma Support Data.")}))}))}var T=[{property:"platform",header:Object(x.jsx)(v.a,{children:"Platform"}),size:"small"},{property:"person",header:Object(x.jsx)(v.a,{children:"Contact Person"}),size:"small"},{property:"contact",header:Object(x.jsx)(v.a,{children:"Contact"}),size:"small"},{property:"remarks",header:Object(x.jsx)(v.a,{children:"Remarks"}),size:"small"},{property:"verified_by",header:Object(x.jsx)(v.a,{children:"Verified By"}),size:"small"}],H=function(e){Object(m.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{platform:"fetching...",person:"fetching...",contact:"fetching...",remarks:"fetching...",verified_by:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:g.apiKey,discoveryDocs:g.discoveryDocs}).then((function(){W(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(O.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:T,data:t})}}]),r}(n.a.Component),Q={global:{font:{family:"Roboto",size:"18px",height:"20px"},tabs:{}}},U=function(e){return Object(x.jsx)(o.a,Object(s.a)({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))};var X=function(){return Object(x.jsx)(l.a,{theme:Q,full:!0,children:Object(x.jsx)(d.a.Consumer,{children:function(){return Object(x.jsxs)(o.a,{fill:!0,children:[Object(x.jsx)(U,{children:Object(x.jsx)(h.a,{level:"3",margin:"none",children:"Gujarat Covid Support"})}),Object(x.jsx)(o.a,{direction:"row",pad:"medium",children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)(u.a,{title:"Remedesivir",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(z,{})})}),Object(x.jsx)(u.a,{title:"Medical Store",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(k,{})})}),Object(x.jsx)(u.a,{title:"Doctor On Call",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(I,{})})}),Object(x.jsx)(u.a,{title:"Emergency Number",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(L,{})})}),Object(x.jsx)(u.a,{title:"Websites",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(M,{})})}),Object(x.jsx)(u.a,{title:"Oxygen",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(B,{})})}),Object(x.jsx)(u.a,{title:"Food For Patients",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(G,{})})}),Object(x.jsx)(u.a,{title:"Plasma Support",children:Object(x.jsx)(o.a,{pad:"medium",children:Object(x.jsx)(H,{})})})]})})]})}})})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,98)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),i(e),n(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(X,{})}),document.getElementById("root")),Z()}},[[70,1,2]]]);
//# sourceMappingURL=main.225c08e7.chunk.js.map