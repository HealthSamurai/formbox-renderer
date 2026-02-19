import{j as e,r as _,a6 as f}from"./iframe-mXzSsIwx.js";import"./preload-helper-PPVm8Dsz.js";function q(n){return n?n.split(/\s+/).filter(Boolean).some(t=>t.endsWith("__errors")):!1}function pe({id:n,type:t="text",value:s,onChange:r,disabled:a,placeholder:o,ariaLabelledBy:u,ariaDescribedBy:i,inputMode:d,minLength:c,maxLength:p}){const v=i&&i.trim().length>0?i:void 0,x=q(v)?"nhsuk-input nhsuk-input--error":"nhsuk-input";return e.jsx("input",{id:n,className:x,type:t,value:s,onChange:b=>r(b.target.value),disabled:a,placeholder:o,"aria-labelledby":u,"aria-describedby":v,inputMode:d,minLength:c,maxLength:p})}pe.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};function me({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u,inputMode:i,minLength:d,maxLength:c}){const p=u&&u.trim().length>0?u:void 0;return e.jsx("textarea",{id:n,className:`nhsuk-textarea nhsuk-u-margin-bottom-0 ${q(p)?"nhsuk-textarea--error":""}`,value:t,onChange:v=>s(v.target.value),disabled:r,placeholder:a,"aria-labelledby":o,"aria-describedby":p,inputMode:i,minLength:d,maxLength:c,rows:5})}me.__docgenInfo={description:"",methods:[],displayName:"TextArea"};function ke({id:n,value:t,onChange:s,disabled:r,placeholder:a,step:o,min:u,max:i,ariaLabelledBy:d,ariaDescribedBy:c,unitLabel:p}){const v=[c].filter(Boolean).join(" ").trim(),x=v.length>0?v:void 0,b=q(x)?"nhsuk-input nhsuk-input--error":"nhsuk-input";if(p){const y=n?`${n}-unit`:void 0;return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx("input",{id:n,className:b,type:"number",value:t??"",onChange:j=>{const g=j.target.value;s(g===""?void 0:Number(g))},disabled:r,placeholder:a,step:o,min:u,max:i,"aria-labelledby":d,"aria-describedby":[x,y].filter(Boolean).join(" ")||void 0}),e.jsx("span",{className:"nhsuk-input__suffix",id:y,children:p})]})}return e.jsx("input",{id:n,className:b,type:"number",value:t??"",onChange:y=>{const j=y.target.value;s(j===""?void 0:Number(j))},disabled:r,placeholder:a,step:o,min:u,max:i,"aria-labelledby":d,"aria-describedby":x})}ke.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};function re(n){const t=n.trim(),s=/^([0-9]{4})(?:-([0-9]{2})(?:-([0-9]{2}))?)?$/.exec(t);return s?{year:s[1]??"",month:s[2]??"",day:s[3]??""}:{day:"",month:"",year:""}}function ne(n,t){return n.replaceAll(/\D/g,"").slice(0,t)}function U(n){return n.current?.value??""}function fe({id:n,value:t,onChange:s,disabled:r,ariaLabelledBy:a,ariaDescribedBy:o}){const u=_.useRef(null),i=_.useRef(null),d=_.useRef(null);_.useEffect(()=>{const k=re(t),N=(S,I)=>{const m=S.current;m&&m.value!==I&&(m.value=I)};N(u,k.day),N(i,k.month),N(d,k.year)},[t]);const c=o&&o.trim().length>0?o:void 0,v=q(c)?"nhsuk-input nhsuk-date-input__input nhsuk-input--error":"nhsuk-input nhsuk-date-input__input",x=k=>{if(k.day===""&&k.month===""&&k.year===""){s("");return}k.day.length===2&&k.month.length===2&&k.year.length===4&&s(`${k.year}-${k.month}-${k.day}`)},b=k=>{const N=ne(k.target.value,2);k.target.value!==N&&(k.target.value=N),x({day:N,month:U(i),year:U(d)})},y=k=>{const N=ne(k.target.value,2);k.target.value!==N&&(k.target.value=N),x({day:U(u),month:N,year:U(d)})},j=k=>{const N=ne(k.target.value,4);k.target.value!==N&&(k.target.value=N),x({day:U(u),month:U(i),year:N})},g=re(t);return e.jsxs("div",{className:"nhsuk-date-input",role:"group","aria-labelledby":a,"aria-describedby":c,children:[e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:n,children:"Day"}),e.jsx("input",{ref:u,className:`${v} nhsuk-input--width-2`,id:n,name:`${n}[day]`,type:"text",inputMode:"numeric",autoComplete:"bday-day",defaultValue:g.day,disabled:r,onChange:b})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-month`,children:"Month"}),e.jsx("input",{ref:i,className:`${v} nhsuk-input--width-2`,id:`${n}-month`,name:`${n}[month]`,type:"text",inputMode:"numeric",autoComplete:"bday-month",defaultValue:g.month,disabled:r,onChange:y})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-year`,children:"Year"}),e.jsx("input",{ref:d,className:`${v} nhsuk-input--width-4`,id:`${n}-year`,name:`${n}[year]`,type:"text",inputMode:"numeric",autoComplete:"bday-year",defaultValue:g.year,disabled:r,onChange:j})]})})]})}fe.__docgenInfo={description:"",methods:[],displayName:"DateInput"};function Je(n){const t=n.trim(),s=/^([0-9]{4})(?:-([0-9]{2})(?:-([0-9]{2}))?)?$/.exec(t);return s?{year:s[1]??"",month:s[2]??"",day:s[3]??""}:{day:"",month:"",year:""}}function Xe(n){const t=n.trim(),s=/^([0-9]{2}):([0-9]{2})/.exec(t);if(!s)return"";const r=s[1]??"",a=s[2]??"";return`${r}:${a}`}function oe(n){const t=n.trim();if(t.length===0)return{day:"",month:"",year:"",time:""};const[s,r]=t.split("T",2);return{...Je(s??""),time:r?Xe(r):""}}function te(n,t){return n.replaceAll(/\D/g,"").slice(0,t)}function V(n){return n.current?.value??""}function Oe(n){return/^\d{2}:\d{2}$/.test(n)}function be({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u}){const i=_.useRef(null),d=_.useRef(null),c=_.useRef(null),p=_.useRef(null);_.useEffect(()=>{const m=oe(t),w=(T,M)=>{const P=T.current;P&&P.value!==M&&(P.value=M)};w(i,m.day),w(d,m.month),w(c,m.year),w(p,m.time)},[t]);const v=u&&u.trim().length>0?u:void 0,x=q(v),b=x?"nhsuk-input nhsuk-date-input__input nhsuk-input--error":"nhsuk-input nhsuk-date-input__input",y=x?"nhsuk-input nhsuk-input--error":"nhsuk-input",j=m=>{const w=m.day===""&&m.month===""&&m.year==="",T=m.time==="";if(w&&T){s("");return}m.day.length===2&&m.month.length===2&&m.year.length===4&&Oe(m.time)&&s(`${m.year}-${m.month}-${m.day}T${m.time}`)},g=m=>{const w=te(m.target.value,2);m.target.value!==w&&(m.target.value=w),j({day:w,month:V(d),year:V(c),time:V(p)})},k=m=>{const w=te(m.target.value,2);m.target.value!==w&&(m.target.value=w),j({day:V(i),month:w,year:V(c),time:V(p)})},N=m=>{const w=te(m.target.value,4);m.target.value!==w&&(m.target.value=w),j({day:V(i),month:V(d),year:w,time:V(p)})},S=m=>{j({day:V(i),month:V(d),year:V(c),time:m.target.value})},I=oe(t);return e.jsxs("div",{className:"nhsuk-date-input",role:"group","aria-labelledby":o,"aria-describedby":v,children:[e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:n,children:"Day"}),e.jsx("input",{ref:i,className:`${b} nhsuk-input--width-2`,id:n,name:`${n}[day]`,type:"text",inputMode:"numeric",defaultValue:I.day,disabled:r,onChange:g})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-month`,children:"Month"}),e.jsx("input",{ref:d,className:`${b} nhsuk-input--width-2`,id:`${n}-month`,name:`${n}[month]`,type:"text",inputMode:"numeric",defaultValue:I.month,disabled:r,onChange:k})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-year`,children:"Year"}),e.jsx("input",{ref:c,className:`${b} nhsuk-input--width-4`,id:`${n}-year`,name:`${n}[year]`,type:"text",inputMode:"numeric",defaultValue:I.year,disabled:r,onChange:N})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-time`,children:"Time"}),e.jsx("input",{ref:p,id:`${n}-time`,className:`${y} nhsuk-date-input__input nhsuk-input--width-6`,type:"time",name:`${n}[time]`,defaultValue:I.time,disabled:r,placeholder:a,onChange:S})]})})]})}be.__docgenInfo={description:"",methods:[],displayName:"DateTimeInput"};function ve({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u,min:i,max:d}){const c=u&&u.trim().length>0?u:void 0,p=q(c)?"nhsuk-input nhsuk-input--width-6 nhsuk-input--error":"nhsuk-input nhsuk-input--width-6";return e.jsx("input",{id:n,className:p,type:"time",value:t,onChange:v=>s(v.target.value),disabled:r,placeholder:a,"aria-labelledby":o,"aria-describedby":c,min:i,max:d})}ve.__docgenInfo={description:"",methods:[],displayName:"TimeInput"};function en(n,t){return n.right<t.left?t.left-n.right:t.right<n.left?n.left-t.right:0}function ie(n,t,s){return n<t?t:n>s?s:n}function le(n,t,s,r,a=[]){const[o,u]=_.useState(!1);return _.useLayoutEffect(()=>{const i=()=>{const b=t.current,y=s.current;if(b==null||y==null)return;const j=b.getBoundingClientRect(),g=y.getBoundingClientRect(),k=en(j,g)<r;u(k)},d=typeof globalThis.requestAnimationFrame=="function"?globalThis.requestAnimationFrame:b=>globalThis.setTimeout(b,0),c=typeof globalThis.cancelAnimationFrame=="function"?globalThis.cancelAnimationFrame:b=>{globalThis.clearTimeout(b)},p=d(()=>i()),v=n.current;if(v==null)return()=>{c(p)};if(typeof ResizeObserver>"u"){const b=()=>i();return globalThis.addEventListener("resize",b),()=>{c(p),globalThis.removeEventListener("resize",b)}}const x=new ResizeObserver(()=>i());return x.observe(v),()=>{c(p),x.disconnect()}},[n,r,t,s,...a]),o}function ge({id:n,value:t,onChange:s,disabled:r,min:a,max:o,step:u=1,ariaLabelledBy:i,ariaDescribedBy:d,lowerLabel:c,upperLabel:p,unitLabel:v}){const x=typeof a=="number"?a:0,b=typeof o=="number"?o:x+100,y=ie(typeof t=="number"?t:x,x,b),j=b-x,g=j>0?(y-x)/j*100:0,k=ie(g,0,100),N=d?.trim()||void 0,S=q(N)?"nhsuk-input--error":void 0,I=t??y,m=_.useRef(null),w=_.useRef(null),T=_.useRef(null),M=_.useRef(null),P=le(m,w,T,8,[I]),B=le(m,w,M,8,[I]),F=v?e.jsx(rn,{children:v}):void 0;return e.jsxs(nn,{"data-disabled":r?"true":"false",children:[e.jsx(tn,{id:n,className:S,type:"range",min:x,max:b,step:u||1,value:y,onChange:L=>{const C=Number(L.target.value);s(Number.isNaN(C)?void 0:C)},disabled:r,"aria-labelledby":i,"aria-describedby":N}),e.jsxs(sn,{"aria-hidden":"true",ref:m,children:[e.jsxs(an,{className:"nhsuk-label","aria-hidden":"true",$left:k,ref:w,children:[I," ",F]}),e.jsx(ue,{className:"nhsuk-label",ref:T,"data-hidden":P?"true":"false",children:c??e.jsxs(e.Fragment,{children:[x," ",F]})}),e.jsx(ue,{className:"nhsuk-label",ref:M,"data-hidden":B?"true":"false",children:p??e.jsxs(e.Fragment,{children:[b," ",F]})})]})]})}const nn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-1);
  width: 100%;
`,tn=f.input`
  width: 100%;
  display: block;
  --nhsuk-slider-track-size: var(--nhsuk-spacing-2);
  --nhsuk-slider-thumb-size: calc(
    var(--nhsuk-spacing-4) + var(--nhsuk-spacing-1)
  );
  --nhsuk-slider-thumb-dash-width: var(--nhsuk-border-width-form-element);
  --nhsuk-slider-thumb-dash-gap: calc(
    var(--nhsuk-border-width-form-element) + 1px
  );
  --nhsuk-slider-thumb-dash-offset: calc(
    var(--nhsuk-slider-thumb-dash-gap) / 2
  );
  --nhsuk-slider-thumb-dash-edge: calc(
    var(--nhsuk-slider-thumb-dash-offset) + var(--nhsuk-slider-thumb-dash-width)
  );
  --nhsuk-slider-thumb-dash-inset: var(--nhsuk-spacing-1);

  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  padding-top: calc(var(--nhsuk-spacing-2) + 2px);
  padding-bottom: calc(var(--nhsuk-spacing-2) - 2px);

  &::-webkit-slider-runnable-track {
    background: var(--nhsuk-border-colour);
    border-radius: 0;
    height: var(--nhsuk-slider-track-size);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: var(--nhsuk-secondary-button-hover-colour);
    background-image: linear-gradient(
      90deg,
      transparent calc(50% - var(--nhsuk-slider-thumb-dash-edge)),
      currentColor calc(50% - var(--nhsuk-slider-thumb-dash-edge)),
      currentColor calc(50% - var(--nhsuk-slider-thumb-dash-offset)),
      transparent calc(50% - var(--nhsuk-slider-thumb-dash-offset)),
      transparent calc(50% + var(--nhsuk-slider-thumb-dash-offset)),
      currentColor calc(50% + var(--nhsuk-slider-thumb-dash-offset)),
      currentColor calc(50% + var(--nhsuk-slider-thumb-dash-edge)),
      transparent calc(50% + var(--nhsuk-slider-thumb-dash-edge))
    );
    background-repeat: no-repeat;
    background-size: 100%
      calc(100% - (var(--nhsuk-slider-thumb-dash-inset) * 2));
    background-position: center;
    border: 2px solid var(--nhsuk-secondary-button-border-colour);
    border-radius: 2px;
    box-shadow: 0 4px 0 var(--nhsuk-secondary-button-shadow-colour);
    color: var(--nhsuk-secondary-button-border-colour);
    height: calc(var(--nhsuk-slider-thumb-size) - 2px);
    margin-top: calc(
      (var(--nhsuk-slider-thumb-size) - var(--nhsuk-slider-track-size)) / -2 -
        2px
    );
    width: var(--nhsuk-slider-thumb-size);
  }

  &::-moz-range-track {
    background: var(--nhsuk-border-colour);
    border-radius: 0;
    height: var(--nhsuk-slider-track-size);
  }

  &::-moz-range-thumb {
    background-color: var(--nhsuk-secondary-button-hover-colour);
    background-image: linear-gradient(
      90deg,
      transparent calc(50% - var(--nhsuk-slider-thumb-dash-edge)),
      currentColor calc(50% - var(--nhsuk-slider-thumb-dash-edge)),
      currentColor calc(50% - var(--nhsuk-slider-thumb-dash-offset)),
      transparent calc(50% - var(--nhsuk-slider-thumb-dash-offset)),
      transparent calc(50% + var(--nhsuk-slider-thumb-dash-offset)),
      currentColor calc(50% + var(--nhsuk-slider-thumb-dash-offset)),
      currentColor calc(50% + var(--nhsuk-slider-thumb-dash-edge)),
      transparent calc(50% + var(--nhsuk-slider-thumb-dash-edge))
    );
    background-repeat: no-repeat;
    background-size: 100%
      calc(100% - (var(--nhsuk-slider-thumb-dash-inset) * 2));
    background-position: center;
    border: 2px solid var(--nhsuk-secondary-button-border-colour);
    border-radius: 2px;
    box-shadow: 0 4px 0 var(--nhsuk-secondary-button-shadow-colour);
    color: var(--nhsuk-secondary-button-border-colour);
    height: calc(var(--nhsuk-slider-thumb-size) - 2px);
    width: var(--nhsuk-slider-thumb-size);
  }

  &:hover::-webkit-slider-thumb {
    background-color: var(--nhsuk-secondary-button-hover-colour);
  }

  &:hover::-moz-range-thumb {
    background-color: var(--nhsuk-secondary-button-hover-colour);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible::-webkit-slider-thumb,
  &:focus::-webkit-slider-thumb {
    background-color: var(--nhsuk-focus-colour);
    border: none;
    box-shadow: 0 4px 0 var(--nhsuk-black-colour);
    color: var(--nhsuk-black-colour);
  }

  &:focus-visible::-moz-range-thumb,
  &:focus::-moz-range-thumb {
    background-color: var(--nhsuk-focus-colour);
    border: none;
    box-shadow: 0 4px 0 var(--nhsuk-black-colour);
    color: var(--nhsuk-black-colour);
  }

  &:active::-webkit-slider-thumb,
  &:active:focus::-webkit-slider-thumb,
  &:active:focus-visible::-webkit-slider-thumb {
    background-color: var(--nhsuk-secondary-button-hover-colour);
    border: 2px solid var(--nhsuk-secondary-button-border-colour);
    box-shadow: 0 2px 0 var(--nhsuk-secondary-button-shadow-colour);
    color: var(--nhsuk-secondary-button-border-colour);
    transform: translateY(2px);
  }

  &:active::-moz-range-thumb,
  &:active:focus::-moz-range-thumb,
  &:active:focus-visible::-moz-range-thumb {
    background-color: var(--nhsuk-secondary-button-hover-colour);
    border: 2px solid var(--nhsuk-secondary-button-border-colour);
    box-shadow: 0 2px 0 var(--nhsuk-secondary-button-shadow-colour);
    color: var(--nhsuk-secondary-button-border-colour);
    transform: translateY(2px);
  }
`,sn=f.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & [data-hidden="true"] {
    visibility: hidden;
  }
