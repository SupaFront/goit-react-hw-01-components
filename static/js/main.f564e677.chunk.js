(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={avatar:"Profile_avatar__aV4u5",profile:"Profile_profile__3dzvr",username:"Profile_username__IDPoA",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",label:"Profile_label__3Zjy8"}},function(e,a,t){e.exports={statList:"Statistics_statList__3BR2u",statistics:"Statistics_statistics__2QFok",item:"Statistics_item__1vE2T",label:"Statistics_label__227YU",percentage:"Statistics_percentage__3inQt",title:"Statistics_title__3PVIg"}},function(e,a,t){e.exports={item:"FriendListItem_item__2MUc9",status:"FriendListItem_status__JtNEj",online:"FriendListItem_online__hktby",offline:"FriendListItem_offline__31EO7"}},,,,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e,a,t){e.exports={list:"Friends_list__1oigC"}},function(e,a,t){e.exports={table:"Transactions_table__3FRnW"}},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(4),n=t.n(c),s=t(6),i=t.n(s),r=(t(17),{user:t(7),friends:t(8),transactions:t(9),data:t(10)}),l=t(1),d=t.n(l),o=t(0);var b=function(e){var a=e.username,t=e.tag,c=e.location,n=e.avatar,s=e.stats;return Object(o.jsxs)("div",{className:d.a.profile,children:[Object(o.jsxs)("div",{className:d.a.description,children:[Object(o.jsx)("img",{src:n,alt:"User avatar",className:d.a.avatar}),Object(o.jsx)("p",{className:d.a.username,children:a}),Object(o.jsxs)("p",{className:d.a.tag,children:["@",t]}),Object(o.jsx)("p",{className:d.a.location,children:c})]}),Object(o.jsxs)("ul",{className:d.a.stats,children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Followers"}),Object(o.jsx)("span",{className:d.a.quantity,children:s.followers})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Views"}),Object(o.jsx)("span",{className:d.a.quantity,children:s.views})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:d.a.label,children:"Likes"}),Object(o.jsx)("span",{className:d.a.quantity,children:s.likes})]})]})]})},u=t(2),p=t.n(u);var m=function(e){var a=e.title,t=e.stats.map((function(e){return Object(o.jsxs)("li",{className:p.a.item,children:[Object(o.jsx)("span",{className:p.a.label,children:e.label}),Object(o.jsxs)("span",{className:p.a.percentage,children:[e.percentage,"%"]})]},e.id)}));return Object(o.jsxs)("section",{className:p.a.statistics,children:[a&&Object(o.jsx)("h2",{className:p.a.title,children:a}),Object(o.jsx)("ul",{className:p.a.statList,children:t})]})},j=t(11),f=t.n(j),O=t(3),h=t.n(O);var x=function(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(o.jsxs)("li",{className:h.a.item,children:[Object(o.jsx)("span",{className:"".concat(h.a.status," ").concat(c?h.a.online:h.a.offline)}),Object(o.jsx)("img",{className:h.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(o.jsx)("p",{className:h.a.name,children:t})]})};var y=function(e){var a=e.friends;return Object(o.jsx)("ul",{className:f.a.list,children:a.map((function(e){var a=e.avatar,t=e.name,c=e.isOnline,n=e.id;return Object(o.jsx)(x,{name:t,avatar:a,isOnline:c},n)}))})},_=t(12),v=t.n(_);var g=function(e){var a=e.items.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.type}),Object(o.jsx)("td",{children:e.amount}),Object(o.jsx)("td",{children:e.currency})]},e.id)}));return Object(o.jsxs)("table",{className:v.a.table,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)("tbody",{children:a})]})},N=(t(19),t(20),r.user),w=r.data,P=r.friends,U=r.transactions;var L=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{username:N.username,tag:N.tag,location:N.location,avatar:N.avatar,stats:N.stats}),Object(o.jsx)(m,{title:"Upload stats",stats:w}),Object(o.jsx)(y,{friends:P}),Object(o.jsx)(g,{items:U})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f564e677.chunk.js.map