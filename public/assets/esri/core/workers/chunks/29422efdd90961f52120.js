"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1537],{92835:(e,t,r)=>{r.d(t,{Z:()=>g});var i,s=r(43697),n=r(96674),o=r(70586),a=r(35463),l=r(5600),h=(r(75215),r(67676),r(71715)),c=r(52011),u=r(30556);let p=i=class extends n.wq{static get allTime(){return d}static get empty(){return m}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?e.getTime():null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?e.getTime():null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=(0,o.pC)(this.start)?this.start.getTime():this.start,r=(0,o.pC)(this.end)?this.end.getTime():this.end,i=(0,o.pC)(e.start)?e.start.getTime():e.start,s=(0,o.pC)(e.end)?e.end.getTime():e.end;return t===i&&r===s}expandTo(e){if(this.isEmpty||this.isAllTime)return this.clone();const t=(0,o.yw)(this.start,(t=>(0,a.JE)(t,e))),r=(0,o.yw)(this.end,(t=>{const r=(0,a.JE)(t,e);return t.getTime()===r.getTime()?r:(0,a.Nm)(r,1,e)}));return new i({start:t,end:r})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=(0,o.R2)(this.start,-1/0,(e=>e.getTime())),r=(0,o.R2)(this.end,1/0,(e=>e.getTime())),s=(0,o.R2)(e.start,-1/0,(e=>e.getTime())),n=(0,o.R2)(e.end,1/0,(e=>e.getTime()));let a,l;if(s>=t&&s<=r?a=s:t>=s&&t<=n&&(a=t),r>=s&&r<=n?l=r:n>=t&&n<=r&&(l=n),null!=a&&null!=l&&!isNaN(a)&&!isNaN(l)){const e=new i;return e.start=a===-1/0?null:new Date(a),e.end=l===1/0?null:new Date(l),e}return i.empty}offset(e,t){if(this.isEmpty||this.isAllTime)return this.clone();const r=new i,{start:s,end:n}=this;return(0,o.pC)(s)&&(r.start=(0,a.Nm)(s,e,t)),(0,o.pC)(n)&&(r.end=(0,a.Nm)(n,e,t)),r}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return d.clone();const t=(0,o.pC)(this.start)&&(0,o.pC)(e.start)?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=(0,o.pC)(this.end)&&(0,o.pC)(e.end)?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"end",void 0),(0,s._)([(0,h.r)("end")],p.prototype,"readEnd",null),(0,s._)([(0,u.c)("end")],p.prototype,"writeEnd",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isAllTime",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],p.prototype,"isEmpty",null),(0,s._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],p.prototype,"start",void 0),(0,s._)([(0,h.r)("start")],p.prototype,"readStart",null),(0,s._)([(0,u.c)("start")],p.prototype,"writeStart",null),p=i=(0,s._)([(0,c.j)("esri.TimeExtent")],p);const d=new p,m=new p({start:void 0,end:void 0}),g=p},46791:(e,t,r)=>{r.d(t,{Z:()=>O});var i,s=r(43697),n=r(3894),o=r(32448),a=r(22974),l=r(70586),h=r(71143);!function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(i||(i={}));var c,u=r(1654),p=r(5600),d=r(75215),m=r(52421),g=r(52011),f=r(58971),y=r(10661);const _=new h.Z(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1})),v=()=>{};function b(e){return e?e instanceof T?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function w(e){if(e&&e.length)return e[0]}function C(e,t,r,i){const s=Math.min(e.length-r,t.length-i);let n=0;for(;n<s&&e[r+n]===t[i+n];)n++;return n}function S(e,t,r,i){t&&t.forEach(((t,s,n)=>{e.push(t),S(e,r.call(i,t,s,n),r,i)}))}const I=new Set,E=new Set,M=new Set,x=new Map;let D=0,T=c=class extends o.Z.EventedAccessor{static isCollection(e){return null!=e&&e instanceof c}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new y.s,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:D++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof c?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return(0,f.it)(this._observable),this._items}set items(e){this._emitBeforeChanges(i.ADD)||(this._splice(0,this.length,b(e)),this._emitAfterChanges(i.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,r={removed:!1,callback:t};return e.push(r),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=v,r.removed=!0,e.splice(e.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const r=this.on(e,t);return{remove(){r.remove()}}}add(e,t){if((0,f.it)(this._observable),this._emitBeforeChanges(i.ADD))return this;const r=this.getNextIndex(t??null);return this._splice(r,0,[e]),this._emitAfterChanges(i.ADD),this}addMany(e,t=this._items.length){if((0,f.it)(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(i.ADD))return this;const r=this.getNextIndex(t);return this._splice(r,0,b(e)),this._emitAfterChanges(i.ADD),this}at(e){if((0,f.it)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,f.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return[];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(i.REMOVE),e}clone(){return(0,f.it)(this._observable),this._createNewInstance({items:this._items.map(a.d9)})}concat(...e){(0,f.it)(this._observable);const t=e.map(b);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,f.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const r=(0,l.j0)(this._splice(0,this.length)),s=r.length;for(let i=0;i<s;i++)e.call(t,r[i],i,r);this._emitAfterChanges(i.REMOVE)}every(e,t){return(0,f.it)(this._observable),this._items.every(e,t)}filter(e,t){let r;return(0,f.it)(this._observable),r=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:r})}find(e,t){return(0,f.it)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,f.it)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,f.it)(this._observable);const r=[];return S(r,this,e,t),new c(r)}forEach(e,t){return(0,f.it)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,f.it)(this._observable),this._items[e]}getNextIndex(e){(0,f.it)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,f.it)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,f.it)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,f.it)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,f.it)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,f.it)(this._observable);const r=this._items.map(e,t);return new c({items:r})}reorder(e,t=this.length-1){(0,f.it)(this._observable);const r=this.indexOf(e);if(-1!==r){if(t<0?t=0:t>=this.length&&(t=this.length-1),r!==t){if(this._emitBeforeChanges(i.MOVE))return e;this._splice(r,1),this._splice(t,0,[e]),this._emitAfterChanges(i.MOVE)}return e}}pop(){if((0,f.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=w(this._splice(this.length-1,1));return this._emitAfterChanges(i.REMOVE),e}push(...e){return(0,f.it)(this._observable),this._emitBeforeChanges(i.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(i.ADD)),this.length}reduce(e,t){(0,f.it)(this._observable);const r=this._items;return 2===arguments.length?r.reduce(e,t):r.reduce(e)}reduceRight(e,t){(0,f.it)(this._observable);const r=this._items;return 2===arguments.length?r.reduceRight(e,t):r.reduceRight(e)}remove(e){return(0,f.it)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,f.it)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(i.REMOVE))return;const t=w(this._splice(e,1));return this._emitAfterChanges(i.REMOVE),t}removeMany(e){if((0,f.it)(this._observable),!e||!e.length||this._emitBeforeChanges(i.REMOVE))return[];const t=e instanceof c?e.toArray():e,r=this._items,s=[],n=t.length;for(let e=0;e<n;e++){const i=t[e],n=r.indexOf(i);if(n>-1){const i=1+C(t,r,e+1,n+1),o=this._splice(n,i);o&&o.length>0&&s.push.apply(s,o),e+=i-1}}return this._emitAfterChanges(i.REMOVE),s}reverse(){if((0,f.it)(this._observable),this._emitBeforeChanges(i.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(i.MOVE),this}shift(){if((0,f.it)(this._observable),!this.length||this._emitBeforeChanges(i.REMOVE))return;const e=w(this._splice(0,1));return this._emitAfterChanges(i.REMOVE),e}slice(e=0,t=this.length){return(0,f.it)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,f.it)(this._observable),this._items.some(e,t)}sort(e){if((0,f.it)(this._observable),!this.length||this._emitBeforeChanges(i.MOVE))return this;const t=(0,l.j0)(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(i.MOVE),this}splice(e,t,...r){(0,f.it)(this._observable);const s=(t?i.REMOVE:0)|(r.length?i.ADD:0);if(this._emitBeforeChanges(s))return[];const n=this._splice(e,t,r)||[];return this._emitAfterChanges(s),n}toArray(){return(0,f.it)(this._observable),this._items.slice()}toJSON(){return(0,f.it)(this._observable),this.toArray()}toLocaleString(){return(0,f.it)(this._observable),this._items.toLocaleString()}toString(){return(0,f.it)(this._observable),this._items.toString()}unshift(...e){return(0,f.it)(this._observable),!e.length||this._emitBeforeChanges(i.ADD)||(this._splice(0,0,e),this._emitAfterChanges(i.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,r){const i=this._items,s=this.itemType;let n,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,u.Os)((()=>this._dispatchChange()))),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=_.acquire();t.target=this,t.cancellable=!0;for(let r=0,s=o.length;r<s;r++)n=o[r],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(r,1),i.splice(e,0,n),e+=1,r-=1,s-=1);_.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=_.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let r=0;r<t;r++)e.reset(o[r]),this.emit("after-remove",e);_.release(e)}}if(r&&r.length){if(s){const e=[];for(const t of r){const r=s.ensureType(t);null==r&&null!=t||e.push(r)}r=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),o=e===this.length;if(t||n){const s=_.acquire();s.target=this,s.cancellable=!0;const a=_.acquire();a.target=this,a.cancellable=!1;for(const l of r)t?(s.reset(l),this.emit("before-add",s),s.defaultPrevented||(o?i.push(l):i.splice(e++,0,l),this._set("length",i.length),n&&(a.reset(l),this.emit("after-add",a)))):(o?i.push(l):i.splice(e++,0,l),this._set("length",i.length),a.reset(l),this.emit("after-add",a));_.release(a),_.release(s)}else{if(o)for(const e of r)i.push(e);else i.splice(e,0,...r);this._set("length",i.length)}}return(r&&r.length||o&&o.length)&&this._notifyChangeEvent(r,o),o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const r=_.acquire();r.target=this,r.cancellable=!0,r.type=e,this.emit("before-changes",r),t=r.defaultPrevented,_.release(r)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=_.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),_.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;I.clear(),E.clear(),M.clear();for(const{added:t,removed:r}of e){if(t)if(0===M.size&&0===E.size)for(const e of t)I.add(e);else for(const e of t)E.has(e)?(M.add(e),E.delete(e)):M.has(e)||I.add(e);if(r)if(0===M.size&&0===I.size)for(const e of r)E.add(e);else for(const e of r)I.has(e)?I.delete(e):(M.delete(e),E.add(e))}const r=n.Z.acquire();I.forEach((e=>{r.push(e)}));const i=n.Z.acquire();E.forEach((e=>{i.push(e)}));const s=this._items,o=t.items,a=n.Z.acquire();if(M.forEach((e=>{o.indexOf(e)!==s.indexOf(e)&&a.push(e)})),t.listeners&&(r.length||i.length||a.length)){const e={target:this,added:r,removed:i,moved:a},s=t.listeners.length;for(let r=0;r<s;r++){const i=t.listeners[r];i.removed||i.callback.call(this,e)}}n.Z.release(r),n.Z.release(i),n.Z.release(a)}I.clear(),E.clear(),M.clear()}};T.ofType=e=>{if(!e)return c;if(x.has(e))return x.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const r in e.typeMap){const i=e.typeMap[r].prototype.declaredClass;t?t+=` | ${i}`:t=i}let r=class extends c{};return(0,s._)([(0,m.c)({Type:e,ensureType:"function"==typeof e?(0,d.se)(e):(0,d.N7)(e)})],r.prototype,"itemType",void 0),r=(0,s._)([(0,g.j)(`esri.core.Collection<${t}>`)],r),x.set(e,r),r},(0,s._)([(0,p.Cb)()],T.prototype,"length",void 0),(0,s._)([(0,p.Cb)()],T.prototype,"items",null),T=c=(0,s._)([(0,g.j)("esri.core.Collection")],T);const O=T},28576:(e,t,r)=>{r.d(t,{B:()=>u});var i=r(81153),s=r(17452),n=r(41123),o=r(7628),a=r(31263),l=r(5600),h=r(66094),c=r(25929);function u(e){const t=e?.origins??[void 0];return(r,n)=>{const u=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const n=(0,o.Oe)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,c.r)(e,t,r);return n.type===String?i:"function"==typeof n.type?new n.type({url:i}):void 0},write:{writer(t,o,l,u){if(!u||!u.resources)return"string"==typeof t?void(o[l]=(0,c.t)(t,u)):void(o[l]=t.write({},u));const g=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),f=(0,c.t)(g,{...u,verifyItemRelativeUrls:u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),y=n.type!==String&&(!(0,i.l)(this)||u&&u.origin&&this.originIdOf(r)>(0,a.M9)(u.origin)),_={object:this,propertyName:r,value:t,targetUrl:f,dest:o,targetPropertyName:l,context:u,params:e};u&&u.portalItem&&f&&!(0,s.YP)(f)?y?function(e){const{context:t,targetUrl:r,params:i,value:n,dest:o,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),c=m(n,r,t),u=(0,h.B)(c),g=(0,s.Ml)(l.path),f=i?.compress??!1;u===g?(t.resources&&d({...e,resource:l,content:c,compress:f,updates:t.resources.toUpdate}),o[a]=r):p(e)}(_):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(_):u&&u.portalItem&&(null==f||null!=(0,c.i)(f)||(0,s.jc)(f)||y)?p(_):o[l]=f}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.a;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,l.CJ)(r,e,n);for(const e in u)t[e]=u[e]}}}function p(e){const{targetUrl:t,params:i,value:o,context:a,dest:l,targetPropertyName:u}=e;if(!a.portalItem)return;const p=(0,c.p)(t),g=p?.filename??(0,n.D)(),f=i?.prefix??p?.prefix,y=m(o,t,a),_=(0,s.v_)(f,g),v=`${_}.${(0,h.B)(y)}`,b=a.portalItem.resourceFromPath(v);(0,s.jc)(t)&&a.resources&&a.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,3172))).default,{data:i}=await t(e,{responseType:"blob"});return i}(t).then((e=>{b.path=`${_}.${(0,h.B)(e)}`,l[u]=b.itemRelativeUrl})).catch((()=>{})));const w=i?.compress??!1;a.resources&&d({...e,resource:b,content:y,compress:w,updates:a.resources.toAdd}),l[u]=b.itemRelativeUrl}function d({object:e,propertyName:t,updates:r,resource:i,content:s,compress:n}){r.push({resource:i,content:s,compress:n,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function m(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},52421:(e,t,r)=>{function i(e){return(t,r)=>{t[r]=e}}r.d(t,{c:()=>i})},17445:(e,t,r)=>{r.d(t,{N1:()=>p,YP:()=>l,Z_:()=>g,gx:()=>h,nn:()=>f,on:()=>u,tX:()=>y});var i=r(91460),s=r(50758),n=r(70586),o=r(95330),a=r(26258);function l(e,t,r={}){return c(e,t,r,d)}function h(e,t,r={}){return c(e,t,r,m)}function c(e,t,r={},i){let s=null;const o=r.once?(e,r)=>{i(e)&&((0,n.hw)(s),t(e,r))}:(e,r)=>{i(e)&&t(e,r)};if(s=(0,a.aQ)(e,o,r.sync,r.equals),r.initial){const t=e();o(t,t)}return s}function u(e,t,r,o={}){let a=null,h=null,c=null;function u(){a&&h&&(h.remove(),o.onListenerRemove?.(a),a=null,h=null)}function p(e){o.once&&o.once&&(0,n.hw)(c),r(e)}const d=l(e,((e,r)=>{u(),(0,i.vT)(e)&&(a=e,h=(0,i.on)(e,t,p),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return c=(0,s.kB)((()=>{d.remove(),u()})),c}function p(e,t){return function(e,t,r){if((0,o.Hc)(r))return Promise.reject((0,o.zE)());const i=e();if(t?.(i))return Promise.resolve(i);let a=null;function l(){a=(0,n.hw)(a)}return new Promise(((i,n)=>{a=(0,s.AL)([(0,o.fu)(r,(()=>{l(),n((0,o.zE)())})),c(e,(e=>{l(),i(e)}),{sync:!1,once:!0},t??d)])}))}(e,m,t)}function d(e){return!0}function m(e){return!!e}r(87538);const g={sync:!0},f={initial:!0},y={sync:!0,initial:!0}},35463:(e,t,r)=>{r.d(t,{JE:()=>o,Nm:()=>n,rJ:()=>a}),r(80442);const i={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},s={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function n(e,t,r){const i=new Date(e.getTime());if(t&&r){const e=s[r],{getter:n,setter:o,multiplier:a}=e;if("months"===r){const e=function(e,t){const r=new Date(e,t+1,1);return r.setDate(0),r.getDate()}(i.getFullYear(),i.getMonth()+t);i.getDate()>e&&i.setDate(e)}i[o](i[n]()+t*a)}return i}function o(e,t){switch(t){case"milliseconds":return new Date(e.getTime());case"seconds":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());case"minutes":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes());case"hours":return new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());case"days":return new Date(e.getFullYear(),e.getMonth(),e.getDate());case"weeks":return new Date(e.getFullYear(),e.getMonth(),e.getDate()-e.getDay());case"months":return new Date(e.getFullYear(),e.getMonth(),1);case"years":return new Date(e.getFullYear(),0,1);case"decades":return new Date(e.getFullYear()-e.getFullYear()%10,0,1);case"centuries":return new Date(e.getFullYear()-e.getFullYear()%100,0,1);default:return new Date}}function a(e,t,r){return 0===e?0:e*i[t]/i[r]}},79235:(e,t,r)=>{r.d(t,{Z:()=>v});var i,s=r(43697),n=r(67676),o=r(35454),a=r(96674),l=r(67900),h=r(20941),c=r(5600),u=(r(75215),r(71715)),p=r(52011),d=r(30556);const m=(0,o.w)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),g=m.jsonValues.slice();(0,n.e$)(g,"orthometric");const f=(0,o.w)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let y=i=class extends a.wq{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return m.write(e,t,r)}readHeightModel(e,t,r){return m.read(e)||(r&&r.messages&&r.messages.push(function(e,t){return new h.Z("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:r})),null)}readHeightUnit(e,t,r){return f.read(e)||(r&&r.messages&&r.messages.push(_(e,{context:r})),null)}readHeightUnitService(e,t,r){return(0,l.$C)(e)||f.read(e)||(r&&r.messages&&r.messages.push(_(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,l.cM)(t);return new i({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new i;return t.read(e,{origin:"web-scene"}),t}};function _(e,t){return new h.Z("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,s._)([(0,c.Cb)({type:m.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g,default:"ellipsoidal"}}}})],y.prototype,"heightModel",void 0),(0,s._)([(0,d.c)("web-scene","heightModel")],y.prototype,"writeHeightModel",null),(0,s._)([(0,u.r)(["web-scene","service"],"heightModel")],y.prototype,"readHeightModel",null),(0,s._)([(0,c.Cb)({type:f.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:f.jsonValues,write:f.write}}}})],y.prototype,"heightUnit",void 0),(0,s._)([(0,u.r)("web-scene","heightUnit")],y.prototype,"readHeightUnit",null),(0,s._)([(0,u.r)("service","heightUnit")],y.prototype,"readHeightUnitService",null),(0,s._)([(0,c.Cb)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],y.prototype,"vertCRS",void 0),(0,s._)([(0,u.r)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],y.prototype,"readVertCRS",null),y=i=(0,s._)([(0,p.j)("esri.geometry.HeightModelInfo")],y);const v=y},9310:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var i,s=r(43697),n=r(20102),o=r(61247),a=r(70586),l=r(16453),h=r(95330),c=r(17445),u=r(5600),p=(r(75215),r(67676),r(71715)),d=r(52011),m=r(28576),g=r(87085),f=r(54295),y=r(17287),_=r(38009),v=r(16859),b=r(72965),w=r(20559),C=r(21506),S=r(51161),I=r(3172),E=r(46791),M=r(96674),x=r(17452),D=(r(66577),r(22974)),T=r(20941),O=r(30556),R=r(44547),A=r(38913);let U=i=class extends M.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,i){if(i.layer&&i.layer.spatialReference&&!i.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,R.Up)(e.spatialReference,i.layer.spatialReference))return void(i&&i.messages&&i.messages.push(new T.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:i.layer.spatialReference,context:i})));const s=new A.Z;(0,R.Wt)(e,s,i.layer.spatialReference),t[r]=s.toJSON(i)}else t[r]=e.toJSON(i);delete t[r].spatialReference}clone(){return new i({geometry:(0,D.d9)(this.geometry),type:this.type})}};(0,s._)([(0,u.Cb)({type:A.Z}),(0,m.B)()],U.prototype,"geometry",void 0),(0,s._)([(0,O.c)(["web-scene","portal-item"],"geometry")],U.prototype,"writeGeometry",null),(0,s._)([(0,u.Cb)({type:["clip","mask","replace"],nonNullable:!0}),(0,m.B)()],U.prototype,"type",void 0),U=i=(0,s._)([(0,d.j)("esri.layers.support.SceneModification")],U);const P=U;var N;let j=N=class extends((0,M.eC)(E.Z.ofType(P))){constructor(e){super(e),this.url=null}clone(){return new N({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new N;for(const i of e)r.add(P.fromJSON(i,t));return r}static async fromUrl(e,t,r){const i={url:(0,x.mN)(e),origin:"service"},s=await(0,I.default)(e,{responseType:"json",signal:(0,a.U2)(r,"signal")}),n=t.toJSON(),o=[];for(const e of s.data)o.push(P.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},i));return new N({url:e,items:o})}};(0,s._)([(0,u.Cb)({type:String})],j.prototype,"url",void 0),j=N=(0,s._)([(0,d.j)("esri.layers.support.SceneModifications")],j);const F=j;var V=r(25929);let L=class extends((0,w.Vt)((0,y.Y)((0,_.q)((0,v.I)((0,b.M)((0,l.R)((0,f.V)(g.Z)))))))){constructor(...e){super(...e),this._handles=new o.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add((0,c.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),c.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,V.f)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,a.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,h.r9)(e)}if(await this._fetchService(t),(0,a.pC)(this._modificationsSource)){const t=await F.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,a.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(w.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(w.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,s._)([(0,u.Cb)({type:String,readOnly:!0})],L.prototype,"geometryType",void 0),(0,s._)([(0,u.Cb)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,s._)([(0,u.Cb)({type:["IntegratedMeshLayer"]})],L.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],L.prototype,"type",void 0),(0,s._)([(0,u.Cb)({type:S.U4,readOnly:!0})],L.prototype,"nodePages",void 0),(0,s._)([(0,u.Cb)({type:[S.QI],readOnly:!0})],L.prototype,"materialDefinitions",void 0),(0,s._)([(0,u.Cb)({type:[S.Yh],readOnly:!0})],L.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,u.Cb)({type:[S.H3],readOnly:!0})],L.prototype,"geometryDefinitions",void 0),(0,s._)([(0,u.Cb)({readOnly:!0})],L.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,u.Cb)({type:F}),(0,m.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],L.prototype,"modifications",void 0),(0,s._)([(0,p.r)(["web-scene","portal-item"],"modifications")],L.prototype,"readModifications",null),(0,s._)([(0,u.Cb)(C.PV)],L.prototype,"elevationInfo",void 0),(0,s._)([(0,u.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),L=(0,s._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],L);const k=L},16859:(e,t,r)=>{r.d(t,{I:()=>C});var i=r(43697),s=r(68773),n=r(40330),o=r(3172),a=r(66643),l=r(20102),h=r(92604),c=r(70586),u=r(95330),p=r(17452),d=r(5600),m=(r(75215),r(67676),r(71715)),g=r(52011),f=r(30556),y=r(84230),_=r(65587),v=r(15235),b=r(86082),w=r(14661);const C=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.SC)(this.portalItem)}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new v.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,u.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,u.D_)(e)||h.Z.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _setUserPrivileges(e,t){if(!s.Z.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,u.r9)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,w.Ss)(r);let s,o;if(i)s=r.portal.url;else try{s=await(0,y.oP)(this.url,t)}catch(e){(0,u.r9)(e)}if(!s||!(0,p.Zo)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=(0,c.pC)(t)?t.signal:null;o=await(n.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,u.r9)(e)}if(!o)return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}};try{if(i?await r.reload():(r=new v.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,w.Ss)(r)}catch(e){(0,u.r9)(e)}return{features:{edit:!0,fullEdit:!1},content:{updateItem:!1}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,u.r9)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,(0,c.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=_.Z.getDefault();if(s&&s.loaded&&(0,p.Fv)(s.restUrl)===(0,p.Fv)(i))return s.user;const l=`${i}/community/self`,h=(0,c.pC)(e)?e.signal:null,u=await(0,a.q6)((0,o.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:h}));return u.ok?b.default.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||_.Z.getDefault());return r&&i&&!(0,p.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.Cb)({type:v.default})],t.prototype,"portalItem",null),(0,i._)([(0,m.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,f.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,g.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},51161:(e,t,r)=>{r.d(t,{H3:()=>y,QI:()=>u,U4:()=>l,Yh:()=>d});var i=r(43697),s=r(96674),n=r(5600),o=(r(75215),r(67676),r(36030)),a=r(52011);let l=class extends s.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,i._)([(0,n.Cb)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,n.Cb)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,n.Cb)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,a.j)("esri.layer.support.I3SNodePageDefinition")],l);let h=class extends s.wq{constructor(){super(...arguments),this.factor=1}};(0,i._)([(0,n.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],h.prototype,"id",void 0),(0,i._)([(0,n.Cb)({type:Number})],h.prototype,"factor",void 0),h=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialTexture")],h);let c=class extends s.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,i._)([(0,n.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,i._)([(0,n.Cb)({type:h})],c.prototype,"baseColorTexture",void 0),(0,i._)([(0,n.Cb)({type:h})],c.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,n.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,i._)([(0,n.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let u=class extends s.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,i._)([(0,o.J)({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),(0,i._)([(0,n.Cb)({type:Number})],u.prototype,"alphaCutoff",void 0),(0,i._)([(0,n.Cb)({type:Boolean})],u.prototype,"doubleSided",void 0),(0,i._)([(0,o.J)({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),(0,i._)([(0,n.Cb)({type:h})],u.prototype,"normalTexture",void 0),(0,i._)([(0,n.Cb)({type:h})],u.prototype,"occlusionTexture",void 0),(0,i._)([(0,n.Cb)({type:h})],u.prototype,"emissiveTexture",void 0),(0,i._)([(0,n.Cb)({type:[Number]})],u.prototype,"emissiveFactor",void 0),(0,i._)([(0,n.Cb)({type:c})],u.prototype,"pbrMetallicRoughness",void 0),u=(0,i._)([(0,a.j)("esri.layer.support.I3SMaterialDefinition")],u);let p=class extends s.wq{};(0,i._)([(0,n.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],p.prototype,"name",void 0),(0,i._)([(0,o.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],p.prototype,"format",void 0),p=(0,i._)([(0,a.j)("esri.layer.support.I3STextureFormat")],p);let d=class extends s.wq{constructor(){super(...arguments),this.atlas=!1}};(0,i._)([(0,n.Cb)({type:[p]})],d.prototype,"formats",void 0),(0,i._)([(0,n.Cb)({type:Boolean})],d.prototype,"atlas",void 0),d=(0,i._)([(0,a.j)("esri.layer.support.I3STextureSetDefinition")],d);let m=class extends s.wq{};(0,i._)([(0,o.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],m.prototype,"type",void 0),(0,i._)([(0,n.Cb)({type:Number})],m.prototype,"component",void 0),m=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryAttribute")],m);let g=class extends s.wq{};(0,i._)([(0,o.J)({draco:"draco"})],g.prototype,"encoding",void 0),(0,i._)([(0,n.Cb)({type:[String]})],g.prototype,"attributes",void 0),g=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryCompressedAttributes")],g);let f=class extends s.wq{constructor(){super(...arguments),this.offset=0}};(0,i._)([(0,n.Cb)({type:Number})],f.prototype,"offset",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"position",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"normal",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"uv0",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"color",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"uvRegion",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"featureId",void 0),(0,i._)([(0,n.Cb)({type:m})],f.prototype,"faceRange",void 0),(0,i._)([(0,n.Cb)({type:g})],f.prototype,"compressedAttributes",void 0),f=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryBuffer")],f);let y=class extends s.wq{};(0,i._)([(0,o.J)({triangle:"triangle"})],y.prototype,"topology",void 0),(0,i._)([(0,n.Cb)()],y.prototype,"geometryBuffers",void 0),y=(0,i._)([(0,a.j)("esri.layer.support.I3SGeometryDefinition")],y)},66094:(e,t,r)=>{r.d(t,{B:()=>s});var i=r(17452);function s(e){return n[function(e){return e instanceof Blob?e.type:function(e){const t=(0,i.Ml)(e);return l[t]||o}(e.url)}(e)]||a}const n={},o="text/plain",a=n[o],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in l)n[l[e]]=e}}]);