"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[44637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),i=n(67392),u=n(7094),s=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,b=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,E=(0,a.useState)(y),P=E[0],T=E[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=w[b];null!=I&&I!==P&&h.some((function(e){return e.value===I}))&&T(I)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),r=h[n].value;r!==P&&(x(t),T(r),null!=b&&O(b,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:_,onClick:_},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},28201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=(n(65488),n(85162),n(32408),["components"]),i={id:"listitem_buttongroup",title:"ListItem.ButtonGroup"},u=void 0,s={unversionedId:"components/listitem_buttongroup",id:"version-4.0.0-rc.2/components/listitem_buttongroup",title:"ListItem.ButtonGroup",description:"This allows adding ButtonGroup to the ListItem.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/ListItem.ButtonGroup.mdx",sourceDirName:"components",slug:"/components/listitem_buttongroup",permalink:"/docs/4.0.0-rc.2/components/listitem_buttongroup",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/ListItem.ButtonGroup.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"listitem_buttongroup",title:"ListItem.ButtonGroup"},sidebar:"docs",previous:{title:"ListItem.Accordion",permalink:"/docs/4.0.0-rc.2/components/listitem_accordion"},next:{title:"ListItem.CheckBox",permalink:"/docs/4.0.0-rc.2/components/listitem_checkbox"}},p={},c=[{value:"Props",id:"props",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This allows adding ButtonGroup to the ListItem.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"buttongroup#props"},"ButtonGroup")," props."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"buttongroup#props"},"ButtonGroup")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,o.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,o.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"None")),(0,o.kt)("td",{parentName:"tr",align:null}))))))}m.isMDXComponent=!0}}]);