const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;t.disabled=!0,e.addEventListener("click",(function(a){e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(a){clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c08f769b.js.map