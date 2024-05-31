import{Console as e,Revealer as t}from"../common/common.js";import{DOMDebuggerModel as n,RemoteObject as r}from"../sdk/sdk.js";import{Linkifier as i}from"../components/components.js";import{i18n as s}from"../i18n/i18n.js";import{ObjectPropertiesSection as o}from"../object_ui/object_ui.js";import{Widget as l,TreeOutline as a,ARIAUtils as c,Tooltip as u,ContextMenu as h}from"../ui/ui.js";function d(t){const i=t.runtimeModel().target().model(n.DOMDebuggerModel);if(!i)return Promise.resolve({eventListeners:[],internalHandlers:null});const s={internalHandlers:null,eventListeners:[]};return t.callFunction((function(){const e=[];let t=[],n=[],r=[function(e){if(!(e&&e instanceof Node))return{eventListeners:[]};const t=window.jQuery;if(!t||!t.fn)return{eventListeners:[]};const n=t,r=t._data||t.data,i=[],s=[];if("function"==typeof r){const t=r(e,"events");for(const n in t)for(const r in t[n]){const s=t[n][r];if("object"==typeof s||"function"==typeof s){const t={handler:s.handler||s,useCapture:!0,passive:!1,once:!1,type:n,remove:u.bind(e,s.selector)};i.push(t)}}const n=r(e);n&&"function"==typeof n.handle&&s.push(n.handle)}const o=n(e)[0];if(o){const e=o.$events;for(const t in e){const n=e[t];for(const e in n)if("function"==typeof n[e]){const r={handler:n[e],useCapture:!0,passive:!1,once:!1,type:t};i.push(r)}}o&&o.$handle&&s.push(o.$handle)}return{eventListeners:i,internalHandlers:s}}];try{self.devtoolsFrameworkEventListeners&&s(self.devtoolsFrameworkEventListeners)&&(r=r.concat(self.devtoolsFrameworkEventListeners))}catch(t){e.push("devtoolsFrameworkEventListeners call produced error: "+a(t))}for(let i=0;i<r.length;++i)try{const e=r[i](this);if(e.eventListeners&&s(e.eventListeners)){const n=e.eventListeners.map((e=>o(e))).filter(c);t=t.concat(n)}if(e.internalHandlers&&s(e.internalHandlers)){const t=e.internalHandlers.map((e=>l(e))).filter(c);n=n.concat(t)}}catch(t){e.push("fetcher call produced error: "+a(t))}const i={eventListeners:t,internalHandlers:n.length?n:void 0,errorString:void 0};i.internalHandlers||delete i.internalHandlers;if(e.length){let t="Framework Event Listeners API Errors:\n\t"+e.join("\n\t");t=t.substr(0,t.length-1),i.errorString=t}""!==i.errorString&&void 0!==i.errorString||delete i.errorString;return i;function s(e){if(!e||"object"!=typeof e)return!1;try{if("function"==typeof e.splice){const t=e.length;return"number"==typeof t&&t>>>0===t&&(t>0||1/t>0)}}catch(e){}return!1}function o(t){try{let n="";if(t){const e=t.type;e&&"string"==typeof e||(n+="event listener's type isn't string or empty, ");const r=t.useCapture;"boolean"!=typeof r&&(n+="event listener's useCapture isn't boolean or undefined, ");const i=t.passive;"boolean"!=typeof i&&(n+="event listener's passive isn't boolean or undefined, ");const s=t.once;"boolean"!=typeof s&&(n+="event listener's once isn't boolean or undefined, ");const o=t.handler;o&&"function"==typeof o||(n+="event listener's handler isn't a function or empty, ");const l=t.remove;if(l&&"function"!=typeof l&&(n+="event listener's remove isn't a function, "),!n)return{type:e,useCapture:r,passive:i,once:s,handler:o,remove:l}}else n+="empty event listener, ";return e.push(n.substr(0,n.length-2)),null}catch(t){return e.push(a(t)),null}}function l(t){return t&&"function"==typeof t?t:(e.push("internal handler isn't a function or empty"),null)}function a(e){try{return String(e)}catch(e){return"<error>"}}function c(e){return Boolean(e)}function u(e,t,n){if(!(this&&this instanceof Node))return;const r=window.jQuery;if(!r||!r.fn)return;r(this).off(t,e,n)}}),void 0).then(u).then((function(e){return e.getOwnProperties(!1)})).then((async function(t){if(!t.properties)throw new Error("Object properties is empty");const n=[];for(const u of t.properties)"eventListeners"===u.name&&u.value&&n.push(o(u.value).then(a)),"internalHandlers"===u.name&&u.value&&n.push((s=u.value,r.RemoteArray.objectAsArray(s).map(l).then(r.RemoteArray.createFromRemoteObjects.bind(null))).then(c)),"errorString"===u.name&&u.value&&(i=u.value,e.Console.instance().error(String(i.value)));var i;var s;await Promise.all(n)})).then((function(){return s})).catch((e=>(console.error(e),s)));function o(e){return r.RemoteArray.objectAsArray(e).map((function(e){let r,s,o,a,c=null,h=null,d=null,p=null;const v=[];function f(e){d=e?e.location:null}return v.push(e.callFunctionJSON((function(){return{type:this.type,useCapture:this.useCapture,passive:this.passive,once:this.once}}),void 0).then((function(e){void 0!==e.type&&(r=e.type);void 0!==e.useCapture&&(s=e.useCapture);void 0!==e.passive&&(o=e.passive);void 0!==e.once&&(a=e.once)}))),v.push(e.callFunction((function(){return this.handler||null})).then(u).then((function(e){return h=e,h})).then(l).then((function(e){return c=e,e.debuggerModel().functionDetailsPromise(e).then(f)}))),v.push(e.callFunction((function(){return this.remove||null})).then(u).then((function(e){if("function"!==e.type)return;p=e}))),Promise.all(v).then((function(){if(!d)throw new Error("Empty event listener's location");return new n.EventListener(i,t,r,s,o,a,c,h,d,p,n.EventListener.Origin.FrameworkUser)})).catch((e=>(console.error(e),null)))})).then(h)}function l(e){return r.RemoteFunction.objectAsFunction(e).targetFunction()}function a(e){s.eventListeners=e}function c(e){s.internalHandlers=e}function u(e){if(e.wasThrown||!e.object)throw new Error("Exception in callFunction or empty result");return e.object}function h(e){return e.filter((function(e){return Boolean(e)}))}}var p=Object.freeze({__proto__:null,frameworkEventListeners:d});const v={noEventListeners:"No event listeners",remove:"Remove",deleteEventListener:"Delete event listener",togglePassive:"Toggle Passive",toggleWhetherEventListenerIs:"Toggle whether event listener is passive or blocking",revealInElementsPanel:"Reveal in Elements panel",passive:"Passive"},f=s.registerUIStrings("event_listeners/EventListenersView.ts",v),m=s.getLocalizedString.bind(void 0,f);class _ extends l.VBox{constructor(e,t=!1){super(),this._changeCallback=e,this._enableDefaultTreeFocus=t,this._treeOutline=new a.TreeOutlineInShadow,this._treeOutline.hideOverflow(),this._treeOutline.registerRequiredCSS("object_ui/objectValue.css",{enableLegacyPatching:!0}),this._treeOutline.registerRequiredCSS("event_listeners/eventListenersView.css",{enableLegacyPatching:!0}),this._treeOutline.setComparator(g.comparator),this._treeOutline.element.classList.add("monospace"),this._treeOutline.setShowSelectionOnKeyboardFocus(!0),this._treeOutline.setFocusable(!0),this.element.appendChild(this._treeOutline.element),this._emptyHolder=document.createElement("div"),this._emptyHolder.classList.add("gray-info-message"),this._emptyHolder.textContent=m(v.noEventListeners),this._emptyHolder.tabIndex=-1,this._linkifier=new i.Linkifier,this._treeItemMap=new Map}focus(){this._enableDefaultTreeFocus&&(this._emptyHolder.parentNode?this._emptyHolder.focus():this._treeOutline.forceSelect())}async addObjects(e){this.reset(),await Promise.all(e.map((e=>e?this._addObject(e):Promise.resolve()))),this.addEmptyHolderIfNeeded(),this._eventListenersArrivedForTest()}_addObject(e){let t,i=null;const s=[],o=e.runtimeModel().target().model(n.DOMDebuggerModel);return o&&s.push(o.eventListeners(e).then((function(e){t=e}))),s.push(d(e).then((function(e){i=e}))),Promise.all(s).then((function(){if(!i)return Promise.resolve();if(!i.internalHandlers)return Promise.resolve();return i.internalHandlers.object().callFunctionJSON((function(){const e=[],t=new Set(this);for(const n of arguments)e.push(t.has(n));return e}),t.map((function(e){return r.RemoteObject.toCallArgument(e.handler())}))).then((function(e){for(let n=0;n<t.length;++n)e[n]&&t[n].markAsFramework()}))})).then(function(){this._addObjectEventListeners(e,t),i&&this._addObjectEventListeners(e,i.eventListeners)}.bind(this))}_addObjectEventListeners(e,t){if(t)for(const n of t){this._getOrCreateTreeElementForType(n.type()).addObjectEventListener(n,e)}}showFrameworkListeners(e,t,r){const i=this._treeOutline.rootElement().children();for(const s of i){let i=!0;for(const o of s.children()){const s=o,l=s.eventListener().origin();let a=!1;l!==n.EventListener.Origin.FrameworkUser||e||(a=!0),l===n.EventListener.Origin.Framework&&e&&(a=!0),!t&&s.eventListener().passive()&&(a=!0),r||s.eventListener().passive()||(a=!0),s.hidden=a,i=i&&a}s.hidden=i}}_getOrCreateTreeElementForType(e){let t=this._treeItemMap.get(e);return t||(t=new g(e,this._linkifier,this._changeCallback),this._treeItemMap.set(e,t),t.hidden=!0,this._treeOutline.appendChild(t)),this._emptyHolder.remove(),t}addEmptyHolderIfNeeded(){let e=!0,t=null;for(const n of this._treeOutline.rootElement().children())n.hidden=!n.firstChild(),e=e&&n.hidden,t||n.hidden||(t=n);e&&!this._emptyHolder.parentNode&&this.element.appendChild(this._emptyHolder),t&&t.select(!0)}reset(){const e=this._treeOutline.rootElement().children();for(const t of e)t.removeChildren();this._linkifier.reset()}_eventListenersArrivedForTest(){}}class g extends a.TreeElement{constructor(e,t,n){super(e),this.toggleOnClick=!0,this._linkifier=t,this._changeCallback=n,c.setAccessibleName(this.listItemElement,e+", event listener")}static comparator(e,t){return e.title===t.title?0:e.title>t.title?1:-1}addObjectEventListener(e,t){const n=new L(e,t,this._linkifier,this._changeCallback);this.appendChild(n)}}class L extends a.TreeElement{constructor(e,t,n,r){super("",!0),this._eventListener=e,this.editable=!1,this._setTitle(t,n),this._changeCallback=r}async onpopulate(){const e=[],t=this._eventListener,n=t.domDebuggerModel().runtimeModel();e.push(n.createRemotePropertyFromPrimitiveValue("useCapture",t.useCapture())),e.push(n.createRemotePropertyFromPrimitiveValue("passive",t.passive())),e.push(n.createRemotePropertyFromPrimitiveValue("once",t.once())),void 0!==t.handler()&&e.push(new r.RemoteObjectProperty("handler",t.handler())),o.ObjectPropertyTreeElement.populateWithProperties(this,e,[],!0,null)}_setTitle(e,n){const r=this.listItemElement.createChild("span","event-listener-details"),i=this.listItemElement.createChild("span","event-listener-tree-subtitle"),s=n.linkifyRawLocation(this._eventListener.location(),this._eventListener.sourceURL());i.appendChild(s);const l=o.ObjectPropertiesSection.createPropertyValue(e,!1,!1);if(this._valueTitle=l.element,r.appendChild(this._valueTitle),this._eventListener.canRemove()){const e=r.createChild("span","event-listener-button");e.textContent=m(v.remove),u.Tooltip.install(e,m(v.deleteEventListener)),e.addEventListener("click",(e=>{this._removeListener(),e.consume()}),!1),r.appendChild(e)}if(this._eventListener.isScrollBlockingType()&&this._eventListener.canTogglePassive()){const e=r.createChild("span","event-listener-button");e.textContent=m(v.togglePassive),u.Tooltip.install(e,m(v.toggleWhetherEventListenerIs)),e.addEventListener("click",(e=>{this._togglePassiveListener(),e.consume()}),!1),r.appendChild(e)}this.listItemElement.addEventListener("contextmenu",(n=>{const r=new h.ContextMenu(n);n.target!==s&&r.appendApplicableItems(s),"node"===e.subtype&&r.defaultSection().appendItem(m(v.revealInElementsPanel),(()=>t.reveal(e))),r.defaultSection().appendItem(m(v.deleteEventListener),this._removeListener.bind(this),!this._eventListener.canRemove()),r.defaultSection().appendCheckboxItem(m(v.passive),this._togglePassiveListener.bind(this),this._eventListener.passive(),!this._eventListener.canTogglePassive()),r.show()}))}_removeListener(){this._removeListenerBar(),this._eventListener.remove()}_togglePassiveListener(){this._eventListener.togglePassive().then((()=>this._changeCallback()))}_removeListenerBar(){const e=this.parent;if(!e)return;e.removeChild(this),e.childCount()||e.collapse();let t=!0;for(const n of e.children())n.hidden||(t=!1);e.hidden=t}eventListener(){return this._eventListener}onenter(){return!!this._valueTitle&&(this._valueTitle.click(),!0)}}var y=Object.freeze({__proto__:null,UIStrings:v,EventListenersView:_,EventListenersTreeElement:g,ObjectEventListenerBar:L});export{p as EventListenersUtils,y as EventListenersView};
