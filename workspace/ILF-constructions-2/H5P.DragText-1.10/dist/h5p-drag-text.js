(()=>{var e={568:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Y});var n=function(e){var t=e.length;return function r(){var n=Array.prototype.slice.call(arguments,0);return n.length>=t?e.apply(null,n):function(){var e=Array.prototype.slice.call(arguments,0);return r.apply(null,n.concat(e))}}},o=function(e,t){return t.substr(0,1)===e},a=function(e,t){return t.substr(-1)===e},i=n((function(e,t){return o(e,t)&&(t=t.slice(1)),a(e,t)&&(t=t.slice(0,-1)),t}));const s={curry:n,cleanCharacter:i,startsWith:o,endsWith:a,shuffle:function(e){for(var t=e.length;t>0;){var r=Math.floor(Math.random()*t),n=e[--t];e[t]=e[r],e[r]=n}return e},createElementWithTextPart:function(e){var t=document.createElement("span");return t.innerHTML=e,t}};var l=function(e){return e.split(/(\*.*?\*)/).filter((function(e){return e.length>0}))},h=function(e){var t=e.match(/(:([^\\*]+))/g),r=e.match(/(\\\+([^\\*:]+))/g),n=e.match(/(\\\-([^\\*:]+))/g),o=s.cleanCharacter("*",e);return t&&(o=o.replace(t,""),t=(t=t[0].replace(":","")).replace(/\s+$/,"")),r&&(o=o.replace(r,""),r=(r=r[0].replace("\\+","")).replace(/\s+$/,"")),n&&(o=o.replace(n,""),n=(n=n[0].replace("\\-","")).replace(/\s+$/,"")),{tip:t,correctFeedback:r,incorrectFeedback:n,text:o=o.replace(/\s+$/,"")}},p=p||{};p.DragText=p.DragText||{},p.DragText.StopWatch=function(){function e(){this.duration=0}return e.prototype.start=function(){return this.startTime=Date.now(),this},e.prototype.stop=function(){return this.duration=this.duration+Date.now()-this.startTime,this.passedTime()},e.prototype.reset=function(){this.duration=0,this.startTime=Date.now()},e.prototype.passedTime=function(){return Math.round(this.duration/10)/100},e}();const c=p.DragText.StopWatch;var d=function(e){return e.stopPropagation()};H5P.TextDraggable=function(e){var t="h5p-drag-dropped";function r(t,r,n){H5P.EventDispatcher.call(this);var o=this;o.text=t,o.insideDropzone=null,o.$draggable=e(r),o.$ariaLabel=o.$draggable.find(".h5p-hidden-read"),o.index=n,o.initialIndex=n,o.shortFormat=o.text,o.shortFormat.length>20&&!o.shortFormat.match(/\\\(.+\\\)|\\\[.+\\\]|\$\$.+\$\$/)&&(o.shortFormat=o.shortFormat.slice(0,17)+"..."),o.$draggable.on("touchstart",d),o.$draggable.on("touchmove",d),o.$draggable.on("touchend",d)}return r.prototype=Object.create(H5P.EventDispatcher.prototype),r.prototype.constructor=r,r.prototype.getIndex=function(){return this.index},r.prototype.setIndex=function(e){return this.index=e,this},r.prototype.getInitialIndex=function(){return this.initialIndex},r.prototype.hasInitialIndex=function(e){return this.initialIndex===e},r.prototype.appendDraggableTo=function(e){this.$draggable.detach().css({left:0,top:0}).appendTo(e)},r.prototype.revertDraggableTo=function(e){var t=this.$draggable.offset().left-e.offset().left,r=this.$draggable.offset().top-e.offset().top;this.$draggable.detach().prependTo(e).css({left:t,top:r}).animate({left:0,top:0})},r.prototype.toggleDroppedFeedback=function(e){e?this.$draggable.addClass(t):this.$draggable.removeClass(t)},r.prototype.disableDraggable=function(){this.$draggable.draggable({disabled:!0})},r.prototype.enableDraggable=function(){this.$draggable.draggable({disabled:!1})},r.prototype.getDraggableElement=function(){return this.$draggable},r.prototype.updateAriaLabel=function(e){this.$ariaLabel.html(e)},r.prototype.updateAriaDescription=function(e){this.$draggable.attr("aria-description",e)},r.prototype.getElement=function(){return this.$draggable.get(0)},r.prototype.removeFromZone=function(){var e=this.insideDropzone;return null!==this.insideDropzone&&(this.insideDropzone.removeFeedback(),this.insideDropzone.removeDraggable()),this.toggleDroppedFeedback(!1),this.removeShortFormat(),this.updateAriaDescription(""),this.insideDropzone=null,e},r.prototype.addToZone=function(e){null!==this.insideDropzone&&this.insideDropzone.removeDraggable(),this.toggleDroppedFeedback(!0),this.insideDropzone=e,this.setShortFormat(),this.trigger("addedToZone")},r.prototype.getAnswerText=function(){return this.text},r.prototype.setShortFormat=function(){this.$draggable.html(this.shortFormat)},r.prototype.getShortFormat=function(){return this.shortFormat},r.prototype.removeShortFormat=function(){this.$draggable.html(this.text)},r.prototype.getInsideDropzone=function(){return this.insideDropzone},r.prototype.isInsideDropZone=function(){return!!this.insideDropzone},r}(H5P.jQuery);const g=H5P.TextDraggable;H5P.TextDroppable=function(e){var t="h5p-drag-correct-feedback",r="h5p-drag-wrong-feedback",n="h5p-drag-draggable-correct",o="h5p-drag-draggable-wrong";function a(t,r,n,o,a,i,s,l){var h=this;h.text=t,h.tip=r,h.correctFeedback=n,h.incorrectFeedback=o,h.index=s,h.params=l,h.containedDraggable=null,h.$dropzone=e(a),h.$dropzoneContainer=e(i),h.tip&&(h.$tip=H5P.JoubelUI.createTip(h.tip,{tipLabel:h.params.tipLabel,tabcontrol:!0}),h.$dropzoneContainer.append(h.$tip),h.$dropzone.focus((function(){return h.$tip.attr("tabindex","0")})),h.$dropzone.blur((function(){return h.removeTipTabIndexIfNoFocus()})),h.$tip.blur((function(){return h.removeTipTabIndexIfNoFocus()}))),h.$incorrectText=e("<div/>",{html:h.params.incorrectText+" "+h.params.correctAnswer,class:"correct-answer"}),h.$correctText=e("<div/>",{html:h.params.correctText,class:"correct-answer"}),h.$showSolution=e("<div/>",{class:"h5p-drag-show-solution-container"}).appendTo(h.$dropzoneContainer).hide()}return a.prototype.removeTipTabIndexIfNoFocus=function(){var e=this;setTimeout((function(){e.$dropzone.is(":focus")||e.$tip.is(":focus")||e.$tip.attr("tabindex","-1")}),0)},a.prototype.showSolution=function(){var e=null!==this.containedDraggable&&this.containedDraggable.getAnswerText()===this.text;e||this.$showSolution.html(this.text),this.$showSolution.prepend(e?this.$correctText:this.$incorrectText),this.$showSolution.toggleClass("incorrect",!e),this.$showSolution.show()},a.prototype.hideSolution=function(){this.$showSolution.html(""),this.$showSolution.hide()},a.prototype.getElement=function(){return this.$dropzone.get(0)},a.prototype.appendDroppableTo=function(e){this.$dropzoneContainer.appendTo(e)},a.prototype.appendInsideDroppableTo=function(e){if(null!==this.containedDraggable)return this.containedDraggable.revertDraggableTo(e),this.containedDraggable},a.prototype.setDraggable=function(e){var t=this;t.containedDraggable!==e&&(null!==t.containedDraggable&&t.containedDraggable.removeFromZone(),t.containedDraggable=e,e.addToZone(t))},a.prototype.hasDraggable=function(){return!!this.containedDraggable},a.prototype.removeDraggable=function(){null!==this.containedDraggable&&(this.containedDraggable=null)},a.prototype.isCorrect=function(){return null!==this.containedDraggable&&this.containedDraggable.getAnswerText()===this.text},a.prototype.addFeedback=function(){this.isCorrect()?(this.$dropzone.removeClass(r).addClass(t),this.containedDraggable.getDraggableElement().removeClass(o).addClass(n)):null===this.containedDraggable?this.$dropzone.removeClass(r).removeClass(t):(this.$dropzone.removeClass(t).addClass(r),null!==this.containedDraggable&&this.containedDraggable.getDraggableElement().addClass(o).removeClass(n))},a.prototype.removeFeedback=function(){this.$dropzone.removeClass(r).removeClass(t),null!==this.containedDraggable&&this.containedDraggable.getDraggableElement().removeClass(o).removeClass(n)},a.prototype.hasFeedback=function(){return this.$dropzone.hasClass(r)||this.$dropzone.hasClass(t)},a.prototype.setShortFormat=function(){null!==this.containedDraggable&&this.containedDraggable.setShortFormat()},a.prototype.disableDropzoneAndContainedDraggable=function(){null!==this.containedDraggable&&this.containedDraggable.disableDraggable(),this.$dropzone.droppable({disabled:!0})},a.prototype.enableDropzone=function(){this.$dropzone.droppable({disabled:!1})},a.prototype.removeShortFormat=function(){null!==this.containedDraggable&&this.containedDraggable.removeShortFormat()},a.prototype.getDropzone=function(){return this.$dropzone},a.prototype.getIndex=function(){return this.index},a}(H5P.jQuery);const u=H5P.TextDroppable,b=function(e){const t=e.length;return function r(){const n=Array.prototype.slice.call(arguments,0);return n.length>=t?e.apply(null,n):function(){const e=Array.prototype.slice.call(arguments,0);return r.apply(null,n.concat(e))}}},m=(...e)=>e.reduce(((e,t)=>(...r)=>e(t(...r)))),f=b((function(e,t){t.forEach(e)})),v=(b((function(e,t){return t.map(e)})),b((function(e,t){return t.filter(e)}))),D=b((function(e,t){return t.some(e)})),y=b((function(e,t){return-1!=t.indexOf(e)})),E=b((function(e,t){return v((t=>!y(t,e)),t)})),w=b(((e,t)=>t.getAttribute(e))),x=b(((e,t,r)=>r.setAttribute(e,t))),T=b(((e,t)=>t.removeAttribute(e))),C=b(((e,t)=>t.hasAttribute(e))),A=b(((e,t,r)=>r.getAttribute(e)===t)),k=(b(((e,t)=>{const r=w(e,t);x(e,("true"!==r).toString(),t)})),b(((e,t)=>e.appendChild(t))),b(((e,t)=>t.querySelector(e))),b(((e,t)=>{return r=t.querySelectorAll(e),Array.prototype.slice.call(r);var r})),b(((e,t)=>e.removeChild(t))),b(((e,t)=>t.classList.contains(e))),b(((e,t)=>t.classList.add(e)))),F=b(((e,t)=>t.classList.remove(e))),S=k("hidden"),$=F("hidden"),I=(b(((e,t)=>(e?$:S)(t))),b(((e,t,r)=>{r.classList[t?"add":"remove"](e)})),T("tabindex")),z=(f(I),x("tabindex","0")),P=x("tabindex","-1"),B=C("tabindex");class L{constructor(e){Object.assign(this,{listeners:{},on:function(e,t,r){const n={listener:t,scope:r};return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(n),this},fire:function(e,t){return(this.listeners[e]||[]).every((function(e){return!1!==e.listener.call(e.scope||this,t)}))},propagate:function(e,t){let r=this;e.forEach((e=>t.on(e,(t=>r.fire(e,t)))))}}),this.plugins=e||[],this.elements=[],this.negativeTabIndexAllowed=!1,this.on("nextElement",this.nextElement,this),this.on("previousElement",this.previousElement,this),this.on("firstElement",this.firstElement,this),this.on("lastElement",this.lastElement,this),this.initPlugins()}addElement(e){this.elements.push(e),this.firesEvent("addElement",e),1===this.elements.length&&this.setTabbable(e)}insertElementAt(e,t){this.elements.splice(t,0,e),this.firesEvent("addElement",e),1===this.elements.length&&this.setTabbable(e)}removeElement(e){this.elements=E([e],this.elements),B(e)&&(this.setUntabbable(e),this.elements[0]&&this.setTabbable(this.elements[0])),this.firesEvent("removeElement",e)}count(){return this.elements.length}firesEvent(e,t){const r=this.elements.indexOf(t);return this.fire(e,{element:t,index:r,elements:this.elements,oldElement:this.tabbableElement})}nextElement({index:e}){const t=e===this.elements.length-1,r=this.elements[t?0:e+1];this.setTabbable(r),r.focus()}firstElement(){const e=this.elements[0];this.setTabbable(e),e.focus()}lastElement(){const e=this.elements[this.elements.length-1];this.setTabbable(e),e.focus()}setTabbableByIndex(e){const t=this.elements[e];t&&this.setTabbable(t)}setTabbable(e){f(this.setUntabbable.bind(this),this.elements),z(e),this.tabbableElement=e}setUntabbable(e){e!==document.activeElement&&(this.negativeTabIndexAllowed?P(e):I(e))}previousElement({index:e}){const t=0===e,r=this.elements[t?this.elements.length-1:e-1];this.setTabbable(r),r.focus()}useNegativeTabIndex(){this.negativeTabIndexAllowed=!0,this.elements.forEach((e=>{e.hasAttribute("tabindex")||P(e)}))}initPlugins(){this.plugins.forEach((function(e){void 0!==e.init&&e.init(this)}),this)}}const H="aria-grabbed",Z=x(H),W=A(H,"true"),R=v(C(H)),O=m(f(x(H,"false")),R),N=m(D(W),R);class j{init(e){this.controls=e,this.controls.on("select",this.select,this)}addElement(e){Z("false",e),this.controls.addElement(e)}setAllGrabbedToFalse(){O(this.controls.elements)}hasAnyGrabbed(){return N(this.controls.elements)}select({element:e}){const t=W(e);this.setAllGrabbedToFalse(),t||Z("true",e)}}const K="aria-dropeffect",M=x(K,"none"),X=x(K,"move"),_=v(C(K)),Q=m(f(X),_),U=m(f(M),_);class V{init(e){this.controls=e}setAllToMove(){Q(this.controls.elements)}setAllToNone(){U(this.controls.elements)}}V.DropEffect={COPY:"copy",MOVE:"move",EXECUTE:"execute",POPUP:"popup",NONE:"none"};class G{constructor(){this.selectability=!0}init(e){this.boundHandleKeyDown=this.handleKeyDown.bind(this),this.controls=e,this.controls.on("addElement",this.listenForKeyDown,this),this.controls.on("removeElement",this.removeKeyDownListener,this)}listenForKeyDown({element:e}){e.addEventListener("keydown",this.boundHandleKeyDown)}removeKeyDownListener({element:e}){e.removeEventListener("keydown",this.boundHandleKeyDown)}handleKeyDown(e){switch(e.which){case 27:this.close(e.target),e.preventDefault(),e.stopPropagation();break;case 35:this.lastElement(e.target),e.preventDefault(),e.stopPropagation();break;case 36:this.firstElement(e.target),e.preventDefault(),e.stopPropagation();break;case 13:case 32:this.select(e.target),e.preventDefault(),e.stopPropagation();break;case 37:case 38:this.hasChromevoxModifiers(e)||(this.previousElement(e.target),e.preventDefault(),e.stopPropagation());break;case 39:case 40:this.hasChromevoxModifiers(e)||(this.nextElement(e.target),e.preventDefault(),e.stopPropagation())}}hasChromevoxModifiers(e){return e.shiftKey||e.ctrlKey}previousElement(e){!1!==this.controls.firesEvent("beforePreviousElement",e)&&(this.controls.firesEvent("previousElement",e),this.controls.firesEvent("afterPreviousElement",e))}nextElement(e){!1!==this.controls.firesEvent("beforeNextElement",e)&&(this.controls.firesEvent("nextElement",e),this.controls.firesEvent("afterNextElement",e))}select(e){this.selectability&&!1!==this.controls.firesEvent("before-select",e)&&(this.controls.firesEvent("select",e),this.controls.firesEvent("after-select",e))}firstElement(e){!1!==this.controls.firesEvent("beforeFirstElement",e)&&(this.controls.firesEvent("firstElement",e),this.controls.firesEvent("afterFirstElement",e))}lastElement(e){!1!==this.controls.firesEvent("beforeLastElement",e)&&(this.controls.firesEvent("lastElement",e),this.controls.firesEvent("afterLastElement",e))}disableSelectability(){this.selectability=!1}enableSelectability(){this.selectability=!0}close(e){!1!==this.controls.firesEvent("before-close",e)&&(this.controls.firesEvent("close",e),this.controls.firesEvent("after-close",e))}}class q{constructor(){this.selectability=!0,this.handleClickBound=this.handleClick.bind(this),this.handleDragBound=this.handleDrag.bind(this)}init(e){this.controls=e,this.controls.on("addElement",this.listenForKeyDown,this),this.controls.on("removeElement",this.unlistenForKeyDown,this)}listenForKeyDown({element:e}){e.addEventListener("click",this.handleClickBound),e.addEventListener("drag",this.handleClickBound)}unlistenForKeyDown({element:e}){e.removeEventListener("click",this.handleClickBound),e.removeEventListener("drag",this.handleDragBound)}handleClick(e){this.controls.firesEvent("select",e.currentTarget)}handleDrag(e){this.controls.firesEvent("drag",e.currentTarget)}disableSelectability(){this.selectability=!1}enableSelectability(){this.selectability=!0}}H5P.DragText=function(e,t,r){var n="h5p-drag-wide-screen",o="h5p-drag-draggable-wide-screen";function a(r,n,o){var a=this;this.$=e(this),this.contentId=n,this.contentData=o,t.call(this,"drag-text"),this.params=e.extend(!0,{media:{},taskDescription:"Set in adjectives in the following sentence",textField:"This is a *nice*, *flexible* content type, which allows you to highlight all the *wonderful* words in this *exciting* sentence.\nThis is another line of *fantastic* text.",distractors:"",overallFeedback:[],checkAnswer:"Check",submitAnswer:"Submit",tryAgain:"Retry",behaviour:{enableRetry:!0,enableSolutionsButton:!0,enableCheckButton:!0,instantFeedback:!1},showSolution:"Show solution",dropZoneIndex:"Drop Zone @index.",empty:"Empty.",contains:"Drop Zone @index contains draggable @draggable.",ariaDraggableIndex:"@index of @count.",tipLabel:"Show tip",correctText:"Correct!",incorrectText:"Incorrect!",resetDropTitle:"Reset drop",resetDropDescription:"Are you sure you want to reset this drop zone?",grabbed:"Draggable is grabbed.",cancelledDragging:"Cancelled dragging.",correctAnswer:"Correct answer:",scoreBarLabel:"You got :num out of :total points",a11yCheck:"Check the answers. The responses will be marked as correct, incorrect, or unanswered.",a11yShowSolution:"Show the solution. The task will be marked with its correct solution.",a11yRetry:"Retry the task. Reset all responses and start the task over again."},r),this.contentData=o,void 0!==this.contentData&&void 0!==this.contentData.previousState&&void 0!==this.contentData.previousState.length&&(this.previousState=this.contentData.previousState),this.answered=!1,this.textFieldHtml=this.params.textField.replace(/(\r\n|\n|\r)/gm,"<br/>"),this.distractorsHtml=this.params.distractors.replace(/(\r\n|\n|\r)/gm,"<br/>"),this.introductionId="h5p-drag-text-"+n+"-introduction",this.selectedElement=void 0,this.ariaDragControls=new j,this.ariaDropControls=new V,this.dragControls=new L([new G,new q,this.ariaDragControls]),this.dragControls.useNegativeTabIndex(),this.dropControls=new L([new G,new q,this.ariaDropControls]),this.dropControls.useNegativeTabIndex(),this.dragControls.on("before-select",(function(e){return!a.isElementDisabled(e.element)})),this.dragControls.on("select",this.keyboardDraggableSelected,this),this.dropControls.on("select",this.keyboardDroppableSelected,this),this.on("start",this.addAllDroppablesToControls,this),this.on("revert",this.removeControlsFromEmptyDropZones,this),this.on("stop",(function(e){e.data.target||a.removeControlsFromDropZonesIfAllEmpty()}),this),this.on("drop",this.removeControlsFromEmptyDropZones,this),this.on("start",(function(e){var t=e.data.element,r=a.getDraggableByElement(t);a.toggleDropEffect(),t.setAttribute("aria-grabbed","true"),a.setDraggableAriaLabel(r)})),this.on("stop",(function(e){var t=e.data.element,r=a.getDraggableByElement(t);a.toggleDropEffect(),t.setAttribute("aria-grabbed","false"),a.setDraggableAriaLabel(r)})),this.on("drop",this.ariaDropControls.setAllToNone,this.ariaDropControls),this.on("drop",(function(e){this.dragControls.removeElement(e.data.element)}),this),this.on("revert",(function(e){this.dragControls.insertElementAt(e.data.element,0)}),this),this.on("drop",this.updateDroppableElement,this),this.on("revert",this.updateDroppableElement,this),this.initDragText(),this.stopWatch=new c,this.stopWatch.start(),this.on("resize",this.resize,this),this.on("revert",this.toggleDraggablesContainer,this),this.on("drop",this.toggleDraggablesContainer,this),this.on("stop",(function(e){e.data.target||a.read(a.params.cancelledDragging)})),this.params.behaviour.instantFeedback&&this.on("revert",(function(){return a.instantFeedbackEvaluation()}))}return a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.prototype.updateDroppableElement=function(e){var t=e.data.target,r=e.data.element,n=this.getDroppableByElement(t);t&&this.setDroppableLabel(t,r.textContent,n.getIndex())},a.prototype.removeControlsFromDropZonesIfAllEmpty=function(){this.anyDropZoneHasDraggable()||this.removeAllDroppablesFromControls()},a.prototype.removeControlsFromEmptyDropZones=function(){var e=this;this.droppables.filter((function(e){return!e.hasDraggable()})).map((function(e){return e.getElement()})).forEach((function(t){e.dropControls.removeElement(t)}))},a.prototype.addAllDroppablesToControls=function(){var e=this;this.dropControls.count()>0&&this.removeAllDroppablesFromControls(),this.droppables.map((function(e){return e.getElement()})).forEach((function(t){return e.dropControls.addElement(t)}))},a.prototype.removeAllDroppablesFromControls=function(){var e=this;this.droppables.map((function(e){return e.getElement()})).forEach((function(t){return e.dropControls.removeElement(t)}))},a.prototype.anyDropZoneHasDraggable=function(){return this.droppables.some((function(e){return e.hasDraggable()}))},a.prototype.setDroppableLabel=function(e,t,r){this.params.dropZoneIndex.replace("@index",r.toString());var n=e.classList.contains("h5p-drag-correct-feedback"),o=e.classList.contains("h5p-drag-wrong-feedback"),a=n||o,i=e.childNodes.length>0;if(e){var s;if(a){var l,h=this.getDroppableByElement(e);l=n?h.correctFeedback?h.correctFeedback:this.params.correctText:h.incorrectFeedback?h.incorrectFeedback:this.params.incorrectText,s="".concat(this.params.contains.replace("@index",r.toString()).replace("@draggable",t)," ").concat(l,"."),h&&h.containedDraggable&&h.containedDraggable.updateAriaDescription(n?this.params.correctText:this.params.incorrectText)}else s="".concat(i?this.params.contains.replace("@index",r.toString()).replace("@draggable",t):this.params.empty.replace("@index",r.toString()));e.setAttribute("aria-label",s)}},a.prototype.registerDomElements=function(){var t=this.params.media;if(t&&t.type&&t.type.library){var r=(t=t.type).library.split(" ")[0];"H5P.Image"===r?t.params.file&&this.setImage(t.params.file.path,{disableImageZooming:this.params.media.disableImageZooming||!1,alt:t.params.alt,title:t.params.title,expandImage:t.params.expandImage,minimizeImage:t.params.minimizeImage}):"H5P.Video"===r?t.params.sources&&this.setVideo(t):"H5P.Audio"===r&&t.params.files&&this.setAudio(t)}this.$introduction=e('<p id="'+this.introductionId+'">'+this.params.taskDescription+"</p>"),this.setIntroduction(this.$introduction),this.$introduction.parent().attr("tabindex","-1"),this.setContent(this.$inner),this.addButtons()},a.prototype.initDragText=function(){return this.$inner=e("<div/>",{"aria-describedby":this.introductionId,class:"h5p-drag-inner"}),this.addTaskTo(this.$inner),this.setH5PUserState(),this.$inner},a.prototype.resize=function(){this.changeLayoutToFitWidth()},a.prototype.changeLayoutToFitWidth=function(){var e=this;e.addDropzoneWidth(),e.$inner.width()/parseFloat(e.$inner.css("font-size"),10)>43&&e.widestDraggable<=e.$inner.width()/3?(e.$draggables.addClass(n),e.$wordContainer.detach().appendTo(e.$taskContainer),e.draggables.forEach((function(e){e.getDraggableElement().addClass(o)})),e.$wordContainer.css({"margin-right":e.$draggables.width()})):(e.$wordContainer.css({"margin-right":0}),e.$draggables.removeClass(n),e.$draggables.detach().appendTo(e.$taskContainer),e.draggables.forEach((function(e){e.getDraggableElement().removeClass(o)})))},a.prototype.addButtons=function(){var e=this;e.params.behaviour.enableCheckButton&&e.addButton("check-answer",e.params.checkAnswer,(function(){e.answered=!0,e.removeAllElementsFromDragControl(),e.showEvaluation()?(e.hideButton("show-solution"),e.hideButton("try-again"),e.hideButton("check-answer")):(e.params.behaviour.enableRetry&&e.showButton("try-again"),e.params.behaviour.enableSolutionsButton&&e.showButton("show-solution"),e.hideButton("check-answer"),e.disableDraggables()),e.$introduction.parent().focus()}),!e.params.behaviour.instantFeedback,{"aria-label":e.params.a11yCheck},{contentData:e.contentData,textIfSubmitting:e.params.submitAnswer}),e.addButton("show-solution",e.params.showSolution,(function(){e.droppables.forEach((function(e){e.showSolution()})),e.draggables.forEach((function(t){return e.setDraggableAriaLabel(t)})),e.disableDraggables(),e.removeAllDroppablesFromControls(),e.hideButton("show-solution")}),e.initShowShowSolutionButton||!1,{"aria-label":e.params.a11yShowSolution}),e.addButton("try-again",e.params.tryAgain,(function(){e.answered&&e.resetDraggables(),e.answered=!1,e.hideEvaluation(),e.hideExplanation(),e.hideButton("try-again"),e.hideButton("show-solution"),e.params.behaviour.instantFeedback?e.enableAllDropzonesAndDraggables():(e.showButton("check-answer"),e.enableDraggables()),e.hideAllSolutions(),e.stopWatch.reset(),e.read(e.params.taskDescription)}),e.initShowTryAgainButton||!1,{"aria-label":e.params.a11yRetry})},a.prototype.removeAllElementsFromDragControl=function(){var e=this;this.dragControls.elements.forEach((function(t){return e.dragControls.removeElement(t)}))},a.prototype.keyboardDraggableSelected=function(e){var t=this.selectedElement,r=void 0!==this.selectedElement,n=this.selectedElement===e.element;r&&(this.selectedElement=void 0,this.trigger("stop",{element:t})),r&&n||this.isElementDisabled(e.element)||(this.selectedElement=e.element,this.trigger("start",{element:e.element}),this.focusOnFirstEmptyDropZone())},a.prototype.focusOnFirstEmptyDropZone=function(){var e=this.droppables.filter((function(e){return!e.hasDraggable()}))[0].getElement();this.dropControls.setTabbable(e),e.focus()},a.prototype.isElementDisabled=function(e){return"true"===e.getAttribute("aria-disabled")},a.prototype.keyboardDroppableSelected=function(e){var t=this,r=e.element,n=t.getDroppableByElement(r),o=t.getDraggableByElement(this.selectedElement),a=this.params.behaviour.instantFeedback&&n&&n.isCorrect(),i=!this.params.behaviour.instantFeedback&&n.hasFeedback();if(o&&n&&!a){var s=t.selectedElement;t.drop(o,n),t.selectedElement=void 0,this.trigger("stop",{element:s,target:n.getElement()})}else if(n&&n.hasDraggable()&&!i&&!a){var l=r.querySelector("[aria-grabbed]");this.createConfirmResetDialog((function(){t.revert(t.getDraggableByElement(l))})).show()}},a.prototype.toggleDraggablesContainer=function(){var e=0===this.$draggables.children().length;this.$draggables.toggleClass("hide",e)},a.prototype.createConfirmResetDialog=function(e,t){var n=new r({headerText:this.params.resetDropTitle,dialogText:this.params.resetDropDescription});return n.appendTo(document.body),n.on("confirmed",e,t||this),n},a.prototype.showDropzoneFeedback=function(){var e=this;this.droppables.forEach((function(t){t.addFeedback();var r=t.containedDraggable;t&&r&&(e.setDroppableLabel(t.getElement(),r.getElement().textContent,t.getIndex()),e.setDraggableAriaLabel(r))}))},a.prototype.showExplanation=function(){var e=[];this.droppables.forEach((function(t){var r=t.containedDraggable;t&&r&&(t.isCorrect()&&t.correctFeedback&&e.push({correct:r.text,text:t.correctFeedback}),!t.isCorrect()&&t.incorrectFeedback&&e.push({correct:t.text,wrong:r.text,text:t.incorrectFeedback}))})),0!==e.length&&this.setExplanation(e,this.params.feedbackHeader)},a.prototype.showEvaluation=function(e){this.hideEvaluation(),this.showDropzoneFeedback(),this.showExplanation();var t=this.calculateScore(),r=this.droppables.length;if(!e){var n=this.createXAPIEventTemplate("answered");this.addQuestionToXAPI(n),this.addResponseToXAPI(n),this.trigger(n)}var o=H5P.Question.determineOverallFeedback(this.params.overallFeedback,t/r).replace(/@score/g,t.toString()).replace(/@total/g,r.toString());return t===r&&(this.hideButton("check-answer"),this.hideButton("show-solution"),this.hideButton("try-again"),this.disableDraggables()),this.trigger("resize"),this.setFeedback(o,t,r,this.params.scoreBarLabel),t===r},a.prototype.calculateScore=function(){return this.droppables.reduce((function(e,t){return e+(t.isCorrect()?1:0)}),0)},a.prototype.hideEvaluation=function(){this.removeFeedback(),this.trigger("resize")},a.prototype.hideExplanation=function(){this.setExplanation(),this.trigger("resize")},a.prototype.hideAllSolutions=function(){this.droppables.forEach((function(e){e.hideSolution()})),this.trigger("resize")},a.prototype.addTaskTo=function(t){var r=this;r.widest=0,r.widestDraggable=0,r.droppables=[],r.draggables=[],r.$taskContainer=e("<div/>",{class:"h5p-drag-task"}),r.$draggables=e("<div/>",{class:"h5p-drag-draggables-container"}),r.$wordContainer=e("<div/>",{class:"h5p-drag-droppable-words"}),l(r.textFieldHtml).forEach((function(e){if(r.isAnswerPart(e)){var t=h(e);r.createDraggable(t.text),r.createDroppable(t.text,t.tip,t.correctFeedback,t.incorrectFeedback)}else{var n=s.createElementWithTextPart(e);r.$wordContainer.append(n)}})),l(r.distractorsHtml).forEach((function(e){""!==e.trim()&&"*"===e.substring(0,1)&&"*"===e.substring(e.length-1,e.length)&&(e=h(e),r.createDraggable(e.text))})),r.shuffleAndAddDraggables(r.$draggables),r.$draggables.appendTo(r.$taskContainer),r.$wordContainer.appendTo(r.$taskContainer),r.$taskContainer.appendTo(t),r.addDropzoneWidth()},a.prototype.isAnswerPart=function(e){return s.startsWith("*",e)&&s.endsWith("*",e)},a.prototype.addDropzoneWidth=function(){var e=this,t=0,r=0,n=parseInt(this.$inner.css("font-size"),10),o=3*n,a=n;this.draggables.forEach((function(e){var n=e.getDraggableElement(),o=n.clone().css({position:"absolute","white-space":"nowrap",width:"auto",padding:0,margin:0}).html(e.getAnswerText()).appendTo(n.parent()),i=o.outerWidth();r=i>r?i:r,o.text().length>=20&&(o.html(e.getShortFormat()),i=o.width()),i+a>t&&(t=i+a),o.remove()})),t<o&&(t=o),this.widestDraggable=r,this.widest=t,this.droppables.forEach((function(t){t.getDropzone().width(e.widest)}))},a.prototype.createDraggable=function(t){var r=this,n=e("<div/>",{html:"<span>".concat(t,"</span>"),role:"button","aria-grabbed":"false",tabindex:"-1"}).draggable({revert:function(e){return e||r.revert(o),!1},drag:r.propagateDragEvent("drag",r),start:r.propagateDragEvent("start",r),stop:function(e){r.trigger("stop",{element:o.getElement(),target:e.target})},containment:r.$taskContainer}).append(e("<span>",{class:"h5p-hidden-read"})),o=new g(t,n,r.draggables.length);return o.on("addedToZone",(function(){r.triggerXAPI("interacted")})),r.draggables.push(o),o},a.prototype.createDroppable=function(t,r,n,o){var a=this,i=this.draggables.length,s=e("<div/>",{class:"h5p-drag-dropzone-container"}),l=e("<div/>",{"aria-dropeffect":"none","aria-label":this.params.dropZoneIndex.replace("@index",i.toString())+" "+this.params.empty.replace("@index",i.toString()),tabindex:"-1"}).appendTo(s).droppable({tolerance:"pointer",drop:function(e,t){var r=a.getDraggableByElement(t.draggable[0]),n=a.getDroppableByElement(e.target);r&&n&&a.drop(r,n)}}),h=new u(t,r,n,o,l,s,i,a.params);return h.appendDroppableTo(a.$wordContainer),a.droppables.push(h),h},a.prototype.propagateDragEvent=s.curry((function(e,t,r){t.trigger(e,{element:r.target})})),a.prototype.revert=function(e){var t=e.removeFromZone(),r=t?t.getElement():void 0;e.revertDraggableTo(this.$draggables),this.setDraggableAriaLabel(e),this.trigger("revert",{element:e.getElement(),target:r}),this.trigger("resize")},a.prototype.drop=function(e,t){var r=this;r.answered=!0,e.removeFromZone();var n=t.appendInsideDroppableTo(this.$draggables);n&&r.trigger("revert",{element:n.getElement(),target:t.getElement()}),t.setDraggable(e),e.appendDraggableTo(t.getDropzone()),r.params.behaviour.instantFeedback&&(t.addFeedback(),r.instantFeedbackEvaluation(),r.params.behaviour.enableRetry&&!t.isCorrect()||t.disableDropzoneAndContainedDraggable()),this.trigger("drop",{element:e.getElement(),target:t.getElement()}),this.trigger("resize"),t.getElement().focus()},a.prototype.shuffleAndAddDraggables=function(e){var t=this;return s.shuffle(this.draggables).map((function(e,t){return e.setIndex(t)})).map((function(r){return t.addDraggableToContainer(e,r)})).map((function(e){return t.setDraggableAriaLabel(e)})).map((function(e){return t.addDraggableToControls(t.dragControls,e)}))},a.prototype.setDraggableAriaLabel=function(e){return e.updateAriaLabel(this.params.ariaDraggableIndex.replace("@index",(e.getIndex()+1).toString()).replace("@count",this.draggables.length.toString())),e},a.prototype.isGrabbed=function(e){return"true"===e.getAttribute("aria-grabbed")},a.prototype.addDraggableToContainer=function(e,t){return t.appendDraggableTo(e),t},a.prototype.addDraggableToControls=function(e,t){return e.addElement(t.getElement()),t},a.prototype.instantFeedbackEvaluation=function(){var e=this;e.isAllAnswersFilled()?(e.params.behaviour.enableSolutionsButton&&e.showButton("show-solution"),e.params.behaviour.enableRetry&&e.showButton("try-again"),e.showEvaluation()):(e.hideButton("try-again"),e.hideButton("show-solution"),e.hideEvaluation())},a.prototype.isAllAnswersFilled=function(){return this.droppables.every((function(e){return e.hasDraggable()}))},a.prototype.enableAllDropzonesAndDraggables=function(){this.enableDraggables(),this.droppables.forEach((function(e){e.enableDropzone()}))},a.prototype.disableDraggables=function(){this.draggables.forEach((function(e){e.disableDraggable()}))},a.prototype.enableDraggables=function(){this.draggables.forEach((function(e){e.enableDraggable()}))},a.prototype.getAnswerGiven=function(){return this.answered},a.prototype.getScore=function(){return this.calculateScore()},a.prototype.getMaxScore=function(){return this.droppables.length},a.prototype.getTitle=function(){return H5P.createTitle(this.contentData&&this.contentData.metadata&&this.contentData.metadata.title?this.contentData.metadata.title:"Drag the Words")},a.prototype.toggleDropEffect=function(){var e=void 0!==this.selectedElement;this.ariaDropControls[e?"setAllToMove":"setAllToNone"]()},a.prototype.getDraggableByElement=function(e){return this.draggables.filter((function(t){return t.$draggable.get(0)===e}),this)[0]},a.prototype.getDroppableByElement=function(e){return this.droppables.filter((function(t){return t.$dropzone.get(0)===e}),this)[0]},a.prototype.showSolutions=function(){this.showEvaluation(!0),this.droppables.forEach((function(e){e.addFeedback(),e.showSolution()})),this.removeAllDroppablesFromControls(),this.disableDraggables(),this.hideButton("try-again"),this.hideButton("show-solution"),this.hideButton("check-answer"),this.trigger("resize")},a.prototype.resetTask=function(){var e=this;e.answered=!1,e.resetDraggables(),e.hideEvaluation(),e.hideExplanation(),e.enableAllDropzonesAndDraggables(),e.hideButton("try-again"),e.hideButton("show-solution"),e.params.behaviour.instantFeedback||e.showButton("check-answer"),e.hideAllSolutions(),this.trigger("resize")},a.prototype.resetDraggables=function(){s.shuffle(this.draggables).forEach(this.revert,this)},a.prototype.getCurrentState=function(){var e=this;if(void 0!==this.draggables)return this.draggables.filter((function(e){return null!==e.getInsideDropzone()})).map((function(t){return{draggable:t.getInitialIndex(),droppable:e.droppables.indexOf(t.getInsideDropzone())}}))},a.prototype.setH5PUserState=function(){var e=this,t=this;void 0!==this.previousState&&(this.previousState.forEach((function(r){if(!t.isValidIndex(r.draggable)||!t.isValidIndex(r.droppable))throw new Error("Stored user state is invalid");var n=e.getDraggableByInitialIndex(r.draggable),o=t.droppables[r.droppable];t.drop(n,o),t.params.behaviour.instantFeedback&&(null!==o&&o.addFeedback(),o.isCorrect()&&o.disableDropzoneAndContainedDraggable())})),t.params.behaviour.instantFeedback&&t.isAllAnswersFilled()&&!t.showEvaluation()&&(t.params.behaviour.enableSolutionsButton&&(t.initShowShowSolutionButton=!0),t.params.behaviour.enableRetry&&(t.initShowTryAgainButton=!0)))},a.prototype.isValidIndex=function(e){return!isNaN(e)&&e<this.draggables.length&&e>=0},a.prototype.getDraggableByInitialIndex=function(e){return this.draggables.filter((function(t){return t.hasInitialIndex(e)}))[0]},a.prototype.getXAPIData=function(){var e=this.createXAPIEventTemplate("answered");return this.addQuestionToXAPI(e),this.addResponseToXAPI(e),{statement:e.data.statement}},a.prototype.addQuestionToXAPI=function(t){var r=t.getVerifiedStatementValue(["object","definition"]);e.extend(r,this.getxAPIDefinition())},a.prototype.getxAPIDefinition=function(){var e={interactionType:"fill-in",type:"http://adlnet.gov/expapi/activities/cmi.interaction"},t=this.textFieldHtml,r=this.params.taskDescription+"<br/>";return e.description={"en-US":r+this.replaceSolutionsWithBlanks(t)},e.correctResponsesPattern=[this.getSolutionsFromQuestion(t)],e},a.prototype.addResponseToXAPI=function(e){var t,r=this,n=r.getScore(),o=r.droppables.length;e.setScoredResult(n,o,r);var a={min:0,raw:n,max:o,scaled:Math.round(n/o*1e4)/1e4};r.stopWatch&&(t="PT"+r.stopWatch.stop()+"S"),e.data.statement.result={response:r.getXAPIResponse(),score:a,duration:t,completion:!0}},a.prototype.getXAPIResponse=function(){return this.droppables.map((function(e){return e.hasDraggable()?e.containedDraggable.text:""})).join("[,]")},a.prototype.replaceSolutionsWithBlanks=function(e){var t=this;return l(e).map((function(e){return t.isAnswerPart(e)?"__________":e})).join("")},a.prototype.getSolutionsFromQuestion=function(e){return l(e).filter(this.isAnswerPart).map((function(e){return h(e)})).map((function(e){return e.text})).join("[,]")},a.prototype.parseText=function(e){return l(e)},a}(H5P.jQuery,H5P.Question,H5P.ConfirmationDialog),H5P.DragText.parseText=function(e){return l(e).map((function(e){return function(e){return s.startsWith("*",e)&&s.endsWith("*",e)}(e)?{type:"answer",correct:h(e).text}:{type:"text",content:e}}))};const Y=H5P.DragText},428:(e,t,r)=>{"use strict";r.r(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(428),H5P=H5P||{},H5P.DragText=r(568).Z})();