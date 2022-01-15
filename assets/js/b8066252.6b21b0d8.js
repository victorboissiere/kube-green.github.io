"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[993],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),s=["components"],l={sidebar_position:2},i="How it works",p={unversionedId:"lifecycle",id:"lifecycle",title:"How it works",description:"The use of this operator is very simple. Once installed on the cluster, configure the desired CRD to make it works.",source:"@site/docs/lifecycle.md",sourceDirName:".",slug:"/lifecycle",permalink:"/docs/lifecycle",editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/lifecycle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Install",permalink:"/docs/install"}},u=[{value:"What resources handles?",id:"what-resources-handles",children:[{value:"What means sleep and wake up a resource?",id:"what-means-sleep-and-wake-up-a-resource",children:[{value:"Deployment",id:"deployment",children:[],level:4},{value:"CronJobs",id:"cronjobs",children:[],level:4}],level:3},{value:"How state is saved across sleep and wake up?",id:"how-state-is-saved-across-sleep-and-wake-up",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The use of this operator is very simple. Once installed on the cluster, configure the desired CRD to make it works.",(0,a.kt)("br",{parentName:"p"}),"\n","The CRD used by ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-green")," is called ",(0,a.kt)("strong",{parentName:"p"},"SleepInfo"),". In this configuration, it is possible to configure the sleep and wake up time for the namespace."),(0,a.kt)("p",null,"An example of configuration is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: working-hours\nspec:\n  weekdays: "1-5"\n  sleepAt: "20:00"\n  wakeUpAt: "08:00"\n  timeZone: "Europe/Rome"\n  suspendCronJobs: true\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       my-deployment\n')),(0,a.kt)("p",null,"With this ",(0,a.kt)("strong",{parentName:"p"},"SleepInfo"),", called ",(0,a.kt)("em",{parentName:"p"},"working-hours"),", namespace will be slept at 20:00 and woken up at 08:00 (Italy time zone) on weekdays (Monday to Friday)."),(0,a.kt)("h2",{id:"what-resources-handles"},"What resources handles?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"kube-green")," handles:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment"),(0,a.kt)("li",{parentName:"ul"},"CronJobs")),(0,a.kt)("p",null,"By default, on sleep, all this kind of resources are stopped."),(0,a.kt)("h3",{id:"what-means-sleep-and-wake-up-a-resource"},"What means sleep and wake up a resource?"),(0,a.kt)("p",null,"The sleep of the resource is the stop of the resource, and it depends on the type of resources."),(0,a.kt)("p",null,"The wake up of the resource is the restore of the status of the resource before the sleep."),(0,a.kt)("h4",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"To sleep the ",(0,a.kt)("em",{parentName:"p"},"Deployment")," resources, replicas are set to 0."),(0,a.kt)("p",null,"To wake up, the number of replicas is set to the number of replicas before the sleep."),(0,a.kt)("h4",{id:"cronjobs"},"CronJobs"),(0,a.kt)("p",null,"To sleep the ",(0,a.kt)("em",{parentName:"p"},"CronJob")," resources, are set as suspended."),(0,a.kt)("p",null,"To wake up, the suspend field is restored."),(0,a.kt)("h3",{id:"how-state-is-saved-across-sleep-and-wake-up"},"How state is saved across sleep and wake up?"),(0,a.kt)("p",null,"The state of the resources before the sleep is saved in a secret with the name of the ",(0,a.kt)("em",{parentName:"p"},"SleepInfo")," in the namespace."))}d.isMDXComponent=!0}}]);