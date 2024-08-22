"use strict";(self.webpackChunkinvoicefy=self.webpackChunkinvoicefy||[]).push([[169],{6169:(s,e,i)=>{i.r(e),i.d(e,{default:()=>b});var n=i(4848),l=i(6540),t="x85XnaB87sI5KdNIgkeJ",c="ZRTE247m3LprOVMP0fZB",d=i(1871),r=i(3192),a="c6P16HG7v7y5gaQUyff4",o="APiq7DJ1f3HH3rI3OXfk",j=i(5024);var x="DNaDr3gCds6uDv7ScPdy",h="MbqkcA3sypZsW3J2GuAw";const g={basic:({invoice:s})=>(0,n.jsxs)("div",Object.assign({style:{margin:"auto",padding:"20px",border:"1px solid #eee",boxShadow:"0 0 10px rgba(0, 0, 0, 0.15)",fontFamily:"Arial, sans-serif"}},{children:[(0,n.jsx)("h2",Object.assign({style:{textAlign:"center"}},{children:"Invoice"})),(0,n.jsxs)("div",Object.assign({style:{marginBottom:"20px"}},{children:[(0,n.jsx)("strong",{children:"Invoice ID:"})," ",null==s?void 0:s.id," ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Invoice Date:"})," ",(null==s?void 0:s.invoiceDate)&&(0,j.p)(+(null==s?void 0:s.invoiceDate))," ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Payment Due:"})," ",(null==s?void 0:s.paymentDueDate)&&(0,j.p)(+(null==s?void 0:s.paymentDueDate))]})),(0,n.jsxs)("div",Object.assign({style:{marginBottom:"40px"}},{children:[(0,n.jsx)("strong",{children:"Billing To:"})," ",null==s?void 0:s.billingTo.name," ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Address:"})," ",null==s?void 0:s.billingTo.address]})),(0,n.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse"}},{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",Object.assign({className:o},{children:"Item"})),(0,n.jsx)("th",Object.assign({className:o},{children:"Quantity"})),(0,n.jsx)("th",Object.assign({className:o},{children:"Price"})),(0,n.jsx)("th",Object.assign({className:o},{children:"Total"}))]})}),(0,n.jsx)("tbody",{children:null==s?void 0:s.itemsDetails.map(((s,e)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({className:a},{children:null==s?void 0:s.name})),(0,n.jsx)("td",Object.assign({className:a},{children:null==s?void 0:s.quantity})),(0,n.jsx)("td",Object.assign({className:a},{children:null==s?void 0:s.price})),(0,n.jsx)("td",Object.assign({className:a},{children:(null==s?void 0:s.quantity)*(null==s?void 0:s.price)}))]},e)))})]})),(0,n.jsxs)("div",Object.assign({style:{marginTop:"20px",textAlign:"right"}},{children:[(0,n.jsx)("strong",{children:"CGST:"})," ",null==s?void 0:s.CGST,"% ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"SGST:"})," ",null==s?void 0:s.SGST,"% ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Total:"})," ",null==s?void 0:s.total]}))]})),modern:({invoice:s})=>(0,n.jsxs)("div",Object.assign({style:{maxWidth:"800px",margin:"auto",padding:"30px",backgroundColor:"#f8f8f8",borderRadius:"10px",fontFamily:"Verdana, sans-serif"}},{children:[(0,n.jsxs)("header",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}},{children:[(0,n.jsx)("h1",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:"Invoice"})),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"ID:"})," ",null==s?void 0:s.id," ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Date:"})," ",null==s?void 0:s.invoiceDate]})]})),(0,n.jsxs)("section",Object.assign({style:{marginBottom:"20px"}},{children:[(0,n.jsx)("h2",Object.assign({style:{fontSize:"18px",color:"#555"}},{children:"Billing Information"})),(0,n.jsx)("p",{children:null==s?void 0:s.billingTo.name}),(0,n.jsx)("p",{children:null==s?void 0:s.billingTo.address})]})),(0,n.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse",marginBottom:"20px"}},{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",Object.assign({className:h},{children:"Product"})),(0,n.jsx)("th",Object.assign({className:h},{children:"Quantity"})),(0,n.jsx)("th",Object.assign({className:h},{children:"Price"})),(0,n.jsx)("th",Object.assign({className:h},{children:"Total"}))]})}),(0,n.jsx)("tbody",{children:null==s?void 0:s.itemsDetails.map(((s,e)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({className:x},{children:s.name})),(0,n.jsx)("td",Object.assign({className:x},{children:s.quantity})),(0,n.jsxs)("td",Object.assign({className:x},{children:["$",s.price]})),(0,n.jsxs)("td",Object.assign({className:x},{children:["$",s.quantity*s.price]}))]},e)))})]})),(0,n.jsx)("footer",Object.assign({style:{display:"flex",justifyContent:"flex-end",alignItems:"center",borderTop:"2px solid #ccc",paddingTop:"20px"}},{children:(0,n.jsxs)("div",Object.assign({style:{textAlign:"right"}},{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"CGST:"})," ",null==s?void 0:s.CGST,"%"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"SGST:"})," ",null==s?void 0:s.SGST,"%"]}),(0,n.jsxs)("h2",Object.assign({style:{fontSize:"24px",color:"#333",marginTop:"1rem"}},{children:["Total: $",null==s?void 0:s.total]}))]}))}))]})),professional:({invoice:s})=>(0,n.jsxs)("div",Object.assign({style:{maxWidth:"800px",margin:"auto",padding:"30px",backgroundColor:"#f8f8f8",borderRadius:"10px",fontFamily:"Verdana, sans-serif"}},{children:[(0,n.jsxs)("header",Object.assign({style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"}},{children:[(0,n.jsx)("h1",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:"Invoice"})),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"ID:"})," ",null==s?void 0:s.id," ",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Date:"})," ",null==s?void 0:s.invoiceDate]})]})),(0,n.jsxs)("section",Object.assign({style:{marginBottom:"20px"}},{children:[(0,n.jsx)("h2",Object.assign({style:{fontSize:"18px",color:"#555"}},{children:"Billing Information"})),(0,n.jsx)("p",{children:null==s?void 0:s.billingTo.name}),(0,n.jsx)("p",{children:null==s?void 0:s.billingTo.address})]})),(0,n.jsxs)("table",Object.assign({style:{width:"100%",borderCollapse:"collapse",marginBottom:"20px"}},{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Product"})),(0,n.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Quantity"})),(0,n.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Price"})),(0,n.jsx)("th",Object.assign({style:{borderBottom:"2px solid #ccc",paddingBottom:"10px"}},{children:"Total"}))]})}),(0,n.jsx)("tbody",{children:null==s?void 0:s.itemsDetails.map(((s,e)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({style:{padding:"10px 0"}},{children:s.name})),(0,n.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"center"}},{children:s.quantity})),(0,n.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"right"}},{children:s.price})),(0,n.jsx)("td",Object.assign({style:{padding:"10px 0",textAlign:"right"}},{children:s.quantity*s.price}))]},e)))})]})),(0,n.jsx)("footer",Object.assign({style:{display:"flex",justifyContent:"flex-end",alignItems:"center",borderTop:"2px solid #ccc",paddingTop:"20px"}},{children:(0,n.jsxs)("div",Object.assign({style:{textAlign:"right"}},{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"CGST:"})," ",null==s?void 0:s.CGST,"%"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"SGST:"})," ",null==s?void 0:s.SGST,"%"]}),(0,n.jsxs)("h2",Object.assign({style:{fontSize:"24px",color:"#333"}},{children:["Total: ",null==s?void 0:s.total]}))]}))}))]})),modernMinimal:({invoice:s})=>{var e,i,l;return(0,n.jsxs)("div",Object.assign({className:"bsPiU0UT0THid8Xlh8lh"},{children:[(0,n.jsxs)("header",Object.assign({className:"GAJvujHzhg9rhExX3oDw"},{children:[(0,n.jsx)("h1",Object.assign({className:"U5SRpB4VTPrbNUvPedbs"},{children:"INVOICE"})),(0,n.jsx)("div",Object.assign({className:"vLShzVNT7RFLWZ9wKK0y"},{children:(0,n.jsx)("h2",{children:"REAL ESTATE DEVELOPER"})}))]})),(0,n.jsxs)("section",Object.assign({className:"v1yKLYkD9BKTt6INIdno"},{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"To:"})," ",null===(e=null==s?void 0:s.billingTo)||void 0===e?void 0:e.name]}),(0,n.jsx)("p",{children:null===(i=null==s?void 0:s.billingTo)||void 0===i?void 0:i.address})]})),(0,n.jsxs)("section",Object.assign({className:"GTgCzYQHHK6YGZXPR2tb"},{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Date:"})," ",(null==s?void 0:s.invoiceDate)&&(0,j.Z)(+(null==s?void 0:s.invoiceDate))]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Due Date:"})," ",(null==s?void 0:s.paymentDueDate)&&(0,j.Z)(+(null==s?void 0:s.paymentDueDate))]})]})),(0,n.jsxs)("table",Object.assign({className:"bNMs_3jaIUbKCKuvz26w"},{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"NO"}),(0,n.jsx)("th",{children:"Item"}),(0,n.jsx)("th",{children:"QTY"}),(0,n.jsx)("th",{children:"PRICE"}),(0,n.jsx)("th",{children:"DISCOUNT"}),(0,n.jsx)("th",{children:"TOTAL"})]})}),(0,n.jsx)("tbody",{children:null===(l=null==s?void 0:s.itemsDetails)||void 0===l?void 0:l.map(((s,e)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e+1}),(0,n.jsx)("td",{children:null==s?void 0:s.name}),(0,n.jsx)("td",{children:null==s?void 0:s.quantity}),(0,n.jsxs)("td",{children:["$",null==s?void 0:s.discount]}),(0,n.jsxs)("td",{children:["$",null==s?void 0:s.price]}),(0,n.jsxs)("td",{children:["$",(null==s?void 0:s.price)*(null==s?void 0:s.quantity)-(null==s?void 0:s.discount)]})]})))}),(0,n.jsxs)("tfoot",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({colSpan:5},{children:"Sub Total"})),(0,n.jsx)("td",{children:"$7,950"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({colSpan:5},{children:"Tax 10%"})),(0,n.jsx)("td",{children:"$795"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({colSpan:5},{children:"Discount"})),(0,n.jsx)("td",{children:"$500"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",Object.assign({colSpan:5,className:"ZedR5RMK6lG3xCRqPHEj"},{children:"GRAND TOTAL"})),(0,n.jsx)("td",Object.assign({className:"DA8a0TfxlWqIfCPn3_xw"},{children:"$8,245"}))]})]})]})),(0,n.jsxs)("section",Object.assign({className:"MH7I3Dew7ce0vEFSI9eI"},{children:[(0,n.jsx)("h3",{children:"Term and Conditions :"}),(0,n.jsx)("p",{children:"Please send payment within 30 days of receiving this invoice. There will be a 10% interest charge per month on late invoices."})]})),(0,n.jsxs)("section",Object.assign({className:"JIAofIqZUQweCI1xaHrC"},{children:[(0,n.jsx)("h3",{children:"Payment Method"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Bank Name:"})," Wardiere Inc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Account Number:"})," 123-456-7890"]})]})),(0,n.jsxs)("footer",Object.assign({className:"h_a77HII8YXCGa0P_Etw"},{children:[(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:"Administrator"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Phone:"})," 123-456-7890"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Mail:"})," hello@reallygreatsite.com"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Address:"})," 123 Anywhere St., Any City"]})]}))]}))}},b=({invoice:s})=>{const[e,i]=(0,l.useState)("basic"),a=g[e],o=s=>{i(s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,Object.assign({type:r.M2.Title2,style:{margin:"2rem"}},{children:"Preview:"})),(0,n.jsxs)("div",Object.assign({className:"jWW1yH70woJ8SydRNJvw"},{children:[(0,n.jsxs)("div",Object.assign({className:"y2TthXBSJ1dS2Wx2zTDb"},{children:[(0,n.jsx)("div",Object.assign({className:`${c} ${"basic"==e&&t}`,onClick:()=>{o("basic")}},{children:(0,n.jsx)(d.A,Object.assign({type:r.M2.Button2},{children:"Basic"}))})),(0,n.jsx)("div",Object.assign({className:`${c} ${"modern"==e&&t}`,onClick:()=>{o("modern")}},{children:(0,n.jsx)(d.A,Object.assign({type:r.M2.Button2},{children:"Modern"}))})),(0,n.jsx)("div",Object.assign({className:`${c} ${"professional"==e&&t}`,onClick:()=>{o("professional")}},{children:(0,n.jsx)(d.A,Object.assign({type:r.M2.Button2},{children:"Simple"}))})),(0,n.jsx)("div",Object.assign({className:`${c} ${"modernMinimal"==e&&t}`,onClick:()=>{o("modernMinimal")}},{children:(0,n.jsx)(d.A,Object.assign({type:r.M2.Button2},{children:"Modern Minimal"}))}))]})),(0,n.jsx)("div",Object.assign({className:"tOuFTJSCUIu_R254gpD2"},{children:(0,n.jsx)(a,{invoice:s})}))]}))]})}}}]);
//# sourceMappingURL=169.fc8165a7441c409eadf9.js.map