`,ue=f.div`
  white-space: nowrap;
`,an=f.div`
  position: absolute;
  left: ${n=>`${n.$left}%`};
  top: 0;
  transform: ${n=>`translate(-${n.$left}%, 0)`};
  display: inline-flex;
  align-items: center;
  gap: var(--nhsuk-spacing-1);
  white-space: nowrap;
`,rn=f.span`
  color: var(--nhsuk-secondary-text-colour);
`;ge.__docgenInfo={description:"",methods:[],displayName:"SliderInput",props:{step:{defaultValue:{value:"1",computed:!1},required:!1}}};function xe({id:n,value:t,onChange:s,disabled:r,min:a,max:o,step:u,ariaLabelledBy:i,ariaDescribedBy:d,placeholder:c,unitLabel:p}){const v=p?`${n}-unit`:void 0,x=[d,v].filter(Boolean).join(" ").trim()||void 0;return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx("input",{id:n,className:q(x)?"nhsuk-input nhsuk-input--error":"nhsuk-input",type:"number",value:t??"",onChange:b=>{const y=b.target.value;s(y===""?void 0:Number(y))},disabled:r,min:a,max:o,step:u,placeholder:c,"aria-labelledby":i,"aria-describedby":x}),p?e.jsx("span",{className:"nhsuk-input__suffix",id:v,children:p}):void 0]})}xe.__docgenInfo={description:"",methods:[],displayName:"SpinnerInput"};function Q({label:n="Loading options...",showLabel:t=!1,size:s="sm"}){return e.jsxs(on,{role:"status","aria-live":"polite",children:[e.jsx(ln,{"aria-hidden":"true","data-size":s}),t?e.jsx(un,{children:n}):e.jsx("span",{className:"nhsuk-u-visually-hidden",children:n})]})}const on=f.span`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-border-width-form-element));
`,ln=f.span`
  width: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
  height: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
  border-radius: 999px;
  border: var(--nhsuk-border-width-form-element) solid
    var(--nhsuk-border-colour);
  border-top-color: var(--nhsuk-brand-colour);
  animation: spin var(--nhsuk-spinner-duration) linear infinite;

  &[data-size="md"] {
    width: calc(
      var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2) +
        var(--nhsuk-border-width-form-element)
    );
    height: calc(
      var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2) +
        var(--nhsuk-border-width-form-element)
    );
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,un=f.span`
  font-size: var(--nhsuk-font-size-s);
  color: var(--nhsuk-secondary-text-colour);
`;Q.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner",props:{label:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",defaultValue:{value:'"Loading options..."',computed:!1}},showLabel:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | undefined',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"undefined"}]},description:"",defaultValue:{value:'"sm"',computed:!1}}}};function ye({options:n,selectedOption:t,onChange:s,onSearch:r,specifyOtherOption:a,customOptionForm:o,id:u,ariaLabelledBy:i,ariaDescribedBy:d,disabled:c=!1,isLoading:p=!1,placeholder:v}){const x=_.useRef(null),b=_.useRef(null),[y,j]=_.useState(""),[g,k]=_.useState(!1),[N,S]=_.useState(!1),[I,m]=_.useState(),w=_.useRef(new Map),T=!!o,M=g||T,B=!!r&&M,F=t?.token??"",L=!t,C=l=>{j(l),r?.(l)},X=t?t.label:e.jsx(cn,{children:v??"Select an option"}),D=`${u}-listbox`,E=_.useMemo(()=>a?[...n,a]:n,[n,a]),Y=a?n.length:-1,H=_.useMemo(()=>{if(!M||E.length===0)return;const l=I?E.find(W=>W.token===I):void 0;if(l&&!l.disabled)return l.token;const R=F?E.find(W=>W.token===F):void 0;return R&&!R.disabled?R.token:E.find(W=>!W.disabled)?.token},[I,M,F,E]),K=E.findIndex(l=>l.token===H),A=K===-1?void 0:`${D}-option-${K}`;_.useEffect(()=>{if(!M||H===void 0)return;w.current.get(H)?.scrollIntoView?.({block:"nearest"})},[M,H]),_.useEffect(()=>{g&&b.current?.focus()},[g]);const Z=l=>{c||p||(s(l),C(""),S(!1),m(void 0),k(!1))},O=()=>{s(),C(""),S(!1),m(void 0),k(!1)},ee=(l,R)=>{if(E.length===0)return-1;const z=E.length,W=l<0?R===1?-1:z:l;for(const J of E.keys()){const ae=((W+R*(J+1))%z+z)%z;if(!E[ae].disabled)return ae}return-1},G=l=>{const R=[...E.keys()];l===-1&&R.reverse();for(const z of R)if(!E[z].disabled)return z;return-1},h=l=>{if(T||x.current==null)return;const R=l.relatedTarget;if(R&&x.current.contains(R))return;!c&&!p&&N&&y.trim().length===0&&t&&s(),m(void 0),k(!1)},$=l=>{if(l.key==="ArrowDown"||l.key==="ArrowUp"){if(l.preventDefault(),!M){C(""),S(!1),k(!0);return}const R=l.key==="ArrowDown"?1:-1,z=ee(K,R);z!==-1&&m(E[z].token);return}if(l.key==="Home"||l.key==="End"){l.preventDefault(),M||(C(""),S(!1),k(!0));const R=l.key==="Home"?1:-1,z=G(R);z!==-1&&m(E[z].token);return}if(l.key==="Enter"){if(l.preventDefault(),!M){C(""),S(!1),k(!0);return}if(K!==-1){const R=E[K];R.disabled||Z(R.token)}return}if(l.key==="Escape"){if(T)return;m(void 0),k(!1)}};return e.jsxs(dn,{"aria-busy":p||void 0,ref:x,onBlur:h,"data-has-spinner":p?"true":void 0,"data-disabled":c||p?"true":void 0,children:[B?e.jsx(hn,{ref:b,id:u,className:"nhsuk-input",value:y,onChange:l=>{C(l.target.value),S(!0),k(!0)},onFocus:()=>{!c&&!p&&(C(""),S(!1),k(!0))},onClick:()=>{!c&&!p&&!g&&(C(""),S(!1),k(!0))},onKeyDown:$,disabled:c||p,"aria-labelledby":i,"aria-describedby":d,role:"combobox","aria-autocomplete":"list","aria-expanded":M,"aria-controls":D,"aria-activedescendant":M&&A?A:void 0,placeholder:v??"Select an option",autoComplete:"off"}):e.jsx(pn,{id:u,className:"nhsuk-input",role:"combobox","aria-labelledby":i,"aria-describedby":d,"aria-expanded":M,"aria-controls":D,"aria-placeholder":t?void 0:v??"Select an option","aria-disabled":c||p?!0:void 0,tabIndex:c||p?-1:0,"data-disabled":c||p?"true":void 0,onClick:()=>{!c&&!p&&!g&&(C(""),S(!1),k(!0))},onKeyDown:$,children:X}),e.jsxs(kn,{children:[p&&e.jsx(fn,{"aria-hidden":"true",children:e.jsx(Q,{})}),t?e.jsx(mn,{type:"button",onClick:O,disabled:c||p,"data-disabled":c||p?"true":void 0,onMouseDown:l=>l.preventDefault(),"aria-label":"Clear"}):L&&e.jsx(gn,{"aria-hidden":"true"})]}),M&&e.jsx(bn,{id:D,role:"listbox","aria-labelledby":i,"aria-describedby":d,children:o?e.jsx(vn,{role:"presentation",children:o}):e.jsxs(e.Fragment,{children:[n.map((l,R)=>e.jsx(de,{id:`${D}-option-${R}`,type:"button",role:"option","aria-selected":l.token===F,"aria-disabled":l.disabled||void 0,disabled:l.disabled,"data-active":l.token===H,ref:z=>{z?w.current.set(l.token,z):w.current.delete(l.token)},onFocus:()=>m(l.token),onKeyDown:$,onClick:()=>{l.disabled||Z(l.token)},children:l.label},l.token)),a&&e.jsx(de,{id:`${D}-option-${Y}`,type:"button",role:"option","aria-selected":a.token===F,"aria-disabled":a.disabled||void 0,disabled:!!a.disabled,"data-active":a.token===H,"data-sticky":"true",ref:l=>{l?w.current.set(a.token,l):w.current.delete(a.token)},onFocus:()=>m(a.token),onKeyDown:$,onClick:()=>{a.disabled||Z(a.token)},children:a.label})]})})]})}const dn=f.div`
  position: relative;
  flex: 1;
  min-width: 100px;
  width: 100%;
  --nhsuk-select-right-padding: var(--nhsuk-spacing-5);

  &[data-has-spinner="true"] {
    --nhsuk-select-right-padding: var(--nhsuk-spacing-7);
  }
