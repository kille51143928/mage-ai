(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4947],{44162:function(e,n,t){"use strict";t.d(n,{HC:function(){return g},Kf:function(){return d},Nk:function(){return p},gE:function(){return h},jv:function(){return f},oh:function(){return s},qn:function(){return l},t1:function(){return m},y9:function(){return b}});var r=t(46313),i=t(23831),o=t(73942),c=t(86422),u=t(49125),a=t(90880),s=68;function l(e,n){var t=(n.theme.borders||i.Z.borders).light,r=(n.theme.monotone||i.Z.monotone).grey500,o=n||{},u=o.isSelected,a=o.theme;return u?t=(a.content||i.Z.content).active:c.tf.TRANSFORMER===e?(t=(a.accent||i.Z.accent).purple,r=(a.accent||i.Z.accent).purpleLight):c.tf.DATA_EXPORTER===e?(t=(a.accent||i.Z.accent).yellow,r=(a.accent||i.Z.accent).yellowLight):c.tf.DATA_LOADER===e?(t=(a.accent||i.Z.accent).blue,r=(a.accent||i.Z.accent).blueLight):c.tf.SCRATCHPAD===e?(t=(a.content||i.Z.content).default,r=(a.accent||i.Z.accent).contentDefaultTransparent):c.tf.SENSOR===e&&(t=(a.accent||i.Z.accent).pink,r=(a.accent||i.Z.accent).pinkLight),{accent:t,accentLight:r}}var d=(0,r.css)([""," "," "," "," ",""],(0,a.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(l(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(l(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||i.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).danger,";\n  ")})),p=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],o.n_),f=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-1"})([""," border-left-style:solid;border-left-width:2px;border-right-style:solid;border-right-width:2px;border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:solid;border-top-width:2px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],d,o.n_,o.n_,u.iI,u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(o.n_,"px;\n    border-bottom-right-radius: ").concat(o.n_,"px;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-2"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:10;&:hover{.block-divider-inner{","}}"],2*u.iI,(function(e){return"\n        background-color: ".concat((e.theme.text||i.Z.text).fileBrowser,";\n      ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-3"})(["height 1px;width:100%;position:absolute;z-index:-1;"]),b=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-4"})(["margin-bottom:","px;padding-bottom:","px;padding-left:","px;",""],u.cd*u.iI,u.iI,s,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-5"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,s)},43032:function(e,n,t){"use strict";t.d(n,{Cl:function(){return u},Nk:function(){return a},ZG:function(){return c}});var r=t(46313),i=t(23831),o=t(49125),c=1.5*o.iI,u=1*c+o.iI/2,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(e){return"\n      background-color: ".concat((e.theme.interactive||i.Z.interactive).hoverBackground,";\n    ")}))},92953:function(e,n,t){"use strict";var r;t.d(n,{a:function(){return r}}),function(e){e.BLOCK_RUNS="block_runs",e.BLOCK_RUNTIME="block_runtime",e.PIPELINE_RUNS="pipeline_runs"}(r||(r={}))},87465:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});t(82684);var r=t(34376),i=t(87372),o=t(38965),c=t(86673),u=t(19711),a=t(2850),s=t(46313),l=t(23831),d=t(49125),p=s.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],d.iI,d.tr,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||l.Z.interactive).checked,";\n  ")}),(function(e){return!e.selected&&"\n    cursor: pointer;\n  "})),f=t(92953),h=t(59920),m=t(28598);var b=function(e){var n=e.breadcrumbs,t=e.children,s=e.monitorType,l=e.pipeline,b=e.subheader,g=(0,r.useRouter)();return(0,m.jsx)(o.Z,{before:(0,m.jsxs)(a.M,{children:[(0,m.jsx)(c.Z,{p:d.cd,children:(0,m.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),g.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors"))},selected:f.a.PIPELINE_RUNS==s,children:(0,m.jsx)(u.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),g.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors/block-runs"))},selected:f.a.BLOCK_RUNS==s,children:(0,m.jsx)(u.ZP,{children:"Block runs"})}),(0,m.jsx)(p,{onClick:function(e){e.preventDefault(),g.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===l||void 0===l?void 0:l.uuid,"/monitors/block-runtime"))},selected:f.a.BLOCK_RUNTIME==s,children:(0,m.jsx)(u.ZP,{children:"Block runtime"})})]}),breadcrumbs:n,pageName:h.M.MONITOR,pipeline:l,subheader:b,uuid:"pipeline/monitor",children:t})}},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(46313),i=t(23831),o=t(3055),c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],o.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).medium,";\n  ")}))},59920:function(e,n,t){"use strict";var r;t.d(n,{M:function(){return r}}),function(e){e.BLOCK_RUNS="block_runs",e.MONITOR="monitor",e.PIPELINE_LOGS="pipeline_logs",e.PIPELINE_RUNS="pipeline_runs",e.RUNS="runs",e.TRIGGERS="triggers"}(r||(r={}))},38965:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(77555),i=t(82684),o=t(61519),c=t(28598);var u=function(e){var n=e.size;return(0,c.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.25 1C23.25 0.585786 22.9142 0.25 22.5 0.25C22.0858 0.25 21.75 0.585786 21.75 1V15.5C21.75 15.9142 22.0858 16.25 22.5 16.25C22.9142 16.25 23.25 15.9142 23.25 15.5V1ZM5 4.25C5.41421 4.25 5.75 4.58579 5.75 5V15.5C5.75 15.9142 5.41421 16.25 5 16.25C4.58579 16.25 4.25 15.9142 4.25 15.5V5C4.25 4.58579 4.58579 4.25 5 4.25ZM1.5 7.25C1.91421 7.25 2.25 7.58579 2.25 8V15.5C2.25 15.9142 1.91421 16.25 1.5 16.25C1.08579 16.25 0.75 15.9142 0.75 15.5V8C0.75 7.58579 1.08579 7.25 1.5 7.25ZM9.25 7C9.25 6.58579 8.91421 6.25 8.5 6.25C8.08579 6.25 7.75 6.58579 7.75 7V15.5C7.75 15.9142 8.08579 16.25 8.5 16.25C8.91421 16.25 9.25 15.9142 9.25 15.5V7ZM12 8.75C12.4142 8.75 12.75 9.08579 12.75 9.5V15.5C12.75 15.9142 12.4142 16.25 12 16.25C11.5858 16.25 11.25 15.9142 11.25 15.5V9.5C11.25 9.08579 11.5858 8.75 12 8.75ZM16.25 11.5C16.25 11.0858 15.9142 10.75 15.5 10.75C15.0858 10.75 14.75 11.0858 14.75 11.5V15.5C14.75 15.9142 15.0858 16.25 15.5 16.25C15.9142 16.25 16.25 15.9142 16.25 15.5V11.5ZM19 9.25C19.4142 9.25 19.75 9.58579 19.75 10V15.5C19.75 15.9142 19.4142 16.25 19 16.25C18.5858 16.25 18.25 15.9142 18.25 15.5V10C18.25 9.58579 18.5858 9.25 19 9.25Z",fill:"url(#paint0_linear_2919_69883)"}),(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"paint0_linear_2919_69883",x1:"1.5",y1:"11.875",x2:"22.75",y2:"11.875",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,c.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},a=t(48933),s=t(34744),l=t(67971),d=t(87372),p=t(31866);var f=function(e){var n=e.size;return(0,c.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V13C11.25 13.4142 11.5858 13.75 12 13.75H16C16.4142 13.75 16.75 13.4142 16.75 13C16.75 12.5858 16.4142 12.25 16 12.25H12.75V7Z",fill:"url(#paint0_linear_2798_59379)"}),(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"paint0_linear_2798_59379",x1:"1",y1:"12",x2:"23",y2:"12",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,c.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},h=t(86673);var m=function(e){var n=e.size;return(0,c.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 17c0 1.1046-.89543 2-2 2s-2-.8954-2-2 .89543-2 2-2 2 .8954 2 2zm1.5 0c0 1.933-1.567 3.5-3.5 3.5S1.5 18.933 1.5 17s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm2.25-.5c0-.4142.3358-.75.75-.75H22c.4142 0 .75.3358.75.75s-.3358.75-.75.75H11.5c-.4142 0-.75-.3358-.75-.75zM8.68946 4.29563c.16317-.38072-.0132-.82163-.39392-.9848-.38072-.16316-.82163.0132-.9848.39392L5.06418 8.94674c-.07952.18554-.3348.2052-.44179.03402L3.1361 6.60269c-.21953-.35125-.68225-.45803-1.0335-.2385-.35125.21954-.45803.68225-.2385 1.0335l1.48629 2.37807c.74892 1.19824 2.53587 1.06064 3.0925-.23814l2.24657-5.24199zM11.5 6.75c-.4142 0-.75.33579-.75.75s.3358.75.75.75H22c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75H11.5z",fill:"url(#paint0_linear_2919_69883)"}),(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"paint0_linear_2919_69883",x1:"1.5",y1:"11.875",x2:"22.75",y2:"11.875",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,c.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},b=t(41374),g=t(10503),x=t(46313),v=t(23831),C=t(73942),_=t(49125),R=x.default.div.withConfig({displayName:"indexstyle__BannerStyle",componentId:"sc-1te3pmf-0"})(["border-radius:","px;padding:","px;"," "," ",""],C.n_,3*_.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||v.Z.shadow).small,";\n  ")}),(function(e){return e.background&&"\n    background: ".concat(e.background,";\n  ")}),(function(e){return e.backgroundImage&&'\n    background-image: url("'.concat(e.backgroundImage,'");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  ')})),Z=t(3055),y=t(59920),E=t(99994),k=t(24141);var S=function(e){var n=e.after,t=e.afterHidden,x=e.afterWidth,v=e.before,C=e.beforeWidth,S=e.breadcrumbs,j=e.buildSidekick,T=e.children,O=e.headline,w=e.pageName,I=e.pipeline,P=e.subheader,A=e.subheaderBackground,D=e.subheaderBackgroundImage,M=e.subheaderButton,N=e.subheaderText,L=e.title,B=e.uuid,U=(0,k.i)().height,H=I.uuid,V=b.ZP.pipelines.detail(H).data,F=null===V||void 0===V?void 0:V.pipeline,z=(0,i.useMemo)((function(){return n||(j?j({height:U,heightOffset:Z.Mz,pipeline:F}):null)}),[n,j,U,F]),G=x||(z?50*_.iI:null),X=(0,i.useMemo)((function(){var e=[];return F&&(e.push.apply(e,[{label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}}]),S?(e.push({label:function(){return F.name},linkProps:{as:"/pipelines/".concat(H,"/triggers"),href:"/pipelines/[pipeline]/triggers"}}),e.push.apply(e,(0,r.Z)(S)),e[e.length-1].bold=!0):e.push({bold:!0,label:function(){return F.name}})),e}),[S,F]);return(0,c.jsxs)(a.Z,{after:z,afterHidden:t,afterWidth:G,before:v,beforeWidth:C,breadcrumbs:X,navigationItems:[{Icon:g.Pf,IconSelected:f,id:y.M.TRIGGERS,label:function(){return"Triggers"},linkProps:{as:"/pipelines/".concat(H,"/triggers"),href:"/pipelines/[pipeline]/triggers"},isSelected:function(){return y.M.TRIGGERS===w}},{Icon:g.pd,IconSelected:o.Z,id:y.M.RUNS,label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(H,"/runs"),href:"/pipelines/[pipeline]/runs"},isSelected:function(){return y.M.RUNS===w}},{Icon:g.B4,IconSelected:m,id:y.M.PIPELINE_LOGS,label:function(){return"Logs"},linkProps:{as:"/pipelines/".concat(H,"/logs"),href:"/pipelines/[pipeline]/logs"},isSelected:function(){return y.M.PIPELINE_LOGS===w}},{Icon:g.kL,IconSelected:u,id:y.M.MONITOR,label:function(){return"Monitor"},linkProps:{as:"/pipelines/".concat(H,"/monitors"),href:"/pipelines/[pipeline]/monitors"},isSelected:function(){return y.M.MONITOR===w}}],subheaderChildren:"undefined"!==typeof P?P:(0,c.jsx)(l.Z,{alignItems:"center",children:(0,c.jsx)(p.ZP,{background:E.yr,bold:!0,beforeElement:(0,c.jsx)(g.I8,{size:2.5*_.iI}),inline:!0,linkProps:{as:"/pipelines/".concat(H,"/edit"),href:"/pipelines/[pipeline]/edit"},noHoverUnderline:!0,sameColorAsText:!0,uuid:"PipelineDetailPage/edit",children:"Edit Pipeline"})}),title:F?L?L(F):F.name:null,uuid:B,children:[(M||N)&&(0,c.jsx)(h.Z,{mb:_.Mq,mt:_.cd,mx:_.cd,children:(0,c.jsx)(R,{background:A,backgroundImage:D,children:(0,c.jsxs)(l.Z,{alignItems:"center",children:[M,N&&(0,c.jsx)(h.Z,{ml:3}),N]})})}),O&&(0,c.jsx)(h.Z,{p:_.cd,children:(0,c.jsxs)(h.Z,{mt:_.cd,px:_.cd,children:[(0,c.jsx)(d.Z,{level:5,children:O}),(0,c.jsx)(s.Z,{light:!0,mt:_.cd,short:!0})]})}),T]})}},45739:function(e,n,t){"use strict";t.d(n,{K:function(){return i}});var r=t(31969),i=function(e){var n=e||r.Z,t=n.brand,i=t.earth200,o=t.earth300,c=t.earth400,u=t.energy200,a=t.energy300,s=t.energy400,l=t.fire200,d=t.fire300,p=t.fire400,f=t.water200,h=t.water300,m=t.water400,b=t.wind200,g=t.wind300,x=t.wind400,v=n.chart;return[v.backgroundPrimary,v.backgroundSecondary,v.backgroundTertiary].concat([x,m,p,s,c,g,h,d,a,o,b,f,l,u,i])}},52359:function(e,n,t){"use strict";var r=t(46313).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);n.Z=r},344:function(e,n,t){"use strict";t.d(n,{P5:function(){return u},Pw:function(){return i},Xh:function(){return o},fR:function(){return a}});var r=t(5679),i=20,o=10,c=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function u(e){return"number"!==typeof e?e:e>=1e4?c.format(e):e.toString()}function a(e,n){var t=(0,r.kE)(e)?String((0,r.QV)(e,1)):String(e);return t.length>n?"".concat(t.substring(0,n),"..."):t}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return s},DA:function(){return a},Qj:function(){return l},Ut:function(){return h},V4:function(){return f},f2:function(){return p},iZ:function(){return d},t6:function(){return o},tf:function(){return c}});var r,i,o,c,u=t(82394);!function(e){e.PYTHON="python",e.SQL="sql"}(o||(o={})),function(e){e.CHART="chart",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(c||(c={}));var a,s=[c.CHART,c.DATA_EXPORTER,c.DATA_LOADER,c.SCRATCHPAD,c.SENSOR,c.TRANSFORMER],l=[c.CHART,c.SCRATCHPAD,c.SENSOR],d=[c.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(a||(a={}));var p=[c.DATA_EXPORTER,c.TRANSFORMER],f=(r={},(0,u.Z)(r,c.DATA_EXPORTER,"Data exporter"),(0,u.Z)(r,c.DATA_LOADER,"Data loader"),(0,u.Z)(r,c.SCRATCHPAD,"Scratchpad"),(0,u.Z)(r,c.SENSOR,"Sensor"),(0,u.Z)(r,c.TRANSFORMER,"Transformer"),r),h=[c.DATA_LOADER,c.TRANSFORMER,c.DATA_EXPORTER];i={},(0,u.Z)(i,c.DATA_EXPORTER,"DE"),(0,u.Z)(i,c.DATA_LOADER,"DL"),(0,u.Z)(i,c.SCRATCHPAD,"SP"),(0,u.Z)(i,c.SENSOR,"SR"),(0,u.Z)(i,c.TRANSFORMER,"TF")},68805:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(12757),o=t(82394),c=t(38860),u=t.n(c),a=t(82684),s=t(92083),l=t.n(s),d=t(16634),p=t(67971),f=t(87372),h=t(68735),m=t(87465),b=t(86673),g=t(55378),x=t(19711),v=t(41374),C=t(28799),_=t(23831),R=t(73942),Z=t(43032),y=t(92953),E=t(46313),k=t(44162),S=t(24224),j=t(96510),T=t(83455),O=t(28598);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e){var n=e.pipeline,t=(0,a.useContext)(E.ThemeContext),c=(0,a.useState)(null),s=c[0],w=c[1],P=n.uuid,A=v.ZP.pipelines.detail(P).data,D=(0,a.useMemo)((function(){return I(I({},null===A||void 0===A?void 0:A.pipeline),{},{uuid:P})}),[A,P]),M=v.ZP.pipeline_schedules.pipelines.list(P).data,N=(0,a.useMemo)((function(){return null===M||void 0===M?void 0:M.pipeline_schedules}),[M]),L=(0,a.useMemo)((function(){return(0,S.HK)(null===D||void 0===D?void 0:D.blocks,(function(e){return e.uuid}))||{}}),[D]),B=(0,a.useState)(null),U=B[0],H=B[1],V=(0,T.Db)(function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat((0,C.ZP)(v.x8),"/block_run_time?pipeline_uuid=").concat(P),(n||0===n)&&(t+="&pipeline_schedule_id=".concat(n)),e.abrupt("return",fetch(t,{method:"GET"}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),{onSuccess:function(e){return(0,j.wD)(e,{callback:function(e){H(e)}})}}),F=(0,i.Z)(V,1)[0];(0,a.useEffect)((function(){F(s)}),[F]);var z=((null===U||void 0===U?void 0:U.monitor_stats)||{}).stats,G=(0,a.useMemo)((function(){for(var e=new Date,n=[],t=0;t<90;t++)n.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return n}),[]),X=(0,a.useMemo)((function(){if(z)return Object.entries(z).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],c=t[1].data;return I(I({},e),{},(0,o.Z)({},r,G.map((function(e){return{x:e,y:e in c?[c[e]]:null}}))))}),{})}),[z]),K=(0,a.useMemo)((function(){var e=[];return e.push({bold:!0,label:function(){return"Monitors"}}),e}),[D]);return(0,O.jsx)(m.Z,{breadcrumbs:K,monitorType:y.a.BLOCK_RUNTIME,pipeline:D,subheader:(0,O.jsx)(p.Z,{children:(0,O.jsxs)(g.Z,{backgroundColor:_.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(e){var n=e.target.value;"initial"!==n?(F(n),w(n)):(F(),w(null))},value:s||"initial",children:[(0,O.jsx)("option",{value:"initial",children:"All"}),N&&N.map((function(e){return(0,O.jsx)("option",{value:e.id,children:e.name})}))]})}),children:(0,O.jsx)(b.Z,{mx:2,children:X&&Object.entries(X).map((function(e){var n,r=(0,i.Z)(e,2),o=r[0],c=r[1];return(0,O.jsxs)(b.Z,{mt:2,children:[(0,O.jsxs)(p.Z,{alignItems:"center",children:[(0,O.jsx)(b.Z,{mx:1,children:(0,O.jsx)(d.Z,{color:(0,k.qn)(null===(n=L[o])||void 0===n?void 0:n.type,{theme:t}).accent,size:Z.ZG,square:!0})}),(0,O.jsx)(f.Z,{level:4,children:o})]}),(0,O.jsx)("div",{style:{backgroundColor:_.Z.background.chartBlock,borderRadius:"".concat(R.TR,"px"),marginTop:"8px"},children:(0,O.jsx)(h.Z,{data:c,getX:function(e){return l()(e.x).valueOf()},gridProps:{stroke:"black",strokeDasharray:null,strokeOpacity:.2},height:200,hideGridX:!0,margin:{top:10,bottom:30,left:35,right:-1},noCurve:!0,renderXTooltipContent:function(e){return(0,O.jsx)(x.ZP,{center:!0,small:!0,children:l()(e.x).format("MMM DD")})},renderYTooltipContent:function(e){var n,t=null===e||void 0===e||null===(n=e.y)||void 0===n?void 0:n[0];return void 0!=t&&(0,O.jsx)(x.ZP,{center:!0,small:!0,children:t.toFixed?t.toFixed(3):t})},thickStroke:!0,xLabelFormat:function(e){return l()(e).format("MMM DD")},xLabelRotate:!1})})]})}))})})}P.getInitialProps=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.default=P},76017:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runtime",function(){return t(68805)}])}},function(e){e.O(0,[3662,5339,2083,6674,2714,9832,2874,3903,8933,1273,5378,8735,9774,2888,179],(function(){return n=76017,e(e.s=n);var n}));var n=e.O();_N_E=n}]);