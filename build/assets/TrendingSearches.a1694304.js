import{A as o,a as d,j as h,b as r,L as m,r as i}from"./index.923bfc50.js";const u=()=>{const n=`${o}/trending?api_key=${d}`;let e=[];const c=s=>e.some(a=>a.name===s.username);return fetch(n).then(s=>s.json()).then(s=>{const{data:a=[]}=s;for(const t of a)t.username!=""&&!c(t)&&e.push({id:t.id,name:t.username});return e})};function f({gifs:n}){return h("aside",{className:"trendings",children:[r("h3",{children:"Trendings"}),r("ul",{children:n.map(e=>r("li",{className:"item",children:r(m,{href:`/search/${e.name}`,children:e.name.toLowerCase()})},e.id))})]})}function l(){const[n,e]=i.exports.useState([]);return i.exports.useEffect(()=>{u().then(e)},[]),r(f,{gifs:n})}export{l as default};