`,cn=f.span`
  color: var(--nhsuk-secondary-text-colour);
  opacity: var(--nhsuk-opacity-solid);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hn=f.input`
  padding-right: var(--nhsuk-select-right-padding);

  &::placeholder {
    opacity: var(--nhsuk-opacity-solid);
    color: var(--nhsuk-secondary-text-colour);
  }
`,pn=f.div`
  display: flex;
  align-items: center;
  cursor: text;
  padding-right: var(--nhsuk-select-right-padding);

  &[data-disabled="true"] {
    cursor: not-allowed;
  }
`,mn=f.button`
  width: 10px;
  height: 10px;
  border: none;
  background: transparent;
  padding: 0;
  position: relative;
  cursor: pointer;
  color: var(--nhsuk-secondary-text-colour);
  pointer-events: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: var(--nhsuk-border-width-form-element);
    background: currentColor;
    transform-origin: center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &[data-disabled="true"] {
    opacity: var(--nhsuk-opacity-disabled);
    cursor: not-allowed;
  }
`,kn=f.div`
  position: absolute;
  right: calc(var(--nhsuk-spacing-2) + var(--nhsuk-spacing-1));
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: var(--nhsuk-spacing-1);
  pointer-events: none;
`,fn=f.span`
  pointer-events: none;
`,bn=f.div`
  position: absolute;
  top: calc(100% + var(--nhsuk-spacing-2));
  left: 0;
  right: 0;
  max-height: calc(var(--nhsuk-spacing-9) * 4);
  overflow: auto;
  border: var(--nhsuk-border-table-cell-width) solid var(--nhsuk-border-colour);
  background: var(--nhsuk-input-background-colour);
  z-index: var(--nhsuk-z-index-dropdown);
`,vn=f.div`
  padding: var(--nhsuk-spacing-3);
`,de=f.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--nhsuk-spacing-2)
    calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
  border: none;
  background: transparent;
  cursor: pointer;
  font: inherit;
  color: inherit;

  &[data-active="true"] {
    background: var(--nhsuk-secondary-button-hover-colour);
  }

  &[data-sticky="true"] {
    position: sticky;
    bottom: 0;
    border-top: var(--nhsuk-border-table-cell-width) solid
      var(--nhsuk-border-colour);
    background: var(--nhsuk-input-background-colour);
  }

  &[data-sticky="true"][data-active="true"] {
    background: var(--nhsuk-secondary-button-hover-colour);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--nhsuk-opacity-disabled);
  }
