!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;t.startBtn.isActive=!1,console.log(t.startBtn.isActive),t.startBtn.addEventListener("click",(function(){if(this.isActive)return;this.isActive=!0,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log(this.isActive)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.isActive=!1,console.log(t.startBtn.isActive)}))}();
//# sourceMappingURL=01-color-switcher.378573d3.js.map
