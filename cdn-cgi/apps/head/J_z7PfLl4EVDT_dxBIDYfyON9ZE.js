;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="a03eaaca326d52e8830ccaae492aaafd";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["FxIPr55TH7tU"]={appId:"mPmfMJWC0r33",scope:{}};;CloudflareApps.installs["FxIPr55TH7tU"].options={"backgroundColor":"#0a0b18","buttonColor":"#4638c2","buttonTextColor":"#FFFFFF","message":"\u003cp\u003eAcest site folosește cookie-uri pentru a îmbunătății experiența de utilizator.\u003c/p\u003e","position":"bottom","textColor":"#FFFFFF"};;CloudflareApps.installs["RmxAZsP38RrK"]={appId:"0VJ1mCYqPTh4",scope:{}};;CloudflareApps.installs["RmxAZsP38RrK"].options={"color":{"custom":"#666666","strategy":"dark"},"position":{"value":"bottom-right"},"shape":{"icon":"line","radius":1,"showBackground":true}};;CloudflareApps.installs["RmxAZsP38RrK"].URLPatterns=["^panel.undergroundromania.ro/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['FxIPr55TH7tU'].URLPatterns)){var purecookieTitle="Cookies.";var purecookieButton="Understood";function pureFadeIn(elem,display){var el=document.querySelector(elem);el.style.opacity=0;el.style.display=display||"block";(function fade(){var val=parseFloat(el.style.opacity);if(!((val+=.02)>1)){el.style.opacity=val;requestAnimationFrame(fade);}})();};function pureFadeOut(elem){var el=document.querySelector(elem);el.style.opacity=1;(function fade(){if((el.style.opacity-=.02)<0){el.style.display="none";}else{requestAnimationFrame(fade);}})();};function setCookie(name,value,days){var expires="";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toUTCString();}
document.cookie=name+"="+(value||"")+expires+"; path=/";}
function getCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function eraseCookie(name){document.cookie=name+'=; Max-Age=-99999999;';}
function clearCookie(){eraseCookie('purecookieDismiss')}
function cookieConsent(element,cookieMessage){if(!getCookie('purecookieDismiss')){element.innerHTML+='<cookieConsentContainer><cookieTitle><a>'+purecookieTitle+'</a></cookieTitle><cookieDesc><p>'+cookieMessage+' '
+'</p></cookieDesc><cookieButton role = "button"><a onClick="purecookieDismiss();">'
+purecookieButton+'</a></cookieButton></cookieConsentContainer>';pureFadeIn("cookieConsentContainer");}}
function purecookieDismiss(){setCookie('purecookieDismiss','1',7);pureFadeOut("cookieConsentContainer");}};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,DQpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpZV9iYW5uZXIiXVtkYXRhLXBvc2l0aW9uPSJib3R0b20iXSB7DQoJcG9zaXRpb246IGZpeGVkOw0KICBib3R0b206IDBweDsNCn0NCg0KY2xvdWRmbGFyZS1hcHBbYXBwPSJjb29raWVfYmFubmVyIl1bZGF0YS1wb3NpdGlvbj0idG9wIl0gew0KCXBvc2l0aW9uOiBmaXhlZDsNCn0NCg0KY2xvdWRmbGFyZS1hcHBbYXBwPSJjb29raWVfYmFubmVyIl0gY29va2llQ29uc2VudENvbnRhaW5lciB7DQoJei1pbmRleDogOTk5Ow0KCXdpZHRoOiAzNTBweDsNCgltaW4taGVpZ2h0OiAyMHB4Ow0KCWJveC1zaXppbmc6IGJvcmRlci1ib3g7DQoJcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDsNCi8qCWJhY2tncm91bmQ6ICMyMzIzMjM7Ki8NCglvdmVyZmxvdzogaGlkZGVuOw0KLyoJcG9zaXRpb246IGZpeGVkOyovDQoJZGlzcGxheTogbm9uZTsNCn0NCmNsb3VkZmxhcmUtYXBwW2FwcD0iY29va2llX2Jhbm5lciJdIGNvb2tpZUNvbnNlbnRDb250YWluZXIgY29va2llVGl0bGUgYSB7DQoJZm9udC1mYW1pbHk6IE9wZW5TYW5zLCBhcmlhbCwgInNhbnMtc2VyaWYiOw0KLyoJY29sb3I6ICNGRkZGRkY7Ki8NCglmb250LXNpemU6IDIycHg7DQoJbGluZS1oZWlnaHQ6IDIwcHg7DQoJZGlzcGxheTogYmxvY2s7DQp9DQpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpZV9iYW5uZXIiXSBjb29raWVDb25zZW50Q29udGFpbmVyIGNvb2tpZURlc2MgcCB7DQoJbWFyZ2luOiAwOw0KCXBhZGRpbmc6IDA7DQoJZm9udC1mYW1pbHk6IE9wZW5TYW5zLCBhcmlhbCwgInNhbnMtc2VyaWYiOw0KLyoJY29sb3I6ICNGRkZGRkY7Ki8NCglmb250LXNpemU6IDEzcHg7DQoJbGluZS1oZWlnaHQ6IDIwcHg7DQoJZGlzcGxheTogYmxvY2s7DQoJbWFyZ2luLXRvcDogMTBweDsNCn0NCg0KLypVc2UgaWYgbGlua2luZyB0byBhICJwcml2YWN5IHBvbGljeSIgc2l0ZSovDQpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpZV9iYW5uZXIiXSBjb29raWVDb25zZW50Q29udGFpbmVyIGNvb2tpZURlc2MgYSB7DQoJZm9udC1mYW1pbHk6IE9wZW5TYW5zLCBhcmlhbCwgInNhbnMtc2VyaWYiOw0KCXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOw0KfQ0KY2xvdWRmbGFyZS1hcHBbYXBwPSJjb29raWVfYmFubmVyIl0gY29va2llQ29uc2VudENvbnRhaW5lciBjb29raWVCdXR0b24gYSB7DQoJZGlzcGxheTogaW5saW5lLWJsb2NrOw0KCWZvbnQtZmFtaWx5OiBPcGVuU2FucywgYXJpYWwsICJzYW5zLXNlcmlmIjsNCgljb2xvcjogI2ZmMDAwMDsNCglmb250LXNpemU6IDE0cHg7DQoJZm9udC13ZWlnaHQ6IGJvbGQ7DQoJbWFyZ2luLXRvcDogMTRweDsNCgliYWNrZ3JvdW5kOiAjMDAwMDAwOw0KCWJveC1zaXppbmc6IGJvcmRlci1ib3g7DQoJcGFkZGluZzogMTVweCAyNHB4Ow0KCXRleHQtYWxpZ246IGNlbnRlcjsNCgl0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7DQp9DQpjbG91ZGZsYXJlLWFwcFthcHA9ImNvb2tpZV9iYW5uZXIiXWNvb2tpZUNvbnNlbnRDb250YWluZXIgY29va2llQnV0dG9uIGE6aG92ZXIgew0KCWN1cnNvcjogcG9pbnRlcjsNCi8qCWJhY2tncm91bmQ6ICMzRTlCNjc7Ki8NCn0NCg0KQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7DQoJY29va2llQ29uc2VudENvbnRhaW5lciB7DQovKgkJYm90dG9tOiAwcHggIWltcG9ydGFudDsNCgkJbGVmdDogMHB4ICFpbXBvcnRhbnQ7Ki8NCgkJd2lkdGg6IDEwMCUgICFpbXBvcnRhbnQ7DQoJfQ0KfQ0K';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/f5ak_5aI6Tqv_qc8PDv1Y2JwSDw.js';document.head.appendChild(script);})();