`,gn=f.span`
  width: 10px;
  height: 10px;
  position: relative;
  color: var(--nhsuk-secondary-text-colour);
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid currentColor;
  }

  [data-disabled="true"] & {
    opacity: var(--nhsuk-opacity-disabled);
  }
`;ye.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};function je({id:n,groupName:t,value:s,checked:r,onChange:a,ariaLabelledBy:o,ariaDescribedBy:u,disabled:i,label:d}){const c=u&&u.trim().length>0?u:void 0;return e.jsx("div",{className:"nhsuk-radios nhsuk-radios--small",role:"group",children:e.jsxs("div",{className:"nhsuk-radios__item",children:[e.jsx("input",{className:"nhsuk-radios__input",type:"radio",name:t,value:s,id:n,checked:r,disabled:i,"aria-labelledby":o,"aria-describedby":c,onChange:a}),e.jsx(xn,{className:`nhsuk-label nhsuk-radios__label ${d?"":"nhsuk-u-padding-0"}`,htmlFor:n,children:d})]})})}const xn=f.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;je.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};function _e({options:n,selectedOption:t,orientation:s="vertical",onChange:r,specifyOtherOption:a,customOptionForm:o,id:u,ariaLabelledBy:i,ariaDescribedBy:d,disabled:c,isLoading:p}){const v=t?.token??"",x=y=>`${u}-${y}`,b=y=>{const j=x(y.token);return e.jsxs("div",{className:"nhsuk-radios__item",children:[e.jsx("input",{className:"nhsuk-radios__input",type:"radio",name:u,id:j,value:y.token,checked:v===y.token,disabled:c||p||y.disabled,onChange:g=>r(g.target.value),"aria-describedby":d}),e.jsx(yn,{className:"nhsuk-label nhsuk-radios__label",htmlFor:j,children:y.label})]},y.token)};return e.jsxs("div",{id:u,className:`nhsuk-radios nhsuk-radios--small nhsuk-u-width-full ${s==="horizontal"?"nhsuk-radios--inline":""}`,role:"radiogroup","aria-labelledby":i,"aria-describedby":d,"aria-busy":p||void 0,children:[n.map(y=>b(y)),a&&e.jsxs(e.Fragment,{children:[n.length>0&&e.jsx("div",{className:"nhsuk-radios__divider",children:"or"}),b(a)]}),p&&e.jsx(Q,{showLabel:!0}),o&&e.jsx("div",{className:"nhsuk-u-padding-top-2",children:o})]})}const yn=f.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;_e.__docgenInfo={description:"",methods:[],displayName:"RadioButtonList",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};function Ne({id:n,checked:t,onChange:s,ariaLabelledBy:r,ariaDescribedBy:a,disabled:o,label:u}){const i=a&&a.trim().length>0?a:void 0;return e.jsx("div",{className:"nhsuk-checkboxes nhsuk-checkboxes--small nhsuk-u-width-full",role:"group",children:e.jsxs("div",{className:"nhsuk-checkboxes__item",children:[e.jsx("input",{className:"nhsuk-checkboxes__input",type:"checkbox",id:n,checked:t,disabled:o,"aria-labelledby":r,"aria-describedby":i,onChange:s}),e.jsx(jn,{className:`nhsuk-label nhsuk-checkboxes__label ${u?"":"nhsuk-u-padding-0"}`,htmlFor:n,children:u})]})})}const jn=f.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;Ne.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};function we({options:n,selectedOptions:t,orientation:s="vertical",onSelect:r,onDeselect:a,specifyOtherOption:o,customOptionForm:u,id:i,ariaLabelledBy:d,ariaDescribedBy:c,disabled:p,isLoading:v}){const x=new Map(t.map(g=>[g.token,g])),b=o?.token,y=!!(u&&b),j=(g,k)=>{const N=`${i}-option-${k}`,S=`${N}-label`,I=x.get(g.token),m=g.token===b,w=[c,I?.ariaDescribedBy].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:"nhsuk-checkboxes__item",children:[e.jsx("input",{className:"nhsuk-checkboxes__input",type:"checkbox",name:i,id:N,checked:m&&y||!!I,disabled:p||v||g.disabled&&!(m&&y),"aria-labelledby":`${d} ${S}`,"aria-describedby":w,onChange:T=>{T.target.checked?r(g.token):a(g.token)}}),e.jsx(_n,{className:"nhsuk-label nhsuk-checkboxes__label",htmlFor:N,id:S,children:g.label}),I?.errors??void 0]},g.token)};return e.jsxs("div",{id:i,className:`nhsuk-checkboxes nhsuk-checkboxes--small ${s==="horizontal"?"nhsuk-checkboxes--inline":""}`,role:"group","aria-labelledby":d,"aria-describedby":c,"aria-busy":v||void 0,children:[n.map((g,k)=>j(g,k)),o&&e.jsxs(e.Fragment,{children:[n.length>0&&e.jsx("div",{className:"nhsuk-checkboxes__divider",children:"or"}),j(o,n.length)]}),v&&e.jsx(Q,{showLabel:!0}),u&&e.jsx("div",{className:"nhsuk-u-padding-top-2",children:u})]})}const _n=f.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;we.__docgenInfo={description:"",methods:[],displayName:"CheckboxList",props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};function Nn(n,t){if(!(n instanceof Element))return!1;const s=n.closest("input,textarea,select,button,a,[contenteditable]");return!!s&&s!==t}function Ie({options:n,onSelect:t,onDeselect:s,onSearch:r,id:a,specifyOtherOption:o,ariaLabelledBy:u,ariaDescribedBy:i,disabled:d=!1,isLoading:c=!1,selectedOptions:p,customOptionForm:v,placeholder:x}){const b=_.useRef(null),[y,j]=_.useState(""),g=_.useRef(null),[k,N]=_.useState(!1),[S,I]=_.useState(),m=_.useRef(new Map),w=!!v,T=k||w,M=!!r,P=_.useMemo(()=>new Set(p.map(h=>h.token)),[p]),B=`${a}-listbox`,F=h=>{j(h),r?.(h)},L=_.useMemo(()=>n.filter(h=>!P.has(h.token)),[n,P]),C=_.useMemo(()=>o?[...L,o]:L,[L,o]),X=o?L.length:-1,D=_.useMemo(()=>{if(!T||C.length===0)return;const h=S?C.find(l=>l.token===S):void 0;return h&&!h.disabled?h.token:C.find(l=>!l.disabled)?.token},[S,T,C]),E=C.findIndex(h=>h.token===D),Y=E===-1?void 0:`${B}-option-${E}`;_.useEffect(()=>{if(!T||D===void 0)return;m.current.get(D)?.scrollIntoView?.({block:"nearest"})},[D,T]);const H=h=>{h.length===0||d||c||(t(h),F(""),I(void 0),N(!1))},K=()=>{g.current?.focus()},A=()=>{d||c||N(!0)},Z=(h,$)=>{if(C.length===0)return-1;const l=C.length,R=h<0?$===1?-1:l:h;for(const z of C.keys()){const J=((R+$*(z+1))%l+l)%l;if(!C[J].disabled)return J}return-1},O=h=>{const $=[...C.keys()];h===-1&&$.reverse();for(const l of $)if(!C[l].disabled)return l;return-1},ee=h=>{if(w||!b.current)return;const $=h.relatedTarget;$&&b.current.contains($)||(F(""),I(void 0),N(!1))},G=h=>{if(h.key==="ArrowDown"||h.key==="ArrowUp"){if(h.preventDefault(),!T){A();return}const $=h.key==="ArrowDown"?1:-1,l=Z(E,$);l!==-1&&I(C[l].token);return}if(h.key==="Home"||h.key==="End"){h.preventDefault(),T||A();const $=h.key==="Home"?1:-1,l=O($);l!==-1&&I(C[l].token);return}if(h.key==="Enter"){if(h.preventDefault(),!T){A();return}if(E!==-1){const $=C[E];$.disabled||H($.token)}return}if(h.key==="Escape"){if(w)return;F(""),I(void 0),N(!1)}};return e.jsxs(wn,{className:"nhsuk-input",ref:b,onBlur:ee,onMouseDown:h=>{h.target===h.currentTarget&&(h.preventDefault(),K(),A())},"data-disabled":d?"true":void 0,"aria-busy":c||void 0,children:[p.map(h=>{const $=d||c||!!h.disabled;return e.jsxs(In,{children:[e.jsxs(Cn,{type:"button",className:"nhsuk-tag",disabled:$,onClick:l=>{$||Nn(l.target,l.currentTarget)||s(h.token)},children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Remove "}),h.label,e.jsx($n,{"aria-hidden":"true"})]}),h.errors]},h.token)}),e.jsx(Tn,{children:M?e.jsx(Rn,{ref:g,id:a,value:y,onChange:h=>{F(h.target.value),A()},onFocus:()=>{A()},onClick:()=>{A()},onKeyDown:G,disabled:d||c,"aria-labelledby":u,"aria-describedby":i,role:"combobox","aria-autocomplete":"list","aria-expanded":T,"aria-controls":B,"aria-activedescendant":T&&Y?Y:void 0,placeholder:x??"Select an option",autoComplete:"off"}):e.jsx(Sn,{id:a,role:"combobox","aria-labelledby":u,"aria-describedby":i,"aria-busy":c||void 0,"aria-expanded":T,"aria-controls":B,"aria-activedescendant":T&&Y?Y:void 0,"aria-disabled":d||c?!0:void 0,tabIndex:d||c?-1:0,onFocus:A,onMouseDown:h=>{h.preventDefault(),K(),A()},onKeyDown:G,children:p.length===0&&e.jsx(Mn,{children:x??"Select an option"})})}),c&&e.jsx(En,{children:e.jsx(Q,{})}),e.jsx(An,{"aria-hidden":"true"}),T&&e.jsx(zn,{id:B,role:"listbox","aria-labelledby":u,"aria-describedby":i,children:v?e.jsx(Dn,{role:"presentation",children:v}):e.jsxs(e.Fragment,{children:[L.map((h,$)=>e.jsx(Ce,{id:`${B}-option-${$}`,type:"button",role:"option","aria-selected":P.has(h.token),"aria-disabled":h.disabled||void 0,disabled:!!h.disabled,"data-active":h.token===D,ref:l=>{l?m.current.set(h.token,l):m.current.delete(h.token)},onFocus:()=>I(h.token),onKeyDown:G,onClick:()=>{h.disabled||H(h.token)},children:h.label},h.token)),o&&e.jsx(Fn,{id:`${B}-option-${X}`,type:"button",role:"option","aria-selected":P.has(o.token),"aria-disabled":o.disabled||void 0,disabled:!!o.disabled,"data-active":o.token===D,ref:h=>{h?m.current.set(o.token,h):m.current.delete(o.token)},onFocus:()=>I(o.token),onKeyDown:G,onClick:()=>{o.disabled||H(o.token)},children:o.label},o.token)]})})]})}const wn=f.div`
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-border-width-form-element));
  align-items: center;
  position: relative;
  padding-right: var(--nhsuk-spacing-5);

  &:focus-within {
    border: var(--nhsuk-border-width-form-element) solid
      var(--nhsuk-focus-text-colour);
    outline: var(--nhsuk-focus-width) solid var(--nhsuk-focus-colour);
    outline-offset: 0;
    box-shadow: inset 0 0 0 var(--nhsuk-border-width-form-element)
      var(--nhsuk-focus-text-colour);
  }

  &[data-disabled="true"] {
    opacity: var(--nhsuk-opacity-disabled);
    color: inherit;
    background-color: transparent;
    cursor: not-allowed;
  }
