

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CwvPQsrz.js","_app/immutable/chunks/disclose-version.D0gE_yrD.js","_app/immutable/chunks/runtime.DiW4vmvr.js"];
export const stylesheets = [];
export const fonts = [];
