import{Settings as e}from"../common/common.js";import{ls as t}from"../platform/platform.js";import{Runtime as o}from"../root/root.js";import{ViewManager as r,ActionRegistration as n}from"../ui/ui.js";let i;async function a(){return i||(await o.Runtime.instance().loadModulePromise("network"),i=await import("./network.js")),i}function s(e){return void 0===i?[]:e(i)}r.registerViewExtension({location:"panel",id:"network",commandPrompt:"Show Network",title:()=>t`Network`,order:40,loadView:async()=>(await a()).NetworkPanel.NetworkPanel.instance()}),r.registerViewExtension({location:"drawer-view",id:"network.blocked-urls",commandPrompt:"Show Network request blocking",title:()=>t`Network request blocking`,persistence:"closeable",order:60,loadView:async()=>(await a()).BlockedURLsPane.BlockedURLsPane.instance()}),r.registerViewExtension({location:"drawer-view",id:"network.config",commandPrompt:"Show Network conditions",title:()=>t`Network conditions`,persistence:"closeable",order:40,tags:[()=>t`disk cache`,()=>t`network throttling`,()=>t`useragent`,()=>t`user agent`,()=>t`user-agent`],loadView:async()=>(await a()).NetworkConfigView.NetworkConfigView.instance()}),r.registerViewExtension({location:"network-sidebar",id:"network.search-network-tab",commandPrompt:"Show Search",title:()=>t`Search`,persistence:"permanent",loadView:async()=>(await a()).NetworkPanel.SearchNetworkView.instance()}),n.registerActionExtension({actionId:"network.toggle-recording",category:n.ActionCategory.NETWORK,iconClass:"largeicon-start-recording",toggleable:!0,toggledIconClass:"largeicon-stop-recording",toggleWithRedColor:!0,contextTypes:()=>s((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await a()).NetworkPanel.ActionDelegate.instance(),options:[{value:!0,title:()=>t`Record network log`},{value:!1,title:()=>t`Stop recording network log`}],bindings:[{shortcut:"Ctrl+E",platform:"windows,linux"},{shortcut:"Meta+E",platform:"mac"}]}),n.registerActionExtension({actionId:"network.hide-request-details",category:n.ActionCategory.NETWORK,title:()=>t`Hide request details`,contextTypes:()=>s((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await a()).NetworkPanel.ActionDelegate.instance(),bindings:[{shortcut:"Esc"}]}),n.registerActionExtension({actionId:"network.search",category:n.ActionCategory.NETWORK,title:()=>t`Search`,contextTypes:()=>s((e=>[e.NetworkPanel.NetworkPanel])),loadActionDelegate:async()=>(await a()).NetworkPanel.ActionDelegate.instance(),bindings:[{platform:"mac",shortcut:"Meta+F",keybindSets:["devToolsDefault","vsCode"]},{platform:"windows,linux",shortcut:"Ctrl+F",keybindSets:["devToolsDefault","vsCode"]}]}),e.registerSettingExtension({category:e.SettingCategoryObject.NETWORK,title:()=>t`Color-code resource types`,settingName:"networkColorCodeResourceTypes",settingType:e.SettingTypeObject.BOOLEAN,defaultValue:!1,tags:[()=>t`color code`,()=>t`resource type`],options:[{value:!0,title:()=>t`Color code by resource type`},{value:!1,title:()=>t`Use default colors`}]}),e.registerSettingExtension({category:e.SettingCategoryObject.NETWORK,title:()=>t`Group network log by frame`,settingName:"network.group-by-frame",settingType:e.SettingTypeObject.BOOLEAN,defaultValue:!1,tags:[()=>t`network`,()=>t`frame`,()=>t`group`],options:[{value:!0,title:()=>t`Group network log items by frame`},{value:!1,title:()=>t`Don't group network log items by frame`}]});