`,In=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-border-width-form-element);
`,Cn=f.button`
  border: none;
  cursor: pointer;
  font: inherit;
  display: inline-flex;
  align-items: center;
  gap: var(--nhsuk-spacing-1);

  &:disabled {
    cursor: not-allowed;
    opacity: var(--nhsuk-opacity-disabled);
  }
`,$n=f.span`
  width: 10px;
  height: 10px;
  position: relative;
  display: inline-block;
  color: currentColor;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: var(--nhsuk-border-width-form-element);
    background: currentColor;
    transform-origin: center;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`,Tn=f.div`
  position: relative;
  flex: 1 1 calc(var(--nhsuk-spacing-9) * 2 + var(--nhsuk-spacing-5));
  min-width: calc(var(--nhsuk-spacing-9) * 2);
`,Rn=f.input`
  border: none;
  width: 100%;
  outline: none;

  &::placeholder {
    opacity: var(--nhsuk-opacity-solid);
    color: var(--nhsuk-secondary-text-colour);
  }
`,Sn=f.div`
  width: 100%;
  min-height: var(--nhsuk-base-line-height);
  display: flex;
  align-items: center;
  padding: var(--nhsuk-spacing-1);
  outline: none;
  cursor: text;

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`,En=f.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`,Mn=f.span`
  color: var(--nhsuk-secondary-text-colour);
  opacity: var(--nhsuk-opacity-solid);
