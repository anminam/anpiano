(this.webpackJsonpanpiano=this.webpackJsonpanpiano||[]).push([[0],{22:function(e,t,n){e.exports=n(43)},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),c=n(14),i=n.n(c),r=n(19),u=n(5),l=n(0),s=n(1),f=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"makeScale",value:function(e){return this.sacleWhite.map((function(t){return t+e}))}},{key:"makeScaleAll",value:function(e){var t=this,n=[];return this.sacleWhite.forEach((function(a){n.push(a+e),t.sacleBlack.includes(a)&&n.push(a+"#"+e)})),n}},{key:"getKeyTones",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(0===t)return this.makeScaleAll(e);for(var n=[],a=e;a<=t;a++)n=[].concat(Object(u.a)(n),Object(u.a)(this.makeScaleAll(a)));return n}},{key:"initTones",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e.getKeyTones(t,n),o=[];return a.forEach((function(e){o.push({tone:e,isValue:!1})})),o}},{key:"getScale5",value:function(e){return["C3","D3","E3","F3","G3","F3","E3","D3","C3"]}},{key:"getKeyToTone",value:function(e){var t,n={a:"C3",w:"C#3",s:"D3",e:"D#3",d:"E3",f:"F3",t:"F#3",g:"G3",y:"G#3",h:"A3",u:"A#3",j:"B3",i:"B#3",k:"C4"};return n.hasOwnProperty(e)&&(t=n[e]),t}},{key:"getBlackPosition",value:function(e){if(!e.includes("#"))return 0;var t=e.replace("#",""),n=document.querySelector("[data-tone=".concat(t,"]"));return((null===n||void 0===n?void 0:n.getBoundingClientRect().x)||0)+this.positionStart}}]),e}();f.sacleWhite=["C","D","E","F","G","A","B"],f.sacleBlack=["C","D","F","G","A"],f.positionStart=30;var v=n(13),d=n(6),h=n(12),k=(new h.a).toDestination(),m=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,null,[{key:"trigger",value:function(e){k.triggerAttackRelease(e,"8n")}},{key:"triggerAttackRelease",value:function(e,t,n,a){}}]),e}(),p=function(e){var t=e.tone,n=e.isActive,c=e.onToneClick,i=Object(a.useState)(),r=Object(d.a)(i,2),u=r[0],l=r[1];Object(a.useEffect)((function(){l(f.getBlackPosition(t))}),[t]);var s="key ".concat(t.includes("#")?"black":""," ").concat(n?"active":"");return Object(a.useEffect)((function(){n&&m.trigger(t)}),[n]),o.a.createElement("div",{className:s,style:{left:u},onMouseDown:function(){return c(t)},"data-tone":t},o.a.createElement("span",{className:"key__name"},t))},y=function(e){Object(r.a)(e);var t=Object(v.c)((function(e){return e.piano.tones})),n=Object(v.b)(),a=function(e){n(function(e){return{type:"PIANO_TRIGGER",payload:e}}(e)),setTimeout((function(){n(function(e){return{type:"PIANO_RELEASE",payload:e}}(e))}),500)},c=function(e){a(e)};return o.a.createElement("div",{className:"piano-kyes",onKeyPress:function(e){var n=e.key,o=f.getKeyToTone(n);if(o){var c=null===t||void 0===t?void 0:t.findIndex((function(e){return e.tone===o})),i=t[c];i&&a(i.tone)}},tabIndex:0},o.a.createElement("div",{className:"piano-kyes__whites"},t&&t.map((function(e){return o.a.createElement(p,{key:e.tone,tone:e.tone,onToneClick:c,isActive:e.isValue})}))))},b=function(e){var t=e.text,n=e.onClick;return o.a.createElement("button",{className:"mini",onClick:n},t)},E=(new h.a).toDestination();var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(y,null),o.a.createElement(b,{text:"\ud654\uc74c",onClick:function(){var e=f.getScale5("C3"),t=h.b();e.forEach((function(e,n){return E.triggerAttackRelease(e,"8n",t+.5*n)}))}})))};n(42),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(3),j={tones:f.initTones(3,4)},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PIANO_TRIGGER":var n=t.payload,a=e.tones.findIndex((function(e){return e.tone===n})),o=Object(u.a)(e.tones);return o[a].isValue=!0,Object(O.a)(Object(O.a)({},e),{},{tones:Object(u.a)(o)});case"PIANO_RELEASE":var c=t.payload,i=e.tones.findIndex((function(e){return e.tone===c})),r=Object(u.a)(e.tones);return r[i].isValue=!1,Object(O.a)(Object(O.a)({},e),{},{tones:Object(u.a)(r)});default:return e}},w=n(10),C=n(21),S=Object(w.c)({piano:A}),T=Object(w.d)(S,Object(w.a)(C.a));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v.a,{store:T},o.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d305cd58.chunk.js.map