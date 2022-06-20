function r(r,t,e){if(e||2===arguments.length)for(var n,a=0,l=t.length;a<l;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return r.concat(n||Array.prototype.slice.call(t))}function t(t,e){for(var n=t||[],a={},l=0;l<n.length;l++){var o=n[l],c=e(o);a[c]=r(r([],a[c]||[],!0),[o],!1)}return a}export{t as default};
//# sourceMappingURL=partition.js.map