`,zn=f.div`
  position: absolute;
  top: calc(100% + var(--nhsuk-spacing-2));
  left: 0;
  right: 0;
  max-height: calc(var(--nhsuk-spacing-9) * 4);
  overflow: auto;
  border: var(--nhsuk-border-table-cell-width) solid var(--nhsuk-border-colour);
  background: var(--nhsuk-input-background-colour);
  z-index: var(--nhsuk-z-index-dropdown);
`,Ce=f.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--nhsuk-spacing-2)
    calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
  border: none;
  background: transparent;
  cursor: pointer;
  font: inherit;
  color: inherit;

  &[data-active="true"] {
    background: var(--nhsuk-secondary-button-hover-colour);
  }

  &:hover:not(:disabled) {
    background: var(--nhsuk-secondary-button-hover-colour);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--nhsuk-opacity-disabled);
  }
`,Fn=f(Ce)`
  position: sticky;
  bottom: 0;
  background: var(--nhsuk-input-background-colour);
  border-top: var(--nhsuk-border-table-cell-width) solid
    var(--nhsuk-border-colour);
  z-index: var(--nhsuk-z-index-sticky);
`,Dn=f.div`
  padding: var(--nhsuk-spacing-3);
`,An=f.span`
  position: absolute;
  right: calc(var(--nhsuk-spacing-2) + var(--nhsuk-spacing-1));
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid currentColor;
  color: var(--nhsuk-secondary-text-colour);
  pointer-events: none;

  [data-disabled="true"] & {
    opacity: var(--nhsuk-opacity-disabled);
  }
`;Ie.__docgenInfo={description:"",methods:[],displayName:"MultiSelectInput",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};function $e({content:n,errors:t,submit:s,cancel:r}){return e.jsxs(Vn,{children:[n,t,e.jsxs("div",{className:"nhsuk-button-group nhsuk-button-group--small nhsuk-u-margin-right-0",children:[e.jsx("button",{type:"button",onClick:r.onClick,disabled:r.disabled,className:"nhsuk-button nhsuk-button--small nhsuk-button--secondary",children:r.label}),e.jsx("button",{type:"button",onClick:s.onClick,disabled:s.disabled,className:"nhsuk-button nhsuk-button--small nhsuk-button--secondary",children:s.label})]})]})}const Vn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-3);
`;$e.__docgenInfo={description:"",methods:[],displayName:"CustomOptionForm"};function Te({id:n,messages:t}){if(t.length!==0)return e.jsx("div",{id:n,children:t.map((s,r)=>e.jsxs("span",{className:"nhsuk-error-message",children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Error:"})," ",s]},r))})}Te.__docgenInfo={description:"",methods:[],displayName:"Errors"};function Pn(n){return typeof globalThis.matchMedia!="function"?!1:globalThis.matchMedia(n).matches}function Bn(n){const[t,s]=_.useState(()=>Pn(n));return _.useEffect(()=>{if(typeof globalThis.matchMedia!="function")return;const r=globalThis.matchMedia(n),a=()=>{s(r.matches)};return a(),typeof r.addEventListener=="function"?(r.addEventListener("change",a),()=>{r.removeEventListener("change",a)}):(r.addListener(a),()=>{r.removeListener(a)})},[n]),t}function Hn(n){return n.url?n.url:n.data==null?void 0:`data:${n.contentType??"application/octet-stream"};base64,${n.data}`}function Re({attachment:n}){const t=n.title??n.url??"Attachment",s=Hn(n),r=n.contentType?.toLowerCase();return s==null?e.jsx("span",{children:t}):r?.startsWith("image/")?e.jsx("img",{src:s,alt:t,style:{maxWidth:"100%",height:"auto",borderRadius:"0.375rem"}}):r?.startsWith("audio/")?e.jsx("audio",{controls:!0,src:s}):r?.startsWith("video/")?e.jsx("video",{controls:!0,src:s,style:{maxWidth:"100%",height:"auto"}}):e.jsx("a",{className:"nhsuk-link",href:s,target:"_blank",rel:"noreferrer",children:t})}Re.__docgenInfo={description:"",methods:[],displayName:"Media",props:{attachment:{required:!0,tsType:{name:"Attachment"},description:""}}};function Se({prefix:n,shortText:t,itemMedia:s,children:r,id:a,htmlFor:o,required:u,help:i,legal:d,flyover:c,as:p="label"}){const x=Bn("(max-width: 40rem)")?t:r,b=s&&e.jsx("div",{className:"nhsuk-u-margin-top-2",children:e.jsx(Re,{attachment:s})}),y=e.jsxs(e.Fragment,{children:[n&&e.jsx(Ln,{children:n}),x,u&&e.jsx("span",{"aria-hidden":"true",children:" *"})]});return p==="legend"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nhsuk-fieldset__legend nhsuk-fieldset__legend--m",id:a,children:e.jsx("span",{className:"nhsuk-fieldset__heading",children:y})}),i,d,c,b]}):p==="label"?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"nhsuk-fieldset__legend nhsuk-fieldset__legend--s",id:a,htmlFor:o,children:e.jsx("span",{className:"nhsuk-fieldset__heading",children:y})}),i,d,c,b]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nhsuk-label",id:a,children:y}),i,d,c,b]})}function Ln({children:n}){return e.jsxs("span",{className:"nhsuk-label__prefix",children:[n," "]})}Se.__docgenInfo={description:"",methods:[],displayName:"Label",props:{as:{defaultValue:{value:'"label"',computed:!1},required:!1}}};function Ee({linkId:n,header:t,children:s,errors:r}){const a=r?"nhsuk-form-group nhsuk-form-group--error":"nhsuk-form-group";return e.jsxs("div",{className:a,"data-linkid":n,children:[t,r,s]})}Ee.__docgenInfo={description:"",methods:[],displayName:"QuestionScaffold"};function Me({isLoading:n}){if(n)return e.jsx("div",{className:"nhsuk-hint",role:"status",children:"Loading options…"})}Me.__docgenInfo={description:"",methods:[],displayName:"OptionsLoading"};function ze({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}ze.__docgenInfo={description:"",methods:[],displayName:"Help"};function Fe({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}Fe.__docgenInfo={description:"",methods:[],displayName:"Legal"};function De({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}De.__docgenInfo={description:"",methods:[],displayName:"Flyover"};function Ae({linkId:n,children:t}){return e.jsx("div",{className:"nhsuk-card nhsuk-u-margin-bottom-0","data-linkId":n,children:e.jsx("div",{className:"nhsuk-card__content",children:t})})}Ae.__docgenInfo={description:"",methods:[],displayName:"Header"};function Ve({linkId:n,children:t}){return e.jsx("footer",{className:"nhsuk-footer",role:"contentinfo","data-linkid":n,children:e.jsx("div",{className:"nhsuk-width-container",children:t})})}Ve.__docgenInfo={description:"",methods:[],displayName:"Footer"};function Pe({children:n,onAdd:t,canAdd:s,addLabel:r}){const a=r??"Add";return e.jsxs(qn,{children:[n,t&&e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:t,disabled:s===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:a})})]})}const qn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-2);
`;Pe.__docgenInfo={description:"",methods:[],displayName:"AnswerList"};function Be({control:n,onRemove:t,canRemove:s,errors:r,children:a}){return e.jsxs(Kn,{children:[e.jsxs(Wn,{children:[e.jsxs(Yn,{children:[n,r]}),t&&e.jsx(Gn,{children:e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:t,disabled:s===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:"Remove"})})})]}),e.jsx(Un,{children:a})]})}const Kn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-5);
`,Wn=f.div`
  display: flex;
  align-items: flex-start;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
