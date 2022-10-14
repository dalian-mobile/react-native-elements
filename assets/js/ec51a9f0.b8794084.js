(self.webpackChunk=self.webpackChunk||[]).push([[84399],{27888:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var a=n(67294),o=n(13925),r=n(54236),l=n(40318),i=n(62290);const s=function(){var t=(0,l.Z)({componentName:"BottomSheet",props:{children:{type:i.n.ReactNode,value:"<Text>Some Content</Text>"},isVisible:{type:i.n.Boolean,value:!1},modalProps:{type:i.n.Object,value:'{ presentationStyle: "fullScreen" , }',description:"Modal Props -> https://reactnative.dev/docs/modal"}},scope:{BottomSheet:o.BottomSheet,Text:o.Text},imports:{"@rneui/base":{named:["BottomSheet","Text"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},37047:(t,e,n)=>{"use strict";n.d(e,{w:()=>s});var a=n(67294),o=n(35742),r=n(14330),l=n(98576),i=n(61720),s=function(){return a.createElement(o.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r.Z+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),o=n(67294),r=n(91262),l=n(18421),i=n(77356),s=n(41652),m=n(24309),c=n(16042),d=n(20346),p=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return o.createElement(r.Z,{fallback:o.createElement(o.Fragment,null,"Loading...")},(function(){return o.createElement(d.X9.Provider,null,o.createElement(d.PK,{initialMetrics:p.o},o.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},o.createElement(l.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),o.createElement(s.Z,{msg:e.errorProps.msg,isPopup:!0}),o.createElement(m.Z,e.knobProps),o.createElement(s.Z,e.errorProps),o.createElement(c.E,e.actions)))}))}},22365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>A});var a=n(87462),o=n(63366),r=n(67294),l=n(10407),i=n(86010),s=(n(95999),n(52263)),m=n(91262),c=n(66412);const d="playgroundContainer_TGbA",p="playgroundEditor_PvJ1",u="playgroundPreview_bb8I",k="toggleIcon_OnrQ";var h=n(72389),f=n(5434),g=["children","transformCode"];function y(){return r.createElement("div",null,"Loading...")}function v(){var t=(0,h.Z)();return r.createElement(l.uz,{key:String(t),className:p})}function B(){var t=r.useState(!0),e=t[0],n=t[1],a=r.useState(void 0),o=(a[0],a[1],function(){n((function(t){return!t}))});return r.createElement(r.Fragment,null,r.createElement("div",{className:u},r.createElement(m.Z,{fallback:r.createElement(y,null)},(function(){return r.createElement(r.Fragment,null,r.createElement(l.i5,null),r.createElement(l.IF,null),r.createElement("div",{className:(0,i.Z)(k)},r.createElement(f.xoN,{onClick:o})," "))}))),e&&r.createElement(r.Fragment,null," ",r.createElement(v,null)))}function A(t){var e=t.children,n=t.transformCode,i=(0,o.Z)(t,g),m=((0,s.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.p)());return r.createElement("div",{className:d},r.createElement(l.nu,(0,a.Z)({code:e.replace(/\n$/,""),transformCode:n||function(t){return t},theme:m},i),r.createElement(r.Fragment,null,r.createElement(B,null))))}},56922:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var a=n(67294),o=n(32408),r=n(13925),l=n(97288),i=n(83279);const s=Object.assign({React:a,LinearGradient:i.Z},o,r,l,{Switch:function(){var t=a.useState(!1),e=t[0],n=t[1];return a.createElement(r.Switch,{value:e,onValueChange:n})}},a)},90816:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>h,default:()=>B,frontMatter:()=>k,metadata:()=>f,toc:()=>y});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(37047),i=(n(9877),n(72360),n(89279)),s=n(47516),m=["components"],c={toc:[]};function d(t){var e=t.components,n=(0,o.Z)(t,m);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"../installation#install-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0Aconst%20list%20%3D%20%5B%0A%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Areturn%20(%0A%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20))%7D%0A%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%3C%2FSafeAreaProvider%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var p=n(27888),u=["components"],k={id:"bottomsheet",title:"BottomSheet"},h=void 0,f={unversionedId:"components/bottomsheet",id:"components/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/docs/components/BottomSheet.mdx",sourceDirName:"components",slug:"/components/bottomsheet",permalink:"/docs/next/components/bottomsheet",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/BottomSheet.mdx",tags:[],version:"current",frontMatter:{id:"bottomsheet",title:"BottomSheet"},sidebar:"docs",previous:{title:"Badge",permalink:"/docs/next/components/badge"},next:{title:"Button",permalink:"/docs/next/components/button"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],v={toc:y};function B(t){var e=t.components,n=(0,o.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen.\nThis opens from the bottom of the screen."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("div",{class:"row inline-flex-center"},(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Import")),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"import { BottomSheet } from '@rneui/themed';")),(0,r.kt)("div",{class:"col col--3"},(0,r.kt)("h4",null,"Theme Key"," ",(0,r.kt)("a",{href:"../customizing#using-themeprovider"},(0,r.kt)(s.Fs0,{mdxType:"BiInfoCircle"})))),(0,r.kt)("div",{class:"col col--9"},(0,r.kt)(i.Z,{mdxType:"CodeBlock"},"BottomSheet"))),(0,r.kt)(d,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backdropStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the backdrop container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the bottom sheet's container. Use this to change the color of the underlay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isVisible")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Is the modal component shown.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"modalProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props handed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Modal"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onBackdropPress")),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Handler for backdrop press.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"scrollViewProps")),(0,r.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to add props to Scroll view."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(p.Z,{mdxType:"Play"}))}B.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);