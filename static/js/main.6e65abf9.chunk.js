(this["webpackJsonpreact-yahtzee"]=this["webpackJsonpreact-yahtzee"]||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(1),i=n.n(r),o=n(23),a=n.n(o),l=(n(31),n(21)),s=n(0),d=n(3),u=n(2),b=n(17),h=function(e){var t=e.children,n=Object(b.a)(e,["children"]);return Object(s.b)("button",Object(u.a)(Object(u.a)({},n),{},{css:Object(d.a)("background:Crimson;border:none;border-radius:0;bottom:0;box-sizing:border-box;color:",n.disabled?"rgba(255, 255, 255, 0.75)":"white",';font-family:"Rye",cursive;font-size:1.5rem;line-height:1.5rem;padding:1rem;position:fixed;text-transform:uppercase;width:100%;&:active{background:Gold;color:black;}&:focus{outline:none;}',""),children:t}))};var f={name:"1nklbez",styles:"display:grid;gap:0.5rem 0.5rem;grid-auto-flow:column;grid-template-columns:repeat(2, calc(50% - 0.25rem));grid-template-rows:repeat(7, 8vh)"},p={name:"144ggxd",styles:"padding:0.5rem;position:relative"},j=function(e){var t=e.children;return Object(s.b)("div",{css:p,children:Object(s.b)("div",{css:f,children:t})})},O=n(7),g=n(25),m=function(e,t){return Math.floor(Math.random()*(e+1-t))+t},x=function(e,t){return e.reduce((function(e,n){return n===t?e+n:e+0}),0)},v=function(e,t){for(var n=function(n){if(e.filter((function(e){return e===n})).length>=t)return{v:e.reduce((function(e,t){return e+t}))}},c=1;c<=6;c++){var r=n(c);if("object"===typeof r)return r.v}return 0},y=function(e,t){for(var n=e.slice().sort(),c=1,r=1;r<6;r++)n[r]===n[r-1]+1&&(c+=1);return c>=t?10*(t-1):0},w=function(e){return T.upper.map((function(e){return e.id})).map((function(t){return e&&e.get(t)||0})).reduce((function(e,t){return e+t}))>=W?R:0},S=function(e){return T.upper.map((function(e){return e.id})).map((function(t){return e&&e.get(t)||0})).reduce((function(e,t){return e+t}))+T.lower.map((function(e){return e.id})).map((function(t){return e&&e.get(t)||0})).reduce((function(e,t){return e+t}))+w(e)},k=function(e){var t=e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join("");return t.slice(0,1).toLowerCase()+t.slice(1)},W=63,R=35,C=[[{x:180,y:1620},{x:540,y:1260},{x:900,y:900},{x:1260,y:540},{x:1620,y:180},{x:1980,y:1980}],[{x:0,y:1980},{x:360,y:1620},{x:720,y:1260},{x:1080,y:900},{x:1440,y:540},{x:1800,y:180}],[{x:180,y:450},{x:540,y:810},{x:900,y:1170},{x:1260,y:1530},{x:1620,y:1890},{x:1980,y:90}],[{x:0,y:90},{x:360,y:450},{x:720,y:810},{x:1080,y:1170},{x:1440,y:1530},{x:1800,y:1890}],[{x:270,y:1710},{x:630,y:1350},{x:990,y:990},{x:1350,y:630},{x:270,y:1710},{x:2070,y:0}],[{x:90,y:270},{x:450,y:630},{x:810,y:990},{x:1170,y:1350},{x:1530,y:1710},{x:1890,y:2070}]],T={upper:[{id:"aces",name:"Aces",calculator:function(e){return x(e,1)}},{id:"twos",name:"Twos",calculator:function(e){return x(e,2)}},{id:"threes",name:"Threes",calculator:function(e){return x(e,3)}},{id:"fours",name:"Fours",calculator:function(e){return x(e,4)}},{id:"fives",name:"Fives",calculator:function(e){return x(e,5)}},{id:"sixes",name:"Sixes",calculator:function(e){return x(e,6)}},{id:"upperBonus",name:"Bonus"}],lower:[{id:"threeOfAKind",name:"Three of a Kind",calculator:function(e){return v(e,3)},longText:!0},{id:"fourOfAKind",name:"Four of a Kind",calculator:function(e){return v(e,4)},longText:!0},{id:"fullHouse",name:"Full House",calculator:function(e){for(var t=[],n=function(n){t[n]=e.filter((function(e){return e===n}))},c=1;c<=6;c++)n(c);return 2===t.filter((function(e){return e.length})).length?25:0},longText:!0},{id:"smallStraight",name:"Small Straight",calculator:function(e){return y(e,4)},longText:!0},{id:"largeStraight",name:"Large Straight",calculator:function(e){return y(e,5)},longText:!0},{id:"chance",name:"Chance",calculator:function(e){return e.reduce((function(e,t){return e+t}))},longText:!0},{id:"yahtzee",name:"Yahtzee",calculator:function(e){for(var t=function(t){if(5===e.filter((function(e){return e===t})).length)return{v:50}},n=1;n<=6;n++){var c=t(n);if("object"===typeof c)return c.v}return 0},longText:!0}]},D=T.upper.length+T.lower.length-1,E=n(20),L=n.n(E),B=n(24),z=n(10);function G(e,t){var n=e.scores;switch(t.type){case"START_GAME":return Object(u.a)(Object(u.a)({},A),{},{displayGame:!0,rollButtonDisabled:!1,roundsRemaining:D-1,upperScoreBonus:0,totalScore:0});case"ROLL_DICE":var c=e.rollsRemaining>0?e.rollsRemaining-1:0;return Object(u.a)(Object(u.a)({},e),{},{diceDisabled:!0,scoreButtonsDisabled:!0,rollButtonDisabled:!0,rolling:!0,rollsRemaining:c,lastRoll:c,dice:e.dice.map((function(e){return e.hold?e:Object(u.a)(Object(u.a)({},e),{},{count:e.count+1,score:m(6,1)})}))});case"STOP_ROLLING":return Object(u.a)(Object(u.a)({},e),{},{diceDisabled:!1,scoreButtonsDisabled:!1,rollButtonDisabled:!1,rolling:!1,rolled:!0});case"TOGGLE_HOLD_DIE":return Object(u.a)(Object(u.a)({},e),{},{dice:e.dice.map((function(e){return e.id!==t.id?e:Object(u.a)(Object(u.a)({},e),{},{hold:!e.hold})}))});case"SELECT_SCORE":var r=e.dice?e.dice.map((function(e){return e.score})):[0,0,0,0,0],i=e.selectedScore&&n.delete(e.selectedScore)?new Map(n):new Map(e.scores);return Object(u.a)(Object(u.a)({},e),{},{scores:t.calculator?new Map(i.set(t.key,t.calculator(r))):e.scores,selectedScore:t.key,upperScoreBonus:w(i),totalScore:S(i)});case"DESELECT_SCORE":return Object(u.a)(Object(u.a)({},e),{},{scores:n.delete(t.key)?n:e.scores,selectedScore:null});case"NEXT_ROUND":return Object(u.a)(Object(u.a)({},e),{},{diceDisabled:!0,scoreButtonsDisabled:!0,roundsRemaining:e.roundsRemaining>0?e.roundsRemaining-1:0,rollsRemaining:3,dice:e.dice.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{hold:!1})})),selectedScore:null});default:return e}}var _=Object(r.createContext)({}),I=function(){return Object(r.useContext)(_)},N=[Object(z.a)(),Object(z.a)(),Object(z.a)(),Object(z.a)(),Object(z.a)()],A={displayGame:!1,scoreButtonsDisabled:!0,diceDisabled:!0,rollButtonDisabled:!0,roundsRemaining:D,roundInProgress:!1,rollsRemaining:3,lastRoll:null,rolling:!1,rolled:!1,dice:[{id:N[0],hold:!1,count:0,score:0},{id:N[1],hold:!1,count:0,score:0},{id:N[2],hold:!1,count:0,score:0},{id:N[3],hold:!1,count:0,score:0},{id:N[4],hold:!1,count:0,score:0}],scores:new Map,selectedScore:null,upperScoreBonus:0,totalScore:0},M=function(e){var t=e.children,n=Object(r.useReducer)(G,A),i=Object(O.a)(n,2),o=i[0],a=i[1],l=Object(r.useCallback)((function(){return a({type:"START_GAME"})}),[a]),s=Object(r.useCallback)((function(){return a({type:"ROLL_DICE"})}),[a]),d=Object(r.useCallback)((function(){return a({type:"STOP_ROLLING"})}),[a]),u=Object(r.useCallback)((function(e,t){return a({type:"SELECT_SCORE",key:e,calculator:t})}),[a]),b=Object(r.useCallback)((function(e){return a({type:"DESELECT_SCORE",key:e})}),[a]),h=Object(r.useCallback)((function(e){return a({type:"TOGGLE_HOLD_DIE",id:e})}),[a]),f=Object(r.useCallback)(Object(B.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"NEXT_ROUND"});case 2:return e.next=4,a({type:"ROLL_DICE"});case 4:case"end":return e.stop()}}),e)}))),[a]);return Object(c.jsx)(_.Provider,{value:{state:o,startGame:l,rollDice:s,stopRolling:d,toggleHoldDie:h,selectScore:u,deselectScore:b,nextRound:f},children:t})},F=function(e){var t,n=e.count,c=e.id,i=e.number,o=e.width,a=I(),l=a.state,b=l.diceDisabled,h=l.dice,f=a.toggleHoldDie,p=!!h&&(null===(t=h.find((function(e){return e.id===c})))||void 0===t?void 0:t.hold),j=Object(r.useState)(!1),g=Object(O.a)(j,2),x=g[0],v=g[1],y=Object(r.useState)(0),w=Object(O.a)(y,2),S=w[0],k=w[1],W=Object(r.useState)(0),R=Object(O.a)(W,2),T=R[0],D=R[1];Object(r.useEffect)((function(){v(!!p)}),[p]),Object(r.useEffect)((function(){if(i){var e=m(6,1)-1,t=C[i-1][e],n=t.x,c=t.y;k(n+1800),D(c+1800)}}),[n,i]);return Object(s.b)("div",Object(u.a)(Object(u.a)({css:Object(d.a)("align-items:center;cursor:",b?"not-allowed":"pointer",";display:flex;justify-content:center;","")},!b&&{onClick:function(){f(c)}}),{},{children:Object(s.b)("div",{css:Object(d.a)("perspective:",12*o,"px;perspective-origin:50% ",o,";",""),children:Object(s.c)("div",{css:Object(d.a)("position:relative;width:",o,"px;height:",o,"px;transform-style:preserve-3d;transform:rotateX(",S,"deg) rotateY(",T,"deg);transition:transform 2s;",""),children:[Object(s.b)(X,{dieWidth:o,held:x,position:"first",children:Object(s.b)(H,{dieWidth:o})}),Object(s.c)(X,{dieWidth:o,held:x,position:"second",children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{alignSelf:"flex-end",dieWidth:o})]}),Object(s.c)(X,{dieWidth:o,held:x,position:"third",children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{alignSelf:"center",dieWidth:o}),Object(s.b)(H,{alignSelf:"flex-end",dieWidth:o})]}),Object(s.c)(X,{dieWidth:o,held:x,position:"fourth",children:[Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]}),Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]})]}),Object(s.c)(X,{dieWidth:o,held:x,position:"fifth",children:[Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]}),Object(s.b)(P,{dieWidth:o,justifyContent:"center",children:Object(s.b)(H,{dieWidth:o})}),Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]})]}),Object(s.c)(X,{dieWidth:o,held:x,position:"sixth",children:[Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]}),Object(s.c)(P,{dieWidth:o,children:[Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o}),Object(s.b)(H,{dieWidth:o})]})]})]})})}))},P=function(e){var t=e.children,n=e.dieWidth,c=e.justifyContent,r=void 0===c?"space-between":c;return Object(s.b)("div",{css:Object(d.a)("display:flex;flex-direction:column;justify-content:",r||"space-between",";width:calc(",n,"px * 0.21);height:calc(",n,"px * 0.7);",""),children:t})},H=function(e){var t=e.alignSelf,n=e.dieWidth,c=t?Object(d.a)("align-self:",t,";",""):null;return Object(s.b)("span",{css:Object(d.a)(c," display:block;width:calc(",n,"px * 0.2);height:calc(",n,"px * 0.2);border-radius:50%;background-color:white;box-shadow:inset calc(",n,"px / 24) calc(",n,"px / 24) calc(",n,"px / 12) rgba(0, 0, 0, 0.2);","")})};var U={name:"2o6p8u",styles:"justify-content:space-between"},X=function(e){var t,n=e.children,c=e.dieWidth,r=e.held,i=e.position,o=U;switch(i){case"first":t=Object(d.a)("align-items:center;justify-content:center;transform:translateZ(calc(",c,"px / 2));","");break;case"second":t=Object(d.a)(o," transform:rotateX(-180deg) translateZ(calc(",c,"px / 2));","");break;case"third":t=Object(d.a)(o," transform:rotateY(90deg) translateZ(calc(",c,"px / 2));","");break;case"fourth":t=Object(d.a)(o," transform:rotateY(-90deg) translateZ(calc(",c,"px / 2));","");break;case"fifth":t=Object(d.a)(o," transform:rotateX(90deg) translateZ(calc(",c,"px / 2));","");break;case"sixth":t=Object(d.a)(o," transform:rotateX(-90deg) translateZ(calc(",c,"px / 2));","")}return Object(s.b)("div",{css:Object(d.a)("display:flex;box-sizing:border-box;padding:15%;background-color:",r?"rgba(139, 0, 0, 0.85)":"rgba(220, 20, 60, 0.85)",";width:",c,"px;height:",c,"px;position:absolute;",t,";",""),children:n})};var Z={name:"tmmtfm",styles:"padding:1.5rem 1.5rem 0;position:relative"},Y=function(){var e=I().state.dice,t=Object(g.a)(),n=t.ref,c=t.width,i=void 0===c?1:c,o=function(e){return Math.floor(e/5)-19.2},a=Object(r.useState)(o(i)),l=Object(O.a)(a,2),u=l[0],b=l[1];Object(r.useEffect)((function(){b(o(i))}),[i]);return Object(s.b)("div",{ref:n,css:Z,children:Object(s.b)("div",{css:Object(d.a)("display:grid;gap:",1.5,"rem ",1.5,"rem;grid-auto-flow:column;grid-template-columns:repeat(5, ",u,"px);grid-template-rows:100%;height:",u,"px;",""),children:e?e.map((function(e,t){var n=e.id,c=e.count,r=e.score;return Object(s.b)(F,{id:n,count:c,number:r,width:u},t)})):null})})};var K={name:"62i8ur",styles:'align-items:center;background-color:Crimson;box-shadow:0 0.5vh 2vh rgba(0, 0, 0, 0.25);color:white;display:flex;font-family:"Lato",sans-serif;font-size:1.25rem;height:1.5rem;justify-content:space-between;padding:0.5rem;position:fixed;width:100%'},J=function(){var e=I().state.scores;return Object(s.b)("header",{css:K,children:Object(s.c)("span",{children:["Score: ",S(e)]})})},$=function(e){e.id;var t=e.score,n=e.name,c=e.longText,r=Object(b.a)(e,["id","score","name","longText"]);return Object(s.c)("button",Object(u.a)(Object(u.a)({css:Object(d.a)("align-items:center;background:transparent;border:0.5vw double white;border-radius:2vh;box-sizing:border-box;color:white;cursor:",r.disabled?"not-allowed":"pointer",';display:flex;font-family:"Rye",cursive;justify-content:space-between;text-align:left;text-transform:uppercase;padding:0.5rem 0.5rem 0.5rem 1rem;&:active:not(:disabled){background:Gold;border-color:black;color:black;}&:focus{outline:none;}',"")},r),{},{children:[Object(s.b)("span",{css:Object(d.a)("flex:1;font-size:",c?"2.25vh":"3vh",";padding-right:3vw;",""),children:"".concat(n)}),Object(s.b)("span",{css:Object(d.a)("align-items:center;background-color:Crimson;border-radius:1vh;color:white;display:flex;font-size:2.5vh;justify-content:center;height:5vh;visibility:",Number.isInteger(t)?"visible":"hidden",";width:5vh;",""),children:t})]}))};var q={name:"14mfhm0",styles:"margin:0.5rem 0"},Q={name:"ti75j2",styles:"margin:0"},V={name:"11nmji0",styles:"display:flex;flex-direction:column;height:calc(100vh - 48px);justify-content:center;text-align:center"},ee={name:"sptkz6",styles:"display:flex;flex-direction:column;height:calc(100vh - 48px);padding-top:48px;max-width:640px;margin:0 auto"},te={name:"1nz9se8",styles:'background-color:SeaGreen;color:white;display:flex;flex-direction:column;font-family:"Lato",sans-serif;height:calc(100vh - 3.5rem);width:100%'},ne=function(){var e=I(),t=e.state,n=e.startGame,c=e.rollDice,i=e.stopRolling,o=e.selectScore,a=e.deselectScore,u=e.nextRound;Object(r.useEffect)((function(){t.rolling&&setTimeout((function(){i()}),2e3)}),[t.rolling,i]);return Object(s.b)("div",{css:te,children:(null===t||void 0===t?void 0:t.displayGame)?Object(s.c)(s.a,{children:[Object(s.b)(J,{}),Object(s.c)("div",{css:ee,children:[Object(s.b)(j,{children:[].concat(Object(l.a)(T.upper),Object(l.a)(T.lower)).map((function(e){var n=e.name,c=e.calculator,r=e.longText,i=k(n),l="bonus"===i,u=t.scoreButtonsDisabled||!t.selectedScore&&t.scores.get(i)||l;return Object(s.b)($,{css:Object(d.a)("visibility:",l&&0===t.upperScoreBonus?"hidden":"visible",";",""),id:k(n),name:n,score:l&&t.upperScoreBonus>0?t.upperScoreBonus:Number.isInteger(t.scores.get(i))?t.scores.get(i):null,longText:r,disabled:u,onClick:function(){return t.scores.has(i)?a(i):o(i,c)},children:n},k(n))}))}),Object(s.b)(Y,{})]}),0===t.rollsRemaining||t.selectedScore?Object(s.b)(h,{disabled:t.rollButtonDisabled||!t.selectedScore,onClick:0===t.roundsRemaining?n:u,children:0===t.roundsRemaining?"New Game":"Next Round"}):Object(s.c)(h,{disabled:t.rollButtonDisabled,onClick:c,children:["Roll"," ",t.rollsRemaining&&"(".concat(t.rollsRemaining,")")]})]}):Object(s.c)(s.a,{children:[Object(s.c)("div",{css:V,children:[Object(s.b)("h1",{css:Q,children:"React Yahtzee"}),Object(s.c)("p",{css:q,children:["v","".concat("0.4.0")]})]}),Object(s.b)(h,{onClick:n,children:"Start"})]})})},ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(M,{children:Object(c.jsx)(ne,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-yahtzee",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-yahtzee","/serviceWorker.js");ce?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):re(t,e)}))}}(),ie()}},[[35,1,2]]]);
//# sourceMappingURL=main.6e65abf9.chunk.js.map