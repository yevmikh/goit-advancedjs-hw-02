import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";function l(r,t){const u=Math.random()>.3;return new Promise((m,e)=>{setTimeout(()=>{u?m({position:r,delay:t}):e({position:r,delay:t})},t)})}const a=document.querySelector(".form");a.addEventListener("submit",p);function p(r){r.preventDefault();const t=document.querySelector('input[name="delay"]').valueAsNumber,u=document.querySelector('input[name="step"]').valueAsNumber,m=document.querySelector('input[name="amount"]').valueAsNumber;for(let e=0;e<m;e++){const c=t+e*u,i=e+1;l(i,c).then(({position:o,delay:n})=>{s.success({title:`✅ Fulfilled promise ${o} in ${n} ms`}),console.log(`✅ Fulfilled promise ${o} in ${n} ms`)}).catch(({position:o,delay:n})=>{s.error({title:`❌ Rejected promise ${o} in ${n} ms`}),console.log(`❌ Rejected promise ${o} in ${n} ms`)})}}
//# sourceMappingURL=commonHelpers3.js.map
