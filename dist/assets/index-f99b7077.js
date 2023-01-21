(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Id(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Oy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ny=function(n){const e=Id(n);return Ed.encodeByteArray(e,!0)},Ci=function(n){return Ny(n).replace(/\./g,"")},bd=function(n){try{return Ed.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Sd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function My(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ad(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Uy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function By(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=()=>By().__FIREBASE_DEFAULTS__,jy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$y=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bd(n[1]);return e&&JSON.parse(e)},Lc=()=>{try{return Vy()||jy()||$y()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cd=n=>{var e,t;return(t=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qy=n=>{const e=Cd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zy=()=>{var n;return(n=Lc())===null||n===void 0?void 0:n.config},Dd=n=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ci(JSON.stringify(t)),Ci(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ky,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Wy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pt(s,a,r)}}function Wy(n,e){return n.replace(Qy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qy=/\{\$([^}]+)}/g;function Yy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function as(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(yl(i)&&yl(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function yl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Br(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xy(n,e){const t=new Jy(n,e);return t.subscribe.bind(t)}class Jy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=sa),s.error===void 0&&(s.error=sa),s.complete===void 0&&(s.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=1e3,t_=2,n_=4*60*60*1e3,r_=.5;function _l(n,e=e_,t=t_){const r=e*Math.pow(t,n),s=Math.round(r_*r*(Math.random()-.5)*2);return Math.min(n_,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){return n&&n._delegate?n._delegate:n}class dt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o_(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i_(n){return n===wn?void 0:n}function o_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const c_={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},u_=j.INFO,l_={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},h_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=l_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=u_,this._logHandler=h_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const d_=(n,e)=>e.some(t=>n instanceof t);let vl,wl;function f_(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p_(){return wl||(wl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rd=new WeakMap,Ma=new WeakMap,xd=new WeakMap,ia=new WeakMap,Oc=new WeakMap;function m_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Xt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rd.set(t,n)}).catch(()=>{}),Oc.set(e,n),e}function g_(n){if(Ma.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ma.set(n,e)}let Fa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ma.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function y_(n){Fa=n(Fa)}function __(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oa(this),e,...t);return xd.set(r,e.sort?e.sort():[e]),Xt(r)}:p_().includes(n)?function(...e){return n.apply(oa(this),e),Xt(Rd.get(this))}:function(...e){return Xt(n.apply(oa(this),e))}}function v_(n){return typeof n=="function"?__(n):(n instanceof IDBTransaction&&g_(n),d_(n,f_())?new Proxy(n,Fa):n)}function Xt(n){if(n instanceof IDBRequest)return m_(n);if(ia.has(n))return ia.get(n);const e=v_(n);return e!==n&&(ia.set(n,e),Oc.set(e,n)),e}const oa=n=>Oc.get(n);function Ld(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const w_=["get","getKey","getAll","getAllKeys","count"],T_=["put","add","delete","clear"],aa=new Map;function Tl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=T_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||w_.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return aa.set(e,i),i}y_(n=>({...n,get:(e,t,r)=>Tl(e,t)||n.get(e,t,r),has:(e,t)=>!!Tl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(E_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function E_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ua="@firebase/app",Il="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new uo("@firebase/app"),b_="@firebase/app-compat",S_="@firebase/analytics-compat",k_="@firebase/analytics",A_="@firebase/app-check-compat",C_="@firebase/app-check",D_="@firebase/auth",R_="@firebase/auth-compat",x_="@firebase/database",L_="@firebase/database-compat",O_="@firebase/functions",N_="@firebase/functions-compat",P_="@firebase/installations",M_="@firebase/installations-compat",F_="@firebase/messaging",U_="@firebase/messaging-compat",B_="@firebase/performance",V_="@firebase/performance-compat",j_="@firebase/remote-config",$_="@firebase/remote-config-compat",q_="@firebase/storage",z_="@firebase/storage-compat",H_="@firebase/firestore",G_="@firebase/firestore-compat",K_="firebase",W_="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="[DEFAULT]",Q_={[Ua]:"fire-core",[b_]:"fire-core-compat",[k_]:"fire-analytics",[S_]:"fire-analytics-compat",[C_]:"fire-app-check",[A_]:"fire-app-check-compat",[D_]:"fire-auth",[R_]:"fire-auth-compat",[x_]:"fire-rtdb",[L_]:"fire-rtdb-compat",[O_]:"fire-fn",[N_]:"fire-fn-compat",[P_]:"fire-iid",[M_]:"fire-iid-compat",[F_]:"fire-fcm",[U_]:"fire-fcm-compat",[B_]:"fire-perf",[V_]:"fire-perf-compat",[j_]:"fire-rc",[$_]:"fire-rc-compat",[q_]:"fire-gcs",[z_]:"fire-gcs-compat",[H_]:"fire-fst",[G_]:"fire-fst-compat","fire-js":"fire-js",[K_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map,Va=new Map;function Y_(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(Va.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Va.set(e,n);for(const t of Di.values())Y_(t,n);return!0}function zn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jt=new qn("app","Firebase",X_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=W_;function Od(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ba,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(t||(t=zy()),!t)throw Jt.create("no-options");const i=Di.get(s);if(i){if(as(t,i.options)&&as(r,i.config))return i;throw Jt.create("duplicate-app",{appName:s})}const o=new a_(s);for(const c of Va.values())o.addComponent(c);const a=new J_(t,r,o);return Di.set(s,a),a}function Nc(n=Ba){const e=Di.get(n);if(!e&&n===Ba)return Od();if(!e)throw Jt.create("no-app",{appName:n});return e}function rt(n,e,t){var r;let s=(r=Q_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}It(new dt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-heartbeat-database",ev=1,cs="firebase-heartbeat-store";let ca=null;function Nd(){return ca||(ca=Ld(Z_,ev,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(cs)}}}).catch(n=>{throw Jt.create("idb-open",{originalErrorMessage:n.message})})),ca}async function tv(n){try{return(await Nd()).transaction(cs).objectStore(cs).get(Pd(n))}catch(e){if(e instanceof pt)Pn.warn(e.message);else{const t=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}}async function El(n,e){try{const r=(await Nd()).transaction(cs,"readwrite");return await r.objectStore(cs).put(e,Pd(n)),r.done}catch(t){if(t instanceof pt)Pn.warn(t.message);else{const r=Jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}}function Pd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1024,rv=30*24*60*60*1e3;class sv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ov(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=rv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bl(),{heartbeatsToSend:t,unsentEntries:r}=iv(this._heartbeatsCache.heartbeats),s=Ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bl(){return new Date().toISOString().substring(0,10)}function iv(n,e=nv){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Sl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ov{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kd()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return El(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sl(n){return Ci(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){It(new dt("platform-logger",e=>new I_(e),"PRIVATE")),It(new dt("heartbeat",e=>new sv(e),"PRIVATE")),rt(Ua,Il,n),rt(Ua,Il,"esm2017"),rt("fire-js","")}av("");var cv="firebase",uv="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(cv,uv,"app");const Md="@firebase/installations",Pc="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=1e4,Ud=`w:${Pc}`,Bd="FIS_v2",lv="https://firebaseinstallations.googleapis.com/v1",hv=60*60*1e3,dv="installations",fv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Mn=new qn(dv,fv,pv);function Vd(n){return n instanceof pt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd({projectId:n}){return`${lv}/projects/${n}/installations`}function $d(n){return{token:n.token,requestStatus:2,expiresIn:gv(n.expiresIn),creationTime:Date.now()}}async function qd(n,e){const r=(await e.json()).error;return Mn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function mv(n,{refreshToken:e}){const t=zd(n);return t.append("Authorization",yv(e)),t}async function Hd(n){const e=await n();return e.status>=500&&e.status<600?n():e}function gv(n){return Number(n.replace("s","000"))}function yv(n){return`${Bd} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=jd(n),s=zd(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Bd,appId:n.appId,sdkVersion:Ud},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Hd(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:$d(u.authToken)}}else throw await qd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=/^[cdef][\w-]{21}$/,ja="";function Tv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Iv(n);return wv.test(t)?t:ja}catch{return ja}}function Iv(n){return vv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Map;function Wd(n,e){const t=lo(n);Qd(t,e),Ev(t,e)}function Qd(n,e){const t=Kd.get(n);if(t)for(const r of t)r(e)}function Ev(n,e){const t=bv();t&&t.postMessage({key:n,fid:e}),Sv()}let In=null;function bv(){return!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=n=>{Qd(n.data.key,n.data.fid)}),In}function Sv(){Kd.size===0&&In&&(In.close(),In=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="firebase-installations-database",Av=1,Fn="firebase-installations-store";let ua=null;function Mc(){return ua||(ua=Ld(kv,Av,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fn)}}})),ua}async function Ri(n,e){const t=lo(n),s=(await Mc()).transaction(Fn,"readwrite"),i=s.objectStore(Fn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Wd(n,e.fid),e}async function Yd(n){const e=lo(n),r=(await Mc()).transaction(Fn,"readwrite");await r.objectStore(Fn).delete(e),await r.done}async function ho(n,e){const t=lo(n),s=(await Mc()).transaction(Fn,"readwrite"),i=s.objectStore(Fn),o=await i.get(t),a=e(o);return a===void 0?await i.delete(t):await i.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Wd(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(n){let e;const t=await ho(n.appConfig,r=>{const s=Cv(r),i=Dv(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ja?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Cv(n){const e=n||{fid:Tv(),registrationStatus:0};return Xd(e)}function Dv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Mn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Rv(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xv(n)}:{installationEntry:e}}async function Rv(n,e){try{const t=await _v(n,e);return Ri(n.appConfig,t)}catch(t){throw Vd(t)&&t.customData.serverCode===409?await Yd(n.appConfig):await Ri(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xv(n){let e=await kl(n.appConfig);for(;e.registrationStatus===1;)await Gd(100),e=await kl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Fc(n);return r||t}return e}function kl(n){return ho(n,e=>{if(!e)throw Mn.create("installation-not-found");return Xd(e)})}function Xd(n){return Lv(n)?{fid:n.fid,registrationStatus:0}:n}function Lv(n){return n.registrationStatus===1&&n.registrationTime+Fd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov({appConfig:n,heartbeatServiceProvider:e},t){const r=Nv(n,t),s=mv(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ud,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Hd(()=>fetch(r,a));if(c.ok){const u=await c.json();return $d(u)}else throw await qd("Generate Auth Token",c)}function Nv(n,{fid:e}){return`${jd(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(n,e=!1){let t;const r=await ho(n.appConfig,i=>{if(!Jd(i))throw Mn.create("not-registered");const o=i.authToken;if(!e&&Fv(o))return i;if(o.requestStatus===1)return t=Pv(n,e),i;{if(!navigator.onLine)throw Mn.create("app-offline");const a=Bv(i);return t=Mv(n,a),a}});return t?await t:r.authToken}async function Pv(n,e){let t=await Al(n.appConfig);for(;t.authToken.requestStatus===1;)await Gd(100),t=await Al(n.appConfig);const r=t.authToken;return r.requestStatus===0?Uc(n,e):r}function Al(n){return ho(n,e=>{if(!Jd(e))throw Mn.create("not-registered");const t=e.authToken;return Vv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Mv(n,e){try{const t=await Ov(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Ri(n.appConfig,r),t}catch(t){if(Vd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Yd(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ri(n.appConfig,r)}throw t}}function Jd(n){return n!==void 0&&n.registrationStatus===2}function Fv(n){return n.requestStatus===2&&!Uv(n)}function Uv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+hv}function Bv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Vv(n){return n.requestStatus===1&&n.requestTime+Fd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(n){const e=n,{installationEntry:t,registrationPromise:r}=await Fc(e);return r?r.catch(console.error):Uc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(n,e=!1){const t=n;return await qv(t),(await Uc(t,e)).token}async function qv(n){const{registrationPromise:e}=await Fc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){if(!n||!n.options)throw la("App Configuration");if(!n.name)throw la("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw la(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function la(n){return Mn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="installations",Hv="installations-internal",Gv=n=>{const e=n.getProvider("app").getImmediate(),t=zv(e),r=zn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kv=n=>{const e=n.getProvider("app").getImmediate(),t=zn(e,Zd).getImmediate();return{getId:()=>jv(t),getToken:s=>$v(t,s)}};function Wv(){It(new dt(Zd,Gv,"PUBLIC")),It(new dt(Hv,Kv,"PRIVATE"))}Wv();rt(Md,Pc);rt(Md,Pc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="analytics",Qv="firebase_id",Yv="origin",Xv=60*1e3,Jv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ef="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new uo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Zv(n,e){const t=document.createElement("script");t.src=`${ef}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function ew(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function tw(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await tf(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(a){Ge.error(a)}n("config",s,i)}async function nw(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await tf(t);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ge.error(i)}}function rw(n,e,t,r){async function s(i,o,a){try{i==="event"?await nw(n,e,t,o,a):i==="config"?await tw(n,e,t,r,o,a):i==="consent"?n("consent","update",a):n("set",o)}catch(c){Ge.error(c)}}return s}function sw(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=rw(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function iw(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ef)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},st=new qn("analytics","Analytics",ow);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=30,cw=1e3;class uw{constructor(e={},t=cw){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nf=new uw;function lw(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function hw(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:lw(r)},i=Jv.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function dw(n,e=nf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw st.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw st.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mw;return setTimeout(async()=>{a.abort()},t!==void 0?t:Xv),rf({appId:r,apiKey:s,measurementId:i},o,a,e)}async function rf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=nf){var i;const{appId:o,measurementId:a}=n;try{await fw(r,e)}catch(c){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await hw(n);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!pw(u)){if(s.deleteThrottleMetadata(o),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?_l(t,s.intervalMillis,aw):_l(t,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:t+1};return s.setThrottleMetadata(o,h),Ge.debug(`Calling attemptFetch again in ${l} millis`),rf(n,h,r,s)}}function fw(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pw(n){if(!(n instanceof pt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class mw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gw(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(){if(kd())try{await Ad()}catch(n){return Ge.warn(st.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ge.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _w(n,e,t,r,s,i,o){var a;const c=dw(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ge.error(f)),e.push(c);const u=yw().then(f=>{if(f)return r.getId()}),[l,h]=await Promise.all([c,u]);iw(i)||Zv(i,l.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Yv]="firebase",d.update=!0,h!=null&&(d[Qv]=h),s("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this.app=e}_delete(){return delete Yr[this.app.options.appId],Promise.resolve()}}let Yr={},Cl=[];const Dl={};let ha="dataLayer",ww="gtag",Rl,sf,xl=!1;function Tw(){const n=[];if(Sd()&&n.push("This is a browser extension environment."),Uy()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=st.create("invalid-analytics-context",{errorInfo:e});Ge.warn(t.message)}}function Iw(n,e,t){Tw();const r=n.options.appId;if(!r)throw st.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Yr[r]!=null)throw st.create("already-exists",{id:r});if(!xl){ew(ha);const{wrappedGtag:i,gtagCore:o}=sw(Yr,Cl,Dl,ha,ww);sf=i,Rl=o,xl=!0}return Yr[r]=_w(n,Cl,Dl,e,Rl,ha,t),new vw(n)}function Ew(n=Nc()){n=pe(n);const e=zn(n,xi);return e.isInitialized()?e.getImmediate():bw(n)}function bw(n,e={}){const t=zn(n,xi);if(t.isInitialized()){const s=t.getImmediate();if(as(e,t.getOptions()))return s;throw st.create("already-initialized")}return t.initialize({options:e})}function Sw(n,e,t,r){n=pe(n),gw(sf,Yr[n.app.options.appId],e,t,r).catch(s=>Ge.error(s))}const Ll="@firebase/analytics",Ol="0.9.0";function kw(){It(new dt(xi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Iw(r,s,t)},"PUBLIC")),It(new dt("analytics-internal",n,"PRIVATE")),rt(Ll,Ol),rt(Ll,Ol,"esm2017");function n(e){try{const t=e.getProvider(xi).getImmediate();return{logEvent:(r,s,i)=>Sw(t,r,s,i)}}catch(t){throw st.create("interop-component-reg-failed",{reason:t})}}}kw();const Aw={apiKey:"AIzaSyBqZde_q0ihx9Ob-vPoeYcLq9JytNJeSVY",authDomain:"timewarp-61a12.firebaseapp.com",projectId:"timewarp-61a12",storageBucket:"timewarp-61a12.appspot.com",messagingSenderId:"543139666364",appId:"1:543139666364:web:548d0d53315c64a67433b9",measurementId:"G-5CYZQFQNZK"},of=Od(Aw);Ew(of);var Cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Bc=Bc||{},N=Cw||self;function Li(){}function fo(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Ls(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Dw(n){return Object.prototype.hasOwnProperty.call(n,da)&&n[da]||(n[da]=++Rw)}var da="closure_uid_"+(1e9*Math.random()>>>0),Rw=0;function xw(n,e,t){return n.call.apply(n.bind,arguments)}function Lw(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ae(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=xw:Ae=Lw,Ae.apply(null,arguments)}function ci(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Ie(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function cn(){this.s=this.s,this.o=this.o}var Ow=0;cn.prototype.s=!1;cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ow!=0)&&Dw(this)};cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const af=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Vc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Nl(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(fo(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Ce(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Nw=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Li,e),N.removeEventListener("test",Li,e)}catch{}return n}();function Oi(n){return/^[\s\xa0]*$/.test(n)}var Pl=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function fa(n,e){return n<e?-1:n>e?1:0}function po(){var n=N.navigator;return n&&(n=n.userAgent)?n:""}function mt(n){return po().indexOf(n)!=-1}function jc(n){return jc[" "](n),n}jc[" "]=Li;function Pw(n){var e=Uw;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Mw=mt("Opera"),cr=mt("Trident")||mt("MSIE"),cf=mt("Edge"),$a=cf||cr,uf=mt("Gecko")&&!(po().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),Fw=po().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function lf(){var n=N.document;return n?n.documentMode:void 0}var Ni;e:{var pa="",ma=function(){var n=po();if(uf)return/rv:([^\);]+)(\)|;)/.exec(n);if(cf)return/Edge\/([\d\.]+)/.exec(n);if(cr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Fw)return/WebKit\/(\S+)/.exec(n);if(Mw)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ma&&(pa=ma?ma[1]:""),cr){var ga=lf();if(ga!=null&&ga>parseFloat(pa)){Ni=String(ga);break e}}Ni=pa}var Uw={};function Bw(){return Pw(function(){let n=0;const e=Pl(String(Ni)).split("."),t=Pl("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=fa(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||fa(s[2].length==0,i[2].length==0)||fa(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var qa;if(N.document&&cr){var Ml=lf();qa=Ml||parseInt(Ni,10)||void 0}else qa=void 0;var Vw=qa;function us(n,e){if(Ce.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(uf){e:{try{jc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:jw[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&us.X.h.call(this)}}Ie(us,Ce);var jw={2:"touch",3:"pen",4:"mouse"};us.prototype.h=function(){us.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),$w=0;function qw(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=s,this.key=++$w,this.ba=this.ea=!1}function mo(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function $c(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function hf(n){const e={};for(const t in n)e[t]=n[t];return e}const Fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function df(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Fl.length;i++)t=Fl[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function go(n){this.src=n,this.g={},this.h=0}go.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ha(n,e,r,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new qw(e,this.src,i,!!r,s),e.ea=t,n.push(e)),e};function za(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=af(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(mo(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ha(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==r)return s}return-1}var qc="closure_lm_"+(1e6*Math.random()|0),ya={};function ff(n,e,t,r,s){if(r&&r.once)return mf(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ff(n,e[i],t,r,s);return null}return t=Gc(t),n&&n[Os]?n.N(e,t,Ls(r)?!!r.capture:!!r,s):pf(n,e,t,!1,r,s)}function pf(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=Ls(s)?!!s.capture:!!s,a=Hc(n);if(a||(n[qc]=a=new go(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=zw(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Nw||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(yf(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function zw(){function n(t){return e.call(n.src,n.listener,t)}const e=Hw;return n}function mf(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mf(n,e[i],t,r,s);return null}return t=Gc(t),n&&n[Os]?n.O(e,t,Ls(r)?!!r.capture:!!r,s):pf(n,e,t,!0,r,s)}function gf(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gf(n,e[i],t,r,s);else r=Ls(r)?!!r.capture:!!r,t=Gc(t),n&&n[Os]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ha(i,t,r,s),-1<t&&(mo(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Hc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ha(e,t,r,s)),(t=-1<n?e[n]:null)&&zc(t))}function zc(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Os])za(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(yf(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Hc(e))?(za(t,n),t.h==0&&(t.src=null,e[qc]=null)):mo(n)}}}function yf(n){return n in ya?ya[n]:ya[n]="on"+n}function Hw(n,e){if(n.ba)n=!0;else{e=new us(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&zc(n),n=t.call(r,e)}return n}function Hc(n){return n=n[qc],n instanceof go?n:null}var _a="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(n){return typeof n=="function"?n:(n[_a]||(n[_a]=function(e){return n.handleEvent(e)}),n[_a])}function ye(){cn.call(this),this.i=new go(this),this.P=this,this.I=null}Ie(ye,cn);ye.prototype[Os]=!0;ye.prototype.removeEventListener=function(n,e,t,r){gf(this,n,e,t,r)};function Te(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Ce(e,n);else if(e instanceof Ce)e.target=e.target||n;else{var s=e;e=new Ce(r,n),df(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=ui(o,r,!0,e)&&s}if(o=e.g=n,s=ui(o,r,!0,e)&&s,s=ui(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=ui(o,r,!1,e)&&s}ye.prototype.M=function(){if(ye.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)mo(t[r]);delete n.g[e],n.h--}}this.I=null};ye.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};ye.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function ui(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&za(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Kc=N.JSON.stringify;function Gw(){var n=wf;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Kw{constructor(){this.h=this.g=null}add(e,t){const r=_f.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var _f=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Ww,n=>n.reset());class Ww{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Qw(n){N.setTimeout(()=>{throw n},0)}function vf(n,e){Ga||Yw(),Ka||(Ga(),Ka=!0),wf.add(n,e)}var Ga;function Yw(){var n=N.Promise.resolve(void 0);Ga=function(){n.then(Xw)}}var Ka=!1,wf=new Kw;function Xw(){for(var n;n=Gw();){try{n.h.call(n.g)}catch(t){Qw(t)}var e=_f;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ka=!1}function yo(n,e){ye.call(this),this.h=n||1,this.g=e||N,this.j=Ae(this.lb,this),this.l=Date.now()}Ie(yo,ye);D=yo.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Te(this,"tick"),this.ca&&(Wc(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wc(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}D.M=function(){yo.X.M.call(this),Wc(this),delete this.g};function Qc(n,e,t){if(typeof n=="function")t&&(n=Ae(n,t));else if(n&&typeof n.handleEvent=="function")n=Ae(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function Tf(n){n.g=Qc(()=>{n.g=null,n.i&&(n.i=!1,Tf(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Jw extends cn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Tf(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(n){cn.call(this),this.h=n,this.g={}}Ie(ls,cn);var Ul=[];function If(n,e,t,r){Array.isArray(t)||(t&&(Ul[0]=t.toString()),t=Ul);for(var s=0;s<t.length;s++){var i=ff(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Ef(n){$c(n.g,function(e,t){this.g.hasOwnProperty(t)&&zc(e)},n),n.g={}}ls.prototype.M=function(){ls.X.M.call(this),Ef(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _o(){this.g=!0}_o.prototype.Aa=function(){this.g=!1};function Zw(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function e0(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Xn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+n0(n,t)+(r?" "+r:"")})}function t0(n,e){n.info(function(){return"TIMEOUT: "+e})}_o.prototype.info=function(){};function n0(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kc(t)}catch{return e}}var Hn={},Bl=null;function vo(){return Bl=Bl||new ye}Hn.Pa="serverreachability";function bf(n){Ce.call(this,Hn.Pa,n)}Ie(bf,Ce);function hs(n){const e=vo();Te(e,new bf(e))}Hn.STAT_EVENT="statevent";function Sf(n,e){Ce.call(this,Hn.STAT_EVENT,n),this.stat=e}Ie(Sf,Ce);function Fe(n){const e=vo();Te(e,new Sf(e,n))}Hn.Qa="timingevent";function kf(n,e){Ce.call(this,Hn.Qa,n),this.size=e}Ie(kf,Ce);function Ns(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var wo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Af={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yc(){}Yc.prototype.h=null;function Vl(n){return n.h||(n.h=n.i())}function Cf(){}var Ps={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xc(){Ce.call(this,"d")}Ie(Xc,Ce);function Jc(){Ce.call(this,"c")}Ie(Jc,Ce);var Wa;function To(){}Ie(To,Yc);To.prototype.g=function(){return new XMLHttpRequest};To.prototype.i=function(){return{}};Wa=new To;function Ms(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new ls(this),this.O=r0,n=$a?125:void 0,this.T=new yo(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Df}function Df(){this.i=null,this.g="",this.h=!1}var r0=45e3,Qa={},Pi={};D=Ms.prototype;D.setTimeout=function(n){this.O=n};function Ya(n,e,t){n.K=1,n.v=Eo(Ft(e)),n.s=t,n.P=!0,Rf(n,null)}function Rf(n,e){n.F=Date.now(),Fs(n),n.A=Ft(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),Uf(t.i,"t",r),n.C=0,t=n.l.H,n.h=new Df,n.g=ip(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Jw(Ae(n.La,n,n.g),n.N)),If(n.S,n.g,"readystatechange",n.ib),e=n.H?hf(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),hs(),Zw(n.j,n.u,n.A,n.m,n.U,n.s)}D.ib=function(n){n=n.target;const e=this.L;e&&Ot(n)==3?e.l():this.La(n)};D.La=function(n){try{if(n==this.g)e:{const l=Ot(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||$a||this.g&&(this.h.h||this.g.fa()||zl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?hs(3):hs(2)),Io(this);var t=this.g.aa();this.Y=t;t:if(xf(this)){var r=zl(this.g);n="";var s=r.length,i=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Xr(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,e0(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oi(a)){var u=a;break t}}u=null}if(t=u)Xn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xa(this,t);else{this.i=!1,this.o=3,Fe(12),En(this),Xr(this);break e}}this.P?(Lf(this,l,o),$a&&this.i&&l==3&&(If(this.S,this.T,"tick",this.hb),this.T.start())):(Xn(this.j,this.m,o,null),Xa(this,o)),l==4&&En(this),this.i&&!this.I&&(l==4?tp(this.l,this):(this.i=!1,Fs(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Fe(12)):(this.o=0,Fe(13)),En(this),Xr(this)}}}catch{}finally{}};function xf(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Lf(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=s0(n,t),s==Pi){e==4&&(n.o=4,Fe(14),r=!1),Xn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Qa){n.o=4,Fe(15),Xn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Xn(n.j,n.m,s,null),Xa(n,s);xf(n)&&s!=Pi&&s!=Qa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Fe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),iu(e),e.K=!0,Fe(11))):(Xn(n.j,n.m,t,"[Invalid Chunked Response]"),En(n),Xr(n))}D.hb=function(){if(this.g){var n=Ot(this.g),e=this.g.fa();this.C<e.length&&(Io(this),Lf(this,n,e),this.i&&n!=4&&Fs(this))}};function s0(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Pi:(t=Number(e.substring(t,r)),isNaN(t)?Qa:(r+=1,r+t>e.length?Pi:(e=e.substr(r,t),n.C=r+t,e)))}D.cancel=function(){this.I=!0,En(this)};function Fs(n){n.V=Date.now()+n.O,Of(n,n.O)}function Of(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ns(Ae(n.gb,n),e)}function Io(n){n.B&&(N.clearTimeout(n.B),n.B=null)}D.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(t0(this.j,this.A),this.K!=2&&(hs(),Fe(17)),En(this),this.o=2,Xr(this)):Of(this,this.V-n)};function Xr(n){n.l.G==0||n.I||tp(n.l,n)}function En(n){Io(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Wc(n.T),Ef(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Xa(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ja(t.h,n))){if(!n.J&&Ja(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ui(t),ko(t);else break e;su(t),Fe(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=Ns(Ae(t.cb,t),6e3));if(1>=jf(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else bn(t,11)}else if((n.J||t.g==n)&&Ui(t),!Oi(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zc(i,i.h),i.h=null))}if(r.D){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,W(r.F,r.D,p))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=sp(r,r.H?r.ka:null,r.V),o.J){$f(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Io(a),Fs(a)),r.g=o}else Zf(r);0<t.i.length&&Ao(t)}else u[0]!="stop"&&u[0]!="close"||bn(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bn(t,7):ru(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}hs(4)}catch{}}function i0(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(fo(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function o0(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(fo(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Nf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(fo(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=o0(n),r=i0(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a0(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Cn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Cn){this.h=e!==void 0?e:n.h,Mi(this,n.j),this.s=n.s,this.g=n.g,Fi(this,n.m),this.l=n.l,e=n.i;var t=new ds;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),jl(this,t),this.o=n.o}else n&&(t=String(n).match(Pf))?(this.h=!!e,Mi(this,t[1]||"",!0),this.s=jr(t[2]||""),this.g=jr(t[3]||"",!0),Fi(this,t[4]),this.l=jr(t[5]||"",!0),jl(this,t[6]||"",!0),this.o=jr(t[7]||"")):(this.h=!!e,this.i=new ds(null,this.h))}Cn.prototype.toString=function(){var n=[],e=this.j;e&&n.push($r(e,$l,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push($r(e,$l,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push($r(t,t.charAt(0)=="/"?l0:u0,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",$r(t,d0)),n.join("")};function Ft(n){return new Cn(n)}function Mi(n,e,t){n.j=t?jr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Fi(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function jl(n,e,t){e instanceof ds?(n.i=e,f0(n.i,n.h)):(t||(e=$r(e,h0)),n.i=new ds(e,n.h))}function W(n,e,t){n.i.set(e,t)}function Eo(n){return W(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function jr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function $r(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,c0),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function c0(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var $l=/[#\/\?@]/g,u0=/[#\?:]/g,l0=/[#\?]/g,h0=/[#\?@]/g,d0=/#/g;function ds(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function un(n){n.g||(n.g=new Map,n.h=0,n.i&&a0(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}D=ds.prototype;D.add=function(n,e){un(this),this.i=null,n=kr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Mf(n,e){un(n),e=kr(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Ff(n,e){return un(n),e=kr(n,e),n.g.has(e)}D.forEach=function(n,e){un(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};D.oa=function(){un(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};D.W=function(n){un(this);let e=[];if(typeof n=="string")Ff(this,n)&&(e=e.concat(this.g.get(kr(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};D.set=function(n,e){return un(this),this.i=null,n=kr(this,n),Ff(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};D.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Uf(n,e,t){Mf(n,e),0<t.length&&(n.i=null,n.g.set(kr(n,e),Vc(t)),n.h+=t.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function kr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function f0(n,e){e&&!n.j&&(un(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Mf(this,r),Uf(this,s,t))},n)),n.j=e}var p0=class{constructor(e,t){this.h=e,this.g=t}};function Bf(n){this.l=n||m0,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var m0=10;function Vf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function jf(n){return n.h?1:n.g?n.g.size:0}function Ja(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Zc(n,e){n.g?n.g.add(e):n.h=e}function $f(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Bf.prototype.cancel=function(){if(this.i=qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function qf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Vc(n.i)}function eu(){}eu.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};eu.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function g0(){this.g=new eu}function y0(n,e,t){const r=t||"";try{Nf(n,function(s,i){let o=s;Ls(s)&&(o=Kc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function _0(n,e){const t=new _o;if(N.Image){const r=new Image;r.onload=ci(li,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ci(li,t,r,"TestLoadImage: error",!1,e),r.onabort=ci(li,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ci(li,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function li(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Us(n){this.l=n.ac||null,this.j=n.jb||!1}Ie(Us,Yc);Us.prototype.g=function(){return new bo(this.l,this.j)};Us.prototype.i=function(n){return function(){return n}}({});function bo(n,e){ye.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ie(bo,ye);var tu=0;D=bo.prototype;D.open=function(n,e){if(this.readyState!=tu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,fs(this)};D.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=tu};D.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zf(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function zf(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}D.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Bs(this):fs(this),this.readyState==3&&zf(this)}};D.Va=function(n){this.g&&(this.response=this.responseText=n,Bs(this))};D.Ua=function(n){this.g&&(this.response=n,Bs(this))};D.ga=function(){this.g&&Bs(this)};function Bs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,fs(n)}D.setRequestHeader=function(n,e){this.v.append(n,e)};D.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function fs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var v0=N.JSON.parse;function te(n){ye.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hf,this.K=this.L=!1}Ie(te,ye);var Hf="",w0=/^https?$/i,T0=["POST","PUT"];D=te.prototype;D.Ka=function(n){this.L=n};D.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Wa.g(),this.C=this.u?Vl(this.u):Vl(Wa),this.g.onreadystatechange=Ae(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){ql(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=N.FormData&&n instanceof N.FormData,!(0<=af(T0,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wf(this),0<this.B&&((this.K=I0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.qa,this)):this.A=Qc(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){ql(this,i)}};function I0(n){return cr&&Bw()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}D.qa=function(){typeof Bc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function ql(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Gf(n),So(n)}function Gf(n){n.D||(n.D=!0,Te(n,"complete"),Te(n,"error"))}D.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),So(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),So(this,!0)),te.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Kf(this):this.fb())};D.fb=function(){Kf(this)};function Kf(n){if(n.h&&typeof Bc<"u"&&(!n.C[1]||Ot(n)!=4||n.aa()!=2)){if(n.v&&Ot(n)==4)Qc(n.Ha,0,n);else if(Te(n,"readystatechange"),Ot(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(Pf)[1]||null;if(!s&&N.self&&N.self.location){var i=N.self.location.protocol;s=i.substr(0,i.length-1)}r=!w0.test(s?s.toLowerCase():"")}t=r}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var o=2<Ot(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Gf(n)}}finally{So(n)}}}}function So(n,e){if(n.g){Wf(n);const t=n.g,r=n.C[0]?Li:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=r}catch{}}}function Wf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function Ot(n){return n.g?n.g.readyState:0}D.aa=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),v0(e)}};function zl(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Hf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qf(n){let e="";return $c(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function nu(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Qf(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):W(n,e,t))}function Mr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Yf(n){this.Ca=0,this.i=[],this.j=new _o,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Mr("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Mr("baseRetryDelayMs",5e3,n),this.bb=Mr("retryDelaySeedMs",1e4,n),this.$a=Mr("forwardChannelMaxRetries",2,n),this.ta=Mr("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Bf(n&&n.concurrentRequestLimit),this.Fa=new g0,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Yf.prototype;D.ma=8;D.G=1;function ru(n){if(Xf(n),n.G==3){var e=n.U++,t=Ft(n.F);W(t,"SID",n.I),W(t,"RID",e),W(t,"TYPE","terminate"),Vs(n,t),e=new Ms(n,n.j,e,void 0),e.K=2,e.v=Eo(Ft(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=ip(e.l,null),e.g.da(e.v)),e.F=Date.now(),Fs(e)}rp(n)}function ko(n){n.g&&(iu(n),n.g.cancel(),n.g=null)}function Xf(n){ko(n),n.u&&(N.clearTimeout(n.u),n.u=null),Ui(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Ao(n){Vf(n.h)||n.m||(n.m=!0,vf(n.Ja,n),n.C=0)}function E0(n,e){return jf(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Ns(Ae(n.Ja,n,e),np(n,n.C)),n.C++,!0)}D.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new Ms(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=hf(i),df(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Jf(this,s,e),t=Ft(this.F),W(t,"RID",n),W(t,"CVER",22),this.D&&W(t,"X-HTTP-Session-Id",this.D),Vs(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Qf(i)))+"&"+e:this.o&&nu(t,this.o,i)),Zc(this.h,s),this.Ya&&W(t,"TYPE","init"),this.O?(W(t,"$req",e),W(t,"SID","null"),s.Z=!0,Ya(s,t,null)):Ya(s,t,e),this.G=2}}else this.G==3&&(n?Hl(this,n):this.i.length==0||Vf(this.h)||Hl(this))};function Hl(n,e){var t;e?t=e.m:t=n.U++;const r=Ft(n.F);W(r,"SID",n.I),W(r,"RID",t),W(r,"AID",n.T),Vs(n,r),n.o&&n.s&&nu(r,n.o,n.s),t=new Ms(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Jf(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Zc(n.h,t),Ya(t,r,e)}function Vs(n,e){n.ia&&$c(n.ia,function(t,r){W(e,r,t)}),n.l&&Nf({},function(t,r){W(e,r,t)})}function Jf(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Ae(n.l.Ra,n.l,n):null;e:{var s=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{y0(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Zf(n){n.g||n.u||(n.Z=1,vf(n.Ia,n),n.A=0)}function su(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Ns(Ae(n.Ia,n),np(n,n.A)),n.A++,!0)}D.Ia=function(){if(this.u=null,ep(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Ns(Ae(this.eb,this),n)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Fe(10),ko(this),ep(this))};function iu(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function ep(n){n.g=new Ms(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ft(n.sa);W(e,"RID","rpc"),W(e,"SID",n.I),W(e,"CI",n.L?"0":"1"),W(e,"AID",n.T),W(e,"TYPE","xmlhttp"),Vs(n,e),n.o&&n.s&&nu(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Eo(Ft(e)),t.s=null,t.P=!0,Rf(t,n)}D.cb=function(){this.v!=null&&(this.v=null,ko(this),su(this),Fe(19))};function Ui(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function tp(n,e){var t=null;if(n.g==e){Ui(n),iu(n),n.g=null;var r=2}else if(Ja(n.h,e))t=e.D,$f(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=vo(),Te(r,new kf(r,t)),Ao(n)}else Zf(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(r==1&&E0(n,e)||r==2&&su(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:bn(n,5);break;case 4:bn(n,10);break;case 3:bn(n,6);break;default:bn(n,2)}}}function np(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function bn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Ae(n.kb,n);t||(t=new Cn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Mi(t,"https"),Eo(t)),_0(t.toString(),r)}else Fe(2);n.G=0,n.l&&n.l.va(e),rp(n),Xf(n)}D.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function rp(n){if(n.G=0,n.la=[],n.l){const e=qf(n.h);(e.length!=0||n.i.length!=0)&&(Nl(n.la,e),Nl(n.la,n.i),n.h.i.length=0,Vc(n.i),n.i.length=0),n.l.ua()}}function sp(n,e,t){var r=t instanceof Cn?Ft(t):new Cn(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fi(r,r.m);else{var s=N.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Cn(null,void 0);r&&Mi(i,r),e&&(i.g=e),s&&Fi(i,s),t&&(i.l=t),r=i}return t=n.D,e=n.za,t&&e&&W(r,t,e),W(r,"VER",n.ma),Vs(n,r),r}function ip(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new te(new Us({jb:!0})):new te(n.ra),e.Ka(n.H),e}function op(){}D=op.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Bi(){if(cr&&!(10<=Number(Vw)))throw Error("Environmental error: no available transport.")}Bi.prototype.g=function(n,e){return new We(n,e)};function We(n,e){ye.call(this),this.g=new Yf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Oi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oi(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Ar(this)}Ie(We,ye);We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Fe(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=sp(n,null,n.V),Ao(n)};We.prototype.close=function(){ru(this.g)};We.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Kc(n),n=t);e.i.push(new p0(e.ab++,n)),e.G==3&&Ao(e)};We.prototype.M=function(){this.g.l=null,delete this.j,ru(this.g),delete this.g,We.X.M.call(this)};function ap(n){Xc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ie(ap,Xc);function cp(){Jc.call(this),this.status=1}Ie(cp,Jc);function Ar(n){this.g=n}Ie(Ar,op);Ar.prototype.xa=function(){Te(this.g,"a")};Ar.prototype.wa=function(n){Te(this.g,new ap(n))};Ar.prototype.va=function(n){Te(this.g,new cp)};Ar.prototype.ua=function(){Te(this.g,"b")};Bi.prototype.createWebChannel=Bi.prototype.g;We.prototype.send=We.prototype.u;We.prototype.open=We.prototype.m;We.prototype.close=We.prototype.close;wo.NO_ERROR=0;wo.TIMEOUT=8;wo.HTTP_ERROR=6;Af.COMPLETE="complete";Cf.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";ye.prototype.listen=ye.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.Oa;te.prototype.getLastErrorCode=te.prototype.Ea;te.prototype.getStatus=te.prototype.aa;te.prototype.getResponseJson=te.prototype.Sa;te.prototype.getResponseText=te.prototype.fa;te.prototype.send=te.prototype.da;te.prototype.setWithCredentials=te.prototype.Ka;var b0=function(){return new Bi},S0=function(){return vo()},va=wo,k0=Af,A0=Hn,Gl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},C0=Us,hi=Cf,D0=te;const Kl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new uo("@firebase/firestore");function Wl(){return Un.logLevel}function R(n,...e){if(Un.logLevel<=j.DEBUG){const t=e.map(ou);Un.debug(`Firestore (${Cr}): ${n}`,...t)}}function Ut(n,...e){if(Un.logLevel<=j.ERROR){const t=e.map(ou);Un.error(`Firestore (${Cr}): ${n}`,...t)}}function Za(n,...e){if(Un.logLevel<=j.WARN){const t=e.map(ou);Un.warn(`Firestore (${Cr}): ${n}`,...t)}}function ou(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${Cr}) INTERNAL ASSERTION FAILED: `+n;throw Ut(e),new Error(e)}function z(n,e){n||O()}function M(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class x0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class L0{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new up(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new Ee(e)}}class O0{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(z(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class N0{constructor(e,t,r,s){this.h=e,this.l=t,this.m=r,this.g=s}getToken(){return Promise.resolve(new O0(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M0{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const r=i=>{i.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string"),this.A=t.token,new P0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=F0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function ur(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ee(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.timestamp=e}static fromTimestamp(e){return new P(e)}static min(){return new P(new ee(0,0))}static max(){return new P(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t,r){t===void 0?t=0:t>e.length&&O(),r===void 0?r=e.length-t:r>e.length-t&&O(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ps.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ps?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class K extends ps{construct(e,t,r){return new K(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new K(t)}static emptyPath(){return new K([])}}const U0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ps{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return U0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new C(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new C(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new C(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(K.fromString(e))}static fromName(e){return new x(K.fromString(e).popFirst(5))}static empty(){return new x(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&K.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return K.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new K(e.slice()))}}function B0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new nn(s,x.empty(),e)}function V0(n){return new nn(n.readTime,n.key,-1)}class nn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nn(P.min(),x.empty(),-1)}static max(){return new nn(P.max(),x.empty(),-1)}}function j0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==$0)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof E?t:E.resolve(t)}catch(t){return E.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):E.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):E.reject(t)}static resolve(e){return new E((t,r)=>{t(e)})}static reject(e){return new E((t,r)=>{r(e)})}static waitFor(e){return new E((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=E.resolve(!1);for(const r of e)t=t.next(s=>s?E.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new E((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new E((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function $s(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>t.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}au.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ms{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ms&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n){return n==null}function Vi(n){return n===0&&1/n==-1/0}function H0(n){return typeof n=="number"&&Number.isInteger(n)&&!Vi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Oe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const G0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rn(n){if(z(!!n),typeof n=="string"){let e=0;const t=G0.exec(n);if(z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function lr(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function fp(n){const e=n.mapValue.fields.__previous_value__;return dp(e)?fp(e):e}function gs(n){const e=rn(n.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dp(n)?4:K0(n)?9007199254740991:10:O()}function Et(n,e){if(n===e)return!0;const t=Bn(n);if(t!==Bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gs(n).isEqual(gs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=rn(r.timestampValue),o=rn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return lr(r.bytesValue).isEqual(lr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return ce(r.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ce(r.integerValue)===ce(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ce(r.doubleValue),o=ce(s.doubleValue);return i===o?Vi(i)===Vi(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return ur(n.arrayValue.values||[],e.arrayValue.values||[],Et);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ql(i)!==Ql(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Et(i[a],o[a])))return!1;return!0}(n,e);default:return O()}}function ys(n,e){return(n.values||[]).find(t=>Et(t,e))!==void 0}function hr(n,e){if(n===e)return 0;const t=Bn(n),r=Bn(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ce(s.integerValue||s.doubleValue),a=ce(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Yl(n.timestampValue,e.timestampValue);case 4:return Yl(gs(n),gs(e));case 5:return q(n.stringValue,e.stringValue);case 6:return function(s,i){const o=lr(s),a=lr(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=q(o[c],a[c]);if(u!==0)return u}return q(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=q(ce(s.latitude),ce(i.latitude));return o!==0?o:q(ce(s.longitude),ce(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=hr(o[c],a[c]);if(u)return u}return q(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===di.mapValue&&i===di.mapValue)return 0;if(s===di.mapValue)return 1;if(i===di.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=q(a[l],u[l]);if(h!==0)return h;const d=hr(o[a[l]],c[u[l]]);if(d!==0)return d}return q(a.length,u.length)}(n.mapValue,e.mapValue);default:throw O()}}function Yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=rn(n),r=rn(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function dr(n){return ec(n)}function ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=rn(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?lr(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,x.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=ec(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${ec(r.fields[a])}`;return i+"}"}(n.mapValue):O();var e,t}function Xl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function tc(n){return!!n&&"integerValue"in n}function cu(n){return!!n&&"arrayValue"in n}function Jl(n){return!!n&&"nullValue"in n}function Zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gi(n){return!!n&&"mapValue"in n}function Jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function K0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.position=e,this.inclusive=t}}function eh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=hr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function th(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Et(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{}class le extends pp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Y0(e,t,r):t==="array-contains"?new Z0(e,r):t==="in"?new eT(e,r):t==="not-in"?new tT(e,r):t==="array-contains-any"?new nT(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new X0(e,r):new J0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(hr(t,this.value)):t!==null&&Bn(this.value)===Bn(t)&&this.matchesComparison(hr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends pp{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ft(e,t)}matches(e){return mp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function mp(n){return n.op==="and"}function W0(n){return Q0(n)&&mp(n)}function Q0(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function gp(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+dr(n.value);{const e=n.filters.map(t=>gp(t)).join(",");return`${n.op}(${e})`}}function yp(n,e){return n instanceof le?function(t,r){return r instanceof le&&t.op===r.op&&t.field.isEqual(r.field)&&Et(t.value,r.value)}(n,e):n instanceof ft?function(t,r){return r instanceof ft&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&yp(i,r.filters[o]),!0):!1}(n,e):void O()}function _p(n){return n instanceof le?function(e){return`${e.field.canonicalString()} ${e.op} ${dr(e.value)}`}(n):n instanceof ft?function(e){return e.op.toString()+" {"+e.getFilters().map(_p).join(" ,")+"}"}(n):"Filter"}class Y0 extends le{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class X0 extends le{constructor(e,t){super(e,"in",t),this.keys=vp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class J0 extends le{constructor(e,t){super(e,"not-in",t),this.keys=vp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class Z0 extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cu(t)&&ys(t.arrayValue,this.value)}}class eT extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ys(this.value.arrayValue,t)}}class tT extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ys(this.value.arrayValue,t)}}class nT extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function rT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fi(this.root,e,this.comparator,!0)}}class fi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ve(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nh(this.data.getIterator())}getIteratorFrom(e){return new nh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class nh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new it([])}unionWith(e){let t=new fe(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ur(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=Se.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Jr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Gn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Be(Jr(this.value))}}function wp(n){const e=[];return Gn(n.fields,(t,r)=>{const s=new Se([t]);if(gi(r)){const i=wp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new be(e,0,P.min(),P.min(),P.min(),Be.empty(),0)}static newFoundDocument(e,t,r,s){return new be(e,1,t,P.min(),r,s,0)}static newNoDocument(e,t){return new be(e,2,t,P.min(),P.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new be(e,3,t,P.min(),P.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function rh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new sT(n,e,t,r,s,i,o)}function uu(n){const e=M(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>gp(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Co(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>dr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>dr(r)).join(",")),e.ft=t}return e.ft}function lu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!th(n.startAt,e.startAt)&&th(n.endAt,e.endAt)}function nc(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function iT(n,e,t,r,s,i,o,a){return new qs(n,e,t,r,s,i,o,a)}function Do(n){return new qs(n)}function sh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Tp(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Ip(n){return n.collectionGroup!==null}function tr(n){const e=M(n);if(e.dt===null){e.dt=[];const t=hu(e),r=Tp(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new Zr(t)),e.dt.push(new Zr(Se.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Zr(Se.keyField(),i))}}}return e.dt}function bt(n){const e=M(n);if(!e._t)if(e.limitType==="F")e._t=rh(e.path,e.collectionGroup,tr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of tr(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Zr(i.field,o))}const r=e.endAt?new ji(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ji(e.startAt.position,e.startAt.inclusive):null;e._t=rh(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e._t}function rc(n,e){e.getFirstInequalityField(),hu(n);const t=n.filters.concat([e]);return new qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $i(n,e,t){return new qs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ro(n,e){return lu(bt(n),bt(e))&&n.limitType===e.limitType}function Ep(n){return`${uu(bt(n))}|lt:${n.limitType}`}function sc(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>_p(r)).join(", ")}]`),Co(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>dr(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>dr(r)).join(",")),`Target(${t})`}(bt(n))}; limitType=${n.limitType})`}function du(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):x.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of tr(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=eh(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,tr(t),r)||t.endAt&&!function(s,i,o){const a=eh(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,tr(t),r))}(n,e)}function oT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bp(n){return(e,t)=>{let r=!1;for(const s of tr(n)){const i=aT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aT(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?hr(a,c):O()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function kp(n){return{integerValue:""+n}}function cT(n,e){return H0(e)?kp(e):Sp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this._=void 0}}function uT(n,e,t){return n instanceof qi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof _s?Cp(n,e):n instanceof vs?Dp(n,e):function(r,s){const i=Ap(r,s),o=ih(i)+ih(r.gt);return tc(i)&&tc(r.gt)?kp(o):Sp(r.yt,o)}(n,e)}function lT(n,e,t){return n instanceof _s?Cp(n,e):n instanceof vs?Dp(n,e):t}function Ap(n,e){return n instanceof zi?tc(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class qi extends xo{}class _s extends xo{constructor(e){super(),this.elements=e}}function Cp(n,e){const t=Rp(e);for(const r of n.elements)t.some(s=>Et(s,r))||t.push(r);return{arrayValue:{values:t}}}class vs extends xo{constructor(e){super(),this.elements=e}}function Dp(n,e){let t=Rp(e);for(const r of n.elements)t=t.filter(s=>!Et(s,r));return{arrayValue:{values:t}}}class zi extends xo{constructor(e,t){super(),this.yt=e,this.gt=t}}function ih(n){return ce(n.integerValue||n.doubleValue)}function Rp(n){return cu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hT(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof _s&&r instanceof _s||t instanceof vs&&r instanceof vs?ur(t.elements,r.elements,Et):t instanceof zi&&r instanceof zi?Et(t.gt,r.gt):t instanceof qi&&r instanceof qi}(n.transform,e.transform)}class dT{constructor(e,t){this.version=e,this.transformResults=t}}class ot{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Lo{}function xp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new fu(n.key,ot.none()):new zs(n.key,n.data,ot.none());{const t=n.data,r=Be.empty();let s=new fe(Se.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ln(n.key,r,new it(s.toArray()),ot.none())}}function fT(n,e,t){n instanceof zs?function(r,s,i){const o=r.value.clone(),a=ah(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof ln?function(r,s,i){if(!yi(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=ah(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Lp(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function es(n,e,t,r){return n instanceof zs?function(s,i,o,a){if(!yi(s.precondition,i))return o;const c=s.value.clone(),u=ch(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof ln?function(s,i,o,a){if(!yi(s.precondition,i))return o;const c=ch(s.fieldTransforms,a,i),u=i.data;return u.setAll(Lp(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return yi(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function pT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ap(r.transform,s||null);i!=null&&(t===null&&(t=Be.empty()),t.set(r.field,i))}return t||null}function oh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&ur(t,r,(s,i)=>hT(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zs extends Lo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ln extends Lo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ah(n,e,t){const r=new Map;z(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,lT(o,a,t[s]))}return r}function ch(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,uT(i,o,e))}return r}class fu extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mT extends Lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,B;function yT(n){switch(n){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function Op(n){if(n===void 0)return Ut("GRPC error has no .code"),v.UNKNOWN;switch(n){case ae.OK:return v.OK;case ae.CANCELLED:return v.CANCELLED;case ae.UNKNOWN:return v.UNKNOWN;case ae.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case ae.INTERNAL:return v.INTERNAL;case ae.UNAVAILABLE:return v.UNAVAILABLE;case ae.UNAUTHENTICATED:return v.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case ae.NOT_FOUND:return v.NOT_FOUND;case ae.ALREADY_EXISTS:return v.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return v.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case ae.ABORTED:return v.ABORTED;case ae.OUT_OF_RANGE:return v.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return v.UNIMPLEMENTED;case ae.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(B=ae||(ae={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new me(x.comparator);function Bt(){return _T}const Np=new me(x.comparator);function qr(...n){let e=Np;for(const t of n)e=e.insert(t.key,t);return e}function Pp(n){let e=Np;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Sn(){return ts()}function Mp(){return ts()}function ts(){return new Dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const vT=new me(x.comparator),wT=new fe(x.comparator);function F(...n){let e=wT;for(const t of n)e=e.add(t);return e}const TT=new fe(q);function Fp(){return TT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Oo(P.min(),s,Fp(),Bt(),F())}}class Hs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hs(r,t,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t,r,s){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=s}}class Up{constructor(e,t){this.targetId=e,this.Et=t}}class Bp{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class uh{constructor(){this.At=0,this.Rt=hh(),this.bt=Oe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=F(),t=F(),r=F();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Hs(this.bt,this.Pt,e,t,r)}xt(){this.vt=!1,this.Rt=hh()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class IT{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Bt(),this.qt=lh(),this.Ut=new fe(q)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const r=this.Wt(t);switch(e.state){case 0:this.zt(t)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,s)=>{this.zt(s)&&t(s)})}Jt(e){const t=e.targetId,r=e.Et.count,s=this.Yt(t);if(s){const i=s.target;if(nc(i))if(r===0){const o=new x(i.path);this.Qt(t,o,be.newNoDocument(o,P.min()))}else z(r===1);else this.Xt(t)!==r&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&nc(a.target)){const c=new x(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,be.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let r=F();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new Oo(e,t,this.Ut,this.Lt,r);return this.Lt=Bt(),this.qt=lh(),this.Ut=new fe(q),s}Gt(e,t){if(!this.zt(e))return;const r=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new uh,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new fe(q),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||R("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new uh),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function lh(){return new me(x.comparator)}function hh(){return new me(x.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ST=(()=>({and:"AND",or:"OR"}))();class kT{constructor(e,t){this.databaseId=e,this.wt=t}}function Hi(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vp(n,e){return n.wt?e.toBase64():e.toUint8Array()}function AT(n,e){return Hi(n,e.toTimestamp())}function _t(n){return z(!!n),P.fromTimestamp(function(e){const t=rn(e);return new ee(t.seconds,t.nanos)}(n))}function pu(n,e){return function(t){return new K(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function jp(n){const e=K.fromString(n);return z(Gp(e)),e}function ic(n,e){return pu(n.databaseId,e.path)}function wa(n,e){const t=jp(e);if(t.get(1)!==n.databaseId.projectId)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x($p(t))}function oc(n,e){return pu(n.databaseId,e)}function CT(n){const e=jp(n);return e.length===4?K.emptyPath():$p(e)}function ac(n){return new K(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $p(n){return z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dh(n,e,t){return{name:ic(n,e),fields:t.value.mapValue.fields}}function DT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(z(u===void 0||typeof u=="string"),Oe.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),Oe.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:Op(c.code);return new C(u,c.message||"")}(o);t=new Bp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wa(n,r.document.name),i=_t(r.document.updateTime),o=r.document.createTime?_t(r.document.createTime):P.min(),a=new Be({mapValue:{fields:r.document.fields}}),c=be.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new _i(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wa(n,r.document),i=r.readTime?_t(r.readTime):P.min(),o=be.newNoDocument(s,i),a=r.removedTargetIds||[];t=new _i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wa(n,r.document),i=r.removedTargetIds||[];t=new _i([],i,s,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new gT(s),o=r.targetId;t=new Up(o,i)}}return t}function RT(n,e){let t;if(e instanceof zs)t={update:dh(n,e.key,e.value)};else if(e instanceof fu)t={delete:ic(n,e.key)};else if(e instanceof ln)t={update:dh(n,e.key,e.data),updateMask:UT(e.fieldMask)};else{if(!(e instanceof mT))return O();t={verify:ic(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof qi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _s)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw O()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:AT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(n,e.precondition)),t}function xT(n,e){return n&&n.length>0?(z(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?_t(r.updateTime):_t(s);return i.isEqual(P.min())&&(i=_t(s)),new dT(i,r.transformResults||[])}(t,e))):[]}function LT(n,e){return{documents:[oc(n,e.path)]}}function qp(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=oc(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=oc(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Hp(ft.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Qn(l.field),direction:PT(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Co(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function OT(n){let e=CT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){z(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=zp(l);return h instanceof ft&&W0(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Zr(Yn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Co(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new ji(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new ji(d,h)}(t.endAt)),iT(e,s,o,i,a,"F",c,u)}function NT(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function zp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Yn(e.unaryFilter.field);return le.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Yn(e.unaryFilter.field);return le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yn(e.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(e.unaryFilter.field);return le.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return le.create(Yn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ft.create(e.compositeFilter.filters.map(t=>zp(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function PT(n){return ET[n]}function MT(n){return bT[n]}function FT(n){return ST[n]}function Qn(n){return{fieldPath:n.canonicalString()}}function Yn(n){return Se.fromServerFormat(n.fieldPath)}function Hp(n){return n instanceof le?function(e){if(e.op==="=="){if(Zl(e.value))return{unaryFilter:{field:Qn(e.field),op:"IS_NAN"}};if(Jl(e.value))return{unaryFilter:{field:Qn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zl(e.value))return{unaryFilter:{field:Qn(e.field),op:"IS_NOT_NAN"}};if(Jl(e.value))return{unaryFilter:{field:Qn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(e.field),op:MT(e.op),value:e.value}}}(n):n instanceof ft?function(e){const t=e.getFilters().map(r=>Hp(r));return t.length===1?t[0]:{compositeFilter:{op:FT(e.op),filters:t}}}(n):O()}function UT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Mp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=xp(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),F())}isEqual(e){return this.batchId===e.batchId&&ur(this.mutations,e.mutations,(t,r)=>oh(t,r))&&ur(this.baseMutations,e.baseMutations,(t,r)=>oh(t,r))}}class mu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){z(e.mutations.length===r.length);let s=vT;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r,s,i=P.min(),o=P.min(),a=Oe.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.ie=e}}function $T(n){const e=OT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$i(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.Je=new zT}addToCollectionParentIndex(e,t){return this.Je.add(t),E.resolve()}getCollectionParents(e,t){return E.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return E.resolve()}deleteFieldIndex(e,t){return E.resolve()}getDocumentsMatchingTarget(e,t){return E.resolve(null)}getIndexType(e,t){return E.resolve(0)}getFieldIndexes(e,t){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,t){return E.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,t){return E.resolve(nn.min())}updateCollectionGroup(e,t,r){return E.resolve()}updateIndexEntries(e,t){return E.resolve()}}class zT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(K.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(K.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new fr(0)}static vn(){return new fr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.changes=new Dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?E.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&es(r.mutation,s,it.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,F()).next(()=>r))}getLocalViewOfDocuments(e,t,r=F()){const s=Sn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=qr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,F()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Bt();const o=ts(),a=ts();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof ln)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),es(l.mutation,u,l.mutation.getFieldMask(),ee.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new GT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ts();let s=new me((o,a)=>o-a),i=F();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||it.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||F()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Mp();l.forEach(d=>{if(!i.has(d)){const f=xp(t.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return x.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ip(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):E.resolve(Sn());let a=-1,c=i;return o.next(u=>E.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?E.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,F())).next(l=>({batchId:a,changes:Pp(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let s=qr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=qr();return this.indexManager.getCollectionParents(e,s).next(o=>E.forEach(o,a=>{const c=function(u,l){return new qs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,be.newInvalidDocument(u)))});let o=qr();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&es(u.mutation,c,it.empty(),ee.now()),du(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return E.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:_t(r.createTime)}),E.resolve()}getNamedQuery(e,t){return E.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(r){return{name:r.name,query:$T(r.bundledQuery),readTime:_t(r.readTime)}}(t)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.overlays=new me(x.comparator),this.es=new Map}getOverlay(e,t){return E.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sn();return E.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.oe(e,t,i)}),E.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),E.resolve()}getOverlaysForCollection(e,t,r){const s=Sn(),i=t.length+1,o=new x(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return E.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new me((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Sn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Sn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return E.resolve(a)}oe(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VT(t,r));let i=this.es.get(t);i===void 0&&(i=F(),this.es.set(t,i)),this.es.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.ns=new fe(ge.ss),this.rs=new fe(ge.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const r=new ge(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.cs(new ge(e,t))}hs(e,t){e.forEach(r=>this.removeReference(r,t))}ls(e){const t=new x(new K([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new x(new K([])),r=new ge(t,e),s=new ge(t,e+1);let i=F();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ge(e,0),r=this.ns.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return x.comparator(e.key,t.key)||q(e._s,t._s)}static os(e,t){return q(e._s,t._s)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new fe(ge.ss)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BT(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,t){return E.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ps(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(q);return t.forEach(s=>{const i=new ge(s,0),o=new ge(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),E.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new ge(new x(i),0);let a=new fe(q);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),E.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return E.forEach(t.mutations,s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,t){const r=new ge(t,0),s=this.gs.firstAfterOrEqual(r);return E.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.Es=e,this.docs=new me(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return E.resolve(r?r.document.mutableCopy():be.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():be.newInvalidDocument(s))}),E.resolve(r)}getAllFromCollection(e,t,r){let s=Bt();const i=new x(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||j0(V0(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,t,r,s){O()}As(e,t){return E.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new JT(this)}getSize(e){return E.resolve(this.size)}}class JT extends HT{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),E.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.persistence=e,this.Rs=new Dr(t=>uu(t),lu),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.bs=0,this.Ps=new gu,this.targetCount=0,this.vs=fr.Pn()}forEachTarget(e,t){return this.Rs.forEach((r,s)=>t(s)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),E.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,E.resolve()}updateTargetData(e,t){return this.Dn(t),E.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,t){const r=this.Rs.get(t)||null;return E.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),E.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),E.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ps.ds(t);return E.resolve(r)}containsKey(e,t){return E.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new au(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ZT(this),this.indexManager=new qT,this.remoteDocumentCache=function(r){return new XT(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new jT(t),this.Ns=new WT(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new YT(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){R("MemoryPersistence","Starting transaction:",e);const s=new tI(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,t){return E.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class tI extends q0{constructor(e){super(),this.currentSequenceNumber=e}}class yu{constructor(e){this.persistence=e,this.Fs=new gu,this.$s=null}static Bs(e){return new yu(e)}get Ls(){if(this.$s)return this.$s;throw O()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),E.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),E.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Ls,r=>{const s=x.fromPath(r);return this.qs(e,s).next(i=>{i||t.removeEntry(s,P.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(r=>{r?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return E.or([()=>E.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=s}static Ci(e,t){let r=F(),s=F();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _u(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,s){return this.ki(e,t).next(i=>i||this.Oi(e,t,s,r)).next(i=>i||this.Mi(e,t))}ki(e,t){if(sh(t))return E.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=$i(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=F(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(t,a);return this.$i(t,u,o,c.readTime)?this.ki(e,$i(t,null,"F")):this.Bi(e,u,t,c)}))})))}Oi(e,t,r,s){return sh(t)||s.isEqual(P.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,r,s)?this.Mi(e,t):(Wl()<=j.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sc(t)),this.Bi(e,o,t,B0(s,-1)))})}Fi(e,t){let r=new fe(bp(e));return t.forEach((s,i)=>{du(e,i)&&(r=r.add(i))}),r}$i(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,t){return Wl()<=j.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",sc(t)),this.Ni.getDocumentsMatchingQuery(e,t,nn.min())}Bi(e,t,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r,s){this.persistence=e,this.Li=t,this.yt=s,this.qi=new me(q),this.Ui=new Dr(i=>uu(i),lu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function sI(n,e,t,r){return new rI(n,e,t,r)}async function Kp(n,e){const t=M(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Qi(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=F();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function iI(n,e){const t=M(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const p=c.docVersions.get(f);z(p!==null),m.version.compareTo(p)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=F();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Wp(n){const e=M(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function oI(n,e){const t=M(n),r=e.snapshotVersion;let s=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});s=t.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(m,p,g){return m.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,f,l)&&a.push(t.Cs.updateTargetData(i,f))});let c=Bt(),u=F();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(aI(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(P.min())){const l=t.Cs.getLastRemoteSnapshotVersion(i).next(h=>t.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.qi=s,i))}function aI(n,e,t){let r=F(),s=F();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Bt();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function cI(n,e){const t=M(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uI(n,e){const t=M(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Cs.getTargetData(r,e).next(i=>i?(s=i,E.resolve(s)):t.Cs.allocateTargetId(r).next(o=>(s=new Dn(e,o,0,r.currentSequenceNumber),t.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.qi=t.qi.insert(r.targetId,r),t.Ui.set(e,r.targetId)),r})}async function cc(n,e,t){const r=M(n),s=r.qi.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$s(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function fh(n,e,t){const r=M(n);let s=P.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=M(a),h=l.Ui.get(u);return h!==void 0?E.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,bt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,t?s:P.min(),t?i:F())).next(a=>(lI(r,oT(e),a),{documents:a,Hi:i})))}function lI(n,e,t){let r=n.Ki.get(e)||P.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ki.set(e,r)}class ph{constructor(){this.activeTargetIds=Fp()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hI{constructor(){this.Lr=new ph,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,r){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ph,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,s,i){const o=this.ho(e,t);R("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Za("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,t,r,s,i,o){return this.ao(e,t,r,s,i)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Cr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,t){const r=fI[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,s){return new Promise((i,o)=>{const a=new D0;a.setWithCredentials(!0),a.listenOnce(k0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case va.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),i(u);break;case va.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new C(v.DEADLINE_EXCEEDED,"Request time out"));break;case va.HTTP_ERROR:const l=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(p)>=0?p:v.UNKNOWN}(d.status);o(new C(f,d.message))}else o(new C(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}wo(e,t,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=b0(),o=S0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new C0({})),this.lo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const c=s.join("");R("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new pI({Hr:m=>{h?R("Connection","Not sending because WebChannel is closed:",m):(l||(R("Connection","Opening WebChannel transport."),u.open(),l=!0),R("Connection","WebChannel sending:",m),u.send(m))},Jr:()=>u.close()}),f=(m,p,g)=>{m.listen(p,y=>{try{g(y)}catch(_){setTimeout(()=>{throw _},0)}})};return f(u,hi.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),f(u,hi.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.io())}),f(u,hi.EventType.ERROR,m=>{h||(h=!0,Za("Connection","WebChannel transport errored:",m),d.io(new C(v.UNAVAILABLE,"The operation could not be completed")))}),f(u,hi.EventType.MESSAGE,m=>{var p;if(!h){const g=m.data[0];z(!!g);const y=g,_=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(_){R("Connection","WebChannel received error:",_);const w=_.status;let I=function(A){const k=ae[A];if(k!==void 0)return Op(k)}(w),T=_.message;I===void 0&&(I=v.INTERNAL,T="Unknown error status: "+w+" with message "+_.message),h=!0,d.io(new C(I,T)),u.close()}else R("Connection","WebChannel received:",g),d.ro(g)}}),f(o,A0.STAT_EVENT,m=>{m.stat===Gl.PROXY?R("Connection","Detected buffering proxy"):m.stat===Gl.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ta(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){return new kT(n,!0)}class Qp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,t-r);s>0&&R("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Qp(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===t&&this.Go(r,s)},r=>{e(()=>{const s=new C(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,t){const r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gI extends Yp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=DT(this.yt,e),r=function(s){if(!("targetChange"in s))return P.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?P.min():i.readTime?_t(i.readTime):P.min()}(e);return this.listener.Wo(t,r)}zo(e){const t={};t.database=ac(this.yt),t.addTarget=function(s,i){let o;const a=i.target;return o=nc(a)?{documents:LT(s,a)}:{query:qp(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Vp(s,i.resumeToken):i.snapshotVersion.compareTo(P.min())>0&&(o.readTime=Hi(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=NT(this.yt,e);r&&(t.labels=r),this.Bo(t)}Ho(e){const t={};t.database=ac(this.yt),t.removeTarget=e,this.Bo(t)}}class yI extends Yp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=xT(e.writeResults,e.commitTime),r=_t(e.commitTime);return this.listener.Zo(r,t)}return z(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ac(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>RT(this.yt,r))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(v.UNKNOWN,s.toString())})}_o(e,t,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(v.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}async function vI(n,e){const t=M(n),r=function(i,o){const a=qp(i,o);return{structuredAggregationQuery:{aggregations:[{count:{},alias:"count_alias"}],structuredQuery:a.structuredQuery},parent:a.parent}}(t.yt,bt(e)),s=r.parent;return t.connection.co||delete r.parent,(await t._o("RunAggregationQuery",s,r,1)).filter(i=>!!i.result).map(i=>i.result.aggregateFields)}class wI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ut(t),this.ou=!1):R("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{hn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c._u.add(4),await Gs(c),c.gu.set("Unknown"),c._u.delete(4),await Po(c)}(this))})}),this.gu=new wI(r,s)}}async function Po(n){if(hn(n))for(const e of n.wu)await e(!0)}async function Gs(n){for(const e of n.wu)await e(!1)}function Xp(n,e){const t=M(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),Tu(t)?wu(t):Rr(t).ko()&&vu(t,e))}function Jp(n,e){const t=M(n),r=Rr(t);t.du.delete(e),r.ko()&&Zp(t,e),t.du.size===0&&(r.ko()?r.Fo():hn(t)&&t.gu.set("Unknown"))}function vu(n,e){n.yu.Ot(e.targetId),Rr(n).zo(e)}function Zp(n,e){n.yu.Ot(e),Rr(n).Ho(e)}function wu(n){n.yu=new IT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),Rr(n).start(),n.gu.uu()}function Tu(n){return hn(n)&&!Rr(n).No()&&n.du.size>0}function hn(n){return M(n)._u.size===0}function em(n){n.yu=void 0}async function II(n){n.du.forEach((e,t)=>{vu(n,e)})}async function EI(n,e){em(n),Tu(n)?(n.gu.hu(e),wu(n)):n.gu.set("Unknown")}async function bI(n,e,t){if(n.gu.set("Online"),e instanceof Bp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(n,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gi(n,r)}else if(e instanceof _i?n.yu.Kt(e):e instanceof Up?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(P.min()))try{const r=await Wp(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(Oe.EMPTY_BYTE_STRING,c.snapshotVersion)),Zp(s,a);const u=new Dn(c.target,a,1,c.sequenceNumber);vu(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Gi(n,r)}}async function Gi(n,e,t){if(!$s(e))throw e;n._u.add(1),await Gs(n),n.gu.set("Offline"),t||(t=()=>Wp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Po(n)})}function tm(n,e){return e().catch(t=>Gi(n,t,e))}async function Mo(n){const e=M(n),t=sn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SI(e);)try{const s=await cI(e.localStore,r);if(s===null){e.fu.length===0&&t.Fo();break}r=s.batchId,kI(e,s)}catch(s){await Gi(e,s)}nm(e)&&rm(e)}function SI(n){return hn(n)&&n.fu.length<10}function kI(n,e){n.fu.push(e);const t=sn(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function nm(n){return hn(n)&&!sn(n).No()&&n.fu.length>0}function rm(n){sn(n).start()}async function AI(n){sn(n).eu()}async function CI(n){const e=sn(n);for(const t of n.fu)e.Xo(t.mutations)}async function DI(n,e,t){const r=n.fu.shift(),s=mu.from(r,e,t);await tm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Mo(n)}async function RI(n,e){e&&sn(n).Yo&&await async function(t,r){if(s=r.code,yT(s)&&s!==v.ABORTED){const i=t.fu.shift();sn(t).Mo(),await tm(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Mo(t)}var s}(n,e),nm(n)&&rm(n)}async function gh(n,e){const t=M(n);t.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=hn(t);t._u.add(3),await Gs(t),r&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Po(t)}async function xI(n,e){const t=M(n);e?(t._u.delete(2),await Po(t)):e||(t._u.add(2),await Gs(t),t.gu.set("Unknown"))}function Rr(n){return n.pu||(n.pu=function(e,t,r){const s=M(e);return s.su(),new gI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(n.datastore,n.asyncQueue,{Yr:II.bind(null,n),Zr:EI.bind(null,n),Wo:bI.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),Tu(n)?wu(n):n.gu.set("Unknown")):(await n.pu.stop(),em(n))})),n.pu}function sn(n){return n.Iu||(n.Iu=function(e,t,r){const s=M(e);return s.su(),new yI(t,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(n.datastore,n.asyncQueue,{Yr:AI.bind(null,n),Zr:RI.bind(null,n),tu:CI.bind(null,n),Zo:DI.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Mo(n)):(await n.Iu.stop(),n.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Iu(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eu(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),$s(n))return new C(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=qr(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.Tu=new me(x.comparator)}track(e){const t=e.doc.key,r=this.Tu.get(t);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(t):e.type===1&&r.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):O():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class pr{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new pr(e,t,nr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.Au=void 0,this.listeners=[]}}class OI{constructor(){this.queries=new Dr(e=>Ep(e),Ro),this.onlineState="Unknown",this.Ru=new Set}}async function bu(n,e){const t=M(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new LI),s)try{i.Au=await t.onListen(r)}catch(o){const a=Eu(o,`Initialization of query '${sc(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.bu(t.onlineState),i.Au&&e.Pu(i.Au)&&ku(t)}async function Su(n,e){const t=M(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function NI(n,e){const t=M(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&ku(t)}function PI(n,e,t){const r=M(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function ku(n){n.Ru.forEach(e=>{e.next()})}class Au{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.key=e}}class im{constructor(e){this.key=e}}class MI{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=F(),this.mutatedKeys=F(),this.Gu=bp(e),this.Qu=new nr(this.Gu)}get ju(){return this.qu}Wu(e,t){const r=t?t.zu:new yh,s=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=du(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let g=!1;d&&f?d.data.isEqual(f.data)?m!==p&&(r.track({type:3,doc:f}),g=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),g=!0,(c&&this.Gu(f,c)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),g=!0):d&&!f&&(r.track({type:1,doc:d}),g=!0,(c||u)&&(a=!0)),g&&(f?(o=o.add(f),i=p?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return f(h)-f(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new pr(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=F(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const t=[];return e.forEach(r=>{this.Ku.has(r)||t.push(new im(r))}),this.Ku.forEach(r=>{e.has(r)||t.push(new sm(r))}),t}tc(e){this.qu=e.Hi,this.Ku=F();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return pr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class FI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class UI{constructor(e){this.key=e,this.nc=!1}}class BI{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Dr(a=>Ep(a),Ro),this.rc=new Map,this.oc=new Set,this.uc=new me(x.comparator),this.cc=new Map,this.ac=new gu,this.hc={},this.lc=new Map,this.fc=fr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function VI(n,e){const t=YI(n);let r,s;const i=t.ic.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await uI(t.localStore,bt(e));t.isPrimaryClient&&Xp(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await jI(t,e,r,a==="current",o.resumeToken)}return s}async function jI(n,e,t,r,s){n._c=(h,d,f)=>async function(m,p,g,y){let _=p.view.Wu(g);_.$i&&(_=await fh(m.localStore,p.query,!1).then(({documents:T})=>p.view.Wu(T,_)));const w=y&&y.targetChanges.get(p.targetId),I=p.view.applyChanges(_,m.isPrimaryClient,w);return vh(m,p.targetId,I.Xu),I.snapshot}(n,h,d,f);const i=await fh(n.localStore,e,!0),o=new MI(e,i.Hi),a=o.Wu(i.documents),c=Hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);vh(n,t,u.Xu);const l=new FI(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),u.snapshot}async function $I(n,e){const t=M(n),r=t.ic.get(e),s=t.rc.get(r.targetId);if(s.length>1)return t.rc.set(r.targetId,s.filter(i=>!Ro(i,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await cc(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Jp(t.remoteStore,r.targetId),uc(t,r.targetId)}).catch(js)):(uc(t,r.targetId),await cc(t.localStore,r.targetId,!0))}async function qI(n,e,t){const r=XI(n);try{const s=await function(i,o){const a=M(i),c=ee.now(),u=o.reduce((d,f)=>d.add(f.key),F());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Bt(),m=F();return a.Gi.getEntries(d,u).next(p=>{f=p,f.forEach((g,y)=>{y.isValidDocument()||(m=m.add(g))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(p=>{l=p;const g=[];for(const y of o){const _=pT(y,l.get(y.key).overlayedDocument);_!=null&&g.push(new ln(y.key,_,wp(_.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,g,o)}).next(p=>{h=p;const g=p.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(d,p.batchId,g)})}).then(()=>({batchId:h.batchId,changes:Pp(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new me(q)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,t),await Ks(r,s.changes),await Mo(r.remoteStore)}catch(s){const i=Eu(s,"Failed to persist write");t.reject(i)}}async function om(n,e){const t=M(n);try{const r=await oI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.cc.get(i);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?z(o.nc):s.removedDocuments.size>0&&(z(o.nc),o.nc=!1))}),await Ks(t,r,e)}catch(r){await js(r)}}function _h(n,e,t){const r=M(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=M(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&ku(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zI(n,e,t){const r=M(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new me(x.comparator);o=o.insert(i,be.newNoDocument(i,P.min()));const a=F().add(i),c=new Oo(P.min(),new Map,new fe(q),o,a);await om(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),Cu(r)}else await cc(r.localStore,e,!1).then(()=>uc(r,e,t)).catch(js)}async function HI(n,e){const t=M(n),r=e.batch.batchId;try{const s=await iI(t.localStore,e);cm(t,r,null),am(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ks(t,s)}catch(s){await js(s)}}async function GI(n,e,t){const r=M(n);try{const s=await function(i,o){const a=M(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(z(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);cm(r,e,t),am(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ks(r,s)}catch(s){await js(s)}}function am(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function cm(n,e,t){const r=M(n);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function uc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.rc.get(e))n.ic.delete(r),t&&n.sc.wc(r,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(r=>{n.ac.containsKey(r)||um(n,r)})}function um(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Jp(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),Cu(n))}function vh(n,e,t){for(const r of t)r instanceof sm?(n.ac.addReference(r.key,e),KI(n,r)):r instanceof im?(R("SyncEngine","Document no longer in limbo: "+r.key),n.ac.removeReference(r.key,e),n.ac.containsKey(r.key)||um(n,r.key)):O()}function KI(n,e){const t=e.key,r=t.path.canonicalString();n.uc.get(t)||n.oc.has(r)||(R("SyncEngine","New document in limbo: "+t),n.oc.add(r),Cu(n))}function Cu(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new x(K.fromString(e)),r=n.fc.next();n.cc.set(r,new UI(t)),n.uc=n.uc.insert(t,r),Xp(n.remoteStore,new Dn(bt(Do(t.path)),r,2,au.at))}}async function Ks(n,e,t){const r=M(n),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=_u.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>E.forEach(c,h=>E.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>E.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!$s(l))throw l;R("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(h,m)}}}(r.localStore,i))}async function WI(n,e){const t=M(n);if(!t.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await Kp(t.localStore,e);t.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(v.CANCELLED,i))})}),s.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ks(t,r.ji)}}function QI(n,e){const t=M(n),r=t.cc.get(e);if(r&&r.nc)return F().add(r.key);{let s=F();const i=t.rc.get(e);if(!i)return s;for(const o of i){const a=t.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function YI(n){const e=M(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zI.bind(null,e),e.sc.Wo=NI.bind(null,e.eventManager),e.sc.wc=PI.bind(null,e.eventManager),e}function XI(n){const e=M(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GI.bind(null,e),e}class JI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=No(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return sI(this.persistence,new nI,e.initialUser,this.yt)}yc(e){return new eI(yu.Bs,this.yt)}gc(e){return new hI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZI{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WI.bind(null,this.syncEngine),await xI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OI}createDatastore(e){const t=No(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new mI(s));var s;return function(i,o,a,c){return new _I(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>_h(this.syncEngine,a,0),o=mh.C()?new mh:new dI,new TI(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new BI(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=M(e);R("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Gs(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n,e,t){if(!t)throw new C(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eE(n,e,t,r){if(e===!0&&r===!0)throw new C(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wh(n){if(!x.isDocumentKey(n))throw new C(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Th(n){if(x.isDocumentKey(n))throw new C(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function Ue(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new C(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fo(n);throw new C(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function tE(n,e){if(e<=0)throw new C(v.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map;class Eh{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new C(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,eE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new R0;switch(t.type){case"gapi":const r=t.client;return new N0(r,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new C(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ih.get(e);t&&(R("ComponentProvider","Removing Datastore"),Ih.delete(e),t.terminate())}(this),Promise.resolve()}}function nE(n,e,t,r={}){var s;const i=(n=Ue(n,Uo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Za("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ee.MOCK_USER;else{o=Gy(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(c)}n._authCredentials=new x0(new up(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class dn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dn(this.firestore,e,this._query)}}class Zt extends dn{constructor(e,t,r){super(e,t,Do(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new x(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function ut(n,e,...t){if(n=pe(n),lm("collection","path",e),n instanceof Uo){const r=K.fromString(e,...t);return Th(r),new Zt(n,null,r)}{if(!(n instanceof De||n instanceof Zt))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return Th(r),new Zt(n.firestore,null,r)}}function St(n,e,...t){if(n=pe(n),arguments.length===1&&(e=lp.R()),lm("doc","path",e),n instanceof Uo){const r=K.fromString(e,...t);return wh(r),new De(n,null,new x(r))}{if(!(n instanceof De||n instanceof Zt))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(K.fromString(e,...t));return wh(r),new De(n.firestore,n instanceof Zt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}class rE{constructor(e,t){this._data=t,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._data}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r){this.query=e,this.datastore=t,this.userDataWriter=r}run(){return vI(this.datastore,this.query._query).then(e=>{z(e[0]!==void 0);const t=Object.entries(e[0]).filter(([r,s])=>r==="count_alias").map(([r,s])=>this.userDataWriter.convertValue(s))[0];return z(typeof t=="number"),Promise.resolve(new rE(this.query,{count:t}))})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=lp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{R("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(R("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Eu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oE(n,e){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function aE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cE(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>gh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>gh(e.remoteStore,i)),n.onlineComponents=e}async function cE(n){return n.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await oE(n,new JI)),n.offlineComponents}async function Bo(n){return n.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await aE(n,new ZI)),n.onlineComponents}function uE(n){return Bo(n).then(e=>e.remoteStore)}function lE(n){return Bo(n).then(e=>e.syncEngine)}function hE(n){return Bo(n).then(e=>e.datastore)}async function Ki(n){const e=await Bo(n),t=e.eventManager;return t.onListen=VI.bind(null,e.syncEngine),t.onUnlisten=$I.bind(null,e.syncEngine),t}function dE(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Du({next:h=>{i.enqueueAndForget(()=>Su(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new C(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new C(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Au(Do(o.path),u,{includeMetadataChanges:!0,Nu:!0});return bu(s,l)}(await Ki(n),n.asyncQueue,e,t,r)),r.promise}function fE(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Du({next:h=>{i.enqueueAndForget(()=>Su(s,l)),h.fromCache&&a.source==="server"?c.reject(new C(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Au(o,u,{includeMetadataChanges:!0,Nu:!0});return bu(s,l)}(await Ki(n),n.asyncQueue,e,t,r)),r.promise}class pE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Qp(this,"async_queue_retry"),this.Wc=()=>{const t=Ta();t&&R("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Ta();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Ta();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new yt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$s(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const s=Iu.createAndSchedule(this,e,t,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&O()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function bh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class kt extends Uo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new pE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hm(this),this._firestoreClient.terminate()}}function mE(n,e){const t=typeof n=="object"?n:Nc(),r=typeof n=="string"?n:e||"(default)",s=zn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qy("firestore");i&&nE(s,...i)}return s}function Ws(n){return n._firestoreClient||hm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function hm(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new z0(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new iE(n._authCredentials,n._appCheckCredentials,n._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(Oe.fromBase64String(e))}catch(t){throw new C(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mr(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new C(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new C(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new C(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=/^__.*__$/;class yE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new zs(e,this.data,t,this.fieldTransforms)}}class dm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ln(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Lu{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Wi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(fm(this.sa)&&gE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class _E{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=r||No(e)}da(e,t,r,s=!1){return new Lu({sa:e,methodName:t,fa:r,path:Se.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function jo(n){const e=n._freezeSettings(),t=No(n._databaseId);return new _E(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pm(n,e,t,r,s,i={}){const o=n.da(i.merge||i.mergeFields?2:0,e,t,s);Ou("Data must be an object, but it was:",o,r);const a=mm(r,o);let c,u;if(i.merge)c=new it(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=lc(e,h,t);if(!o.contains(d))throw new C(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ym(l,d)||l.push(d)}c=new it(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yE(new Be(a),c,u)}class $o extends Ru{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $o}}function vE(n,e,t,r){const s=n.da(1,e,t);Ou("Data must be an object, but it was:",s,r);const i=[],o=Be.empty();Gn(r,(c,u)=>{const l=Nu(e,c,t);u=pe(u);const h=s.ca(l);if(u instanceof $o)i.push(l);else{const d=Qs(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new it(i);return new dm(o,a,s.fieldTransforms)}function wE(n,e,t,r,s,i){const o=n.da(1,e,t),a=[lc(e,r,t)],c=[s];if(i.length%2!=0)throw new C(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(lc(e,i[d])),c.push(i[d+1]);const u=[],l=Be.empty();for(let d=a.length-1;d>=0;--d)if(!ym(u,a[d])){const f=a[d];let m=c[d];m=pe(m);const p=o.ca(f);if(m instanceof $o)u.push(f);else{const g=Qs(m,p);g!=null&&(u.push(f),l.set(f,g))}}const h=new it(u);return new dm(l,h,o.fieldTransforms)}function TE(n,e,t,r=!1){return Qs(t,n.da(r?4:3,e))}function Qs(n,e){if(gm(n=pe(n)))return Ou("Unsupported field value:",e,n),mm(n,e);if(n instanceof Ru)return function(t,r){if(!fm(r.sa))throw r.ha(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Qs(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=pe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return cT(r.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=ee.fromDate(t);return{timestampValue:Hi(r.yt,s)}}if(t instanceof ee){const s=new ee(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Hi(r.yt,s)}}if(t instanceof xu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof mr)return{bytesValue:Vp(r.yt,t._byteString)};if(t instanceof De){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pu(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ha(`Unsupported field value: ${Fo(t)}`)}(n,e)}function mm(n,e){const t={};return hp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gn(n,(r,s)=>{const i=Qs(s,e.ra(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function gm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof xu||n instanceof mr||n instanceof De||n instanceof Ru)}function Ou(n,e,t){if(!gm(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Fo(t);throw r==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+r)}}function lc(n,e,t){if((e=pe(e))instanceof Vo)return e._internalPath;if(typeof e=="string")return Nu(n,e);throw Wi("Field path arguments must be of type string or ",n,!1,void 0,t)}const IE=new RegExp("[~\\*/\\[\\]]");function Nu(n,e,t){if(e.search(IE)>=0)throw Wi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vo(...e.split("."))._internalPath}catch{throw Wi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new C(v.INVALID_ARGUMENT,a+n+c)}function ym(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class EE extends _m{data(){return super.data()}}function Pu(n,e){return typeof e=="string"?Nu(n,e):e instanceof Vo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new C(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}class wm extends Mu{}function Ys(n,e,...t){let r=[];e instanceof Mu&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof Fu).length,o=s.filter(a=>a instanceof qo).length;if(i>1||i>0&&o>0)throw new C(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class qo extends wm{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new qo(e,t,r)}_apply(e){const t=this._parse(e);return Tm(e._query,t),new dn(e.firestore,e.converter,rc(e._query,t))}_parse(e){const t=jo(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){kh(l,u);const d=[];for(const f of l)d.push(Sh(a,s,f));h={arrayValue:{values:d}}}else h=Sh(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||kh(l,u),h=TE(o,i,l,u==="in"||u==="not-in");return le.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Xs(n,e,t){const r=e,s=Pu("where",n);return qo._create(s,r,t)}class Fu extends Mu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)Tm(i,a),i=rc(i,a)}(e._query,t),new dn(e.firestore,e.converter,rc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uu extends wm{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Uu(e,t,r)}_apply(e){return new dn(e.firestore,e.converter,$i(e._query,this._limit,this._limitType))}}function bE(n){return tE("limit",n),Uu._create("limit",n,"F")}function Sh(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new C(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ip(e)&&t.indexOf("/")!==-1)throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(K.fromString(t));if(!x.isDocumentKey(r))throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xl(n,new x(r))}if(t instanceof De)return Xl(n,t._key);throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fo(t)}.`)}function kh(n,e){if(!Array.isArray(n)||n.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new C(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Tm(n,e){if(e.isInequality()){const r=hu(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new C(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Tp(n);i!==null&&SE(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function SE(n,e,t){if(!t.isEqual(e))throw new C(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class kE{convertValue(e,t="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){const r={};return Gn(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new xu(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fp(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(gs(e));default:return null}}convertTimestamp(e){const t=rn(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=K.fromString(e);z(Gp(r));const s=new ms(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(t)||Ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Em extends _m{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class vi extends Em{data(e={}){return super.data(e)}}class bm{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new zr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vi(this._firestore,this._userDataWriter,r.key,r,new zr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new C(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new vi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new vi(r._firestore,r._userDataWriter,o.doc.key,o.doc,new zr(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:AE(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function AE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(n){n=Ue(n,De);const e=Ue(n.firestore,kt);return dE(Ws(e),n._key).then(t=>Am(e,n,t))}class zo extends kE{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function Sm(n){n=Ue(n,dn);const e=Ue(n.firestore,kt),t=Ws(e),r=new zo(e);return vm(n._query),fE(t,n._query).then(s=>new bm(e,r,n,s))}function CE(n,e,t){n=Ue(n,De);const r=Ue(n.firestore,kt),s=Im(n.converter,e,t);return Ho(r,[pm(jo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ot.none())])}function km(n,e,t,...r){n=Ue(n,De);const s=Ue(n.firestore,kt),i=jo(s);let o;return o=typeof(e=pe(e))=="string"||e instanceof Vo?wE(i,"updateDoc",n._key,e,t,r):vE(i,"updateDoc",n._key,e),Ho(s,[o.toMutation(n._key,ot.exists(!0))])}function hc(n){return Ho(Ue(n.firestore,kt),[new fu(n._key,ot.none())])}function Js(n,e){const t=Ue(n.firestore,kt),r=St(n),s=Im(n.converter,e);return Ho(t,[pm(jo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ot.exists(!1))]).then(()=>r)}function Zs(n,...e){var t,r,s;n=pe(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof De)u=Ue(n.firestore,kt),l=Do(n._key.path),c={next:h=>{e[o]&&e[o](Am(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=Ue(n,dn);u=Ue(h.firestore,kt),l=h._query;const d=new zo(u);c={next:f=>{e[o]&&e[o](new bm(u,d,h,f))},error:e[o+1],complete:e[o+2]},vm(n._query)}return function(h,d,f,m){const p=new Du(m),g=new Au(d,p,f);return h.asyncQueue.enqueueAndForget(async()=>bu(await Ki(h),g)),()=>{p.bc(),h.asyncQueue.enqueueAndForget(async()=>Su(await Ki(h),g))}}(Ws(u),l,a,c)}function Ho(n,e){return function(t,r){const s=new yt;return t.asyncQueue.enqueueAndForget(async()=>qI(await lE(t),r,s)),s.promise}(Ws(n),e)}function Am(n,e,t){const r=t.docs.get(e._key),s=new zo(n);return new Em(n,s,e._key,r,new zr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n){const e=Ue(n.firestore,kt);return function(t,r,s){const i=new yt;return t.asyncQueue.enqueueAndForget(async()=>{try{if(hn(await uE(t))){const o=await hE(t),a=new sE(r,o,s).run();i.resolve(a)}else i.reject(new C(v.UNAVAILABLE,"Failed to get count result because the client is offline."))}catch(o){i.reject(o)}}),i.promise}(Ws(e),n,new zo(e))}(function(n,e=!0){(function(t){Cr=t})(xs),It(new dt("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new kt(new L0(t.getProvider("auth-internal")),new M0(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ms(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),rt(Kl,"3.8.0",n),rt(Kl,"3.8.0","esm2017")})();const Cm=(n,e,t)=>{var i;const r=document.createElement("li");r.classList.add("comments__comment"),n instanceof HTMLElement||r.classList.add("comments__comment--reply"),r.setAttribute("data-id",e),r.innerHTML=`
        <div class="comments__comment-content">
            <div class="comments__comment-profile mb-sm">
                <div></div>
                <h4>${t.author}</h4>
            </div>
            <p class="text-subtle text-sm ${n instanceof HTMLElement?"mb-sm":""}">
                ${t.content}
            </p>
        </div>
        <ul class="comments__comment-replies">
    `;let s;if(n instanceof HTMLElement){n.appendChild(r);const o=document.createElement("div");o.classList.add("comments__comment-reply"),o.innerHTML=`
            <img src="/icons/reply.svg" alt="reply icon" />
            <span class="text-orange">Reply</span>
        `,o.addEventListener("click",a=>{var l;const u=(l=a.target.parentElement)==null?void 0:l.parentElement;RE(u)}),(i=r.querySelector(".comments__comment-content"))==null||i.appendChild(o)}else s=document.querySelector(`[data-id="${n}"]`),s.children[1].appendChild(r);gb(e)},RE=n=>{const e=document.createElement("form");e.classList.add("mt-sm"),e.id="new-reply-form",e.innerHTML=`
        <div class="form__control form__control--gap">
            <input type="text" class="form__input" placeholder="Reply" name="content" />
            <button type="submit" class="btn icon-btn icon-btn--primary icon-btn--large">
                <img src="/icons/arrow.svg" alt="arrow icon" />
            </button>
        </div>
    `,e.addEventListener("submit",r=>{wb(r)});const t=e.children[0].children[0];t.addEventListener("blur",()=>{n.children[0].removeChild(e)}),n.children[0].appendChild(e),t.focus()},xE=Array.from(document.querySelectorAll(".header")),Go=document.getElementById("login-page"),Dm=document.getElementById("register-page"),Vu=document.getElementById("dashboard-page"),xr=document.getElementById("projects-page"),Ko=document.getElementById("project-page"),ju=document.getElementById("task-page"),LE=[Go,Dm,Vu,Ko,xr,ju],OE=document.getElementById("account-username"),NE=document.getElementById("in-progress-projects-btn"),PE=document.getElementById("completed-projects-btn"),ME=document.getElementById("dashboard-back-btn"),FE=document.getElementById("projects-back-btn"),UE=document.getElementById("project-back-btn"),BE=document.getElementById("logout-btn"),VE=Array.from(document.querySelectorAll(".new-project-btn")),jE=Array.from(document.querySelectorAll(".new-task-btn")),$E=document.getElementById("new-note-btn"),qE=Array.from(document.querySelectorAll(".close-modal-btn")),Wo=document.getElementById("new-project-overlay"),Qo=document.getElementById("new-task-overlay"),Rm=document.getElementById("new-note-overlay"),xm=document.getElementById("delete-project-overlay"),Lm=document.getElementById("delete-task-overlay"),zE=[Wo,Qo,Rm,xm,Lm],Ia=Array.from(document.querySelectorAll(".tile")),wi=document.getElementById("login-form"),ns=document.getElementById("login-form-errors"),HE=document.getElementById("login-form-link"),GE=document.getElementById("google-auth-btn"),Hr=document.getElementById("signup-form"),kn=document.getElementById("signup-form-errors"),KE=document.getElementById("signup-form-link"),Me=document.getElementById("new-project-form"),Gr=document.getElementById("new-project-form-errors"),Ah=document.getElementById("new-project-succes-message"),Ch=document.getElementById("project-deletion-succes-message"),$u=document.getElementById("new-project-collaborators-list"),WE=document.getElementById("add-collaborator-btn"),QE=document.getElementById("create-project-btn"),Ze=document.getElementById("new-task-form"),Kr=document.getElementById("new-task-form-errors"),Dh=document.getElementById("new-task-succes-message"),Rh=document.getElementById("task-deletion-succes-message"),Qi=document.getElementById("new-task-dropdown"),YE=document.getElementById("new-task-dropdown-list"),Om=Array.from(document.querySelectorAll(".form__dropdown-option")),Nm=Array.from(document.querySelectorAll(".new-task__chip")),XE=document.getElementById("create-task-btn"),JE=document.getElementById("new-note-editor"),xh=document.getElementById("new-note-succes-message"),dc=document.getElementById("new-comment-form"),At=document.getElementById("markdown-content"),qu=document.getElementById("markdown-preview"),ZE=document.getElementById("heading-hotkey"),eb=document.getElementById("subtitle-hotkey"),tb=document.getElementById("list-hotkey"),nb=document.getElementById("code-hotkey"),rb=document.getElementById("preview-markdown-btn"),sb=document.getElementById("edit-project-btn"),ib=document.getElementById("delete-project-btn"),ob=document.getElementById("edit-task-btn"),ab=document.getElementById("delete-task-btn"),cb=document.getElementById("confirm-delete-project-btn"),ub=document.getElementById("confirm-delete-task-btn"),Pm=document.getElementById("new-password-input"),lb=document.getElementById("password-security-bars"),Mm=document.getElementById("dashboard-task-list"),fc=document.getElementById("projects-in-progress-btn"),pc=document.getElementById("projects-completed-btn"),Rn=document.getElementById("projects-list"),hb=document.getElementById("in-progress-projects-count"),db=document.getElementById("completed-projects-count"),Lh=document.getElementById("project-info"),fb=document.getElementById("task-info"),gr=document.getElementById("todo-task-list"),yr=document.getElementById("in-progress-task-list"),_r=document.getElementById("completed-task-list"),Oh=document.getElementById("comments-list"),Fm=document.getElementById("notes-list"),re=mE(of),pb=async n=>{await Js(ut(re,"comments"),n)},Um=async n=>{const e=ut(re,"comments"),t=Ys(e,Xs("projectId","==",n));Zs(t,r=>{Oh.innerHTML="",r.forEach(s=>{Cm(Oh,s.id,s.data())})})},mb=async(n,e)=>{await Js(ut(re,`comments/${n}/replies`),e)},gb=async n=>{const e=ut(re,`comments/${n}/replies`);Zs(e,t=>{t.forEach(r=>{Cm(n,r.id,r.data())})})},lt=n=>n!=="",Nh=(n,e)=>!(e.length<n),yb=n=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n),_b=()=>{let n=Pm.value;if(n.length==0){Fr(0);return}if(n.length<8){Fr(1);return}let e=!1,t=!1,r=!1,s=!1;for(let o=0;o<n.length;o++){let a=n.charAt(o);a>="A"&&a<="Z"?e=!0:a>="a"&&a<="z"?t=!0:a>="0"&&a<="9"?r=!0:s=!0}let i=0;if(e&&i++,t&&i++,r&&i++,s&&i++,i>=3){Fr(3);return}else if(i==2){Fr(2);return}else{Fr(1);return}},Fr=n=>{Array.from(lb.children).forEach((t,r)=>{n<=r?t.classList.remove("form__security-bar--active"):t.classList.add("form__security-bar--active")})},vb=async n=>{n.preventDefault();const e=dc.content.value;lt(e)&&pb({author:sessionStorage.getItem("username"),content:e,projectId:sessionStorage.getItem("currentProjectId")}),dc.reset()},wb=async n=>{var s,i;n.preventDefault();const e=n.target,t=e.content.value,r=(i=(s=e.parentElement)==null?void 0:s.parentElement)==null?void 0:i.getAttribute("data-id");lt(t)&&mb(r,{author:sessionStorage.getItem("username"),content:t}),e.reset()},Tb=(n,e)=>{const t=document.createElement("li");t.classList.add("task__note"),t.setAttribute("data-id",n),t.innerHTML=`${e.content}`,Fm.appendChild(t)};function Rt(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Bm(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vr={duration:.5,overwrite:!1,delay:0},zu,Re,ue,et=1e8,G=1/et,mc=Math.PI*2,Ib=mc/4,Eb=0,Vm=Math.sqrt,bb=Math.cos,Sb=Math.sin,_e=function(e){return typeof e=="string"},Z=function(e){return typeof e=="function"},Vt=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},Ct=function(e){return typeof e=="object"},je=function(e){return e!==!1},jm=function(){return typeof window<"u"},pi=function(e){return Z(e)||_e(e)},$m=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xe=Array.isArray,gc=/(?:-?\.?\d|\.)+/gi,qm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ea=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zm=/[+-]=-?[.\d]+/,Hm=/[^,'"\[\]\s]+/gi,kb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Y,Je,yc,Gu,Qe={},Yi={},Gm,Km=function(e){return(Yi=Vn(e,Qe))&&Ye},Ku=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xi=function(e,t){return!t&&console.warn(e)},Wm=function(e,t){return e&&(Qe[e]=t)&&Yi&&(Yi[e]=t)||Qe},ws=function(){return 0},Ab={suppressEvents:!0,isStart:!0,kill:!1},Ti={suppressEvents:!0,kill:!1},Cb={suppressEvents:!0},Wu={},en=[],_c={},Qm,ze={},ba={},Ph=30,Ii=[],Qu="",Yu=function(e){var t=e[0],r,s;if(Ct(t)||Z(t)||(e=[e]),!(r=(t._gsap||{}).harness)){for(s=Ii.length;s--&&!Ii[s].targetTest(t););r=Ii[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new yg(e[s],r)))||e.splice(s,1);return e},xn=function(e){return e._gsap||Yu(tt(e))[0]._gsap},Ym=function(e,t,r){return(r=e[t])&&Z(r)?e[t]():Hu(r)&&e.getAttribute&&e.getAttribute(t)||r},$e=function(e,t){return(e=e.split(",")).forEach(t)||e},ne=function(e){return Math.round(e*1e5)/1e5||0},we=function(e){return Math.round(e*1e7)/1e7||0},rr=function(e,t){var r=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),r==="+"?e+s:r==="-"?e-s:r==="*"?e*s:e/s},Db=function(e,t){for(var r=t.length,s=0;e.indexOf(t[s])<0&&++s<r;);return s<r},Ji=function(){var e=en.length,t=en.slice(0),r,s;for(_c={},en.length=0,r=0;r<e;r++)s=t[r],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Xm=function(e,t,r,s){en.length&&!Re&&Ji(),e.render(t,r,s||Re&&t<0&&(e._initted||e._startAt)),en.length&&!Re&&Ji()},Jm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hm).length<2?t:_e(e)?e.trim():e},Zm=function(e){return e},at=function(e,t){for(var r in t)r in e||(e[r]=t[r]);return e},Rb=function(e){return function(t,r){for(var s in r)s in t||s==="duration"&&e||s==="ease"||(t[s]=r[s])}},Vn=function(e,t){for(var r in t)e[r]=t[r];return e},Mh=function n(e,t){for(var r in t)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(e[r]=Ct(t[r])?n(e[r]||(e[r]={}),t[r]):t[r]);return e},Zi=function(e,t){var r={},s;for(s in e)s in t||(r[s]=e[s]);return r},rs=function(e){var t=e.parent||Y,r=e.keyframes?Rb(xe(e.keyframes)):at;if(je(e.inherit))for(;t;)r(e,t.vars.defaults),t=t.parent||t._dp;return e},xb=function(e,t){for(var r=e.length,s=r===t.length;s&&r--&&e[r]===t[r];);return r<0},eg=function(e,t,r,s,i){r===void 0&&(r="_first"),s===void 0&&(s="_last");var o=e[s],a;if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[r],e[r]=t),t._next?t._next._prev=t:e[s]=t,t._prev=o,t.parent=t._dp=e,t},Yo=function(e,t,r,s){r===void 0&&(r="_first"),s===void 0&&(s="_last");var i=t._prev,o=t._next;i?i._next=o:e[r]===t&&(e[r]=o),o?o._prev=i:e[s]===t&&(e[s]=i),t._next=t._prev=t.parent=null},on=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ln=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var r=e;r;)r._dirty=1,r=r.parent;return e},Lb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vc=function(e,t,r,s){return e._startAt&&(Re?e._startAt.revert(Ti):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},Ob=function n(e){return!e||e._ts&&n(e.parent)},Fh=function(e){return e._repeat?wr(e._tTime,e=e.duration()+e._rDelay)*e:0},wr=function(e,t){var r=Math.floor(e/=t);return e&&r===e?r-1:r},eo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xo=function(e){return e._end=we(e._start+(e._tDur/Math.abs(e._ts||e._rts||G)||0))},Jo=function(e,t){var r=e._dp;return r&&r.smoothChildTiming&&e._ts&&(e._start=we(r._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xo(e),r._dirty||Ln(r,e)),e},tg=function(e,t){var r;if((t._time||t._initted&&!t._dur)&&(r=eo(e.rawTime(),t),(!t._dur||ei(0,t.totalDuration(),r)-t._tTime>G)&&t.render(r,!0)),Ln(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(r=e;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;e._zTime=-G}},gt=function(e,t,r,s){return t.parent&&on(t),t._start=we((Vt(r)?r:r||e!==Y?Xe(e,r,t):e._time)+t._delay),t._end=we(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),eg(e,t,"_first","_last",e._sort?"_start":0),wc(t)||(e._recent=t),s||tg(e,t),e._ts<0&&Jo(e,e._tTime),e},ng=function(e,t){return(Qe.ScrollTrigger||Ku("scrollTrigger",t))&&Qe.ScrollTrigger.create(t,e)},rg=function(e,t,r,s,i){if(Ju(e,t,i),!e._initted)return 1;if(!r&&e._pt&&!Re&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qm!==He.frame)return en.push(e),e._lazy=[i,s],1},Nb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},wc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Pb=function(e,t,r,s){var i=e.ratio,o=t<0||!t&&(!e._start&&Nb(e)&&!(!e._initted&&wc(e))||(e._ts<0||e._dp._ts<0)&&!wc(e))?0:1,a=e._rDelay,c=0,u,l,h;if(a&&e._repeat&&(c=ei(0,e._tDur,t),l=wr(c,a),e._yoyo&&l&1&&(o=1-o),l!==wr(e._tTime,a)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||Re||s||e._zTime===G||!t&&e._zTime){if(!e._initted&&rg(e,t,s,r,c))return;for(h=e._zTime,e._zTime=t||(r?G:0),r||(r=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&vc(e,t,r,!0),e._onUpdate&&!r&&nt(e,"onUpdate"),c&&e._repeat&&!r&&e.parent&&nt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&on(e,1),!r&&!Re&&(nt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Mb=function(e,t,r){var s;if(r>t)for(s=e._first;s&&s._start<=r;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=r;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},Tr=function(e,t,r,s){var i=e._repeat,o=we(t)||0,a=e._tTime/e._tDur;return a&&!s&&(e._time*=o/e._dur),e._dur=o,e._tDur=i?i<0?1e10:we(o*(i+1)+e._rDelay*i):o,a>0&&!s&&Jo(e,e._tTime=e._tDur*a),e.parent&&Xo(e),r||Ln(e.parent,e),e},Uh=function(e){return e instanceof Ve?Ln(e):Tr(e,e._dur)},Fb={_start:0,endTime:ws,totalDuration:ws},Xe=function n(e,t,r){var s=e.labels,i=e._recent||Fb,o=e.duration()>=et?i.endTime(!1):e._dur,a,c,u;return _e(t)&&(isNaN(t)||t in s)?(c=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?i._start:i.endTime(i._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?i:r).totalDuration()/100:1)):a<0?(t in s||(s[t]=o),s[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&r&&(c=c/100*(xe(r)?r[0]:r).totalDuration()),a>1?n(e,t.substr(0,a-1),r)+c:o+c)):t==null?o:+t},ss=function(e,t,r){var s=Vt(t[1]),i=(s?2:1)+(e<2?0:1),o=t[i],a,c;if(s&&(o.duration=t[1]),o.parent=r,e){for(a=o,c=r;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=je(c.vars.inherit)&&c.parent;o.immediateRender=je(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[i-1]}return new de(t[0],o,t[i+1])},fn=function(e,t){return e||e===0?t(e):t},ei=function(e,t,r){return r<e?e:r>t?t:r},ke=function(e,t){return!_e(e)||!(t=kb.exec(e))?"":t[1]},Ub=function(e,t,r){return fn(r,function(s){return ei(e,t,s)})},Tc=[].slice,sg=function(e,t){return e&&Ct(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ct(e[0]))&&!e.nodeType&&e!==Je},Bb=function(e,t,r){return r===void 0&&(r=[]),e.forEach(function(s){var i;return _e(s)&&!t||sg(s,1)?(i=r).push.apply(i,tt(s)):r.push(s)})||r},tt=function(e,t,r){return ue&&!t&&ue.selector?ue.selector(e):_e(e)&&!r&&(yc||!Ir())?Tc.call((t||Gu).querySelectorAll(e),0):xe(e)?Bb(e,r):sg(e)?Tc.call(e,0):e?[e]:[]},Ic=function(e){return e=tt(e)[0]||Xi("Invalid scope")||{},function(t){var r=e.current||e.nativeElement||e;return tt(t,r.querySelectorAll?r:r===e?Xi("Invalid scope")||Gu.createElement("div"):e)}},ig=function(e){return e.sort(function(){return .5-Math.random()})},og=function(e){if(Z(e))return e;var t=Ct(e)?e:{each:e},r=On(t.ease),s=t.from||0,i=parseFloat(t.base)||0,o={},a=s>0&&s<1,c=isNaN(s)||a,u=t.axis,l=s,h=s;return _e(s)?l=h={center:.5,edges:.5,end:1}[s]||0:!a&&c&&(l=s[0],h=s[1]),function(d,f,m){var p=(m||t).length,g=o[p],y,_,w,I,T,A,k,S,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,et])[1],!b){for(k=-et;k<(k=m[b++].getBoundingClientRect().left)&&b<p;);b--}for(g=o[p]=[],y=c?Math.min(b,p)*l-.5:s%b,_=b===et?0:c?p*h/b-.5:s/b|0,k=0,S=et,A=0;A<p;A++)w=A%b-y,I=_-(A/b|0),g[A]=T=u?Math.abs(u==="y"?I:w):Vm(w*w+I*I),T>k&&(k=T),T<S&&(S=T);s==="random"&&ig(g),g.max=k-S,g.min=S,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:u?u==="y"?p/b:b:Math.max(b,p/b))||0)*(s==="edges"?-1:1),g.b=p<0?i-p:i,g.u=ke(t.amount||t.each)||0,r=r&&p<0?pg(r):r}return p=(g[d]-g.min)/g.max||0,we(g.b+(r?r(p):p)*g.v)+g.u}},Ec=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(r){var s=we(Math.round(parseFloat(r)/e)*e*t);return(s-s%1)/t+(Vt(r)?0:ke(r))}},ag=function(e,t){var r=xe(e),s,i;return!r&&Ct(e)&&(s=r=e.radius||et,e.values?(e=tt(e.values),(i=!Vt(e[0]))&&(s*=s)):e=Ec(e.increment)),fn(t,r?Z(e)?function(o){return i=e(o),Math.abs(i-o)<=s?i:o}:function(o){for(var a=parseFloat(i?o.x:o),c=parseFloat(i?o.y:0),u=et,l=0,h=e.length,d,f;h--;)i?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<u&&(u=d,l=h);return l=!s||u<=s?e[l]:o,i||l===o||Vt(o)?l:l+ke(o)}:Ec(e))},cg=function(e,t,r,s){return fn(xe(e)?!t:r===!0?!!(r=0):!s,function(){return xe(e)?e[~~(Math.random()*e.length)]:(r=r||1e-5)&&(s=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((e-r/2+Math.random()*(t-e+r*.99))/r)*r*s)/s})},Vb=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(s){return t.reduce(function(i,o){return o(i)},s)}},jb=function(e,t){return function(r){return e(parseFloat(r))+(t||ke(r))}},$b=function(e,t,r){return lg(e,t,0,1,r)},ug=function(e,t,r){return fn(r,function(s){return e[~~t(s)]})},qb=function n(e,t,r){var s=t-e;return xe(e)?ug(e,n(0,e.length),t):fn(r,function(i){return(s+(i-e)%s)%s+e})},zb=function n(e,t,r){var s=t-e,i=s*2;return xe(e)?ug(e,n(0,e.length-1),t):fn(r,function(o){return o=(i+(o-e)%i)%i||0,e+(o>s?i-o:o)})},Ts=function(e){for(var t=0,r="",s,i,o,a;~(s=e.indexOf("random(",t));)o=e.indexOf(")",s),a=e.charAt(s+7)==="[",i=e.substr(s+7,o-s-7).match(a?Hm:gc),r+=e.substr(t,s-t)+cg(a?i:+i[0],a?0:+i[1],+i[2]||1e-5),t=o+1;return r+e.substr(t,e.length-t)},lg=function(e,t,r,s,i){var o=t-e,a=s-r;return fn(i,function(c){return r+((c-e)/o*a||0)})},Hb=function n(e,t,r,s){var i=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!i){var o=_e(e),a={},c,u,l,h,d;if(r===!0&&(s=1)&&(r=null),o)e={p:e},t={p:t};else if(xe(e)&&!xe(t)){for(l=[],h=e.length,d=h-2,u=1;u<h;u++)l.push(n(e[u-1],e[u]));h--,i=function(m){m*=h;var p=Math.min(d,~~m);return l[p](m-p)},r=t}else s||(e=Vn(xe(e)?[]:{},e));if(!l){for(c in t)Xu.call(a,e,c,"get",t[c]);i=function(m){return tl(m,a)||(o?e.p:e)}}}return fn(r,i)},Bh=function(e,t,r){var s=e.labels,i=et,o,a,c;for(o in s)a=s[o]-t,a<0==!!r&&a&&i>(a=Math.abs(a))&&(c=o,i=a);return c},nt=function(e,t,r){var s=e.vars,i=s[t],o=ue,a=e._ctx,c,u,l;if(i)return c=s[t+"Params"],u=s.callbackScope||e,r&&en.length&&Ji(),a&&(ue=a),l=c?i.apply(u,c):i.call(u),ue=o,l},Wr=function(e){return on(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Re),e.progress()<1&&nt(e,"onInterrupt"),e},Zn,Gb=function(e){e=!e.name&&e.default||e;var t=e.name,r=Z(e),s=t&&!r&&e.init?function(){this._props=[]}:e,i={init:ws,render:tl,add:Xu,kill:cS,modifier:aS,rawVars:0},o={targetTest:0,get:0,getSetter:el,aliases:{},register:0};if(Ir(),e!==s){if(ze[t])return;at(s,at(Zi(e,i),o)),Vn(s.prototype,Vn(i,Zi(e,o))),ze[s.prop=t]=s,e.targetTest&&(Ii.push(s),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wm(t,s),e.register&&e.register(Ye,s,qe)},H=255,Qr={aqua:[0,H,H],lime:[0,H,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,H],navy:[0,0,128],white:[H,H,H],olive:[128,128,0],yellow:[H,H,0],orange:[H,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[H,0,0],pink:[H,192,203],cyan:[0,H,H],transparent:[H,H,H,0]},Sa=function(e,t,r){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(r-t)*e*6:e<.5?r:e*3<2?t+(r-t)*(2/3-e)*6:t)*H+.5|0},hg=function(e,t,r){var s=e?Vt(e)?[e>>16,e>>8&H,e&H]:0:Qr.black,i,o,a,c,u,l,h,d,f,m;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qr[e])s=Qr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(i=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+i+i+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&H,s&H,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&H,e&H]}else if(e.substr(0,3)==="hsl"){if(s=m=e.match(gc),!t)c=+s[0]%360/360,u=+s[1]/100,l=+s[2]/100,o=l<=.5?l*(u+1):l+u-l*u,i=l*2-o,s.length>3&&(s[3]*=1),s[0]=Sa(c+1/3,i,o),s[1]=Sa(c,i,o),s[2]=Sa(c-1/3,i,o);else if(~e.indexOf("="))return s=e.match(qm),r&&s.length<4&&(s[3]=1),s}else s=e.match(gc)||Qr.transparent;s=s.map(Number)}return t&&!m&&(i=s[0]/H,o=s[1]/H,a=s[2]/H,h=Math.max(i,o,a),d=Math.min(i,o,a),l=(h+d)/2,h===d?c=u=0:(f=h-d,u=l>.5?f/(2-h-d):f/(h+d),c=h===i?(o-a)/f+(o<a?6:0):h===o?(a-i)/f+2:(i-o)/f+4,c*=60),s[0]=~~(c+.5),s[1]=~~(u*100+.5),s[2]=~~(l*100+.5)),r&&s.length<4&&(s[3]=1),s},dg=function(e){var t=[],r=[],s=-1;return e.split(tn).forEach(function(i){var o=i.match(Jn)||[];t.push.apply(t,o),r.push(s+=o.length+1)}),t.c=r,t},Vh=function(e,t,r){var s="",i=(e+s).match(tn),o=t?"hsla(":"rgba(",a=0,c,u,l,h;if(!i)return e;if(i=i.map(function(d){return(d=hg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),r&&(l=dg(e),c=r.c,c.join(s)!==l.c.join(s)))for(u=e.replace(tn,"1").split(Jn),h=u.length-1;a<h;a++)s+=u[a]+(~c.indexOf(a)?i.shift()||o+"0,0,0,0)":(l.length?l:i.length?i:r).shift());if(!u)for(u=e.split(tn),h=u.length-1;a<h;a++)s+=u[a]+i[a];return s+u[h]},tn=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qr)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Kb=/hsl[a]?\(/,fg=function(e){var t=e.join(" "),r;if(tn.lastIndex=0,tn.test(t))return r=Kb.test(t),e[1]=Vh(e[1],r),e[0]=Vh(e[0],r,dg(e[1])),!0},Is,He=function(){var n=Date.now,e=500,t=33,r=n(),s=r,i=1e3/240,o=i,a=[],c,u,l,h,d,f,m=function p(g){var y=n()-s,_=g===!0,w,I,T,A;if(y>e&&(r+=y-t),s+=y,T=s-r,w=T-o,(w>0||_)&&(A=++h.frame,d=T-h.time*1e3,h.time=T=T/1e3,o+=w+(w>=i?4:i-w),I=1),_||(c=u(p)),I)for(f=0;f<a.length;f++)a[f](T,d,A,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Gm&&(!yc&&jm()&&(Je=yc=window,Gu=Je.document||{},Qe.gsap=Ye,(Je.gsapVersions||(Je.gsapVersions=[])).push(Ye.version),Km(Yi||Je.GreenSockGlobals||!Je.gsap&&Je||{}),l=Je.requestAnimationFrame),c&&h.sleep(),u=l||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Is=1,m(2))},sleep:function(){(l?Je.cancelAnimationFrame:clearTimeout)(c),Is=0,u=ws},lagSmoothing:function(g,y){e=g||1/0,t=Math.min(y||33,e)},fps:function(g){i=1e3/(g||240),o=h.time*1e3+i},add:function(g,y,_){var w=y?function(I,T,A,k){g(I,T,A,k),h.remove(w)}:g;return h.remove(g),a[_?"unshift":"push"](w),Ir(),w},remove:function(g,y){~(y=a.indexOf(g))&&a.splice(y,1)&&f>=y&&f--},_listeners:a},h}(),Ir=function(){return!Is&&He.wake()},U={},Wb=/^[\d.\-M][\d.\-,\s]/,Qb=/["']/g,Yb=function(e){for(var t={},r=e.substr(1,e.length-3).split(":"),s=r[0],i=1,o=r.length,a,c,u;i<o;i++)c=r[i],a=i!==o-1?c.lastIndexOf(","):c.length,u=c.substr(0,a),t[s]=isNaN(u)?u.replace(Qb,"").trim():+u,s=c.substr(a+1).trim();return t},Xb=function(e){var t=e.indexOf("(")+1,r=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<r?e.indexOf(")",r+1):r)},Jb=function(e){var t=(e+"").split("("),r=U[t[0]];return r&&t.length>1&&r.config?r.config.apply(null,~e.indexOf("{")?[Yb(t[1])]:Xb(e).split(",").map(Jm)):U._CE&&Wb.test(e)?U._CE("",e):r},pg=function(e){return function(t){return 1-e(1-t)}},mg=function n(e,t){for(var r=e._first,s;r;)r instanceof Ve?n(r,t):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==t&&(r.timeline?n(r.timeline,t):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=t)),r=r._next},On=function(e,t){return e&&(Z(e)?e:U[e]||Jb(e))||t},Kn=function(e,t,r,s){r===void 0&&(r=function(c){return 1-t(1-c)}),s===void 0&&(s=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var i={easeIn:t,easeOut:r,easeInOut:s},o;return $e(e,function(a){U[a]=Qe[a]=i,U[o=a.toLowerCase()]=r;for(var c in i)U[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=U[a+"."+c]=i[c]}),i},gg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ka=function n(e,t,r){var s=t>=1?t:1,i=(r||(e?.3:.45))/(t<1?t:1),o=i/mc*(Math.asin(1/s)||0),a=function(l){return l===1?1:s*Math.pow(2,-10*l)*Sb((l-o)*i)+1},c=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:gg(a);return i=mc/i,c.config=function(u,l){return n(e,u,l)},c},Aa=function n(e,t){t===void 0&&(t=1.70158);var r=function(o){return o?--o*o*((t+1)*o+t)+1:0},s=e==="out"?r:e==="in"?function(i){return 1-r(1-i)}:gg(r);return s.config=function(i){return n(e,i)},s};$e("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Kn(n+",Power"+(t-1),e?function(r){return Math.pow(r,t)}:function(r){return r},function(r){return 1-Math.pow(1-r,t)},function(r){return r<.5?Math.pow(r*2,t)/2:1-Math.pow((1-r)*2,t)/2})});U.Linear.easeNone=U.none=U.Linear.easeIn;Kn("Elastic",ka("in"),ka("out"),ka());(function(n,e){var t=1/e,r=2*t,s=2.5*t,i=function(a){return a<t?n*a*a:a<r?n*Math.pow(a-1.5/e,2)+.75:a<s?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Kn("Bounce",function(o){return 1-i(1-o)},i)})(7.5625,2.75);Kn("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Kn("Circ",function(n){return-(Vm(1-n*n)-1)});Kn("Sine",function(n){return n===1?1:-bb(n*Ib)+1});Kn("Back",Aa("in"),Aa("out"),Aa());U.SteppedEase=U.steps=Qe.SteppedEase={config:function(e,t){e===void 0&&(e=1);var r=1/e,s=e+(t?0:1),i=t?1:0,o=1-G;return function(a){return((s*ei(0,o,a)|0)+i)*r}}};vr.ease=U["quad.out"];$e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Qu+=n+","+n+"Params,"});var yg=function(e,t){this.id=Eb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ym,this.set=t?t.getSetter:el},Er=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tr(this,+t.duration,1,1),this.data=t.data,ue&&(this._ctx=ue,ue.data.push(this)),Is||He.wake()}var e=n.prototype;return e.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},e.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},e.totalDuration=function(r){return arguments.length?(this._dirty=0,Tr(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(r,s){if(Ir(),!arguments.length)return this._tTime;var i=this._dp;if(i&&i.smoothChildTiming&&this._ts){for(Jo(this,r),!i._dp||i.parent||tg(i,this);i&&i.parent;)i.parent._time!==i._start+(i._ts>=0?i._tTime/i._ts:(i.totalDuration()-i._tTime)/-i._ts)&&i.totalTime(i._tTime,!0),i=i.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&gt(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===G||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Xm(this,r,s)),this},e.time=function(r,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+Fh(this))%(this._dur+this._rDelay)||(r?this._dur:0),s):this._time},e.totalProgress=function(r,s){return arguments.length?this.totalTime(this.totalDuration()*r,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(r,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+Fh(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(r,s){var i=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*i,s):this._repeat?wr(this._tTime,i)+1:1},e.timeScale=function(r){if(!arguments.length)return this._rts===-G?0:this._rts;if(this._rts===r)return this;var s=this.parent&&this._ts?eo(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-G?0:this._rts,this.totalTime(ei(-this._delay,this._tDur,s),!0),Xo(this),Lb(this)},e.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==G&&(this._tTime-=G)))),this):this._ps},e.startTime=function(r){if(arguments.length){this._start=r;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&gt(s,this,r-this._delay),this}return this._start},e.endTime=function(r){return this._start+(je(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(r){var s=this.parent||this._dp;return s?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eo(s.rawTime(r),this):this._tTime:this._tTime},e.revert=function(r){r===void 0&&(r=Cb);var s=Re;return Re=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Re=s,this},e.globalTime=function(r){for(var s=this,i=arguments.length?r:s.rawTime();s;)i=s._start+i/(s._ts||1),s=s._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(r):i},e.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,Uh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(r){if(arguments.length){var s=this._time;return this._rDelay=r,Uh(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},e.seek=function(r,s){return this.totalTime(Xe(this,r),je(s))},e.restart=function(r,s){return this.play().totalTime(r?-this._delay:0,je(s))},e.play=function(r,s){return r!=null&&this.seek(r,s),this.reversed(!1).paused(!1)},e.reverse=function(r,s){return r!=null&&this.seek(r||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(r,s){return r!=null&&this.seek(r,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-G:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-G,this},e.isActive=function(){var r=this.parent||this._dp,s=this._start,i;return!!(!r||this._ts&&this._initted&&r.isActive()&&(i=r.rawTime(!0))>=s&&i<this.endTime(!0)-G)},e.eventCallback=function(r,s,i){var o=this.vars;return arguments.length>1?(s?(o[r]=s,i&&(o[r+"Params"]=i),r==="onUpdate"&&(this._onUpdate=s)):delete o[r],this):o[r]},e.then=function(r){var s=this;return new Promise(function(i){var o=Z(r)?r:Zm,a=function(){var u=s.then;s.then=null,Z(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),i(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},e.kill=function(){Wr(this)},n}();at(Er.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-G,_prom:0,_ps:!1,_rts:1});var Ve=function(n){Bm(e,n);function e(r,s){var i;return r===void 0&&(r={}),i=n.call(this,r)||this,i.labels={},i.smoothChildTiming=!!r.smoothChildTiming,i.autoRemoveChildren=!!r.autoRemoveChildren,i._sort=je(r.sortChildren),Y&&gt(r.parent||Y,Rt(i),s),r.reversed&&i.reverse(),r.paused&&i.paused(!0),r.scrollTrigger&&ng(Rt(i),r.scrollTrigger),i}var t=e.prototype;return t.to=function(s,i,o){return ss(0,arguments,this),this},t.from=function(s,i,o){return ss(1,arguments,this),this},t.fromTo=function(s,i,o,a){return ss(2,arguments,this),this},t.set=function(s,i,o){return i.duration=0,i.parent=this,rs(i).repeatDelay||(i.repeat=0),i.immediateRender=!!i.immediateRender,new de(s,i,Xe(this,o),1),this},t.call=function(s,i,o){return gt(this,de.delayedCall(0,s,i),o)},t.staggerTo=function(s,i,o,a,c,u,l){return o.duration=i,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=l,o.parent=this,new de(s,o,Xe(this,c)),this},t.staggerFrom=function(s,i,o,a,c,u,l){return o.runBackwards=1,rs(o).immediateRender=je(o.immediateRender),this.staggerTo(s,i,o,a,c,u,l)},t.staggerFromTo=function(s,i,o,a,c,u,l,h){return a.startAt=o,rs(a).immediateRender=je(a.immediateRender),this.staggerTo(s,i,a,c,u,l,h)},t.render=function(s,i,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,l=s<=0?0:we(s),h=this._zTime<0!=s<0&&(this._initted||!u),d,f,m,p,g,y,_,w,I,T,A,k;if(this!==Y&&l>c&&s>=0&&(l=c),l!==this._tTime||o||h){if(a!==this._time&&u&&(l+=this._time-a,s+=this._time-a),d=l,I=this._start,w=this._ts,y=!w,h&&(u||(a=this._zTime),(s||!i)&&(this._zTime=s)),this._repeat){if(A=this._yoyo,g=u+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(g*100+s,i,o);if(d=we(l%g),l===c?(p=this._repeat,d=u):(p=~~(l/g),p&&p===l/g&&(d=u,p--),d>u&&(d=u)),T=wr(this._tTime,g),!a&&this._tTime&&T!==p&&(T=p),A&&p&1&&(d=u-d,k=1),p!==T&&!this._lock){var S=A&&T&1,b=S===(A&&p&1);if(p<T&&(S=!S),a=S?0:u,this._lock=1,this.render(a||(k?0:we(p*g)),i,!u)._lock=0,this._tTime=l,!i&&this.parent&&nt(this,"onRepeat"),this.vars.repeatRefresh&&!k&&(this.invalidate()._lock=1),a&&a!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,b&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!k&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;mg(this,k)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Mb(this,we(a),we(d)),_&&(l-=d-(d=_._start))),this._tTime=l,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&d&&!i&&(nt(this,"onStart"),this._tTime!==l))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&_!==f){if(f.parent!==this)return this.render(s,i,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,i,o),d!==this._time||!this._ts&&!y){_=0,m&&(l+=this._zTime=-G);break}}f=m}else{f=this._last;for(var V=s<0?s:d;f;){if(m=f._prev,(f._act||V<=f._end)&&f._ts&&_!==f){if(f.parent!==this)return this.render(s,i,o);if(f.render(f._ts>0?(V-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(V-f._start)*f._ts,i,o||Re&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!y){_=0,m&&(l+=this._zTime=V?-G:G);break}}f=m}}if(_&&!i&&(this.pause(),_.render(d>=a?0:-G)._zTime=d>=a?1:-1,this._ts))return this._start=I,Xo(this),this.render(s,i,o);this._onUpdate&&!i&&nt(this,"onUpdate",!0),(l===c&&this._tTime>=this.totalDuration()||!l&&a)&&(I===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!u)&&(l===c&&this._ts>0||!l&&this._ts<0)&&on(this,1),!i&&!(s<0&&!a)&&(l||a||!c)&&(nt(this,l===c&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,i){var o=this;if(Vt(i)||(i=Xe(this,i,s)),!(s instanceof Er)){if(xe(s))return s.forEach(function(a){return o.add(a,i)}),this;if(_e(s))return this.addLabel(s,i);if(Z(s))s=de.delayedCall(0,s);else return this}return this!==s?gt(this,s,i):this},t.getChildren=function(s,i,o,a){s===void 0&&(s=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=-et);for(var c=[],u=this._first;u;)u._start>=a&&(u instanceof de?i&&c.push(u):(o&&c.push(u),s&&c.push.apply(c,u.getChildren(!0,i,o)))),u=u._next;return c},t.getById=function(s){for(var i=this.getChildren(1,1,1),o=i.length;o--;)if(i[o].vars.id===s)return i[o]},t.remove=function(s){return _e(s)?this.removeLabel(s):Z(s)?this.killTweensOf(s):(Yo(this,s),s===this._recent&&(this._recent=this._last),Ln(this))},t.totalTime=function(s,i){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(He.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),n.prototype.totalTime.call(this,s,i),this._forcing=0,this):this._tTime},t.addLabel=function(s,i){return this.labels[s]=Xe(this,i),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,i,o){var a=de.delayedCall(0,i||ws,o);return a.data="isPause",this._hasPause=1,gt(this,a,Xe(this,s))},t.removePause=function(s){var i=this._first;for(s=Xe(this,s);i;)i._start===s&&i.data==="isPause"&&on(i),i=i._next},t.killTweensOf=function(s,i,o){for(var a=this.getTweensOf(s,o),c=a.length;c--;)Wt!==a[c]&&a[c].kill(s,i);return this},t.getTweensOf=function(s,i){for(var o=[],a=tt(s),c=this._first,u=Vt(i),l;c;)c instanceof de?Db(c._targets,a)&&(u?(!Wt||c._initted&&c._ts)&&c.globalTime(0)<=i&&c.globalTime(c.totalDuration())>i:!i||c.isActive())&&o.push(c):(l=c.getTweensOf(a,i)).length&&o.push.apply(o,l),c=c._next;return o},t.tweenTo=function(s,i){i=i||{};var o=this,a=Xe(o,s),c=i,u=c.startAt,l=c.onStart,h=c.onStartParams,d=c.immediateRender,f,m=de.to(o,at({ease:i.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:i.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||G,onStart:function(){if(o.pause(),!f){var g=i.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());m._dur!==g&&Tr(m,g,0,1).render(m._time,!0,!0),f=1}l&&l.apply(m,h||[])}},i));return d?m.render(0):m},t.tweenFromTo=function(s,i,o){return this.tweenTo(i,at({startAt:{time:Xe(this,s)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Bh(this,Xe(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Bh(this,Xe(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+G)},t.shiftChildren=function(s,i,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,u;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(i)for(u in c)c[u]>=o&&(c[u]+=s);return Ln(this)},t.invalidate=function(s){var i=this._first;for(this._lock=0;i;)i.invalidate(s),i=i._next;return n.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var i=this._first,o;i;)o=i._next,this.remove(i),i=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ln(this)},t.totalDuration=function(s){var i=0,o=this,a=o._last,c=et,u,l,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),l=a._start,l>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,gt(o,a,l-a._delay,1)._lock=0):c=l,l<0&&a._ts&&(i-=l,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=l/o._ts,o._time-=l,o._tTime-=l),o.shiftChildren(-l,!1,-1/0),c=0),a._end>i&&a._ts&&(i=a._end),a=u;Tr(o,o===Y&&o._time>i?o._time:i,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(s){if(Y._ts&&(Xm(Y,eo(s,Y)),Qm=He.frame),He.frame>=Ph){Ph+=Ke.autoSleep||120;var i=Y._first;if((!i||!i._ts)&&Ke.autoSleep&&He._listeners.length<2){for(;i&&!i._ts;)i=i._next;i||He.sleep()}}},e}(Er);at(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zb=function(e,t,r,s,i,o,a){var c=new qe(this._pt,e,t,0,1,Eg,null,i),u=0,l=0,h,d,f,m,p,g,y,_;for(c.b=r,c.e=s,r+="",s+="",(y=~s.indexOf("random("))&&(s=Ts(s)),o&&(_=[r,s],o(_,e,t),r=_[0],s=_[1]),d=r.match(Ea)||[];h=Ea.exec(s);)m=h[0],p=s.substring(u,h.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),m!==d[l++]&&(g=parseFloat(d[l-1])||0,c._pt={_next:c._pt,p:p||l===1?p:",",s:g,c:m.charAt(1)==="="?rr(g,m)-g:parseFloat(m)-g,m:f&&f<4?Math.round:0},u=Ea.lastIndex);return c.c=u<s.length?s.substring(u,s.length):"",c.fp=a,(zm.test(s)||y)&&(c.e=0),this._pt=c,c},Xu=function(e,t,r,s,i,o,a,c,u,l){Z(s)&&(s=s(i||0,e,o));var h=e[t],d=r!=="get"?r:Z(h)?u?e[t.indexOf("set")||!Z(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,f=Z(h)?u?sS:Tg:Zu,m;if(_e(s)&&(~s.indexOf("random(")&&(s=Ts(s)),s.charAt(1)==="="&&(m=rr(d,s)+(ke(d)||0),(m||m===0)&&(s=m))),!l||d!==s||bc)return!isNaN(d*s)&&s!==""?(m=new qe(this._pt,e,t,+d||0,s-(d||0),typeof h=="boolean"?oS:Ig,0,f),u&&(m.fp=u),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Ku(t,s),Zb.call(this,e,t,d,s,f,c||Ke.stringFilter,u))},eS=function(e,t,r,s,i){if(Z(e)&&(e=is(e,i,t,r,s)),!Ct(e)||e.style&&e.nodeType||xe(e)||$m(e))return _e(e)?is(e,i,t,r,s):e;var o={},a;for(a in e)o[a]=is(e[a],i,t,r,s);return o},_g=function(e,t,r,s,i,o){var a,c,u,l;if(ze[e]&&(a=new ze[e]).init(i,a.rawVars?t[e]:eS(t[e],s,i,o,r),r,s,o)!==!1&&(r._pt=c=new qe(r._pt,i,e,0,1,a.render,a,0,a.priority),r!==Zn))for(u=r._ptLookup[r._targets.indexOf(i)],l=a._props.length;l--;)u[a._props[l]]=c;return a},Wt,bc,Ju=function n(e,t,r){var s=e.vars,i=s.ease,o=s.startAt,a=s.immediateRender,c=s.lazy,u=s.onUpdate,l=s.onUpdateParams,h=s.callbackScope,d=s.runBackwards,f=s.yoyoEase,m=s.keyframes,p=s.autoRevert,g=e._dur,y=e._startAt,_=e._targets,w=e.parent,I=w&&w.data==="nested"?w.vars.targets:_,T=e._overwrite==="auto"&&!zu,A=e.timeline,k,S,b,V,$,J,se,ie,Q,he,oe,Pe,pn;if(A&&(!m||!i)&&(i="none"),e._ease=On(i,vr.ease),e._yEase=f?pg(On(f===!0?i:f,vr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!A&&!!s.runBackwards,!A||m&&!s.stagger){if(ie=_[0]?xn(_[0]).harness:0,Pe=ie&&s[ie.prop],k=Zi(s,Wu),y&&(y._zTime<0&&y.progress(1),t<0&&d&&a&&!p?y.render(-1,!0):y.revert(d&&g?Ti:Ab),y._lazy=0),o){if(on(e._startAt=de.set(_,at({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!y&&je(c),startAt:null,delay:0,onUpdate:u,onUpdateParams:l,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Re||!a&&!p)&&e._startAt.revert(Ti),a&&g&&t<=0&&r<=0){t&&(e._zTime=t);return}}else if(d&&g&&!y){if(t&&(a=!1),b=at({overwrite:!1,data:"isFromStart",lazy:a&&!y&&je(c),immediateRender:a,stagger:0,parent:w},k),Pe&&(b[ie.prop]=Pe),on(e._startAt=de.set(_,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Re?e._startAt.revert(Ti):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,G,G);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&je(c)||c&&!g,S=0;S<_.length;S++){if($=_[S],se=$._gsap||Yu(_)[S]._gsap,e._ptLookup[S]=he={},_c[se.id]&&en.length&&Ji(),oe=I===_?S:I.indexOf($),ie&&(Q=new ie).init($,Pe||k,e,oe,I)!==!1&&(e._pt=V=new qe(e._pt,$,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(mn){he[mn]=V}),Q.priority&&(J=1)),!ie||Pe)for(b in k)ze[b]&&(Q=_g(b,k,e,oe,$,I))?Q.priority&&(J=1):he[b]=V=Xu.call(e,$,b,"get",k[b],oe,I,0,s.stringFilter);e._op&&e._op[S]&&e.kill($,e._op[S]),T&&e._pt&&(Wt=e,Y.killTweensOf($,he,e.globalTime(t)),pn=!e.parent,Wt=0),e._pt&&c&&(_c[se.id]=1)}J&&bg(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!pn,m&&t<=0&&A.render(et,!0,!0)},tS=function(e,t,r,s,i,o,a){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,l,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bc=1,e.vars[t]="+=0",Ju(e,a),bc=0,1;c.push(u)}for(d=c.length;d--;)l=c[d],u=l._pt||l,u.s=(s||s===0)&&!i?s:u.s+(s||0)+o*u.c,u.c=r-u.s,l.e&&(l.e=ne(r)+ke(l.e)),l.b&&(l.b=u.s+ke(l.b))},nS=function(e,t){var r=e[0]?xn(e[0]).harness:0,s=r&&r.aliases,i,o,a,c;if(!s)return t;i=Vn({},t);for(o in s)if(o in i)for(c=s[o].split(","),a=c.length;a--;)i[c[a]]=i[o];return i},rS=function(e,t,r,s){var i=t.ease||s||"power1.inOut",o,a;if(xe(t))a=r[e]||(r[e]=[]),t.forEach(function(c,u){return a.push({t:u/(t.length-1)*100,v:c,e:i})});else for(o in t)a=r[o]||(r[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:i})},is=function(e,t,r,s,i){return Z(e)?e.call(t,r,s,i):_e(e)&&~e.indexOf("random(")?Ts(e):e},vg=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wg={};$e(vg+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return wg[n]=1});var de=function(n){Bm(e,n);function e(r,s,i,o){var a;typeof s=="number"&&(i.duration=s,s=i,i=null),a=n.call(this,o?s:rs(s))||this;var c=a.vars,u=c.duration,l=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,m=c.keyframes,p=c.defaults,g=c.scrollTrigger,y=c.yoyoEase,_=s.parent||Y,w=(xe(r)||$m(r)?Vt(r[0]):"length"in s)?[r]:tt(r),I,T,A,k,S,b,V,$;if(a._targets=w.length?Yu(w):Xi("GSAP target "+r+" not found. https://greensock.com",!Ke.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||pi(u)||pi(l)){if(s=a.vars,I=a.timeline=new Ve({data:"nested",defaults:p||{},targets:_&&_.data==="nested"?_.vars.targets:w}),I.kill(),I.parent=I._dp=Rt(a),I._start=0,d||pi(u)||pi(l)){if(k=w.length,V=d&&og(d),Ct(d))for(S in d)~vg.indexOf(S)&&($||($={}),$[S]=d[S]);for(T=0;T<k;T++)A=Zi(s,wg),A.stagger=0,y&&(A.yoyoEase=y),$&&Vn(A,$),b=w[T],A.duration=+is(u,Rt(a),T,b,w),A.delay=(+is(l,Rt(a),T,b,w)||0)-a._delay,!d&&k===1&&A.delay&&(a._delay=l=A.delay,a._start+=l,A.delay=0),I.to(b,A,V?V(T,b,w):0),I._ease=U.none;I.duration()?u=l=0:a.timeline=0}else if(m){rs(at(I.vars.defaults,{ease:"none"})),I._ease=On(m.ease||s.ease||"none");var J=0,se,ie,Q;if(xe(m))m.forEach(function(he){return I.to(w,he,">")}),I.duration();else{A={};for(S in m)S==="ease"||S==="easeEach"||rS(S,m[S],A,m.easeEach);for(S in A)for(se=A[S].sort(function(he,oe){return he.t-oe.t}),J=0,T=0;T<se.length;T++)ie=se[T],Q={ease:ie.e,duration:(ie.t-(T?se[T-1].t:0))/100*u},Q[S]=ie.v,I.to(w,Q,J),J+=Q.duration;I.duration()<u&&I.to({},{duration:u-I.duration()})}}u||a.duration(u=I.duration())}else a.timeline=0;return f===!0&&!zu&&(Wt=Rt(a),Y.killTweensOf(w),Wt=0),gt(_,Rt(a),i),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!u&&!m&&a._start===we(_._time)&&je(h)&&Ob(Rt(a))&&_.data!=="nested")&&(a._tTime=-G,a.render(Math.max(0,-l)||0)),g&&ng(Rt(a),g),a}var t=e.prototype;return t.render=function(s,i,o){var a=this._time,c=this._tDur,u=this._dur,l=s<0,h=s>c-G&&!l?c:s<G?0:s,d,f,m,p,g,y,_,w,I;if(!u)Pb(this,s,i,o);else if(h!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l){if(d=h,w=this.timeline,this._repeat){if(p=u+this._rDelay,this._repeat<-1&&l)return this.totalTime(p*100+s,i,o);if(d=we(h%p),h===c?(m=this._repeat,d=u):(m=~~(h/p),m&&m===h/p&&(d=u,m--),d>u&&(d=u)),y=this._yoyo&&m&1,y&&(I=this._yEase,d=u-d),g=wr(this._tTime,p),d===a&&!o&&this._initted)return this._tTime=h,this;m!==g&&(w&&this._yEase&&mg(w,y),this.vars.repeatRefresh&&!y&&!this._lock&&(this._lock=o=1,this.render(we(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(rg(this,l?s:d,o,i,h))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(s,i,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(I||this._ease)(d/u),this._from&&(this.ratio=_=1-_),d&&!a&&!i&&(nt(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(_,f.d),f=f._next;w&&w.render(s<0?s:!d&&y?-G:w._dur*w._ease(d/this._dur),i,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!i&&(l&&vc(this,s,i,o),nt(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!i&&this.parent&&nt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(l&&!this._onUpdate&&vc(this,s,!0,!0),(s||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&on(this,1),!i&&!(l&&!a)&&(h||a||y)&&(nt(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),n.prototype.invalidate.call(this,s)},t.resetTo=function(s,i,o,a){Is||He.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ju(this,c),u=this._ease(c/this._dur),tS(this,s,i,o,a,u,c)?this.resetTo(s,i,o,a):(Jo(this,0),this.parent||eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,i){if(i===void 0&&(i="all"),!s&&(!i||i==="all"))return this._lazy=this._pt=0,this.parent?Wr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,i,Wt&&Wt.vars.overwrite!==!0)._first||Wr(this),this.parent&&o!==this.timeline.totalDuration()&&Tr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=s?tt(s):a,u=this._ptLookup,l=this._pt,h,d,f,m,p,g,y;if((!i||i==="all")&&xb(a,c))return i==="all"&&(this._pt=0),Wr(this);for(h=this._op=this._op||[],i!=="all"&&(_e(i)&&(p={},$e(i,function(_){return p[_]=1}),i=p),i=nS(a,i)),y=a.length;y--;)if(~c.indexOf(a[y])){d=u[y],i==="all"?(h[y]=i,m=d,f={}):(f=h[y]=h[y]||{},m=i);for(p in m)g=d&&d[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&Yo(this,g,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&l&&Wr(this),this},e.to=function(s,i){return new e(s,i,arguments[2])},e.from=function(s,i){return ss(1,arguments)},e.delayedCall=function(s,i,o,a){return new e(i,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:i,onReverseComplete:i,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(s,i,o){return ss(2,arguments)},e.set=function(s,i){return i.duration=0,i.repeatDelay||(i.repeat=0),new e(s,i)},e.killTweensOf=function(s,i,o){return Y.killTweensOf(s,i,o)},e}(Er);at(de.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$e("staggerTo,staggerFrom,staggerFromTo",function(n){de[n]=function(){var e=new Ve,t=Tc.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Zu=function(e,t,r){return e[t]=r},Tg=function(e,t,r){return e[t](r)},sS=function(e,t,r,s){return e[t](s.fp,r)},iS=function(e,t,r){return e.setAttribute(t,r)},el=function(e,t){return Z(e[t])?Tg:Hu(e[t])&&e.setAttribute?iS:Zu},Ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},oS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Eg=function(e,t){var r=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;r;)s=r.p+(r.m?r.m(r.s+r.c*e):Math.round((r.s+r.c*e)*1e4)/1e4)+s,r=r._next;s+=t.c}t.set(t.t,t.p,s,t)},tl=function(e,t){for(var r=t._pt;r;)r.r(e,r.d),r=r._next},aS=function(e,t,r,s){for(var i=this._pt,o;i;)o=i._next,i.p===s&&i.modifier(e,t,r),i=o},cS=function(e){for(var t=this._pt,r,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Yo(this,t,"_pt"):t.dep||(r=1),t=s;return!r},uS=function(e,t,r,s){s.mSet(e,t,s.m.call(s.tween,r,s.mt),s)},bg=function(e){for(var t=e._pt,r,s,i,o;t;){for(r=t._next,s=i;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:o)?t._prev._next=t:i=t,(t._next=s)?s._prev=t:o=t,t=r}e._pt=i},qe=function(){function n(t,r,s,i,o,a,c,u,l){this.t=r,this.s=i,this.c=o,this.p=s,this.r=a||Ig,this.d=c||this,this.set=u||Zu,this.pr=l||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(r,s,i){this.mSet=this.mSet||this.set,this.set=uS,this.m=r,this.mt=i,this.tween=s},n}();$e(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Wu[n]=1});Qe.TweenMax=Qe.TweenLite=de;Qe.TimelineLite=Qe.TimelineMax=Ve;Y=new Ve({sortChildren:!1,defaults:vr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ke.stringFilter=fg;var br=[],Ei={},lS=[],jh=0,Ca=function(e){return(Ei[e]||lS).map(function(t){return t()})},Sc=function(){var e=Date.now(),t=[];e-jh>2&&(Ca("matchMediaInit"),br.forEach(function(r){var s=r.queries,i=r.conditions,o,a,c,u;for(a in s)o=Je.matchMedia(s[a]).matches,o&&(c=1),o!==i[a]&&(i[a]=o,u=1);u&&(r.revert(),c&&t.push(r))}),Ca("matchMediaRevert"),t.forEach(function(r){return r.onMatch(r)}),jh=e,Ca("matchMedia"))},Sg=function(){function n(t,r){this.selector=r&&Ic(r),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(r,s,i){Z(r)&&(i=s,s=r,r=Z);var o=this,a=function(){var u=ue,l=o.selector,h;return u&&u!==o&&u.data.push(o),i&&(o.selector=Ic(i)),ue=o,h=s.apply(o,arguments),Z(h)&&o._r.push(h),ue=u,o.selector=l,o.isReverted=!1,h};return o.last=a,r===Z?a(o):r?o[r]=a:a},e.ignore=function(r){var s=ue;ue=null,r(this),ue=s},e.getTweens=function(){var r=[];return this.data.forEach(function(s){return s instanceof n?r.push.apply(r,s.getTweens()):s instanceof de&&!(s.parent&&s.parent.data==="nested")&&r.push(s)}),r},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(r,s){var i=this;if(r){var o=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,u){return u.g-c.g||-1}).forEach(function(c){return c.t.revert(r)}),this.data.forEach(function(c){return!(c instanceof Er)&&c.revert&&c.revert(r)}),this._r.forEach(function(c){return c(r,i)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),s){var a=br.indexOf(this);~a&&br.splice(a,1)}},e.revert=function(r){this.kill(r||{})},n}(),hS=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(r,s,i){Ct(r)||(r={matches:r});var o=new Sg(0,i||this.scope),a=o.conditions={},c,u,l;this.contexts.push(o),s=o.add("onMatch",s),o.queries=r;for(u in r)u==="all"?l=1:(c=Je.matchMedia(r[u]),c&&(br.indexOf(o)<0&&br.push(o),(a[u]=c.matches)&&(l=1),c.addListener?c.addListener(Sc):c.addEventListener("change",Sc)));return l&&s(o),this},e.revert=function(r){this.kill(r||{})},e.kill=function(r){this.contexts.forEach(function(s){return s.kill(r,!0)})},n}(),to={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(function(s){return Gb(s)})},timeline:function(e){return new Ve(e)},getTweensOf:function(e,t){return Y.getTweensOf(e,t)},getProperty:function(e,t,r,s){_e(e)&&(e=tt(e)[0]);var i=xn(e||{}).get,o=r?Zm:Jm;return r==="native"&&(r=""),e&&(t?o((ze[t]&&ze[t].get||i)(e,t,r,s)):function(a,c,u){return o((ze[a]&&ze[a].get||i)(e,a,c,u))})},quickSetter:function(e,t,r){if(e=tt(e),e.length>1){var s=e.map(function(l){return Ye.quickSetter(l,t,r)}),i=s.length;return function(l){for(var h=i;h--;)s[h](l)}}e=e[0]||{};var o=ze[t],a=xn(e),c=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(l){var h=new o;Zn._pt=0,h.init(e,r?l+r:l,Zn,0,[e]),h.render(1,h),Zn._pt&&tl(1,Zn)}:a.set(e,c);return o?u:function(l){return u(e,c,r?l+r:l,a,1)}},quickTo:function(e,t,r){var s,i=Ye.to(e,Vn((s={},s[t]="+=0.1",s.paused=!0,s),r||{})),o=function(c,u,l){return i.resetTo(t,c,u,l)};return o.tween=i,o},isTweening:function(e){return Y.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=On(e.ease,vr.ease)),Mh(vr,e||{})},config:function(e){return Mh(Ke,e||{})},registerEffect:function(e){var t=e.name,r=e.effect,s=e.plugins,i=e.defaults,o=e.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!ze[a]&&!Qe[a]&&Xi(t+" effect requires "+a+" plugin.")}),ba[t]=function(a,c,u){return r(tt(a),at(c||{},i),u)},o&&(Ve.prototype[t]=function(a,c,u){return this.add(ba[t](a,Ct(c)?c:(u=c)&&{},this),u)})},registerEase:function(e,t){U[e]=On(t)},parseEase:function(e,t){return arguments.length?On(e,t):U},getById:function(e){return Y.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var r=new Ve(e),s,i;for(r.smoothChildTiming=je(e.smoothChildTiming),Y.remove(r),r._dp=0,r._time=r._tTime=Y._time,s=Y._first;s;)i=s._next,(t||!(!s._dur&&s instanceof de&&s.vars.onComplete===s._targets[0]))&&gt(r,s,s._start-s._delay),s=i;return gt(Y,r,0),r},context:function(e,t){return e?new Sg(e,t):ue},matchMedia:function(e){return new hS(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,r,s;for(s in t)t[s]&&(t[s]=!1,r=1);r&&e.revert()})||Sc()},addEventListener:function(e,t){var r=Ei[e]||(Ei[e]=[]);~r.indexOf(t)||r.push(t)},removeEventListener:function(e,t){var r=Ei[e],s=r&&r.indexOf(t);s>=0&&r.splice(s,1)},utils:{wrap:qb,wrapYoyo:zb,distribute:og,random:cg,snap:ag,normalize:$b,getUnit:ke,clamp:Ub,splitColor:hg,toArray:tt,selector:Ic,mapRange:lg,pipe:Vb,unitize:jb,interpolate:Hb,shuffle:ig},install:Km,effects:ba,ticker:He,updateRoot:Ve.updateRoot,plugins:ze,globalTimeline:Y,core:{PropTween:qe,globals:Wm,Tween:de,Timeline:Ve,Animation:Er,getCache:xn,_removeLinkedListItem:Yo,reverting:function(){return Re},context:function(e){return e&&ue&&(ue.data.push(e),e._ctx=ue),ue},suppressOverwrites:function(e){return zu=e}}};$e("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return to[n]=de[n]});He.add(Ve.updateRoot);Zn=to.to({},{duration:0});var dS=function(e,t){for(var r=e._pt;r&&r.p!==t&&r.op!==t&&r.fp!==t;)r=r._next;return r},fS=function(e,t){var r=e._targets,s,i,o;for(s in t)for(i=r.length;i--;)o=e._ptLookup[i][s],o&&(o=o.d)&&(o._pt&&(o=dS(o,s)),o&&o.modifier&&o.modifier(t[s],e,r[i],s))},Da=function(e,t){return{name:e,rawVars:1,init:function(s,i,o){o._onInit=function(a){var c,u;if(_e(i)&&(c={},$e(i,function(l){return c[l]=1}),i=c),t){c={};for(u in i)c[u]=t(i[u]);i=c}fS(a,i)}}}},Ye=to.registerPlugin({name:"attr",init:function(e,t,r,s,i){var o,a,c;this.tween=r;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],s,i,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var r=t._pt;r;)Re?r.set(r.t,r.p,r.b,r):r.r(e,r.d),r=r._next}},{name:"endArray",init:function(e,t){for(var r=t.length;r--;)this.add(e,r,e[r]||0,t[r],0,0,0,0,0,1)}},Da("roundProps",Ec),Da("modifiers"),Da("snap",ag))||to;de.version=Ve.version=Ye.version="3.11.4";Gm=1;jm()&&Ir();U.Power0;U.Power1;U.Power2;U.Power3;U.Power4;U.Linear;U.Quad;U.Cubic;U.Quart;U.Quint;U.Strong;U.Elastic;U.Back;U.SteppedEase;U.Bounce;U.Sine;U.Expo;U.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $h,Qt,sr,nl,An,qh,rl,pS=function(){return typeof window<"u"},jt={},Tn=180/Math.PI,ir=Math.PI/180,Wn=Math.atan2,zh=1e8,sl=/([A-Z])/g,mS=/(left|right|width|margin|padding|x)/i,gS=/[\s,\(]\S/,Nt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_S=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vS=function(e,t){var r=t.s+t.c*e;t.set(t.t,t.p,~~(r+(r<0?-.5:.5))+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wS=function(e,t,r){return e.style[t]=r},TS=function(e,t,r){return e.style.setProperty(t,r)},IS=function(e,t,r){return e._gsap[t]=r},ES=function(e,t,r){return e._gsap.scaleX=e._gsap.scaleY=r},bS=function(e,t,r,s,i){var o=e._gsap;o.scaleX=o.scaleY=r,o.renderTransform(i,o)},SS=function(e,t,r,s,i){var o=e._gsap;o[t]=r,o.renderTransform(i,o)},X="transform",ht=X+"Origin",kS=function(e,t){var r=this,s=this.target,i=s.style;if(e in jt){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Nt[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return r.tfm[o]=xt(s,o)}):this.tfm[e]=s._gsap.x?s._gsap[e]:xt(s,e)),this.props.indexOf(X)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ht,t,"")),e=X}(i||t)&&this.props.push(e,t,i[e])},Cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AS=function(){var e=this.props,t=this.target,r=t.style,s=t._gsap,i,o;for(i=0;i<e.length;i+=3)e[i+1]?t[e[i]]=e[i+2]:e[i+2]?r[e[i]]=e[i+2]:r.removeProperty(e[i].replace(sl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),i=rl(),i&&!i.isStart&&!r[X]&&(Cg(r),s.uncache=1)}},Dg=function(e,t){var r={target:e,props:[],revert:AS,save:kS};return t&&t.split(",").forEach(function(s){return r.save(s)}),r},Rg,Ac=function(e,t){var r=Qt.createElementNS?Qt.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qt.createElement(e);return r.style?r:Qt.createElement(e)},vt=function n(e,t,r){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(sl,"-$1").toLowerCase())||s.getPropertyValue(t)||!r&&n(e,Sr(t)||t,1)||""},Hh="O,Moz,ms,Ms,Webkit".split(","),Sr=function(e,t,r){var s=t||An,i=s.style,o=5;if(e in i&&!r)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Hh[o]+e in i););return o<0?null:(o===3?"ms":o>=0?Hh[o]:"")+e},Cc=function(){pS()&&window.document&&($h=window,Qt=$h.document,sr=Qt.documentElement,An=Ac("div")||{style:{}},Ac("div"),X=Sr(X),ht=X+"Origin",An.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rg=!!Sr("perspective"),rl=Ye.core.reverting,nl=1)},Ra=function n(e){var t=Ac("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,s=this.nextSibling,i=this.style.cssText,o;if(sr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return r&&(s?r.insertBefore(this,s):r.appendChild(this)),sr.removeChild(t),this.style.cssText=i,o},Gh=function(e,t){for(var r=t.length;r--;)if(e.hasAttribute(t[r]))return e.getAttribute(t[r])},xg=function(e){var t;try{t=e.getBBox()}catch{t=Ra.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ra||(t=Ra.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gh(e,["x","cx","x1"])||0,y:+Gh(e,["y","cy","y1"])||0,width:0,height:0}:t},Lg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xg(e))},Es=function(e,t){if(t){var r=e.style;t in jt&&t!==ht&&(t=X),r.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),r.removeProperty(t.replace(sl,"-$1").toLowerCase())):r.removeAttribute(t)}},Yt=function(e,t,r,s,i,o){var a=new qe(e._pt,t,r,0,1,o?Ag:kg);return e._pt=a,a.b=s,a.e=i,e._props.push(r),a},Kh={deg:1,rad:1,turn:1},CS={grid:1,flex:1},an=function n(e,t,r,s){var i=parseFloat(r)||0,o=(r+"").trim().substr((i+"").length)||"px",a=An.style,c=mS.test(t),u=e.tagName.toLowerCase()==="svg",l=(u?"client":"offset")+(c?"Width":"Height"),h=100,d=s==="px",f=s==="%",m,p,g,y;return s===o||!i||Kh[s]||Kh[o]?i:(o!=="px"&&!d&&(i=n(e,t,r,"px")),y=e.getCTM&&Lg(e),(f||o==="%")&&(jt[t]||~t.indexOf("adius"))?(m=y?e.getBBox()[c?"width":"height"]:e[l],ne(f?i/m*h:i/100*m)):(a[c?"width":"height"]=h+(d?o:s),p=~t.indexOf("adius")||s==="em"&&e.appendChild&&!u?e:e.parentNode,y&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Qt||!p.appendChild)&&(p=Qt.body),g=p._gsap,g&&f&&g.width&&c&&g.time===He.time&&!g.uncache?ne(i/g.width*h):((f||o==="%")&&!CS[vt(p,"display")]&&(a.position=vt(e,"position")),p===e&&(a.position="static"),p.appendChild(An),m=An[l],p.removeChild(An),a.position="absolute",c&&f&&(g=xn(p),g.time=He.time,g.width=p[l]),ne(d?m*i/h:m&&i?h/m*i:0))))},xt=function(e,t,r,s){var i;return nl||Cc(),t in Nt&&t!=="transform"&&(t=Nt[t],~t.indexOf(",")&&(t=t.split(",")[0])),jt[t]&&t!=="transform"?(i=Ss(e,s),i=t!=="transformOrigin"?i[t]:i.svg?i.origin:ro(vt(e,ht))+" "+i.zOrigin+"px"):(i=e.style[t],(!i||i==="auto"||s||~(i+"").indexOf("calc("))&&(i=no[t]&&no[t](e,t,r)||vt(e,t)||Ym(e,t)||(t==="opacity"?1:0))),r&&!~(i+"").trim().indexOf(" ")?an(e,t,i,r)+r:i},DS=function(e,t,r,s){if(!r||r==="none"){var i=Sr(t,e,1),o=i&&vt(e,i,1);o&&o!==r?(t=i,r=o):t==="borderColor"&&(r=vt(e,"borderTopColor"))}var a=new qe(this._pt,e.style,t,0,1,Eg),c=0,u=0,l,h,d,f,m,p,g,y,_,w,I,T;if(a.b=r,a.e=s,r+="",s+="",s==="auto"&&(e.style[t]=s,s=vt(e,t)||s,e.style[t]=r),l=[r,s],fg(l),r=l[0],s=l[1],d=r.match(Jn)||[],T=s.match(Jn)||[],T.length){for(;h=Jn.exec(s);)g=h[0],_=s.substring(c,h.index),m?m=(m+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(m=1),g!==(p=d[u++]||"")&&(f=parseFloat(p)||0,I=p.substr((f+"").length),g.charAt(1)==="="&&(g=rr(f,g)+I),y=parseFloat(g),w=g.substr((y+"").length),c=Jn.lastIndex-w.length,w||(w=w||Ke.units[t]||I,c===s.length&&(s+=w,a.e+=w)),I!==w&&(f=an(e,t,p,w)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:f,c:y-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=c<s.length?s.substring(c,s.length):""}else a.r=t==="display"&&s==="none"?Ag:kg;return zm.test(s)&&(a.e=0),this._pt=a,a},Wh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RS=function(e){var t=e.split(" "),r=t[0],s=t[1]||"50%";return(r==="top"||r==="bottom"||s==="left"||s==="right")&&(e=r,r=s,s=e),t[0]=Wh[r]||r,t[1]=Wh[s]||s,t.join(" ")},xS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var r=t.t,s=r.style,i=t.u,o=r._gsap,a,c,u;if(i==="all"||i===!0)s.cssText="",c=1;else for(i=i.split(","),u=i.length;--u>-1;)a=i[u],jt[a]&&(c=1,a=a==="transformOrigin"?ht:X),Es(r,a);c&&(Es(r,X),o&&(o.svg&&r.removeAttribute("transform"),Ss(r,1),o.uncache=1,Cg(s)))}},no={clearProps:function(e,t,r,s,i){if(i.data!=="isFromStart"){var o=e._pt=new qe(e._pt,t,r,0,0,xS);return o.u=s,o.pr=-10,o.tween=i,e._props.push(r),1}}},bs=[1,0,0,1,0,0],Og={},Ng=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qh=function(e){var t=vt(e,X);return Ng(t)?bs:t.substr(7).match(qm).map(ne)},il=function(e,t){var r=e._gsap||xn(e),s=e.style,i=Qh(e),o,a,c,u;return r.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,i=[c.a,c.b,c.c,c.d,c.e,c.f],i.join(",")==="1,0,0,1,0,0"?bs:i):(i===bs&&!e.offsetParent&&e!==sr&&!r.svg&&(c=s.display,s.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,sr.appendChild(e)),i=Qh(e),c?s.display=c:Es(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):sr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},Dc=function(e,t,r,s,i,o){var a=e._gsap,c=i||il(e,!0),u=a.xOrigin||0,l=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],m=c[1],p=c[2],g=c[3],y=c[4],_=c[5],w=t.split(" "),I=parseFloat(w[0])||0,T=parseFloat(w[1])||0,A,k,S,b;r?c!==bs&&(k=f*g-m*p)&&(S=I*(g/k)+T*(-p/k)+(p*_-g*y)/k,b=I*(-m/k)+T*(f/k)-(f*_-m*y)/k,I=S,T=b):(A=xg(e),I=A.x+(~w[0].indexOf("%")?I/100*A.width:I),T=A.y+(~(w[1]||w[0]).indexOf("%")?T/100*A.height:T)),s||s!==!1&&a.smooth?(y=I-u,_=T-l,a.xOffset=h+(y*f+_*p)-y,a.yOffset=d+(y*m+_*g)-_):a.xOffset=a.yOffset=0,a.xOrigin=I,a.yOrigin=T,a.smooth=!!s,a.origin=t,a.originIsAbsolute=!!r,e.style[ht]="0px 0px",o&&(Yt(o,a,"xOrigin",u,I),Yt(o,a,"yOrigin",l,T),Yt(o,a,"xOffset",h,a.xOffset),Yt(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",I+" "+T)},Ss=function(e,t){var r=e._gsap||new yg(e);if("x"in r&&!t&&!r.uncache)return r;var s=e.style,i=r.scaleX<0,o="px",a="deg",c=getComputedStyle(e),u=vt(e,ht)||"0",l,h,d,f,m,p,g,y,_,w,I,T,A,k,S,b,V,$,J,se,ie,Q,he,oe,Pe,pn,mn,Pr,gn,gl,Dt,yn;return l=h=d=p=g=y=_=w=I=0,f=m=1,r.svg=!!(e.getCTM&&Lg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(s[X]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[X]!=="none"?c[X]:"")),s.scale=s.rotate=s.translate="none"),k=il(e,r.svg),r.svg&&(r.uncache?(Pe=e.getBBox(),u=r.xOrigin-Pe.x+"px "+(r.yOrigin-Pe.y)+"px",oe=""):oe=!t&&e.getAttribute("data-svg-origin"),Dc(e,oe||u,!!oe||r.originIsAbsolute,r.smooth!==!1,k)),T=r.xOrigin||0,A=r.yOrigin||0,k!==bs&&($=k[0],J=k[1],se=k[2],ie=k[3],l=Q=k[4],h=he=k[5],k.length===6?(f=Math.sqrt($*$+J*J),m=Math.sqrt(ie*ie+se*se),p=$||J?Wn(J,$)*Tn:0,_=se||ie?Wn(se,ie)*Tn+p:0,_&&(m*=Math.abs(Math.cos(_*ir))),r.svg&&(l-=T-(T*$+A*se),h-=A-(T*J+A*ie))):(yn=k[6],gl=k[7],mn=k[8],Pr=k[9],gn=k[10],Dt=k[11],l=k[12],h=k[13],d=k[14],S=Wn(yn,gn),g=S*Tn,S&&(b=Math.cos(-S),V=Math.sin(-S),oe=Q*b+mn*V,Pe=he*b+Pr*V,pn=yn*b+gn*V,mn=Q*-V+mn*b,Pr=he*-V+Pr*b,gn=yn*-V+gn*b,Dt=gl*-V+Dt*b,Q=oe,he=Pe,yn=pn),S=Wn(-se,gn),y=S*Tn,S&&(b=Math.cos(-S),V=Math.sin(-S),oe=$*b-mn*V,Pe=J*b-Pr*V,pn=se*b-gn*V,Dt=ie*V+Dt*b,$=oe,J=Pe,se=pn),S=Wn(J,$),p=S*Tn,S&&(b=Math.cos(S),V=Math.sin(S),oe=$*b+J*V,Pe=Q*b+he*V,J=J*b-$*V,he=he*b-Q*V,$=oe,Q=Pe),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,y=180-y),f=ne(Math.sqrt($*$+J*J+se*se)),m=ne(Math.sqrt(he*he+yn*yn)),S=Wn(Q,he),_=Math.abs(S)>2e-4?S*Tn:0,I=Dt?1/(Dt<0?-Dt:Dt):0),r.svg&&(oe=e.getAttribute("transform"),r.forceCSS=e.setAttribute("transform","")||!Ng(vt(e,X)),oe&&e.setAttribute("transform",oe))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||r.uncache,r.x=l-((r.xPercent=l&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=h-((r.yPercent=h&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=d+o,r.scaleX=ne(f),r.scaleY=ne(m),r.rotation=ne(p)+a,r.rotationX=ne(g)+a,r.rotationY=ne(y)+a,r.skewX=_+a,r.skewY=w+a,r.transformPerspective=I+o,(r.zOrigin=parseFloat(u.split(" ")[2])||0)&&(s[ht]=ro(u)),r.xOffset=r.yOffset=0,r.force3D=Ke.force3D,r.renderTransform=r.svg?OS:Rg?Pg:LS,r.uncache=0,r},ro=function(e){return(e=e.split(" "))[0]+" "+e[1]},xa=function(e,t,r){var s=ke(t);return ne(parseFloat(t)+parseFloat(an(e,"x",r+"px",s)))+s},LS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Pg(e,t)},_n="0deg",Ur="0px",vn=") ",Pg=function(e,t){var r=t||this,s=r.xPercent,i=r.yPercent,o=r.x,a=r.y,c=r.z,u=r.rotation,l=r.rotationY,h=r.rotationX,d=r.skewX,f=r.skewY,m=r.scaleX,p=r.scaleY,g=r.transformPerspective,y=r.force3D,_=r.target,w=r.zOrigin,I="",T=y==="auto"&&e&&e!==1||y===!0;if(w&&(h!==_n||l!==_n)){var A=parseFloat(l)*ir,k=Math.sin(A),S=Math.cos(A),b;A=parseFloat(h)*ir,b=Math.cos(A),o=xa(_,o,k*b*-w),a=xa(_,a,-Math.sin(A)*-w),c=xa(_,c,S*b*-w+w)}g!==Ur&&(I+="perspective("+g+vn),(s||i)&&(I+="translate("+s+"%, "+i+"%) "),(T||o!==Ur||a!==Ur||c!==Ur)&&(I+=c!==Ur||T?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+vn),u!==_n&&(I+="rotate("+u+vn),l!==_n&&(I+="rotateY("+l+vn),h!==_n&&(I+="rotateX("+h+vn),(d!==_n||f!==_n)&&(I+="skew("+d+", "+f+vn),(m!==1||p!==1)&&(I+="scale("+m+", "+p+vn),_.style[X]=I||"translate(0, 0)"},OS=function(e,t){var r=t||this,s=r.xPercent,i=r.yPercent,o=r.x,a=r.y,c=r.rotation,u=r.skewX,l=r.skewY,h=r.scaleX,d=r.scaleY,f=r.target,m=r.xOrigin,p=r.yOrigin,g=r.xOffset,y=r.yOffset,_=r.forceCSS,w=parseFloat(o),I=parseFloat(a),T,A,k,S,b;c=parseFloat(c),u=parseFloat(u),l=parseFloat(l),l&&(l=parseFloat(l),u+=l,c+=l),c||u?(c*=ir,u*=ir,T=Math.cos(c)*h,A=Math.sin(c)*h,k=Math.sin(c-u)*-d,S=Math.cos(c-u)*d,u&&(l*=ir,b=Math.tan(u-l),b=Math.sqrt(1+b*b),k*=b,S*=b,l&&(b=Math.tan(l),b=Math.sqrt(1+b*b),T*=b,A*=b)),T=ne(T),A=ne(A),k=ne(k),S=ne(S)):(T=h,S=d,A=k=0),(w&&!~(o+"").indexOf("px")||I&&!~(a+"").indexOf("px"))&&(w=an(f,"x",o,"px"),I=an(f,"y",a,"px")),(m||p||g||y)&&(w=ne(w+m-(m*T+p*k)+g),I=ne(I+p-(m*A+p*S)+y)),(s||i)&&(b=f.getBBox(),w=ne(w+s/100*b.width),I=ne(I+i/100*b.height)),b="matrix("+T+","+A+","+k+","+S+","+w+","+I+")",f.setAttribute("transform",b),_&&(f.style[X]=b)},NS=function(e,t,r,s,i){var o=360,a=_e(i),c=parseFloat(i)*(a&&~i.indexOf("rad")?Tn:1),u=c-s,l=s+u+"deg",h,d;return a&&(h=i.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*zh)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*zh)%o-~~(u/o)*o)),e._pt=d=new qe(e._pt,t,r,s,u,yS),d.e=l,d.u="deg",e._props.push(r),d},Yh=function(e,t){for(var r in t)e[r]=t[r];return e},PS=function(e,t,r){var s=Yh({},r._gsap),i="perspective,force3D,transformOrigin,svgOrigin",o=r.style,a,c,u,l,h,d,f,m;s.svg?(u=r.getAttribute("transform"),r.setAttribute("transform",""),o[X]=t,a=Ss(r,1),Es(r,X),r.setAttribute("transform",u)):(u=getComputedStyle(r)[X],o[X]=t,a=Ss(r,1),o[X]=u);for(c in jt)u=s[c],l=a[c],u!==l&&i.indexOf(c)<0&&(f=ke(u),m=ke(l),h=f!==m?an(r,c,u,m):parseFloat(u),d=parseFloat(l),e._pt=new qe(e._pt,a,c,h,d-h,kc),e._pt.u=m||0,e._props.push(c));Yh(a,s)};$e("padding,margin,Width,Radius",function(n,e){var t="Top",r="Right",s="Bottom",i="Left",o=(e<3?[t,r,s,i]:[t+i,t+r,s+r,s+i]).map(function(a){return e<2?n+a:"border"+a+n});no[e>1?"border"+n:n]=function(a,c,u,l,h){var d,f;if(arguments.length<4)return d=o.map(function(m){return xt(a,m,u)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(l+"").split(" "),f={},o.forEach(function(m,p){return f[m]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(c,f,h)}});var Mg={name:"css",register:Cc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,s,i){var o=this._props,a=e.style,c=r.vars.startAt,u,l,h,d,f,m,p,g,y,_,w,I,T,A,k,S;nl||Cc(),this.styles=this.styles||Dg(e),S=this.styles.props,this.tween=r;for(p in t)if(p!=="autoRound"&&(l=t[p],!(ze[p]&&_g(p,t,r,s,e,i)))){if(f=typeof l,m=no[p],f==="function"&&(l=l.call(r,s,e,i),f=typeof l),f==="string"&&~l.indexOf("random(")&&(l=Ts(l)),m)m(this,e,p,l,r)&&(k=1);else if(p.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(p)+"").trim(),l+="",tn.lastIndex=0,tn.test(u)||(g=ke(u),y=ke(l)),y?g!==y&&(u=an(e,p,u,y)+y):g&&(l+=g),this.add(a,"setProperty",u,l,s,i,0,0,p),o.push(p),S.push(p,0,a[p]);else if(f!=="undefined"){if(c&&p in c?(u=typeof c[p]=="function"?c[p].call(r,s,e,i):c[p],_e(u)&&~u.indexOf("random(")&&(u=Ts(u)),ke(u+"")||(u+=Ke.units[p]||ke(xt(e,p))||""),(u+"").charAt(1)==="="&&(u=xt(e,p))):u=xt(e,p),d=parseFloat(u),_=f==="string"&&l.charAt(1)==="="&&l.substr(0,2),_&&(l=l.substr(2)),h=parseFloat(l),p in Nt&&(p==="autoAlpha"&&(d===1&&xt(e,"visibility")==="hidden"&&h&&(d=0),S.push("visibility",0,a.visibility),Yt(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Nt[p],~p.indexOf(",")&&(p=p.split(",")[0]))),w=p in jt,w){if(this.styles.save(p),I||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ss(e,t.parseTransform),A=t.smoothOrigin!==!1&&T.smooth,I=this._pt=new qe(this._pt,a,X,0,1,T.renderTransform,T,0,-1),I.dep=1),p==="scale")this._pt=new qe(this._pt,T,"scaleY",T.scaleY,(_?rr(T.scaleY,_+h):h)-T.scaleY||0,kc),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){S.push(ht,0,a[ht]),l=RS(l),T.svg?Dc(e,l,0,A,0,this):(y=parseFloat(l.split(" ")[2])||0,y!==T.zOrigin&&Yt(this,T,"zOrigin",T.zOrigin,y),Yt(this,a,p,ro(u),ro(l)));continue}else if(p==="svgOrigin"){Dc(e,l,1,A,0,this);continue}else if(p in Og){NS(this,T,p,d,_?rr(d,_+l):l);continue}else if(p==="smoothOrigin"){Yt(this,T,"smooth",T.smooth,l);continue}else if(p==="force3D"){T[p]=l;continue}else if(p==="transform"){PS(this,l,e);continue}}else p in a||(p=Sr(p)||p);if(w||(h||h===0)&&(d||d===0)&&!gS.test(l)&&p in a)g=(u+"").substr((d+"").length),h||(h=0),y=ke(l)||(p in Ke.units?Ke.units[p]:g),g!==y&&(d=an(e,p,u,y)),this._pt=new qe(this._pt,w?T:a,p,d,(_?rr(d,_+h):h)-d,!w&&(y==="px"||p==="zIndex")&&t.autoRound!==!1?vS:kc),this._pt.u=y||0,g!==y&&y!=="%"&&(this._pt.b=u,this._pt.r=_S);else if(p in a)DS.call(this,e,p,u,_?_+l:l);else if(p in e)this.add(e,p,u||e[p],_?_+l:l,s,i);else if(p!=="parseTransform"){Ku(p,l);continue}w||(p in a?S.push(p,0,a[p]):S.push(p,1,u||e[p])),o.push(p)}}k&&bg(this)},render:function(e,t){if(t.tween._time||!rl())for(var r=t._pt;r;)r.r(e,r.d),r=r._next;else t.styles.revert()},get:xt,aliases:Nt,getSetter:function(e,t,r){var s=Nt[t];return s&&s.indexOf(",")<0&&(t=s),t in jt&&t!==ht&&(e._gsap.x||xt(e,"x"))?r&&qh===r?t==="scale"?ES:IS:(qh=r||{})&&(t==="scale"?bS:SS):e.style&&!Hu(e.style[t])?wS:~t.indexOf("-")?TS:el(e,t)},core:{_removeProperty:Es,_getMatrix:il}};Ye.utils.checkPrefix=Sr;Ye.core.getStyleSaver=Dg;(function(n,e,t,r){var s=$e(n+","+e+","+t,function(i){jt[i]=1});$e(e,function(i){Ke.units[i]="deg",Og[i]=1}),Nt[s[13]]=n+","+e,$e(r,function(i){var o=i.split(":");Nt[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ke.units[n]="px"});Ye.registerPlugin(Mg);var Fg=Ye.registerPlugin(Mg)||Ye;Fg.core.Tween;const MS=()=>{let n=Fg.timeline();n.to(Ia,{duration:.25,width:"100%",left:"0%",delay:.1,stagger:.05}),n.to(Ia,{duration:.25,width:"100%",left:"100%",delay:.1,stagger:-.05}),n.set(Ia,{left:"0",width:"0"})},Ne=(n,e)=>{e?Xh(n):(MS(),setTimeout(()=>{Xh(n)},650))},Xh=n=>{n.classList.add("page--active"),LE.forEach(e=>{e!==n&&e.classList.remove("page--active")})},qt=n=>{n.classList.add("overlay--active")},Lr=()=>{zE.forEach(n=>{n.classList.remove("overlay--active")})},FS=async n=>{await Js(ut(re,"projects"),n)},Ug=async(n,e)=>{await km(St(re,"projects",n),e)},US=async n=>{await hc(St(re,"projects",n));const e=ut(re,"tasks"),t=Ys(e,Xs("projectId","==",n));(await Sm(t)).forEach(async s=>{await hc(St(re,"tasks",s.id))})},ks=async(n,e)=>{const t=ut(re,"projects"),r=Ys(t,Xs("members","array-contains",n));let s;e&&(s=await DE(r)),Zs(r,i=>{e||(Mm.innerHTML="",i.forEach(o=>{Zo(o.id,!0,"normal")})),e&&(Rn.innerHTML="",i.forEach(o=>{GS(o.id,o.data())}),KS(s.data().count),Gg())})},Bg=async n=>(await Bu(St(re,"projects",n))).data(),BS=async n=>{await CE(St(re,"users",n.userId),{username:n.username,createdAt:n.createdAt})},Vg=async n=>(await Bu(St(re,"users",n))).data(),VS=async n=>{const e=ut(re,"users"),t=Ys(e,Xs("username","==",n),bE(1)),r=await Sm(t);return r.empty?!1:r.docs[0].id},jg=n=>{let e=n.toDate(),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0");return`${t}/${r}`},Jh=(n,e,t)=>{const r=new Date(t,e-1,n);return ee.fromDate(r)},jS=n=>{let e=n.toDate(),t=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getFullYear().toString();return[t,r,s]},$S=n=>{const e=Array.from(document.querySelectorAll(`input[name="${n}"]`));return Array.from(e.map(t=>t.value))},qS=async n=>{n.preventDefault();let e=[],t=Me.projectName.value,r=Me.description.value,s=$S("collaborators[]"),i=Me.day.value,o=Me.month.value,a=Me.year.value;const c=s.map(async l=>await VS(l));if((await Promise.all(c)).forEach((l,h)=>{l!==!1?s[h]=l:e.push("One or more invalid collaborators")}),lt(t)||e.push("A title for your project is required"),e.length===0)try{Gr.innerHTML="",Gr.classList.remove("form__errors--active"),Me.getAttribute("data-update")==="true"?Ug(sessionStorage.getItem("currentProjectId"),{title:t,deadline:Jh(i,o,a),description:r,members:s}):FS({title:t,deadline:Jh(i,o,a),description:r,members:s,taskOverview:[0,0,0]}),Me.setAttribute("data-update","false"),Me.reset(),zS(),setTimeout(()=>{Lr(),ks(sessionStorage.getItem("userId"),!0),Ne(xr)},800)}catch{Zh(Gr,e)}else Zh(Gr,e)},$g=n=>{const e=document.createElement("li");e.classList.add("new-project__collaborator"),e.innerHTML=`
        <div class="new-project__collaborator-icon"></div>
        <input type="text" class="form__input" placeholder="Collaborator name" name="collaborators[]" value="${n||""}"/>
        <button class="icon-btn icon-btn--secondary icon-btn--close">
            <img src="/icons/plus.svg" alt="close icon" />
        </button>
    `,$u.appendChild(e),Array.from(document.querySelectorAll(".new-project__collaborator button")).forEach(t=>{t.addEventListener("click",()=>{var r;(r=t.parentElement)==null||r.remove()})})},zS=()=>{Ah.classList.add("form__succes--active"),setTimeout(()=>{Ah.classList.remove("form__succes--active")},1e3)},HS=()=>{Ch.classList.add("form__delete--active"),setTimeout(()=>{Ch.classList.remove("form__delete--active")},1e3)},Zh=(n,e)=>{n.innerHTML="",e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),Gr.classList.add("form__errors--active")},GS=(n,e)=>{let t=document.createElement("li");t.classList.add("projects__project"),t.setAttribute("data-id",n),t.innerHTML=`
        <div class="projects__project-header mb-xs">
            <h3 class="text-xl">${e.title}</h3>
            <div class="projects__project-deadline">
                <img src="/icons/calendar.svg" alt="calender icon" />
                <span class="text-orange bold">${jg(e.deadline)}</span>
            </div>
        </div>

        <p class="text-sm text-subtle mb-md">
            ${e.description} <br />
            <span class="bold text-blue"> read more </span>
        </p>

        <h4 class="mb-xs">Project members</h4>
        <div class="projects__members-info mb-xs">
            <ul class="projects__members-list">
                ${Hg(e.members,"small")}
            </ul>
            <span>${e.members.length>4?`${e.members.length-4}+`:""}</span>
        </div>

        <div class="projects__progress-info mb-sm">
            <div class="projects__progress-header mb-xs">
                <h4 class="regular">Project progression</h4>
                <span id="completion-percentage" class="bold">${ed(e.taskOverview)}%</span>
            </div>
            <div class="projects__progress-bar">
                <span style="width: ${ed(e.taskOverview)}%" class="projects__progress-bar-value"></span>
            </div>
        </div>

        <div class="projects__task-overview">
            <span class="projects__task projects__task--todo">${e.taskOverview[0]}</span>
            <span class="projects__task projects__task--in-progress">${e.taskOverview[1]}</span>
            <span class="projects__task projects__task--completed">${e.taskOverview[2]}</span>
        </div>
    `,t.addEventListener("click",async()=>{const r=await Bg(n);sessionStorage.setItem("currentProjectId",n),sessionStorage.setItem("currentProjectData",JSON.stringify(e)),qg(r),Zo(n,!0,"small"),Um(n),Ne(Ko)}),Rn.appendChild(t)},qg=n=>{Lh.innerHTML=`
        <div class="project__general-header mb-md">
            <h3 class="text-xl">${n.title}</h3>
            <div class="project__deadline">
                <img src="/icons/calendar.svg" alt="calendar icon" />
                <span class="text-orange bold">${jg(n.deadline)}</span>
            </div>
        </div>

        <h4 class="mb-xs">Description</h4>
        <p class="text-sm text-subtle mb-md">${n.description}</p>

        <h4 class="mb-xs">Members</h4>
        <div class="project__members-info">
            <ul id="project-members-list" class="project__members-list">
                ${Hg(n.members,"large")}
                <li class="project__add-member">
                    <img src="/icons/plus.svg" alt="plus icon" />
                </li>
            </ul>
            <span>${n.members.length>4?`${n.members.length-4}+`:""}</span>
        </div>
    `,Lh.querySelector("#project-members-list").addEventListener("click",()=>{zg(sessionStorage.getItem("currentProjectData")),qt(Wo)})},zg=async n=>{n=JSON.parse(n);const e=n.members.map(async s=>(await Vg(s)).username),t=await Promise.all(e);$u.innerHTML="",t.forEach(s=>{$g(s)}),Me.projectName.value=n.title,Me.description.value=n.description;const r=jS(new ee(n.deadline.seconds,n.deadline.nanoseconds));Me.day.value=r[0],Me.month.value=r[1],Me.year.value=r[2],Me.setAttribute("data-update","true")},Hg=(n,e)=>{let t=[];return n.forEach(()=>{t.push(`<li class="project${e=="small"?"s":""}__member"></li>`)}),t.join("")},ed=n=>n.every(e=>e==0)?0:Math.floor(n[2]/n.reduce((e,t)=>e+t)*100),Gg=()=>{const n=document.createElement("div");if(n.classList.add("projects__empty-list-placeholder","center"),n.innerHTML=`
        <p class="mb-xxs bold text-lg">0 Results</p>
        <p class="text-subtle text-sm">Seems that you haven't completed any projects yet</p>
    `,Array.from(Rn.children).every(r=>r.classList.contains("projects__project--hidden")))Rn.appendChild(n);else{const r=document.querySelector(".projects__empty-list-placeholder");r&&Rn.removeChild(r)}},KS=n=>{const e=Rn.children.length;hb.innerText=`${e}`,db.innerText=`${e-n}`},WS=()=>{const n=[gr.children.length,yr.children.length,_r.children.length];Ug(sessionStorage.getItem("currentProjectId"),{taskOverview:n})},QS=n=>{gr.innerHTML="",yr.innerHTML="",_r.innerHTML="",n.forEach(e=>{const t=e.data();t.progressLabel==="To do"?La(e.id,t,gr):t.progressLabel=="In progress"?La(e.id,t,yr):La(e.id,t,_r)}),WS(),Qg()},YS=n=>{n.forEach(e=>{const t=e.data();XS(e.id,t)})},XS=(n,e)=>{const t=document.createElement("li");t.classList.add("dashboard__task"),t.innerHTML=`
        <h4 class="mb-xs text-lg">${e.taskname}</h4>
        <p class="text-sm text-subtle mb-lg">${e.description}</p>
        <div class="dashboard__task-info">
            <div class="dashboard__task-infopiece">
                <img src="/icons/pencil.svg" alt="pencil icon" />
                <span class="text-orange">${e.notesCount}</span>
            </div>
            <div class="dashboard__task-infopiece">
                <img src="/icons/timer.svg" alt="pencil icon" />
                <span class="text-orange">${e.timeEstimate}</span>
            </div>
        </div>
        <div class="text-sm dashboard__task-progress dashboard__task-progress--${Wg(e.progressLabel)}">${e.progressLabel}</div>
    `,t.addEventListener("click",async()=>{const r=await Yg(n);sessionStorage.setItem("currentTaskId",n),sessionStorage.setItem("currentTaskData",JSON.stringify(e)),Kg(r),Xg(n),Ne(ju)}),Mm.appendChild(t)},La=(n,e,t)=>{const r=document.createElement("li");r.classList.add("project__task"),r.setAttribute("draggable","true"),r.setAttribute("data-id",n),r.innerHTML=`
        <p class="bold">${e.taskname}</p>
        <div class="project__task-progress project__task-progress--${Wg(e.progressLabel)}">${e.progressLabel}</div>
    `,r.addEventListener("click",async()=>{const s=await Yg(n);sessionStorage.setItem("currentTaskId",n),sessionStorage.setItem("currentTaskData",JSON.stringify(e)),Kg(s),Xg(n),Ne(ju)}),r.addEventListener("dragstart",()=>{r.classList.add("project__task--dragging")}),r.addEventListener("dragend",()=>{r.classList.remove("project__task--dragging")}),t.appendChild(r)},Kg=n=>{fb.innerHTML=`
        <h3 class="text-xl mb-md">${n.taskname}</h3>
        <h4 class="mb-sm">Description</h4>
        <p class="text-subtle mb-md text-sm">${n.description}</p>
        <h4 class="mb-sm">Task Progress</h4>
        <div class="task__progress">
            <div class="task__progress-option ${n.progressLabel==="To do"?"task__progress-option--selected":""}">To do</div>
            <div class="task__progress-option ${n.progressLabel==="In progress"?"task__progress-option--selected":""}">In progress</div>
            <div class="task__progress-option ${n.progressLabel==="Completed"?"task__progress-option--selected":""}">Complete</div>
        </div>
    `},JS=async n=>{n=JSON.parse(n),console.log(n),Ze.taskName.value=n.taskname,Ze.description.value=n.description,Ze.estimate.value=n.timeEstimate=="No estimate"?"":n.timeEstimate,Ze.setAttribute("data-update","true")},Wg=n=>n.split(" ").join("-").toLocaleLowerCase(),Qg=()=>{gr.innerHTML===""&&Oa("Todo",gr),yr.innerHTML===""&&Oa("In Progress",yr),_r.innerHTML===""&&Oa("Completed",_r)},Oa=(n,e)=>{const t=document.createElement("div");t.classList.add("project__tasks-list-placeholder"),t.innerHTML=`
        <span class="text-white bold">Add ${n}</span>
        <img src="/icons/plus-blue.svg" alt="plus icon" />
    `,t.addEventListener("click",()=>{qt(Qo)}),e.appendChild(t)};[gr,yr,_r].forEach(n=>{n.addEventListener("dragover",e=>{e.preventDefault();const t=document.querySelector(".project__task--dragging");n.appendChild(t),Qg()})});const ZS=async n=>{await Js(ut(re,"tasks"),n)},ek=async(n,e)=>{await km(St(re,"tasks",n),e)},tk=async n=>{await hc(St(re,"tasks",n))},Zo=async(n,e,t)=>{const r=ut(re,"tasks"),s=Ys(r,Xs("projectId","==",n));Zs(s,i=>{e&&t==="small"&&QS(i),e&&t==="normal"&&YS(i)})},Yg=async n=>(await Bu(St(re,"tasks",n))).data(),nk=async(n,e)=>{await Js(ut(re,`tasks/${n}/notes`),e)},Xg=async n=>{const e=ut(re,`tasks/${n}/notes`);Zs(e,t=>{Fm.innerHTML="",t.forEach(r=>{Tb(r.id,r.data())})})},rk=async n=>{n.preventDefault();let e=qu.innerHTML,t=sessionStorage.getItem("currentTaskId");lt(e)?(nk(t,{content:e}),At.value="",sk(),setTimeout(()=>{Lr()},800)):console.log("error empty field detected")},sk=()=>{xh.classList.add("form__succes--active"),setTimeout(()=>{xh.classList.remove("form__succes--active")},1e3)},ik=async n=>{n.preventDefault();let e=[],t=Ze.taskName.value,r=Ze.description.value,s=Ze.progress.value,i=Ze.estimate.value;if(lt(t)||e.push("A name for this task is required"),lt(i)||(i="No estimate"),e.length===0)try{Kr.innerHTML="",Kr.classList.remove("form__errors--active"),Ze.getAttribute("data-update")==="true"?ek(sessionStorage.getItem("currentTaskId"),{taskname:t,description:r,timeEstimate:i}):ZS({projectId:sessionStorage.getItem("currentProjectId"),taskname:t,description:r,progressLabel:s,notesCount:0,timeEstimate:i}),Ze.reset(),ck(),setTimeout(()=>{Lr()},800)}catch{td(Kr,e)}else td(Kr,e)},Jg=()=>{YE.classList.toggle("form__dropdown-list--active"),Qi.classList.toggle("form__dropdown-selected--active")},ok=n=>{let e=Qi.children[1],t=Qi.children[0];Om.forEach(r=>{r.classList.remove("form__dropdown-option--selected")}),n.classList.add("form__dropdown-option--selected"),e.innerText=n.innerText,t.value=n.innerText,Jg()},ak=n=>{Nm.forEach(e=>{e.classList.remove("new-task__chip--selected")}),Ze.estimate.value=n.innerText,n.classList.add("new-task__chip--selected")},ck=()=>{Dh.classList.add("form__succes--active"),setTimeout(()=>{Dh.classList.remove("form__succes--active")},1e3)},uk=()=>{Rh.classList.add("form__delete--active"),setTimeout(()=>{Rh.classList.remove("form__delete--active")},1e3)},td=(n,e)=>{n.innerHTML="",console.log("here"),e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),Kr.classList.add("form__errors--active")},ea=n=>{n=="completed"?(pc.classList.add("projects__filter-option--active"),fc.classList.remove("projects__filter-option--active"),nd("completed")):n=="in progress"&&(fc.classList.add("projects__filter-option--active"),pc.classList.remove("projects__filter-option--active"),nd("in progress")),Gg()},nd=n=>{const e=Array.from(Rn.children);e&&e.forEach(t=>{const r=t.querySelector("#completion-percentage");r&&(n==="completed"?r.innerText==="100%"?t.classList.remove("projects__project--hidden"):t.classList.add("projects__project--hidden"):n==="in progress"&&(r.innerText!=="100%"?t.classList.remove("projects__project--hidden"):t.classList.add("projects__project--hidden")))})};function ol(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lk=Zg,ey=new qn("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new uo("@firebase/auth");function bi(n,...e){rd.logLevel<=j.ERROR&&rd.error(`Auth (${xs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw al(n,...e)}function wt(n,...e){return al(n,...e)}function ty(n,e,t){const r=Object.assign(Object.assign({},lk()),{[e]:t});return new qn("auth","Firebase",r).create(e,{appName:n.name})}function hk(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(n,"argument-error"),ty(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function al(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ey.create(n,...e)}function L(n,e,...t){if(!n)throw al(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bi(e),new Error(e)}function $t(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map;function Mt(n){$t(n instanceof Function,"Expected a class definition");let e=sd.get(n);return e?($t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sd.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(n,e){const t=zn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(as(i,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function fk(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pk(){return id()==="http:"||id()==="https:"}function id(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pk()||Sd()||"connection"in navigator)?navigator.onLine:!0}function gk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,$t(t>e,"Short delay should be less than long delay!"),this.isMobile=Py()||My()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e){$t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new ti(3e4,6e4);function ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ri(n,e,t,r,s={}){return ry(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Rs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ny.fetch()(sy(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ry(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yk),e);try{const s=new vk(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ty(n,l,u);ct(n,l)}}catch(s){if(s instanceof pt)throw s;ct(n,"network-request-failed")}}async function si(n,e,t,r,s={}){const i=await ri(n,e,t,r,s);return"mfaPendingCredential"in i&&ct(n,"multi-factor-auth-required",{_serverResponse:i}),i}function sy(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?cl(n.config,s):`${n.config.apiScheme}://${s}`}class vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),_k.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e){return ri(n,"POST","/v1/accounts:delete",e)}async function Tk(n,e){return ri(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ik(n,e=!1){const t=pe(n),r=await t.getIdToken(e),s=ul(r);L(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:os(Na(s.auth_time)),issuedAtTime:os(Na(s.iat)),expirationTime:os(Na(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(n){return Number(n)*1e3}function ul(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const s=bd(t);return s?JSON.parse(s):(bi("Failed to decode base64 JWT payload"),null)}catch(s){return bi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ek(n){const e=ul(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&bk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=os(this.lastLoginAt),this.creationTime=os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(n){var e;const t=n.auth,r=await n.getIdToken(),s=await As(n,Tk(t,{idToken:r}));L(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ck(i.providerUserInfo):[],a=Ak(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new iy(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function kk(n){const e=pe(n);await so(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ak(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ck(n){return n.map(e=>{var{providerId:t}=e,r=ol(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(n,e){const t=await ry(n,{},async()=>{const r=Rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=sy(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ny.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ek(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Dk(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Cs;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(L(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(L(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new iy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await As(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ik(this,e)}reload(){return kk(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await so(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await As(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,p=(a=t.tenantId)!==null&&a!==void 0?a:void 0,g=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(u=t.createdAt)!==null&&u!==void 0?u:void 0,_=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:w,emailVerified:I,isAnonymous:T,providerData:A,stsTokenManager:k}=t;L(w&&k,e,"internal-error");const S=Cs.fromJSON(this.name,k);L(typeof w=="string",e,"internal-error"),zt(h,e.name),zt(d,e.name),L(typeof I=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),zt(f,e.name),zt(m,e.name),zt(p,e.name),zt(g,e.name),zt(y,e.name),zt(_,e.name);const b=new Nn({uid:w,auth:e,email:d,emailVerified:I,displayName:h,isAnonymous:T,photoURL:m,phoneNumber:f,tenantId:p,stsTokenManager:S,createdAt:y,lastLoginAt:_});return A&&Array.isArray(A)&&(b.providerData=A.map(V=>Object.assign({},V))),g&&(b._redirectEventId=g),b}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cs;s.updateFromServerResponse(t);const i=new Nn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await so(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oy.type="NONE";const od=oy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e,t){return`firebase:${n}:${e}:${t}`}class or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Si(this.userKey,s.apiKey,i),this.fullPersistenceKey=Si("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new or(Mt(od),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mt(od);const o=Si(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Nn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new or(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new or(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hy(e))return"Blackberry";if(dy(e))return"Webos";if(ll(e))return"Safari";if((e.includes("chrome/")||cy(e))&&!e.includes("edge/"))return"Chrome";if(ly(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ay(n=Le()){return/firefox\//i.test(n)}function ll(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cy(n=Le()){return/crios\//i.test(n)}function uy(n=Le()){return/iemobile/i.test(n)}function ly(n=Le()){return/android/i.test(n)}function hy(n=Le()){return/blackberry/i.test(n)}function dy(n=Le()){return/webos/i.test(n)}function ta(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rk(n=Le()){var e;return ta(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xk(){return Fy()&&document.documentMode===10}function fy(n=Le()){return ta(n)||ly(n)||dy(n)||hy(n)||/windows phone/i.test(n)||uy(n)}function Lk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n,e=[]){let t;switch(n){case"Browser":t=ad(Le());break;case"Worker":t=`${ad(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cd(this),this.idTokenSubscription=new cd(this),this.beforeStateQueue=new Ok(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ey,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await so(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pe(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Or(n){return pe(n)}class cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xy(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pk(n,e,t){const r=Or(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=my(e),{host:o,port:a}=Mk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Fk()}function my(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mk(n){const e=my(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ud(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ud(o)}}}function ud(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function Uk(n,e){return ri(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(n,e){return si(n,"POST","/v1/accounts:signInWithPassword",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(n,e){return si(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}async function jk(n,e){return si(n,"POST","/v1/accounts:signInWithEmailLink",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends hl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ds(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ds(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Bk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Vk(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Uk(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jk(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,e){return si(n,"POST","/v1/accounts:signInWithIdp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="http://localhost";class jn extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ol(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zk(n){const e=Br(Vr(n)).link,t=e?Br(Vr(e)).deep_link_id:null,r=Br(Vr(n)).deep_link_id;return(r?Br(Vr(r)).link:null)||r||t||e||n}class dl{constructor(e){var t,r,s,i,o,a;const c=Br(Vr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=qk((s=c.mode)!==null&&s!==void 0?s:null);L(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=zk(e);try{return new dl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.providerId=Nr.PROVIDER_ID}static credential(e,t){return Ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dl.parseLink(t);return L(r,"argument-error"),Ds._fromEmailAndCode(e,r.code,r.tenantId)}}Nr.PROVIDER_ID="password";Nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ii{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Lt.credential(t,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends ii{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ii{constructor(){super("twitter.com")}static credential(e,t){return jn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kt.credential(t,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(n,e){return si(n,"POST","/v1/accounts:signUp",ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Nn._fromIdTokenResponse(e,r,s),o=ld(r);return new $n({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ld(r);return new $n({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ld(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends pt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new io(e,t,r,s)}}function gy(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(n,i,e,r):i})}async function Gk(n,e,t=!1){const r=await As(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $n._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await As(n,gy(r,s,e,n),t);L(i.idToken,r,"internal-error");const o=ul(i.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(n.uid===a,r,"user-mismatch"),$n._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(n,e,t=!1){const r="signIn",s=await gy(n,r,e),i=await $n._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Wk(n,e){return yy(Or(n),e)}async function Qk(n,e,t){const r=Or(n),s=await Hk(r,{returnSecureToken:!0,email:e,password:t}),i=await $n._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Yk(n,e,t){return Wk(pe(n),Nr.credential(e,t))}function Xk(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Jk(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}const oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){const n=Le();return ll(n)||ta(n)}const eA=1e3,tA=10;class vy extends _y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zk()&&Lk(),this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tA):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vy.type="LOCAL";const nA=vy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends _y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wy.type="SESSION";const Ty=wy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await rA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=pl("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function iA(n){Tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function oA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cA(){return Iy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="firebaseLocalStorageDb",uA=1,ao="firebaseLocalStorage",by="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ra(n,e){return n.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function lA(){const n=indexedDB.deleteDatabase(Ey);return new oi(n).toPromise()}function xc(){const n=indexedDB.open(Ey,uA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ao,{keyPath:by})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ao)?e(r):(r.close(),await lA(),e(await xc()))})})}async function hd(n,e,t){const r=ra(n,!0).put({[by]:e,value:t});return new oi(r).toPromise()}async function hA(n,e){const t=ra(n,!1).get(e),r=await new oi(t).toPromise();return r===void 0?null:r.value}function dd(n,e){const t=ra(n,!0).delete(e);return new oi(t).toPromise()}const dA=800,fA=3;class Sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(cA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oA(),!this.activeServiceWorker)return;this.sender=new sA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await hd(e,oo,"1"),await dd(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hA(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ra(s,!1).getAll();return new oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sy.type="LOCAL";const pA=Sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function gA(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",mA().appendChild(r)})}function yA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n,e){return e?Mt(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _A(n){return yy(n.auth,new ml(n),n.bypassAuthState)}function vA(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Kk(t,new ml(n),n.bypassAuthState)}async function wA(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Gk(t,new ml(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _A;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return vA;default:ct(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new ti(2e3,1e4);class er extends Ay{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="pendingRedirect",ki=new Map;class EA extends Ay{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ki.get(this.auth._key());if(!e){try{const r=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ki.set(this.auth._key(),e)}return this.bypassAuthState||ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(n,e){const t=Dy(e),r=Cy(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function SA(n,e){return Cy(n)._set(Dy(e),"true")}function kA(n,e){ki.set(n._key(),e)}function Cy(n){return Mt(n._redirectPersistence)}function Dy(n){return Si(IA,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n,e,t){return CA(n,e,t)}async function CA(n,e,t){const r=Or(n);hk(n,e,fl);const s=ky(r,t);return await SA(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function DA(n,e,t=!1){const r=Or(n),s=ky(r,e),o=await new EA(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=10*60*1e3;class xA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ry(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RA&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ry({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(n,e={}){return ri(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PA=/^https?/;async function MA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await OA(n);for(const t of e)try{if(FA(t))return}catch{}ct(n,"unauthorized-domain")}function FA(n){const e=Rc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!PA.test(t))return!1;if(NA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new ti(3e4,6e4);function pd(){const n=Tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BA(n){return new Promise((e,t)=>{var r,s,i;function o(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),t(wt(n,"network-request-failed"))},timeout:UA.get()})}if(!((s=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tt().gapi)===null||i===void 0)&&i.load)o();else{const a=yA("iframefcb");return Tt()[a]=()=>{gapi.load?o():t(wt(n,"network-request-failed"))},gA(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function VA(n){return Ai=Ai||BA(n),Ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=new ti(5e3,15e3),$A="__/auth/iframe",qA="emulator/auth/iframe",zA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GA(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?cl(e,qA):`https://${n.config.authDomain}/${$A}`,r={apiKey:e.apiKey,appName:n.name,v:xs},s=HA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Rs(r).slice(1)}`}async function KA(n){const e=await VA(n),t=Tt().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:GA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wt(n,"network-request-failed"),a=Tt().setTimeout(()=>{i(o)},jA.get());function c(){Tt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QA=500,YA=600,XA="_blank",JA="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZA(n,e,t,r=QA,s=YA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},WA),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Le().toLowerCase();t&&(a=cy(u)?XA:t),ay(u)&&(e=e||JA,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Rk(u)&&a!=="_self")return eC(e||"",a),new md(null);const h=window.open(e||"",a,l);L(h,n,"popup-blocked");try{h.focus()}catch{}return new md(h)}function eC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="__/auth/handler",nC="emulator/auth/handler";function gd(n,e,t,r,s,i){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xs,eventId:s};if(e instanceof fl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof ii){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${rC(n)}?${Rs(a).slice(1)}`}function rC({config:n}){return n.emulator?cl(n,nC):`https://${n.authDomain}/${tC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class sC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ty,this._completeRedirectFn=DA,this._overrideRedirectResult=kA}async _openPopup(e,t,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=gd(e,t,r,Rc(),s);return ZA(e,o,pl())}async _openRedirect(e,t,r,s){return await this._originValidation(e),iA(gd(e,t,r,Rc(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await KA(e),r=new xA(e);return t.register("authEvent",s=>(L(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pa,{type:Pa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pa];o!==void 0&&t(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fy()||ll()||ta()}}const iC=sC;var yd="@firebase/auth",_d="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cC(n){It(new dt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{L(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(n)},l=new Nk(a,c,u);return fk(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",e=>{const t=Or(e.getProvider("auth").getImmediate());return(r=>new oC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(yd,_d,aC(n)),rt(yd,_d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=5*60,lC=Dd("authIdTokenMaxAge")||uC;let vd=null;const hC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lC)return;const s=t==null?void 0:t.token;vd!==s&&(vd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dC(n=Nc()){const e=zn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dk(n,{popupRedirectResolver:iC,persistence:[pA,nA,Ty]}),r=Dd("authTokenSyncURL");if(r){const i=hC(r);Jk(t,i,()=>i(t.currentUser)),Xk(t,o=>i(o))}const s=Cd("auth");return s&&Pk(t,`http://${s}`),t}cC("Browser");const ai=dC();ai.onAuthStateChanged(async n=>{if(n){sessionStorage.setItem("userId",n.uid);const e=await Vg(n.uid);sessionStorage.setItem("username",e.username),OE.innerText=`Hi, ${e.username}!`,Ne(Vu),ks(sessionStorage.getItem("userId"),!1),ks(sessionStorage.getItem("userId"),!0)}else sessionStorage.removeItem("userId"),Ne(Go)});const fC=async n=>{n.preventDefault();let e=[],t=Hr.username.value,r=Hr.email.value,s=Hr.password.value;if(lt(t)?Nh(8,t)||e.push("Username must be longer than 8 characters"):e.push("Username can't be empty"),lt(r)?yb(r)||e.push("Email is not a valid format"):e.push("Email can't be empty"),lt(s)?Nh(6,s)||e.push("Password must be longer than 6 characters"):e.push("Password can't be empty"),e.length===0)try{kn.innerHTML="",kn.classList.remove("form__errors--active");let i=await Qk(ai,r,s);i&&(BS({userId:i.user.uid,username:t,createdAt:ee.now()}),Hr.reset())}catch{e.push("An account with this email already exists"),co(kn,e)}else co(kn,e)},pC=async n=>{n.preventDefault();let e=[],t=wi.email.value,r=wi.password.value;if(lt(t)||e.push("Email can't be empty"),lt(r)||e.push("Password can't be empty"),e.length===0)try{ns.innerHTML="",ns.classList.remove("form__errors--active"),await Yk(ai,t,r)&&wi.reset()}catch{e.push("Wrong email and password combination"),co(ns,e)}else co(kn,e)},mC=async()=>{const n=new Lt;await AA(ai,n)},gC=()=>{ai.signOut()},co=(n,e)=>{n.innerHTML="",e.forEach(t=>{let r=document.createElement("span");r.classList.add("error","text-sm"),r.innerText=t,n.appendChild(r)}),n.id=="login-form-errors"?(ns.classList.add("form__errors--active"),kn.classList.remove("form__errors--active")):(kn.classList.add("form__errors--active"),ns.classList.remove("form__errors--active"))},yC=`
# Title
## Subheading
this is some **random** text.

* list item
* another list item
* last item

more text

* apples
* bananas

* desktop
* keyboard
* mouse

1 Bram
2 Sander
3 Jasper

'''javascript
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        displayHeader(false);
    } else {
        displayHeader(true);
    }
    lastScrollTop = scrollTop;
});
'''
`,xy=n=>n.replace(/^# (.*)/gm,'<h4 class="md__heading mb-xs">$1</h4>').replace(/^## (.*)/gm,'<h5 class="md__subheading mb-xs">$1</h5>').replace(/\*\*(.*)\*\*/gim,'<b class="bold">$1</b>').replace(/[\']{3}(.*)([^\`]+)[\']{3}/g,'<pre><code class="$1">$2</code></pre>').replace(/^[0-9] (.*)/gm,'<li class="md__ol-item">$1</li>').replace(/(<li class="md__ol-item">.*<\/li>\n?)+/g,`<ol class="md__ol">
$&</ol>
`).replace(/^\* (.*)/gm,'<li class="md__ul-item">$1</li>').replace(/(<li class="md__ul-item">.*<\/li>\n?)+/g,`<ul class="md__ul">
$&</ul>
`).trim(),Ly=n=>{qu.innerHTML=xy(n)},_C=()=>{Ly(At.value),At.classList.toggle("new-note__markdown-content--active"),qu.classList.toggle("new-note__markdown-preview--active")},vC=()=>{At.value+=`# Title
`},wC=()=>{At.value+=`## Subtitle
`},TC=()=>{At.value+=`* list item
* list item
* list item
`},IC=()=>{At.value+=`'''language
place your code
'''

    `};xy(yC);PE.addEventListener("click",()=>{ea("completed"),Ne(xr)});NE.addEventListener("click",()=>{ea("in progress"),Ne(xr)});FE.addEventListener("click",()=>{Ne(xr)});UE.addEventListener("click",async()=>{const n=sessionStorage.getItem("currentProjectId"),e=await Bg(n);qg(e),Zo(n,!0,"small"),Um(n),Ne(Ko)});ME.addEventListener("click",()=>{Ne(Vu),ks(sessionStorage.getItem("userId"),!1)});pc.addEventListener("click",()=>{ea("completed")});fc.addEventListener("click",()=>{ea("in progress")});BE.addEventListener("click",()=>{gC(),Ne(Go)});VE.forEach(n=>{n.addEventListener("click",()=>{Me.reset(),$u.innerHTML="",qt(Wo)})});jE.forEach(n=>{n.addEventListener("click",()=>{Ze.reset(),qt(Qo)})});sb.addEventListener("click",()=>{zg(sessionStorage.getItem("currentProjectData")),qt(Wo)});ib.addEventListener("click",()=>{qt(xm)});cb.addEventListener("click",async()=>{await US(sessionStorage.getItem("currentProjectId")),ks(sessionStorage.getItem("userId"),!0),HS(),setTimeout(()=>{Lr(),Ne(xr)},800)});ob.addEventListener("click",()=>{JS(sessionStorage.getItem("currentTaskData")),qt(Qo)});ab.addEventListener("click",async()=>{qt(Lm)});ub.addEventListener("click",async()=>{await tk(sessionStorage.getItem("currentTaskId")),Zo(sessionStorage.getItem("currentProjectId"),!0,"small"),uk(),setTimeout(()=>{Lr(),Ne(Ko)},800)});$E.addEventListener("click",()=>{At.innerHTML="",qt(Rm)});dc.addEventListener("submit",n=>{vb(n)});JE.addEventListener("submit",n=>{rk(n)});Qi.addEventListener("click",()=>{Jg()});Om.forEach(n=>{n.addEventListener("click",()=>{ok(n)})});Nm.forEach(n=>{n.addEventListener("click",()=>{ak(n)})});WE.addEventListener("click",()=>{$g()});QE.addEventListener("click",n=>{qS(n)});XE.addEventListener("click",n=>{ik(n)});qE.forEach(n=>{n.addEventListener("click",()=>{Lr()})});ZE.addEventListener("click",()=>{vC()});eb.addEventListener("click",()=>{wC()});tb.addEventListener("click",()=>{TC()});nb.addEventListener("click",()=>{IC()});rb.addEventListener("click",()=>{_C()});At.addEventListener("input",()=>{Ly(At.value)});Hr.addEventListener("submit",n=>{fC(n)});wi.addEventListener("submit",n=>{pC(n)});Pm.addEventListener("input",()=>{_b()});KE.addEventListener("click",()=>{Ne(Go)});HE.addEventListener("click",()=>{Ne(Dm)});GE.addEventListener("click",()=>{mC()});let wd=0;window.addEventListener("scroll",()=>{let n=window.scrollY;n>wd?Td(!1):Td(!0),wd=n});const Td=n=>{xE.forEach(e=>{e.style.top=`${n?"0":"-4rem"}`})};
