export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["._icon-512x512.png","._icons","._manifest.json","icon-512x512.png","icons/._icon-128x128.png","icons/._icon-144x144.png","icons/._icon-152x152.png","icons/._icon-192x192.png","icons/._icon-256x256.png","icons/._icon-384x384.png","icons/._icon-48x48.png","icons/._icon-512x512.png","icons/._icon-72x72.png","icons/._icon-96x96.png","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-152x152.png","icons/icon-192x192.png","icons/icon-256x256.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.DMEuzg80.js","app":"_app/immutable/entry/app.CciXaES-.js","imports":["_app/immutable/entry/start.DMEuzg80.js","_app/immutable/chunks/entry.2LPgES8d.js","_app/immutable/chunks/runtime.DiW4vmvr.js","_app/immutable/entry/app.CciXaES-.js","_app/immutable/chunks/runtime.DiW4vmvr.js","_app/immutable/chunks/render.DVDTXrad.js","_app/immutable/chunks/disclose-version.D0gE_yrD.js","_app/immutable/chunks/index-client.kG9aZkXV.js","_app/immutable/chunks/store.BZsRV5By.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
