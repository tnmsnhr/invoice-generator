"use strict";(self.webpackChunkinvoicefy=self.webpackChunkinvoicefy||[]).push([[948,169],{5740:(e,n,s)=>{s.d(n,{A:()=>h});var i={};s.r(i),s.d(i,{_default:()=>l,button:()=>r,"default-outline":()=>c,error:()=>a,ghost:()=>o,outline:()=>d,primary:()=>j,"primary-success":()=>u});var t=s(4848),l="rbqA0XtFD5cwhgwauoax",r="mdmqHOFwu7CNczfKvSes",c="EKYRq5g7ECWkAdc42dIq",a="CGtmK2bW1P99XdxKcle9",o="RxNIvtlaQvJayOnE8m62",d="OjzfwRmcHBwgEwk_RzJ5",j="BZy3OTbCVKTmGx_21ZAq",u="yCiYIsfWXK9d4arECqbh";const h=({children:e,onClick:n,variant:s="default",className:l,style:c,disabled:a=!1,type:o})=>(0,t.jsx)("button",Object.assign({type:o,onClick:n,className:`${r} ${i[s]} ${l||""}`,style:c,disabled:a},{children:e}))},2621:(e,n,s)=>{s.d(n,{A:()=>t});var i=s(4848);const t=({type:e="text",value:n,placeholder:s,onChange:t,className:l,style:r,name:c,id:a,disabled:o,defaultValue:d,onBlur:j,required:u=!1,min:h,max:v})=>(0,i.jsx)("input",{type:e,required:!0,placeholder:s,onChange:t,className:`GMiw8NIqCQOWocohKtp2 ${l||""}`,style:r,name:c,id:a,value:n,disabled:o,defaultValue:d,onBlur:j,min:h,max:v,step:"any"})},9828:(e,n,s)=>{s.d(n,{A:()=>l});var i=s(4848),t=s(961);const l=({isOpen:e,onClose:n,title:s,children:l})=>e?t.createPortal((0,i.jsx)("div",Object.assign({className:"sa6AJ5y9uI3ZlD8MwmfE",onClick:n},{children:(0,i.jsx)("div",Object.assign({className:"fl5CR0relJ2mtSmKcnrz"},{children:(0,i.jsxs)("div",Object.assign({className:"V1dmjsZsxcr71ILVsNJp",onClick:e=>e.stopPropagation()},{children:[(0,i.jsx)("div",{children:(0,i.jsx)("button",Object.assign({className:"FpBKcU301HDKiyDKEwi6",onClick:n},{children:"×"}))}),(0,i.jsx)("div",Object.assign({className:"vesI3B8wLqO4zFwQBQU4"},{children:l}))]}))}))})),document.getElementById("modal-root")):null},3192:(e,n,s)=>{s.d(n,{Ay:()=>r,M2:()=>i,r7:()=>t});var i,t,l=s(4848);!function(e){e.Title1="title1",e.Title2="title2",e.Title3="title3",e.Body1="body1",e.Body2="body2",e.Button1="button1",e.Button2="button2",e.Subtitle="subtitle",e.SubtitleBold="subtitleBold",e.Caption="caption",e.CaptionBold="captionBold"}(i||(i={})),function(e){e.Primary="black",e.Grey="darkGrey",e.Secondary="secondary",e.Inactive="inactive",e.Inverse="inverse",e.Info="info",e.Error="error",e.Warning="warning"}(t||(t={}));const r=({type:e,color:n=t.Primary,children:s,style:r,className:c})=>{const a={[i.Title1]:"h1",[i.Title2]:"h2",[i.Title3]:"h3",[i.Body1]:"p",[i.Body2]:"p",[i.Button1]:"p",[i.Button2]:"p",[i.Subtitle]:"h4",[i.SubtitleBold]:"h4",[i.Caption]:"p",[i.CaptionBold]:"p"},o={[t.Primary]:"var(--black)",[t.Grey]:"var(--grey-dark)",[t.Secondary]:"var(--grey-dark)",[t.Inactive]:"var(--inactive)",[t.Inverse]:"var(--inverse)",[t.Info]:"var(--info)",[t.Error]:"var(--error)",[t.Warning]:"var(--warning)"},d=a[e],j=o[n];return(0,l.jsx)(d,Object.assign({className:`text ${e} ${c}`,style:Object.assign({color:j},r)},{children:s}))}},1871:(e,n,s)=>{s.d(n,{A:()=>i});const i=s(3192).Ay},6169:(e,n,s)=>{s.r(n),s.d(n,{default:()=>x});var i=s(4848),t=s(6540),l="x85XnaB87sI5KdNIgkeJ",r="ZRTE247m3LprOVMP0fZB",c=s(1871),a=s(3192),o="c6P16HG7v7y5gaQUyff4",d="APiq7DJ1f3HH3rI3OXfk",j=s(5024);var u="DNaDr3gCds6uDv7ScPdy",h="MbqkcA3sypZsW3J2GuAw";const v={basic:({invoice:e})=>(0,i.jsxs)("div",Object.assign({style:{margin:"auto",padding:"20px",border:"1px solid #eee",boxShadow:"0 0 10px rgba(0, 0, 0, 0.15)",fontFamily:"Arial, sans-serif"}},{children:[(0,i.jsx)("h2",Object.assign({style:{textAlign:"center"}},{children:"Invoice"})),(0,i.jsxs)("div",Object.assign({style:{marginBottom:"20px"}},{children:[(0,i.jsx)("strong",{children:"Invoice ID:"})," ",null==e?void 0:e.id," ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Invoice Date:"})," ",(null==e?void 0:e.invoiceDate)&&(0,j.p)(+(null==e?void 0:e.invoiceDate))," ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Payment Due:"})," ",(null==e?void 0:e.paymentDueDate)&&(0,j.p)(+(null==e?void 0:e.paymentDueDate))]})),(0,i.jsxs)("div",Object.assign({style:{marginBottom:"40px"}},{children:[(0,i.jsx)("strong",{children:"Billing To:"})," ",null==e?void 0:e.billingTo.name," ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Address:"})," ",null==e?void 0:e.billingTo.address]})),(0,i.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse"}},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",Object.assign({className:d},{children:"Item"})),(0,i.jsx)("th",Object.assign({className:d},{children:"Quantity"})),(0,i.jsx)("th",Object.assign({className:d},{children:"Price"})),(0,i.jsx)("th",Object.assign({className:d},{children:"Total"}))]})}),(0,i.jsx)("tbody",{children:null==e?void 0:e.itemsDetails.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({className:o},{children:null==e?void 0:e.name})),(0,i.jsx)("td",Object.assign({className:o},{children:null==e?void 0:e.quantity})),(0,i.jsx)("td",Object.assign({className:o},{children:null==e?void 0:e.price})),(0,i.jsx)("td",Object.assign({className:o},{children:(null==e?void 0:e.quantity)*(null==e?void 0:e.price)}))]},n)))})]})),(0,i.jsxs)("div",Object.assign({style:{marginTop:"20px",textAlign:"right"}},{children:[(0,i.jsx)("strong",{children:"CGST:"})," ",null==e?void 0:e.CGST,"% ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"SGST:"})," ",null==e?void 0:e.SGST,"% ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Total:"})," ",null==e?void 0:e.total]}))]})),modern:({invoice:e})=>(0,i.jsxs)("div",Object.assign({style:{maxWidth:"800px",margin:"auto",padding:"30px",backgroundColor:"#f8f8f8",borderRadius:"10px",fontFamily:"Verdana, sans-serif"}},{children:[(0,i.jsxs)("header",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}},{children:[(0,i.jsx)("h1",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:"Invoice"})),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"ID:"})," ",null==e?void 0:e.id," ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Date:"})," ",null==e?void 0:e.invoiceDate]})]})),(0,i.jsxs)("section",Object.assign({style:{marginBottom:"20px"}},{children:[(0,i.jsx)("h2",Object.assign({style:{fontSize:"18px",color:"#555"}},{children:"Billing Information"})),(0,i.jsx)("p",{children:null==e?void 0:e.billingTo.name}),(0,i.jsx)("p",{children:null==e?void 0:e.billingTo.address})]})),(0,i.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse",marginBottom:"20px"}},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",Object.assign({className:h},{children:"Product"})),(0,i.jsx)("th",Object.assign({className:h},{children:"Quantity"})),(0,i.jsx)("th",Object.assign({className:h},{children:"Price"})),(0,i.jsx)("th",Object.assign({className:h},{children:"Total"}))]})}),(0,i.jsx)("tbody",{children:null==e?void 0:e.itemsDetails.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({className:u},{children:e.name})),(0,i.jsx)("td",Object.assign({className:u},{children:e.quantity})),(0,i.jsxs)("td",Object.assign({className:u},{children:["$",e.price]})),(0,i.jsxs)("td",Object.assign({className:u},{children:["$",e.quantity*e.price]}))]},n)))})]})),(0,i.jsx)("footer",Object.assign({style:{display:"flex",justifyContent:"flex-end",alignItems:"center",borderTop:"2px solid #ccc",paddingTop:"20px"}},{children:(0,i.jsxs)("div",Object.assign({style:{textAlign:"right"}},{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"CGST:"})," ",null==e?void 0:e.CGST,"%"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"SGST:"})," ",null==e?void 0:e.SGST,"%"]}),(0,i.jsxs)("h2",Object.assign({style:{fontSize:"24px",color:"#333",marginTop:"1rem"}},{children:["Total: $",null==e?void 0:e.total]}))]}))}))]})),professional:({invoice:e})=>(0,i.jsxs)("div",Object.assign({style:{maxWidth:"800px",margin:"auto",padding:"30px",backgroundColor:"#f8f8f8",borderRadius:"10px",fontFamily:"Verdana, sans-serif"}},{children:[(0,i.jsxs)("header",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}},{children:[(0,i.jsx)("h1",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:"Invoice"})),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"ID:"})," ",null==e?void 0:e.id," ",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Date:"})," ",null==e?void 0:e.invoiceDate]})]})),(0,i.jsxs)("section",Object.assign({style:{marginBottom:"20px"}},{children:[(0,i.jsx)("h2",Object.assign({style:{fontSize:"18px",color:"#555"}},{children:"Billing Information"})),(0,i.jsx)("p",{children:null==e?void 0:e.billingTo.name}),(0,i.jsx)("p",{children:null==e?void 0:e.billingTo.address})]})),(0,i.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse",marginBottom:"20px"}},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Product"})),(0,i.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Quantity"})),(0,i.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Price"})),(0,i.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Total"}))]})}),(0,i.jsx)("tbody",{children:null==e?void 0:e.itemsDetails.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({style:{padding:"10px 0"}},{children:e.name})),(0,i.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"center"}},{children:e.quantity})),(0,i.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"right"}},{children:e.price})),(0,i.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"right"}},{children:e.quantity*e.price}))]},n)))})]})),(0,i.jsx)("footer",Object.assign({style:{display:"flex",justifyContent:"flex-end",alignItems:"center",borderTop:"2px solid #ccc",paddingTop:"20px"}},{children:(0,i.jsxs)("div",Object.assign({style:{textAlign:"right"}},{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"CGST:"})," ",null==e?void 0:e.CGST,"%"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"SGST:"})," ",null==e?void 0:e.SGST,"%"]}),(0,i.jsxs)("h2",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:["Total: ",null==e?void 0:e.total]}))]}))}))]})),modernMinimal:({invoice:e})=>{var n,s,t;return(0,i.jsxs)("div",Object.assign({className:"bsPiU0UT0THid8Xlh8lh"},{children:[(0,i.jsxs)("header",Object.assign({className:"GAJvujHzhg9rhExX3oDw"},{children:[(0,i.jsx)("h1",Object.assign({className:"U5SRpB4VTPrbNUvPedbs"},{children:"INVOICE"})),(0,i.jsx)("div",Object.assign({className:"vLShzVNT7RFLWZ9wKK0y"},{children:(0,i.jsx)("h2",{children:"REAL ESTATE DEVELOPER"})}))]})),(0,i.jsxs)("section",Object.assign({className:"v1yKLYkD9BKTt6INIdno"},{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"To:"})," ",null===(n=null==e?void 0:e.billingTo)||void 0===n?void 0:n.name]}),(0,i.jsx)("p",{children:null===(s=null==e?void 0:e.billingTo)||void 0===s?void 0:s.address})]})),(0,i.jsxs)("section",Object.assign({className:"GTgCzYQHHK6YGZXPR2tb"},{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Date:"})," ",(null==e?void 0:e.invoiceDate)&&(0,j.Z)(+(null==e?void 0:e.invoiceDate))]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Due Date:"})," ",(null==e?void 0:e.paymentDueDate)&&(0,j.Z)(+(null==e?void 0:e.paymentDueDate))]})]})),(0,i.jsxs)("table",Object.assign({className:"bNMs_3jaIUbKCKuvz26w"},{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"NO"}),(0,i.jsx)("th",{children:"Item"}),(0,i.jsx)("th",{children:"QTY"}),(0,i.jsx)("th",{children:"PRICE"}),(0,i.jsx)("th",{children:"DISCOUNT"}),(0,i.jsx)("th",{children:"TOTAL"})]})}),(0,i.jsx)("tbody",{children:null===(t=null==e?void 0:e.itemsDetails)||void 0===t?void 0:t.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n+1}),(0,i.jsx)("td",{children:null==e?void 0:e.name}),(0,i.jsx)("td",{children:null==e?void 0:e.quantity}),(0,i.jsxs)("td",{children:["$",null==e?void 0:e.discount]}),(0,i.jsxs)("td",{children:["$",null==e?void 0:e.price]}),(0,i.jsxs)("td",{children:["$",(null==e?void 0:e.price)*(null==e?void 0:e.quantity)-(null==e?void 0:e.discount)]})]})))}),(0,i.jsxs)("tfoot",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({colSpan:5},{children:"Sub Total"})),(0,i.jsx)("td",{children:"$7,950"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({colSpan:5},{children:"Tax 10%"})),(0,i.jsx)("td",{children:"$795"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({colSpan:5},{children:"Discount"})),(0,i.jsx)("td",{children:"$500"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",Object.assign({colSpan:5,className:"ZedR5RMK6lG3xCRqPHEj"},{children:"GRAND TOTAL"})),(0,i.jsx)("td",Object.assign({className:"DA8a0TfxlWqIfCPn3_xw"},{children:"$8,245"}))]})]})]})),(0,i.jsxs)("section",Object.assign({className:"MH7I3Dew7ce0vEFSI9eI"},{children:[(0,i.jsx)("h3",{children:"Term and Conditions :"}),(0,i.jsx)("p",{children:"Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices."})]})),(0,i.jsxs)("section",Object.assign({className:"JIAofIqZUQweCI1xaHrC"},{children:[(0,i.jsx)("h3",{children:"Payment Method"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Bank Name:"})," Wardiere Inc."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Account Number:"})," 123-456-7890"]})]})),(0,i.jsxs)("footer",Object.assign({className:"h_a77HII8YXCGa0P_Etw"},{children:[(0,i.jsx)("p",{children:(0,i.jsx)("strong",{children:"Administrator"})}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Phone:"})," 123-456-7890"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Mail:"})," hello@reallygreatsite.com"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Address:"})," 123 Anywhere St., Any City"]})]}))]}))}},x=({invoice:e})=>{const[n,s]=(0,t.useState)("basic"),o=v[n],d=e=>{s(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.A,Object.assign({type:a.M2.Title2,style:{margin:"2rem"}},{children:"Preview:"})),(0,i.jsxs)("div",Object.assign({className:"jWW1yH70woJ8SydRNJvw"},{children:[(0,i.jsxs)("div",Object.assign({className:"y2TthXBSJ1dS2Wx2zTDb"},{children:[(0,i.jsx)("div",Object.assign({className:`${r} ${"basic"==n&&l}`,onClick:()=>{d("basic")}},{children:(0,i.jsx)(c.A,Object.assign({type:a.M2.Button2},{children:"Basic"}))})),(0,i.jsx)("div",Object.assign({className:`${r} ${"modern"==n&&l}`,onClick:()=>{d("modern")}},{children:(0,i.jsx)(c.A,Object.assign({type:a.M2.Button2},{children:"Modern"}))})),(0,i.jsx)("div",Object.assign({className:`${r} ${"professional"==n&&l}`,onClick:()=>{d("professional")}},{children:(0,i.jsx)(c.A,Object.assign({type:a.M2.Button2},{children:"Simple"}))})),(0,i.jsx)("div",Object.assign({className:`${r} ${"modernMinimal"==n&&l}`,onClick:()=>{d("modernMinimal")}},{children:(0,i.jsx)(c.A,Object.assign({type:a.M2.Button2},{children:"Modern Minimal"}))}))]})),(0,i.jsx)("div",Object.assign({className:"tOuFTJSCUIu_R254gpD2"},{children:(0,i.jsx)(o,{invoice:e})}))]}))]})}},7948:(e,n,s)=>{s.r(n),s.d(n,{default:()=>K});var i={};s.r(i),s.d(i,{badge:()=>h,created:()=>v,draft:()=>x,overdue:()=>g,paid:()=>y});var t=s(4848),l=s(6540),r=s(1468),c=s(6512),a=s(1871),o="tgE7nUFsK7YRXPy2FoDr",d="zulJbisULKrkxp5qJzh2",j=s(3192),u=s(5024),h="rf23WyjA38xlvcpbgQGx",v="adnJ8XNpPO56rMtaTFjc",x="dg48xnBqiq0O1d1DfZUX",g="wXaEVPtlJhQY_mAA3AWT",y="_xkXLh4F3itNaLNHZ9Z_";const p=({type:e})=>(0,t.jsx)("div",Object.assign({className:`${h} ${i[e]}`},{children:(0,t.jsx)("p",{children:e})}));var m="R1BrQyD6CIAbcOYMQgGk";const b=({style:e,className:n,onClick:s})=>(0,t.jsxs)("button",Object.assign({onClick:s,className:`wBUVFKlTueuutNlDIizt ${n||""}`,style:e},{children:[(0,t.jsx)("div",{className:m}),(0,t.jsx)("div",{className:m}),(0,t.jsx)("div",{className:m})]})),f=({className:e,invoice:n,handlePreview:s,deleteInvoice:i})=>{var r,c,o;const[d,h]=(0,l.useState)(!1),v=(0,l.useRef)(null),x=e=>{v.current&&!v.current.contains(e.target)&&h(!1)};(0,l.useEffect)((()=>(d?document.addEventListener("mousedown",x):document.removeEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)})),[d]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("tr",Object.assign({className:"fK0V_BvzgR1mes_Pvig4",onClick:()=>{s&&s(n)}},{children:[(0,t.jsx)("td",{children:(null==n?void 0:n.status)&&(0,t.jsx)(p,{type:null===(r=null==n?void 0:n.status)||void 0===r?void 0:r.toLocaleLowerCase()})}),(0,t.jsx)("td",{children:(null==n?void 0:n.invoiceDate)&&(0,t.jsx)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:(0,u.p)(+(null==n?void 0:n.invoiceDate))}))}),(0,t.jsx)("td",{children:(null==n?void 0:n.paymentDueDate)&&(0,t.jsx)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:(0,u.p)(+(null==n?void 0:n.paymentDueDate))}))}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:["$",null==n?void 0:n.total]}))}),(0,t.jsx)("td",{children:(0,t.jsxs)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:["#",null==n?void 0:n.invoiceNumber]}))}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:null===(c=null==n?void 0:n.billingTo)||void 0===c?void 0:c.name}))}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Body1,color:j.r7.Primary},{children:null===(o=null==n?void 0:n.itemsDetails)||void 0===o?void 0:o.length}))}),(0,t.jsx)("td",{children:(0,t.jsx)(b,{onClick:e=>{e.stopPropagation(),h(!0)}})}),d&&(0,t.jsx)("div",Object.assign({className:"pU4SjzyRIZzJNaUjLXhS",ref:v},{children:(0,t.jsx)("div",Object.assign({onClick:e=>{e.stopPropagation(),i&&i(null==n?void 0:n.id,n.status),h(!1)},className:"KybhWhVF3gYSm4dZ599l"},{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.CaptionBold,color:j.r7.Error},{children:"Delete"}))}))}))]}))})};var O=s(9828),N=s(6169),A=s(4264),C=s(4222),D=s(5740),S=function(e,n,s,i){return new(s||(s=Promise))((function(t,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function c(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,c)}a((i=i.apply(e,n||[])).next())}))};const T=(0,r.Ng)(null,(e=>({onDeleteInvoice:n=>e((0,A.r$)(n)),onUpdateInvoice:n=>e((0,A.Dq)(n)),onFetchInvoices:()=>e((0,A.Do)())})))((({invoices:e,onDeleteInvoice:n,onUpdateInvoice:s,onFetchInvoices:i})=>{const[c,a]=(0,l.useState)([]),[o,d]=(0,l.useState)(!1),[u,h]=(0,l.useState)(),[v,x]=(0,l.useState)(!1),g=(0,r.wA)();(0,l.useEffect)((()=>{a(e)}),[e]);const y=e=>{d(!0),h(e)},p=(e,s)=>S(void 0,void 0,void 0,(function*(){if("draft"==(null==s?void 0:s.toLocaleLowerCase()))g((0,A.cj)(e));else if(n){x(!0);try{yield n(e);x(!1)}catch(e){x(!1)}}})),m=e=>S(void 0,void 0,void 0,(function*(){const n=Object.assign({},u);n.status=e,s&&n&&(x(!0),yield s(n),h(n),i())}));return(0,t.jsxs)("div",Object.assign({className:"WqtyYAfgg9egtehOMQiA"},{children:[v&&(0,t.jsx)("div",Object.assign({className:"_RQVSgyPRqWd7swkd4WJ"},{children:(0,t.jsx)(C.A,{})})),c&&c.length>0?(0,t.jsxs)("table",Object.assign({className:"t4FhJxkCIVBQeL_9P5mM"},{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Status"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Created at"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Due at"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Price"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Number"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Customer"}))}),(0,t.jsx)("td",{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body1,color:j.r7.Grey},{children:"Total Items"}))}),(0,t.jsx)("td",{})]})}),(0,t.jsx)("tbody",{children:null==c?void 0:c.map((e=>(0,t.jsx)(l.Fragment,{children:(0,t.jsx)(f,{invoice:e,handlePreview:y,deleteInvoice:p})},e.id)))})]})):(0,t.jsx)("div",Object.assign({className:"jrU5EiUG3vRAgmKfruBD"},{children:(0,t.jsx)(j.Ay,Object.assign({type:j.M2.Body2,color:j.r7.Info},{children:"No data found"}))})),(0,t.jsx)(O.A,Object.assign({isOpen:o,onClose:()=>{d(!1),h(void 0)}},{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(N.default,{invoice:u}),(0,t.jsxs)("div",Object.assign({className:"Gh4b073SB7dkLAbkChWL"},{children:[(0,t.jsx)(j.Ay,Object.assign({type:j.M2.SubtitleBold},{children:"Change Status"})),(0,t.jsxs)("div",Object.assign({className:"VMfiHl5RMySKd1sEYY16"},{children:[(0,t.jsx)(D.A,Object.assign({variant:"error",onClick:()=>{m("overdue")}},{children:" Overdue"})),(0,t.jsx)(D.A,Object.assign({variant:"primary-success",onClick:()=>{m("paid")}},{children:" Paid"}))]}))]}))]})}))]}))}));var w=s(2621),I=s(8398);const B={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var P,k=new Uint8Array(16);function M(){if(!P&&!(P="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return P(k)}for(var G=[],$=0;$<256;++$)G.push(($+256).toString(16).slice(1));function E(e,n=0){return(G[e[n+0]]+G[e[n+1]]+G[e[n+2]]+G[e[n+3]]+"-"+G[e[n+4]]+G[e[n+5]]+"-"+G[e[n+6]]+G[e[n+7]]+"-"+G[e[n+8]]+G[e[n+9]]+"-"+G[e[n+10]]+G[e[n+11]]+G[e[n+12]]+G[e[n+13]]+G[e[n+14]]+G[e[n+15]]).toLowerCase()}const L=function(e,n,s){if(B.randomUUID&&!n&&!e)return B.randomUUID();var i=(e=e||{}).random||(e.rng||M)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){s=s||0;for(var t=0;t<16;++t)n[s+t]=i[t];return n}return E(i)};const q=function(){return L().replace(/[^0-9]/g,"").slice(0,4).padStart(4,"0")},U=l.lazy((()=>s.e(857).then(s.bind(s,857)))),R=(0,r.Ng)((e=>({invoices:null==e?void 0:e.invoices.invoices,drafts:null==e?void 0:e.drafts.drafts,isLoading:null==e?void 0:e.invoices.loading})),(e=>({onCreateInvoice:n=>e((0,A.k$)(n)),onFetchInvoices:()=>e((0,A.Do)()),deselectCustomer:()=>e((0,I.hQ)(null)),deselectInvoice:()=>e((0,A.jx)(null))})))((({onCreateInvoice:e,invoices:n,drafts:s,onFetchInvoices:i,isLoading:r,deselectInvoice:u,deselectCustomer:h})=>{const[v,x]=(0,l.useState)(!1),[g,y]=(0,l.useState)([]),[p,m]=(0,l.useState)("all");(0,l.useEffect)((()=>{i(),h(),u()}),[]),(0,l.useEffect)((()=>{let e=[];n&&n.length>0&&(e=[...n]),s&&s.length>0&&(e=[...e,...s]),y([...e])}),[n,s]);const b=e=>{let i=[];n&&n.length>0&&(i=[...n]),s&&s.length>0&&(i=[...i,...s]);let t=[...i];"all"!==e&&(t=i.filter((n=>{var s;return(null===(s=n.status)||void 0===s?void 0:s.toLocaleLowerCase())===(null==e?void 0:e.toLocaleLowerCase())}))),y(t),m(e)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.A,Object.assign({isOpen:v,onClose:()=>{x(!1)}},{children:(0,t.jsx)(l.Suspense,Object.assign({fallback:(0,t.jsx)(C.A,{})},{children:(0,t.jsx)(U,{afterCustomerAdd:n=>{const s={billingTo:n,CGST:18,SGST:18,itemsDetails:[],total:0,id:Date.now().toString(),invoiceDate:"",paymentDueDate:"",status:"draft",invoiceNumber:q()};e(s)}})}))})),(0,t.jsxs)("div",Object.assign({className:"LFOLV3eVohRa9bpOOibQ"},{children:[(0,t.jsxs)("div",Object.assign({className:"MDju81TqRR5_TqwKPWZE"},{children:[(0,t.jsx)(a.A,Object.assign({type:j.M2.Title1},{children:"Invoices"})),(0,t.jsxs)(D.A,Object.assign({className:"align-center",variant:"primary",onClick:()=>x(!0)},{children:["Create an invoice ",(0,t.jsx)(c.t50,{size:24,style:{marginLeft:"0.5rem"}})]}))]})),r?(0,t.jsx)(C.A,{}):(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"FVg3e2v_6TP4veAW7KVY"}),(0,t.jsxs)("div",Object.assign({className:"ko3yhqowbbJkOE74erwW"},{children:[(0,t.jsxs)("div",Object.assign({className:"W_solf08yyrCK4SLCJP8"},{children:[(0,t.jsx)("div",Object.assign({className:"yWl70rQserKzjJxqGVDt"},{children:(0,t.jsx)(w.A,{})})),(0,t.jsx)("div",{children:(0,t.jsxs)("div",Object.assign({className:"r29t9mCUflgMxdLqPAPP"},{children:[(0,t.jsx)("button",Object.assign({className:`${d} ${"all"==p?o:""}`,onClick:()=>{b("all")}},{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Button2},{children:"All Invoices"}))})),(0,t.jsx)("button",Object.assign({className:`${d} ${"paid"==p?o:""}`,onClick:()=>{b("paid")}},{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Button2},{children:"Paid"}))})),(0,t.jsx)("button",Object.assign({className:`${d} ${"draft"==p?o:""}`,onClick:()=>{b("draft")}},{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Button2},{children:"Draft"}))})),(0,t.jsx)("button",Object.assign({className:`${d} ${"overdue"==p?o:""}`,onClick:()=>{b("overdue")}},{children:(0,t.jsx)(a.A,Object.assign({type:j.M2.Button2},{children:"Overdue"}))}))]}))})]})),(0,t.jsx)(T,{invoices:g})]}))]})]}))]})})),K=R},9908:(e,n,s)=>{s.d(n,{od:()=>c,yw:()=>r,zm:()=>a});var i=s(6164),t=s(7594),l=function(e,n,s,i){return new(s||(s=Promise))((function(t,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function c(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,c)}a((i=i.apply(e,n||[])).next())}))};const r=e=>l(void 0,void 0,void 0,(function*(){try{return(yield(0,t.gS)((0,t.rJ)(i.kA,"customers"),e)).id}catch(e){throw e}})),c=e=>l(void 0,void 0,void 0,(function*(){try{return(yield(0,t.GG)((0,t.rJ)(i.kA,e))).docs.map((e=>{const n=e.data();return{id:e.id,address:null==n?void 0:n.address,email:null==n?void 0:n.email,name:null==n?void 0:n.name,phoneNumber:null==n?void 0:n.phoneNumber}}))}catch(e){throw e}})),a=e=>l(void 0,void 0,void 0,(function*(){try{const n=yield(0,t.GG)((0,t.rJ)(i.kA,"customers"));return n.docs.map((e=>{const n=e.data();return{id:e.id,address:null==n?void 0:n.address,email:null==n?void 0:n.email,name:null==n?void 0:n.name,phoneNumber:null==n?void 0:n.phoneNumber}})).filter((n=>{var s,i;return null===(i=null===(s=n.name)||void 0===s?void 0:s.toLocaleLowerCase())||void 0===i?void 0:i.includes(null==e?void 0:e.toLocaleLowerCase())}))}catch(e){throw e}}))},6164:(e,n,s)=>{s.d(n,{kA:()=>a});var i=s(223),t=s(2993),l=s(7594),r=s(2539);const c=(0,i.Wp)({apiKey:"AIzaSyC3v567046sugqPZ7E6oakIMfUWpr3-81I",authDomain:"invoicefy-7c184.firebaseapp.com",projectId:"invoicefy-7c184",storageBucket:"invoicefy-7c184.appspot.com",messagingSenderId:"806738455295",appId:"1:806738455295:web:485bb4ee52dd469e457aca"}),a=((0,t.xI)(c),(0,l.aU)(c));(0,r.c7)(c)},8398:(e,n,s)=>{s.d(n,{UZ:()=>a,gn:()=>c,hQ:()=>r});var i=s(9908),t=s(4035),l=function(e,n,s,i){return new(s||(s=Promise))((function(t,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function c(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,c)}a((i=i.apply(e,n||[])).next())}))};const r=e=>({type:t.rG,payload:e}),c=()=>e=>l(void 0,void 0,void 0,(function*(){e({type:t.Hu});try{const s=yield(0,i.od)("customers");return e((n=s,{type:t.hw,payload:n})),s}catch(n){return e((e=>({type:t.E1,payload:e}))(null==n?void 0:n.message)),Promise.reject(n)}var n})),a=e=>n=>l(void 0,void 0,void 0,(function*(){n({type:t.bs});try{const l=yield(0,i.yw)(e);return n((s=e,{type:t.Pj,payload:s})),l}catch(e){return n((e=>({type:t.W,payload:e}))(null==e?void 0:e.message)),Promise.reject(e)}var s}))},4264:(e,n,s)=>{s.d(n,{k$:()=>a,r$:()=>u,cj:()=>v,Do:()=>d,D_:()=>j,hK:()=>h,Dq:()=>x,jx:()=>o});var i=s(6164),t=s(7594),l=function(e,n,s,i){return new(s||(s=Promise))((function(t,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function c(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,c)}a((i=i.apply(e,n||[])).next())}))};var r=s(4035),c=function(e,n,s,i){return new(s||(s=Promise))((function(t,l){function r(e){try{a(i.next(e))}catch(e){l(e)}}function c(e){try{a(i.throw(e))}catch(e){l(e)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof s?n:new s((function(e){e(n)}))).then(r,c)}a((i=i.apply(e,n||[])).next())}))};const a=e=>({type:r._w,payload:e}),o=e=>({type:r.Vu,payload:e}),d=()=>e=>c(void 0,void 0,void 0,(function*(){e({type:r.m5});try{const c=yield(s="invoices",l(void 0,void 0,void 0,(function*(){try{return(yield(0,t.GG)((0,t.rJ)(i.kA,s))).docs.map((e=>{var n,s,i,t;const l=e.data();return{id:e.id,SGST:null==l?void 0:l.SGST,CGST:null==l?void 0:l.CGST,billingTo:{address:null===(n=null==l?void 0:l.billingTo)||void 0===n?void 0:n.address,email:null===(s=null==l?void 0:l.billingTo)||void 0===s?void 0:s.email,name:null===(i=null==l?void 0:l.billingTo)||void 0===i?void 0:i.name,phoneNumber:null===(t=null==l?void 0:l.billingTo)||void 0===t?void 0:t.phoneNumber},invoiceDate:null==l?void 0:l.invoiceDate,itemsDetails:null==l?void 0:l.itemsDetails,paymentDueDate:null==l?void 0:l.paymentDueDate,total:null==l?void 0:l.total,status:null==l?void 0:l.status,invoiceNumber:null==l?void 0:l.invoiceNumber}}))}catch(e){throw e}})));e((n=c,{type:r.i_,payload:n}))}catch(n){e((e=>({type:r.rL,payload:e}))(null==n?void 0:n.message))}var n,s})),j=e=>n=>c(void 0,void 0,void 0,(function*(){n({type:r.sA});try{const s=Object.assign({},e);s.status="created";const c=yield((e,n)=>l(void 0,void 0,void 0,(function*(){try{return(yield(0,t.gS)((0,t.rJ)(i.kA,e),n)).id}catch(e){throw e}})))("invoices",s);return n({type:r.G8}),c}catch(e){return n((s=null==e?void 0:e.message,{type:r.FQ,payload:s})),Promise.reject(e)}var s})),u=e=>n=>c(void 0,void 0,void 0,(function*(){n({type:r.eq});try{const o=yield(c="invoices",a=e,l(void 0,void 0,void 0,(function*(){try{const e=(0,t.H9)(i.kA,c,a);return yield(0,t.kd)(e)}catch(e){return Promise.reject(e)}})));return n((s=e,{type:r.Es,payload:s})),o}catch(e){return n((e=>({type:r.vw,payload:e}))(null==e?void 0:e.message)),Promise.reject(e)}var s,c,a})),h=e=>({type:r.CQ,payload:e}),v=e=>({type:r.T0,payload:e}),x=e=>n=>c(void 0,void 0,void 0,(function*(){try{const c=e.id;return yield(n="invoices",s=c,r=e,l(void 0,void 0,void 0,(function*(){try{const e=(0,t.H9)(i.kA,n,s);return yield(0,t.mZ)(e,r)}catch(e){return Promise.reject(e)}})))}catch(e){return Promise.reject(e)}var n,s,r}))},5024:(e,n,s)=>{function i(e){const n=new Date(1e3*e),s=n.getDate(),i=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(s);return`${s}${i} ${["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]}'${String(n.getFullYear()).slice(-2)}`}function t(e){const n=new Date(1e3*e);return`${String(n.getDate()).padStart(2,"0")}/${String(n.getMonth()+1).padStart(2,"0")}/${n.getFullYear()}`}s.d(n,{Z:()=>i,p:()=>t})}}]);
//# sourceMappingURL=948.e9f0857d3d00b9d1b06d.js.map