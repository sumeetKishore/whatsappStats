(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(40),o=t.n(r);t(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(41),s=t(42),i=t(46),u=t(45),m=(t(53),function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__content"},"Whatsapp ",l.a.createElement("span",null,"Stats")))}),d=(t(54),function(e){return l.a.createElement("header",{className:"toolbar"},l.a.createElement("div",{className:"toolbar__logo"},l.a.createElement("a",{href:"/"},"WhatsApp ",l.a.createElement("br",null),l.a.createElement("span",null,"Stats"))),l.a.createElement("nav",{className:"toolbar__navigation"},l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"about us"))))}),f=(t(55),t(56),t(43)),h=function(e){var a={labels:[],datasets:[{label:"",backgroundColor:[],hoverBackgroundColor:[],data:[]}]};return e.forEach((function(e){a.labels.push(e.name),a.datasets[0].backgroundColor.push(e.color),a.datasets[0].hoverBackgroundColor.push(e.color),a.datasets[0].data.push(e.messageCount)})),a},p=function(e){return l.a.createElement("div",{className:"donut"},l.a.createElement(f.a,{data:h(e.chartData),options:{title:{display:!0,text:"Text messages sent on  "+e.title,fontSize:20},legend:{display:!0,position:"bottom"}}}))},E=(t(152),function(e){return l.a.createElement("div",{className:"statsTable"},l.a.createElement("table",{className:"stats-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null," Message Count"))),l.a.createElement("tbody",null,e.tableData.map((function(e,a){return l.a.createElement("tr",{id:"addr0",key:a},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.messageCount))})))))}),v=(t(153),function(e){function a(){return"#"+Math.floor(16777215*Math.random()).toString(16)}var t=[],n=[],l={},r=e.split("\n");for(var o in r.forEach((function(e,a){if(-1===e.indexOf("security code changed")&&(-1!==e.indexOf("AM]")||-1!==e.indexOf("PM]"))){var t=e.split("]")[1].split(":")[0].trim();t=t.replace(" ","_"),l[t]?l[t]+=1:l[t]=1}})),l)if(o){for(var c=a();-1!==t.indexOf(c);)c=a();n.push({name:o,messageCount:l[o],color:c})}return n}),b=function(e){var a,t=function(t){var n=a.result;e.onChangeData(function(e){return v(e)}(n))};return l.a.createElement("div",{className:"upload-whatsapp-chat"},l.a.createElement("label",{className:"custom-file-input"},l.a.createElement("input",{type:"file",id:"file",className:"file-input",accept:".txt",onChange:function(e){return n=e.target.files[0],(a=new FileReader).onloadend=t,void a.readAsText(n);var n}})))},g=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={data:[]},e}return Object(s.a)(t,[{key:"onChangeData",value:function(e){this.setState({data:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"site-layout"},l.a.createElement(m,null),l.a.createElement(d,null),l.a.createElement("div",{className:"siteLayout__body"},l.a.createElement("div",{className:"flex_body"},l.a.createElement("div",{className:"body_item1"},l.a.createElement("div",{className:"file-reader-placement"},l.a.createElement(b,{onChangeData:this.onChangeData.bind(this)})),l.a.createElement(E,{tableData:this.state.data,title:"ChatGroupName"})),l.a.createElement("div",{className:"body_item2"},l.a.createElement(p,{chartData:this.state.data,title:"ChatGroupName"})))))}}]),t}(l.a.Component);o.a.render(l.a.createElement(g,null),document.getElementById("root"))},47:function(e,a,t){e.exports=t(154)},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.d3d9b3b9.chunk.js.map