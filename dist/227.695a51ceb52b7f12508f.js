"use strict";(self.webpackChunkinvoicefy=self.webpackChunkinvoicefy||[]).push([[227],{7475:(n,e,a)=>{a.d(e,{A:()=>o});var r=a(1354),A=a.n(r),t=a(6314),c=a.n(t)()(A());c.push([n.id,"#calendar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 0 2rem;\n}\n\n.react-calendar {\n    width: 350px;\n    max-width: 100%;\n    background: #fff;\n    color: #222;\n    border-radius: 8px;\n    /* border: 1px solid #a0a096; */\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.125em;\n}\n\n.react-calendar--doubleView {\n    width: 700px;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer {\n    display: flex;\n    margin: -0.5em;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer>* {\n    width: 50%;\n    margin: 0.5em;\n}\n\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.react-calendar button {\n    margin: 0;\n    border: 0;\n    outline: none;\n}\n\n.react-calendar button:enabled:hover {\n    cursor: pointer;\n}\n\n.react-calendar__navigation {\n    display: flex;\n    height: 44px;\n    margin-bottom: 1em;\n}\n\n.react-calendar__navigation button {\n    color: var(--primary-color);\n    min-width: 44px;\n    background: none;\n    font-size: 16px;\n    margin-top: 8px;\n}\n\n.react-calendar__navigation button:disabled {\n    background-color: #f0f0f0;\n}\n\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n    background-color: #f8f8fa;\n}\n\n.react-calendar__month-view__weekdays {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 0.75em;\n    color: var(--grey-dark);\n    border-bottom: 1px solid var(--border);\n}\n\n.react-calendar__month-view__weekdays__weekday {\n    padding: 0.5em;\n}\n\n.react-calendar__month-view__weekdays__weekday abbr {\n    text-decoration: none;\n}\n\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.75em;\n    font-weight: bold;\n}\n\n.react-calendar__month-view__days__day--weekend {\n    color: var(--primary-color);\n}\n\n.react-calendar__month-view__days__day--neighboringMonth {\n    color: #757575;\n}\n\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n    padding: 2em 0.5em;\n}\n\n.react-calendar__tile {\n    max-width: 100%;\n    padding: 10px 6.6667px;\n    background: none;\n    text-align: center;\n    line-height: 16px;\n}\n\n.react-calendar__tile:disabled {\n    background-color: #f0f0f0;\n}\n\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n    background: #f8f8fa;\n    color: var(--primary-color);\n    border-radius: 6px;\n}\n\n.react-calendar__tile--now {\n    background: #646269;\n    border-radius: 6px;\n    font-weight: bold;\n    color: #fff;\n}\n\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n    background: #6f48eb33;\n    border-radius: 6px;\n    font-weight: bold;\n    color: var(--primary-color);\n}\n\n.react-calendar__tile--hasActive {\n    background: var(--primary-color);\n}\n\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n    background: #f8f8fa;\n}\n\n.react-calendar__tile--active {\n    background: var(--primary-color);\n    border-radius: 6px;\n    font-weight: bold;\n    color: white;\n}\n\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n    background: var(--primary-color);\n    color: white;\n}\n\n.react-calendar--selectRange .react-calendar__tile--hover {\n    background-color: #f8f8fa;\n}\n\n.react-calendar__tile--range {\n    background: var(--primary-color);\n    color: var(--inverse);\n    border-radius: 0;\n    border-radius: 6px;\n}","",{version:3,sources:["webpack://./src/UIComponents/Calendar/calendar.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,+BAA+B;IAC/B,yCAAyC;IACzC,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,aAAa;AACjB;;AAEA;;;;IAII,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;IACvB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,cAAc;AAClB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;AACf;;AAEA;;IAEI,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;;IAEI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gCAAgC;IAChC,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;AACtB",sourcesContent:["#calendar {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 0 2rem;\n}\n\n.react-calendar {\n    width: 350px;\n    max-width: 100%;\n    background: #fff;\n    color: #222;\n    border-radius: 8px;\n    /* border: 1px solid #a0a096; */\n    font-family: Arial, Helvetica, sans-serif;\n    line-height: 1.125em;\n}\n\n.react-calendar--doubleView {\n    width: 700px;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer {\n    display: flex;\n    margin: -0.5em;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer>* {\n    width: 50%;\n    margin: 0.5em;\n}\n\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.react-calendar button {\n    margin: 0;\n    border: 0;\n    outline: none;\n}\n\n.react-calendar button:enabled:hover {\n    cursor: pointer;\n}\n\n.react-calendar__navigation {\n    display: flex;\n    height: 44px;\n    margin-bottom: 1em;\n}\n\n.react-calendar__navigation button {\n    color: var(--primary-color);\n    min-width: 44px;\n    background: none;\n    font-size: 16px;\n    margin-top: 8px;\n}\n\n.react-calendar__navigation button:disabled {\n    background-color: #f0f0f0;\n}\n\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n    background-color: #f8f8fa;\n}\n\n.react-calendar__month-view__weekdays {\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 0.75em;\n    color: var(--grey-dark);\n    border-bottom: 1px solid var(--border);\n}\n\n.react-calendar__month-view__weekdays__weekday {\n    padding: 0.5em;\n}\n\n.react-calendar__month-view__weekdays__weekday abbr {\n    text-decoration: none;\n}\n\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.75em;\n    font-weight: bold;\n}\n\n.react-calendar__month-view__days__day--weekend {\n    color: var(--primary-color);\n}\n\n.react-calendar__month-view__days__day--neighboringMonth {\n    color: #757575;\n}\n\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n    padding: 2em 0.5em;\n}\n\n.react-calendar__tile {\n    max-width: 100%;\n    padding: 10px 6.6667px;\n    background: none;\n    text-align: center;\n    line-height: 16px;\n}\n\n.react-calendar__tile:disabled {\n    background-color: #f0f0f0;\n}\n\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n    background: #f8f8fa;\n    color: var(--primary-color);\n    border-radius: 6px;\n}\n\n.react-calendar__tile--now {\n    background: #646269;\n    border-radius: 6px;\n    font-weight: bold;\n    color: #fff;\n}\n\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n    background: #6f48eb33;\n    border-radius: 6px;\n    font-weight: bold;\n    color: var(--primary-color);\n}\n\n.react-calendar__tile--hasActive {\n    background: var(--primary-color);\n}\n\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n    background: #f8f8fa;\n}\n\n.react-calendar__tile--active {\n    background: var(--primary-color);\n    border-radius: 6px;\n    font-weight: bold;\n    color: white;\n}\n\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n    background: var(--primary-color);\n    color: white;\n}\n\n.react-calendar--selectRange .react-calendar__tile--hover {\n    background-color: #f8f8fa;\n}\n\n.react-calendar__tile--range {\n    background: var(--primary-color);\n    color: var(--inverse);\n    border-radius: 0;\n    border-radius: 6px;\n}"],sourceRoot:""}]);const o=c},6227:(n,e,a)=>{a.r(e),a.d(e,{default:()=>p});var r=a(4848),A=a(6540),t=a(5072),c=a.n(t),o=a(7825),i=a.n(o),l=a(7659),d=a.n(l),_=a(5056),s=a.n(_),B=a(540),b=a.n(B),C=a(1113),g=a.n(C),I=a(7475),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=b();c()(I.A,f);I.A&&I.A.locals&&I.A.locals;var u=a(4851),m=a(1497);const v=n=>{const{setDate:e,date:a,selectRange:A}=n;return(0,r.jsx)(u.P.div,Object.assign({initial:{x:100},animate:{x:0},transition:{duration:.2,ease:"easeInOut"},className:"calendar-container"},{children:(0,r.jsx)(m.Ay,{onChange:e,value:a,selectRange:A})}))};var h=a(2116);const p=({onChangeDate:n})=>{const[e,a]=(0,A.useState)(new Date);return(0,r.jsxs)("div",Object.assign({id:"calendar"},{children:[(0,r.jsx)(v,{setDate:a,date:e,selectRange:!1}),(0,r.jsx)(h.A,Object.assign({variant:"outline",onClick:()=>{const a=new Date(null==e?void 0:e.toString()),r=Math.floor(a.getTime()/1e3);n(null==r?void 0:r.toString())},style:{margin:"1.5rem"}},{children:"Select Date"}))]}))}}}]);
//# sourceMappingURL=227.695a51ceb52b7f12508f.js.map