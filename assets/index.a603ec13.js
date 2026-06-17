(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function It(){}function ps(r,e){for(const t in e)r[t]=e[t];return r}function Ro(r){return r()}function qs(){return Object.create(null)}function Cn(r){r.forEach(Ro)}function Mr(r){return typeof r=="function"}function Xt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Dl(r){return Object.keys(r).length===0}function Ps(r,...e){if(r==null)return It;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Tn(r){let e;return Ps(r,t=>e=t)(),e}function Rt(r,e,t){r.$$.on_destroy.push(Ps(e,t))}function Mi(r,e,t,n){if(r){const i=Io(r,e,t,n);return r[0](i)}}function Io(r,e,t,n){return r[1]&&n?ps(t.ctx.slice(),r[1](n(e))):t.ctx}function bi(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function yi(r,e,t,n,i,s){if(i){const o=Io(e,t,n,s);r.p(o,i)}}function Si(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Pl(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function js(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function Rr(r,e,t){return r.set(t),e}function Rl(r){return r&&Mr(r.destroy)?r.destroy:It}function Lt(r,e){r.appendChild(e)}function gt(r,e,t){r.insertBefore(e,t||null)}function dt(r){r.parentNode&&r.parentNode.removeChild(r)}function Il(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function Yt(r){return document.createElement(r)}function Sn(r){return document.createTextNode(r)}function hn(){return Sn(" ")}function zl(){return Sn("")}function un(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function dn(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Fl(r){return Array.from(r.childNodes)}function jn(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function Ol(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let Fi;function zi(r){Fi=r}function wi(){if(!Fi)throw new Error("Function called outside component initialization");return Fi}function Rs(r){wi().$$.on_mount.push(r)}function Ve(r){wi().$$.on_destroy.push(r)}function Is(){const r=wi();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=Ol(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function Bt(r,e){return wi().$$.context.set(r,e),e}function pn(r){return wi().$$.context.get(r)}const Pi=[],ms=[],gr=[],Ys=[],zo=Promise.resolve();let gs=!1;function Fo(){gs||(gs=!0,zo.then(Oo))}function zs(){return Fo(),zo}function Oi(r){gr.push(r)}const Ir=new Set;let Xi=0;function Oo(){const r=Fi;do{for(;Xi<Pi.length;){const e=Pi[Xi];Xi++,zi(e),Nl(e.$$)}for(zi(null),Pi.length=0,Xi=0;ms.length;)ms.pop()();for(let e=0;e<gr.length;e+=1){const t=gr[e];Ir.has(t)||(Ir.add(t),t())}gr.length=0}while(Pi.length);for(;Ys.length;)Ys.pop()();gs=!1,Ir.clear(),zi(r)}function Nl(r){if(r.fragment!==null){r.update(),Cn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(Oi)}}const _r=new Set;let Bn;function _s(){Bn={r:0,c:[],p:Bn}}function xs(){Bn.r||Cn(Bn.c),Bn=Bn.p}function Ue(r,e){r&&r.i&&(_r.delete(r),r.i(e))}function Ge(r,e,t,n){if(r&&r.o){if(_r.has(r))return;_r.add(r),Bn.c.push(()=>{_r.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function $t(r){r&&r.c()}function Vt(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||Oi(()=>{const o=r.$$.on_mount.map(Ro).filter(Mr);r.$$.on_destroy?r.$$.on_destroy.push(...o):Cn(o),r.$$.on_mount=[]}),s.forEach(Oi)}function Ht(r,e){const t=r.$$;t.fragment!==null&&(Cn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ul(r,e){r.$$.dirty[0]===-1&&(Pi.push(r),Fo(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function en(r,e,t,n,i,s,o,a=[-1]){const c=Fi;zi(r);const l=r.$$={fragment:null,ctx:[],props:s,update:It,not_equal:i,bound:qs(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:qs(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let f=!1;if(l.ctx=t?t(r,e.props||{},(u,h,...m)=>{const _=m.length?m[0]:h;return l.ctx&&i(l.ctx[u],l.ctx[u]=_)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](_),f&&Ul(r,u)),h}):[],l.update(),f=!0,Cn(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const u=Fl(e.target);l.fragment&&l.fragment.l(u),u.forEach(dt)}else l.fragment&&l.fragment.c();e.intro&&Ue(r.$$.fragment),Vt(r,e.target,e.anchor,e.customElement),Oo()}zi(c)}class tn{$destroy(){Ht(this,1),this.$destroy=It}$on(e,t){if(!Mr(t))return It;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Dl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Yn=[];function No(r,e){return{subscribe:st(r,e).subscribe}}function st(r,e=It){let t;const n=new Set;function i(a){if(Xt(r,a)&&(r=a,t)){const c=!Yn.length;for(const l of n)l[1](),Yn.push(l,r);if(c){for(let l=0;l<Yn.length;l+=2)Yn[l][0](Yn[l+1]);Yn.length=0}}}function s(a){i(a(r))}function o(a,c=It){const l=[a,c];return n.add(l),n.size===1&&(t=e(i)||It),a(r),()=>{n.delete(l),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function Bl(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return No(t,o=>{let a=!1;const c=[];let l=0,f=It;const u=()=>{if(l)return;f();const m=e(n?c[0]:c,o);s?o(m):f=Mr(m)?m:It},h=i.map((m,_)=>Ps(m,p=>{c[_]=p,l&=~(1<<_),a&&u()},()=>{l|=1<<_}));return a=!0,u(),function(){Cn(h),f()}})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fs="147",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kl=0,Zs=1,Gl=2,Uo=1,Bo=2,Ri=3,mi=0,zt=1,wn=2,En=0,di=1,vs=2,Ks=3,Js=4,Vl=5,fi=100,Hl=101,Wl=102,Qs=103,$s=104,Xl=200,ql=201,jl=202,Yl=203,ko=204,Go=205,Zl=206,Kl=207,Jl=208,Ql=209,$l=210,ec=0,tc=1,nc=2,Ms=3,ic=4,rc=5,sc=6,ac=7,Vo=0,oc=1,lc=2,Qt=0,cc=1,uc=2,fc=3,Ho=4,hc=5,Wo=300,gi=301,_i=302,bs=303,ys=304,br=306,Ss=1e3,kt=1001,ws=1002,je=1003,ea=1004,ta=1005,Pt=1006,dc=1007,yr=1008,Hn=1009,pc=1010,mc=1011,Xo=1012,gc=1013,kn=1014,Zt=1015,Ni=1016,_c=1017,xc=1018,pi=1020,vc=1021,Mc=1022,xt=1023,bc=1024,yc=1025,Gn=1026,xi=1027,Sc=1028,wc=1029,Tc=1030,Ec=1031,Ac=1033,zr=33776,Fr=33777,Or=33778,Nr=33779,na=35840,ia=35841,ra=35842,sa=35843,Cc=36196,aa=37492,oa=37496,la=37808,ca=37809,ua=37810,fa=37811,ha=37812,da=37813,pa=37814,ma=37815,ga=37816,_a=37817,xa=37818,va=37819,Ma=37820,ba=37821,ya=36492,An=3e3,ke=3001,Lc=3200,Dc=3201,Pc=0,Rc=1,qt="srgb",Ui="srgb-linear",Ur=7680,Ic=519,Sa=35044,wa="300 es",Ts=1035;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Br=Math.PI/180,Ta=180/Math.PI;function ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function zc(r,e){return(r%e+e)%e}function kr(r,e,t){return(1-t)*r+t*e}function Ea(r){return(r&r-1)===0&&r!==0}function Es(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],u=n[7],h=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],M=i[1],v=i[4],S=i[7],b=i[2],C=i[5],N=i[8];return s[0]=o*p+a*M+c*b,s[3]=o*d+a*v+c*C,s[6]=o*g+a*S+c*N,s[1]=l*p+f*M+u*b,s[4]=l*d+f*v+u*C,s[7]=l*g+f*S+u*N,s[2]=h*p+m*M+_*b,s[5]=h*d+m*v+_*C,s[8]=h*g+m*S+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*s*f+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*s,m=l*s-o*c,_=t*u+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=u*p,e[1]=(i*l-f*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(f*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gr.makeScale(e,t)),this}rotate(e){return this.premultiply(Gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gr=new Tt;function qo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Vr={[qt]:{[Ui]:Vn},[Ui]:{[qt]:xr}},ft={legacyMode:!0,get workingColorSpace(){return Ui},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Vr[e]&&Vr[e][t]!==void 0){const n=Vr[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Ot={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Hr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Yi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=zc(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hr(o,s,e+1/3),this.g=Hr(o,s,e),this.b=Hr(o,s,e-1/3)}return ft.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ft.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ft.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qt){const n=jo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ft.fromWorkingColorSpace(Yi(this,Ke),e),_t(Ke.r*255,0,255)<<16^_t(Ke.g*255,0,255)<<8^_t(Ke.b*255,0,255)<<0}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(Yi(this,Ke),t);const n=Ke.r,i=Ke.g,s=Ke.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(Yi(this,Ke),t),e.r=Ke.r,e.g=Ke.g,e.b=Ke.b,e}getStyle(e=qt){return ft.fromWorkingColorSpace(Yi(this,Ke),e),e!==qt?`color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(ji);const n=kr(Ot.h,ji.h,t),i=kr(Ot.s,ji.s,t),s=kr(Ot.l,ji.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=jo;let Jn;class Yo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Bi("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zo{constructor(e=null){this.isSource=!0,this.uuid=ki(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wr(i[o].image)):s.push(Wr(i[o]))}else s=Wr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fc=0;class pt extends Xn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=kt,i=kt,s=Pt,o=yr,a=xt,c=Hn,l=pt.DEFAULT_ANISOTROPY,f=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=ki(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Wo;pt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],m=c[5],_=c[9],p=c[2],d=c[6],g=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+p)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(m+1)/2,b=(g+1)/2,C=(f+h)/4,N=(u+p)/4,x=(_+d)/4;return v>S&&v>b?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=N/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=C/i,s=x/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=N/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((d-_)*(d-_)+(u-p)*(u-p)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(d-_)/M,this.y=(u-p)/M,this.z=(h-f)/M,this.w=Math.acos((l+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends Xn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ko extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],f=n[i+2],u=n[i+3];const h=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(u!==p||c!==h||l!==m||f!==_){let d=1-a;const g=c*h+l*m+f*_+u*p,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,g*M);d=Math.sin(d*C)/b,a=Math.sin(a*C)/b}const S=a*M;if(c=c*d+h*S,l=l*d+m*S,f=f*d+_*S,u=u*d+p*S,d===1-a){const b=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=b,l*=b,f*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],f=n[i+3],u=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+f*u+c*m-l*h,e[t+1]=c*_+f*h+l*u-a*m,e[t+2]=l*_+f*m+a*h-c*u,e[t+3]=f*_-a*u-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(i/2),u=a(s/2),h=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=h*f*u+l*m*_,this._y=l*m*u-h*f*_,this._z=l*f*_+h*m*u,this._w=l*f*u-h*m*_;break;case"YXZ":this._x=h*f*u+l*m*_,this._y=l*m*u-h*f*_,this._z=l*f*_-h*m*u,this._w=l*f*u+h*m*_;break;case"ZXY":this._x=h*f*u-l*m*_,this._y=l*m*u+h*f*_,this._z=l*f*_+h*m*u,this._w=l*f*u-h*m*_;break;case"ZYX":this._x=h*f*u-l*m*_,this._y=l*m*u+h*f*_,this._z=l*f*_-h*m*u,this._w=l*f*u+h*m*_;break;case"YZX":this._x=h*f*u+l*m*_,this._y=l*m*u+h*f*_,this._z=l*f*_-h*m*u,this._w=l*f*u-h*m*_;break;case"XZY":this._x=h*f*u-l*m*_,this._y=l*m*u-h*f*_,this._z=l*f*_+h*m*u,this._w=l*f*u+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=n+a+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(f-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+i*l-s*c,this._y=i*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-i*a,this._w=o*f-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),u=Math.sin((1-t)*f)/l,h=Math.sin(t*f)/l;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,f=c*n+a*t-s*i,u=c*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=l*c+h*-s+f*-a-u*-o,this.y=f*c+h*-o+u*-s-l*-a,this.z=u*c+h*-a+l*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xr.copy(this).projectOnVector(e),this.sub(Xr)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new O,Aa=new Wn;class Gi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const f=e[c],u=e[c+1],h=e[c+2];f<t&&(t=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const f=e.getX(c),u=e.getY(c),h=e.getZ(c);f<t&&(t=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)In.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox),qr.applyMatrix4(e.matrixWorld),this.union(qr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Zi.subVectors(this.max,Ai),Qn.subVectors(e.a,Ai),$n.subVectors(e.b,Ai),ei.subVectors(e.c,Ai),gn.subVectors($n,Qn),_n.subVectors(ei,$n),zn.subVectors(Qn,ei);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-zn.z,zn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,zn.z,0,-zn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-zn.y,zn.x,0];return!jr(t,Qn,$n,ei,Zi)||(t=[1,0,0,0,1,0,0,0,1],!jr(t,Qn,$n,ei,Zi))?!1:(Ki.crossVectors(gn,_n),t=[Ki.x,Ki.y,Ki.z],jr(t,Qn,$n,ei,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return In.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(In).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new O,new O,new O,new O,new O,new O,new O,new O],In=new O,qr=new Gi,Qn=new O,$n=new O,ei=new O,gn=new O,_n=new O,zn=new O,Ai=new O,Zi=new O,Ki=new O,Fn=new O;function jr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Fn.fromArray(r,s);const a=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),c=e.dot(Fn),l=t.dot(Fn),f=n.dot(Fn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const Nc=new Gi,Ci=new O,Yr=new O;class Sr{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Yr)),this.expandByPoint(Ci.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new O,Zr=new O,Ji=new O,xn=new O,Kr=new O,Qi=new O,Jr=new O;class Os{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.direction).multiplyScalar(t).add(this.origin),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zr.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Zr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ji),a=xn.dot(this.direction),c=-xn.dot(Ji),l=xn.lengthSq(),f=Math.abs(1-o*o);let u,h,m,_;if(f>0)if(u=o*c-a,h=o*a-c,_=s*f,u>=0)if(h>=-_)if(h<=_){const p=1/f;u*=p,h*=p,m=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h<=-_?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=_?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ji).multiplyScalar(h).add(Zr),m}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,s){Kr.subVectors(t,e),Qi.subVectors(n,e),Jr.crossVectors(Kr,Qi);let o=this.direction.dot(Jr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const c=a*this.direction.dot(Qi.crossVectors(xn,Qi));if(c<0)return null;const l=a*this.direction.dot(Kr.cross(xn));if(l<0||c+l>o)return null;const f=-a*xn.dot(Jr);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,f,u,h,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=f,g[10]=u,g[14]=h,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*u,_=a*f,p=a*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=m+_*l,t[5]=h-p*l,t[9]=-a*c,t[2]=p-h*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,m=c*u,_=l*f,p=l*u;t[0]=h+p*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=m*a-_,t[6]=p+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,m=c*u,_=l*f,p=l*u;t[0]=h-p*a,t[4]=-o*u,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*f,t[9]=p-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,m=o*u,_=a*f,p=a*u;t[0]=c*f,t[4]=_*l-m,t[8]=h*l+p,t[1]=c*u,t[5]=p*l+h,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*f,t[4]=p-h*u,t[8]=_*u+m,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*u+_,t[10]=h-p*u}else if(e.order==="XZY"){const h=o*c,m=o*l,_=a*c,p=a*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+p,t[5]=o*f,t[9]=m*u-_,t[2]=_*u-m,t[6]=a*f,t[10]=p*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Bc)}lookAt(e,t,n){const i=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),vn.crossVectors(n,yt),vn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),vn.crossVectors(n,yt)),vn.normalize(),$i.crossVectors(yt,vn),i[0]=vn.x,i[4]=$i.x,i[8]=yt.x,i[1]=vn.y,i[5]=$i.y,i[9]=yt.y,i[2]=vn.z,i[6]=$i.z,i[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],u=n[5],h=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],M=n[3],v=n[7],S=n[11],b=n[15],C=i[0],N=i[4],x=i[8],A=i[12],L=i[1],k=i[5],ie=i[9],B=i[13],I=i[2],q=i[6],Z=i[10],Y=i[14],W=i[3],te=i[7],K=i[11],D=i[15];return s[0]=o*C+a*L+c*I+l*W,s[4]=o*N+a*k+c*q+l*te,s[8]=o*x+a*ie+c*Z+l*K,s[12]=o*A+a*B+c*Y+l*D,s[1]=f*C+u*L+h*I+m*W,s[5]=f*N+u*k+h*q+m*te,s[9]=f*x+u*ie+h*Z+m*K,s[13]=f*A+u*B+h*Y+m*D,s[2]=_*C+p*L+d*I+g*W,s[6]=_*N+p*k+d*q+g*te,s[10]=_*x+p*ie+d*Z+g*K,s[14]=_*A+p*B+d*Y+g*D,s[3]=M*C+v*L+S*I+b*W,s[7]=M*N+v*k+S*q+b*te,s[11]=M*x+v*ie+S*Z+b*K,s[15]=M*A+v*B+S*Y+b*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*c*u-i*l*u-s*a*h+n*l*h+i*a*m-n*c*m)+p*(+t*c*m-t*l*h+s*o*h-i*o*m+i*l*f-s*c*f)+d*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*f-n*l*f)+g*(-i*a*f-t*c*u+t*a*h+i*o*u-n*o*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],M=u*d*l-p*h*l+p*c*m-a*d*m-u*c*g+a*h*g,v=_*h*l-f*d*l-_*c*m+o*d*m+f*c*g-o*h*g,S=f*p*l-_*u*l+_*a*m-o*p*m-f*a*g+o*u*g,b=_*u*c-f*p*c-_*a*h+o*p*h+f*a*d-o*u*d,C=t*M+n*v+i*S+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=M*N,e[1]=(p*h*s-u*d*s-p*i*m+n*d*m+u*i*g-n*h*g)*N,e[2]=(a*d*s-p*c*s+p*i*l-n*d*l-a*i*g+n*c*g)*N,e[3]=(u*c*s-a*h*s-u*i*l+n*h*l+a*i*m-n*c*m)*N,e[4]=v*N,e[5]=(f*d*s-_*h*s+_*i*m-t*d*m-f*i*g+t*h*g)*N,e[6]=(_*c*s-o*d*s-_*i*l+t*d*l+o*i*g-t*c*g)*N,e[7]=(o*h*s-f*c*s+f*i*l-t*h*l-o*i*m+t*c*m)*N,e[8]=S*N,e[9]=(_*u*s-f*p*s-_*n*m+t*p*m+f*n*g-t*u*g)*N,e[10]=(o*p*s-_*a*s+_*n*l-t*p*l-o*n*g+t*a*g)*N,e[11]=(f*a*s-o*u*s-f*n*l+t*u*l+o*n*m-t*a*m)*N,e[12]=b*N,e[13]=(f*p*i-_*u*i+_*n*h-t*p*h-f*n*d+t*u*d)*N,e[14]=(_*a*i-o*p*i-_*n*c+t*p*c+o*n*d-t*a*d)*N,e[15]=(o*u*i-f*a*i+f*n*c-t*u*c-o*n*h+t*a*h)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,f*a+n,f*c-i*o,0,l*c-i*a,f*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,u=a+a,h=s*l,m=s*f,_=s*u,p=o*f,d=o*u,g=a*u,M=c*l,v=c*f,S=c*u,b=n.x,C=n.y,N=n.z;return i[0]=(1-(p+g))*b,i[1]=(m+S)*b,i[2]=(_-v)*b,i[3]=0,i[4]=(m-S)*C,i[5]=(1-(h+g))*C,i[6]=(d+M)*C,i[7]=0,i[8]=(_+v)*N,i[9]=(d-M)*N,i[10]=(1-(h+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ti.set(i[0],i[1],i[2]).length();const o=ti.set(i[4],i[5],i[6]).length(),a=ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);const l=1/s,f=1/o,u=1/a;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=f,Nt.elements[5]*=f,Nt.elements[6]*=f,Nt.elements[8]*=u,Nt.elements[9]*=u,Nt.elements[10]*=u,t.setFromRotationMatrix(Nt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),f=1/(o-s),u=(t+e)*c,h=(n+i)*l,m=(o+s)*f;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new O,Nt=new Je,Uc=new O(0,0,0),Bc=new O(1,1,1),vn=new O,$i=new O,yt=new O,Ca=new Je,La=new Wn;class Vi{constructor(e=0,t=0,n=0,i=Vi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],f=i[9],u=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vi.DefaultOrder="XYZ";Vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ns{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kc=0;const Da=new O,ni=new Wn,on=new Je,er=new O,Li=new O,Gc=new O,Vc=new Wn,Pa=new O(1,0,0),Ra=new O(0,1,0),Ia=new O(0,0,1),Hc={type:"added"},za={type:"removed"};class rt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DefaultUp.clone();const e=new O,t=new Vi,n=new Wn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Tt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=rt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DefaultMatrixWorldAutoUpdate,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(Ra,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(Ra,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Li,er,this.up):on.lookAt(er,Li,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(on),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(za)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(za)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,Gc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DefaultUp=new O(0,1,0);rt.DefaultMatrixAutoUpdate=!0;rt.DefaultMatrixWorldAutoUpdate=!0;const Ut=new O,ln=new O,Qr=new O,cn=new O,ii=new O,ri=new O,Fa=new O,$r=new O,es=new O,ts=new O;class fn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ut.subVectors(i,t),ln.subVectors(n,t),Qr.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(ln),c=Ut.dot(Qr),l=ln.dot(ln),f=ln.dot(Qr),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const h=1/u,m=(l*c-a*f)*h,_=(o*f-a*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,cn),c.set(0,0),c.addScaledVector(s,cn.x),c.addScaledVector(o,cn.y),c.addScaledVector(a,cn.z),c}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),ln.subVectors(e,t),Ut.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ut.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ii.subVectors(i,n),ri.subVectors(s,n),$r.subVectors(e,n);const c=ii.dot($r),l=ri.dot($r);if(c<=0&&l<=0)return t.copy(n);es.subVectors(e,i);const f=ii.dot(es),u=ri.dot(es);if(f>=0&&u<=f)return t.copy(i);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ii,o);ts.subVectors(e,s);const m=ii.dot(ts),_=ri.dot(ts);if(_>=0&&m<=_)return t.copy(s);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ri,a);const d=f*_-m*u;if(d<=0&&u-f>=0&&m-_>=0)return Fa.subVectors(s,i),a=(u-f)/(u-f+(m-_)),t.copy(i).addScaledVector(Fa,a);const g=1/(d+p+h);return o=p*g,a=h*g,t.copy(n).addScaledVector(ii,o).addScaledVector(ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Wc=0;class Hi extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=di,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ko,this.blendDst=Go,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jo extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new O,tr=new we;class Et{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qo extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $o extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xc=0;const Dt=new Je,ns=new rt,si=new O,St=new Gi,Di=new Gi,it=new O;class Ft extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qo(e)?$o:Qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return ns.lookAt(e),ns.updateMatrix(),this.applyMatrix4(ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(St.min,Di.min),St.expandByPoint(it),it.addVectors(St.max,Di.max),St.expandByPoint(it)):(St.expandByPoint(Di.min),St.expandByPoint(Di.max))}St.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)it.fromBufferAttribute(a,l),c&&(si.fromBufferAttribute(e,l),it.add(si)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],f=[];for(let L=0;L<a;L++)l[L]=new O,f[L]=new O;const u=new O,h=new O,m=new O,_=new we,p=new we,d=new we,g=new O,M=new O;function v(L,k,ie){u.fromArray(i,L*3),h.fromArray(i,k*3),m.fromArray(i,ie*3),_.fromArray(o,L*2),p.fromArray(o,k*2),d.fromArray(o,ie*2),h.sub(u),m.sub(u),p.sub(_),d.sub(_);const B=1/(p.x*d.y-d.x*p.y);!isFinite(B)||(g.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),M.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),l[L].add(g),l[k].add(g),l[ie].add(g),f[L].add(M),f[k].add(M),f[ie].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let L=0,k=S.length;L<k;++L){const ie=S[L],B=ie.start,I=ie.count;for(let q=B,Z=B+I;q<Z;q+=3)v(n[q+0],n[q+1],n[q+2])}const b=new O,C=new O,N=new O,x=new O;function A(L){N.fromArray(s,L*3),x.copy(N);const k=l[L];b.copy(k),b.sub(N.multiplyScalar(N.dot(k))).normalize(),C.crossVectors(x,k);const B=C.dot(f[L])<0?-1:1;c[L*4]=b.x,c[L*4+1]=b.y,c[L*4+2]=b.z,c[L*4+3]=B}for(let L=0,k=S.length;L<k;++L){const ie=S[L],B=ie.start,I=ie.count;for(let q=B,Z=B+I;q<Z;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,c=new O,l=new O,f=new O,u=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,d),a.add(f),c.add(f),l.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f);let m=0,_=0;for(let p=0,d=c.length;p<d;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*f;for(let g=0;g<f;g++)h[_++]=l[m++]}return new Et(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,u=l.length;f<u;f++){const h=l[f],m=e(h,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const m=l[u];f.push(m.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,m=u.length;h<m;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new Je,ai=new Os,is=new Sr,Mn=new O,bn=new O,yn=new O,rs=new O,ss=new O,as=new O,nr=new O,ir=new O,rr=new O,sr=new we,ar=new we,or=new we,os=new O,lr=new O;class Kt extends rt{constructor(e=new Ft,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(s),e.ray.intersectsSphere(is)===!1)||(Oa.copy(s).invert(),ai.copy(e.ray).applyMatrix4(Oa),n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,f=n.morphTargetsRelative,u=n.attributes.uv,h=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],M=i[g.materialIndex],v=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let b=v,C=S;b<C;b+=3){const N=a.getX(b),x=a.getX(b+1),A=a.getX(b+2);o=cr(this,M,e,ai,c,l,f,u,h,N,x,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),d=Math.min(a.count,_.start+_.count);for(let g=p,M=d;g<M;g+=3){const v=a.getX(g),S=a.getX(g+1),b=a.getX(g+2);o=cr(this,i,e,ai,c,l,f,u,h,v,S,b),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],M=i[g.materialIndex],v=Math.max(g.start,_.start),S=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let b=v,C=S;b<C;b+=3){const N=b,x=b+1,A=b+2;o=cr(this,M,e,ai,c,l,f,u,h,N,x,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),d=Math.min(c.count,_.start+_.count);for(let g=p,M=d;g<M;g+=3){const v=g,S=g+1,b=g+2;o=cr(this,i,e,ai,c,l,f,u,h,v,S,b),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function qc(r,e,t,n,i,s,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==wn,a),c===null)return null;lr.copy(a),lr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(lr);return l<t.near||l>t.far?null:{distance:l,point:lr.clone(),object:r}}function cr(r,e,t,n,i,s,o,a,c,l,f,u){Mn.fromBufferAttribute(i,l),bn.fromBufferAttribute(i,f),yn.fromBufferAttribute(i,u);const h=r.morphTargetInfluences;if(s&&h){nr.set(0,0,0),ir.set(0,0,0),rr.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const d=h[_],g=s[_];d!==0&&(rs.fromBufferAttribute(g,l),ss.fromBufferAttribute(g,f),as.fromBufferAttribute(g,u),o?(nr.addScaledVector(rs,d),ir.addScaledVector(ss,d),rr.addScaledVector(as,d)):(nr.addScaledVector(rs.sub(Mn),d),ir.addScaledVector(ss.sub(bn),d),rr.addScaledVector(as.sub(yn),d)))}Mn.add(nr),bn.add(ir),yn.add(rr)}r.isSkinnedMesh&&(r.boneTransform(l,Mn),r.boneTransform(f,bn),r.boneTransform(u,yn));const m=qc(r,e,t,n,Mn,bn,yn,os);if(m){a&&(sr.fromBufferAttribute(a,l),ar.fromBufferAttribute(a,f),or.fromBufferAttribute(a,u),m.uv=fn.getUV(os,Mn,bn,yn,sr,ar,or,new we)),c&&(sr.fromBufferAttribute(c,l),ar.fromBufferAttribute(c,f),or.fromBufferAttribute(c,u),m.uv2=fn.getUV(os,Mn,bn,yn,sr,ar,or,new we));const _={a:l,b:f,c:u,normal:new O,materialIndex:0};fn.getNormal(Mn,bn,yn,_.normal),m.face=_}return m}class Wi extends Ft{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],u=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function _(p,d,g,M,v,S,b,C,N,x,A){const L=S/N,k=b/x,ie=S/2,B=b/2,I=C/2,q=N+1,Z=x+1;let Y=0,W=0;const te=new O;for(let K=0;K<Z;K++){const D=K*k-B;for(let V=0;V<q;V++){const J=V*L-ie;te[p]=J*M,te[d]=D*v,te[g]=I,l.push(te.x,te.y,te.z),te[p]=0,te[d]=0,te[g]=C>0?1:-1,f.push(te.x,te.y,te.z),u.push(V/N),u.push(1-K/x),Y+=1}}for(let K=0;K<x;K++)for(let D=0;D<N;D++){const V=h+D+q*K,J=h+D+q*(K+1),$=h+(D+1)+q*(K+1),se=h+(D+1)+q*K;c.push(V,J,se),c.push(J,$,se),W+=6}a.addGroup(m,W,A),m+=W,h+=Y}}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(r){const e={};for(let t=0;t<r.length;t++){const n=vi(r[t]);for(const i in n)e[i]=n[i]}return e}function jc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function el(r){return r.getRenderTarget()===null&&r.outputEncoding===ke?qt:Ui}const tl={clone:vi,merge:ht};var Yc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=jc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Us extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Us{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oi=-90,li=1;class Kc extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(oi,li,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wt(oi,li,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wt(oi,li,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(oi,li,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new wt(oi,li,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new wt(oi,li,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=Qt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class nl extends pt{constructor(e,t,n,i,s,o,a,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,i,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jc extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wi(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:En});s.uniforms.tEquirect.value=t;const o=new Kt(i,s),a=t.minFilter;return t.minFilter===yr&&(t.minFilter=Pt),new Kc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ls=new O,Qc=new O,$c=new Tt;class On{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ls.subVectors(n,t).cross(Qc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ls),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$c.getNormalMatrix(e),i=this.coplanarPoint(ls).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Sr,ur=new O;class il{constructor(e=new On,t=new On,n=new On,i=new On,s=new On,o=new On){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],f=n[6],u=n[7],h=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],M=n[14],v=n[15];return t[0].setComponents(a-i,u-c,p-h,v-d).normalize(),t[1].setComponents(a+i,u+c,p+h,v+d).normalize(),t[2].setComponents(a+s,u+l,p+m,v+g).normalize(),t[3].setComponents(a-s,u-l,p-m,v-g).normalize(),t[4].setComponents(a-o,u-f,p-_,v-M).normalize(),t[5].setComponents(a+o,u+f,p+_,v+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ur.x=i.normal.x>0?e.max.x:e.min.x,ur.y=i.normal.y>0?e.max.y:e.min.y,ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function eu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,f){const u=l.array,h=l.usage,m=r.createBuffer();r.bindBuffer(f,m),r.bufferData(f,u,h),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,f,u){const h=f.array,m=f.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,h):(t?r.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f&&(r.deleteBuffer(f.buffer),n.delete(l))}function c(l,f){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,f)):u.version<l.version&&(s(u.buffer,l,f),u.version=l.version)}return{get:o,remove:a,update:c}}class Bs extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,f=c+1,u=e/a,h=t/c,m=[],_=[],p=[],d=[];for(let g=0;g<f;g++){const M=g*h-o;for(let v=0;v<l;v++){const S=v*u-s;_.push(S,-M,0),p.push(0,0,1),d.push(v/a),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){const v=M+l*g,S=M+l*(g+1),b=M+1+l*(g+1),C=M+1+l*g;m.push(v,S,C),m.push(S,b,C)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(d,2))}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou="vec3 transformed = vec3( position );",lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Au="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ou=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ju=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Yf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Zf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,th=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ch=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ph=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Th=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Se={alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:ru,aomap_fragment:su,aomap_pars_fragment:au,begin_vertex:ou,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:uu,bumpmap_pars_fragment:fu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:gu,color_pars_fragment:_u,color_pars_vertex:xu,color_vertex:vu,common:Mu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:yu,displacementmap_pars_vertex:Su,displacementmap_vertex:wu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Eu,encodings_fragment:Au,encodings_pars_fragment:Cu,envmap_fragment:Lu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Pu,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:Wu,envmap_vertex:Iu,fog_vertex:zu,fog_pars_vertex:Fu,fog_fragment:Ou,fog_pars_fragment:Nu,gradientmap_pars_fragment:Uu,lightmap_fragment:Bu,lightmap_pars_fragment:ku,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Hu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:ju,lights_phong_pars_fragment:Yu,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ku,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:$u,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:rf,map_fragment:sf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:uf,morphcolor_vertex:ff,morphnormal_vertex:hf,morphtarget_pars_vertex:df,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:xf,normal_vertex:vf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:wf,output_fragment:Tf,packing:Ef,premultiplied_alpha_fragment:Af,project_vertex:Cf,dithering_fragment:Lf,dithering_pars_fragment:Df,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Rf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:zf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:Nf,skinning_pars_vertex:Uf,skinning_vertex:Bf,skinnormal_vertex:kf,specularmap_fragment:Gf,specularmap_pars_fragment:Vf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:jf,uv_pars_vertex:Yf,uv_vertex:Zf,uv2_pars_fragment:Kf,uv2_pars_vertex:Jf,uv2_vertex:Qf,worldpos_vertex:$f,background_vert:eh,background_frag:th,backgroundCube_vert:nh,backgroundCube_frag:ih,cube_vert:rh,cube_frag:sh,depth_vert:ah,depth_frag:oh,distanceRGBA_vert:lh,distanceRGBA_frag:ch,equirect_vert:uh,equirect_frag:fh,linedashed_vert:hh,linedashed_frag:dh,meshbasic_vert:ph,meshbasic_frag:mh,meshlambert_vert:gh,meshlambert_frag:_h,meshmatcap_vert:xh,meshmatcap_frag:vh,meshnormal_vert:Mh,meshnormal_frag:bh,meshphong_vert:yh,meshphong_frag:Sh,meshphysical_vert:wh,meshphysical_frag:Th,meshtoon_vert:Eh,meshtoon_frag:Ah,points_vert:Ch,points_frag:Lh,shadow_vert:Dh,shadow_frag:Ph,sprite_vert:Rh,sprite_frag:Ih},re={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Tt},uv2Transform:{value:new Tt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Tt}}},jt={basic:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:ht([re.points,re.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:ht([re.common,re.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:ht([re.sprite,re.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:ht([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:ht([re.lights,re.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};jt.physical={uniforms:ht([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const fr={r:0,b:0,g:0};function zh(r,e,t,n,i,s,o){const a=new Ne(0);let c=s===!0?0:1,l,f,u=null,h=0,m=null;function _(d,g){let M=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const S=r.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===br)?(f===void 0&&(f=new Kt(new Wi(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:vi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,N,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,(u!==v||h!==v.version||m!==r.toneMapping)&&(f.material.needsUpdate=!0,u=v,h=v.version,m=r.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Kt(new Bs(2,2),new Wt({name:"BackgroundMaterial",uniforms:vi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,m=r.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function p(d,g){d.getRGB(fr,el(r)),n.buffers.color.setClear(fr.r,fr.g,fr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(d,g=1){a.set(d),c=g,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,p(a,c)},render:_}}function Fh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=d(null);let l=c,f=!1;function u(I,q,Z,Y,W){let te=!1;if(o){const K=p(Y,Z,q);l!==K&&(l=K,m(l.object)),te=g(I,Y,Z,W),te&&M(I,Y,Z,W)}else{const K=q.wireframe===!0;(l.geometry!==Y.id||l.program!==Z.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=Z.id,l.wireframe=K,te=!0)}W!==null&&t.update(W,34963),(te||f)&&(f=!1,x(I,q,Z,Y),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,q,Z){const Y=Z.wireframe===!0;let W=a[I.id];W===void 0&&(W={},a[I.id]=W);let te=W[q.id];te===void 0&&(te={},W[q.id]=te);let K=te[Y];return K===void 0&&(K=d(h()),te[Y]=K),K}function d(I){const q=[],Z=[],Y=[];for(let W=0;W<i;W++)q[W]=0,Z[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:Y,object:I,attributes:{},index:null}}function g(I,q,Z,Y){const W=l.attributes,te=q.attributes;let K=0;const D=Z.getAttributes();for(const V in D)if(D[V].location>=0){const $=W[V];let se=te[V];if(se===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),$===void 0||$.attribute!==se||se&&$.data!==se.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function M(I,q,Z,Y){const W={},te=q.attributes;let K=0;const D=Z.getAttributes();for(const V in D)if(D[V].location>=0){let $=te[V];$===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&($=I.instanceColor));const se={};se.attribute=$,$&&$.data&&(se.data=$.data),W[V]=se,K++}l.attributes=W,l.attributesNum=K,l.index=Y}function v(){const I=l.newAttributes;for(let q=0,Z=I.length;q<Z;q++)I[q]=0}function S(I){b(I,0)}function b(I,q){const Z=l.newAttributes,Y=l.enabledAttributes,W=l.attributeDivisors;Z[I]=1,Y[I]===0&&(r.enableVertexAttribArray(I),Y[I]=1),W[I]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),W[I]=q)}function C(){const I=l.newAttributes,q=l.enabledAttributes;for(let Z=0,Y=q.length;Z<Y;Z++)q[Z]!==I[Z]&&(r.disableVertexAttribArray(Z),q[Z]=0)}function N(I,q,Z,Y,W,te){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(I,q,Z,W,te):r.vertexAttribPointer(I,q,Z,Y,W,te)}function x(I,q,Z,Y){if(n.isWebGL2===!1&&(I.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=Y.attributes,te=Z.getAttributes(),K=q.defaultAttributeValues;for(const D in te){const V=te[D];if(V.location>=0){let J=W[D];if(J===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const $=J.normalized,se=J.itemSize,R=t.get(J);if(R===void 0)continue;const ce=R.buffer,de=R.type,xe=R.bytesPerElement;if(J.isInterleavedBufferAttribute){const he=J.data,Ie=he.stride,ye=J.offset;if(he.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)b(V.location+ve,he.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<V.locationSize;ve++)S(V.location+ve);r.bindBuffer(34962,ce);for(let ve=0;ve<V.locationSize;ve++)N(V.location+ve,se/V.locationSize,de,$,Ie*xe,(ye+se/V.locationSize*ve)*xe)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)b(V.location+he,J.meshPerAttribute);I.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<V.locationSize;he++)S(V.location+he);r.bindBuffer(34962,ce);for(let he=0;he<V.locationSize;he++)N(V.location+he,se/V.locationSize,de,$,se*xe,se/V.locationSize*he*xe)}}else if(K!==void 0){const $=K[D];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(V.location,$);break;case 3:r.vertexAttrib3fv(V.location,$);break;case 4:r.vertexAttrib4fv(V.location,$);break;default:r.vertexAttrib1fv(V.location,$)}}}}C()}function A(){ie();for(const I in a){const q=a[I];for(const Z in q){const Y=q[Z];for(const W in Y)_(Y[W].object),delete Y[W];delete q[Z]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const q=a[I.id];for(const Z in q){const Y=q[Z];for(const W in Y)_(Y[W].object),delete Y[W];delete q[Z]}delete a[I.id]}function k(I){for(const q in a){const Z=a[q];if(Z[I.id]===void 0)continue;const Y=Z[I.id];for(const W in Y)_(Y[W].object),delete Y[W];delete Z[I.id]}}function ie(){B(),f=!0,l!==c&&(l=c,m(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ie,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function Oh(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,f){r.drawArrays(s,l,f),t.update(f,s,1)}function c(l,f,u){if(u===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,f,u),t.update(f,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Nh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(N){if(N==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),M=r.getParameter(36349),v=h>0,S=o||e.has("OES_texture_float"),b=v&&S,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:C}}function Uh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new On,a=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,m){const _=u.length!==0||h||n!==0||i;return i=h,t=f(u,m,0),n=u.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,h,m){const _=u.clippingPlanes,p=u.clipIntersection,d=u.clipShadows,g=r.get(u);if(!i||_===null||_.length===0||s&&!d)s?f(null):l();else{const M=s?0:n,v=M*4;let S=g.clippingState||null;c.value=S,S=f(_,h,v,m);for(let b=0;b!==v;++b)S[b]=t[b];g.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,m,_){const p=u!==null?u.length:0;let d=null;if(p!==0){if(d=c.value,_!==!0||d===null){const g=m+p*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<g)&&(d=new Float32Array(g));for(let v=0,S=m;v!==p;++v,S+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(d,S),d[S+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Bh(r){let e=new WeakMap;function t(o,a){return a===bs?o.mapping=gi:a===ys&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===bs||a===ys)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jc(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wr extends Us{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,Na=[.125,.215,.35,.446,.526,.582],Un=20,cs=new wr,Ua=new Ne;let us=null;const Nn=(1+Math.sqrt(5))/2,ui=1/Nn,Ba=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Nn,ui),new O(0,Nn,-ui),new O(ui,0,Nn),new O(-ui,0,Nn),new O(Nn,ui,0),new O(-Nn,ui,0)];class ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){us=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(us),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Ni,format:xt,encoding:An,depthBuffer:!1},i=Ga(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ga(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kh(s)),this._blurMaterial=Gh(s,e,t)}return i}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Ua),f.toneMapping=Qt,f.autoClear=!1;const m=new Jo({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),_=new Kt(new Wi,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Ua),p=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):M===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const v=this._cubeSize;hr(i,M*v,g>2?v:0,v,v),f.setRenderTarget(i),p&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ba[(i-1)%Ba.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Kt(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Un-1),p=s/_,d=isFinite(s)?1+Math.floor(f*p):Un;d>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Un}`);const g=[];let M=0;for(let N=0;N<Un;++N){const x=N/p,A=Math.exp(-x*x/2);g.push(A),N===0?M+=A:N<d&&(M+=2*A)}for(let N=0;N<g.length;N++)g[N]=g[N]/M;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const S=this._sizeLods[i],b=3*S*(i>v-hi?i-v+hi:0),C=4*(this._cubeSize-S);hr(t,b,C,3*S,2*S),c.setRenderTarget(t),c.render(u,cs)}}function kh(r){const e=[],t=[],n=[];let i=r;const s=r-hi+1+Na.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-hi?c=Na[o-r+hi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,_=6,p=3,d=2,g=1,M=new Float32Array(p*_*m),v=new Float32Array(d*_*m),S=new Float32Array(g*_*m);for(let C=0;C<m;C++){const N=C%3*2/3-1,x=C>2?0:-1,A=[N,x,0,N+2/3,x,0,N+2/3,x+1,0,N,x,0,N+2/3,x+1,0,N,x+1,0];M.set(A,p*_*C),v.set(h,d*_*C);const L=[C,C,C,C,C,C];S.set(L,g*_*C)}const b=new Ft;b.setAttribute("position",new Et(M,p)),b.setAttribute("uv",new Et(v,d)),b.setAttribute("faceIndex",new Et(S,g)),e.push(b),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ga(r,e,t){const n=new mn(r,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Gh(r,e,t){const n=new Float32Array(Un),i=new O(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Va(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ha(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===bs||c===ys,f=c===gi||c===_i;if(l||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ka(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||f&&u&&i(u)){t===null&&(t=new ka(r));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wh(r,e,t,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const _ in h)e.update(h[_],34962);const m=u.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function l(u){const h=[],m=u.index,_=u.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let v=0,S=M.length;v<S;v+=3){const b=M[v+0],C=M[v+1],N=M[v+2];h.push(b,C,C,N,N,b)}}else{const M=_.array;p=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const b=v+0,C=v+1,N=v+2;h.push(b,C,C,N,N,b)}}const d=new(qo(h)?$o:Qo)(h,1);d.version=p;const g=s.get(u);g&&e.remove(g),s.set(u,d)}function f(u){const h=s.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function Xh(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function f(h,m){r.drawElements(s,m,a,h*c),t.update(m,s,1)}function u(h,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=f,this.renderInstances=u}function qh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jh(r,e){return r[0]-e[0]}function Yh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Zh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new at,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,f,u,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(f);if(g===void 0||g.count!==d){let Z=function(){I.dispose(),s.delete(f),f.removeEventListener("dispose",Z)};var _=Z;g!==void 0&&g.texture.dispose();const S=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,N=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let L=0;S===!0&&(L=1),b===!0&&(L=2),C===!0&&(L=3);let k=f.attributes.position.count*L,ie=1;k>e.maxTextureSize&&(ie=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*ie*4*d),I=new Ko(B,k,ie,d);I.type=Zt,I.needsUpdate=!0;const q=L*4;for(let Y=0;Y<d;Y++){const W=N[Y],te=x[Y],K=A[Y],D=k*ie*4*Y;for(let V=0;V<W.count;V++){const J=V*q;S===!0&&(o.fromBufferAttribute(W,V),B[D+J+0]=o.x,B[D+J+1]=o.y,B[D+J+2]=o.z,B[D+J+3]=0),b===!0&&(o.fromBufferAttribute(te,V),B[D+J+4]=o.x,B[D+J+5]=o.y,B[D+J+6]=o.z,B[D+J+7]=0),C===!0&&(o.fromBufferAttribute(K,V),B[D+J+8]=o.x,B[D+J+9]=o.y,B[D+J+10]=o.z,B[D+J+11]=K.itemSize===4?o.w:1)}}g={count:d,texture:I,size:new we(k,ie)},s.set(f,g),f.addEventListener("dispose",Z)}let M=0;for(let S=0;S<m.length;S++)M+=m[S];const v=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[f.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];n[f.id]=d}for(let b=0;b<p;b++){const C=d[b];C[0]=b,C[1]=m[b]}d.sort(Yh);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(jh);const g=f.morphAttributes.position,M=f.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const C=a[b],N=C[0],x=C[1];N!==Number.MAX_SAFE_INTEGER&&x?(g&&f.getAttribute("morphTarget"+b)!==g[N]&&f.setAttribute("morphTarget"+b,g[N]),M&&f.getAttribute("morphNormal"+b)!==M[N]&&f.setAttribute("morphNormal"+b,M[N]),i[b]=x,v+=x):(g&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),M&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),i[b]=0)}const S=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Kh(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=e.get(c,f);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const sl=new pt,al=new Ko,ol=new Oc,ll=new nl,Wa=[],Xa=[],qa=new Float32Array(16),ja=new Float32Array(9),Ya=new Float32Array(4);function Ti(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wa[i];if(s===void 0&&(s=new Float32Array(i),Wa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Qe(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $e(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tr(r,e){let t=Xa[e];t===void 0&&(t=new Int32Array(e),Xa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2fv(this.addr,e),$e(t,e)}}function $h(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qe(t,e))return;r.uniform3fv(this.addr,e),$e(t,e)}}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4fv(this.addr,e),$e(t,e)}}function td(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$e(t,e)}else{if(Qe(t,n))return;Ya.set(n),r.uniformMatrix2fv(this.addr,!1,Ya),$e(t,n)}}function nd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$e(t,e)}else{if(Qe(t,n))return;ja.set(n),r.uniformMatrix3fv(this.addr,!1,ja),$e(t,n)}}function id(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qe(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$e(t,e)}else{if(Qe(t,n))return;qa.set(n),r.uniformMatrix4fv(this.addr,!1,qa),$e(t,n)}}function rd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2iv(this.addr,e),$e(t,e)}}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;r.uniform3iv(this.addr,e),$e(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4iv(this.addr,e),$e(t,e)}}function ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qe(t,e))return;r.uniform2uiv(this.addr,e),$e(t,e)}}function ud(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qe(t,e))return;r.uniform3uiv(this.addr,e),$e(t,e)}}function fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qe(t,e))return;r.uniform4uiv(this.addr,e),$e(t,e)}}function hd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||sl,i)}function dd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ol,i)}function pd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ll,i)}function md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||al,i)}function gd(r){switch(r){case 5126:return Jh;case 35664:return Qh;case 35665:return $h;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return hd;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(r,e){r.uniform1fv(this.addr,e)}function xd(r,e){const t=Ti(e,this.size,2);r.uniform2fv(this.addr,t)}function vd(r,e){const t=Ti(e,this.size,3);r.uniform3fv(this.addr,t)}function Md(r,e){const t=Ti(e,this.size,4);r.uniform4fv(this.addr,t)}function bd(r,e){const t=Ti(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yd(r,e){const t=Ti(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Sd(r,e){const t=Ti(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wd(r,e){r.uniform1iv(this.addr,e)}function Td(r,e){r.uniform2iv(this.addr,e)}function Ed(r,e){r.uniform3iv(this.addr,e)}function Ad(r,e){r.uniform4iv(this.addr,e)}function Cd(r,e){r.uniform1uiv(this.addr,e)}function Ld(r,e){r.uniform2uiv(this.addr,e)}function Dd(r,e){r.uniform3uiv(this.addr,e)}function Pd(r,e){r.uniform4uiv(this.addr,e)}function Rd(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||sl,s[o])}function Id(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ol,s[o])}function zd(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ll,s[o])}function Fd(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);Qe(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||al,s[o])}function Od(r){switch(r){case 5126:return _d;case 35664:return xd;case 35665:return vd;case 35666:return Md;case 35674:return bd;case 35675:return yd;case 35676:return Sd;case 5124:case 35670:return wd;case 35667:case 35671:return Td;case 35668:case 35672:return Ed;case 35669:case 35673:return Ad;case 5125:return Cd;case 36294:return Ld;case 36295:return Dd;case 36296:return Pd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return Fd}}class Nd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gd(t.type)}}class Ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Od(t.type)}}class Bd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const fs=/(\w+)(\])?(\[|\.)?/g;function Za(r,e){r.seq.push(e),r.map[e.id]=e}function kd(r,e,t){const n=r.name,i=n.length;for(fs.lastIndex=0;;){const s=fs.exec(n),o=fs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Za(t,l===void 0?new Nd(a,r,e):new Ud(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Bd(a),Za(t,u)),t=u}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);kd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ka(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Gd=0;function Vd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hd(r){switch(r){case An:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ja(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Vd(r.getShaderSource(e),o)}else return i}function Wd(r,e){const t=Hd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xd(r,e){let t;switch(e){case cc:t="Linear";break;case uc:t="Reinhard";break;case fc:t="OptimizedCineon";break;case Ho:t="ACESFilmic";break;case hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function jd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ii(r){return r!==""}function Qa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $a(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function As(r){return r.replace(Zd,Kd)}function Kd(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return As(t)}const Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eo(r){return r.replace(Jd,Qd)}function Qd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function to(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function ep(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gi:case _i:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function np(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case oc:e="ENVMAP_BLENDING_MIX";break;case lc:e="ENVMAP_BLENDING_ADD";break}return e}function ip(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rp(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=$d(t),l=ep(t),f=tp(t),u=np(t),h=ip(t),m=t.isWebGL2?"":qd(t),_=jd(s),p=i.createProgram();let d,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Ii).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(Ii).join(`
`),g.length>0&&(g+=`
`)):(d=[to(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),g=[m,to(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?Se.tonemapping_pars_fragment:"",t.toneMapping!==Qt?Xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Wd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=As(o),o=Qa(o,t),o=$a(o,t),a=As(a),a=Qa(a,t),a=$a(a,t),o=eo(o),a=eo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+d+o,S=M+g+a,b=Ka(i,35633,v),C=Ka(i,35632,S);if(i.attachShader(p,b),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(b).trim(),k=i.getShaderInfoLog(C).trim();let ie=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){ie=!1;const I=Ja(i,b,"vertex"),q=Ja(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||k==="")&&(B=!1);B&&(this.diagnostics={runnable:ie,programLog:A,vertexShader:{log:L,prefix:d},fragmentShader:{log:k,prefix:g}})}i.deleteShader(b),i.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new vr(i,p)),N};let x;return this.getAttributes=function(){return x===void 0&&(x=Yd(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Gd++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=C,this}let sp=0;class ap{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new op(e),t.set(e,n)),n}}class op{constructor(e){this.id=sp++,this.code=e,this.usedTimes=0}}function lp(r,e,t,n,i,s,o){const a=new Ns,c=new ap,l=[],f=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,L,k,ie){const B=k.fog,I=ie.geometry,q=x.isMeshStandardMaterial?k.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),Y=!!Z&&Z.mapping===br?Z.image.height:null,W=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=te!==void 0?te.length:0;let D=0;I.morphAttributes.position!==void 0&&(D=1),I.morphAttributes.normal!==void 0&&(D=2),I.morphAttributes.color!==void 0&&(D=3);let V,J,$,se;if(W){const Ie=jt[W];V=Ie.vertexShader,J=Ie.fragmentShader}else V=x.vertexShader,J=x.fragmentShader,c.update(x),$=c.getVertexShaderID(x),se=c.getFragmentShaderID(x);const R=r.getRenderTarget(),ce=x.alphaTest>0,de=x.clearcoat>0,xe=x.iridescence>0;return{isWebGL2:f,shaderID:W,shaderName:x.type,vertexShader:V,fragmentShader:J,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:h,outputEncoding:R===null?r.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:An,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Y,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Rc,tangentSpaceNormalMap:x.normalMapType===Pc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===ke,clearcoat:de,clearcoatMap:de&&!!x.clearcoatMap,clearcoatRoughnessMap:de&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!x.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!x.iridescenceMap,iridescenceThicknessMap:xe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===di,alphaMap:!!x.alphaMap,alphaTest:ce,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!B,useFog:x.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:ie.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:D,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Qt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===zt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)A.push(L),A.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(A,x),M(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function g(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function M(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function v(x){const A=_[x.type];let L;if(A){const k=jt[A];L=tl.clone(k.uniforms)}else L=x.uniforms;return L}function S(x,A){let L;for(let k=0,ie=l.length;k<ie;k++){const B=l[k];if(B.cacheKey===A){L=B,++L.usedTimes;break}}return L===void 0&&(L=new rp(r,A,x,s),l.push(L)),L}function b(x){if(--x.usedTimes===0){const A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:C,programs:l,dispose:N}}function cp(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function up(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function no(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function io(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,m,_,p,d){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:h,material:m,groupOrder:_,renderOrder:u.renderOrder,z:p,group:d},r[e]=g):(g.id=u.id,g.object=u,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=p,g.group=d),e++,g}function a(u,h,m,_,p,d){const g=o(u,h,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function c(u,h,m,_,p,d){const g=o(u,h,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,h){t.length>1&&t.sort(u||up),n.length>1&&n.sort(h||no),i.length>1&&i.sort(h||no)}function f(){for(let u=e,h=r.length;u<h;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:f,sort:l}}function fp(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new io,r.set(n,[o])):i>=s.length?(o=new io,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function hp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ne};break;case"SpotLight":t={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function dp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let pp=0;function mp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gp(r,e){const t=new hp,n=dp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new O);const s=new O,o=new Je,a=new Je;function c(f,u){let h=0,m=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,d=0,g=0,M=0,v=0,S=0,b=0,C=0,N=0,x=0;f.sort(mp);const A=u!==!0?Math.PI:1;for(let k=0,ie=f.length;k<ie;k++){const B=f[k],I=B.color,q=B.intensity,Z=B.distance,Y=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=I.r*q*A,m+=I.g*q*A,_+=I.b*q*A;else if(B.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(B.sh.coefficients[W],q);else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const te=B.shadow,K=n.get(B);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=B.shadow.matrix,S++}i.directional[p]=W,p++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(I).multiplyScalar(q*A),W.distance=Z,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,i.spot[g]=W;const te=B.shadow;if(B.map&&(i.spotLightMap[N]=B.map,N++,te.updateMatrices(B),B.castShadow&&x++),i.spotLightMatrix[g]=te.matrix,B.castShadow){const K=n.get(B);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=Y,C++}g++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(I).multiplyScalar(q),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=W,M++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity*A),W.distance=B.distance,W.decay=B.decay,B.castShadow){const te=B.shadow,K=n.get(B);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,K.shadowCameraNear=te.camera.near,K.shadowCameraFar=te.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=Y,i.pointShadowMatrix[d]=B.shadow.matrix,b++}i.point[d]=W,d++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(q*A),W.groundColor.copy(B.groundColor).multiplyScalar(q*A),i.hemi[v]=W,v++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const L=i.hash;(L.directionalLength!==p||L.pointLength!==d||L.spotLength!==g||L.rectAreaLength!==M||L.hemiLength!==v||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=M,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+N-x,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=x,L.directionalLength=p,L.pointLength=d,L.spotLength=g,L.rectAreaLength=M,L.hemiLength=v,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=N,i.version=pp++)}function l(f,u){let h=0,m=0,_=0,p=0,d=0;const g=u.matrixWorldInverse;for(let M=0,v=f.length;M<v;M++){const S=f[M];if(S.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(S.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),d++}}}return{setup:c,setupView:l,state:i}}function ro(r,e){const t=new gp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _p(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ro(r,e),t.set(s,[c])):o>=a.length?(c=new ro(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class xp extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yp(r,e,t){let n=new il;const i=new we,s=new we,o=new at,a=new xp({depthPacking:Dc}),c=new vp,l={},f=t.maxTextureSize,u={0:zt,1:mi,2:wn},h=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Mp,fragmentShader:bp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Kt(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo,this.render=function(S,b,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const N=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),L=r.state;L.setBlending(En),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let k=0,ie=S.length;k<ie;k++){const B=S[k],I=B.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const q=I.getFrameExtents();if(i.multiply(q),s.copy(I.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/q.x),i.x=s.x*q.x,I.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/q.y),i.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null){const Y=this.type!==Ri?{minFilter:je,magFilter:je}:{};I.map=new mn(i.x,i.y,Y),I.map.texture.name=B.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Z=I.getViewportCount();for(let Y=0;Y<Z;Y++){const W=I.getViewport(Y);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),L.viewport(o),I.updateMatrices(B,Y),n=I.getFrustum(),v(b,C,I.camera,B,this.type)}I.isPointLightShadow!==!0&&this.type===Ri&&g(I,C),I.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(N,x,A)};function g(S,b){const C=e.update(p);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mn(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,C,h,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,C,m,p,null)}function M(S,b,C,N,x,A){let L=null;const k=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(k!==void 0?L=k:L=C.isPointLight===!0?c:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const ie=L.uuid,B=b.uuid;let I=l[ie];I===void 0&&(I={},l[ie]=I);let q=I[B];q===void 0&&(q=L.clone(),I[B]=q),L=q}return L.visible=b.visible,L.wireframe=b.wireframe,A===Ri?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:u[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=N,L.farDistance=x),L}function v(S,b,C,N,x){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Ri)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const k=e.update(S),ie=S.material;if(Array.isArray(ie)){const B=k.groups;for(let I=0,q=B.length;I<q;I++){const Z=B[I],Y=ie[Z.materialIndex];if(Y&&Y.visible){const W=M(S,Y,N,C.near,C.far,x);r.renderBufferDirect(C,null,k,W,S,Z)}}}else if(ie.visible){const B=M(S,ie,N,C.near,C.far,x);r.renderBufferDirect(C,null,k,B,S,null)}}const L=S.children;for(let k=0,ie=L.length;k<ie;k++)v(L[k],b,C,N,x)}}function Sp(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const X=new at;let Q=null;const ue=new at(0,0,0,0);return{setMask:function(ge){Q!==ge&&!P&&(r.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){P=ge},setClear:function(ge,ze,tt,ot,Ln){Ln===!0&&(ge*=ot,ze*=ot,tt*=ot),X.set(ge,ze,tt,ot),ue.equals(X)===!1&&(r.clearColor(ge,ze,tt,ot),ue.copy(X))},reset:function(){P=!1,Q=null,ue.set(-1,0,0,0)}}}function s(){let P=!1,X=null,Q=null,ue=null;return{setTest:function(ge){ge?ce(2929):de(2929)},setMask:function(ge){X!==ge&&!P&&(r.depthMask(ge),X=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case ec:r.depthFunc(512);break;case tc:r.depthFunc(519);break;case nc:r.depthFunc(513);break;case Ms:r.depthFunc(515);break;case ic:r.depthFunc(514);break;case rc:r.depthFunc(518);break;case sc:r.depthFunc(516);break;case ac:r.depthFunc(517);break;default:r.depthFunc(515)}Q=ge}},setLocked:function(ge){P=ge},setClear:function(ge){ue!==ge&&(r.clearDepth(ge),ue=ge)},reset:function(){P=!1,X=null,Q=null,ue=null}}}function o(){let P=!1,X=null,Q=null,ue=null,ge=null,ze=null,tt=null,ot=null,Ln=null;return{setTest:function(Be){P||(Be?ce(2960):de(2960))},setMask:function(Be){X!==Be&&!P&&(r.stencilMask(Be),X=Be)},setFunc:function(Be,nn,Ct){(Q!==Be||ue!==nn||ge!==Ct)&&(r.stencilFunc(Be,nn,Ct),Q=Be,ue=nn,ge=Ct)},setOp:function(Be,nn,Ct){(ze!==Be||tt!==nn||ot!==Ct)&&(r.stencilOp(Be,nn,Ct),ze=Be,tt=nn,ot=Ct)},setLocked:function(Be){P=Be},setClear:function(Be){Ln!==Be&&(r.clearStencil(Be),Ln=Be)},reset:function(){P=!1,X=null,Q=null,ue=null,ge=null,ze=null,tt=null,ot=null,Ln=null}}}const a=new i,c=new s,l=new o,f=new WeakMap,u=new WeakMap;let h={},m={},_=new WeakMap,p=[],d=null,g=!1,M=null,v=null,S=null,b=null,C=null,N=null,x=null,A=!1,L=null,k=null,ie=null,B=null,I=null;const q=r.getParameter(35661);let Z=!1,Y=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=Y>=2);let te=null,K={};const D=r.getParameter(3088),V=r.getParameter(2978),J=new at().fromArray(D),$=new at().fromArray(V);function se(P,X,Q){const ue=new Uint8Array(4),ge=r.createTexture();r.bindTexture(P,ge),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let ze=0;ze<Q;ze++)r.texImage2D(X+ze,0,6408,1,1,0,6408,5121,ue);return ge}const R={};R[3553]=se(3553,3553,1),R[34067]=se(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(2929),c.setFunc(Ms),Ze(!1),ct(Zs),ce(2884),et(En);function ce(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function de(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function xe(P,X){return m[P]!==X?(r.bindFramebuffer(P,X),m[P]=X,n&&(P===36009&&(m[36160]=X),P===36160&&(m[36009]=X)),!0):!1}function he(P,X){let Q=p,ue=!1;if(P)if(Q=_.get(X),Q===void 0&&(Q=[],_.set(X,Q)),P.isWebGLMultipleRenderTargets){const ge=P.texture;if(Q.length!==ge.length||Q[0]!==36064){for(let ze=0,tt=ge.length;ze<tt;ze++)Q[ze]=36064+ze;Q.length=ge.length,ue=!0}}else Q[0]!==36064&&(Q[0]=36064,ue=!0);else Q[0]!==1029&&(Q[0]=1029,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ie(P){return d!==P?(r.useProgram(P),d=P,!0):!1}const ye={[fi]:32774,[Hl]:32778,[Wl]:32779};if(n)ye[Qs]=32775,ye[$s]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[Qs]=P.MIN_EXT,ye[$s]=P.MAX_EXT)}const ve={[Xl]:0,[ql]:1,[jl]:768,[ko]:770,[$l]:776,[Jl]:774,[Zl]:772,[Yl]:769,[Go]:771,[Ql]:775,[Kl]:773};function et(P,X,Q,ue,ge,ze,tt,ot){if(P===En){g===!0&&(de(3042),g=!1);return}if(g===!1&&(ce(3042),g=!0),P!==Vl){if(P!==M||ot!==A){if((v!==fi||C!==fi)&&(r.blendEquation(32774),v=fi,C=fi),ot)switch(P){case di:r.blendFuncSeparate(1,771,1,771);break;case vs:r.blendFunc(1,1);break;case Ks:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case di:r.blendFuncSeparate(770,771,1,771);break;case vs:r.blendFunc(770,1);break;case Ks:r.blendFuncSeparate(0,769,0,1);break;case Js:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,b=null,N=null,x=null,M=P,A=ot}return}ge=ge||X,ze=ze||Q,tt=tt||ue,(X!==v||ge!==C)&&(r.blendEquationSeparate(ye[X],ye[ge]),v=X,C=ge),(Q!==S||ue!==b||ze!==N||tt!==x)&&(r.blendFuncSeparate(ve[Q],ve[ue],ve[ze],ve[tt]),S=Q,b=ue,N=ze,x=tt),M=P,A=!1}function Ye(P,X){P.side===wn?de(2884):ce(2884);let Q=P.side===zt;X&&(Q=!Q),Ze(Q),P.blending===di&&P.transparent===!1?et(En):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const ue=P.stencilWrite;l.setTest(ue),ue&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Fe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ce(32926):de(32926)}function Ze(P){L!==P&&(P?r.frontFace(2304):r.frontFace(2305),L=P)}function ct(P){P!==kl?(ce(2884),P!==k&&(P===Zs?r.cullFace(1029):P===Gl?r.cullFace(1028):r.cullFace(1032))):de(2884),k=P}function He(P){P!==ie&&(Z&&r.lineWidth(P),ie=P)}function Fe(P,X,Q){P?(ce(32823),(B!==X||I!==Q)&&(r.polygonOffset(X,Q),B=X,I=Q)):de(32823)}function At(P){P?ce(3089):de(3089)}function mt(P){P===void 0&&(P=33984+q-1),te!==P&&(r.activeTexture(P),te=P)}function T(P,X,Q){Q===void 0&&(te===null?Q=33984+q-1:Q=te);let ue=K[Q];ue===void 0&&(ue={type:void 0,texture:void 0},K[Q]=ue),(ue.type!==P||ue.texture!==X)&&(te!==Q&&(r.activeTexture(Q),te=Q),r.bindTexture(P,X||R[P]),ue.type=P,ue.texture=X)}function y(){const P=K[te];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){J.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function pe(P){$.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),$.copy(P))}function Ae(P,X){let Q=u.get(X);Q===void 0&&(Q=new WeakMap,u.set(X,Q));let ue=Q.get(P);ue===void 0&&(ue=r.getUniformBlockIndex(X,P.name),Q.set(P,ue))}function Ce(P,X){const ue=u.get(X).get(P);f.get(P)!==ue&&(r.uniformBlockBinding(X,ue,P.__bindingPointIndex),f.set(P,ue))}function Oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,K={},m={},_=new WeakMap,p=[],d=null,g=!1,M=null,v=null,S=null,b=null,C=null,N=null,x=null,A=!1,L=null,k=null,ie=null,B=null,I=null,J.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:de,bindFramebuffer:xe,drawBuffers:he,useProgram:Ie,setBlending:et,setMaterial:Ye,setFlipSided:Ze,setCullFace:ct,setLineWidth:He,setPolygonOffset:Fe,setScissorTest:At,activeTexture:mt,bindTexture:T,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:ee,texImage2D:fe,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:Ce,texStorage2D:z,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:E,scissor:me,viewport:pe,reset:Oe}}function wp(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,f=i.maxTextureSize,u=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,y){return g?new OffscreenCanvas(T,y):Bi("canvas")}function v(T,y,G,ee){let ne=1;if((T.width>ee||T.height>ee)&&(ne=ee/Math.max(T.width,T.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=y?Es:Math.floor,Me=ae(ne*T.width),E=ae(ne*T.height);p===void 0&&(p=M(Me,E));const z=G?M(Me,E):p;return z.width=Me,z.height=E,z.getContext("2d").drawImage(T,0,0,Me,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+E+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return Ea(T.width)&&Ea(T.height)}function b(T){return a?!1:T.wrapS!==kt||T.wrapT!==kt||T.minFilter!==je&&T.minFilter!==Pt}function C(T,y){return T.generateMipmaps&&y&&T.minFilter!==je&&T.minFilter!==Pt}function N(T){r.generateMipmap(T)}function x(T,y,G,ee,ne=!1){if(a===!1)return y;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=y;return y===6403&&(G===5126&&(ae=33326),G===5131&&(ae=33325),G===5121&&(ae=33321)),y===33319&&(G===5126&&(ae=33328),G===5131&&(ae=33327),G===5121&&(ae=33323)),y===6408&&(G===5126&&(ae=34836),G===5131&&(ae=34842),G===5121&&(ae=ee===ke&&ne===!1?35907:32856),G===32819&&(ae=32854),G===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(T,y,G){return C(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==Pt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function L(T){return T===je||T===ea||T===ta?9728:9729}function k(T){const y=T.target;y.removeEventListener("dispose",k),B(y),y.isVideoTexture&&_.delete(y)}function ie(T){const y=T.target;y.removeEventListener("dispose",ie),q(y)}function B(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,ee=d.get(G);if(ee){const ne=ee[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(T),Object.keys(ee).length===0&&d.delete(G)}n.remove(T)}function I(T){const y=n.get(T);r.deleteTexture(y.__webglTexture);const G=T.source,ee=d.get(G);delete ee[y.__cacheKey],o.memory.textures--}function q(T){const y=T.texture,G=n.get(T),ee=n.get(y);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(G.__webglFramebuffer[ne]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,ae=y.length;ne<ae;ne++){const Me=n.get(y[ne]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(y[ne])}n.remove(y),n.remove(T)}let Z=0;function Y(){Z=0}function W(){const T=Z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Z+=1,T}function te(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.encoding),y.join()}function K(T,y){const G=n.get(T);if(T.isVideoTexture&&At(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(G,T,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function D(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function V(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){de(G,T,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function J(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){xe(G,T,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const $={[Ss]:10497,[kt]:33071,[ws]:33648},se={[je]:9728,[ea]:9984,[ta]:9986,[Pt]:9729,[dc]:9985,[yr]:9987};function R(T,y,G){if(G?(r.texParameteri(T,10242,$[y.wrapS]),r.texParameteri(T,10243,$[y.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,$[y.wrapR]),r.texParameteri(T,10240,se[y.magFilter]),r.texParameteri(T,10241,se[y.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(y.wrapS!==kt||y.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,L(y.magFilter)),r.texParameteri(T,10241,L(y.minFilter)),y.minFilter!==je&&y.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.type===Zt&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ni&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function ce(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",k));const ee=y.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const ae=te(y);if(ae!==T.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[ae].usedTimes++;const Me=ne[T.__cacheKey];Me!==void 0&&(ne[T.__cacheKey].usedTimes--,Me.usedTimes===0&&I(y)),T.__cacheKey=ae,T.__webglTexture=ne[ae].texture}return G}function de(T,y,G){let ee=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=35866),y.isData3DTexture&&(ee=32879);const ne=ce(T,y),ae=y.source;t.bindTexture(ee,T.__webglTexture,33984+G);const Me=n.get(ae);if(ae.version!==Me.__version||ne===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const E=b(y)&&S(y.image)===!1;let z=v(y.image,E,!1,f);z=mt(y,z);const le=S(z)||a,fe=s.convert(y.format,y.encoding);let oe=s.convert(y.type),me=x(y.internalFormat,fe,oe,y.encoding,y.isVideoTexture);R(ee,y,le);let pe;const Ae=y.mipmaps,Ce=a&&y.isVideoTexture!==!0,Oe=Me.__version===void 0||ne===!0,P=A(y,z,le);if(y.isDepthTexture)me=6402,a?y.type===Zt?me=36012:y.type===kn?me=33190:y.type===pi?me=35056:me=33189:y.type===Zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Gn&&me===6402&&y.type!==Xo&&y.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=kn,oe=s.convert(y.type)),y.format===xi&&me===6402&&(me=34041,y.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=pi,oe=s.convert(y.type))),Oe&&(Ce?t.texStorage2D(3553,1,me,z.width,z.height):t.texImage2D(3553,0,me,z.width,z.height,0,fe,oe,null));else if(y.isDataTexture)if(Ae.length>0&&le){Ce&&Oe&&t.texStorage2D(3553,P,me,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)pe=Ae[X],Ce?t.texSubImage2D(3553,X,0,0,pe.width,pe.height,fe,oe,pe.data):t.texImage2D(3553,X,me,pe.width,pe.height,0,fe,oe,pe.data);y.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,P,me,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,fe,oe,z.data)):t.texImage2D(3553,0,me,z.width,z.height,0,fe,oe,z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ce&&Oe&&t.texStorage3D(35866,P,me,Ae[0].width,Ae[0].height,z.depth);for(let X=0,Q=Ae.length;X<Q;X++)pe=Ae[X],y.format!==xt?fe!==null?Ce?t.compressedTexSubImage3D(35866,X,0,0,0,pe.width,pe.height,z.depth,fe,pe.data,0,0):t.compressedTexImage3D(35866,X,me,pe.width,pe.height,z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(35866,X,0,0,0,pe.width,pe.height,z.depth,fe,oe,pe.data):t.texImage3D(35866,X,me,pe.width,pe.height,z.depth,0,fe,oe,pe.data)}else{Ce&&Oe&&t.texStorage2D(3553,P,me,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)pe=Ae[X],y.format!==xt?fe!==null?Ce?t.compressedTexSubImage2D(3553,X,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(3553,X,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,X,0,0,pe.width,pe.height,fe,oe,pe.data):t.texImage2D(3553,X,me,pe.width,pe.height,0,fe,oe,pe.data)}else if(y.isDataArrayTexture)Ce?(Oe&&t.texStorage3D(35866,P,me,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,fe,oe,z.data)):t.texImage3D(35866,0,me,z.width,z.height,z.depth,0,fe,oe,z.data);else if(y.isData3DTexture)Ce?(Oe&&t.texStorage3D(32879,P,me,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,fe,oe,z.data)):t.texImage3D(32879,0,me,z.width,z.height,z.depth,0,fe,oe,z.data);else if(y.isFramebufferTexture){if(Oe)if(Ce)t.texStorage2D(3553,P,me,z.width,z.height);else{let X=z.width,Q=z.height;for(let ue=0;ue<P;ue++)t.texImage2D(3553,ue,me,X,Q,0,fe,oe,null),X>>=1,Q>>=1}}else if(Ae.length>0&&le){Ce&&Oe&&t.texStorage2D(3553,P,me,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)pe=Ae[X],Ce?t.texSubImage2D(3553,X,0,0,fe,oe,pe):t.texImage2D(3553,X,me,fe,oe,pe);y.generateMipmaps=!1}else Ce?(Oe&&t.texStorage2D(3553,P,me,z.width,z.height),t.texSubImage2D(3553,0,0,0,fe,oe,z)):t.texImage2D(3553,0,me,fe,oe,z);C(y,le)&&N(ee),Me.__version=ae.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function xe(T,y,G){if(y.image.length!==6)return;const ee=ce(T,y),ne=y.source;t.bindTexture(34067,T.__webglTexture,33984+G);const ae=n.get(ne);if(ne.version!==ae.__version||ee===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,E=y.image[0]&&y.image[0].isDataTexture,z=[];for(let X=0;X<6;X++)!Me&&!E?z[X]=v(y.image[X],!1,!0,l):z[X]=E?y.image[X].image:y.image[X],z[X]=mt(y,z[X]);const le=z[0],fe=S(le)||a,oe=s.convert(y.format,y.encoding),me=s.convert(y.type),pe=x(y.internalFormat,oe,me,y.encoding),Ae=a&&y.isVideoTexture!==!0,Ce=ae.__version===void 0||ee===!0;let Oe=A(y,le,fe);R(34067,y,fe);let P;if(Me){Ae&&Ce&&t.texStorage2D(34067,Oe,pe,le.width,le.height);for(let X=0;X<6;X++){P=z[X].mipmaps;for(let Q=0;Q<P.length;Q++){const ue=P[Q];y.format!==xt?oe!==null?Ae?t.compressedTexSubImage2D(34069+X,Q,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(34069+X,Q,pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+X,Q,0,0,ue.width,ue.height,oe,me,ue.data):t.texImage2D(34069+X,Q,pe,ue.width,ue.height,0,oe,me,ue.data)}}}else{P=y.mipmaps,Ae&&Ce&&(P.length>0&&Oe++,t.texStorage2D(34067,Oe,pe,z[0].width,z[0].height));for(let X=0;X<6;X++)if(E){Ae?t.texSubImage2D(34069+X,0,0,0,z[X].width,z[X].height,oe,me,z[X].data):t.texImage2D(34069+X,0,pe,z[X].width,z[X].height,0,oe,me,z[X].data);for(let Q=0;Q<P.length;Q++){const ge=P[Q].image[X].image;Ae?t.texSubImage2D(34069+X,Q+1,0,0,ge.width,ge.height,oe,me,ge.data):t.texImage2D(34069+X,Q+1,pe,ge.width,ge.height,0,oe,me,ge.data)}}else{Ae?t.texSubImage2D(34069+X,0,0,0,oe,me,z[X]):t.texImage2D(34069+X,0,pe,oe,me,z[X]);for(let Q=0;Q<P.length;Q++){const ue=P[Q];Ae?t.texSubImage2D(34069+X,Q+1,0,0,oe,me,ue.image[X]):t.texImage2D(34069+X,Q+1,pe,oe,me,ue.image[X])}}}C(y,fe)&&N(34067),ae.__version=ne.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function he(T,y,G,ee,ne){const ae=s.convert(G.format,G.encoding),Me=s.convert(G.type),E=x(G.internalFormat,ae,Me,G.encoding);n.get(y).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,E,y.width,y.height,y.depth,0,ae,Me,null):t.texImage2D(ne,0,E,y.width,y.height,0,ae,Me,null)),t.bindFramebuffer(36160,T),Fe(y)?h.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get(G).__webglTexture,0,He(y)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,ee,ne,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(T,y,G){if(r.bindRenderbuffer(36161,T),y.depthBuffer&&!y.stencilBuffer){let ee=33189;if(G||Fe(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zt?ee=36012:ne.type===kn&&(ee=33190));const ae=He(y);Fe(y)?h.renderbufferStorageMultisampleEXT(36161,ae,ee,y.width,y.height):r.renderbufferStorageMultisample(36161,ae,ee,y.width,y.height)}else r.renderbufferStorage(36161,ee,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(y.depthBuffer&&y.stencilBuffer){const ee=He(y);G&&Fe(y)===!1?r.renderbufferStorageMultisample(36161,ee,35056,y.width,y.height):Fe(y)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<ee.length;ne++){const ae=ee[ne],Me=s.convert(ae.format,ae.encoding),E=s.convert(ae.type),z=x(ae.internalFormat,Me,E,ae.encoding),le=He(y);G&&Fe(y)===!1?r.renderbufferStorageMultisample(36161,le,z,y.width,y.height):Fe(y)?h.renderbufferStorageMultisampleEXT(36161,le,z,y.width,y.height):r.renderbufferStorage(36161,z,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function ye(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,ne=He(y);if(y.depthTexture.format===Gn)Fe(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(y.depthTexture.format===xi)Fe(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ve(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ye(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ie(y.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Ie(y.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function et(T,y,G){const ee=n.get(T);y!==void 0&&he(ee.__webglFramebuffer,T,T.texture,36064,3553),G!==void 0&&ve(T)}function Ye(T){const y=T.texture,G=n.get(T),ee=n.get(y);T.addEventListener("dispose",ie),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=y.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,Me=S(T)||a;if(ne){G.__webglFramebuffer=[];for(let E=0;E<6;E++)G.__webglFramebuffer[E]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const E=T.texture;for(let z=0,le=E.length;z<le;z++){const fe=n.get(E[z]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Fe(T)===!1){const E=ae?y:[y];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let z=0;z<E.length;z++){const le=E[z];G.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[z]);const fe=s.convert(le.format,le.encoding),oe=s.convert(le.type),me=x(le.internalFormat,fe,oe,le.encoding,T.isXRRenderTarget===!0),pe=He(T);r.renderbufferStorageMultisample(36161,pe,me,T.width,T.height),r.framebufferRenderbuffer(36160,36064+z,36161,G.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),R(34067,y,Me);for(let E=0;E<6;E++)he(G.__webglFramebuffer[E],T,y,36064,34069+E);C(y,Me)&&N(34067),t.unbindTexture()}else if(ae){const E=T.texture;for(let z=0,le=E.length;z<le;z++){const fe=E[z],oe=n.get(fe);t.bindTexture(3553,oe.__webglTexture),R(3553,fe,Me),he(G.__webglFramebuffer,T,fe,36064+z,3553),C(fe,Me)&&N(3553)}t.unbindTexture()}else{let E=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?E=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,ee.__webglTexture),R(E,y,Me),he(G.__webglFramebuffer,T,y,36064,E),C(y,Me)&&N(E),t.unbindTexture()}T.depthBuffer&&ve(T)}function Ze(T){const y=S(T)||a,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,ne=G.length;ee<ne;ee++){const ae=G[ee];if(C(ae,y)){const Me=T.isWebGLCubeRenderTarget?34067:3553,E=n.get(ae).__webglTexture;t.bindTexture(Me,E),N(Me),t.unbindTexture()}}}function ct(T){if(a&&T.samples>0&&Fe(T)===!1){const y=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,ee=T.height;let ne=16384;const ae=[],Me=T.stencilBuffer?33306:36096,E=n.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let le=0;le<y.length;le++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let le=0;le<y.length;le++){ae.push(36064+le),T.depthBuffer&&ae.push(Me);const fe=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(fe===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[le]),fe===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),z){const oe=n.get(y[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,oe,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,ne,9728),m&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let le=0;le<y.length;le++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,E.__webglColorRenderbuffer[le]);const fe=n.get(y[le]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,fe,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function He(T){return Math.min(u,T.samples)}function Fe(T){const y=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(T){const y=o.render.frame;_.get(T)!==y&&(_.set(T,y),T.update())}function mt(T,y){const G=T.encoding,ee=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ts||G!==An&&(G===ke?a===!1?e.has("EXT_sRGB")===!0&&ee===xt?(T.format=Ts,T.minFilter=Pt,T.generateMipmaps=!1):y=Yo.sRGBToLinear(y):(ee!==xt||ne!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=V,this.setTextureCube=J,this.rebindTextures=et,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Fe}function Tp(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Hn)return 5121;if(s===_c)return 32819;if(s===xc)return 32820;if(s===pc)return 5120;if(s===mc)return 5122;if(s===Xo)return 5123;if(s===gc)return 5124;if(s===kn)return 5125;if(s===Zt)return 5126;if(s===Ni)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vc)return 6406;if(s===xt)return 6408;if(s===bc)return 6409;if(s===yc)return 6410;if(s===Gn)return 6402;if(s===xi)return 34041;if(s===Mc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ts)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sc)return 6403;if(s===wc)return 36244;if(s===Tc)return 33319;if(s===Ec)return 33320;if(s===Ac)return 36249;if(s===zr||s===Fr||s===Or||s===Nr)if(o===ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Or)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===na||s===ia||s===ra||s===sa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===na)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===aa||s===oa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===aa)return o===ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===la||s===ca||s===ua||s===fa||s===ha||s===da||s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===Ma||s===ba)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===la)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ca)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ua)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ha)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===da)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ma)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ga)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_a)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xa)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===va)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ma)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ba)return o===ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ya)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ya)return o===ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===pi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ep extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dr extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n),g=this._getHandJoint(l,p);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cp extends pt{constructor(e,t,n,i,s,o,a,c,l,f){if(f=f!==void 0?f:Gn,f!==Gn&&f!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Gn&&(n=kn),n===void 0&&f===xi&&(n=pi),super(null,i,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1}}class Lp extends Xn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,f=null,u=null,h=null,m=null;const _=t.getContextAttributes();let p=null,d=null;const g=[],M=[],v=new Set,S=new Map,b=new wt;b.layers.enable(1),b.viewport=new at;const C=new wt;C.layers.enable(2),C.viewport=new at;const N=[b,C],x=new Ep;x.layers.enable(1),x.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=g[D];return V===void 0&&(V=new hs,g[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=g[D];return V===void 0&&(V=new hs,g[D]=V),V.getGripSpace()},this.getHand=function(D){let V=g[D];return V===void 0&&(V=new hs,g[D]=V),V.getHandSpace()};function k(D){const V=M.indexOf(D.inputSource);if(V===-1)return;const J=g[V];J!==void 0&&J.dispatchEvent({type:D.type,data:D.inputSource})}function ie(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",B);for(let D=0;D<g.length;D++){const V=M[D];V!==null&&(M[D]=null,g[D].disconnect(V))}A=null,L=null,e.setRenderTarget(p),h=null,u=null,f=null,i=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",B),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:h}),d=new mn(h.framebufferWidth,h.framebufferHeight,{format:xt,type:Hn,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let V=null,J=null,$=null;_.depth&&($=_.stencil?35056:33190,V=_.stencil?xi:Gn,J=_.stencil?pi:kn);const se={colorFormat:32856,depthFormat:$,scaleFactor:s};f=new XRWebGLBinding(i,t),u=f.createProjectionLayer(se),i.updateRenderState({layers:[u]}),d=new mn(u.textureWidth,u.textureHeight,{format:xt,type:Hn,depthTexture:new Cp(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const R=e.properties.get(d);R.__ignoreDepthValues=u.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(D){for(let V=0;V<D.removed.length;V++){const J=D.removed[V],$=M.indexOf(J);$>=0&&(M[$]=null,g[$].disconnect(J))}for(let V=0;V<D.added.length;V++){const J=D.added[V];let $=M.indexOf(J);if($===-1){for(let R=0;R<g.length;R++)if(R>=M.length){M.push(J),$=R;break}else if(M[R]===null){M[R]=J,$=R;break}if($===-1)break}const se=g[$];se&&se.connect(J)}}const I=new O,q=new O;function Z(D,V,J){I.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(J.matrixWorld);const $=I.distanceTo(q),se=V.projectionMatrix.elements,R=J.projectionMatrix.elements,ce=se[14]/(se[10]-1),de=se[14]/(se[10]+1),xe=(se[9]+1)/se[5],he=(se[9]-1)/se[5],Ie=(se[8]-1)/se[0],ye=(R[8]+1)/R[0],ve=ce*Ie,et=ce*ye,Ye=$/(-Ie+ye),Ze=Ye*-Ie;V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Ze),D.translateZ(Ye),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ct=ce+Ye,He=de+Ye,Fe=ve-Ze,At=et+($-Ze),mt=xe*de/He*ct,T=he*de/He*ct;D.projectionMatrix.makePerspective(Fe,At,mt,T,ct,He)}function Y(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;x.near=C.near=b.near=D.near,x.far=C.far=b.far=D.far,(A!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,L=x.far);const V=D.parent,J=x.cameras;Y(x,V);for(let se=0;se<J.length;se++)Y(J[se],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),D.matrix.copy(x.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const $=D.children;for(let se=0,R=$.length;se<R;se++)$[se].updateMatrixWorld(!0);J.length===2?Z(x,b,C):x.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(D){u!==null&&(u.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)},this.getPlanes=function(){return v};let W=null;function te(D,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const J=l.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let $=!1;J.length!==x.cameras.length&&(x.cameras.length=0,$=!0);for(let se=0;se<J.length;se++){const R=J[se];let ce=null;if(h!==null)ce=h.getViewport(R);else{const xe=f.getViewSubImage(u,R);ce=xe.viewport,se===0&&(e.setRenderTargetTextures(d,xe.colorTexture,u.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(d))}let de=N[se];de===void 0&&(de=new wt,de.layers.enable(se),de.viewport=new at,N[se]=de),de.matrix.fromArray(R.transform.matrix),de.projectionMatrix.fromArray(R.projectionMatrix),de.viewport.set(ce.x,ce.y,ce.width,ce.height),se===0&&x.matrix.copy(de.matrix),$===!0&&x.cameras.push(de)}}for(let J=0;J<g.length;J++){const $=M[J],se=g[J];$!==null&&se!==void 0&&se.update($,V,c||o)}if(W&&W(D,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let J=null;for(const $ of v)V.detectedPlanes.has($)||(J===null&&(J=[]),J.push($));if(J!==null)for(const $ of J)v.delete($),S.delete($),n.dispatchEvent({type:"planeremoved",data:$});for(const $ of V.detectedPlanes)if(!v.has($))v.add($),S.set($,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:$});else{const se=S.get($);$.lastChangedTime>se&&(S.set($,$.lastChangedTime),n.dispatchEvent({type:"planechanged",data:$}))}}m=null}const K=new rl;K.setAnimationLoop(te),this.setAnimationLoop=function(D){W=D},this.dispose=function(){}}}function Dp(r,e){function t(p,d){d.color.getRGB(p.fogColor.value,el(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),f(p,d)):d.isMeshPhongMaterial?(i(p,d),l(p,d)):d.isMeshStandardMaterial?(i(p,d),u(p,d),d.isMeshPhysicalMaterial&&h(p,d,v)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,g,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===zt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===zt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const S=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*S}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let M;d.map?M=d.map:d.specularMap?M=d.specularMap:d.displacementMap?M=d.displacementMap:d.normalMap?M=d.normalMap:d.bumpMap?M=d.bumpMap:d.roughnessMap?M=d.roughnessMap:d.metalnessMap?M=d.metalnessMap:d.alphaMap?M=d.alphaMap:d.emissiveMap?M=d.emissiveMap:d.clearcoatMap?M=d.clearcoatMap:d.clearcoatNormalMap?M=d.clearcoatNormalMap:d.clearcoatRoughnessMap?M=d.clearcoatRoughnessMap:d.iridescenceMap?M=d.iridescenceMap:d.iridescenceThicknessMap?M=d.iridescenceThicknessMap:d.specularIntensityMap?M=d.specularIntensityMap:d.specularColorMap?M=d.specularColorMap:d.transmissionMap?M=d.transmissionMap:d.thicknessMap?M=d.thicknessMap:d.sheenColorMap?M=d.sheenColorMap:d.sheenRoughnessMap&&(M=d.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,g,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=M*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===zt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Pp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=i[M.id];S===void 0&&(_(M),S=f(M),i[M.id]=S,M.addEventListener("dispose",d));const b=v.program;n.updateUBOMapping(M,b);const C=e.render.frame;s[M.id]!==C&&(h(M),s[M.id]=C)}function f(M){const v=u();M.__bindingPointIndex=v;const S=r.createBuffer(),b=M.__size,C=M.usage;return r.bindBuffer(35345,S),r.bufferData(35345,b,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=i[M.id],S=M.uniforms,b=M.__cache;r.bindBuffer(35345,v);for(let C=0,N=S.length;C<N;C++){const x=S[C];if(m(x,C,b)===!0){const A=x.value,L=x.__offset;typeof A=="number"?(x.__data[0]=A,r.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):A.toArray(x.__data),r.bufferSubData(35345,L,x.__data))}}r.bindBuffer(35345,null)}function m(M,v,S){const b=M.value;if(S[v]===void 0)return typeof b=="number"?S[v]=b:S[v]=b.clone(),!0;if(typeof b=="number"){if(S[v]!==b)return S[v]=b,!0}else{const C=S[v];if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(M){const v=M.uniforms;let S=0;const b=16;let C=0;for(let N=0,x=v.length;N<x;N++){const A=v[N],L=p(A);if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=S,N>0){C=S%b;const k=b-C;C!==0&&k-L.boundary<0&&(S+=b-C,A.__offset=S)}S+=L.storage}return C=S%b,C>0&&(S+=b-C),M.__size=S,M.__cache={},this}function p(M){const v=M.value,S={boundary:0,storage:0};return typeof v=="number"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function d(M){const v=M.target;v.removeEventListener("dispose",d);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}function Rp(){const r=Bi("canvas");return r.style.display="block",r}function cl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Rp(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let u=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=Qt,this.toneMappingExposure=1;const p=this;let d=!1,g=0,M=0,v=null,S=-1,b=null;const C=new at,N=new at;let x=null,A=e.width,L=e.height,k=1,ie=null,B=null;const I=new at(0,0,A,L),q=new at(0,0,A,L);let Z=!1;const Y=new il;let W=!1,te=!1,K=null;const D=new Je,V=new we,J=new O,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?k:1}let R=t;function ce(w,U){for(let H=0;H<w.length;H++){const F=w[H],j=e.getContext(F,U);if(j!==null)return j}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fs}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),R===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),R=ce(U,w),R===null)throw ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,xe,he,Ie,ye,ve,et,Ye,Ze,ct,He,Fe,At,mt,T,y,G,ee,ne,ae,Me,E,z,le;function fe(){de=new Hh(R),xe=new Nh(R,de,r),de.init(xe),E=new Tp(R,de,xe),he=new Sp(R,de,xe),Ie=new qh,ye=new cp,ve=new wp(R,de,he,ye,xe,E,Ie),et=new Bh(p),Ye=new Vh(p),Ze=new eu(R,xe),z=new Fh(R,de,Ze,xe),ct=new Wh(R,Ze,Ie,z),He=new Kh(R,ct,Ze,Ie),ne=new Zh(R,xe,ve),y=new Uh(ye),Fe=new lp(p,et,Ye,de,xe,z,y),At=new Dp(p,ye),mt=new fp,T=new _p(de,xe),ee=new zh(p,et,Ye,he,He,f,o),G=new yp(p,He,xe),le=new Pp(R,Ie,xe,he),ae=new Oh(R,de,Ie,xe),Me=new Xh(R,de,Ie,xe),Ie.programs=Fe.programs,p.capabilities=xe,p.extensions=de,p.properties=ye,p.renderLists=mt,p.shadowMap=G,p.state=he,p.info=Ie}fe();const oe=new Lp(p,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(A,L,!1))},this.getSize=function(w){return w.set(A,L)},this.setSize=function(w,U,H){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=w,L=U,e.width=Math.floor(w*k),e.height=Math.floor(U*k),H!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(A*k,L*k).floor()},this.setDrawingBufferSize=function(w,U,H){A=w,L=U,k=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,U,H,F){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,U,H,F),he.viewport(C.copy(I).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(q)},this.setScissor=function(w,U,H,F){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,U,H,F),he.scissor(N.copy(q).multiplyScalar(k).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){he.setScissorTest(Z=w)},this.setOpaqueSort=function(w){ie=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,U=!0,H=!0){let F=0;w&&(F|=16384),U&&(F|=256),H&&(F|=1024),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),mt.dispose(),T.dispose(),ye.dispose(),et.dispose(),Ye.dispose(),He.dispose(),z.dispose(),le.dispose(),Fe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ue),oe.removeEventListener("sessionend",ge),K&&(K.dispose(),K=null),ze.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ie.autoReset,U=G.enabled,H=G.autoUpdate,F=G.needsUpdate,j=G.type;fe(),Ie.autoReset=w,G.enabled=U,G.autoUpdate=H,G.needsUpdate=F,G.type=j}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){const U=w.target;U.removeEventListener("dispose",Ce),Oe(U)}function Oe(w){P(w),ye.remove(w)}function P(w){const U=ye.get(w).programs;U!==void 0&&(U.forEach(function(H){Fe.releaseProgram(H)}),w.isShaderMaterial&&Fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,F,j,_e){U===null&&(U=$);const be=j.isMesh&&j.matrixWorld.determinant()<0,Te=El(w,U,H,F,j);he.setMaterial(F,be);let Ee=H.index,Re=1;F.wireframe===!0&&(Ee=ct.getWireframeAttribute(H),Re=2);const Le=H.drawRange,De=H.attributes.position;let We=Le.start*Re,vt=(Le.start+Le.count)*Re;_e!==null&&(We=Math.max(We,_e.start*Re),vt=Math.min(vt,(_e.start+_e.count)*Re)),Ee!==null?(We=Math.max(We,0),vt=Math.min(vt,Ee.count)):De!=null&&(We=Math.max(We,0),vt=Math.min(vt,De.count));const rn=vt-We;if(rn<0||rn===1/0)return;z.setup(j,F,Te,H,Ee);let Dn,Xe=ae;if(Ee!==null&&(Dn=Ze.get(Ee),Xe=Me,Xe.setIndex(Dn)),j.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*se()),Xe.setMode(1)):Xe.setMode(4);else if(j.isLine){let Pe=F.linewidth;Pe===void 0&&(Pe=1),he.setLineWidth(Pe*se()),j.isLineSegments?Xe.setMode(1):j.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else j.isPoints?Xe.setMode(0):j.isSprite&&Xe.setMode(4);if(j.isInstancedMesh)Xe.renderInstances(We,rn,j.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Cr=Math.min(H.instanceCount,Pe);Xe.renderInstances(We,rn,Cr)}else Xe.render(We,rn)},this.compile=function(w,U){function H(F,j,_e){F.transparent===!0&&F.side===wn?(F.side=zt,F.needsUpdate=!0,Ct(F,j,_e),F.side=mi,F.needsUpdate=!0,Ct(F,j,_e),F.side=wn):Ct(F,j,_e)}h=T.get(w),h.init(),_.push(h),w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let _e=0;_e<j.length;_e++){const be=j[_e];H(be,w,F)}else H(j,w,F)}),_.pop(),h=null};let X=null;function Q(w){X&&X(w)}function ue(){ze.stop()}function ge(){ze.start()}const ze=new rl;ze.setAnimationLoop(Q),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(w){X=w,oe.setAnimationLoop(w),w===null?ze.stop():ze.start()},oe.addEventListener("sessionstart",ue),oe.addEventListener("sessionend",ge),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,U,v),h=T.get(w,_.length),h.init(),_.push(h),D.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(D),te=this.localClippingEnabled,W=y.init(this.clippingPlanes,te,U),u=mt.get(w,m.length),u.init(),m.push(u),tt(w,U,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(ie,B),W===!0&&y.beginShadows();const H=h.state.shadowsArray;if(G.render(H,w,U),W===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(u,w),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let j=0,_e=F.length;j<_e;j++){const be=F[j];ot(u,w,be,be.viewport)}}else ot(u,w,U);v!==null&&(ve.updateMultisampleRenderTarget(v),ve.updateRenderTargetMipmap(v)),w.isScene===!0&&w.onAfterRender(p,w,U),z.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function tt(w,U,H,F){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){F&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(D);const be=He.update(w),Te=w.material;Te.visible&&u.push(w,be,Te,H,J.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ie.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ie.render.frame),!w.frustumCulled||Y.intersectsObject(w))){F&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(D);const be=He.update(w),Te=w.material;if(Array.isArray(Te)){const Ee=be.groups;for(let Re=0,Le=Ee.length;Re<Le;Re++){const De=Ee[Re],We=Te[De.materialIndex];We&&We.visible&&u.push(w,be,We,H,J.z,De)}}else Te.visible&&u.push(w,be,Te,H,J.z,null)}}const _e=w.children;for(let be=0,Te=_e.length;be<Te;be++)tt(_e[be],U,H,F)}function ot(w,U,H,F){const j=w.opaque,_e=w.transmissive,be=w.transparent;h.setupLightsView(H),_e.length>0&&Ln(j,U,H),F&&he.viewport(C.copy(F)),j.length>0&&Be(j,U,H),_e.length>0&&Be(_e,U,H),be.length>0&&Be(be,U,H),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ln(w,U,H){const F=xe.isWebGL2;K===null&&(K=new mn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Ni:Hn,minFilter:yr,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(V),F?K.setSize(V.x,V.y):K.setSize(Es(V.x),Es(V.y));const j=p.getRenderTarget();p.setRenderTarget(K),p.clear();const _e=p.toneMapping;p.toneMapping=Qt,Be(w,U,H),p.toneMapping=_e,ve.updateMultisampleRenderTarget(K),ve.updateRenderTargetMipmap(K),p.setRenderTarget(j)}function Be(w,U,H){const F=U.isScene===!0?U.overrideMaterial:null;for(let j=0,_e=w.length;j<_e;j++){const be=w[j],Te=be.object,Ee=be.geometry,Re=F===null?be.material:F,Le=be.group;Te.layers.test(H.layers)&&nn(Te,U,H,Ee,Re,Le)}}function nn(w,U,H,F,j,_e){w.onBeforeRender(p,U,H,F,j,_e),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(p,U,H,F,w,_e),j.transparent===!0&&j.side===wn?(j.side=zt,j.needsUpdate=!0,p.renderBufferDirect(H,U,F,j,w,_e),j.side=mi,j.needsUpdate=!0,p.renderBufferDirect(H,U,F,j,w,_e),j.side=wn):p.renderBufferDirect(H,U,F,j,w,_e),w.onAfterRender(p,U,H,F,j,_e)}function Ct(w,U,H){U.isScene!==!0&&(U=$);const F=ye.get(w),j=h.state.lights,_e=h.state.shadowsArray,be=j.state.version,Te=Fe.getParameters(w,j.state,_e,U,H),Ee=Fe.getProgramCacheKey(Te);let Re=F.programs;F.environment=w.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(w.isMeshStandardMaterial?Ye:et).get(w.envMap||F.environment),Re===void 0&&(w.addEventListener("dispose",Ce),Re=new Map,F.programs=Re);let Le=Re.get(Ee);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===be)return Hs(w,Te),Le}else Te.uniforms=Fe.getUniforms(w),w.onBuild(H,Te,p),w.onBeforeCompile(Te,p),Le=Fe.acquireProgram(Te,Ee),Re.set(Ee,Le),F.uniforms=Te.uniforms;const De=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=y.uniform),Hs(w,Te),F.needsLights=Cl(w),F.lightsStateVersion=be,F.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const We=Le.getUniforms(),vt=vr.seqWithValue(We.seq,De);return F.currentProgram=Le,F.uniformsList=vt,Le}function Hs(w,U){const H=ye.get(w);H.outputEncoding=U.outputEncoding,H.instancing=U.instancing,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function El(w,U,H,F,j){U.isScene!==!0&&(U=$),ve.resetTextureUnits();const _e=U.fog,be=F.isMeshStandardMaterial?U.environment:null,Te=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:An,Ee=(F.isMeshStandardMaterial?Ye:et).get(F.envMap||be),Re=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Le=!!F.normalMap&&!!H.attributes.tangent,De=!!H.morphAttributes.position,We=!!H.morphAttributes.normal,vt=!!H.morphAttributes.color,rn=F.toneMapped?p.toneMapping:Qt,Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xe=Dn!==void 0?Dn.length:0,Pe=ye.get(F),Cr=h.state.lights;if(W===!0&&(te===!0||w!==b)){const Mt=w===b&&F.id===S;y.setState(F,w,Mt)}let nt=!1;F.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Cr.state.version||Pe.outputEncoding!==Te||j.isInstancedMesh&&Pe.instancing===!1||!j.isInstancedMesh&&Pe.instancing===!0||j.isSkinnedMesh&&Pe.skinning===!1||!j.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==Ee||F.fog===!0&&Pe.fog!==_e||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==y.numPlanes||Pe.numIntersection!==y.numIntersection)||Pe.vertexAlphas!==Re||Pe.vertexTangents!==Le||Pe.morphTargets!==De||Pe.morphNormals!==We||Pe.morphColors!==vt||Pe.toneMapping!==rn||xe.isWebGL2===!0&&Pe.morphTargetsCount!==Xe)&&(nt=!0):(nt=!0,Pe.__version=F.version);let Pn=Pe.currentProgram;nt===!0&&(Pn=Ct(F,U,j));let Ws=!1,Ei=!1,Lr=!1;const ut=Pn.getUniforms(),Rn=Pe.uniforms;if(he.useProgram(Pn.program)&&(Ws=!0,Ei=!0,Lr=!0),F.id!==S&&(S=F.id,Ei=!0),Ws||b!==w){if(ut.setValue(R,"projectionMatrix",w.projectionMatrix),xe.logarithmicDepthBuffer&&ut.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,Ei=!0,Lr=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Mt=ut.map.cameraPosition;Mt!==void 0&&Mt.setValue(R,J.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ut.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&ut.setValue(R,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){ut.setOptional(R,j,"bindMatrix"),ut.setOptional(R,j,"bindMatrixInverse");const Mt=j.skeleton;Mt&&(xe.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),ut.setValue(R,"boneTexture",Mt.boneTexture,ve),ut.setValue(R,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Dr=H.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0&&xe.isWebGL2===!0)&&ne.update(j,H,F,Pn),(Ei||Pe.receiveShadow!==j.receiveShadow)&&(Pe.receiveShadow=j.receiveShadow,ut.setValue(R,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Rn.envMap.value=Ee,Rn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Ei&&(ut.setValue(R,"toneMappingExposure",p.toneMappingExposure),Pe.needsLights&&Al(Rn,Lr),_e&&F.fog===!0&&At.refreshFogUniforms(Rn,_e),At.refreshMaterialUniforms(Rn,F,k,L,K),vr.upload(R,Pe.uniformsList,Rn,ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(vr.upload(R,Pe.uniformsList,Rn,ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ut.setValue(R,"center",j.center),ut.setValue(R,"modelViewMatrix",j.modelViewMatrix),ut.setValue(R,"normalMatrix",j.normalMatrix),ut.setValue(R,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Mt=F.uniformsGroups;for(let Pr=0,Ll=Mt.length;Pr<Ll;Pr++)if(xe.isWebGL2){const Xs=Mt[Pr];le.update(Xs,Pn),le.bind(Xs,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Al(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Cl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(w,U,H){ye.get(w.texture).__webglTexture=U,ye.get(w.depthTexture).__webglTexture=H;const F=ye.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=H===void 0,F.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const H=ye.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){v=w,g=U,M=H;let F=!0,j=null,_e=!1,be=!1;if(w){const Ee=ye.get(w);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Ee.__webglFramebuffer===void 0?ve.setupRenderTarget(w):Ee.__hasExternalTextures&&ve.rebindTextures(w,ye.get(w.texture).__webglTexture,ye.get(w.depthTexture).__webglTexture);const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);const Le=ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Le[U],_e=!0):xe.isWebGL2&&w.samples>0&&ve.useMultisampledRTT(w)===!1?j=ye.get(w).__webglMultisampledFramebuffer:j=Le,C.copy(w.viewport),N.copy(w.scissor),x=w.scissorTest}else C.copy(I).multiplyScalar(k).floor(),N.copy(q).multiplyScalar(k).floor(),x=Z;if(he.bindFramebuffer(36160,j)&&xe.drawBuffers&&F&&he.drawBuffers(w,j),he.viewport(C),he.scissor(N),he.setScissorTest(x),_e){const Ee=ye.get(w.texture);R.framebufferTexture2D(36160,36064,34069+U,Ee.__webglTexture,H)}else if(be){const Ee=ye.get(w.texture),Re=U||0;R.framebufferTextureLayer(36160,36064,Ee.__webglTexture,H||0,Re)}S=-1},this.readRenderTargetPixels=function(w,U,H,F,j,_e,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){he.bindFramebuffer(36160,Te);try{const Ee=w.texture,Re=Ee.format,Le=Ee.type;if(Re!==xt&&E.convert(Re)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Ni&&(de.has("EXT_color_buffer_half_float")||xe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Le!==Hn&&E.convert(Le)!==R.getParameter(35738)&&!(Le===Zt&&(xe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-F&&H>=0&&H<=w.height-j&&R.readPixels(U,H,F,j,E.convert(Re),E.convert(Le),_e)}finally{const Ee=v!==null?ye.get(v).__webglFramebuffer:null;he.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(w,U,H=0){const F=Math.pow(2,-H),j=Math.floor(U.image.width*F),_e=Math.floor(U.image.height*F);ve.setTexture2D(U,0),R.copyTexSubImage2D(3553,H,0,0,w.x,w.y,j,_e),he.unbindTexture()},this.copyTextureToTexture=function(w,U,H,F=0){const j=U.image.width,_e=U.image.height,be=E.convert(H.format),Te=E.convert(H.type);ve.setTexture2D(H,0),R.pixelStorei(37440,H.flipY),R.pixelStorei(37441,H.premultiplyAlpha),R.pixelStorei(3317,H.unpackAlignment),U.isDataTexture?R.texSubImage2D(3553,F,w.x,w.y,j,_e,be,Te,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(3553,F,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):R.texSubImage2D(3553,F,w.x,w.y,be,Te,U.image),F===0&&H.generateMipmaps&&R.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=w.max.x-w.min.x+1,be=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,Ee=E.convert(F.format),Re=E.convert(F.type);let Le;if(F.isData3DTexture)ve.setTexture3D(F,0),Le=32879;else if(F.isDataArrayTexture)ve.setTexture2DArray(F,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,F.flipY),R.pixelStorei(37441,F.premultiplyAlpha),R.pixelStorei(3317,F.unpackAlignment);const De=R.getParameter(3314),We=R.getParameter(32878),vt=R.getParameter(3316),rn=R.getParameter(3315),Dn=R.getParameter(32877),Xe=H.isCompressedTexture?H.mipmaps[0]:H.image;R.pixelStorei(3314,Xe.width),R.pixelStorei(32878,Xe.height),R.pixelStorei(3316,w.min.x),R.pixelStorei(3315,w.min.y),R.pixelStorei(32877,w.min.z),H.isDataTexture||H.isData3DTexture?R.texSubImage3D(Le,j,U.x,U.y,U.z,_e,be,Te,Ee,Re,Xe.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Le,j,U.x,U.y,U.z,_e,be,Te,Ee,Xe.data)):R.texSubImage3D(Le,j,U.x,U.y,U.z,_e,be,Te,Ee,Re,Xe),R.pixelStorei(3314,De),R.pixelStorei(32878,We),R.pixelStorei(3316,vt),R.pixelStorei(3315,rn),R.pixelStorei(32877,Dn),j===0&&F.generateMipmaps&&R.generateMipmap(Le),he.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ve.setTextureCube(w,0):w.isData3DTexture?ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ve.setTexture2DArray(w,0):ve.setTexture2D(w,0),he.unbindTexture()},this.resetState=function(){g=0,M=0,v=null,he.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ip extends cl{}Ip.prototype.isWebGL1Renderer=!0;class ul extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fl extends pt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=je,f=je,u,h){super(null,o,a,c,l,f,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zp extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const so=new Je,Cs=new Os,pr=new Sr,mr=new O;class Fp extends rt{constructor(e=new Ft,t=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=s,e.ray.intersectsSphere(pr)===!1)return;so.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(so);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=h,p=m;_<p;_++){const d=l.getX(_);mr.fromBufferAttribute(u,d),ao(mr,d,c,i,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,p=m;_<p;_++)mr.fromBufferAttribute(u,_),ao(mr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ao(r,e,t,n,i,s,o){const a=Cs.distanceSqToPoint(r);if(a<t){const c=new O;Cs.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}const oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Op{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){const m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return _}return null}}}const hl=new Op;class dl{constructor(e){this.manager=e!==void 0?e:hl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Np extends dl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Bi("img");function c(){f(),oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){f(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lo extends dl{constructor(e){super(e)}load(e,t,n,i){const s=new pt,o=new Np(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class pl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=co(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=co();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function co(){return(typeof performance>"u"?Date:performance).now()}class Up{constructor(e,t,n=0,i=1/0){this.ray=new Os(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ls(e,this,n,t),n.sort(uo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ls(e[i],this,n,t);return n.sort(uo),n}}function uo(r,e){return r.distance-e.distance}function Ls(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ls(i[s],e,t,!0)}}class fo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fs);const ho={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Er{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bp=new wr(-1,1,1,-1,0,1),Gs=new Ft;Gs.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3));Gs.setAttribute("uv",new Gt([0,2,0,0,2,0],2));class kp{constructor(e){this._mesh=new Kt(Gs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class po extends Er{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=tl.clone(e.uniforms),this.material=new Wt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mo extends Er{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Gp extends Er{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Vp{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new we);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ho===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),po===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new po(ho),this.clock=new pl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}mo!==void 0&&(o instanceof mo?n=!0:o instanceof Gp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new wr(-1,1,1,-1,0,1);const ml=new Ft;ml.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3));ml.setAttribute("uv",new Gt([0,2,0,0,2,0],2));class gl extends Er{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Hp=(r,e,t)=>{r.renderer=new cl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Vp(r.renderer),r.composer.addPass(new gl(r.scene,Tn(r.camera)))},go=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=An:r.renderer.outputEncoding=ke,t?r.renderer.toneMapping=Qt:r.renderer.toneMapping=Ho)},_o=(r,e,t)=>{var n,i,s,o,a,c,l,f;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(c=(a=r.composer).setSize)==null||c.call(a,e.width,e.height),(f=(l=r.composer).setPixelRatio)==null||f.call(l,t))},xo=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Jt=r=>r.userData,Wp=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},_l=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Xp=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,qp=(r,e,t)=>{let n=Tn(r.camera);const i=r.camera.subscribe(l=>n=l);Ve(i);let s=Tn(r.pointer);const o=r.pointer.subscribe(l=>s=l);Ve(o);let a;const c=l=>{var h,m;l.preventDefault();const f=l.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Wp(r,l);const u=jp(e,s,n);if(f==="pointerdown"&&(a=u?{object:u.object,instanceId:u.instanceId}:null),f==="click"){if(!Yp(u,a)){a=null;return}a=null}!u||(m=(h=Jt(u.object)).eventDispatcher)==null||m.call(h,f,{...u,event:l})};return{onClick:c,onContextMenu:c,onPointerUp:c,onPointerDown:c,onPointerMove:c}};function jp(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=_l(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Yp(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const Zp=(r,e)=>{let t=Tn(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(l=>t=l);Ve(n);let i=Tn(r.camera);const s=r.camera.subscribe(l=>i=l);Ve(s);let o=Tn(r.pointer);const a=r.pointer.subscribe(l=>o=l);return Ve(a),{raycast:()=>{var u,h,m,_,p,d,g,M;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const l=t?_l(e,o,i,Array.from(e.raycastableObjects)):[],f=l.length&&e.interactiveObjects.has(l[0].object)?l[0]:null;f?e.lastIntersection?e.lastIntersection&&Xp(e.lastIntersection,f)&&((d=(p=Jt(e.lastIntersection.object)).eventDispatcher)==null||d.call(p,"pointerleave",e.lastIntersection),(M=(g=Jt(f.object)).eventDispatcher)==null||M.call(g,"pointerenter",f)):(_=(m=Jt(f.object)).eventDispatcher)==null||_.call(m,"pointerenter",f):e.lastIntersection&&((h=(u=Jt(e.lastIntersection.object)).eventDispatcher)==null||h.call(u,"pointerleave",e.lastIntersection)),e.lastIntersection=f}}},Ar=typeof window<"u",Kp=r=>{if(!Ar)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),Ve(()=>{!e||cancelAnimationFrame(e)})},Jp=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var o,a;return((o=i.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},Qp=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},$p=(r,e,t,n)=>{let i=Tn(r.camera);const s=r.camera.subscribe(a=>i=a);Ve(s);const{raycast:o}=Zp(r,e);Kp(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(Jp(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),Qp(t),t.frameInvalidated=!1,t.advance=!1))})},em=()=>{const r=new wt(75,0,.1,1e3);return Jt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},tm=r=>{const e=r.size.subscribe(t=>{Jt(Tn(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});Ve(e)},nm=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(g,M)=>{if(M=M!=null?M:"default",a.audioListeners.has(M)){console.warn(`An AudioListener with the id "${M}" has already been added, aborting.`);return}a.audioListeners.set(M,g)},removeAudioListener:g=>{if(g=g!=null?g:"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}a.audioListeners.delete(g)},getAudioListener:g=>{if(g=g!=null?g:"default",!a.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return a.audioListeners.get(g)}},c={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},l={size:Bl([n,i],([g,M])=>g||M),pointer:st(new we),pointerOverCanvas:st(!1),clock:new pl,camera:st(em()),scene:new ul,renderer:void 0,composer:void 0,invalidate:g=>{c.frameInvalidated=!0,c.debugFrameloop&&g&&(c.invalidations[g]=c.invalidations[g]?c.invalidations[g]+1:1)},advance:()=>{c.advance=!0}},f={flat:st(e),linear:st(r),dpr:st(t),setCamera:g=>{l.camera.set(g),l.composer&&(l.composer.passes.forEach(M=>{M instanceof gl&&(M.camera=g)}),l.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Up,lastIntersection:null,addRaycastableObject:g=>{f.raycastableObjects.add(g)},removeRaycastableObject:g=>{f.raycastableObjects.delete(g)},addInteractiveObject:g=>{f.interactiveObjects.add(g)},removeInteractiveObject:g=>{f.interactiveObjects.delete(g)},addPass:g=>{!l.composer||(l.composer.addPass(g),l.invalidate("Canvas: adding pass"))},removePass:g=>{!l.composer||(l.composer.removePass(g),l.invalidate("Canvas: removing pass"))}},u={dispose:async(g=!1)=>{await zs(),!(!u.shouldDispose&&!g)&&(u.disposableObjects.forEach((M,v)=>{var S;(M===0||g)&&((S=v==null?void 0:v.dispose)==null||S.call(v),u.disposableObjects.delete(v))}),u.shouldDispose=!1)},collectDisposableObjects:(g,M)=>{const v=M!=null?M:[];return g&&((g==null?void 0:g.dispose)&&typeof g.dispose=="function"&&g.type!=="Scene"&&v.push(g),Object.entries(g).forEach(([S,b])=>{if(S==="parent"||S==="children"||typeof b!="object")return;const C=b;C!=null&&C.dispose&&u.collectDisposableObjects(C,v)})),v},addDisposableObjects:g=>{g.forEach(M=>{const v=u.disposableObjects.get(M);v?u.disposableObjects.set(M,v+1):u.disposableObjects.set(M,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(M=>{const v=u.disposableObjects.get(M);v&&v>0&&u.disposableObjects.set(M,v-1)}),u.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Bt("threlte",l),Bt("threlte-root",f),Bt("threlte-render-context",c),Bt("threlte-audio-context",a),Bt("threlte-disposal-context",u),{ctx:l,rootCtx:f,renderCtx:c,audioCtx:a,disposalCtx:u,getCtx:()=>l,getRootCtx:()=>f,getRenderCtx:()=>c,getAudioCtx:()=>a,getDisposalCtx:()=>u}};function xl(r,e){const t=st(r);let n=r;const i=t.subscribe(a=>n=a);return Ve(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(a),e==null||e(a,c)},update:a=>{const c=a(n);if((c==null?void 0:c.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(c),e==null||e(c,l)}}}const qn=()=>pn("threlte");function im(r){let e;const t=r[8].default,n=Mi(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&yi(n,t,i,i[7],e?bi(t,i[7],s,null):Si(i[7]),null)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}const rm=()=>({onChildMount:pn("threlte-hierarchical-object-on-mount"),onChildDestroy:pn("threlte-hierarchical-object-on-destroy")}),vl=()=>pn("threlte-hierarchical-parent-context");function sm(r,e,t){var g;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:c=void 0}=e;const l=M=>{a.push(M),t(1,a),c==null||c(M)};let{onChildDestroy:f=void 0}=e;const u=M=>{const v=a.findIndex(S=>S.uuid===M.uuid);v!==-1&&a.splice(v,1),t(1,a),f==null||f(M)},{invalidate:h}=qn(),m=vl();Rt(r,m,M=>t(6,n=M));let{parent:_=n}=e;const p=rm();o&&((g=p.onChildMount)==null||g.call(p,o),h("HierarchicalObject: object added"));const d=xl(o,(M,v)=>{var S,b;v&&((S=p.onChildDestroy)==null||S.call(p,v),h("HierarchicalObject: object added")),M&&((b=p.onChildMount)==null||b.call(p,M),h("HierarchicalObject: object removed"))});return Ve(()=>{var M;o&&((M=p.onChildDestroy)==null||M.call(p,o),h("HierarchicalObject: object removed"))}),Bt("threlte-hierarchical-object-on-mount",l),Bt("threlte-hierarchical-object-on-destroy",u),Bt("threlte-hierarchical-parent-context",d),r.$$set=M=>{"object"in M&&t(3,o=M.object),"children"in M&&t(1,a=M.children),"onChildMount"in M&&t(4,c=M.onChildMount),"onChildDestroy"in M&&t(5,f=M.onChildDestroy),"parent"in M&&t(2,_=M.parent),"$$scope"in M&&t(7,s=M.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,_=n),r.$$.dirty&8&&d.set(o)},[m,a,_,o,c,f,n,s,i]}class am extends tn{constructor(e){super(),en(this,e,sm,im,Xt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function om(r){let e;const t=r[1].default,n=Mi(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&yi(n,t,i,i[4],e?bi(t,i[4],s,null):Si(i[4]),null)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}function lm(r){let e,t;return e=new am({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[om]},$$scope:{ctx:r}}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function cm(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=c=>s.add(c),a=c=>s.remove(c);return r.$$set=c=>{"object"in c&&t(0,s=c.object),"$$scope"in c&&t(4,i=c.$$scope)},[s,n,o,a,i]}class Ml extends tn{constructor(e){super(),en(this,e,cm,lm,Xt,{object:0})}}const um=()=>{const r=st({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);Ve(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:c}=n.parentElement;(a!==o.width||c!==o.height)&&r.set({width:a,height:c})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return Ar?(Ve(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function vo(r){let e,t;return e=new Ml({props:{object:r[0].scene,$$slots:{default:[fm]},$$scope:{ctx:r}}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function fm(r){let e;const t=r[29].default,n=Mi(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&yi(n,t,i,i[33],e?bi(t,i[33],s,null):Si(i[33]),null)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}function hm(r){let e,t,n,i,s=r[2]&&vo(r);return{c(){e=Yt("canvas"),s&&s.c(),dn(e,"class","svelte-o3oskp")},m(o,a){gt(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[Rl(r[3].call(null,e)),un(e,"click",r[9]),un(e,"contextmenu",r[10]),un(e,"pointerup",r[13]),un(e,"pointerdown",r[11]),un(e,"pointermove",r[12]),un(e,"pointerenter",r[31]),un(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&Ue(s,1)):(s=vo(o),s.c(),Ue(s,1),s.m(e,null)):s&&(_s(),Ge(s,1,1,()=>{s=null}),xs())},i(o){t||(Ue(s),t=!0)},o(o){Ge(s),t=!1},d(o){o&&dt(e),s&&s.d(),r[30](null),n=!1,Cn(i)}}}const Mo=new Set;function dm(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:c}=e,{dpr:l=Ar?window.devicePixelRatio:1}=e,{flat:f=!1}=e,{linear:u=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:_=!0}=e,{shadowMapType:p=Bo}=e,{size:d=void 0}=e,{rendererParameters:g=void 0}=e,M,v=!1;const S=st(d),{parentSize:b,parentSizeAction:C}=um(),N=nm(u,f,l,S,b,m,h),{getCtx:x,renderCtx:A,disposalCtx:L}=N,{ctx:k,rootCtx:ie,audioCtx:B}=N;tm(k),Mo.add(k.invalidate),Ve(()=>{Mo.delete(k.invalidate)});const{size:I,scene:q}=k;Rt(r,I,ce=>t(26,i=ce));const{flat:Z,linear:Y,dpr:W}=ie;Rt(r,Z,ce=>t(27,s=ce)),Rt(r,Y,ce=>t(28,o=ce)),Rt(r,W,ce=>t(25,n=ce)),Bt("threlte-parent",st(q)),Rs(()=>{!M||(Hp(k,M,g),go(k,o,s),_o(k,i,n),xo(k,_,p),t(2,v=!0))}),$p(k,ie,A,L);const{onClick:te,onContextMenu:K,onPointerDown:D,onPointerMove:V,onPointerUp:J}=qp(k,ie,A);Ve(()=>{L.dispose(!0)});function $(ce){ms[ce?"unshift":"push"](()=>{M=ce,t(1,M)})}const se=()=>x().pointerOverCanvas.set(!0),R=()=>x().pointerOverCanvas.set(!1);return r.$$set=ce=>{"dpr"in ce&&t(14,l=ce.dpr),"flat"in ce&&t(15,f=ce.flat),"linear"in ce&&t(16,u=ce.linear),"frameloop"in ce&&t(17,h=ce.frameloop),"debugFrameloop"in ce&&t(18,m=ce.debugFrameloop),"shadows"in ce&&t(19,_=ce.shadows),"shadowMapType"in ce&&t(20,p=ce.shadowMapType),"size"in ce&&t(21,d=ce.size),"rendererParameters"in ce&&t(22,g=ce.rendererParameters),"$$scope"in ce&&t(33,c=ce.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&S.set(d),r.$$.dirty[0]&65536&&Rr(Y,o=u,o),r.$$.dirty[0]&32768&&Rr(Z,s=f,s),r.$$.dirty[0]&16384&&Rr(W,n=l,n),r.$$.dirty[0]&402653184&&go(x(),o,s),r.$$.dirty[0]&100663296&&_o(x(),i,n),r.$$.dirty[0]&1572864&&xo(x(),_,p)},[k,M,v,C,x,I,Z,Y,W,te,K,D,V,J,l,f,u,h,m,_,p,d,g,ie,B,n,i,s,o,a,$,se,R,c]}class pm extends tn{constructor(e){super(),en(this,e,dm,hm,Xt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const mm=()=>pn("threlte-root"),gm=()=>pn("threlte-disposal-context");function _m(r){let e;const t=r[9].default,n=Mi(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&yi(n,t,i,i[8],e?bi(t,i[8],s,null):Si(i[8]),null)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}const bo="threlte-disposable-object-context";function xm(r,e,t){var d;let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:c,removeDisposableObjects:l}=gm();let{object:f=void 0}=e,u=f,{dispose:h=void 0}=e;const m=pn(bo);Rt(r,m,g=>t(7,i=g));const _=st((d=h!=null?h:i)!=null?d:!0);Rt(r,_,g=>t(6,n=g)),Bt(bo,_);let p=n?a(f):[];return c(p),Ve(()=>{l(p)}),r.$$set=g=>{"object"in g&&t(2,f=g.object),"dispose"in g&&t(3,h=g.dispose),"$$scope"in g&&t(8,o=g.$$scope)},r.$$.update=()=>{var g;r.$$.dirty&136&&_.set((g=h!=null?h:i)!=null?g:!0),r.$$.dirty&116&&f!==u&&(l(p),t(5,p=n?a(f):[]),c(p),t(4,u=f))},[m,_,f,h,u,p,n,i,o,s]}class bl extends tn{constructor(e){super(),en(this,e,xm,_m,Xt,{object:2,dispose:3})}}const Vs=(r,e)=>{var a;if(!Ar)return{start:()=>{},stop:()=>{},started:No(!1)};const t=pn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=st(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),Ve(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},vm=()=>{const r=st(!1);return(async()=>{await zs(),r.set(!0)})(),r};function Mm(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:c=void 0}=e,{lookAt:l=void 0}=e;const f=new O,u=Is(),{invalidate:h}=qn(),m=vm();Rt(r,m,v=>t(8,i=v));const _=async()=>{i||await zs(),u("transform")},p=async()=>{h("TransformableObject: transformed"),await _()};Jt(s).onTransform=p;const{start:d,stop:g}=Vs(async()=>{l&&!c&&l instanceof rt&&(l.getWorldPosition(f),s.lookAt(f),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),M=xl(s);return Rt(r,M,v=>t(7,n=v)),r.$$set=v=>{"object"in v&&t(2,s=v.object),"position"in v&&t(3,o=v.position),"scale"in v&&t(4,a=v.scale),"rotation"in v&&t(5,c=v.rotation),"lookAt"in v&&t(6,l=v.lookAt)},r.$$.update=()=>{var v,S,b,C,N,x,A,L,k,ie,B,I,q;r.$$.dirty&4&&M.set(s),r.$$.dirty&232&&(o&&(n.position.set((v=o.x)!=null?v:0,(S=o.y)!=null?S:0,(b=o.z)!=null?b:0),p()),l&&!c&&(l instanceof rt?d():(g(),n.lookAt((C=l.x)!=null?C:0,(N=l.y)!=null?N:0,(x=l.z)!=null?x:0),p())),l||g()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((A=a.x)!=null?A:1,(L=a.y)!=null?L:1,(k=a.z)!=null?k:1),p()),r.$$.dirty&160&&c&&(n.rotation.set((ie=c.x)!=null?ie:0,(B=c.y)!=null?B:0,(I=c.z)!=null?I:0,(q=c.order)!=null?q:"XYZ"),p())},[m,M,s,o,a,c,l,n]}class bm extends tn{constructor(e){super(),en(this,e,Mm,null,Xt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const yo=[],ym=(r,e)=>{const t=yo.find(i=>i instanceof r);if(t)return t;const n=e();return yo.push(n),n},So={type:"change"},ds={type:"start"},wo={type:"end"};class Sm extends Xn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",mt),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(So),n.update(),s=i.NONE},this.update=function(){const E=new O,z=new Wn().setFromUnitVectors(e.up,new O(0,1,0)),le=z.clone().invert(),fe=new O,oe=new Wn,me=2*Math.PI;return function(){const Ae=n.object.position;E.copy(Ae).sub(n.target),E.applyQuaternion(z),a.setFromVector3(E),n.autoRotate&&s===i.NONE&&A(N()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ce=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Oe)&&(Ce<-Math.PI?Ce+=me:Ce>Math.PI&&(Ce-=me),Oe<-Math.PI?Oe+=me:Oe>Math.PI&&(Oe-=me),Ce<=Oe?a.theta=Math.max(Ce,Math.min(Oe,a.theta)):a.theta=a.theta>(Ce+Oe)/2?Math.max(Ce,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),E.setFromSpherical(a),E.applyQuaternion(le),Ae.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),f.set(0,0,0)),l=1,u||fe.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o?(n.dispatchEvent(So),fe.copy(n.object.position),oe.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",At),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",mt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new fo,c=new fo;let l=1;const f=new O;let u=!1;const h=new we,m=new we,_=new we,p=new we,d=new we,g=new we,M=new we,v=new we,S=new we,b=[],C={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(E){c.theta-=E}function L(E){c.phi-=E}const k=function(){const E=new O;return function(le,fe){E.setFromMatrixColumn(fe,0),E.multiplyScalar(-le),f.add(E)}}(),ie=function(){const E=new O;return function(le,fe){n.screenSpacePanning===!0?E.setFromMatrixColumn(fe,1):(E.setFromMatrixColumn(fe,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(le),f.add(E)}}(),B=function(){const E=new O;return function(le,fe){const oe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;E.copy(me).sub(n.target);let pe=E.length();pe*=Math.tan(n.object.fov/2*Math.PI/180),k(2*le*pe/oe.clientHeight,n.object.matrix),ie(2*fe*pe/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),ie(fe*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(E){n.object.isPerspectiveCamera?l/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(E){n.object.isPerspectiveCamera?l*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(E){h.set(E.clientX,E.clientY)}function Y(E){M.set(E.clientX,E.clientY)}function W(E){p.set(E.clientX,E.clientY)}function te(E){m.set(E.clientX,E.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;A(2*Math.PI*_.x/z.clientHeight),L(2*Math.PI*_.y/z.clientHeight),h.copy(m),n.update()}function K(E){v.set(E.clientX,E.clientY),S.subVectors(v,M),S.y>0?I(x()):S.y<0&&q(x()),M.copy(v),n.update()}function D(E){d.set(E.clientX,E.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(d),n.update()}function V(E){E.deltaY<0?q(x()):E.deltaY>0&&I(x()),n.update()}function J(E){let z=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),z=!0;break}z&&(E.preventDefault(),n.update())}function $(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const E=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);h.set(E,z)}}function se(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const E=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);p.set(E,z)}}function R(){const E=b[0].pageX-b[1].pageX,z=b[0].pageY-b[1].pageY,le=Math.sqrt(E*E+z*z);M.set(0,le)}function ce(){n.enableZoom&&R(),n.enablePan&&se()}function de(){n.enableZoom&&R(),n.enableRotate&&$()}function xe(E){if(b.length==1)m.set(E.pageX,E.pageY);else{const le=Me(E),fe=.5*(E.pageX+le.x),oe=.5*(E.pageY+le.y);m.set(fe,oe)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;A(2*Math.PI*_.x/z.clientHeight),L(2*Math.PI*_.y/z.clientHeight),h.copy(m)}function he(E){if(b.length===1)d.set(E.pageX,E.pageY);else{const z=Me(E),le=.5*(E.pageX+z.x),fe=.5*(E.pageY+z.y);d.set(le,fe)}g.subVectors(d,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(d)}function Ie(E){const z=Me(E),le=E.pageX-z.x,fe=E.pageY-z.y,oe=Math.sqrt(le*le+fe*fe);v.set(0,oe),S.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),I(S.y),M.copy(v)}function ye(E){n.enableZoom&&Ie(E),n.enablePan&&he(E)}function ve(E){n.enableZoom&&Ie(E),n.enableRotate&&xe(E)}function et(E){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",Ye),n.domElement.addEventListener("pointerup",Ze)),ee(E),E.pointerType==="touch"?T(E):He(E))}function Ye(E){n.enabled!==!1&&(E.pointerType==="touch"?y(E):Fe(E))}function Ze(E){ne(E),b.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",Ye),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(wo),s=i.NONE}function ct(E){ne(E)}function He(E){let z;switch(E.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Zn.DOLLY:if(n.enableZoom===!1)return;Y(E),s=i.DOLLY;break;case Zn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;W(E),s=i.PAN}else{if(n.enableRotate===!1)return;Z(E),s=i.ROTATE}break;case Zn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;Z(E),s=i.ROTATE}else{if(n.enablePan===!1)return;W(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ds)}function Fe(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;te(E);break;case i.DOLLY:if(n.enableZoom===!1)return;K(E);break;case i.PAN:if(n.enablePan===!1)return;D(E);break}}function At(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(ds),V(E),n.dispatchEvent(wo))}function mt(E){n.enabled===!1||n.enablePan===!1||J(E)}function T(E){switch(ae(E),b.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;$(),s=i.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ce(),s=i.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ds)}function y(E){switch(ae(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;xe(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(E),n.update();break;default:s=i.NONE}}function G(E){n.enabled!==!1&&E.preventDefault()}function ee(E){b.push(E)}function ne(E){delete C[E.pointerId];for(let z=0;z<b.length;z++)if(b[z].pointerId==E.pointerId){b.splice(z,1);return}}function ae(E){let z=C[E.pointerId];z===void 0&&(z=new we,C[E.pointerId]=z),z.set(E.pageX,E.pageY)}function Me(E){const z=E.pointerId===b[0].pointerId?b[1]:b[0];return C[z.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",At,{passive:!1}),this.update()}}function wm(r){let e,t,n,i;return e=new bl({props:{dispose:r[2],object:r[0]}}),n=new bm({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){$t(e.$$.fragment),t=hn(),$t(n.$$.fragment)},m(s,o){Vt(e,s,o),gt(s,t,o),Vt(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const c={};o[0]&2&&(c.position=s[1]),n.$set(c)},i(s){i||(Ue(e.$$.fragment,s),Ue(n.$$.fragment,s),i=!0)},o(s){Ge(e.$$.fragment,s),Ge(n.$$.fragment,s),i=!1},d(s){Ht(e,s),s&&dt(t),Ht(n,s)}}}function Tm(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:c=void 0}=e,{enablePan:l=void 0}=e,{enableRotate:f=void 0}=e,{enableZoom:u=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:_=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:d=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:M=void 0}=e,{minDistance:v=void 0}=e,{minPolarAngle:S=void 0}=e,{minZoom:b=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:N=void 0}=e,{rotateSpeed:x=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:L=void 0}=e,{zoomSpeed:k=void 0}=e,{target:ie=void 0}=e,{dispose:B=void 0}=e;const I=vl();Rt(r,I,R=>t(30,n=R));const{renderer:q,invalidate:Z}=qn();if(!q)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Us))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const Y=Is(),W=()=>{Z("Orbitcontrols: change event"),Y("change")},te=()=>Y("start"),K=()=>Y("end"),D=new Sm(n,q.domElement);Jt(n).orbitControls=D,D.addEventListener("change",W),D.addEventListener("start",te),D.addEventListener("end",K),Ve(()=>{n&&delete Jt(n).orbitControls,D.removeEventListener("change",W),D.removeEventListener("start",te),D.removeEventListener("end",K)});const{start:V,stop:J}=Vs(()=>D.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),$=new rt,se=()=>{t(0,D.target=$.position,D),D.update(),Z("OrbitControls: target changed")};return r.$$set=R=>{"autoRotate"in R&&t(6,i=R.autoRotate),"autoRotateSpeed"in R&&t(7,s=R.autoRotateSpeed),"dampingFactor"in R&&t(8,o=R.dampingFactor),"enableDamping"in R&&t(9,a=R.enableDamping),"enabled"in R&&t(10,c=R.enabled),"enablePan"in R&&t(11,l=R.enablePan),"enableRotate"in R&&t(12,f=R.enableRotate),"enableZoom"in R&&t(13,u=R.enableZoom),"keyPanSpeed"in R&&t(14,h=R.keyPanSpeed),"keys"in R&&t(15,m=R.keys),"maxAzimuthAngle"in R&&t(16,_=R.maxAzimuthAngle),"maxDistance"in R&&t(17,p=R.maxDistance),"maxPolarAngle"in R&&t(18,d=R.maxPolarAngle),"maxZoom"in R&&t(19,g=R.maxZoom),"minAzimuthAngle"in R&&t(20,M=R.minAzimuthAngle),"minDistance"in R&&t(21,v=R.minDistance),"minPolarAngle"in R&&t(22,S=R.minPolarAngle),"minZoom"in R&&t(23,b=R.minZoom),"mouseButtons"in R&&t(24,C=R.mouseButtons),"panSpeed"in R&&t(25,N=R.panSpeed),"rotateSpeed"in R&&t(26,x=R.rotateSpeed),"screenSpacePanning"in R&&t(27,A=R.screenSpacePanning),"touches"in R&&t(28,L=R.touches),"zoomSpeed"in R&&t(29,k=R.zoomSpeed),"target"in R&&t(1,ie=R.target),"dispose"in R&&t(2,B=R.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,D.autoRotate=i,D),s!==void 0&&t(0,D.autoRotateSpeed=s,D),o!==void 0&&t(0,D.dampingFactor=o,D),a!==void 0&&t(0,D.enableDamping=a,D),c!==void 0&&t(0,D.enabled=c,D),l!==void 0&&t(0,D.enablePan=l,D),f!==void 0&&t(0,D.enableRotate=f,D),u!==void 0&&t(0,D.enableZoom=u,D),h!==void 0&&t(0,D.keyPanSpeed=h,D),m!==void 0&&t(0,D.keys=m,D),_!==void 0&&t(0,D.maxAzimuthAngle=_,D),p!==void 0&&t(0,D.maxDistance=p,D),d!==void 0&&t(0,D.maxPolarAngle=d,D),g!==void 0&&t(0,D.maxZoom=g,D),M!==void 0&&t(0,D.minAzimuthAngle=M,D),v!==void 0&&t(0,D.minDistance=v,D),S!==void 0&&t(0,D.minPolarAngle=S,D),b!==void 0&&t(0,D.minZoom=b,D),C!==void 0&&t(0,D.mouseButtons=C,D),N!==void 0&&t(0,D.panSpeed=N,D),x!==void 0&&t(0,D.rotateSpeed=x,D),A!==void 0&&t(0,D.screenSpacePanning=A,D),L!==void 0&&t(0,D.touches=L,D),k!==void 0&&t(0,D.zoomSpeed=k,D),D.update(),Z("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?V():J())},[D,ie,B,I,$,se,i,s,o,a,c,l,f,u,h,m,_,p,d,g,M,v,S,b,C,N,x,A,L,k]}class Em extends tn{constructor(e){super(),en(this,e,Tm,wm,Xt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const yl=new rt;yl.scale.set(0,0,0);yl.matrix;new Je().fromArray(new Array(16).fill(0));new Ne(16777215);const Sl=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Am=()=>{const{invalidate:r}=qn();let e=!1,t,n,i,s;const o=(c,l,f)=>{if(a(),!f){const u=c;((u==null?void 0:u.isMaterial)||!1)&&(f="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(f="geometry")}if(!!f){if(typeof f=="function")n=f(l,c);else{const{target:u,key:h}=Sl(l,f);t=u[h],u[h]=c,i=u,s=h}e=!0,r()}},a=()=>{!e||(n?(n(),n=void 0):i&&s&&t&&(i[s]=t,t=void 0,i=void 0,s=void 0),e=!1,r())};return Ve(()=>{a()}),{update:o}},Cm=r=>r&&r.isCamera,wl=r=>r&&r.isOrthographicCamera,Tl=r=>r&&r.isPerspectiveCamera,Lm=r=>Tl(r)||wl(r),Dm=()=>{const{invalidate:r,size:e}=qn(),{setCamera:t}=mm();let n,i;Ve(()=>{i==null||i()});const s=c=>{!n||(wl(n)?(n.left=c.width/-2,n.right=c.width/2,n.top=c.height/2,n.bottom=c.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Tl(n)&&(n.aspect=c.width/c.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(c,l)=>{if(i==null||i(),l||!Lm(c)){n=void 0;return}n=c,i=e.subscribe(s)},makeDefaultCamera:(c,l)=>{!Cm(c)||!l||(t(c),r())}}},To=r=>!!(r!=null&&r.addEventListener),Pm=()=>{const r=Is(),e=wi(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,m)=>{To(h)&&m.forEach(_=>{h.removeEventListener(_,t)})},i=(h,m)=>{To(h)&&m.forEach(_=>{h.addEventListener(_,t)})};let s=[],o;const a=st([]),c=a.subscribe(h=>{n(o,s),i(o,h),s=h});Ve(c);const l=st(),f=l.subscribe(h=>{n(o,s),i(h,s),o=h});return Ve(f),Ve(()=>{n(o,s)}),Rs(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{l.set(h)}}},Rm=["$$scope","$$slots","type","args","attach","instance"],Im=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,zm=()=>{const{invalidate:r}=qn(),e=new Map,t=(i,s,o,a)=>{var f,u;if(Im(o)){if(e.get(s)===o)return;e.set(s,o)}const{key:c,target:l}=Sl(i,s);!Array.isArray(o)&&typeof o=="number"&&typeof((f=l[c])==null?void 0:f.setScalar)=="function"?l[c].setScalar(o):typeof((u=l[c])==null?void 0:u.set)=="function"?Array.isArray(o)?l[c].set(...o):l[c].set(o):(l[c]=o,c==="fov"&&l.isPerspectiveCamera&&!a.manualCamera&&l.updateProjectionMatrix())};return{updateProps:(i,s,o)=>{for(const a in s)Rm.includes(a)||t(i,a,s[a],o),r()}}},Fm=r=>({ref:r&1}),Eo=r=>({ref:r[0]}),Om=r=>({ref:r&1}),Ao=r=>({ref:r[0]});function Co(r){let e,t;return e=new bl({props:{object:r[0],dispose:r[1]}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function Nm(r){let e;const t=r[15].default,n=Mi(t,r,r[16],Eo);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&65537)&&yi(n,t,i,i[16],e?bi(t,i[16],s,Fm):Si(i[16]),Eo)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Um(r){let e,t;return e=new Ml({props:{object:r[0],$$slots:{default:[Bm]},$$scope:{ctx:r}}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&65537&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function Bm(r){let e;const t=r[15].default,n=Mi(t,r,r[16],Ao);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&65537)&&yi(n,t,i,i[16],e?bi(t,i[16],s,Om):Si(i[16]),Ao)},i(i){e||(Ue(n,i),e=!0)},o(i){Ge(n,i),e=!1},d(i){n&&n.d(i)}}}function km(r){let e=r[4](r[0]),t,n,i,s,o,a,c=e&&Co(r);const l=[Um,Nm],f=[];function u(h,m){return m&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=u(r,-1),s=f[i]=l[i](r),{c(){c&&c.c(),t=hn(),s.c(),o=zl()},m(h,m){c&&c.m(h,m),gt(h,t,m),f[i].m(h,m),gt(h,o,m),a=!0},p(h,[m]){m&1&&(e=h[4](h[0])),e?c?(c.p(h,m),m&1&&Ue(c,1)):(c=Co(h),c.c(),Ue(c,1),c.m(t.parentNode,t)):c&&(_s(),Ge(c,1,1,()=>{c=null}),xs());let _=i;i=u(h,m),i===_?f[i].p(h,m):(_s(),Ge(f[_],1,1,()=>{f[_]=null}),xs(),s=f[i],s?s.p(h,m):(s=f[i]=l[i](h),s.c()),Ue(s,1),s.m(o.parentNode,o))},i(h){a||(Ue(c),Ue(s),a=!0)},o(h){Ge(c),Ge(s),a=!1},d(h){c&&c.d(h),h&&dt(t),f[i].d(h),h&&dt(o)}}}function Gm(r,e,t){let n,i,s;const o=["type","args","attach","manual","makeDefault","dispose","ref"];let a=js(e,o),c,{$$slots:l={},$$scope:f}=e,{type:u}=e,{args:h=void 0}=e,{attach:m=void 0}=e,{manual:_=void 0}=e,{makeDefault:p=void 0}=e,{dispose:d=void 0}=e;const g=pn("threlte-hierarchical-parent-context");Rt(r,g,L=>t(14,c=L));const M=L=>typeof L=="function"&&/^\s*class\s+/.test(L.toString()),v=L=>Array.isArray(L);let{ref:S=M(u)&&v(h)?new u(...h):M(u)?new u:u}=e,b=!1;const C=st(S);Bt("threlte-hierarchical-parent-context",C);const N=L=>!!L.isObject3D,x=L=>L.dispose!==void 0,{updateRef:A}=Pm();return r.$$set=L=>{e=ps(ps({},e),Pl(L)),t(21,a=js(e,o)),"type"in L&&t(5,u=L.type),"args"in L&&t(6,h=L.args),"attach"in L&&t(7,m=L.attach),"manual"in L&&t(8,_=L.manual),"makeDefault"in L&&t(9,p=L.makeDefault),"dispose"in L&&t(1,d=L.dispose),"ref"in L&&t(0,S=L.ref),"$$scope"in L&&t(16,f=L.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(b?t(0,S=M(u)&&v(h)?new u(...h):M(u)?new u:u):t(10,b=!0)),r.$$.dirty&1&&C.set(S),n.updateProps(S,a,{manualCamera:_}),r.$$.dirty&4353&&i.update(S,_),r.$$.dirty&4609&&i.makeDefaultCamera(S,p),r.$$.dirty&18561&&s.update(S,c,m),r.$$.dirty&1&&A(S)},t(13,n=zm()),t(12,i=Dm()),t(11,s=Am()),[S,d,g,N,x,u,h,m,_,p,b,s,i,n,c,l,f]}class Vm extends tn{constructor(e){super(),en(this,e,Gm,km,Xt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function Hm(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Lo extends tn{constructor(e){super(),en(this,e,Hm,null,Xt,{})}}new Proxy(Lo,{get(r,e){return r[e]||Lo}});ym(lo,()=>new lo(hl));new O;new O;new O;class Wm{constructor(e,t,n,i,s){this.width=e,this.height=t,this.renderer=n,this.simulationMaterial=i,this.renderMaterial=s,this.gl=this.renderer.getContext(),this.init()}init(){this.createTarget(),this.simSetup(),this.createParticles()}checkHardware(){if(!this.gl.getExtension("OES_texture_float"))throw new Error("float textures not supported");if(this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)==0)throw new Error("vertex shader cannot read textures")}createTarget(){this.scene=new ul,this.camera=new wr(-1,1,1,-1,1/Math.pow(2,53),1),this.rtt=new mn(this.width,this.height,{minFilter:je,magFilter:je,format:xt,type:Zt})}simSetup(){const e=new Ft;e.setAttribute("position",new Et(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),e.setAttribute("uv",new Et(new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),2)),this.mesh=new Kt(e,this.simulationMaterial),this.scene.add(this.mesh)}createParticles(){const e=this.width*this.height;let t=new Float32Array(e*3);for(let i=0;i<e;i++){let s=i*3;t[s+0]=i%this.width/this.width,t[s+1]=i/this.width/this.height}const n=new Ft;n.setAttribute("position",new Et(t,3)),this.particles=new Fp(n,this.renderMaterial)}update(e){this.renderer.setRenderTarget(this.rtt),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.particles.material.uniforms.positions.value=this.rtt.texture,this.simulationMaterial.uniforms.timer.value=e}}(()=>{var r=new O,e=new O;return function(t,n,i){return r.subVectors(n,t),e.subVectors(i,t),r.cross(e),.5*r.length()}})();(()=>{var r=new O;return function(e,t,n){var i=new O,s=Math.random(),o=Math.random();s+o>1&&(s=1-s,o=1-o);var a=1-s-o;return i.copy(e),i.multiplyScalar(s),r.copy(t),r.multiplyScalar(o),i.add(r),r.copy(n),r.multiplyScalar(a),i.add(r),i}})();const Xm=()=>{const r=Math.random(),e=Math.random(),t=r*2*Math.PI,n=Math.acos(2*e-1),i=Math.cbrt(Math.random()),s=Math.sin(t),o=Math.cos(t),a=Math.sin(n),c=Math.cos(n),l=new O;return l.x=i*a*o,l.y=i*a*s,l.z=i*c,l},qm=r=>{const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d",{willReadFrequently:!0});i.fillStyle="#000000",i.fillRect(0,0,512,512),i.fillStyle="#ffffff",i.font='bold 350px "Microsoft YaHei", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(r,512/2,512/2);const s=i.getImageData(0,0,512,512).data,o=[];for(let f=0;f<512*512;f++)if(s[f*4]>128){const u=f%512,h=Math.floor(f/512);o.push({x:u,y:h})}const a=new Float32Array(256*256*4),c=o.length;for(let f=0;f<256*256;f++){let u;c>0?u=o[Math.floor(Math.random()*c)]:u={x:512/2,y:512/2};const h=u.x+(Math.random()-.5),m=u.y+(Math.random()-.5),_=h/512*2.5-1.25,p=-(m/512*2.5-1.25),d=(Math.random()-.5)*.2,g=f*4;a[g]=_,a[g+1]=p,a[g+2]=d,a[g+3]=1}const l=new fl(a,256,256,xt,Zt);return l.minFilter=je,l.magFilter=je,l.needsUpdate=!0,l},jm=()=>{const r=new Float32Array(262144);for(let t=0;t<r.length;t+=4){const n=Xm();r[t]=n.x,r[t+1]=n.y,r[t+2]=n.z,r[t+3]=1}const e=new fl(r,256,256,xt,Zt);return e.needsUpdate=!0,e},Ds=[{hanzi:"\u5973",pinyin:"n\u01DA",english:"woman."},{hanzi:"\u5974",pinyin:"n\xFA",english:"slave, servant."},{hanzi:"\u597D",pinyin:"h\u01CEo",english:"good."},{hanzi:"\u5978",pinyin:"ji\u0101n",english:"evil, treacherous, traitor."},{hanzi:"\u5996",pinyin:"y\u0101o",english:"witch, demon."},{hanzi:"\u59A8",pinyin:"f\xE1ng",english:"hinder, obstruct, interfere."},{hanzi:"\u5992",pinyin:"d\xF9",english:"jealous, envy."},{hanzi:"\u5999",pinyin:"mi\xE0o",english:"wonderful, marvelous."},{hanzi:"\u5993",pinyin:"j\xEC",english:"prostitute."},{hanzi:"\u59D7",pinyin:"sh\u0101n",english:"lithe, leisurely, slow."},{hanzi:"\u5A07",pinyin:"ji\u0101o",english:"fragile, delicate, tender."},{hanzi:"\u5A34",pinyin:"xi\xE1n",english:"graceful, elegant."},{hanzi:"\u5ACC",pinyin:"xi\xE1n",english:"dislike, hate, detest."}],Ym=`
varying vec2 vUv;
void main() {
	vUv = vec2(uv.x, uv.y);
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,Zm=`
// simulation
uniform sampler2D randomTexture;
uniform sampler2D texture0;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D texture3;
uniform sampler2D texture4;
uniform sampler2D texture5;
uniform sampler2D texture6;
uniform sampler2D texture7;
uniform sampler2D texture8;
uniform sampler2D texture9;
uniform sampler2D texture10;
uniform sampler2D texture11;
uniform sampler2D texture12;
uniform float timer;

varying vec2 vUv;

void mixTextures(sampler2D textureA, sampler2D textureB, float normalizedTimer) {
	vec3 origin = texture2D(textureA, vUv).xyz;
	vec3 target = texture2D(textureB, vUv).xyz;

	if (normalizedTimer <= 0.3) {
		gl_FragColor = vec4(origin, 1.0);
	} else if (normalizedTimer <= 0.7) {
		gl_FragColor = vec4(mix(origin, target, (normalizedTimer - 0.3) / 0.4), 1.0);
	} else {
		gl_FragColor = vec4(target, 1.0);
	}
}

void main() {
	if (timer <= 1.0) {
		float normalizedTimer = timer;
		mixTextures(texture0, randomTexture, normalizedTimer);
	}

	if (timer > 1.0 && timer <= 2.0) {
		float normalizedTimer = timer - 1.0;
		mixTextures(randomTexture, texture1, normalizedTimer);
	}

	if (timer > 2.0 && timer <= 3.0) {
		float normalizedTimer = timer - 2.0;
		mixTextures(texture1, randomTexture, normalizedTimer);
	}

	if (timer > 3.0 && timer <= 4.0) {
		float normalizedTimer = timer - 3.0;
		mixTextures(randomTexture, texture2, normalizedTimer);
	}

	if (timer > 4.0 && timer <= 5.0) {
		float normalizedTimer = timer - 4.0;
		mixTextures(texture2, randomTexture, normalizedTimer);
	}

	if (timer > 5.0 && timer <= 6.0) {
		float normalizedTimer = timer - 5.0;
		mixTextures(randomTexture, texture3, normalizedTimer);
	}

	if (timer > 6.0 && timer <= 7.0) {
		float normalizedTimer = timer - 6.0;
		mixTextures(texture3, randomTexture, normalizedTimer);
	}

	if (timer > 7.0 && timer <= 8.0) {
		float normalizedTimer = timer - 7.0;
		mixTextures(randomTexture, texture4, normalizedTimer);
	}

	if (timer > 8.0 && timer <= 9.0) {
		float normalizedTimer = timer - 8.0;
		mixTextures(texture4, randomTexture, normalizedTimer);
	}

	if (timer > 9.0 && timer <= 10.0) {
		float normalizedTimer = timer - 9.0;
		mixTextures(randomTexture, texture5, normalizedTimer);
	}

	if (timer > 10.0 && timer <= 11.0) {
		float normalizedTimer = timer - 10.0;
		mixTextures(texture5, randomTexture, normalizedTimer);
	}

	if (timer > 11.0 && timer <= 12.0) {
		float normalizedTimer = timer - 11.0;
		mixTextures(randomTexture, texture6, normalizedTimer);
	}

	if (timer > 12.0 && timer <= 13.0) {
		float normalizedTimer = timer - 12.0;
		mixTextures(texture6, randomTexture, normalizedTimer);
	}

	if (timer > 13.0 && timer <= 14.0) {
		float normalizedTimer = timer - 13.0;
		mixTextures(randomTexture, texture7, normalizedTimer);
	}

	if (timer > 14.0 && timer <= 15.0) {
		float normalizedTimer = timer - 14.0;
		mixTextures(texture7, randomTexture, normalizedTimer);
	}

	if (timer > 15.0 && timer <= 16.0) {
		float normalizedTimer = timer - 15.0;
		mixTextures(randomTexture, texture8, normalizedTimer);
	}

	if (timer > 16.0 && timer <= 17.0) {
		float normalizedTimer = timer - 16.0;
		mixTextures(texture8, randomTexture, normalizedTimer);
	}

	if (timer > 17.0 && timer <= 18.0) {
		float normalizedTimer = timer - 17.0;
		mixTextures(randomTexture, texture9, normalizedTimer);
	}

	if (timer > 18.0 && timer <= 19.0) {
		float normalizedTimer = timer - 18.0;
		mixTextures(texture9, randomTexture, normalizedTimer);
	}

	if (timer > 19.0 && timer <= 20.0) {
		float normalizedTimer = timer - 19.0;
		mixTextures(randomTexture, texture10, normalizedTimer);
	}

	if (timer > 20.0 && timer <= 21.0) {
		float normalizedTimer = timer - 20.0;
		mixTextures(texture10, randomTexture, normalizedTimer);
	}

	if (timer > 21.0 && timer <= 22.0) {
		float normalizedTimer = timer - 21.0;
		mixTextures(randomTexture, texture11, normalizedTimer);
	}

	if (timer > 22.0 && timer <= 23.0) {
		float normalizedTimer = timer - 22.0;
		mixTextures(texture11, randomTexture, normalizedTimer);
	}

	if (timer > 23.0 && timer <= 24.0) {
		float normalizedTimer = timer - 23.0;
		mixTextures(randomTexture, texture12, normalizedTimer);
	}

	if (timer > 24.0 && timer <= 25.0) {
		float normalizedTimer = timer - 24.0;
		mixTextures(texture12, randomTexture, normalizedTimer);
	}
}
`,Km=`
	//float texture containing the positions of each particle
	uniform sampler2D positions;

	//size
	uniform float pointSize;

	varying vec3 vColor;

	void main() {
		//the mesh is a nomrliazed square so the uvs = the xy positions of the vertices
		vec3 pos = texture2D( positions, position.xy ).xyz;

		//pos now contains the position of a point in space that can be transformed
		gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

		gl_PointSize = pointSize;

		vColor = vec3(1.0,1.0,1.0);
	}
`,Jm=`
	varying vec3 vColor;

	void main() {
		float strength = distance(gl_PointCoord, vec2(0.5));
		strength = 1.0 - strength;
		strength = pow(strength, 5.0);
		vec3 color = mix(vec3(0.0), vColor, strength);

		gl_FragColor = vec4(color, 1.0);
	}
`;function Qm(r){let e,t;return e=new Em({props:{enableZoom:!1}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p:It,i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function $m(r){let e,t;return e=new Vm({props:{type:wt,makeDefault:!0,position:[0,0,2],fov:60,$$slots:{default:[Qm]},$$scope:{ctx:r}}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,[i]){const s={};i&256&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function eg(r,e,t){let n,{timer:i}=e,s;const{renderer:o,scene:a}=qn(),{start:c,started:l}=Vs(()=>{n&&(s==null||s.update(i),s!=null&&s.particles&&(s.particles.rotation.y-=Math.PI/180*.05))},{autostart:!1});Rt(r,l,u=>t(3,n=u)),Rs(()=>{f(),c()});const f=()=>{const u=Ds.map(p=>qm(p.hanzi)),h=jm(),m=new Wt({uniforms:{randomTexture:{value:h},texture0:{value:u[0]},texture1:{value:u[1]},texture2:{value:u[2]},texture3:{value:u[3]},texture4:{value:u[4]},texture5:{value:u[5]},texture6:{value:u[6]},texture7:{value:u[7]},texture8:{value:u[8]},texture9:{value:u[9]},texture10:{value:u[10]},texture11:{value:u[11]},texture12:{value:u[12]},timer:{value:0}},vertexShader:Ym,fragmentShader:Zm}),_=new Wt({uniforms:{positions:{value:null},pointSize:{value:5},alpha:{value:1}},vertexShader:Km,fragmentShader:Jm,transparent:!0,blending:vs});s=new Wm(256,256,o,m,_),a.add(s.particles)};return r.$$set=u=>{"timer"in u&&t(1,i=u.timer)},[l,i]}class tg extends tn{constructor(e){super(),en(this,e,eg,$m,Xt,{timer:1})}}function Do(r,e,t){const n=r.slice();return n[4]=e[t],n}function ng(r){let e,t;return e=new tg({props:{timer:r[0]/r[1]}}),{c(){$t(e.$$.fragment)},m(n,i){Vt(e,n,i),t=!0},p(n,i){const s={};i&3&&(s.timer=n[0]/n[1]),e.$set(s)},i(n){t||(Ue(e.$$.fragment,n),t=!0)},o(n){Ge(e.$$.fragment,n),t=!1},d(n){Ht(e,n)}}}function Po(r){let e,t,n,i=r[4].hanzi+"",s,o,a,c,l=r[4].pinyin+"",f,u,h,m,_=r[4].english+"",p,d;return{c(){e=Yt("li"),t=Yt("span"),n=Sn("/ "),s=Sn(i),o=hn(),a=Yt("span"),c=Sn("/ "),f=Sn(l),u=hn(),h=Yt("span"),m=Sn("/ "),p=Sn(_),d=hn(),dn(t,"class","svelte-2yviqc"),dn(a,"class","svelte-2yviqc"),dn(h,"class","svelte-2yviqc"),dn(e,"class","description-item svelte-2yviqc")},m(g,M){gt(g,e,M),Lt(e,t),Lt(t,n),Lt(t,s),Lt(e,o),Lt(e,a),Lt(a,c),Lt(a,f),Lt(e,u),Lt(e,h),Lt(h,m),Lt(h,p),Lt(e,d)},p:It,d(g){g&&dt(e)}}}function ig(r){let e=!1,t=()=>{e=!1},n,i,s,o,a,c,l,f,u,h,m,_,p,d;Oi(r[2]),Oi(r[3]),l=new pm({props:{$$slots:{default:[ng]},$$scope:{ctx:r}}});let g=Ds,M=[];for(let v=0;v<g.length;v+=1)M[v]=Po(Do(r,g,v));return{c(){i=Yt("div"),s=hn(),o=Yt("nav"),o.innerHTML='<h1 class="svelte-2yviqc">NV /</h1>',a=hn(),c=Yt("div"),$t(l.$$.fragment),f=hn(),u=Yt("ul");for(let v=0;v<M.length;v+=1)M[v].c();h=hn(),m=Yt("footer"),m.innerHTML='<a href="https://akshatdataanalystportfolio.lovable.app/" target="_blank" rel="noopener noreferrer">Made by Akshat.</a>',jn(i,"height",`${r[1]*25}px`),dn(o,"class","svelte-2yviqc"),dn(c,"class","wrapper svelte-2yviqc"),dn(u,"class","description svelte-2yviqc"),jn(u,"margin-top",r[1]/2+"px"),jn(u,"gap",r[1]*2+"px"),dn(m,"class","svelte-2yviqc")},m(v,S){gt(v,i,S),gt(v,s,S),gt(v,o,S),gt(v,a,S),gt(v,c,S),Vt(l,c,null),gt(v,f,S),gt(v,u,S);for(let b=0;b<M.length;b+=1)M[b].m(u,null);gt(v,h,S),gt(v,m,S),_=!0,p||(d=[un(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),r[2]()}),un(window,"resize",r[3])],p=!0)},p(v,[S]){S&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,v[0]),n=setTimeout(t,100)),(!_||S&2)&&jn(i,"height",`${v[1]*25}px`);const b={};if(S&131&&(b.$$scope={dirty:S,ctx:v}),l.$set(b),S&0){g=Ds;let C;for(C=0;C<g.length;C+=1){const N=Do(v,g,C);M[C]?M[C].p(N,S):(M[C]=Po(N),M[C].c(),M[C].m(u,null))}for(;C<M.length;C+=1)M[C].d(1);M.length=g.length}(!_||S&2)&&jn(u,"margin-top",v[1]/2+"px"),(!_||S&2)&&jn(u,"gap",v[1]*2+"px")},i(v){_||(Ue(l.$$.fragment,v),_=!0)},o(v){Ge(l.$$.fragment,v),_=!1},d(v){v&&dt(i),v&&dt(s),v&&dt(o),v&&dt(a),v&&dt(c),Ht(l),v&&dt(f),v&&dt(u),Il(M,v),v&&dt(h),v&&dt(m),p=!1,Cn(d)}}}function rg(r,e,t){let n=.1,i=0;function s(){t(0,n=window.pageYOffset)}function o(){t(1,i=window.innerHeight)}return[n,i,s,o]}class sg extends tn{constructor(e){super(),en(this,e,rg,ig,Xt,{})}}new sg({target:document.getElementById("app")});
