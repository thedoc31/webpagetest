import*as RootModule from'../root/root.js';RootModule.Runtime.cachedResources.set("issues/descriptions/CoepCoopSandboxedIframeCannotNavigateToCoopPage.md","# An iframe navigation to a document with a Cross-Origin Opener Policy was blocked\n\nA document with a Cross-Origin Opener Policy (COOP) was blocked from loading in an iframe, because the iframe specifies a sandbox attribute.\nThis protects COOP-enabled documents from inheriting properties from its opener.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/CoepCorpNotSameSite.md","# Specify a more permissive Cross-Origin Resource Policy to prevent a resource from being blocked\n\nYour site tries to access an external resource that only allows same-site usage.\nThis behavior prevents a document from loading any non-same-site resources which don’t explicitly grant permission to be loaded.\n\nTo solve this, add the following to the resource’s HTML response header: `Cross-Origin-Embedder-Policy: cross-origin`\n⚠️If you set this header, any website can embed this resource.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/CoepCorpNotSameOriginAfterDefaultedToSameOriginByCoep.md","# Specify a Cross-Origin Resource Policy to prevent a resource from being blocked\n\nBecause your site has the Cross-Origin Embedder Policy (COEP) enabled, each resource must specify a suitable Cross-Origin Resource Policy (CORP).\nThis behavior prevents a document from loading cross-origin resources which don’t explicitly grant permission to be loaded.\n\nTo solve this, add the following to the resource’s response header:\n* `Cross-Origin-Resource-Policy: same-site` if the resource and your site are served from the same site.\n* `Cross-Origin-Resource-Policy: cross-origin` if the resource is served from another location than your website. ⚠️If you set this header, any website can embed this resource.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/CoepCorpNotSameOrigin.md","# Specify a more permissive Cross-Origin Resource Policy to prevent a resource from being blocked\n\nYour site tries to access an external resource that only allows same-origin usage.\nThis behavior prevents a document from loading any non-same-origin resources which don’t explicitly grant permission to be loaded.\n\nTo solve this, add the following to the resource’s HTML response header:\n* `Cross-Origin-Resource-Policy: same-site` if the resource and your site are served from the same site.\n* `Cross-Origin-Resource-Policy: cross-origin` if the resource is served from another location than your website. ⚠️If you set this header, any website can embed this resource.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/CoepFrameResourceNeedsCoepHeader.md","# Specify a Cross-Origin Embedder Policy to prevent this frame from being blocked\n\nBecause your site has the Cross-Origin Embedder Policy (COEP) enabled, each embedded iframe must also specify this policy.\nThis behavior protects private data from being exposed to untrusted third party sites.\n\nTo solve this, add the following to the embedded frame’s HTML response header: `Cross-Origin-Embedder-Policy: require-corp`\n");RootModule.Runtime.cachedResources.set("issues/descriptions/cspEvalViolation.md","# Content Security Policy of your site blocks the use of 'eval' in JavaScript`\n\nThe Content Security Policy (CSP) prevents the evaluation of arbitrary strings as JavaScript to make it more difficult for an attacker to inject unathorized code on your site.\n\nTo solve this issue, avoid using `eval()`, `new Function()`, `setTimeout([string], ...)` and `setInterval([string], ...)` for evaluating strings.\n\nIf you absolutely must: you can enable string evaluation by adding `unsafe-eval` as an allowed source in a `script-src` directive.\n\n⚠️ Allowing string evaluation comes at the risk of inline script injection.");RootModule.Runtime.cachedResources.set("issues/descriptions/cspInlineViolation.md","# Content Security Policy blocks inline execution of scripts and stylesheets\n\nThe Content Security Policy (CSP) prevents cross-site scripting attacks by blocking inline execution of scripts and style sheets.\n\nTo solve this, move all inline scripts (e.g. `onclick=[JS code]`) and styles into external files.\n\n⚠️ Allowing inline execution comes at the risk of script injection via injection of HTML script elements. If you absolutely must, you can allow inline script and styles by:\n\n* adding `unsafe-inline` as a source to the CSP header\n* adding the hash or nonce of the inline script to your CSP header.");RootModule.Runtime.cachedResources.set("issues/descriptions/cspURLViolation.md","# Content Security Policy of your site blocks some resources because their origin is not included in the content security policy header\n\nThe Content Security Policy (CSP) improves the security of your site by defining a list of trusted sources and instructs the browser to only execute or render resources from this list. Some resources on your site can’t be accessed because their origin is not listed in the CSP.\n\nTo solve this, carefully check that all of the blocked resources listed below are trustworthy; if they are, include their sources in the content security policy of your site. You can set a policy as a HTTP header (recommended), or via an HTML `<meta>` tag.\n\n⚠️ Never add a source you don’t trust to your site’s Content Security Policy. If you don’t trust the source, consider hosting resources on your own site instead.");RootModule.Runtime.cachedResources.set("issues/descriptions/cspTrustedTypesSinkViolation.md","# Trusted Type expected, but String received\n\nYour site tries to use a plain string in a DOM modification where a Trusted Type is expected. Requiring Trusted Types for DOM modifications helps to prevent cross-site scripting attacks.\n\nTo solve this, provide a Trusted Type to all the DOM modifications listed below. You can convert a string into a Trusted Type by:\n\n* defining a policy and using its corresponding `createHTML`, `createScript` or `createScriptURL` function.\n* defining a policy named `default` which will be automatically called.");RootModule.Runtime.cachedResources.set("issues/descriptions/cspTrustedTypesPolicyViolation.md","# Trusted Type policy creation blocked by Content Security Policy\n\nYour site tries to create a Trusted Type policy that has not been allowed by the Content Security Policy. The Content Security Policy may restrict the set of valid names for Trusted Type policies, and forbid more than one policy of each name.\n\nTo solve this, make sure that the names of the policies listed below are declared in the `trusted-types` CSP directive. To allow redefining policies add the `allow-duplicates` keyword. If you want to remove all restrictions on policy names, remove the `trusted-types` directive entirely (not recommended).");RootModule.Runtime.cachedResources.set("issues/descriptions/mixedContent.md","# Mixed content: load all resources via HTTPS to improve the security of your site\n\nEven though the initial HTML page is loaded over a secure HTTPS connection, some resources like images, stylesheets or scripts are being accessed over an insecure HTTP connection. Usage of insecure resources is restricted to strengthen the security of your entire site.\n\nTo resolve this issue, load all resources over a secure HTTPS connection.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/sharedArrayBufferTransfer.md","#  SharedArrayBuffer usage is restricted to cross-origin isolated sites\n\nSharedArrayBuffers (SABs) can be used to construct high-resolution timers. High-resolution timers simplify Spectre attacks on cross-origin resources.\n\nTo mitigate security risks across browsers, SharedArrayBuffers are gated behind cross-origin isolated contexts starting with Chrome 91 (May 2021). To continue using SharedArrayBuffers, please ensure that this page opts-into cross-origin isolation by setting Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy appropriately.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteExcludeContextDowngradeRead.md","# Migrate entirely to HTTPS to have cookies sent to same-site subresources\n\nA cookie was not sent to {PLACEHOLDER_destination} origin from {PLACEHOLDER_origin} context.\nBecause this cookie would have been sent across schemes on the same site, it was not sent.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteExcludeContextDowngradeSet.md","# Migrate entirely to HTTPS to allow cookies to be set by same-site subresources\n\nA cookie was not set by {PLACEHOLDER_origin} origin in {PLACEHOLDER_destination} context.\nBecause this cookie would have been set across schemes on the same site, it was blocked.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteExcludeNavigationContextDowngrade.md","# Migrate entirely to HTTPS to have cookies sent on same-site requests\n\nA cookie was not sent to {PLACEHOLDER_destination} origin from {PLACEHOLDER_origin} context on a navigation.\nBecause this cookie would have been sent across schemes on the same site, it was not sent.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteNoneInsecureErrorRead.md","# Mark cross-site cookies as Secure to allow them to be sent in cross-site requests\n\nCookies marked with `SameSite=None` must also be marked with `Secure` to get sent in cross-site requests.\nThis behavior protects user data from being sent over an insecure connection.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie should be sent in cross-site requests. This enables third-party use.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be sent in cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteNoneInsecureErrorSet.md","# Mark cross-site cookies as Secure to allow setting them in cross-site contexts\n\nCookies marked with `SameSite=None` must also be marked with `Secure` to allow setting them in a cross-site context.\nThis behavior protects user data from being sent over an insecure connection.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the `Secure` attribute.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be set by cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteNoneInsecureWarnRead.md","# Mark cross-site cookies as Secure to allow them to be sent in cross-site requests\n\nIn a future version of the browser, cookies marked with `SameSite=None` must also be marked with `Secure` to get sent in cross-site requests.\nThis behavior protects user data from being sent over an insecure connection.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie should be sent in cross-site requests. This enables third-party use.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be sent in cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteNoneInsecureWarnSet.md","# Mark cross-site cookies as Secure to allow setting them in cross-site contexts\n\nIn a future version of the browser, cookies marked with `SameSite=None` must also be marked with `Secure` to allow setting them in a cross-site context.\nThis behavior protects user data from being sent over an insecure connection.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the `Secure` attribute.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be set by cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteUnspecifiedLaxAllowUnsafeRead.md","# Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute\n\nBecause a cookie’s `SameSite` attribute was not set or is invalid, it defaults to `SameSite=Lax`,\nwhich will prevent the cookie from being sent in a cross-site request in a future version of the browser.\nThis behavior protects user data from accidentally leaking to third parties and cross-site request forgery.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie should be sent in cross-site requests. This enables third-party use.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be sent in cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteUnspecifiedLaxAllowUnsafeSet.md","# Indicate whether a cookie is intended to be set in cross-site context by specifying its SameSite attribute\n\nBecause a cookie’s `SameSite` attribute was not set or is invalid, it defaults to `SameSite=Lax`,\nwhich will prevents the cookie from being set in a cross-site context in a future version of the browser.\nThis behavior protects user data from accidentally leaking to third parties and cross-site request forgery.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the `Secure` attribute.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be set by cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteUnspecifiedTreatedAsLaxRead.md","# Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute\n\nBecause a cookie’s `SameSite` attribute was not set or is invalid, it defaults to `SameSite=Lax`,\nwhich prevents the cookie from being sent in a cross-site request.\nThis behavior protects user data from accidentally leaking to third parties and cross-site request forgery.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie should be sent in cross-site requests. This enables third-party use.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be sent in cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteUnspecifiedTreatedAsLaxSet.md","# Indicate whether a cookie is intended to be set in a cross-site context by specifying its SameSite attribute\n\nBecause a cookie’s `SameSite` attribute  was not set or is invalid, it defaults to `SameSite=Lax`,\nwhich prevents the cookie from being set in a cross-site context.\nThis behavior protects user data from accidentally leaking to third parties and cross-site request forgery.\n\nResolve this issue by updating the attributes of the cookie:\n* Specify `SameSite=None` and `Secure` if the cookie is intended to be set in cross-site contexts. Note that only cookies sent over HTTPS may use the `Secure` attribute.\n* Specify `SameSite=Strict` or `SameSite=Lax` if the cookie should not be set by cross-site requests.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteWarnCrossDowngradeRead.md","# Migrate entirely to HTTPS to continue having cookies sent to same-site subresources\n\nA cookie is being sent to {PLACEHOLDER_destination} origin from {PLACEHOLDER_origin} context.\nBecause this cookie is being sent across schemes on the same site, it will not be sent in a future version of Chrome.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteWarnCrossDowngradeSet.md","# Migrate entirely to HTTPS to continue allowing cookies to be set by same-site subresources\n\nA cookie is being set by {PLACEHOLDER_origin} origin in {PLACEHOLDER_destination} context.\nBecause this cookie is being set across schemes on the same site, it will be blocked in a future version of Chrome.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/descriptions/SameSiteWarnStrictLaxDowngradeStrict.md","# Migrate entirely to HTTPS to continue having cookies sent on same-site requests\n\nA cookie is being sent to {PLACEHOLDER_destination} origin from {PLACEHOLDER_origin} context on a navigation.\nBecause this cookie is being sent across schemes on the same site, it will not be sent in a future version of Chrome.\nThis behavior enhances the `SameSite` attribute’s protection of user data from request forgery by network attackers.\n\nResolve this issue by migrating your site (as defined by the eTLD+1) entirely to HTTPS.\nIt is also recommended to mark the cookie with the `Secure` attribute if that is not already the case.\n");RootModule.Runtime.cachedResources.set("issues/issuesPane.css","/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.issues-pane {\n  overflow: hidden;\n}\n\n.issues-pane-no-issues {\n  align-items: center;\n  background-color: var(--color-background);\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 18px;\n  justify-content: center;\n  padding: 30px;\n}\n\n.issues-toolbar-container {\n  display: flex;\n  flex: none;\n}\n\n.issues-toolbar-container > .toolbar {\n  background-color: var(--color-background-elevation-1);\n  border-bottom: 1px solid var(--color-details-hairline);\n}\n\n.issues-toolbar-left {\n  flex: 1 1 auto;\n}\n\n.issues-toolbar-right {\n  padding-right: 6px;\n}\n\n/*# sourceURL=issues/issuesPane.css */");RootModule.Runtime.cachedResources.set("issues/issuesTree.css","/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/* Remove container padding from TreeOutline.\n * Allows issues to touch the edges of the container. */\n\n:host,\n.issues {\n  padding: 0;\n  overflow: auto;\n}\n\n.issues {\n  --breaking-change-color: #f29900;\n  --issue-warning: #f2aa00;\n  --issue-gray: #5f6368;\n  --issue-link: #1967d2;\n  --issue-black: #202124;\n  --issue-code: #f0f0f0;\n  --issue-indent: 8px;\n  --affected-resource-background: #f8f9fa;\n}\n\n:host-context(.-theme-with-dark-background) .issues {\n  --issue-gray: #ababab;\n  --issue-link: #8ab4f8;\n  --issue-black: #bdc6cf;\n  --issue-code: #0f0f0f;\n  --affected-resource-background: #3a3a3a;\n}\n\n/* Override whitespace behavior for tree items to allow wrapping */\n\n.issues li {\n  white-space: normal;\n}\n\n/* Hide toggle for tree items which cannot be collapsed */\n\n.issues .always-parent::before {\n  display: none;\n}\n\n/* Override TreeOutline toggle switching to allow animation */\n\n.issues li.parent::before {\n  transition: transform 200ms;\n  transform-origin: 25% 50%;\n}\n\n.issues li.parent.expanded::before {\n  -webkit-mask-position: 0 0;\n  transform: rotate(90deg);\n}\n\n.issue-category,\n.issue {\n  padding: 0 8px;\n  padding-left: var(--issue-indent);\n  overflow: hidden;\n  flex: none;\n  transition: background-color 200ms;\n  background: #f3f3f3;\n  border: 1px solid #e5e5e5;\n  border-width: 0 0 1px;\n}\n\n.issue-category + .children .issue,\n.issue.expanded {\n  background: var(--color-background);\n}\n\n.issue.expanded {\n  border-width: 0;\n}\n\np {\n  margin-block-start: 2px;\n  margin-block-end: 2px;\n}\n\n/* Override selected tree item styles for issues to avoid changing width. */\n\n.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-category.selected:focus-visible,\n.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue.selected:focus-visible {\n  width: auto;\n  padding-right: 8px;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 6px 0;\n  cursor: pointer;\n  width: 100%;\n}\n\n.issue-category .header {\n  line-height: 24px;\n  padding-left: 2px;\n}\n\n.title {\n  flex: 1;\n  font-size: 14px;\n  color: var(--issue-black);\n  font-weight: normal;\n  user-select: text;\n}\n\n.issue.expanded .title {\n  font-weight: 450;\n}\n\n.body.children {\n  border-bottom: 1px solid #e5e5e5;\n  padding: 6px 0;\n  position: relative;\n  padding-left: calc(var(--issue-indent) + 43px);\n  padding-bottom: 26px;\n  padding-right: 8px;\n}\n\n.issue-category + .children {\n  --issue-indent: 24px;\n\n  padding-left: 0;\n}\n\n/* Show a colored border on the left side of opened issues. */\n\n.body::before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: calc(var(--issue-indent) + 23px);\n  top: 0;\n  bottom: 20px;\n  border-left: 2px solid var(--breaking-change-color);\n  width: 2px;\n}\n\ndevtools-icon.breaking-change {\n  margin: 0 7px;\n}\n\n.message {\n  line-height: 20px;\n  font-size: 14px;\n  color: var(--issue-gray);\n  margin-bottom: 4px;\n  user-select: text;\n}\n\n.message p {\n  margin-bottom: 16px;\n}\n\n.message li {\n  margin-top: 8px;\n}\n\n.message code {\n  color: var(--issue-black);\n  font-size: 12px;\n  user-select: text;\n  cursor: text;\n  background: var(--issue-code);\n}\n\n.separator::before {\n  content: '·';\n  padding-left: 1ex;\n  padding-right: 1ex;\n}\n\n.link {\n  font-size: 14px;\n  color: var(--issue-link);\n}\n\n.link-wrapper {\n  margin-top: 15px;\n  user-select: text;\n}\n\n.affected-resources-label,\n.resolutions-label {\n  margin-top: 5px;\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--issue-black);\n  display: inline-block;\n}\n\n.link-list {\n  list-style-type: none;\n  list-style-position: inside;\n  padding-inline-start: 0;\n}\n\n.resolutions-list {\n  list-style-type: none;\n  list-style-position: inside;\n  padding-inline-start: 0;\n}\n\n/* We inherit all the styles from treeoutline, but these are simple text <li>, so we override some styles */\n\n.link-list li::before {\n  content: none;\n  -webkit-mask-image: none;\n}\n\n.resolutions-list li::before {\n  content: \"→\";\n  -webkit-mask-image: none;\n  padding-right: 5px;\n  position: relative;\n  top: -1px;\n}\n\n.resolutions-list li {\n  display: list-item;\n}\n\nul > li.plain-enum {\n  display: list-item;\n}\n\n/* This is a hack because the tree view's CSS overrides list styling in a non-compositional way. This\n   can be removed once we've moved to proper components. */\nul > li.plain-enum::before {\n  content: \"\";\n  padding: 0;\n  margin: 0;\n  max-width: 0;\n}\n\n.affected-resources-label + .affected-resources {\n  padding: 3px 0 0 0;\n  position: relative;\n  user-select: text;\n}\n\n.affected-resource-label {\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--issue-black);\n  position: relative;\n  cursor: pointer;\n}\n\n.affected-resource-cookie {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-element {\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--issue-link);\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-row {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n  vertical-align: top;\n}\n\n.affected-resource-mixed-content {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-heavy-ad {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-request {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-source {\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--issue-link);\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-list {\n  border-spacing: 10px 0;\n  margin-left: -12px;\n}\n\n.affected-resource-header {\n  font-size: 12px;\n  color: var(--issue-black);\n  padding-left: 2px;\n}\n\n.affected-resource-blocked-status {\n  color: red;\n}\n\n.affected-resource-report-only-status {\n  color: var(--issue-warning);\n}\n\n.affected-resource-cookie-info {\n  color: var(--issue-gray);\n  padding: 2px;\n  text-align: right;\n}\n\n.affected-resource-cookie-info-header {\n  text-align: right;\n}\n\n.affected-resource-mixed-content-info {\n  color: var(--issue-gray);\n  padding: 2px;\n}\n\n.affected-resource-heavy-ad-info {\n  color: var(--issue-gray);\n  padding: 2px;\n}\n\n.affected-resource-heavy-ad-info-frame {\n  display: flex;\n  align-items: center;\n  color: var(--issue-gray);\n  padding: 2px;\n}\n\n.affected-resource-cell {\n  color: var(--issue-gray);\n  padding: 2px;\n}\n\n.affected-resource-cell.link {\n  color: var(--issue-link);\n}\n\n.affected-resource-cell span.icon {\n  margin-right: 0.5ex;\n  vertical-align: sub;\n}\n\n.affected-resource-cell [is=ui-icon].icon-mask.link {\n  background-color: var(--issue-link);\n}\n\n.link [is=ui-icon].icon-mask.link {\n  background-color: var(--issue-link);\n}\n\n.affected-resource-cell [is=ui-icon].icon-mask.unavailable {\n  background-color: var(--issue-warning);\n}\n\n.affected-resources > .parent {\n  margin-top: 0;\n  padding: 2px 5px 0 5px;\n}\n\n.affected-resources > .parent.expanded {\n  background: var(--affected-resource-background);\n}\n\n.affected-resources > .children.expanded {\n  background: var(--affected-resource-background);\n  padding: 6px 0 9px 5px;\n  margin-bottom: 10px;\n}\n\n.aggregated-issues-count {\n  padding-right: 7px;\n}\n\n.affected-resource-directive-info-header {\n  text-align: left;\n}\n\n.affected-resource-directive {\n  font-size: 14px;\n  line-height: 20px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-directive-info {\n  color: var(--issue-gray);\n  padding: 2px;\n  text-align: left;\n}\n\n.devtools-link {\n  padding-top: 4px;\n}\n\ndevtools-icon.link-icon {\n  vertical-align: sub;\n  margin-right: 0.5ch;\n}\n\ndevtools-icon.elements-panel,\ndevtools-icon.network-panel {\n  margin-right: 0.5ex;\n  vertical-align: sub;\n  height: 14px;\n}\n\n/*# sourceURL=issues/issuesTree.css */");RootModule.Runtime.cachedResources.set("issues/cspViolationsView.css","/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.csp-violations-pane {\n  overflow: hidden;\n}\n\n.csp-violations-toolbar {\n  border-bottom: var(--color-details-hairline);\n}\n\n/*# sourceURL=issues/cspViolationsView.css */");RootModule.Runtime.cachedResources.set("issues/cspViolationsListView.css","/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/*# sourceURL=issues/cspViolationsListView.css */");