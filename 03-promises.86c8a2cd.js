const e={form:document.querySelector(".form"),firstDelayDataInput:document.querySelector('[name="delay"]'),stepDelayDataInput:document.querySelector('[name="step"]'),amountDataInput:document.querySelector('[name="amount"]'),submitBtn:document.querySelector('[type="submit"]')};function t(e,t){return new Promise(((n,o)=>{const a=Math.random()>.3;setTimeout((()=>{a?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.form.addEventListener("submit",(function(n){n.preventDefault();let o=null;for(let n=1;n<=Number(e.amountDataInput.value);n+=1){1===n?o=Number(e.firstDelayDataInput.value):o+=Number(e.stepDelayDataInput.value),t(n,o).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.86c8a2cd.js.map