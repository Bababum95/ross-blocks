(()=>{"use strict";var e,r={831:()=>{const e=window.wp.blocks,r=window.ReactJSXRuntime,t=window.wp.blockEditor,n=window.wp.components,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"ross/google-rating","version":"0.1.0","title":"Google rating","description":"A block to display Google ratings based on a provided ID.","category":"theme","icon":"star-filled","example":{},"attributes":{"place_id":{"type":"string","default":"0"},"link":{"type":"string"}},"supports":{"html":false},"textdomain":"ross","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');var i=function(){return i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},i.apply(this,arguments)},s=function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},s.apply(this,arguments)};(0,e.registerBlockType)(o.name,s(s({},o),{edit:function(e){var s=e.attributes,l=e.setAttributes,a=(0,t.useBlockProps)();return(0,r.jsxs)("div",i({},a,{children:[(0,r.jsx)(n.Placeholder,{icon:o.icon,label:o.title,children:o.description}),(0,r.jsx)(t.InspectorControls,{children:(0,r.jsxs)(n.PanelBody,{title:"Settings",children:[(0,r.jsx)(n.TextControl,{label:"Id",value:s.place_id,onChange:function(e){return l({place_id:e})}}),(0,r.jsx)(n.TextControl,{label:"Link",value:s.link,onChange:function(e){return l({link:e})}})]})})]}))},save:function(){return null}}))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,e=[],n.O=(r,t,o,i)=>{if(!t){var s=1/0;for(p=0;p<e.length;p++){for(var[t,o,i]=e[p],l=!0,a=0;a<t.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((e=>n.O[e](t[a])))?t.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(p--,1);var c=o();void 0!==c&&(r=c)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,o,i]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={421:0,985:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[s,l,a]=t,c=0;if(s.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(a)var p=a(n)}for(r&&r(t);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(p)},t=globalThis.webpackChunkross=globalThis.webpackChunkross||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[985],(()=>n(831)));o=n.O(o)})();