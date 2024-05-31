function e(e,t,o,n,r){let i,s,l=0,h=0;if(n||(n=e),r&&"backward"!==r&&"both"!==r)i=e,l=t;else{let r=e;for(;r;){if(r===n){i||(i=n);break}if(r.nodeType===Node.TEXT_NODE){for(let n=r===e?t-1:r.nodeValue.length-1;n>=0;--n)if(-1!==o.indexOf(r.nodeValue[n])){i=r,l=n+1;break}}if(i)break;r=r.traversePreviousNode(n)}i||(i=n,l=0)}if(r&&"forward"!==r&&"both"!==r)s=e,h=t;else{let r=e;for(;r;){if(r===n){s||(s=n);break}if(r.nodeType===Node.TEXT_NODE){for(let n=r===e?t:0;n<r.nodeValue.length;++n)if(-1!==o.indexOf(r.nodeValue[n])){s=r,h=n;break}}if(s)break;r=r.traverseNextNode(n)}s||(s=n,h=n.nodeType===Node.TEXT_NODE?n.nodeValue.length:n.childNodes.length)}const d=e.ownerDocument.createRange();return d.setStart(i,l),d.setEnd(s,h),d}Node.prototype.rangeOfWord=function(t,o,n,r){return e(this,t,o,n,r)},Node.prototype.traverseNextTextNode=function(e){let t=this.traverseNextNode(e);if(!t)return null;const o={STYLE:1,SCRIPT:1};for(;t&&(t.nodeType!==Node.TEXT_NODE||o[t.parentElement?t.parentElement.nodeName:""]);)t=t.traverseNextNode(e);return t},Element.prototype.positionAt=function(e,t,o){let n={x:0,y:0};o&&(n=o.boxInWindow(this.ownerDocument.defaultView)),"number"==typeof e?this.style.setProperty("left",n.x+e+"px"):this.style.removeProperty("left"),"number"==typeof t?this.style.setProperty("top",n.y+t+"px"):this.style.removeProperty("top"),"number"==typeof e||"number"==typeof t?this.style.setProperty("position","absolute"):this.style.removeProperty("position")},Node.prototype.enclosingNodeOrSelfWithClass=function(e,t){return this.enclosingNodeOrSelfWithClassList([e],t)},Node.prototype.enclosingNodeOrSelfWithClassList=function(e,t){for(let o=this;o&&o!==t&&o!==this.ownerDocument;o=o.parentNodeOrShadowHost())if(o.nodeType===Node.ELEMENT_NODE){let t=!0;for(let n=0;n<e.length&&t;++n)o.classList.contains(e[n])||(t=!1);if(t)return o}return null},Node.prototype.enclosingShadowRoot=function(){let e=this.parentNodeOrShadowHost();for(;e;){if(e instanceof ShadowRoot)return e;e=e.parentNodeOrShadowHost()}return null},Node.prototype.hasSameShadowRoot=function(e){return this.enclosingShadowRoot()===e.enclosingShadowRoot()},Node.prototype.parentElementOrShadowHost=function(){if(this.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this.host)return this.host;const e=this.parentNode;return e?e.nodeType===Node.ELEMENT_NODE?e:e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.host:null:null},Node.prototype.parentNodeOrShadowHost=function(){return this.parentNode?this.parentNode:this.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this.host?this.host:null},Node.prototype.getComponentSelection=function(){let e=this.parentNode;for(;e&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE;)e=e.parentNode;return e instanceof ShadowRoot?e.getSelection():this.window().getSelection()},Node.prototype.hasSelection=function(){if(this instanceof Element){const e=this.querySelectorAll("slot");for(const t of e)if(Array.prototype.some.call(t.assignedNodes(),(e=>e.hasSelection())))return!0}const e=this.getComponentSelection();return"Range"===e.type&&(e.containsNode(this,!0)||e.anchorNode.isSelfOrDescendant(this)||e.focusNode.isSelfOrDescendant(this))},Node.prototype.window=function(){return this.ownerDocument.defaultView},Element.prototype.removeChildren=function(){this.firstChild&&(this.textContent="")},self.createElement=function(e,t){return document.createElement(e,{is:t})},self.createTextNode=function(e){return document.createTextNode(e)},Document.prototype.createElementWithClass=function(e,t,o){const n=this.createElement(e,{is:o});return t&&(n.className=t),n},self.createDocumentFragment=function(){return document.createDocumentFragment()},Element.prototype.createChild=function(e,t,o){const n=this.ownerDocument.createElementWithClass(e,t,o);return this.appendChild(n),n},DocumentFragment.prototype.createChild=Element.prototype.createChild,Element.prototype.totalOffsetLeft=function(){return this.totalOffset().left},Element.prototype.totalOffsetTop=function(){return this.totalOffset().top},Element.prototype.totalOffset=function(){const e=this.getBoundingClientRect();return{left:e.left,top:e.top}},self.AnchorBox=class{constructor(e,t,o,n){this.x=e||0,this.y=t||0,this.width=o||0,this.height=n||0}contains(e,t){return e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height}relativeTo(e){return new AnchorBox(this.x-e.x,this.y-e.y,this.width,this.height)}relativeToElement(e){return this.relativeTo(e.boxInWindow(e.ownerDocument.defaultView))}equals(e){return Boolean(e)&&this.x===e.x&&this.y===e.y&&this.width===e.width&&this.height===e.height}},Element.prototype.boxInWindow=function(e){e=e||this.ownerDocument.defaultView;const t=new AnchorBox;let o=this,n=this.ownerDocument.defaultView;for(;n&&o&&(t.x+=o.totalOffsetLeft(),t.y+=o.totalOffsetTop(),n!==e);)o=n.frameElement,n=n.parent;return t.width=Math.min(this.offsetWidth,e.innerWidth-t.x),t.height=Math.min(this.offsetHeight,e.innerHeight-t.y),t},Event.prototype.consume=function(e){this.stopImmediatePropagation(),e&&this.preventDefault(),this.handled=!0},Text.prototype.select=function(e,t){e=e||0,t=t||this.textContent.length,e<0&&(e=t+e);const o=this.getComponentSelection();o.removeAllRanges();const n=this.ownerDocument.createRange();return n.setStart(this,e),n.setEnd(this,t),o.addRange(n),this},Element.prototype.selectionLeftOffset=function(){const e=this.getComponentSelection();if(!e.containsNode(this,!0))return null;let t=e.anchorOffset,o=e.anchorNode;for(;o!==this;){for(;o.previousSibling;)o=o.previousSibling,t+=o.textContent.length;o=o.parentNodeOrShadowHost()}return t},Node.prototype.deepTextContent=function(){return this.childTextNodes().map((function(e){return e.textContent})).join("")},Node.prototype.childTextNodes=function(){let e=this.traverseNextTextNode(this);const t=[],o={STYLE:1,SCRIPT:1};for(;e;)o[e.parentElement?e.parentElement.nodeName:""]||t.push(e),e=e.traverseNextTextNode(this);return t},Node.prototype.isAncestor=function(e){if(!e)return!1;let t=e.parentNodeOrShadowHost();for(;t;){if(this===t)return!0;t=t.parentNodeOrShadowHost()}return!1},Node.prototype.isDescendant=function(e){return Boolean(e)&&e.isAncestor(this)},Node.prototype.isSelfOrAncestor=function(e){return Boolean(e)&&(e===this||this.isAncestor(e))},Node.prototype.isSelfOrDescendant=function(e){return Boolean(e)&&(e===this||this.isDescendant(e))},Node.prototype.traverseNextNode=function(e){if(this.shadowRoot)return this.shadowRoot;const t=this instanceof HTMLSlotElement?this.assignedNodes():[];if(t.length)return t[0];if(this.firstChild)return this.firstChild;let o=this;for(;o;){if(e&&o===e)return null;const t=n(o);if(t)return t;o=o.assignedSlot||o.parentNodeOrShadowHost()}function n(e){if(!e.assignedSlot)return e.nextSibling;const t=e.assignedSlot.assignedNodes(),o=Array.prototype.indexOf.call(t,e);return o+1<t.length?t[o+1]:null}return null},Node.prototype.traversePreviousNode=function(e){if(e&&this===e)return null;let t=this.previousSibling;for(;t&&t.lastChild;)t=t.lastChild;return t||this.parentNodeOrShadowHost()},Node.prototype.setTextContentTruncatedIfNeeded=function(e,t){return"string"==typeof e&&e.length>1e4?(this.textContent="string"==typeof t?t:e.trimMiddle(1e4),!0):(this.textContent=e,!1)},Document.prototype.deepActiveElement=function(){let e=this.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e},DocumentFragment.prototype.deepActiveElement=Document.prototype.deepActiveElement,Element.prototype.hasFocus=function(){const e=this.getComponentRoot();return Boolean(e)&&this.isSelfOrAncestor(e.activeElement)},Node.prototype.getComponentRoot=function(){let e=this;for(;e&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&e.nodeType!==Node.DOCUMENT_NODE;)e=e.parentNode;return e},self.onInvokeElement=function(e,t){e.addEventListener("keydown",(e=>{self.isEnterOrSpaceKey(e)&&t(e)})),e.addEventListener("click",(e=>t(e)))},self.isEnterOrSpaceKey=function(e){return"Enter"===e.key||" "===e.key},self.isEscKey=function(e){return 27===e.keyCode},function(){const e=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,o){return 1===arguments.length&&(o=!this.contains(t)),e.call(this,t,Boolean(o))}}();const t=Element.prototype.appendChild,o=Element.prototype.insertBefore,n=Element.prototype.removeChild,r=Element.prototype.removeChildren;Element.prototype.appendChild=function(e){if(e.__widget&&e.parentElement!==this)throw new Error("Attempt to add widget via regular DOM operation.");return t.call(this,e)},Element.prototype.insertBefore=function(e,t){if(e.__widget&&e.parentElement!==this)throw new Error("Attempt to add widget via regular DOM operation.");return o.call(this,e,t)},Element.prototype.removeChild=function(e){if(e.__widgetCounter||e.__widget)throw new Error("Attempt to remove element containing widget via regular DOM operation");return n.call(this,e)},Element.prototype.removeChildren=function(){if(this.__widgetCounter)throw new Error("Attempt to remove element containing widget via regular DOM operation");r.call(this)};var i=Object.freeze({__proto__:null,rangeOfWord:e,originalAppendChild:t,originalInsertBefore:o,originalRemoveChild:n,originalRemoveChildren:r});export{i as DOMExtension};
