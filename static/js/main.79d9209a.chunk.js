(this["webpackJsonpgfc-app"]=this["webpackJsonpgfc-app"]||[]).push([[0],{69:function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(24),c=r.n(a),o=r(92),s=r(87),d=r(71),l=r(88),h=r(93),p=r(94),j=r(95),u=r(96),f=r(7),g=r(8),b=r(10),m=r(9),y={apiKey:"AIzaSyCAp-t_WKWx0sfpOM5_-5yeC9g-ZcrkWcI",spreadsheetId:"1ZyrYsowjk6PdC9N5yKBxMslI7FypoeIqDvlAYrqprL8",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]};function O(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Remedesivir!A5:H"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],org:e[2],contact:e[3],status:e[4],remarks:e[5],verified_on:e[7]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Remedesivir Supplier Data.")}))}))}var v=r(89),x=r(2),w=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"}),size:"small"},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"}),size:"small"},{property:"status",header:Object(x.jsx)(h.a,{children:"Status"}),size:"small"},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"})},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"})}],C=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",org:"fetching...",contact:"fetching...",status:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){O(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsxs)(d.a,{children:[Object(x.jsx)(h.a,{children:"NOTE 1 - As per Govt of Gujarat guideline, the Remedesivir can now only be availed through govt hospitals by private hospitals where patient is admitted."}),Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{children:" NOTE 2 - For Ahmedabad : Checklist for getting Remdesivir from SVP Hospital in Ahmedabad."}),Object(x.jsx)(h.a,{children:"1) Patient should be admitted on oxygen bed in Hospital with in AMC limit. \u2705"}),Object(x.jsx)(h.a,{children:"2) Doc1 - Hospital should have Valid C Form issued from AMC \u2705"}),Object(x.jsx)(h.a,{children:"3) Doc2 - RTPCR report of Patient should be recent, not older than 15 days. \u2705"}),Object(x.jsx)(h.a,{children:"4) Doc3 - Doctors should fill the format given on last page \u2705"}),Object(x.jsx)(h.a,{children:"5) Doc4 - Hospital staff icard who will come for collection \u2705"}),Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{children:"Send \ud83d\udce7 email to remdesivir.tossilamc@gmail.com with above mentioned 4 documents from hospital ID."}),Object(x.jsx)(h.a,{children:"If any documents are missing, application can be rejected."}),Object(x.jsx)(h.a,{children:"Successful application will get appointment for collecting."}),Object(x.jsx)("br",{}),Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:w,data:t})]})}}]),r}(n.a.Component);function k(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Medical Store!A3:H"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],area:e[2],name:e[3],contact:e[4],remarks:e[5],verified_on:e[7]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Medical Store Data.")}))}))}var S=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"area",header:Object(x.jsx)(h.a,{children:"Area"})},{property:"name",header:Object(x.jsx)(h.a,{children:"Name"}),size:"small"},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"}),size:"small"},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"}),size:"small"}],D=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",area:"fetching...",name:"fetching...",contact:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){k(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:S,data:t})}}]),r}(n.a.Component);function z(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Doctor on Call!A3:H"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],name:e[2],contact:e[3],service:e[4],time:e[5],verified_on:e[7]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Doctor Data.")}))}))}var A=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"name",header:Object(x.jsx)(h.a,{children:"Doctor"})},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"}),size:"small"},{property:"service",header:Object(x.jsx)(h.a,{children:"Service"}),size:"small"},{property:"time",header:Object(x.jsx)(h.a,{children:"Time"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"}),size:"small"}],I=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",name:"fetching...",contact:"fetching...",service:"fetching...",time:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){z(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:A,data:t})}}]),r}(n.a.Component);function _(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Emergency Number!A3:I"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],org:e[2],contact:e[3],service:e[4],status:e[5],remarks:e[6],verified_on:e[8]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Emergency Contact Data.")}))}))}var N=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"}),size:"small"},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"}),size:"small"},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"}),size:"small"},{property:"service",header:Object(x.jsx)(h.a,{children:"Service"}),size:"small"},{property:"status",header:Object(x.jsx)(h.a,{children:"Status"}),size:"small"},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"}),size:"small"}],L=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",org:"fetching...",contact:"fetching...",service:"fetching...",status:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){_(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:N,data:t})}}]),r}(n.a.Component);function J(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Websites for COVID19!A3:G"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],website:e[2],purpose:e[3],details:e[4],verified_on:e[6]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Websites for COVID 19 Data.")}))}))}var K=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"website",header:Object(x.jsx)(h.a,{children:"Website"}),render:function(e){return Object(x.jsx)(p.a,{href:e.website,label:"Tap Here"})}},{property:"purpose",header:Object(x.jsx)(h.a,{children:"Purpose"})},{property:"details",header:Object(x.jsx)(h.a,{children:"Details"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"}),size:"small"}],P=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",website:"fetching...",purpose:"fetching...",details:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){J(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:K,data:t})}}]),r}(n.a.Component);function R(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Oxygen-and-Bed!A3:K"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],org:e[2],name:e[3],contact:e[4],type:e[5],timings:e[6],status:e[7],remarks:e[8],verified_on:e[10]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Oxygen Data.")}))}))}var M=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"})},{property:"name",header:Object(x.jsx)(h.a,{children:"Name"})},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"})},{property:"type",header:Object(x.jsx)(h.a,{children:"Type"})},{property:"timings",header:Object(x.jsx)(h.a,{children:"Timings"})},{property:"status",header:Object(x.jsx)(h.a,{children:"Status"})},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"})},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"})}],E=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",org:"fetching...",name:"fetching...",contact:"fetching...",type:"fetching...",timings:"fetching...",status:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){R(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:M,data:t})}}]),r}(n.a.Component);function F(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Food For Covid Patients!A3:L"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],area:e[2],org:e[3],charges:e[4],ld:e[5],person:e[6],contact:e[7],foodfor:e[8],conditions:e[9],verified_on:e[11]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Food Data.")}))}))}var V=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"area",header:Object(x.jsx)(h.a,{children:"Area Covered"})},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"})},{property:"charges",header:Object(x.jsx)(h.a,{children:"Charges"})},{property:"ld",header:Object(x.jsx)(h.a,{children:"Lunch/Dinner"})},{property:"person",header:Object(x.jsx)(h.a,{children:"Contact Person"}),size:"small"},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact Number"})},{property:"foodfor",header:Object(x.jsx)(h.a,{children:"Food For?"}),size:"small"},{property:"conditions",header:Object(x.jsx)(h.a,{children:"Conditions"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"})}],T=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",area:"fetching...",org:"fetching...",charges:"fetching...",ld:"fetching...",person:"fetching...",contact:"fetching...",foodfor:"fetching...",conditions:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){F(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:V,data:t})}}]),r}(n.a.Component);function H(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Plasma Support!A3:H"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],platform:e[2],person:e[3],contact:e[4],remarks:e[5],verified_on:e[7]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Plasma Support Data.")}))}))}var W=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"platform",header:Object(x.jsx)(h.a,{children:"Platform"}),size:"small"},{property:"person",header:Object(x.jsx)(h.a,{children:"Contact Person"}),size:"small"},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"}),size:"small"},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"}),size:"small"}],B=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",platform:"fetching...",person:"fetching...",contact:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){H(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:W,data:t})}}]),r}(n.a.Component);function G(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"RT-PCR!A3:J"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],org:e[2],person:e[3],contact:e[4],time:e[5],status:e[6],remarks:e[7],verified_on:e[9]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching RT-PCR Data.")}))}))}var Y=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"}),size:"small"},{property:"person",header:Object(x.jsx)(h.a,{children:"Person"})},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"})},{property:"time",header:Object(x.jsx)(h.a,{children:"Time"})},{property:"status",header:Object(x.jsx)(h.a,{children:"Status"})},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"})}],q=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",org:"fetching...",person:"fetching...",contact:"fetching...",time:"fetching...",status:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){G(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:Y,data:t})}}]),r}(n.a.Component);function Z(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:y.spreadsheetId,range:"Ambulance!A3:J"}).then((function(t){var r=t.result.values.map((function(e){return{id:e[0],city:e[1],org:e[2],person:e[3],contact:e[4],time:e[5],status:e[6],remarks:e[7],verified_on:e[9]}}))||[];e({remi:r})}),(function(t){e(!1,t.result.error,"Error in fetching Ambulance Data.")}))}))}var X=[{property:"id",header:Object(x.jsx)(h.a,{children:"#"})},{property:"city",header:Object(x.jsx)(h.a,{children:"City"})},{property:"org",header:Object(x.jsx)(h.a,{children:"Organization"}),size:"small"},{property:"person",header:Object(x.jsx)(h.a,{children:"Person"})},{property:"contact",header:Object(x.jsx)(h.a,{children:"Contact"})},{property:"time",header:Object(x.jsx)(h.a,{children:"Time"})},{property:"status",header:Object(x.jsx)(h.a,{children:"Status"})},{property:"remarks",header:Object(x.jsx)(h.a,{children:"Remarks"}),size:"small"},{property:"verified_on",header:Object(x.jsx)(h.a,{children:"Verified On"})}],$=function(e){Object(b.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(f.a)(this,r);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={remi:[{id:"fetching...",city:"fetching...",org:"fetching...",person:"fetching...",contact:"fetching...",time:"fetching...",status:"fetching...",remarks:"fetching...",verified_on:"fetching..."}],error:null},e.initClient=function(){window.gapi.client.init({apiKey:y.apiKey,discoveryDocs:y.discoveryDocs}).then((function(){Z(e.onLoad)}))},e.onLoad=function(t,r){if(t){var i=JSON.parse(JSON.stringify(t.remi));e.setState({remi:i})}else console.log(r),e.setState({error:r})},e}return Object(g.a)(r,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){var e=this.state,t=e.remi;return e.error?Object(x.jsx)("div",{children:this.state.error}):Object(x.jsx)(v.a,{border:!0,background:{header:"accent-1",body:["light","light-3"]},margin:"small",resizeable:!0,sortable:!0,columns:X,data:t})}}]),r}(n.a.Component),Q={global:{font:{family:"Roboto"}}};var U=function(){return Object(x.jsx)(o.a,{theme:Q,full:!0,children:Object(x.jsx)(s.a.Consumer,{children:function(){return Object(x.jsxs)(d.a,{fill:!0,children:[Object(x.jsxs)(l.a,{background:"brand",children:[Object(x.jsx)(h.a,{size:"xlarge",margin:"small",children:"#GujaratCovidSupport"}),Object(x.jsx)(p.a,{margin:"small",weight:"normal",href:"https://forms.gle/YXv43foVgYFHsD17A",label:"Have a feedback or want to volunteer?"})]}),Object(x.jsx)(d.a,{direction:"row",pad:"medium",children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(u.a,{title:"Remedesivir",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(C,{})})}),Object(x.jsx)(u.a,{title:"Plasma Support",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(B,{})})}),Object(x.jsx)(u.a,{title:"RT-PCR",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(q,{})})}),Object(x.jsx)(u.a,{title:"Ambulance",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)($,{})})}),Object(x.jsx)(u.a,{title:"Oxygen",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(E,{})})}),Object(x.jsx)(u.a,{title:"Doctor On Call",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(I,{})})}),Object(x.jsx)(u.a,{title:"Emergency Number",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(L,{})})}),Object(x.jsx)(u.a,{title:"Medical Store",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(D,{})})}),Object(x.jsx)(u.a,{title:"Websites",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(P,{})})}),Object(x.jsx)(u.a,{title:"Food For Patients",children:Object(x.jsx)(d.a,{pad:"medium",children:Object(x.jsx)(T,{})})})]})})]})}})})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,97)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),i(e),n(e),a(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),ee()}},[[69,1,2]]]);
//# sourceMappingURL=main.79d9209a.chunk.js.map