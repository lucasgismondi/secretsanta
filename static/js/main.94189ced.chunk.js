(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),l=(n(25),n(3)),c=n(4),s=n(6),u=n(5),d=n(7),h=n(1),m=(n(26),n(9)),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderInnerLabel",value:function(e,t){var n=e.endAngle<Math.PI?e.startAngle/2+e.endAngle/2:e.startAngle/2+e.endAngle/2+Math.PI,r=180*n/Math.PI>180?180*n/Math.PI-180:180*n/Math.PI;return a.a.createElement("text",{className:"rld-value",transform:"translate(".concat(t.centroid(),") rotate(").concat(r,")"),dy:".45em",style:{shapeRendering:"crispEdges",textAnchor:"middle",writingMode:e.writingModel,fontSize:e.fontSize,fill:e.fontColor}},e.text)}},{key:"render",value:function(){var e=this.props,t=Object(m.arc)().innerRadius(e.innerRadius).outerRadius(e.outerRadius).startAngle(e.startAngle).endAngle(e.endAngle);return a.a.createElement("g",{className:"rld-compass"},a.a.createElement("path",{d:t(),fill:e.fill,stroke:e.stoke}),e.showInnerLabels?this.renderInnerLabel(e,t):null)}}]),t}(r.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_processData",value:function(e){for(var t=[],n=0;n<e;n++)t.push(100/e);return t}},{key:"render",value:function(){var e=this.props,t="translate(".concat(e.wheelSize/2,",").concat(e.wheelSize/2,") rotate(-").concat(180/e.range,")"),n=this._processData(e.range),r=Object(m.pie)()(n).sort().map((function(t,n){var r=n>19?n%20:n,i=e.ArabicLabel?n+1:e.textArray[n]?e.textArray[n]:n+1;return a.a.createElement(g,{key:n,innerRadius:e.innerRadius,outerRadius:e.outerRadius,startAngle:t.startAngle,endAngle:t.endAngle,showInnerLabels:e.showInnerLabels,text:i,fill:m.schemeCategory20[r],stoke:e.stoke,fontColor:e.fontColor,fontSize:e.fontSize,writingModel:e.writingModel})}));return a.a.createElement("svg",{width:e.wheelSize,height:e.wheelSize},a.a.createElement("g",{transform:t},r))}}]),t}(r.Component);p.defaultProps={};var f=p,w=n(2);function b(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return b=function(){return e},e}function v(){var e=Object(h.a)(["\n    margin: 30px;\n    border-radius: 4px;\n    border-color: orange;\n    border-width: 3px;\n    color: orange;\n    background-color: transparent;\n    cursor: pointer;\n    height: 50px;\n    width: 150px;\n    font-size: 30px;\n"]);return v=function(){return e},e}var x=w.a.button(v()),E=w.a.div(b()),y=function(e){function t(e){var n;return Object(l.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),"wheelSize"in e||(n.props.wheelSize=2*n.defaultProps.width),n.state={startDraw:!1,drawTimes:1,randomNumber:null,rolling:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"_processRandomNumber",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"_processDrawAngle",value:function(e,t,n,r){return 360*t*n+r*(360/e)}},{key:"_processDrawing",value:function(e){var t=this;if(e.preventDefault(),!this.state.rolling){var n=this.state.drawTimes;this.props.drawLimitSwitch&&n-1<this.props.drawLimit?(this.setState({startDraw:!0,rolling:!0,randomNumber:4,drawTimes:this.state.drawTimes+1}),setTimeout((function(){t.setState({rolling:!1}),t.props.onSuccessDrawReturn(t.state.randomNumber)}),1e3*this.props.rotateSecond)):this.props.onOutLimitAlert(!0)}}},{key:"render",value:function(){var e=this,t=this.state,n=this.props,r=t.startDraw?this._processDrawAngle(n.range,n.turns,t.drawTimes,t.randomNumber):0;return a.a.createElement("div",{className:"react_luckyDraw",style:{width:n.width,height:n.height}},a.a.createElement(E,{className:t.rolling?"compass__container rolling":"compass__container"},a.a.createElement("div",{className:"control__panel"},a.a.createElement("div",{className:"compass__arrow"}),a.a.createElement("div",{className:"compass__spin",style:{width:n.wheelSize+"px",height:n.wheelSize+"px",transform:"rotate(".concat(-r,"deg) translate3d(0,0,-1px)"),transitionDuration:"".concat(n.rotateSecond,"s")}},a.a.createElement(f,n))),a.a.createElement(x,{onClick:function(t){e._processDrawing(t)}},n.drawButtonLabel)))}}]),t}(r.Component);y.defaultProps={width:500,height:350,stoke:20,range:20,turns:3,rotateSecond:5,drawLimit:3,drawLimitSwitch:!1,fontColor:"#000",fontSize:"18px",writingModel:"tb",drawButtonLabel:"Start",ArabicLabel:!1,textArray:[]};var S=y,O=n(17),j=n.n(O),k=n(8),A=n.n(k);function L(){var e=Object(h.a)(["\n    margin: 30px;\n    font-size: 50px;\n"]);return L=function(){return e},e}function z(){var e=Object(h.a)(["\n    margin: 30px;\n    border-radius: 4px;\n    border-color: orange;\n    border-width: 3px;\n    color: orange;\n    background-color: transparent;\n    cursor: pointer;\n    height: 50px;\n    width: 175px;\n    font-size: 30px;\n"]);return z=function(){return e},e}function C(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 25px;\n"]);return C=function(){return e},e}function N(){var e=Object(h.a)(["\n    font-size: 25px;\n"]);return N=function(){return e},e}function P(){var e=Object(h.a)(["\n    margin: 10px;\n    border: solid orange;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 3px;\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n"]);return P=function(){return e},e}function D(){var e=Object(h.a)(["\n    position: absolute;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    min-height: 100%;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n"]);return D=function(){return e},e}function I(){var e=Object(h.a)(["\n    background-color: red;\n    min-height: 100%;\n    width: 60%;\n"]);return I=function(){return e},e}function _(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100%;\n    width: 20%;\n    background-color: green;\n"]);return _=function(){return e},e}function M(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: row;\n    min-height: 100%;\n"]);return M=function(){return e},e}var R=w.a.div(M()),B=w.a.div(_()),T=w.a.div(I()),W=w.a.div(D()),F=w.a.i(P()),$=w.a.div(N()),U=w.a.div(C()),J=w.a.button(z()),V=w.a.div(L()),Z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={page:1},n.renderPrizes=function(){var e=n.state.page;return a.a.createElement(W,{className:1===e?"visible":"hidden"},a.a.createElement($,null,"Welcome to your Secret Santa Present, Peter!"),a.a.createElement($,null,"Below are the things you wished for this Christmas:"),a.a.createElement(U,null,a.a.createElement($,null,"Stuff"),a.a.createElement($,null,"Ferrari"),a.a.createElement($,null,"World Peace "),a.a.createElement($,null,"$1 BILLION"),a.a.createElement($,null,"10 $50 Amazon gift cards"),a.a.createElement($,null,"Direct Flight to Vegas"),a.a.createElement($,null,"2 Zucchero Concert tickets"),a.a.createElement($,null,"Artify 2019 Paint Brush Set"),a.a.createElement($,null,"Under Armour Truckstop Beanie"),a.a.createElement($,null,"Camry Digital Luggage Scale")),a.a.createElement($,null,"Today, you will be granted one of these wishes"),a.a.createElement($,null,"Click Continue to claim your present!"),a.a.createElement(J,{onClick:function(){return n.setState({page:2})}},"CONTINUE"))},n.renderSpinWheel=function(){var e=n.state.page;return a.a.createElement(W,{className:2===e?"visible":"hidden"},a.a.createElement($,null,"Spin the Wheel to claim your Secret Santa Present!"),a.a.createElement(F,null),a.a.createElement(S,{width:400,height:350,wheelSize:400,range:10,innerRadius:25,outerRadius:200,showInnerLabels:!0,drawLimitSwitch:!0,drawLimit:1,fontColor:"#000",fontSize:"12px",writingModel:"tb",drawButtonLabel:"SPIN",textArray:["Camry Digital Luggage Scale","Under Armour Truckstop Beanie","Artify 2019 Paint Brush Set","$1 BILLION","10 $50 Amazon gift cards","World Peace","Ferrari","Direct Flight to Vegas","2 Zucchero Concert tickets","Stuff"],onSuccessDrawReturn:function(e){setTimeout((function(){return n.setState({page:3})}),2e3)},onOutLimitAlert:function(e){e&&console.log("out of limits")}}))},n.renderFinalPage=function(){var e=n.state.page;return a.a.createElement(W,{className:3===e?"visible":"hidden"},a.a.createElement(j.a,null),a.a.createElement($,null,"Congratulations you won:"),a.a.createElement(V,null,"10 $50 Amazon gift cards"),a.a.createElement($,null,"You will receive your present shortly!"),a.a.createElement($,null,"Merry Christmas!!!"))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.state.page;return a.a.createElement(R,null,a.a.createElement(B,null,a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"}),a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"}),a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"})),a.a.createElement(T,null,this.renderPrizes(),this.renderSpinWheel(),this.renderFinalPage()),a.a.createElement(B,null,a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"}),a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"}),a.a.createElement("img",{src:A.a,alt:"santa",width:"167px",height:"250px"})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n.p+"static/media/santa2.1b5029d8.png"}},[[20,1,2]]]);
//# sourceMappingURL=main.94189ced.chunk.js.map