(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__28pHk"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__2HdRH",loading:"QuoteForm_loading__1LhCG",control:"QuoteForm_control__2M__P",actions:"QuoteForm_actions__N1IJq"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(37),s=c(41),a=c.n(s),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(42),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{when:s,message:function(e){return"Are u sure want to leave? All entered data will be lose."}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),f=c(36);t.default=function(){var e=Object(o.h)(),t=Object(h.a)(f.b),c=t.sendRequest,r=t.status;Object(n.useEffect)((function(){"completed"===r&&e.push("/quotes")}),[e,r]);return Object(i.jsx)(b,{isLoading:"pending"===r,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.0ac35c4e.chunk.js.map