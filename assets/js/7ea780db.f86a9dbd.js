"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[75704,198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=i(n),m=o,B=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return n?r.createElement(B,s(s({ref:t},d),{},{components:n})):r.createElement(B,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},66214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>B,frontMatter:()=>u,metadata:()=>d,toc:()=>l});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=n(42429),c=["components"],u={},i=void 0,d={unversionedId:"main/usage/ButtonGroup/ButtonGroup",id:"version-4.0.0-beta.0/main/usage/ButtonGroup/ButtonGroup",title:"ButtonGroup",description:"Using components",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/ButtonGroup/ButtonGroup.md",sourceDirName:"main/usage/ButtonGroup",slug:"/main/usage/ButtonGroup/",permalink:"/docs/4.0.0-beta.0/main/usage/ButtonGroup/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/ButtonGroup/ButtonGroup.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},l=[{value:"Using components",id:"using-components",level:3}],m={toc:l};function B(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.default,{mdxType:"Snack"}),(0,a.kt)("h3",{id:"using-components"},"Using components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"constructor () {\n  super()\n  this.state = {\n    selectedIndex: 2\n  }\n  this.updateIndex = this.updateIndex.bind(this)\n}\nupdateIndex (selectedIndex) {\n  this.setState({selectedIndex})\n}\n\nconst component1 = () => <Text>Hello</Text>\nconst component2 = () => <Text>World</Text>\nconst component3 = () => <Text>ButtonGroup</Text>\n\nrender () {\n  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]\n  const { selectedIndex } = this.state\n  return (\n    <ButtonGroup\n      onPress={this.updateIndex}\n      selectedIndex={selectedIndex}\n      buttons={buttons}\n      containerStyle={{height: 100}} />\n  )\n}\n")))}B.isMDXComponent=!0},42429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],c={},u=void 0,i={unversionedId:"main/usage/ButtonGroup/snack/index",id:"version-4.0.0-beta.0/main/usage/ButtonGroup/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/ButtonGroup/snack/index.md",sourceDirName:"main/usage/ButtonGroup/snack",slug:"/main/usage/ButtonGroup/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/ButtonGroup/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/ButtonGroup/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},d={},p=[],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"snack-player","data-snack-name":"RNE ButtonGroup","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%0Aimport%20%7B%20ButtonGroup%20%7D%20from%20'react-native-elements'%0Aimport%20%7B%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default()%20%3D%3E%20%7B%0A%20%20const%20%5BselectedIndex%2C%20setSelectedIndex%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BselectedIndexes%2C%20setSelectedIndexes%5D%20%3D%20useState(%5B0%2C%202%2C%203%5D)%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Strings%3C%2FText%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'SIMPLE'%2C%20'BUTTON'%2C%20'GROUP'%5D%7D%0A%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedIndex%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndex(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButtonGroup%0A%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Multiple'%2C%20'Select'%2C%20'Button'%2C%20'Group'%5D%7D%0A%20%20%20%20%20%20%20%20selectMultiple%0A%20%20%20%20%20%20%20%20selectedIndexes%3D%7BselectedIndexes%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setSelectedIndexes(value)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginBottom%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EUsing%20Components%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);