`,Yn=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
`,Gn=f.div`
  display: flex;
`,Un=f.div`
  padding-left: var(--nhsuk-spacing-5);

  &:empty {
    display: none;
  }
`;Be.__docgenInfo={description:"",methods:[],displayName:"AnswerScaffold"};function He({onSubmit:n,onCancel:t,children:s,title:r,description:a,errors:o,before:u,after:i,pagination:d}){const c=b=>{b.preventDefault(),n?.()},p=t??(()=>{}),v=e.jsxs(e.Fragment,{children:[e.jsx(ce,{variant:"primary",type:"submit",disabled:!n,children:"Submit"}),e.jsx(ce,{variant:"secondary",type:"button",onClick:p,disabled:!t,children:"Cancel"})]}),x=r||a?e.jsxs("header",{className:"nhsuk-u-margin-bottom-4",children:[!!r&&e.jsx("h1",{className:"nhsuk-heading-l nhsuk-u-margin-bottom-1",children:r}),!!a&&e.jsx("span",{className:"nhsuk-caption-l",children:a})]}):void 0;if(d){const b=Qn(d.current,d.total),y=j=>{if(j===d.current)return;const g=Math.abs(j-d.current),k=j<d.current?d.onPrev:d.onNext;for(let N=0;N<g;N+=1)k()};return e.jsxs("form",{onSubmit:c,children:[x&&e.jsx(Xn,{children:x}),!!o&&e.jsx(se,{children:o}),!!u&&e.jsx(se,{children:u}),s,e.jsxs("nav",{className:"nhsuk-pagination nhsuk-pagination--numbered",role:"navigation","aria-label":"Pagination",children:[d.disabledPrev?void 0:e.jsxs("a",{href:"#",className:"nhsuk-pagination__previous",rel:"prev",onClick:j=>{j.preventDefault(),d.onPrev()},children:[e.jsx(Zn,{}),e.jsxs("span",{className:"nhsuk-pagination__title",children:["Previous",e.jsx("span",{className:"nhsuk-u-visually-hidden",children:" page"})]})]}),e.jsx("ul",{className:"nhsuk-pagination__list",children:b.map((j,g)=>{if(j.type==="ellipsis")return e.jsx("li",{className:"nhsuk-pagination__item nhsuk-pagination__item--ellipsis",children:"⋯"},`ellipsis-${g}`);const k=j.current?"nhsuk-pagination__item nhsuk-pagination__item--current":"nhsuk-pagination__item";return e.jsx("li",{className:k,children:e.jsx("a",{className:"nhsuk-pagination__link",href:"#","aria-label":`Page ${j.page}`,"aria-current":j.current?"page":void 0,onClick:N=>{N.preventDefault(),y(j.page)},children:j.page})},j.page)})}),d.disabledNext?void 0:e.jsxs("a",{href:"#",className:"nhsuk-pagination__next",rel:"next",onClick:j=>{j.preventDefault(),d.onNext()},children:[e.jsxs("span",{className:"nhsuk-pagination__title",children:["Next",e.jsx("span",{className:"nhsuk-u-visually-hidden",children:" page"})]}),e.jsx(Jn,{})]})]}),e.jsx("div",{className:"nhsuk-button-group",children:v}),!!i&&e.jsx(se,{children:i})]})}return e.jsxs("form",{onSubmit:c,children:[x,o,u,s,i,e.jsx("div",{className:"nhsuk-button-group",children:v})]})}function Qn(n,t){const s=new Set([1,t]);for(const o of[-2,-1,0,1,2]){const u=n+o;u>=1&&u<=t&&s.add(u)}const r=[...s].toSorted((o,u)=>o-u),a=[];return r.forEach((o,u)=>{const i=r[u-1];i!=null&&o-i>1&&a.push({type:"ellipsis"}),a.push({type:"page",page:o,current:o===n})}),a}function Zn(){return e.jsx("svg",{className:"nhsuk-icon nhsuk-icon--arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z"})})}function Jn(){return e.jsx("svg",{className:"nhsuk-icon nhsuk-icon--arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z"})})}function ce({variant:n,type:t="button",onClick:s,disabled:r,children:a}){const o=n==="primary"?"nhsuk-button":"nhsuk-button nhsuk-button--secondary";return e.jsx("button",{type:t,onClick:s,disabled:r,className:o,children:a})}const Xn=f.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
`,se=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-3);

  &:empty {
    display: none;
  }
`;He.__docgenInfo={description:"",methods:[],displayName:"Form"};function Le({children:n}){return e.jsx("div",{className:"nhsuk-form-group",children:n})}Le.__docgenInfo={description:"",methods:[],displayName:"Stack"};function On(n,t){if(n.length<=1)return[...n];const s=[];for(const[r,a]of n.entries())r>0&&s.push(t),s.push(a);return s}function qe({linkId:n,header:t,children:s,onAdd:r,canAdd:a,addLabel:o}){const u=o??"Add";return e.jsxs("div",{"data-linkid":n,children:[t,On(_.Children.toArray(s),e.jsx("hr",{className:"nhsuk-section-break--m nhsuk-section-break--visible"})),r&&e.jsx("div",{className:"nhsuk-button-group nhsuk-u-margin-top-4",children:e.jsx("button",{type:"button",onClick:r,disabled:a===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:u})})]})}qe.__docgenInfo={description:"",methods:[],displayName:"GroupList"};function Ke({header:n,children:t,errors:s,onRemove:r,canRemove:a,removeLabel:o}){return e.jsxs("div",{className:"nhsuk-form-group",children:[n,t,s,r&&e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:r,disabled:a===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:o??"Remove"})})]})}Ke.__docgenInfo={description:"",methods:[],displayName:"GroupScaffold"};function We({columns:n,rows:t}){if(t.length===0||n.length===0)return e.jsx("p",{className:"nhsuk-body-s nhsuk-u-secondary-text",children:"Nothing to display."});const s=t.some(a=>a.content!=null),r=t.some(a=>a.onRemove!=null);return e.jsx(tt,{children:e.jsxs("table",{className:"nhsuk-table",children:[e.jsx("thead",{className:"nhsuk-table__head",children:e.jsxs("tr",{className:"nhsuk-table__row",children:[s&&e.jsx("th",{scope:"col",className:"nhsuk-table__header","aria-hidden":"true"}),n.map(a=>e.jsx("th",{scope:"col",className:"nhsuk-table__header",children:he(a.content,a)},a.token)),r&&e.jsx("th",{scope:"col",className:"nhsuk-table__header","aria-hidden":"true"})]})}),e.jsx("tbody",{className:"nhsuk-table__body",children:t.map(a=>e.jsxs("tr",{className:"nhsuk-table__row",children:[s&&e.jsx("th",{scope:"row",className:"nhsuk-table__header",children:he(a.content,a)}),a.cells.map(o=>e.jsx("td",{className:"nhsuk-table__cell",children:o.content},o.token)),r&&e.jsx("td",{className:"nhsuk-table__cell",children:a.onRemove&&e.jsx("button",{type:"button",onClick:a.onRemove,disabled:a.canRemove===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-u-margin-bottom-0",children:a.removeLabel??"Remove"})})]},a.token))})]})})}function he(n,t){return!t.isLoading&&!t.errors?n:e.jsxs(et,{children:[e.jsxs(nt,{children:[n,t.isLoading&&e.jsx(Q,{})]}),t.errors??void 0]})}const et=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-1);
  align-items: flex-start;
`,nt=f.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-border-width-form-element));
`,tt=f.div`
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`;We.__docgenInfo={description:"",methods:[],displayName:"Table"};function Ye({children:n,spans:t}){const s=_.Children.toArray(n);return e.jsx(st,{children:s.map((r,a)=>e.jsx(at,{$span:t[a],children:r},a))})}const st=f.div`
  display: flex;
  width: 100%;

  @media (max-width: 19.99em) {
    display: block;

    & > * {
      max-width: 100%;
    }
  }

  & > * {
    margin-top: var(--nhsuk-spacing-2);
  }

  & > *:first-child,
  & > *:only-child {
    margin-top: 0;
  }

  @media (min-width: 20em) {
    align-items: flex-start;
    flex-direction: row;

    & > * {
      margin-top: 0;
      margin-left: var(--nhsuk-spacing-2);
    }

    & > *:first-child,
    & > *:only-child {
      margin-left: 0;
    }
  }
`,at=f.div`
  flex: ${n=>`${n.$span} 1 0`};
  min-width: 0;
`;Ye.__docgenInfo={description:"",methods:[],displayName:"InputGroup"};function Ge({id:n,ariaLabelledBy:t,ariaDescribedBy:s,disabled:r,accept:a,value:o,onChange:u}){const i=o!=null,d=o?.title??o?.url??(i?"Attachment selected":""),c=o?.size==null?"":`${Math.round(o.size/1024)} KB`,p=i?`${d}${c?` (${c})`:""}`:"",v=q(s)?"nhsuk-input nhsuk-input--error":"nhsuk-input",x=_.useRef(null),b=()=>{r||x.current?.click()},y=g=>{const k=g.currentTarget.files?.[0];if(k!==void 0)try{u?.(k)}finally{g.currentTarget.value=""}},j=g=>{r||(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),b())};return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx(ot,{className:v,type:"text",value:p,placeholder:"No file chosen",readOnly:!0,disabled:r,"aria-labelledby":t,"aria-describedby":s,onClick:b,onKeyDown:j}),e.jsx(rt,{ref:x,id:n,"aria-labelledby":t,"aria-describedby":s,className:"nhsuk-file-upload",disabled:r,type:"file",onChange:y,accept:a}),e.jsx("button",{className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",type:"button",onClick:b,disabled:r,children:i?"Change file":"Choose file"}),i&&e.jsx("button",{className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",type:"button",onClick:()=>u?.(),disabled:r,"aria-label":"Clear attachment",children:"Clear"})]})}const rt=f.input`
  display: none;
`,ot=f.input`
  flex: 1;
  min-width: calc(var(--nhsuk-spacing-9) * 3);
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;Ge.__docgenInfo={description:"",methods:[],displayName:"FileInput"};function Ue({header:n,items:t,value:s,onChange:r,errors:a,linkId:o}){if(t.length===0)return e.jsx("div",{className:"nhsuk-form-group",children:e.jsx("div",{className:"nhsuk-hint",children:"No tab content available."})});const u=Math.min(Math.max(s,0),Math.max(t.length-1,0));return e.jsxs("div",{"data-linkid":o,children:[n,a,e.jsxs("div",{className:"nhsuk-tabs",children:[e.jsx("ul",{className:"nhsuk-tabs__list",children:t.map((i,d)=>{const p=d===u?"nhsuk-tabs__list-item nhsuk-tabs__list-item--selected":"nhsuk-tabs__list-item";return e.jsx("li",{className:p,children:e.jsx("a",{id:i.buttonId,className:"nhsuk-tabs__tab",href:`#${i.panelId}`,onClick:v=>{v.preventDefault(),r(d)},children:i.label})},i.token)})}),t.map((i,d)=>{const p=d===u?"nhsuk-tabs__panel":"nhsuk-tabs__panel nhsuk-tabs__panel--hidden";return e.jsx("div",{className:p,id:i.panelId,"aria-labelledby":i.buttonId,children:i.content},i.token)})]})]})}Ue.__docgenInfo={description:"",methods:[],displayName:"TabContainer"};function Qe({linkId:n,children:t}){return e.jsx("div",{className:"nhsuk-form-group","data-linkid":n,children:t})}Qe.__docgenInfo={description:"",methods:[],displayName:"DisplayRenderer"};function Ze({href:n,children:t,target:s,rel:r}){return e.jsx("a",{href:n,className:"nhsuk-link",target:s,rel:r,children:t})}Ze.__docgenInfo={description:"",methods:[],displayName:"Link"};function it({children:n}){return e.jsx("div",{className:"nhsuk-frontend-supported",children:n})}it.__docgenInfo={description:"",methods:[],displayName:"Provider"};const ct={TextInput:pe,TextArea:me,NumberInput:ke,DateInput:fe,DateTimeInput:be,TimeInput:ve,SliderInput:ge,SpinnerInput:xe,SelectInput:ye,RadioButton:je,RadioButtonList:_e,Checkbox:Ne,CheckboxList:we,MultiSelectInput:Ie,CustomOptionForm:$e,Errors:Te,Label:Se,QuestionScaffold:Ee,OptionsLoading:Me,Help:ze,Legal:Fe,Flyover:De,Header:Ae,Footer:Ve,AnswerList:Pe,AnswerScaffold:Be,Form:He,Stack:Le,GroupList:qe,GroupScaffold:Ke,Table:We,InputGroup:Ye,FileInput:Ge,TabContainer:Ue,DisplayRenderer:Qe,Link:Ze};export{Qe as DisplayRenderer,Ze as Link,ke as NumberInput,it as Provider,Ue as TabContainer,me as TextArea,pe as TextInput,ct as theme};
