(window["webpackJsonpreact-mui-formik"]=window["webpackJsonpreact-mui-formik"]||[]).push([[0],{155:function(e,a,t){e.exports=t(299)},160:function(e,a,t){},161:function(e,a,t){},296:function(e,a,t){},297:function(e,a,t){},299:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),i=(t(160),t(147)),c=t(343),s=t(344),m=t(345),d=t(341),u=t(52),g=t(148),p=t.n(g),f=t(51),v=t(4),E=t(300),h=t(337),w=t(334),b=t(336),N=t(338),y=(t(161),function(e){var a=e.primary,t=e.secondary,n=e.to;return r.a.createElement(w.a,{button:!0,component:f.a,to:n},r.a.createElement(b.a,{primary:a,secondary:t}))}),k=Object(v.a)(function(e){return{root:{flexGrow:1},paper:{margin:"auto",maxWidth:500},list:{paddingTop:0,paddingBottom:0}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{className:a.paper},r.a.createElement(h.a,{component:"nav",className:a.list},r.a.createElement(y,{to:"/login",primary:"Authentication flow",secondary:"Starting with a login form, a prototype UI for a website's authentication flow. Includes, login, registration and forgot password forms."}),r.a.createElement(N.a,{light:!0}),r.a.createElement(y,{to:"/somewhere",primary:"Second example",secondary:"Some description text here of the second form example."}))))}),x=t(95),S=t(30),j=t(149),C=t(69),F=t(346),W=t(339),B=t(340),O=t(347),T=t(342),z=(t(296),function(e){var a=e.label;return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"divider__line"}),r.a.createElement("div",{className:"divider__label"},a))}),G=(t(297),C.object().shape({email:C.string().email("Must be a valid email address").required("Enter an email address"),password:C.string().min(8,"Must be at least 8 characters").max(64,"Cannot be longer than 64 characters").required("Enter a password")})),I=(Object(v.a)(function(e){return{paper:{padding:e.spacing(3)},formTitle:{paddingBottom:e.spacing(2)},rememberRow:{justifyContent:"space-between",alignItems:"center",paddingBottom:e.spacing(3)},linkForgotPassword:{color:e.palette.primary.main},label:{fontSize:"inherit"}}})(function(e){var a=e.classes,t=Object(n.useState)(!1),o=Object(x.a)(t,2),l=o[0],i=o[1],c=Object(n.useState)(!1),s=Object(x.a)(c,2),m=s[0],d=s[1],g=function(e){i(e.target.checked)},p=function(e){e.preventDefault(),d(!0)};return m?r.a.createElement(S.a,{to:"/registration"}):r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-panel"},r.a.createElement(E.a,{className:a.paper},r.a.createElement(u.a,{align:"center",variant:"h5",className:a.formTitle},"Login to your account"),r.a.createElement(j.a,{initialValues:{email:"",password:""},validationSchema:G,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;console.log("Submitted values",e),t(!0),setTimeout(function(){n(),t(!1)},500)}},function(e){var t=e.values,n=e.errors,o=e.touched,i=e.handleChange,c=e.handleSubmit,s=e.isSubmitting;return r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:c},r.a.createElement(F.a,{id:"email",label:"Email address",className:a.textField,margin:"normal",fullWidth:!0,required:!0,variant:"outlined",name:"email",onChange:i,value:t.email,helperText:o.email?n.email:"",error:!(!n.email||!o.email)}),r.a.createElement(F.a,{id:"password",label:"Password",className:a.textField,type:"password",margin:"normal",fullWidth:!0,required:!0,variant:"outlined",name:"password",onChange:i,value:t.password,helperText:o.password?n.password:"",error:!(!n.password||!o.password)}),r.a.createElement(W.a,{row:!0,className:a.rememberRow},r.a.createElement(B.a,{control:r.a.createElement(O.a,{color:"primary",checked:l,onChange:g}),label:"Remember you",classes:{label:a.label}}),r.a.createElement("span",{className:"link-forgot-password"},r.a.createElement(f.a,{to:"/forgot-password",className:a.linkForgotPassword},"Forgot your password?"))),r.a.createElement(T.a,{variant:"contained",color:"primary",fullWidth:!0,size:"large",type:"submit",disabled:s},"Login"),r.a.createElement("div",{className:"divider-container"},r.a.createElement(z,{label:"or continue with"})),r.a.createElement("div",{className:"form-row-split"},r.a.createElement(T.a,{variant:"outlined",size:"large",className:a.margin,fullWidth:!0},r.a.createElement("img",{src:".facebook-logo.svg",alt:"Facebook logo",className:"icon icon--facebook"}),"Facebook"),r.a.createElement(T.a,{variant:"outlined",size:"large",className:a.margin,fullWidth:!0},r.a.createElement("img",{src:".google-logo.svg",alt:"Google logo",className:"icon icon--google"}),"Google")),r.a.createElement("div",{className:"divider-container"},r.a.createElement(z,{label:"don't have an account?"})),r.a.createElement(T.a,{variant:"contained",color:"secondary",fullWidth:!0,size:"large",type:"button",onClick:p},"Create account"))}))))}),Object(i.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},nav:{marginBottom:e.spacing(3)},content:{display:"flex",flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),R=function(e){var a=I();return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,null),r.a.createElement("div",{className:a.nav},r.a.createElement(s.a,{position:"sticky"},r.a.createElement(m.a,null,r.a.createElement(d.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(p.a,null)),r.a.createElement(u.a,{variant:"h6",className:a.title},"React Material UI with Formik examples")))),r.a.createElement("div",{className:a.content},r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,1,2]]]);
//# sourceMappingURL=main.7d9cd866.chunk.js.map