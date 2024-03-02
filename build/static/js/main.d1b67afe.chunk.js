(window["webpackJsonpreact-mui-formik"]=window["webpackJsonpreact-mui-formik"]||[]).push([[0],{144:function(e,a,t){e.exports=t(288)},149:function(e,a,t){},285:function(e,a,t){},286:function(e,a,t){},288:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),o=t.n(l),i=(t(149),t(133)),c=t(327),s=t(328),m=t(329),d=t(325),u=t(290),g=t(134),p=t.n(g),v=t(136),E=t(135),f=t(63),h=t(4),b=t(289),w=t(330),N=t(323),k=t(324),y=t(331),x=t(326),C=(t(285),function(e){var a=e.label;return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"divider__line"}),r.a.createElement("div",{className:"divider__label"},a))}),F=(t(286),f.object().shape({email:f.string().email("Must be a valid email address").required("Enter an email address"),password:f.string().min(8,"Must be at least 8 characters").max(64,"Cannot be longer than 64 characters").required("Enter a password")})),S=Object(h.a)(function(e){return{paper:{padding:e.spacing(3)},formTitle:{paddingBottom:e.spacing(2)},rememberRow:{justifyContent:"space-between",alignItems:"center",paddingBottom:e.spacing(3)},linkForgotPassword:{color:e.palette.primary.main},label:{fontSize:"inherit"}}})(function(e){var a=e.classes,t=Object(n.useState)(!1),l=Object(v.a)(t,2),o=l[0],i=l[1],c=function(e){i(e.target.checked)},s=function(e){e.preventDefault(),console.log("Redirect would happen here")};return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-panel"},r.a.createElement(b.a,{className:a.paper},r.a.createElement(u.a,{align:"center",variant:"h5",className:a.formTitle},"Login to your account"),r.a.createElement(E.a,{initialValues:{email:"",password:""},validationSchema:F,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;console.log("Submitted values",e),t(!0),setTimeout(function(){n(),t(!1)},500)}},function(e){var t=e.values,n=e.errors,l=e.touched,i=e.handleChange,m=e.handleSubmit,d=e.isSubmitting;return r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:m},r.a.createElement(w.a,{id:"email",label:"Email address",className:a.textField,margin:"normal",fullWidth:!0,required:!0,variant:"outlined",name:"email",onChange:i,value:t.email,helperText:l.email?n.email:"",error:!(!n.email||!l.email)}),r.a.createElement(w.a,{id:"password",label:"Password",className:a.textField,type:"password",margin:"normal",fullWidth:!0,required:!0,variant:"outlined",name:"password",onChange:i,value:t.password,helperText:l.password?n.password:"",error:!(!n.password||!l.password)}),r.a.createElement(N.a,{row:!0,className:a.rememberRow},r.a.createElement(k.a,{control:r.a.createElement(y.a,{color:"primary",checked:o,onChange:c}),label:"Remember you",classes:{label:a.label}}),r.a.createElement("span",{className:"link-forgot-password"},r.a.createElement("a",{href:"#",className:a.linkForgotPassword},"Forgot your password?"))),r.a.createElement(x.a,{variant:"contained",color:"primary",fullWidth:!0,size:"large",type:"submit",disabled:d},"Login"),r.a.createElement("div",{className:"divider-container"},r.a.createElement(C,{label:"or continue with"})),r.a.createElement("div",{className:"form-row-split"},r.a.createElement(x.a,{variant:"outlined",size:"large",className:a.margin,fullWidth:!0},r.a.createElement("img",{src:"./facebook-logo.svg",alt:"Facebook logo",className:"icon icon--facebook"}),"Facebook"),r.a.createElement(x.a,{variant:"outlined",size:"large",className:a.margin,fullWidth:!0},r.a.createElement("img",{src:"./google-logo.svg",alt:"Google logo",className:"icon icon--google"}),"Google")),r.a.createElement("div",{className:"divider-container"},r.a.createElement(C,{label:"don't have an account?"})),r.a.createElement(x.a,{variant:"contained",color:"secondary",fullWidth:!0,size:"large",type:"button",onClick:s},"Create account"))}))))}),W=Object(i.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},nav:{marginBottom:e.spacing(3)},content:{display:"flex",flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),B=function(e){var a=W();return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,null),r.a.createElement("div",{className:a.nav},r.a.createElement(s.a,{position:"sticky"},r.a.createElement(m.a,null,r.a.createElement(d.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(p.a,null)),r.a.createElement(u.a,{variant:"h6",className:a.title},"Example React, Material UI and Formik login page")))),r.a.createElement("div",{className:a.content},r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,1,2]]]);
//# sourceMappingURL=main.d1b67afe.chunk.js.map