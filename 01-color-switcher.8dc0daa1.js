const t={bodyRef:document.body,startBtnRef:document.querySelector("[data-start]"),stopBtnRef:document.querySelector("[data-stop]")},e=getComputedStyle(t.bodyRef).backgroundColor;let o=null;function n(){t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtnRef.addEventListener("click",(function(){t.startBtnRef.setAttribute("disabled","true"),n(),o=setInterval(n,1e3)})),t.stopBtnRef.addEventListener("click",(function(){t.bodyRef.style.backgroundColor=e,clearInterval(o),t.startBtnRef.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.8dc0daa1.js.map