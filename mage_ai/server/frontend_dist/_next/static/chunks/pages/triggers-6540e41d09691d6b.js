(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),o=t(82684),c=t(47999),u=t(28358),l=t(93461),a=t(57384),s=t(12344),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),g=t(32063),v=t(15270),b=t(82531),m=t(66166),j=t(3055),y=t(49125),x=t(91427),O=t(24141);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.after,r=e.afterHidden,p=e.afterWidth,w=e.afterWidthOverride,P=e.before,k=e.beforeWidth,_=e.breadcrumbs,C=e.children,E=e.errors,A=e.headerMenuItems,S=e.navigationItems,I=e.setErrors,T=e.subheaderChildren,D=e.title,M=e.uuid,H=(0,O.i)().width,B="dashboard_after_width_".concat(M),R="dashboard_before_width_".concat(M),N=(0,o.useRef)(null),V=(0,o.useState)(w?p:(0,x.U2)(B,p)),z=V[0],L=V[1],q=(0,o.useState)(!1),F=q[0],W=q[1],U=(0,o.useState)(P?Math.max((0,x.U2)(R,k),13*y.iI):null),Y=U[0],Q=U[1],J=(0,o.useState)(!1),K=J[0],X=J[1],G=(0,o.useState)(null)[1],$=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,ee=null===$||void 0===$?void 0:$.projects,ne=[];_?ne.push.apply(ne,(0,i.Z)(_)):(null===ee||void 0===ee?void 0:ee.length)>=1&&ne.push.apply(ne,[{label:function(){var e;return null===(e=ee[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},{bold:!0,label:function(){return D}}]),(0,o.useEffect)((function(){null===N||void 0===N||!N.current||F||K||null===G||void 0===G||G(N.current.getBoundingClientRect().width)}),[F,z,K,Y,N,G,H]),(0,o.useEffect)((function(){F||(0,x.t8)(B,z)}),[r,F,z,B]),(0,o.useEffect)((function(){K||(0,x.t8)(R,Y)}),[K,Y,R]);var te=(0,m.Z)(p);return(0,o.useEffect)((function(){w&&te!==p&&L(p)}),[w,p,te]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:D}),(0,f.jsx)(s.Z,{breadcrumbs:ne,menuItems:A,project:null===ee||void 0===ee?void 0:ee[0],version:null===ee||void 0===ee||null===(n=ee[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===S||void 0===S?void 0:S.length)&&(0,f.jsx)(d.lm,{children:(0,f.jsx)(v.Z,{navigationItems:S})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(g.Z,{after:t,afterHeightOffset:j.Mz,afterHidden:r,afterMousedownActive:F,afterWidth:z,before:P,beforeHeightOffset:j.Mz,beforeMousedownActive:K,beforeWidth:d.k1+(P?Y:0),hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerRef:N,setAfterMousedownActive:W,setAfterWidth:L,setBeforeMousedownActive:X,setBeforeWidth:Q,children:[T&&(0,f.jsx)(h,{children:T}),C]})})]}),E&&(0,f.jsx)(c.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===I||void 0===I?void 0:I(null)},children:(0,f.jsx)(u.Z,Z(Z({},E),{},{onClose:function(){return null===I||void 0===I?void 0:I(null)}}))})]})}},97225:function(e,n,t){"use strict";var r=t(75582),i=t(12691),o=t.n(i),c=t(82684),u=t(83455),l=t(34376),a=t(60328),s=t(47999),d=t(67971),f=t(10919),p=t(93348),h=t(62609),g=t(86673),v=t(87815),b=t(19711),m=t(82531),j=t(10503),y=t(49125),x=t(45838),O=t(9736),w=t(96510),Z=t(66653),P=t(28598);n.Z=function(e){var n=e.fetchPipelineSchedules,t=e.highlightRowOnHover,i=e.includeCreatedAtColumn,k=e.includePipelineColumn,_=e.pipeline,C=e.pipelineSchedules,E=e.selectedSchedule,A=e.setErrors,S=e.setSelectedSchedule,I=e.stickyHeader,T=null===_||void 0===_?void 0:_.uuid,D=(0,l.useRouter)(),M=(0,c.useRef)({}),H=(0,c.useState)(null),B=H[0],R=H[1],N=(0,c.useState)(0),V=N[0],z=N[1],L=(0,c.useState)(0),q=L[0],F=L[1],W=(0,u.Db)((function(e){return m.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(){n()},onErrorCallback:function(e,n){return A({errors:n,response:e})}})}}),U=(0,r.Z)(W,1)[0],Y=(0,u.Db)((function(e){return m.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(){n(),T?D.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(T,"/triggers")):n()},onErrorCallback:function(e,n){return A({errors:n,response:e})}})}}),Q=(0,r.Z)(Y,1)[0],J=[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"}];(0,O.Ct)()||J.push({label:function(){return""},uuid:"edit/delete"});var K=[null,1,1,3,1,null,null,null,null];return k&&(J.splice(2,0,{uuid:"Pipeline"}),K.splice(2,0,2)),i&&(J.splice(3,0,{uuid:"Created at"}),K.splice(3,0,null)),(0,P.jsx)(x.cl,{overflowVisible:!0,children:0===C.length?(0,P.jsx)(g.Z,{px:3,py:1,children:(0,P.jsx)(b.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,P.jsx)(v.Z,{columnFlex:K,columns:J,highlightRowOnHover:t,isSelectedRow:function(e){return C[e].id===(null===E||void 0===E?void 0:E.id)},onClickRow:S?function(e){return null===S||void 0===S?void 0:S(C[e])}:null,rowVerticalPadding:6,rows:C.map((function(e,n){var t,r=e.id,u=e.created_at,l=e.pipeline_runs_count,v=e.pipeline_uuid,m=e.last_pipeline_run_status,x=e.name,w=e.schedule_interval,_=e.status,C=T||v;M.current[r]=(0,c.createRef)();var E=[(0,P.jsx)(a.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,Z.j)(n),U({id:e.id,status:p.fq.ACTIVE===_?p.fq.INACTIVE:p.fq.ACTIVE})},children:p.fq.ACTIVE===_?(0,P.jsx)(j.dz,{muted:!0,size:2*y.iI}):(0,P.jsx)(j.Py,{default:!0,size:2*y.iI})},"toggle_trigger_".concat(n)),(0,P.jsx)(b.ZP,{default:p.fq.INACTIVE===_,monospace:!0,success:p.fq.ACTIVE===_,children:_},"trigger_status_".concat(n)),(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:null===(t=p.Z4[e.schedule_type])||void 0===t?void 0:t.call(p.Z4)},"trigger_type_".concat(n)),(0,P.jsx)(o(),{as:"/pipelines/".concat(C,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,P.jsx)(f.Z,{bold:!0,onClick:function(e){(0,Z.j)(e),D.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(C,"/triggers/").concat(r))},sameColorAsText:!0,children:x})},"trigger_name_".concat(n)),(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:w},"trigger_frequency_".concat(n)),(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:l},"trigger_run_count_".concat(n)),(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:m||"N/A"},"latest_run_status_".concat(n)),(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return D.push("/pipelines/".concat(C,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,P.jsx)(j.B4,{default:!0,size:2*y.iI})},"logs_button_".concat(n))];return(0,O.Ct)()||E.push((0,P.jsxs)(d.Z,{children:[(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return D.push("/pipelines/".concat(C,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,P.jsx)(j.I8,{default:!0,size:2*y.iI})}),(0,P.jsx)(g.Z,{mr:1}),(0,P.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,i;R(r),z((null===(e=M.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),F((null===(t=M.current[r])||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:M.current[r],title:"Delete",children:(0,P.jsx)(j.rF,{default:!0,size:2*y.iI})}),(0,P.jsx)(s.Z,{onClickOutside:function(){return R(null)},open:B===r,children:(0,P.jsx)(h.Z,{danger:!0,left:(q||0)-286,onCancel:function(){return R(null)},onClick:function(){R(null),Q(r)},title:"Are you sure you want to delete the trigger ".concat(x,"?"),top:(V||0)-(n<=1?40:96),width:40*y.iI})})]},"edit_delete_buttons_".concat(n))),k&&E.splice(2,0,(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:C},"pipeline_name_".concat(n))),i&&E.splice(3,0,(0,P.jsx)(b.ZP,{default:!0,monospace:!0,children:u},"created_at_".concat(n))),E})),stickyHeader:I,uuid:"pipeline-triggers"})})}},51099:function(e,n,t){"use strict";t.d(n,{Q:function(){return s}});t(82684);var r=t(60328),i=t(67971),o=t(86673),c=t(10503),u=t(73899),l=t(49125),a=t(28598),s=22;n.Z=function(e){var n=e.page,t=e.maxPages,s=e.onUpdate,d=e.totalPages,f=[],p=t;if(p>d)f=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(p/2),g=n-h;n+h>=d?(g=d-p+2,p-=2):n-h<=0?(g=0,p-=2):(p-=4,g=n-Math.floor(p/2)),f=Array.from({length:p},(function(e,n){return n+g}))}return(0,a.jsx)(a.Fragment,{children:d>0&&(0,a.jsxs)(i.Z,{alignItems:"center",children:[(0,a.jsx)(r.Z,{disabled:0===n,onClick:function(){return s(n-1)},children:(0,a.jsx)(c.Hd,{size:1.5*l.iI,stroke:"#AEAEAE"})}),!f.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(0)},borderLess:!0,noBackground:!0,children:1})},0),!f.includes(1)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),f.map((function(e){return(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){e!==n&&s(e)},notClickable:e===n,backgroundColor:e===n&&u.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!f.includes(d-1)&&(0,a.jsxs)(a.Fragment,{children:[!f.includes(d-2)&&(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,a.jsx)(o.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,a.jsx)(o.Z,{ml:1}),(0,a.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return s(n+1)},children:(0,a.jsx)(c.Kw,{size:1.5*l.iI,stroke:"#AEAEAE"})})]})})}},45838:function(e,n,t){"use strict";t.d(n,{GZ:function(){return d},Vq:function(){return a},cE:function(){return f},cl:function(){return u},kA:function(){return l}});var r=t(9518),i=t(23831),o=t(37391),c=t(49125),u=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," ",""],o.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),l=r.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(e){return(e.columnBorders||e.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),a=r.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(e){return e.highlightOnHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||i.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||i.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),s=(0,r.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(c.iI/2,"px ").concat(c.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(c.iI,"px ").concat(2*c.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),d=r.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],s,(function(e){return e.columnBorders&&"\n    border: 1px solid ".concat((e.theme.borders||i.Z.borders).light,";\n    border-right: none;\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.sticky&&"\n    background-color: ".concat((e.theme||i.Z).background.panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||i.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),f=r.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],s,(function(e){return e.rowVerticalPadding&&"\n    padding-top: ".concat(e.rowVerticalPadding,"px;\n    padding-bottom: ").concat(e.rowVerticalPadding,"px;\n  ")}),(function(e){return e.columnBorders&&"\n    border-left: 1px solid ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.stickyFirstColumn&&"\n    background-color: ".concat((e.theme||i.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).activeBorder,";\n  ")}),(function(e){return e.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(e,n,t){"use strict";var r=t(82394),i=t(12691),o=t.n(i),c=t(82684),u=t(67971),l=t(10919),a=t(86673),s=t(19711),d=t(46261),f=t(45838),p=t(28598);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.alignTop,t=e.borderCollapseSeparate,r=e.buildLinkProps,i=e.buildRowProps,h=e.columnBorders,v=e.columnFlex,b=e.columnMaxWidth,m=e.columns,j=void 0===m?[]:m,y=e.compact,x=e.highlightRowOnHover,O=e.isSelectedRow,w=e.noBorder,Z=e.noHeader,P=e.onClickRow,k=e.onDoubleClickRow,_=e.rows,C=e.rowVerticalPadding,E=e.stickyFirstColumn,A=e.stickyHeader,S=e.uuid,I=e.wrapColumns,T=(0,c.useMemo)((function(){return v.reduce((function(e,n){return e+(n||0)}),0)}),[v]),D=(0,c.useCallback)((function(e){if(v[e]){var n=Math.round(v[e]/T*100);return"".concat(n,"%")}return null}),[v,T]),M=(0,c.useMemo)((function(){return null===_||void 0===_?void 0:_.map((function(e,t){var u,a=null===r||void 0===r?void 0:r(t),s=(null===i||void 0===i?void 0:i(t))||{renderCell:null,renderRow:null},d=s.renderCell,v=s.renderRow,m=[];if(e.forEach((function(r,i){var o;d&&(o=d(r,i)),o||(o=(0,p.jsx)(f.cE,{alignTop:n,columnBorders:h,compact:y,last:i===e.length-1,maxWidth:null===b||void 0===b?void 0:b(i),noBorder:w,rowVerticalPadding:C,selected:null===O||void 0===O?void 0:O(t),stickyFirstColumn:E&&0===i,width:D(i),wrapColumns:I,children:r},"".concat(S,"-row-").concat(t,"-cell-").concat(i))),m.push(o)})),v)u=v(m);else{u=(0,p.jsx)(f.Vq,{highlightOnHover:x,noHover:!(a||P),onClick:P?function(e){return function(e,n){1===(null===n||void 0===n?void 0:n.detail)?P(e):k&&2===(null===n||void 0===n?void 0:n.detail)&&k(e)}(t,e)}:null,children:m},"".concat(S,"-row-").concat(t))}return a?(0,c.createElement)(o(),g(g({},a),{},{key:"".concat(S,"-row-link-").concat(t),passHref:!0}),(0,p.jsx)(l.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:u})):u}))}),[n,r,D,h,b,y,i,x,O,w,P,k,C,_,E,S,I]);return(0,p.jsxs)(f.kA,{borderCollapseSeparate:t,columnBorders:h,children:[(null===j||void 0===j?void 0:j.length)>=1&&!Z&&(0,p.jsx)(f.Vq,{noHover:!0,children:j.map((function(e,n){return(0,p.jsx)(f.GZ,{columnBorders:h,compact:y,last:n===j.length-1,noBorder:w,sticky:A,children:(0,p.jsxs)(u.Z,{alignItems:"center",justifyContent:e.center?"center":"flex-start",children:[(0,p.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid}),e.tooltipMessage&&(0,p.jsx)(a.Z,{ml:"4px",children:(0,p.jsx)(d.Z,{appearBefore:!0,label:(0,p.jsx)(s.ZP,{leftAligned:!0,children:e.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(S,"-col-").concat(e.uuid,"-").concat(n))}))}),M]})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return s},fq:function(){return u},kJ:function(){return a}});var r,i,o,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var u,l,a,s=(r={},(0,c.Z)(r,o.API,(function(){return"API"})),(0,c.Z)(r,o.EVENT,(function(){return"event"})),(0,c.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(u||(u={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(l||(l={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(i={},(0,c.Z)(i,a.CREATED_AT,"Created at"),(0,c.Z)(i,a.NAME,"Name"),(0,c.Z)(i,a.PIPELINE,"Pipeline"),(0,c.Z)(i,a.STATUS,"Status"),(0,c.Z)(i,a.TYPE,"Type"),i)},46756:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(82394),o=t(75582),c=t(38860),u=t.n(c),l=t(82684),a=t(34376),s=t(1210),d=t(67971),f=t(51099),p=t(41788),h=t(55378),g=t(86673),v=t(19711),b=t(97225),m=t(82531),j=t(93348),y=t(49125),x=t(33766),O=t(59e3),w=t(28598);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(){var e=(0,a.useRouter)(),n=(0,O.iV)(),t=null!==n&&void 0!==n&&n.page?n.page:0,r=(null===n||void 0===n?void 0:n.order_by)||j.kJ.CREATED_AT,i={_limit:f.Q,_offset:t*f.Q,order_by:r},c=m.ZP.pipeline_schedules.list(i,{refreshInterval:7500,revalidateOnFocus:!0}),u=c.data,p=c.mutate,Z=(0,l.useMemo)((function(){return(null===u||void 0===u?void 0:u.pipeline_schedules)||[]}),[u]),k=(0,l.useMemo)((function(){var e;return(null===u||void 0===u||null===(e=u.metadata)||void 0===e?void 0:e.count)||[]}),[u]);return(0,w.jsxs)(s.Z,{title:"Triggers",uuid:"triggers/index",children:[(0,w.jsx)(g.Z,{mx:2,my:1,children:(0,w.jsxs)(d.Z,{alignItems:"center",children:[(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Sort runs by:"}),(0,w.jsx)(g.Z,{mr:1}),(0,w.jsx)(h.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(e){e.preventDefault(),(0,x.u7)({order_by:e.target.value,page:0})},paddingRight:4*y.iI,placeholder:"Select column",value:r||j.kJ.CREATED_AT,children:Object.entries(j.TR).map((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,w.jsx)("option",{value:t,children:r},t)}))})]})}),(0,w.jsx)(b.Z,{fetchPipelineSchedules:p,highlightRowOnHover:!0,includeCreatedAtColumn:!0,includePipelineColumn:!0,pipelineSchedules:Z,stickyHeader:!0}),(0,w.jsx)(g.Z,{p:2,children:(0,w.jsx)(f.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),i=P(P({},n),{},{page:r>=0?r:0});e.push("/triggers","/triggers?".concat((0,O.uM)(i)))},page:Number(t),totalPages:Math.ceil(k/f.Q)})})]})}k.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,p.Z)(k)},24224:function(e,n,t){"use strict";t.d(n,{HK:function(){return a},Hk:function(){return u},IN:function(){return x},Od:function(){return p},Qj:function(){return b},Sm:function(){return y},YC:function(){return s},fS:function(){return g},m5:function(){return j},mp:function(){return O},mr:function(){return d},oM:function(){return h},ry:function(){return f},sE:function(){return l},tS:function(){return v},w6:function(){return m}});var r=t(82394),i=t(7715);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){var r=t.slice();return r.splice(n,0,e),r}function l(e,n){return null===e||void 0===e?void 0:e.find(n)}function a(e,n){return null===e||void 0===e?void 0:e.reduce((function(e,t){return c(c({},e),{},(0,r.Z)({},n(t),t))}),{})}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.ascending,o=void 0===r||r,c=t.absoluteValue,u=void 0!==c&&c,l="string"===typeof n||"number"===typeof n?function(e){return u?Math.abs((0,i.t2)(e,n)):(0,i.t2)(e,n)}:function(e){return u?Math.abs(n(e)):n(e)};return e.sort((function(e,n){var t=0;return l(e)>l(n)?t=o?1:-1:l(e)<l(n)&&(t=o?-1:1),t}))}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.ascending,r=void 0===t||t;return e.sort((function(e,n){var t=0;return e[0]>n[0]?t=r?1:-1:e[0]<n[0]&&(t=r?-1:1),t}))}function f(e,n){for(var t=-1,r=e.length;1+t<r;){var i=t+(r-t>>1);n(e[i])?t=i:r=i}return r}function p(e,n){var t=e.findIndex(n);return h(e,t)}function h(e,n){return e.slice(0,n).concat(e.slice(n+1,e.length))}function g(e,n){return e.map((function(e){return String(e)})).join()===n.map((function(e){return String(e)})).join()}function v(e,n){return e>n}function b(e,n){return e<n}function m(e){return Array(e).fill(0)}function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=Array.from(Array(e).keys());return 0!==n&&(t=t.map((function(e){return e+n}))),t}function y(e){return e.reduce((function(e,n){return e+n}),0)}function x(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.reduce((function(e,n){return e+n}),0)/e.length;return Math.sqrt(e.reduce((function(e,n){return e.concat(Math.pow(n-t,2))}),[]).reduce((function(e,n){return e+n}),0)/(e.length-(n?0:1)))}function O(e){return e[Math.floor(Math.random()*e.length)]}},33766:function(e,n,t){"use strict";t.d(n,{g_:function(){return f},u7:function(){return d}});var r=t(75582),i=t(82394),o=t(34376),c=t.n(o),u=t(59e3),l=t(24224);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,l=i?{}:(0,u.iV)();n=window.location.pathname;var a=o?c().push:c().replace,d=s(s({},l),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var f=(0,u.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(n.split("?")[0]).concat(f);return a(c().router.pathname,p,{shallow:!0})}function f(e,n,t){var i=t.addingMultipleValues,o=t.isList,c=t.itemsPerPage,u=t.resetLimitParams,a=s({},e);i?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1];if(Array.isArray(i)){var o="".concat(t,"[]");a[o]=i.map(String)}})):o?Object.entries(n).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],o=String(i),c="".concat(t,"[]"),u=a[c];u&&Array.isArray(u)?(u=u.map(String)).includes(o)?a[c]=(0,l.Od)(u,(function(e){return e===o})):a[c]=u.concat(o):a[c]=[o]})):a=s(s({},a),n),u&&(a._limit=c||20,a._offset=0),d(a)}},59733:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/triggers",function(){return t(46756)}])}},function(e){e.O(0,[3850,2344,9386,9774,2888,179],(function(){return n=59733,e(e.s=n);var n}));var n=e.O();_N_E=n}]);