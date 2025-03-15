/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$3=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$1),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$1)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:r$3,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),y$1={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=false),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$3(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(this[t],s))return;this.P(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$ET());}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),true===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$ET(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t) true!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i);}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU();}catch(s){throw t=false,this._$EU(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n$1=`<${o$1}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.2.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let r$1 = class r extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(s,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T}};r$1._$litElement$=true,r$1["finalized"]=true,globalThis.litElementHydrateSupport?.({LitElement:r$1});const i=globalThis.litElementPolyfillSupport;i?.({LitElement:r$1});(globalThis.litElementVersions??=[]).push("4.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:true,type:String,converter:u$1,reflect:false,hasChanged:f$1},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:true}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

const styles = i$3 `
  :host {
    --primary-color: var(--ha-card-header-color, var(--primary-text-color));
    --secondary-color: var(--secondary-text-color);
    --background-color: var(
      --ha-card-background,
      var(--card-background-color, white)
    );
    --border-radius: var(--ha-card-border-radius, 12px);
  }

  .usage-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .content-column {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem 1.5rem 1.5rem;
  }

  .device-column {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .device-illustration {
    width: 200px;
    height: auto;
    color: var(--primary-text-color);
    opacity: 0.2;
    right: -32px;
    position: relative;
  }

  .usage-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .usage-stats {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .usage-stats .label {
    font-size: 0.875rem;
    color: var(--secondary-color);
  }

  .usage-stats .value {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .last-usage {
    display: flex;
    flex-direction: column;
  }

  .last-usage .text {
    font-size: 0.875rem;
    color: var(--primary-color);
    line-height: 1.5;
  }

  .last-usage .text strong {
    font-weight: 600;
    color: var(--primary-color);
  }

  .action-wrapper {
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    .usage-section {
      grid-template-columns: 1fr;
    }

    .device-column {
      order: -1;
    }

    .device-illustration {
      width: 150px;
    }
  }
`;

// Device Types
var PetkitDeviceType;
(function (PetkitDeviceType) {
    PetkitDeviceType["LITTER_BOX"] = "litter_box";
    PetkitDeviceType["FEEDER"] = "feeder";
    PetkitDeviceType["WATER_FOUNTAIN"] = "water_fountain";
})(PetkitDeviceType || (PetkitDeviceType = {}));

// Map of device models to their SVG illustrations
const deviceIllustrations = {
    puramax_2: () => x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="213"
      height="224"
      fill="none"
      viewBox="0 0 213 224"
      class="device-illustration"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M9.383 154.794s-1.466-4.212-2.316-11.296V73.461s1.252-26.058 21.317-40.443c20.064-14.386 49.137-13.14 73.953-12.873 24.816.27 32.071 4.424 37.151 8.379v79.786s.429 27.693-7.966 37.276c-6.085 6.947-14.835 8.633-31.747 9.192l-90.392.016Zm75.739 5.649H72.384c-.57 0-1.033-.462-1.033-1.034v-.344c0-.571.463-1.034 1.033-1.034h12.738c.57 0 1.033.463 1.033 1.034v.344c0 .572-.463 1.034-1.033 1.034Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M7.067 143.498H5.892l-2.063-2.705V76.075L5.892 73.4l1.175.062m-3.238 2.613s-6.365 29.607 0 64.718m5.554 14.001H5.948s-3.717 9.043-2.205 21.247c1.514 12.204 6.352 22.723 15.108 27.13h177.272s15.025-3.288 15.877-34.336l-3.263-60.525s-.822-32.227-7.404-49.503c-6.582-17.278-23.036-36.286-56.903-36.518l-4.833 2.841v3.394"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M144.43 22.29v86.019s.966 33.095-6.236 41.913c-7.202 8.816-12.275 13.346-38.601 13.346H3.744m135.744-55.258h69.249"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M92.33 146.698H65.32c-14.64 0-26.507-8.126-26.507-26.507V77.759c0-19.09 11.867-28.804 26.506-28.804H92.33c14.639 0 26.507 9.44 26.507 28.804v42.432c0 16.772-11.868 26.507-26.507 26.507Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M90.41 140.844H67.24c-14.04 0-22.74-7.152-22.74-23.331v-37.35c0-16.804 10.181-25.355 22.74-25.355h23.17c12.558 0 22.739 8.31 22.739 25.355v37.35c0 14.762-8.483 23.331-22.738 23.331Zm-45.94-36.989h68.679m54.004 24.558H152.43a3.607 3.607 0 0 1-3.608-3.607v-8.334a3.607 3.607 0 0 1 3.608-3.607h14.723a3.607 3.607 0 0 1 3.608 3.607v8.334a3.607 3.607 0 0 1-3.608 3.607Z"
      />
      <path
        stroke="currentColor"
        stroke-width="1.147"
        d="M167.238 126.501h-7.978a1.872 1.872 0 0 1-1.873-1.873v-7.978c0-1.035.838-1.873 1.873-1.873h7.978c1.034 0 1.873.838 1.873 1.873v7.978a1.873 1.873 0 0 1-1.873 1.873Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M154.605 119.945h-2.588a1.29 1.29 0 0 1-1.29-1.291v-2.587a1.29 1.29 0 0 1 1.29-1.291h2.588c.713 0 1.291.578 1.291 1.291v2.587c0 .713-.578 1.291-1.291 1.291Zm0 6.556h-2.588a1.29 1.29 0 0 1-1.29-1.291v-2.587a1.29 1.29 0 0 1 1.29-1.291h2.588c.713 0 1.291.578 1.291 1.291v2.587c0 .713-.578 1.291-1.291 1.291Zm1.873 42.333H3.315m197.648-38.589H175.83s-11.279-.288-15.259 5.471c-4.294 6.209-3.717 13.026-3.717 13.026l-.375 20.092.38 21.875s-.341 11.389 11.44 11.416h23.928s9.273-1.572 13.578-13.142c0 0 2.985-6.376 3.507-20.149l-1.483-23.896s-.783-9.097-2.272-12.285c-.549-1.175-1.061-2.408-4.594-2.408Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M181.075 184.017h-1.742a5.22 5.22 0 0 1-5.22-5.221v-25.998a5.22 5.22 0 0 1 5.22-5.221h1.742a5.221 5.221 0 0 1 5.221 5.221v25.998a5.222 5.222 0 0 1-5.221 5.221Zm-12.202-29.223h-4.371a2.706 2.706 0 0 1-2.705-2.705v-.904a2.706 2.706 0 0 1 2.705-2.705h4.371a2.705 2.705 0 0 1 2.706 2.705v.904a2.705 2.705 0 0 1-2.706 2.705Z"
      />
    </svg>
  `,
    pura_x: () => x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="213"
      height="224"
      fill="none"
      viewBox="0 0 213 224"
      class="device-illustration"
    >
      <!-- Placeholder for Pura X illustration -->
      <rect
        x="10"
        y="10"
        width="193"
        height="204"
        rx="12"
        stroke="currentColor"
        stroke-width="1.147"
        fill="none"
      />
      <text
        x="106.5"
        y="112"
        text-anchor="middle"
        fill="currentColor"
        style="font: 16px sans-serif"
      >
        Pura X
      </text>
    </svg>
  `,
    // Add more models here as needed
};
function renderDeviceIllustration(model) {
    // Default to Puramax 2 if model is not specified or not found
    const illustrationFn = deviceIllustrations[(model === null || model === void 0 ? void 0 : model.toLowerCase()) || ""] ||
        deviceIllustrations.puramax_2;
    return illustrationFn();
}
function renderUsageSection(entities, devicePrefix, handleClick, model) {
    var _a, _b, _c, _d;
    // Get the last used time from attributes, with proper fallback
    const lastUsedTime = (_b = (_a = entities.lastUsedBy) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.last_used_time;
    const lastUsedBy = ((_c = entities.lastUsedBy) === null || _c === void 0 ? void 0 : _c.state) || "Unknown";
    const renderLastUsage = () => {
        // If we have a time but no known user, just show the time
        if (lastUsedBy === "Unknown" && lastUsedTime) {
            return x `Last used at ${lastUsedTime}`;
        }
        // If we have both user and time
        if (lastUsedTime) {
            return x `Last used by <strong>${lastUsedBy}</strong> at ${lastUsedTime}`;
        }
        // If we have neither, show a default message
        return x `No usage recorded`;
    };
    return x `
    <div class="usage-section">
      <div class="content-column">
        <div class="usage-info">
          <div class="usage-stats">
            <span class="label">Toilet Usage</span>
            <span class="value">${((_d = entities.timesUsed) === null || _d === void 0 ? void 0 : _d.state) || "0"} times</span>
          </div>
          <div class="last-usage">
            <span class="text">${renderLastUsage()}</span>
          </div>
          <div class="action-wrapper">
            <ha-button
              raised
              .label=${"Clean Now"}
              data-entity="button.${devicePrefix}_scoop"
              @click=${handleClick}
            >
              <ha-icon
                icon="mdi:broom"
                slot="icon"
                style="width: 20px; height: 20px;"
              ></ha-icon>
            </ha-button>
          </div>
        </div>
      </div>
      <div class="device-column">${renderDeviceIllustration(model)}</div>
    </div>
  `;
}
function renderLitterBox(entities, title, devicePrefix, handleToggle, handleClick, model) {
    return x `
    <ha-card>
      ${renderUsageSection(entities, devicePrefix, handleClick, model)}
    </ha-card>
  `;
}

function renderFeeder(entities, title, devicePrefix, handleToggle, handleClick) {
    var _a, _b;
    return x `
    <ha-card>
      <h1 class="card-header">
        ${title}
        <div
          class="status ${((_a = entities.deviceStatus) === null || _a === void 0 ? void 0 : _a.state) === "online"
        ? "working"
        : ""}"
        >
          ${((_b = entities.deviceStatus) === null || _b === void 0 ? void 0 : _b.state) || "unknown"}
        </div>
      </h1>

      <div class="card-content">
        ${renderWarnings$1(entities)} ${renderInfo$1(entities)}
        ${renderControls(entities, devicePrefix, handleToggle, handleClick)}
      </div>
    </ha-card>
  `;
}
function renderWarnings$1(entities) {
    var _a, _b, _c, _d;
    const warnings = [];
    if (((_a = entities.foodLevelHopper2) === null || _a === void 0 ? void 0 : _a.state) === "on") {
        warnings.push("Low Food Level in Hopper 2");
    }
    if (((_b = entities.batteryLevel) === null || _b === void 0 ? void 0 : _b.state) &&
        parseInt(entities.batteryLevel.state) < 20) {
        warnings.push("Low Battery");
    }
    if (((_c = entities.desiccantLeftDays) === null || _c === void 0 ? void 0 : _c.state) &&
        parseInt(entities.desiccantLeftDays.state) < 5) {
        warnings.push("Replace Desiccant Soon");
    }
    if (((_d = entities.error) === null || _d === void 0 ? void 0 : _d.state) && entities.error.state !== "None") {
        warnings.push(`Error: ${entities.error.state}`);
    }
    if (warnings.length === 0)
        return x ``;
    return x `
    <div class="warnings">
      ${warnings.map((warning) => x `<div class="warning">${warning}</div>`)}
    </div>
  `;
}
function renderInfo$1(entities) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return x `
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Food Bowl</span>
        <span class="value">${((_a = entities.foodBowlFill) === null || _a === void 0 ? void 0 : _a.state) || "unknown"}</span>
      </div>
      <div class="info-item">
        <span class="label">Battery</span>
        <span class="value">${((_b = entities.batteryLevel) === null || _b === void 0 ? void 0 : _b.state) || "unknown"}%</span>
      </div>
      <div class="info-item">
        <span class="label">Times Eaten</span>
        <span class="value">${((_c = entities.timesEaten) === null || _c === void 0 ? void 0 : _c.state) || "0"}</span>
      </div>
      <div class="info-item">
        <span class="label">Desiccant</span>
        <span class="value"
          >${((_d = entities.desiccantLeftDays) === null || _d === void 0 ? void 0 : _d.state) || "0"} days</span
        >
      </div>
    </div>

    <div class="section-title">Dispensing Stats</div>
    <div class="stats-grid">
      <div class="stats-item">
        <div class="stats-header">Hopper 1</div>
        <div class="stats-row">
          <span>Manual:</span>
          <span>${((_e = entities.manuallyDispensedHopper1) === null || _e === void 0 ? void 0 : _e.state) || "0"}</span>
        </div>
        <div class="stats-row">
          <span>Planned:</span>
          <span>${((_f = entities.plannedDispensedHopper1) === null || _f === void 0 ? void 0 : _f.state) || "0"}</span>
        </div>
      </div>
      <div class="stats-item">
        <div class="stats-header">Hopper 2</div>
        <div class="stats-row">
          <span>Manual:</span>
          <span>${((_g = entities.manuallyDispensedHopper2) === null || _g === void 0 ? void 0 : _g.state) || "0"}</span>
        </div>
        <div class="stats-row">
          <span>Planned:</span>
          <span>${((_h = entities.plannedDispensedHopper2) === null || _h === void 0 ? void 0 : _h.state) || "0"}</span>
        </div>
      </div>
    </div>
  `;
}
function renderControls(entities, devicePrefix, handleToggle, handleClick) {
    var _a, _b, _c;
    return x `
    <div class="section-title">Quick Controls</div>
    <div class="controls">
      <div class="switches">
        <div class="switch">
          <span>Child Lock</span>
          <ha-switch
            .checked=${((_a = entities.childLock) === null || _a === void 0 ? void 0 : _a.state) === "on"}
            data-entity="switch.${devicePrefix}_child_lock"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Camera</span>
          <ha-switch
            .checked=${((_b = entities.camera) === null || _b === void 0 ? void 0 : _b.state) === "on"}
            data-entity="switch.${devicePrefix}_camera"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Light</span>
          <ha-switch
            .checked=${((_c = entities.indicatorLight) === null || _c === void 0 ? void 0 : _c.state) === "on"}
            data-entity="switch.${devicePrefix}_indicator_light"
            @change=${handleToggle}
          ></ha-switch>
        </div>
      </div>

      <div class="buttons">
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_food_replenished"
          @click=${handleClick}
        >
          Food Replenished
        </mwc-button>
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_reset_desiccant"
          @click=${handleClick}
        >
          Reset Desiccant
        </mwc-button>
      </div>
    </div>
  `;
}

function renderWaterFountain(entities, title) {
    var _a, _b, _c;
    return x `
    <ha-card>
      <h1 class="card-header">
        ${title}
        <div
          class="status ${((_a = entities.onAcPower) === null || _a === void 0 ? void 0 : _a.state) === "on" ? "working" : ""}"
        >
          ${((_b = entities.onAcPower) === null || _b === void 0 ? void 0 : _b.state) === "on" ? "Plugged In" : "On Battery"}
        </div>
      </h1>

      <div class="card-content">
        ${renderWarnings(entities)} ${renderInfo(entities)}
        <div class="last-update">
          Last Update: ${((_c = entities.lastUpdate) === null || _c === void 0 ? void 0 : _c.state) || "unknown"}
        </div>
      </div>
    </ha-card>
  `;
}
function renderWarnings(entities) {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = entities.lowBattery) === null || _a === void 0 ? void 0 : _a.state) !== "on" &&
        ((_b = entities.waterLackWarning) === null || _b === void 0 ? void 0 : _b.state) !== "on" &&
        ((_c = entities.replaceFilter) === null || _c === void 0 ? void 0 : _c.state) !== "on") {
        return x ``;
    }
    return x `
    <div class="warnings">
      ${((_d = entities.lowBattery) === null || _d === void 0 ? void 0 : _d.state) === "on"
        ? x `<div class="warning">Low Battery!</div>`
        : ""}
      ${((_e = entities.waterLackWarning) === null || _e === void 0 ? void 0 : _e.state) === "on"
        ? x `<div class="warning">Water Level Low!</div>`
        : ""}
      ${((_f = entities.replaceFilter) === null || _f === void 0 ? void 0 : _f.state) === "on"
        ? x `<div class="warning">Replace Filter!</div>`
        : ""}
    </div>
  `;
}
function renderInfo(entities) {
    var _a, _b, _c, _d, _e;
    return x `
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Battery</span>
        <span class="value">${((_a = entities.battery) === null || _a === void 0 ? void 0 : _a.state) || "unknown"}%</span>
        <span class="sub-value"
          >${((_b = entities.onAcPower) === null || _b === void 0 ? void 0 : _b.state) === "on"
        ? "Charging"
        : "On Battery"}</span
        >
      </div>
      <div class="info-item">
        <span class="label">Filter Life</span>
        <span class="value">${((_c = entities.filterRemaining) === null || _c === void 0 ? void 0 : _c.state) || "0"}%</span>
      </div>
      <div class="info-item">
        <span class="label">Drink Times</span>
        <span class="value">${((_d = entities.drinkTimes) === null || _d === void 0 ? void 0 : _d.state) || "0"}</span>
      </div>
      <div class="info-item">
        <span class="label">Purified Water</span>
        <span class="value">${((_e = entities.purifiedWater) === null || _e === void 0 ? void 0 : _e.state) || "0"}L</span>
      </div>
    </div>
  `;
}

console.info("%c PETKIT-CARD %c 1.0.0 ", "color: white; background: #555; font-weight: 700;", "color: white; background: #1976d2; font-weight: 700;");
let PetkitCard = class PetkitCard extends r$1 {
    static getStubConfig() {
        return {
            device_type: PetkitDeviceType.LITTER_BOX,
            device_prefix: "litter_box",
            title: "Petkit Device",
        };
    }
    setConfig(config) {
        if (!config.device_prefix) {
            throw new Error("Please define a device_prefix");
        }
        if (!Object.values(PetkitDeviceType).includes(config.device_type)) {
            throw new Error("Invalid device_type. Must be one of: " +
                Object.values(PetkitDeviceType).join(", "));
        }
        this.config = Object.assign({ type: "custom:petkit-card", title: "Petkit Device" }, config);
    }
    getEntityState(entityId) {
        var _a;
        const state = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.states[entityId];
        return state ? state : undefined;
    }
    handleServiceCall(domain, service, entityId) {
        if (!this.hass || !entityId)
            return;
        this.hass.callService(domain, service, {
            entity_id: entityId,
        });
    }
    handleClick(ev) {
        const button = ev.currentTarget;
        const entity = button.getAttribute("data-entity");
        if (entity) {
            this.handleServiceCall("button", "press", entity);
        }
    }
    handleToggle(ev) {
        const switchEl = ev.currentTarget;
        const entity = switchEl.getAttribute("data-entity");
        if (entity) {
            const currentState = this.hass.states[entity];
            const newState = currentState.state === "on" ? "off" : "on";
            this.handleServiceCall("switch", "turn_" + newState, entity);
        }
    }
    getLitterBoxEntities() {
        var _a;
        const prefix = this.config.device_prefix || "";
        return {
            deviceStatus: this.getEntityState(`sensor.${prefix}_device_status`),
            litterLevel: this.getEntityState(`sensor.${prefix}_litter_level`),
            timesUsed: this.getEntityState(`sensor.${prefix}_times_used`),
            lastUsedBy: this.getEntityState(`sensor.${prefix}_last_used_by`),
            deodorantDays: this.getEntityState(`sensor.${prefix}_deodorant_left_days`),
            wastebinFilled: this.getEntityState(`binary_sensor.${prefix}_wastebin_filled`),
            sandLack: this.getEntityState(`binary_sensor.${prefix}_sand_lack`),
            deodorizerLack: this.getEntityState(`binary_sensor.${prefix}_deodorizer_liquid_lack`),
            autoclean: this.getEntityState(`switch.${prefix}_auto_clean`),
            power: this.getEntityState(`switch.${prefix}_power`),
            light: this.getEntityState(`switch.${prefix}_light`),
            pets: ((_a = this.config.pets) === null || _a === void 0 ? void 0 : _a.reduce((acc, pet) => {
                acc[pet.name] = {
                    name: pet.name,
                    entities: {
                        lastLitterUsed: this.getEntityState(`sensor.${pet.prefix}_last_litter_used`),
                        lastUseDate: this.getEntityState(`sensor.${pet.prefix}_last_use_date`),
                        lastUseDuration: this.getEntityState(`sensor.${pet.prefix}_last_use_duration`),
                        lastWeightMeasurement: this.getEntityState(`sensor.${pet.prefix}_last_weight_measurement`),
                    },
                };
                return acc;
            }, {})) || {},
        };
    }
    getWaterFountainEntities() {
        const prefix = this.config.device_prefix || "";
        return {
            lowBattery: this.getEntityState(`binary_sensor.${prefix}_low_battery`),
            onAcPower: this.getEntityState(`binary_sensor.${prefix}_on_ac_power`),
            replaceFilter: this.getEntityState(`binary_sensor.${prefix}_replace_filter`),
            waterLackWarning: this.getEntityState(`binary_sensor.${prefix}_water_lack_warning`),
            battery: this.getEntityState(`sensor.${prefix}_battery`),
            drinkTimes: this.getEntityState(`sensor.${prefix}_drink_times`),
            energy: this.getEntityState(`sensor.${prefix}_energy`),
            filterRemaining: this.getEntityState(`sensor.${prefix}_filter_remaining`),
            lastBleConnection: this.getEntityState(`sensor.${prefix}_last_ble_connection`),
            lastUpdate: this.getEntityState(`sensor.${prefix}_last_update`),
            purifiedWater: this.getEntityState(`sensor.${prefix}_purified_water`),
        };
    }
    getFeederEntities() {
        const prefix = this.config.device_prefix || "";
        return {
            deviceStatus: this.getEntityState(`sensor.${prefix}_device_status`),
            error: this.getEntityState(`sensor.${prefix}_error`),
            batteryLevel: this.getEntityState(`sensor.${prefix}_battery_level`),
            foodBowlFill: this.getEntityState(`sensor.${prefix}_food_bowl_fill`),
            timesDispensed: this.getEntityState(`sensor.${prefix}_times_dispensed`),
            timesEaten: this.getEntityState(`sensor.${prefix}_times_eaten`),
            averageEatingTime: this.getEntityState(`sensor.${prefix}_average_eating_time`),
            desiccantLeftDays: this.getEntityState(`sensor.${prefix}_desiccant_left_days`),
            careEndSubscription: this.getEntityState(`sensor.${prefix}_care_end_subscription`),
            rssi: this.getEntityState(`sensor.${prefix}_rssi`),
            foodLevelHopper2: this.getEntityState(`binary_sensor.${prefix}_food_level_hopper_2`),
            manuallyDispensedHopper1: this.getEntityState(`sensor.${prefix}_manually_dispensed_hopper_1`),
            manuallyDispensedHopper2: this.getEntityState(`sensor.${prefix}_manually_dispensed_hopper_2`),
            plannedDispensedHopper1: this.getEntityState(`sensor.${prefix}_planned_dispensed_hopper_1`),
            plannedDispensedHopper2: this.getEntityState(`sensor.${prefix}_planned_dispensed_hopper_2`),
            totalDispensedHopper1: this.getEntityState(`sensor.${prefix}_total_dispensed_hopper_1`),
            totalDispensedHopper2: this.getEntityState(`sensor.${prefix}_total_dispensed_hopper_2`),
            totalPlannedHopper1: this.getEntityState(`sensor.${prefix}_total_planned_hopper_1`),
            totalPlannedHopper2: this.getEntityState(`sensor.${prefix}_total_planned_hopper_2`),
            volume: this.getEntityState(`number.${prefix}_volume`),
            iaEatDetectionSensitivity: this.getEntityState(`select.${prefix}_ia_eat_detection_sensitivity`),
            iaPetDetectionSensitivity: this.getEntityState(`select.${prefix}_ia_pet_detection_sensitivity`),
            moveDetectionSensitivity: this.getEntityState(`select.${prefix}_move_detection_sensitivity`),
            surplusControlLevel: this.getEntityState(`select.${prefix}_surplus_control_level`),
            camera: this.getEntityState(`switch.${prefix}_camera`),
            childLock: this.getEntityState(`switch.${prefix}_child_lock`),
            displayTimestamp: this.getEntityState(`switch.${prefix}_display_timestamp`),
            feedSound: this.getEntityState(`switch.${prefix}_feed_sound`),
            indicatorLight: this.getEntityState(`switch.${prefix}_indicator_light`),
            microphone: this.getEntityState(`switch.${prefix}_microphone`),
            nightVision: this.getEntityState(`switch.${prefix}_night_vision`),
            petTracking: this.getEntityState(`switch.${prefix}_pet_tracking`),
            shortageAlarm: this.getEntityState(`switch.${prefix}_shortage_alarm`),
            surplusControl: this.getEntityState(`switch.${prefix}_surplus_control`),
            systemSound: this.getEntityState(`switch.${prefix}_system_sound`),
            voiceDispense: this.getEntityState(`switch.${prefix}_voice_dispense`),
            notifOnDesiccantChangeNeed: this.getEntityState(`switch.${prefix}_notif_on_desiccant_change_need`),
            notifOnDispense: this.getEntityState(`switch.${prefix}_notif_on_dispense`),
            notifOnLowBattery: this.getEntityState(`switch.${prefix}_notif_on_low_battery`),
            notifOnMove: this.getEntityState(`switch.${prefix}_notif_on_move`),
            notifOnPetEat: this.getEntityState(`switch.${prefix}_notif_on_pet_eat`),
            notifOnPetVisit: this.getEntityState(`switch.${prefix}_notif_on_pet_visit`),
            notifOnRefillNeed: this.getEntityState(`switch.${prefix}_notif_on_refill_need`),
            manualFeedHopper1: this.getEntityState(`text.${prefix}_manual_feed_hopper_1`),
            manualFeedHopper2: this.getEntityState(`text.${prefix}_manual_feed_hopper_2`),
        };
    }
    render() {
        if (!this.config || !this.hass) {
            return x `
        <ha-card>
          <div class="card-content">
            <div class="not-found">Configuration Error</div>
          </div>
        </ha-card>
      `;
        }
        switch (this.config.device_type) {
            case PetkitDeviceType.LITTER_BOX:
                return renderLitterBox(this.getLitterBoxEntities(), this.config.title, this.config.device_prefix, this.handleToggle.bind(this), this.handleClick.bind(this), this.config.model);
            case PetkitDeviceType.FEEDER:
                return renderFeeder(this.getFeederEntities(), this.config.title, this.config.device_prefix, this.handleToggle.bind(this), this.handleClick.bind(this));
            case PetkitDeviceType.WATER_FOUNTAIN:
                return renderWaterFountain(this.getWaterFountainEntities(), this.config.title);
            default:
                return x `
          <ha-card>
            <div class="card-content">
              <div class="not-found">Unsupported device type</div>
            </div>
          </ha-card>
        `;
        }
    }
    static get styles() {
        return styles;
    }
};
__decorate([
    n({ attribute: false })
], PetkitCard.prototype, "hass", void 0);
__decorate([
    n({ type: Object })
], PetkitCard.prototype, "config", void 0);
PetkitCard = __decorate([
    t("petkit-card")
], PetkitCard);

export { PetkitCard };
//# sourceMappingURL=petkit-card.js.map
