(function(t){function e(e){for(var c,n,i=e[0],o=e[1],d=e[2],u=0,k=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&k.push(s[n][0]),s[n]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);l&&l(e);while(k.length)k.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],c=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(c=!1)}c&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var c={},s={app:0},r=[];function n(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=c,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(a,c,function(e){return t[e]}.bind(null,c));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2fd9":function(t,e,a){t.exports=a.p+"img/diamonds.c425ba06.svg"},"31e8":function(t,e,a){var c={"./clubs.svg":"bf20","./diamonds.svg":"2fd9","./dots.svg":"4a85","./hearts.svg":"6e1a","./question.svg":"8bbe","./reload.svg":"b318","./replay.svg":"4729","./spades.svg":"a3b0","./sv-flag.svg":"830e","./uk-flag.svg":"f325"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}s.keys=function(){return Object.keys(c)},s.resolve=r,t.exports=s,s.id="31e8"},3619:function(t,e,a){"use strict";a("f255")},4729:function(t,e,a){t.exports=a.p+"img/replay.bc0ec2b5.svg"},"49f8":function(t,e,a){var c={"./en.json":"edd4","./sv.json":"4c5b"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}s.keys=function(){return Object.keys(c)},s.resolve=r,t.exports=s,s.id="49f8"},"4a85":function(t,e,a){t.exports=a.p+"img/dots.da19a425.svg"},"4c5b":function(t){t.exports=JSON.parse('{"instructions":{"title":"Instruktioner","body":"En patiens där målet är att sluta med fyra äss i högarna. Patiensen börjar med 4 slumpade kort i varsin hög. Kort som har högre valör slår ut andra kort i samma färg. Det översta kortet från vilken hög som helst kan flyttas till en tom hög."},"winner":{"title":"Du vinner!","body":"Vill du spela en gång till?","yes":"ja"}}')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar",{on:{clickRestart:t.restartGame,clickedOnQuestion:t.openTheModal}}),a("transition",{attrs:{name:"fade"}},[t.modalOpen?a("base-modal",{on:{clickedModalBg:t.closeTheModal}}):t._e()],1),a("section",{staticClass:"wrapper top-wrapper"},[a("deck-stack",{staticClass:"stacked",attrs:{deckStack:t.deckStack1,id:1,stack:"true"},on:{cardClick2:t.moveToBin,oldArrayId:t.logOldArrayId,droppedCard:t.moveCardToNewArray}}),a("deck-stack",{staticClass:"stacked",attrs:{deckStack:t.deckStack2,id:2,stack:"true"},on:{cardClick2:t.moveToBin,oldArrayId:t.logOldArrayId,droppedCard:t.moveCardToNewArray}}),a("deck-stack",{staticClass:"stacked",attrs:{deckStack:t.deckStack3,id:3,stack:"true"},on:{cardClick2:t.moveToBin,oldArrayId:t.logOldArrayId,droppedCard:t.moveCardToNewArray}}),a("deck-stack",{staticClass:"stacked",attrs:{deckStack:t.deckStack4,id:4,stack:"true"},on:{cardClick2:t.moveToBin,oldArrayId:t.logOldArrayId,droppedCard:t.moveCardToNewArray}})],1),a("section",{staticClass:"wrapper"},[a("deck-stack",{staticClass:"one-stack",attrs:{deckStack:t.lastUsedItem,id:5}}),a("deck-stack",{staticClass:"one-stack",attrs:{deckStack:t.deck,id:6,cardBack:"true"},nativeOn:{click:function(e){return t.draw4cards(e)}}})],1),a("transition",{attrs:{name:"fade"}},[t.winnerAlertOpen?a("winner-alert",{on:{clickRestart:t.restartGame}}):t._e()],1)],1)},r=[],n=(a("7db0"),a("caad"),a("d81d"),a("fb6a"),a("a434"),a("2532"),a("3835")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"section",on:{click:t.closeModal}},[a("article",[a("h3",[t._v(t._s(t.$t("instructions.title")))]),a("p",[t._v(t._s(t.$t("instructions.body")))])])])},o=[],d={methods:{closeModal:function(t){t.target===this.$refs.section&&this.$emit("clickedModalBg")}}},l=d,u=(a("afc8"),a("2877")),k=Object(u["a"])(l,i,o,!1,null,"08d1fb20",null),h=k.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0===t.deckStack.length?a("section",{staticClass:"empty",on:{dragover:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.dropCard(e)}}}):a("section",{on:{click:t.clickedDeck}},t._l(t.deckStack,(function(e){return a("base-card",{key:e.id,class:{cardback:t.cardBack,stacking:t.stack},attrs:{card:e,deckId:t.id},on:{cardClick:t.emitCardInfo,oldArrayId:t.setOldDeckId}})})),1)},p=[],v=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"card",attrs:{draggable:t.draggable},on:{click:t.emitValue,dragstart:t.dragStart,dragend:t.dragEnd,dragover:function(t){t.stopPropagation()}}},[a("section",{staticClass:"top"},[a("img",{staticClass:"img-top",attrs:{src:t.cardImage,alt:""}}),a("p",[t._v(t._s(t.cardValue))])]),a("img",{staticClass:"img-middle",attrs:{src:t.cardImage,alt:""}}),a("section",{staticClass:"bottom"},[a("img",{staticClass:"img-bottom",attrs:{src:t.cardImage,alt:""}}),a("p",[t._v(t._s(t.cardValue))])])])}),g=[],m={props:{card:Object,deckId:Number},data:function(){return{draggable:!0}},computed:{cardValue:function(){switch(this.card.value){case 14:case 1:return"A";case 11:return"J";case 12:return"Q";case 13:return"K";default:return this.card.value}},cardImage:function(){return a("31e8")("./".concat(this.card.suite,".svg"))}},methods:{emitValue:function(){this.$emit("cardClick",this.card)},dragStart:function(t){var e=this.card.id,a=t.target;this.$emit("oldArrayId",this.deckId),t.dataTransfer.setData("card-id",e),setTimeout((function(){a.style.display="none"}),0)},dragEnd:function(t){var e=t.target;e.style.display="flex"}}},b=m,y=(a("695f"),Object(u["a"])(b,v,g,!1,null,"65b5eaec",null)),S=y.exports,C={components:{BaseCard:S},props:{deckStack:{type:Array},id:{type:Number},cardBack:{type:String},stack:{type:String}},methods:{emitCardInfo:function(t){this.$emit("cardClick2",t)},clickedDeck:function(){this.$emit("clickedOnDeck")},dropCard:function(t){var e=t.dataTransfer.getData("card-id");this.$emit("droppedCard",{array:this.id,cardId:e})},setOldDeckId:function(t){this.$emit("oldArrayId",t)}}},O=C,w=(a("c548"),Object(u["a"])(O,f,p,!1,null,"2dbc5b00",null)),_=w.exports,A=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("nav",[c("span",{staticClass:"bg-color",on:{click:t.reloadGame}},[c("img",{attrs:{src:a("b318"),alt:"reload arrow"}})]),c("div",[c("span",{staticClass:"flag",class:{activeLang:t.enActive},on:{click:t.langEn}},[c("img",{attrs:{src:a("f325"),alt:"uk flag"}})]),c("span",{staticClass:"flag",class:{activeLang:t.svActive},on:{click:t.langSv}},[c("img",{attrs:{src:a("830e"),alt:"Swedish flag"}})]),c("span",{staticClass:"bg-color",on:{click:t.openModal}},[c("img",{staticClass:"instructions ",attrs:{src:a("8bbe"),alt:"question - show instructions"}})])])])},I=[],D={data:function(){return{enActive:!0,svActive:!1}},computed:{lang:function(){return this.$root.$i18n.locale}},methods:{reloadGame:function(){this.$emit("clickRestart")},openModal:function(){this.$emit("clickedOnQuestion")},langEn:function(){this.$root.$i18n.locale="en",this.svActive=!1,this.enActive=!0},langSv:function(){this.$root.$i18n.locale="sv",this.svActive=!0,this.enActive=!1}}},$=D,x=(a("e94f"),Object(u["a"])($,A,I,!1,null,"53c0e23e",null)),j=x.exports,T=0;function M(){for(var t=["hearts","diamonds","clubs","spades"],e=[],a=0,c=t;a<c.length;a++)for(var s=c[a],r=2;r<=14;r++)e.push(E(s,r));return console.log(e),e}function E(t,e){return{id:T++,suite:t,value:e}}function N(t){return t.sort((function(){return Math.random()-.5}))}var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",[a("h2",[t._v(t._s(t.$t("winner.title")))]),a("p",[t._v(t._s(t.$t("winner.body")))]),a("button",{on:{click:t.reloadGame}},[t._v(t._s(t.$t("winner.yes")))])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pyro"},[a("div",{staticClass:"before"}),a("div",{staticClass:"after"})])}],G={methods:{reloadGame:function(){this.$emit("clickRestart")}}},U=G,V=(a("3619"),Object(u["a"])(U,B,P,!1,null,"3fea00ae",null)),J=V.exports,L={components:{DeckStack:_,NavBar:j,BaseModal:h,WinnerAlert:J},data:function(){return{totalDeck:[],deck:[],deckStack1:[],deckStack2:[],deckStack3:[],deckStack4:[],usedDeck:[],oldArrayId:null,modalOpen:!1}},created:function(){this.deck=M(),this.totalDeck=this.deck.map((function(t){return t})),this.deck=N(this.deck);var t=Object(n["a"])(this.arrayOf4Cards,4),e=t[0],a=t[1],c=t[2],s=t[3];this.deckStack1.push(e),this.deckStack2.push(a),this.deckStack3.push(c),this.deckStack4.push(s),this.deck.splice(0,4)},computed:{arrayOf4Cards:function(){var t=this.deck.slice(0,4);return t},lastUsedItem:function(){return this.usedDeck.length>0?[this.usedDeck[this.usedDeck.length-1]]:this.usedDeck},winnerAlertOpen:function(){return 1===this.deckStack1.length&&1===this.deckStack2.length&&1===this.deckStack3.length&&1===this.deckStack4.length&&14===this.deckStack1[0].value&&14===this.deckStack2[0].value&&14===this.deckStack3[0].value&&14===this.deckStack4[0].value}},methods:{moveToBin:function(t){var e=t.value,a="",c=[this.deckStack1[this.deckStack1.length-1]||{suite:"",value:null},this.deckStack2[this.deckStack2.length-1]||{suite:"",value:null},this.deckStack3[this.deckStack3.length-1]||{suite:"",value:null},this.deckStack4[this.deckStack4.length-1]||{suite:"",value:null}];if(c.includes(t)){a="hearts"===t.suite||"diamonds"===t.suite?"red":"black";for(var s=0;s<c.length;s++)if("red"===a){if(("diamonds"===c[s].suite||"hearts"===c[s].suite)&&c[s].value<e)switch(s){case 0:this.usedDeck.push(this.deckStack1.pop());break;case 1:this.usedDeck.push(this.deckStack2.pop());break;case 2:this.usedDeck.push(this.deckStack3.pop());break;case 3:this.usedDeck.push(this.deckStack4.pop());break}}else if("black"===a&&("clubs"===c[s].suite||"spades"===c[s].suite)&&c[s].value<e)switch(s){case 0:this.usedDeck.push(this.deckStack1.pop());break;case 1:this.usedDeck.push(this.deckStack2.pop());break;case 2:this.usedDeck.push(this.deckStack3.pop());break;case 3:this.usedDeck.push(this.deckStack4.pop());break}}},draw4cards:function(){if(0!==this.deck.length){var t=this.deck.slice(0,4),e=Object(n["a"])(t,4),a=e[0],c=e[1],s=e[2],r=e[3];this.deckStack1.push(a),this.deckStack2.push(c),this.deckStack3.push(s),this.deckStack4.push(r),this.deck.splice(0,4)}},moveCardToNewArray:function(t){var e=this.totalDeck.find((function(e){return e.id==t.cardId}));console.log("old",this.oldArrayId);var a=[this.deckStack1[this.deckStack1.length-1]||{suite:"",value:null},this.deckStack2[this.deckStack2.length-1]||{suite:"",value:null},this.deckStack3[this.deckStack3.length-1]||{suite:"",value:null},this.deckStack4[this.deckStack4.length-1]||{suite:"",value:null}];a.includes(e)&&(1===t.array?this.deckStack1.push(e):2===t.array?this.deckStack2.push(e):3===t.array?this.deckStack3.push(e):4===t.array&&this.deckStack4.push(e),1===this.oldArrayId?this.deckStack1.pop():2===this.oldArrayId?this.deckStack2.pop():3===this.oldArrayId?this.deckStack3.pop():4===this.oldArrayId&&this.deckStack4.pop())},logOldArrayId:function(t){console.log(this.oldArrayId),this.oldArrayId=t,console.log(this.oldArrayId)},restartGame:function(){this.totalDeck=[],this.deck=[],this.deckStack1=[],this.deckStack2=[],this.deckStack3=[],this.deckStack4=[],this.usedDeck=[],this.oldArrayId=null,this.deck=M(),this.totalDeck=this.deck.map((function(t){return t})),this.deck=N(this.deck);var t=Object(n["a"])(this.arrayOf4Cards,4),e=t[0],a=t[1],c=t[2],s=t[3];this.deckStack1.push(e),this.deckStack2.push(a),this.deckStack3.push(c),this.deckStack4.push(s),this.deck.splice(0,4)},closeTheModal:function(){this.modalOpen=!1},openTheModal:function(){this.modalOpen=!0}},name:"App"},R=L,q=(a("5c0b"),Object(u["a"])(R,s,r,!1,null,null,null)),Q=q.exports,F=a("df76"),K=a.n(F),Y=(a("4160"),a("d3b7"),a("ac1f"),a("466d"),a("159b"),a("ddb0"),a("a925"));function z(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var c=a.match(/([A-Za-z0-9-_]+)\./i);if(c&&c.length>1){var s=c[1];e[s]=t(a)}})),e}c["a"].use(Y["a"]);var W=new Y["a"]({locale:"en",fallbackLocale:"en",messages:z()});c["a"].config.productionTip=!1,c["a"].use(K.a),new c["a"]({i18n:W,render:function(t){return t(Q)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"695f":function(t,e,a){"use strict";a("f369")},"6e1a":function(t,e,a){t.exports=a.p+"img/hearts.b1eafaff.svg"},"702b":function(t,e,a){},"830e":function(t,e,a){t.exports=a.p+"img/sv-flag.18d445b1.svg"},"8bbe":function(t,e,a){t.exports=a.p+"img/question.02656496.svg"},"9a54":function(t,e,a){},"9c0c":function(t,e,a){},a3b0:function(t,e,a){t.exports=a.p+"img/spades.18cf924a.svg"},a93d:function(t,e,a){},afc8:function(t,e,a){"use strict";a("a93d")},b318:function(t,e,a){t.exports=a.p+"img/reload.bf933a78.svg"},bf20:function(t,e,a){t.exports=a.p+"img/clubs.7dc4b4c7.svg"},c548:function(t,e,a){"use strict";a("702b")},e94f:function(t,e,a){"use strict";a("9a54")},edd4:function(t){t.exports=JSON.parse('{"instructions":{"title":"Instructions","body":"The aim of the game is to only have 4 aces left. You start with 4 randomly drawn cards in each pile. Click on a card to remove any cards of same color and lower value. The top card in any pile can be dragged to an empty pile to reveal the card underneath."},"winner":{"title":"You win!","body":"Do you want to play again?","yes":"yes"}}')},f255:function(t,e,a){},f325:function(t,e,a){t.exports=a.p+"img/uk-flag.1a3b80fe.svg"},f369:function(t,e,a){}});
//# sourceMappingURL=app.d0865f18.js.map