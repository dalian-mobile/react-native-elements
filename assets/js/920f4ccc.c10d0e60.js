"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[25840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),l=n(72389),i=n(67392),u=n(7094),s=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!h.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=(0,u.U)(),k=O.tabGroupChoices,E=O.setTabGroupChoices,D=(0,o.useState)(w),T=D[0],N=D[1],_=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=k[v];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&N(j)}var P=function(e){var t=e.currentTarget,n=_.indexOf(t),r=h[n].value;r!==T&&(x(t),N(r),null!=v&&E(v,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=_.indexOf(e.currentTarget)+1;n=null!=(r=_[o])?r:_[0];break;case"ArrowLeft":var a,l=_.indexOf(e.currentTarget)-1;n=null!=(a=_[l])?a:_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},b)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:P,onClick:P},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},4234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=(n(65488),n(85162),["components"]),i={id:"dialog_button",title:"Dialog.Button"},u=void 0,s={unversionedId:"components/dialog_button",id:"version-4.0.0-rc.3/components/dialog_button",title:"Dialog.Button",description:"This is used to add a button to the Dialog.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Dialog.Button.mdx",sourceDirName:"components",slug:"/components/dialog_button",permalink:"/docs/4.0.0-rc.3/components/dialog_button",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Dialog.Button.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"dialog_button",title:"Dialog.Button"},sidebar:"docs",previous:{title:"Dialog.Actions",permalink:"/docs/4.0.0-rc.3/components/dialog_actions"},next:{title:"Dialog.Loading",permalink:"/docs/4.0.0-rc.3/components/dialog_loading"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is used to add a button to the Dialog.\nReceives all ",(0,a.kt)("a",{parentName:"p",href:"button#props"},"Button")," props."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Dialog } from "@rneui/themed";\n')),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Includes all ",(0,a.kt)("a",{parentName:"p",href:"button#props"},"Button")," props.")))}m.isMDXComponent=!0}}]);