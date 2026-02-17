import{j as e,r as y,a6 as b}from"./iframe-DhUtwfk0.js";import"./preload-helper-PPVm8Dsz.js";function K(n){return n?n.split(/\s+/).filter(Boolean).some(t=>t.endsWith("__errors")):!1}function pe({id:n,type:t="text",value:s,onChange:r,disabled:a,placeholder:o,ariaLabelledBy:u,ariaDescribedBy:i,inputMode:d,minLength:c,maxLength:p}){const x=i&&i.trim().length>0?i:void 0,g=K(x)?"nhsuk-input nhsuk-input--error":"nhsuk-input";return e.jsx("input",{id:n,className:g,type:t,value:s,onChange:m=>r(m.target.value),disabled:a,placeholder:o,"aria-labelledby":u,"aria-describedby":x,inputMode:d,minLength:c,maxLength:p})}pe.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};function me({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u,inputMode:i,minLength:d,maxLength:c}){const p=u&&u.trim().length>0?u:void 0;return e.jsx("textarea",{id:n,className:`nhsuk-textarea nhsuk-u-margin-bottom-0 ${K(p)?"nhsuk-textarea--error":""}`,value:t,onChange:x=>s(x.target.value),disabled:r,placeholder:a,"aria-labelledby":o,"aria-describedby":p,inputMode:i,minLength:d,maxLength:c,rows:5})}me.__docgenInfo={description:"",methods:[],displayName:"TextArea"};function ke({id:n,value:t,onChange:s,disabled:r,placeholder:a,step:o,min:u,max:i,ariaLabelledBy:d,ariaDescribedBy:c,unitLabel:p}){const x=[c].filter(Boolean).join(" ").trim(),g=x.length>0?x:void 0,m=K(g)?"nhsuk-input nhsuk-input--error":"nhsuk-input";if(p){const w=n?`${n}-unit`:void 0;return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx("input",{id:n,className:m,type:"number",value:t??"",onChange:v=>{const j=v.target.value;s(j===""?void 0:Number(j))},disabled:r,placeholder:a,step:o,min:u,max:i,"aria-labelledby":d,"aria-describedby":[g,w].filter(Boolean).join(" ")||void 0}),e.jsx("span",{className:"nhsuk-input__suffix",id:w,children:p})]})}return e.jsx("input",{id:n,className:m,type:"number",value:t??"",onChange:w=>{const v=w.target.value;s(v===""?void 0:Number(v))},disabled:r,placeholder:a,step:o,min:u,max:i,"aria-labelledby":d,"aria-describedby":g})}ke.__docgenInfo={description:"",methods:[],displayName:"NumberInput"};function re(n){const t=n.trim(),s=/^([0-9]{4})(?:-([0-9]{2})(?:-([0-9]{2}))?)?$/.exec(t);return s?{year:s[1]??"",month:s[2]??"",day:s[3]??""}:{day:"",month:"",year:""}}function ne(n,t){return n.replaceAll(/\D/g,"").slice(0,t)}function W(n){return n.current?.value??""}function fe({id:n,value:t,onChange:s,disabled:r,ariaLabelledBy:a,ariaDescribedBy:o}){const u=y.useRef(null),i=y.useRef(null),d=y.useRef(null);y.useEffect(()=>{const k=re(t),_=(R,C)=>{const f=R.current;f&&f.value!==C&&(f.value=C)};_(u,k.day),_(i,k.month),_(d,k.year)},[t]);const c=o&&o.trim().length>0?o:void 0,x=K(c)?"nhsuk-input nhsuk-date-input__input nhsuk-input--error":"nhsuk-input nhsuk-date-input__input",g=k=>{if(k.day===""&&k.month===""&&k.year===""){s("");return}k.day.length===2&&k.month.length===2&&k.year.length===4&&s(`${k.year}-${k.month}-${k.day}`)},m=k=>{const _=ne(k.target.value,2);k.target.value!==_&&(k.target.value=_),g({day:_,month:W(i),year:W(d)})},w=k=>{const _=ne(k.target.value,2);k.target.value!==_&&(k.target.value=_),g({day:W(u),month:_,year:W(d)})},v=k=>{const _=ne(k.target.value,4);k.target.value!==_&&(k.target.value=_),g({day:W(u),month:W(i),year:_})},j=re(t);return e.jsxs("div",{className:"nhsuk-date-input",role:"group","aria-labelledby":a,"aria-describedby":c,children:[e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:n,children:"Day"}),e.jsx("input",{ref:u,className:`${x} nhsuk-input--width-2`,id:n,name:`${n}[day]`,type:"text",inputMode:"numeric",autoComplete:"bday-day",defaultValue:j.day,disabled:r,onChange:m})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-month`,children:"Month"}),e.jsx("input",{ref:i,className:`${x} nhsuk-input--width-2`,id:`${n}-month`,name:`${n}[month]`,type:"text",inputMode:"numeric",autoComplete:"bday-month",defaultValue:j.month,disabled:r,onChange:w})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-year`,children:"Year"}),e.jsx("input",{ref:d,className:`${x} nhsuk-input--width-4`,id:`${n}-year`,name:`${n}[year]`,type:"text",inputMode:"numeric",autoComplete:"bday-year",defaultValue:j.year,disabled:r,onChange:v})]})})]})}fe.__docgenInfo={description:"",methods:[],displayName:"DateInput"};function Ze(n){const t=n.trim(),s=/^([0-9]{4})(?:-([0-9]{2})(?:-([0-9]{2}))?)?$/.exec(t);return s?{year:s[1]??"",month:s[2]??"",day:s[3]??""}:{day:"",month:"",year:""}}function Je(n){const t=n.trim(),s=/^([0-9]{2}):([0-9]{2})/.exec(t);if(!s)return"";const r=s[1]??"",a=s[2]??"";return`${r}:${a}`}function oe(n){const t=n.trim();if(t.length===0)return{day:"",month:"",year:"",time:""};const[s,r]=t.split("T",2);return{...Ze(s??""),time:r?Je(r):""}}function te(n,t){return n.replaceAll(/\D/g,"").slice(0,t)}function P(n){return n.current?.value??""}function Xe(n){return/^\d{2}:\d{2}$/.test(n)}function be({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u}){const i=y.useRef(null),d=y.useRef(null),c=y.useRef(null),p=y.useRef(null);y.useEffect(()=>{const f=oe(t),N=(T,z)=>{const V=T.current;V&&V.value!==z&&(V.value=z)};N(i,f.day),N(d,f.month),N(c,f.year),N(p,f.time)},[t]);const x=u&&u.trim().length>0?u:void 0,g=K(x),m=g?"nhsuk-input nhsuk-date-input__input nhsuk-input--error":"nhsuk-input nhsuk-date-input__input",w=g?"nhsuk-input nhsuk-input--error":"nhsuk-input",v=f=>{const N=f.day===""&&f.month===""&&f.year==="",T=f.time==="";if(N&&T){s("");return}f.day.length===2&&f.month.length===2&&f.year.length===4&&Xe(f.time)&&s(`${f.year}-${f.month}-${f.day}T${f.time}`)},j=f=>{const N=te(f.target.value,2);f.target.value!==N&&(f.target.value=N),v({day:N,month:P(d),year:P(c),time:P(p)})},k=f=>{const N=te(f.target.value,2);f.target.value!==N&&(f.target.value=N),v({day:P(i),month:N,year:P(c),time:P(p)})},_=f=>{const N=te(f.target.value,4);f.target.value!==N&&(f.target.value=N),v({day:P(i),month:P(d),year:N,time:P(p)})},R=f=>{v({day:P(i),month:P(d),year:P(c),time:f.target.value})},C=oe(t);return e.jsxs("div",{className:"nhsuk-date-input",role:"group","aria-labelledby":o,"aria-describedby":x,children:[e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:n,children:"Day"}),e.jsx("input",{ref:i,className:`${m} nhsuk-input--width-2`,id:n,name:`${n}[day]`,type:"text",inputMode:"numeric",defaultValue:C.day,disabled:r,onChange:j})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-month`,children:"Month"}),e.jsx("input",{ref:d,className:`${m} nhsuk-input--width-2`,id:`${n}-month`,name:`${n}[month]`,type:"text",inputMode:"numeric",defaultValue:C.month,disabled:r,onChange:k})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-year`,children:"Year"}),e.jsx("input",{ref:c,className:`${m} nhsuk-input--width-4`,id:`${n}-year`,name:`${n}[year]`,type:"text",inputMode:"numeric",defaultValue:C.year,disabled:r,onChange:_})]})}),e.jsx("div",{className:"nhsuk-date-input__item",children:e.jsxs("div",{className:"nhsuk-form-group",children:[e.jsx("label",{className:"nhsuk-label nhsuk-date-input__label",htmlFor:`${n}-time`,children:"Time"}),e.jsx("input",{ref:p,id:`${n}-time`,className:`${w} nhsuk-date-input__input nhsuk-input--width-6`,type:"time",name:`${n}[time]`,defaultValue:C.time,disabled:r,placeholder:a,onChange:R})]})})]})}be.__docgenInfo={description:"",methods:[],displayName:"DateTimeInput"};function ve({id:n,value:t,onChange:s,disabled:r,placeholder:a,ariaLabelledBy:o,ariaDescribedBy:u,min:i,max:d}){const c=u&&u.trim().length>0?u:void 0,p=K(c)?"nhsuk-input nhsuk-input--width-6 nhsuk-input--error":"nhsuk-input nhsuk-input--width-6";return e.jsx("input",{id:n,className:p,type:"time",value:t,onChange:x=>s(x.target.value),disabled:r,placeholder:a,"aria-labelledby":o,"aria-describedby":c,min:i,max:d})}ve.__docgenInfo={description:"",methods:[],displayName:"TimeInput"};function Oe(n,t){return n.right<t.left?t.left-n.right:t.right<n.left?n.left-t.right:0}function ie(n,t,s){return n<t?t:n>s?s:n}function le(n,t,s,r,a=[]){const[o,u]=y.useState(!1);return y.useLayoutEffect(()=>{const i=()=>{const m=t.current,w=s.current;if(m==null||w==null)return;const v=m.getBoundingClientRect(),j=w.getBoundingClientRect(),k=Oe(v,j)<r;u(k)},d=typeof globalThis.requestAnimationFrame=="function"?globalThis.requestAnimationFrame:m=>globalThis.setTimeout(m,0),c=typeof globalThis.cancelAnimationFrame=="function"?globalThis.cancelAnimationFrame:m=>{globalThis.clearTimeout(m)},p=d(()=>i()),x=n.current;if(x==null)return()=>{c(p)};if(typeof ResizeObserver>"u"){const m=()=>i();return globalThis.addEventListener("resize",m),()=>{c(p),globalThis.removeEventListener("resize",m)}}const g=new ResizeObserver(()=>i());return g.observe(x),()=>{c(p),g.disconnect()}},[n,r,t,s,...a]),o}function ge({id:n,value:t,onChange:s,disabled:r,min:a,max:o,step:u=1,ariaLabelledBy:i,ariaDescribedBy:d,lowerLabel:c,upperLabel:p,unitLabel:x}){const g=typeof a=="number"?a:0,m=typeof o=="number"?o:g+100,w=ie(typeof t=="number"?t:g,g,m),v=m-g,j=v>0?(w-g)/v*100:0,k=ie(j,0,100),_=d?.trim()||void 0,R=K(_)?"nhsuk-input--error":void 0,C=t??w,f=y.useRef(null),N=y.useRef(null),T=y.useRef(null),z=y.useRef(null),V=le(f,N,T,8,[C]),B=le(f,N,z,8,[C]),D=x?e.jsx(an,{children:x}):void 0;return e.jsxs(en,{"data-disabled":r?"true":"false",children:[e.jsx(nn,{id:n,className:R,type:"range",min:g,max:m,step:u||1,value:w,onChange:q=>{const I=Number(q.target.value);s(Number.isNaN(I)?void 0:I)},disabled:r,"aria-labelledby":i,"aria-describedby":_}),e.jsxs(tn,{"aria-hidden":"true",ref:f,children:[e.jsxs(sn,{className:"nhsuk-label","aria-hidden":"true",$left:k,ref:N,children:[C," ",D]}),e.jsx(ue,{className:"nhsuk-label",ref:T,"data-hidden":V?"true":"false",children:c??e.jsxs(e.Fragment,{children:[g," ",D]})}),e.jsx(ue,{className:"nhsuk-label",ref:z,"data-hidden":B?"true":"false",children:p??e.jsxs(e.Fragment,{children:[m," ",D]})})]})]})}const en=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-1);
  width: 100%;
`,nn=b.input`
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
`,tn=b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  & [data-hidden="true"] {
    visibility: hidden;
  }
`,ue=b.div`
  white-space: nowrap;
`,sn=b.div`
  position: absolute;
  left: ${n=>`${n.$left}%`};
  top: 0;
  transform: ${n=>`translate(-${n.$left}%, 0)`};
  display: inline-flex;
  align-items: center;
  gap: var(--nhsuk-spacing-1);
  white-space: nowrap;
`,an=b.span`
  color: var(--nhsuk-secondary-text-colour);
`;ge.__docgenInfo={description:"",methods:[],displayName:"SliderInput",props:{step:{defaultValue:{value:"1",computed:!1},required:!1}}};function xe({id:n,value:t,onChange:s,disabled:r,min:a,max:o,step:u,ariaLabelledBy:i,ariaDescribedBy:d,placeholder:c,unitLabel:p}){const x=p?`${n}-unit`:void 0,g=[d,x].filter(Boolean).join(" ").trim()||void 0;return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx("input",{id:n,className:K(g)?"nhsuk-input nhsuk-input--error":"nhsuk-input",type:"number",value:t??"",onChange:m=>{const w=m.target.value;s(w===""?void 0:Number(w))},disabled:r,min:a,max:o,step:u,placeholder:c,"aria-labelledby":i,"aria-describedby":g}),p?e.jsx("span",{className:"nhsuk-input__suffix",id:x,children:p}):void 0]})}xe.__docgenInfo={description:"",methods:[],displayName:"SpinnerInput"};function Q({label:n="Loading options...",showLabel:t=!1,size:s="sm"}){return e.jsxs(rn,{role:"status","aria-live":"polite",children:[e.jsx(on,{"aria-hidden":"true","data-size":s}),t?e.jsx(ln,{children:n}):e.jsx("span",{className:"nhsuk-u-visually-hidden",children:n})]})}const rn=b.span`
  display: inline-flex;
  align-items: center;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-border-width-form-element));
`,on=b.span`
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
`,ln=b.span`
  font-size: var(--nhsuk-font-size-s);
  color: var(--nhsuk-secondary-text-colour);
`;Q.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner",props:{label:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:"",defaultValue:{value:'"Loading options..."',computed:!1}},showLabel:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | undefined',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"undefined"}]},description:"",defaultValue:{value:'"sm"',computed:!1}}}};function ye({options:n,selectedOption:t,onChange:s,onSearch:r,specifyOtherOption:a,customOptionForm:o,id:u,ariaLabelledBy:i,ariaDescribedBy:d,disabled:c=!1,isLoading:p=!1,placeholder:x}){const g=y.useRef(null),m=y.useRef(null),[w,v]=y.useState(""),[j,k]=y.useState(!1),[_,R]=y.useState(!1),[C,f]=y.useState(),N=y.useRef(new Map),T=!!o,z=j||T,B=!!r&&z,D=t?.token??"",q=!t,I=l=>{v(l),r?.(l)},X=t?t.label:e.jsx(dn,{children:x??"Select an option"}),A=`${u}-listbox`,E=y.useMemo(()=>a?[...n,a]:n,[n,a]),G=a?n.length:-1,H=y.useMemo(()=>{if(!z||E.length===0)return;const l=C?E.find(Y=>Y.token===C):void 0;if(l&&!l.disabled)return l.token;const S=D?E.find(Y=>Y.token===D):void 0;return S&&!S.disabled?S.token:E.find(Y=>!Y.disabled)?.token},[C,z,D,E]),L=E.findIndex(l=>l.token===H),M=L===-1?void 0:`${A}-option-${L}`;y.useEffect(()=>{if(!z||H===void 0)return;N.current.get(H)?.scrollIntoView?.({block:"nearest"})},[z,H]),y.useEffect(()=>{j&&m.current?.focus()},[j]);const Z=l=>{c||p||(s(l),I(""),R(!1),f(void 0),k(!1))},O=()=>{s(),I(""),R(!1),f(void 0),k(!1)},ee=(l,S)=>{if(E.length===0)return-1;const F=E.length,Y=l<0?S===1?-1:F:l;for(const J of E.keys()){const ae=((Y+S*(J+1))%F+F)%F;if(!E[ae].disabled)return ae}return-1},U=l=>{const S=[...E.keys()];l===-1&&S.reverse();for(const F of S)if(!E[F].disabled)return F;return-1},h=l=>{if(T||g.current==null)return;const S=l.relatedTarget;if(S&&g.current.contains(S))return;!c&&!p&&_&&w.trim().length===0&&t&&s(),f(void 0),k(!1)},$=l=>{if(l.key==="ArrowDown"||l.key==="ArrowUp"){if(l.preventDefault(),!z){I(""),R(!1),k(!0);return}const S=l.key==="ArrowDown"?1:-1,F=ee(L,S);F!==-1&&f(E[F].token);return}if(l.key==="Home"||l.key==="End"){l.preventDefault(),z||(I(""),R(!1),k(!0));const S=l.key==="Home"?1:-1,F=U(S);F!==-1&&f(E[F].token);return}if(l.key==="Enter"){if(l.preventDefault(),!z){I(""),R(!1),k(!0);return}if(L!==-1){const S=E[L];S.disabled||Z(S.token)}return}if(l.key==="Escape"){if(T)return;f(void 0),k(!1)}};return e.jsxs(un,{"aria-busy":p||void 0,ref:g,onBlur:h,"data-has-spinner":p?"true":void 0,"data-disabled":c||p?"true":void 0,children:[B?e.jsx(cn,{ref:m,id:u,className:"nhsuk-input",value:w,onChange:l=>{I(l.target.value),R(!0),k(!0)},onFocus:()=>{!c&&!p&&(I(""),R(!1),k(!0))},onClick:()=>{!c&&!p&&!j&&(I(""),R(!1),k(!0))},onKeyDown:$,disabled:c||p,"aria-labelledby":i,"aria-describedby":d,role:"combobox","aria-autocomplete":"list","aria-expanded":z,"aria-controls":A,"aria-activedescendant":z&&M?M:void 0,placeholder:x??"Select an option",autoComplete:"off"}):e.jsx(hn,{id:u,className:"nhsuk-input",role:"combobox","aria-labelledby":i,"aria-describedby":d,"aria-expanded":z,"aria-controls":A,"aria-placeholder":t?void 0:x??"Select an option","aria-disabled":c||p?!0:void 0,tabIndex:c||p?-1:0,"data-disabled":c||p?"true":void 0,onClick:()=>{!c&&!p&&!j&&(I(""),R(!1),k(!0))},onKeyDown:$,children:X}),e.jsxs(mn,{children:[p&&e.jsx(kn,{"aria-hidden":"true",children:e.jsx(Q,{})}),t?e.jsx(pn,{type:"button",onClick:O,disabled:c||p,"data-disabled":c||p?"true":void 0,onMouseDown:l=>l.preventDefault(),"aria-label":"Clear"}):q&&e.jsx(vn,{"aria-hidden":"true"})]}),z&&e.jsx(fn,{id:A,role:"listbox","aria-labelledby":i,"aria-describedby":d,children:o?e.jsx(bn,{role:"presentation",children:o}):e.jsxs(e.Fragment,{children:[n.map((l,S)=>e.jsx(de,{id:`${A}-option-${S}`,type:"button",role:"option","aria-selected":l.token===D,"aria-disabled":l.disabled||void 0,disabled:l.disabled,"data-active":l.token===H,ref:F=>{F?N.current.set(l.token,F):N.current.delete(l.token)},onFocus:()=>f(l.token),onKeyDown:$,onClick:()=>{l.disabled||Z(l.token)},children:l.label},l.token)),a&&e.jsx(de,{id:`${A}-option-${G}`,type:"button",role:"option","aria-selected":a.token===D,"aria-disabled":a.disabled||void 0,disabled:!!a.disabled,"data-active":a.token===H,"data-sticky":"true",ref:l=>{l?N.current.set(a.token,l):N.current.delete(a.token)},onFocus:()=>f(a.token),onKeyDown:$,onClick:()=>{a.disabled||Z(a.token)},children:a.label})]})})]})}const un=b.div`
  position: relative;
  flex: 1;
  min-width: 100px;
  width: 100%;
  --nhsuk-select-right-padding: var(--nhsuk-spacing-5);

  &[data-has-spinner="true"] {
    --nhsuk-select-right-padding: var(--nhsuk-spacing-7);
  }
`,dn=b.span`
  color: var(--nhsuk-secondary-text-colour);
  opacity: var(--nhsuk-opacity-solid);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,cn=b.input`
  padding-right: var(--nhsuk-select-right-padding);

  &::placeholder {
    opacity: var(--nhsuk-opacity-solid);
    color: var(--nhsuk-secondary-text-colour);
  }
`,hn=b.div`
  display: flex;
  align-items: center;
  cursor: text;
  padding-right: var(--nhsuk-select-right-padding);

  &[data-disabled="true"] {
    cursor: not-allowed;
  }
`,pn=b.button`
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
`,mn=b.div`
  position: absolute;
  right: calc(var(--nhsuk-spacing-2) + var(--nhsuk-spacing-1));
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: var(--nhsuk-spacing-1);
  pointer-events: none;
`,kn=b.span`
  pointer-events: none;
`,fn=b.div`
  position: absolute;
  top: calc(100% + var(--nhsuk-spacing-2));
  left: 0;
  right: 0;
  max-height: calc(var(--nhsuk-spacing-9) * 4);
  overflow: auto;
  border: var(--nhsuk-border-table-cell-width) solid var(--nhsuk-border-colour);
  background: var(--nhsuk-input-background-colour);
  z-index: var(--nhsuk-z-index-dropdown);
`,bn=b.div`
  padding: var(--nhsuk-spacing-3);
`,de=b.button`
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
`,vn=b.span`
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
`;ye.__docgenInfo={description:"",methods:[],displayName:"SelectInput",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};function je({id:n,groupName:t,value:s,checked:r,onChange:a,ariaLabelledBy:o,ariaDescribedBy:u,disabled:i,label:d}){const c=u&&u.trim().length>0?u:void 0;return e.jsx("div",{className:"nhsuk-radios nhsuk-radios--small",role:"group",children:e.jsxs("div",{className:"nhsuk-radios__item",children:[e.jsx("input",{className:"nhsuk-radios__input",type:"radio",name:t,value:s,id:n,checked:r,disabled:i,"aria-labelledby":o,"aria-describedby":c,onChange:a}),e.jsx(gn,{className:`nhsuk-label nhsuk-radios__label ${d?"":"nhsuk-u-padding-0"}`,htmlFor:n,children:d})]})})}const gn=b.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;je.__docgenInfo={description:"",methods:[],displayName:"RadioButton"};function _e({options:n,selectedOption:t,onChange:s,specifyOtherOption:r,customOptionForm:a,id:o,ariaLabelledBy:u,ariaDescribedBy:i,disabled:d,isLoading:c}){const p=t?.token??"",x=m=>`${o}-${m}`,g=m=>{const w=x(m.token);return e.jsxs("div",{className:"nhsuk-radios__item",children:[e.jsx("input",{className:"nhsuk-radios__input",type:"radio",name:o,id:w,value:m.token,checked:p===m.token,disabled:d||c||m.disabled,onChange:v=>s(v.target.value),"aria-describedby":i}),e.jsx(xn,{className:"nhsuk-label nhsuk-radios__label",htmlFor:w,children:m.label})]},m.token)};return e.jsxs("div",{id:o,className:"nhsuk-radios nhsuk-radios--small nhsuk-u-width-full",role:"radiogroup","aria-labelledby":u,"aria-describedby":i,"aria-busy":c||void 0,children:[n.map(m=>g(m)),r&&e.jsxs(e.Fragment,{children:[n.length>0&&e.jsx("div",{className:"nhsuk-radios__divider",children:"or"}),g(r)]}),c&&e.jsx(Q,{showLabel:!0}),a&&e.jsx("div",{className:"nhsuk-u-padding-top-2",children:a})]})}const xn=b.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;_e.__docgenInfo={description:"",methods:[],displayName:"RadioButtonList"};function Ne({id:n,checked:t,onChange:s,ariaLabelledBy:r,ariaDescribedBy:a,disabled:o,label:u}){const i=a&&a.trim().length>0?a:void 0;return e.jsx("div",{className:"nhsuk-checkboxes nhsuk-checkboxes--small nhsuk-u-width-full",role:"group",children:e.jsxs("div",{className:"nhsuk-checkboxes__item",children:[e.jsx("input",{className:"nhsuk-checkboxes__input",type:"checkbox",id:n,checked:t,disabled:o,"aria-labelledby":r,"aria-describedby":i,onChange:s}),e.jsx(yn,{className:`nhsuk-label nhsuk-checkboxes__label ${u?"":"nhsuk-u-padding-0"}`,htmlFor:n,children:u})]})})}const yn=b.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;Ne.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};function we({options:n,selectedOptions:t,onSelect:s,onDeselect:r,specifyOtherOption:a,customOptionForm:o,id:u,ariaLabelledBy:i,ariaDescribedBy:d,disabled:c,isLoading:p}){const x=new Map(t.map(v=>[v.token,v])),g=a?.token,m=!!(o&&g),w=(v,j)=>{const k=`${u}-option-${j}`,_=`${k}-label`,R=x.get(v.token),C=v.token===g,f=[d,R?.ariaDescribedBy].filter(Boolean).join(" ")||void 0;return e.jsxs("div",{className:"nhsuk-checkboxes__item",children:[e.jsx("input",{className:"nhsuk-checkboxes__input",type:"checkbox",name:u,id:k,checked:C&&m||!!R,disabled:c||p||v.disabled&&!(C&&m),"aria-labelledby":`${i} ${_}`,"aria-describedby":f,onChange:N=>{N.target.checked?s(v.token):r(v.token)}}),e.jsx(jn,{className:"nhsuk-label nhsuk-checkboxes__label",htmlFor:k,id:_,children:v.label}),R?.errors??void 0]},v.token)};return e.jsxs("div",{id:u,className:"nhsuk-checkboxes nhsuk-checkboxes--small",role:"group","aria-labelledby":i,"aria-describedby":d,"aria-busy":p||void 0,children:[n.map((v,j)=>w(v,j)),a&&e.jsxs(e.Fragment,{children:[n.length>0&&e.jsx("div",{className:"nhsuk-checkboxes__divider",children:"or"}),w(a,n.length)]}),p&&e.jsx(Q,{showLabel:!0}),o&&e.jsx("div",{className:"nhsuk-u-padding-top-2",children:o})]})}const jn=b.label`
  padding-right: 0;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;we.__docgenInfo={description:"",methods:[],displayName:"CheckboxList"};function _n(n,t){if(!(n instanceof Element))return!1;const s=n.closest("input,textarea,select,button,a,[contenteditable]");return!!s&&s!==t}function Ie({options:n,onSelect:t,onDeselect:s,onSearch:r,id:a,specifyOtherOption:o,ariaLabelledBy:u,ariaDescribedBy:i,disabled:d=!1,isLoading:c=!1,selectedOptions:p,customOptionForm:x,placeholder:g}){const m=y.useRef(null),[w,v]=y.useState(""),j=y.useRef(null),[k,_]=y.useState(!1),[R,C]=y.useState(),f=y.useRef(new Map),N=!!x,T=k||N,z=!!r,V=y.useMemo(()=>new Set(p.map(h=>h.token)),[p]),B=`${a}-listbox`,D=h=>{v(h),r?.(h)},q=y.useMemo(()=>n.filter(h=>!V.has(h.token)),[n,V]),I=y.useMemo(()=>o?[...q,o]:q,[q,o]),X=o?q.length:-1,A=y.useMemo(()=>{if(!T||I.length===0)return;const h=R?I.find(l=>l.token===R):void 0;return h&&!h.disabled?h.token:I.find(l=>!l.disabled)?.token},[R,T,I]),E=I.findIndex(h=>h.token===A),G=E===-1?void 0:`${B}-option-${E}`;y.useEffect(()=>{if(!T||A===void 0)return;f.current.get(A)?.scrollIntoView?.({block:"nearest"})},[A,T]);const H=h=>{h.length===0||d||c||(t(h),D(""),C(void 0),_(!1))},L=()=>{j.current?.focus()},M=()=>{d||c||_(!0)},Z=(h,$)=>{if(I.length===0)return-1;const l=I.length,S=h<0?$===1?-1:l:h;for(const F of I.keys()){const J=((S+$*(F+1))%l+l)%l;if(!I[J].disabled)return J}return-1},O=h=>{const $=[...I.keys()];h===-1&&$.reverse();for(const l of $)if(!I[l].disabled)return l;return-1},ee=h=>{if(N||!m.current)return;const $=h.relatedTarget;$&&m.current.contains($)||(D(""),C(void 0),_(!1))},U=h=>{if(h.key==="ArrowDown"||h.key==="ArrowUp"){if(h.preventDefault(),!T){M();return}const $=h.key==="ArrowDown"?1:-1,l=Z(E,$);l!==-1&&C(I[l].token);return}if(h.key==="Home"||h.key==="End"){h.preventDefault(),T||M();const $=h.key==="Home"?1:-1,l=O($);l!==-1&&C(I[l].token);return}if(h.key==="Enter"){if(h.preventDefault(),!T){M();return}if(E!==-1){const $=I[E];$.disabled||H($.token)}return}if(h.key==="Escape"){if(N)return;D(""),C(void 0),_(!1)}};return e.jsxs(Nn,{className:"nhsuk-input",ref:m,onBlur:ee,onMouseDown:h=>{h.target===h.currentTarget&&(h.preventDefault(),L(),M())},"data-disabled":d?"true":void 0,"aria-busy":c||void 0,children:[p.map(h=>{const $=d||c||!!h.disabled;return e.jsxs(wn,{children:[e.jsxs(In,{type:"button",className:"nhsuk-tag",disabled:$,onClick:l=>{$||_n(l.target,l.currentTarget)||s(h.token)},children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Remove "}),h.label,e.jsx(Cn,{"aria-hidden":"true"})]}),h.errors]},h.token)}),e.jsx($n,{children:z?e.jsx(Rn,{ref:j,id:a,value:w,onChange:h=>{D(h.target.value),M()},onFocus:()=>{M()},onClick:()=>{M()},onKeyDown:U,disabled:d||c,"aria-labelledby":u,"aria-describedby":i,role:"combobox","aria-autocomplete":"list","aria-expanded":T,"aria-controls":B,"aria-activedescendant":T&&G?G:void 0,placeholder:g??"Select an option",autoComplete:"off"}):e.jsx(Tn,{id:a,role:"combobox","aria-labelledby":u,"aria-describedby":i,"aria-busy":c||void 0,"aria-expanded":T,"aria-controls":B,"aria-activedescendant":T&&G?G:void 0,"aria-disabled":d||c?!0:void 0,tabIndex:d||c?-1:0,onFocus:M,onMouseDown:h=>{h.preventDefault(),L(),M()},onKeyDown:U,children:p.length===0&&e.jsx(En,{children:g??"Select an option"})})}),c&&e.jsx(Sn,{children:e.jsx(Q,{})}),e.jsx(An,{"aria-hidden":"true"}),T&&e.jsx(zn,{id:B,role:"listbox","aria-labelledby":u,"aria-describedby":i,children:x?e.jsx(Dn,{role:"presentation",children:x}):e.jsxs(e.Fragment,{children:[q.map((h,$)=>e.jsx(Ce,{id:`${B}-option-${$}`,type:"button",role:"option","aria-selected":V.has(h.token),"aria-disabled":h.disabled||void 0,disabled:!!h.disabled,"data-active":h.token===A,ref:l=>{l?f.current.set(h.token,l):f.current.delete(h.token)},onFocus:()=>C(h.token),onKeyDown:U,onClick:()=>{h.disabled||H(h.token)},children:h.label},h.token)),o&&e.jsx(Fn,{id:`${B}-option-${X}`,type:"button",role:"option","aria-selected":V.has(o.token),"aria-disabled":o.disabled||void 0,disabled:!!o.disabled,"data-active":o.token===A,ref:h=>{h?f.current.set(o.token,h):f.current.delete(o.token)},onFocus:()=>C(o.token),onKeyDown:U,onClick:()=>{o.disabled||H(o.token)},children:o.label},o.token)]})})]})}const Nn=b.div`
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
`,wn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-border-width-form-element);
`,In=b.button`
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
`,Cn=b.span`
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
`,$n=b.div`
  position: relative;
  flex: 1 1 calc(var(--nhsuk-spacing-9) * 2 + var(--nhsuk-spacing-5));
  min-width: calc(var(--nhsuk-spacing-9) * 2);
`,Rn=b.input`
  border: none;
  width: 100%;
  outline: none;

  &::placeholder {
    opacity: var(--nhsuk-opacity-solid);
    color: var(--nhsuk-secondary-text-colour);
  }
`,Tn=b.div`
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
`,Sn=b.div`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`,En=b.span`
  color: var(--nhsuk-secondary-text-colour);
  opacity: var(--nhsuk-opacity-solid);
`,zn=b.div`
  position: absolute;
  top: calc(100% + var(--nhsuk-spacing-2));
  left: 0;
  right: 0;
  max-height: calc(var(--nhsuk-spacing-9) * 4);
  overflow: auto;
  border: var(--nhsuk-border-table-cell-width) solid var(--nhsuk-border-colour);
  background: var(--nhsuk-input-background-colour);
  z-index: var(--nhsuk-z-index-dropdown);
`,Ce=b.button`
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
`,Fn=b(Ce)`
  position: sticky;
  bottom: 0;
  background: var(--nhsuk-input-background-colour);
  border-top: var(--nhsuk-border-table-cell-width) solid
    var(--nhsuk-border-colour);
  z-index: var(--nhsuk-z-index-sticky);
`,Dn=b.div`
  padding: var(--nhsuk-spacing-3);
`,An=b.span`
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
`;Ie.__docgenInfo={description:"",methods:[],displayName:"MultiSelectInput",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}};function $e({content:n,errors:t,submit:s,cancel:r}){return e.jsxs(Mn,{children:[n,t,e.jsxs("div",{className:"nhsuk-button-group nhsuk-button-group--small nhsuk-u-margin-right-0",children:[e.jsx("button",{type:"button",onClick:r.onClick,disabled:r.disabled,className:"nhsuk-button nhsuk-button--small nhsuk-button--secondary",children:r.label}),e.jsx("button",{type:"button",onClick:s.onClick,disabled:s.disabled,className:"nhsuk-button nhsuk-button--small nhsuk-button--secondary",children:s.label})]})]})}const Mn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-3);
`;$e.__docgenInfo={description:"",methods:[],displayName:"CustomOptionForm"};function Re({id:n,messages:t}){if(t.length!==0)return e.jsx("div",{id:n,children:t.map((s,r)=>e.jsxs("span",{className:"nhsuk-error-message",children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Error:"})," ",s]},r))})}Re.__docgenInfo={description:"",methods:[],displayName:"Errors"};function Te({prefix:n,children:t,id:s,htmlFor:r,required:a,help:o,legal:u,flyover:i,as:d="label"}){if(!t)return;const c=e.jsxs(e.Fragment,{children:[n&&e.jsx(Pn,{children:n}),t,a&&e.jsx("span",{"aria-hidden":"true",children:" *"})]});return d==="legend"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nhsuk-fieldset__legend nhsuk-fieldset__legend--m",id:s,children:e.jsx("span",{className:"nhsuk-fieldset__heading",children:c})}),o,u,i]}):d==="label"?e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"nhsuk-fieldset__legend nhsuk-fieldset__legend--s",id:s,htmlFor:r,children:e.jsx("span",{className:"nhsuk-fieldset__heading",children:c})}),o,u,i]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"nhsuk-label",id:s,children:c}),o,u,i]})}function Pn({children:n}){return e.jsxs("span",{className:"nhsuk-label__prefix",children:[n," "]})}Te.__docgenInfo={description:"",methods:[],displayName:"Label",props:{as:{defaultValue:{value:'"label"',computed:!1},required:!1}}};function Se({linkId:n,header:t,children:s,errors:r}){const a=r?"nhsuk-form-group nhsuk-form-group--error":"nhsuk-form-group";return e.jsxs("div",{className:a,"data-linkid":n,children:[t,r,s]})}Se.__docgenInfo={description:"",methods:[],displayName:"QuestionScaffold"};function Ee({isLoading:n}){if(n)return e.jsx("div",{className:"nhsuk-hint",role:"status",children:"Loading options…"})}Ee.__docgenInfo={description:"",methods:[],displayName:"OptionsLoading"};function ze({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}ze.__docgenInfo={description:"",methods:[],displayName:"Help"};function Fe({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}Fe.__docgenInfo={description:"",methods:[],displayName:"Legal"};function De({id:n,children:t,ariaLabel:s}){return e.jsx("div",{className:"nhsuk-hint",id:n,"aria-label":s,children:t})}De.__docgenInfo={description:"",methods:[],displayName:"Flyover"};function Ae({linkId:n,children:t}){return e.jsx("div",{className:"nhsuk-card nhsuk-u-margin-bottom-0","data-linkId":n,children:e.jsx("div",{className:"nhsuk-card__content",children:t})})}Ae.__docgenInfo={description:"",methods:[],displayName:"Header"};function Me({linkId:n,children:t}){return e.jsx("footer",{className:"nhsuk-footer",role:"contentinfo","data-linkid":n,children:e.jsx("div",{className:"nhsuk-width-container",children:t})})}Me.__docgenInfo={description:"",methods:[],displayName:"Footer"};function Pe({children:n,onAdd:t,canAdd:s,addLabel:r}){const a=r??"Add";return e.jsxs(Vn,{children:[n,t&&e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:t,disabled:s===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:a})})]})}const Vn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-2);
`;Pe.__docgenInfo={description:"",methods:[],displayName:"AnswerList"};function Ve({control:n,onRemove:t,canRemove:s,errors:r,children:a}){return e.jsxs(Bn,{children:[e.jsxs(Hn,{children:[e.jsxs(qn,{children:[n,r]}),t&&e.jsx(Kn,{children:e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:t,disabled:s===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:"Remove"})})})]}),e.jsx(Ln,{children:a})]})}const Bn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-5);
`,Hn=b.div`
  display: flex;
  align-items: flex-start;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
`,qn=b.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
`,Kn=b.div`
  display: flex;
`,Ln=b.div`
  padding-left: var(--nhsuk-spacing-5);

  &:empty {
    display: none;
  }
`;Ve.__docgenInfo={description:"",methods:[],displayName:"AnswerScaffold"};function Be({onSubmit:n,onCancel:t,children:s,title:r,description:a,errors:o,before:u,after:i,pagination:d}){const c=m=>{m.preventDefault(),n?.()},p=t??(()=>{}),x=e.jsxs(e.Fragment,{children:[e.jsx(ce,{variant:"primary",type:"submit",disabled:!n,children:"Submit"}),e.jsx(ce,{variant:"secondary",type:"button",onClick:p,disabled:!t,children:"Cancel"})]}),g=r||a?e.jsxs("header",{className:"nhsuk-u-margin-bottom-4",children:[!!r&&e.jsx("h1",{className:"nhsuk-heading-l nhsuk-u-margin-bottom-1",children:r}),!!a&&e.jsx("span",{className:"nhsuk-caption-l",children:a})]}):void 0;if(d){const m=Yn(d.current,d.total),w=v=>{if(v===d.current)return;const j=Math.abs(v-d.current),k=v<d.current?d.onPrev:d.onNext;for(let _=0;_<j;_+=1)k()};return e.jsxs("form",{onSubmit:c,children:[g&&e.jsx(Wn,{children:g}),!!o&&e.jsx(se,{children:o}),!!u&&e.jsx(se,{children:u}),s,e.jsxs("nav",{className:"nhsuk-pagination nhsuk-pagination--numbered",role:"navigation","aria-label":"Pagination",children:[d.disabledPrev?void 0:e.jsxs("a",{href:"#",className:"nhsuk-pagination__previous",rel:"prev",onClick:v=>{v.preventDefault(),d.onPrev()},children:[e.jsx(Gn,{}),e.jsxs("span",{className:"nhsuk-pagination__title",children:["Previous",e.jsx("span",{className:"nhsuk-u-visually-hidden",children:" page"})]})]}),e.jsx("ul",{className:"nhsuk-pagination__list",children:m.map((v,j)=>{if(v.type==="ellipsis")return e.jsx("li",{className:"nhsuk-pagination__item nhsuk-pagination__item--ellipsis",children:"⋯"},`ellipsis-${j}`);const k=v.current?"nhsuk-pagination__item nhsuk-pagination__item--current":"nhsuk-pagination__item";return e.jsx("li",{className:k,children:e.jsx("a",{className:"nhsuk-pagination__link",href:"#","aria-label":`Page ${v.page}`,"aria-current":v.current?"page":void 0,onClick:_=>{_.preventDefault(),w(v.page)},children:v.page})},v.page)})}),d.disabledNext?void 0:e.jsxs("a",{href:"#",className:"nhsuk-pagination__next",rel:"next",onClick:v=>{v.preventDefault(),d.onNext()},children:[e.jsxs("span",{className:"nhsuk-pagination__title",children:["Next",e.jsx("span",{className:"nhsuk-u-visually-hidden",children:" page"})]}),e.jsx(Un,{})]})]}),e.jsx("div",{className:"nhsuk-button-group",children:x}),!!i&&e.jsx(se,{children:i})]})}return e.jsxs("form",{onSubmit:c,children:[g,o,u,s,i,e.jsx("div",{className:"nhsuk-button-group",children:x})]})}function Yn(n,t){const s=new Set([1,t]);for(const o of[-2,-1,0,1,2]){const u=n+o;u>=1&&u<=t&&s.add(u)}const r=[...s].toSorted((o,u)=>o-u),a=[];return r.forEach((o,u)=>{const i=r[u-1];i!=null&&o-i>1&&a.push({type:"ellipsis"}),a.push({type:"page",page:o,current:o===n})}),a}function Gn(){return e.jsx("svg",{className:"nhsuk-icon nhsuk-icon--arrow-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z"})})}function Un(){return e.jsx("svg",{className:"nhsuk-icon nhsuk-icon--arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",focusable:"false","aria-hidden":"true",children:e.jsx("path",{d:"m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z"})})}function ce({variant:n,type:t="button",onClick:s,disabled:r,children:a}){const o=n==="primary"?"nhsuk-button":"nhsuk-button nhsuk-button--secondary";return e.jsx("button",{type:t,onClick:s,disabled:r,className:o,children:a})}const Wn=b.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-spacing-2));
`,se=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-3);

  &:empty {
    display: none;
  }
`;Be.__docgenInfo={description:"",methods:[],displayName:"Form"};function He({children:n}){return e.jsx("div",{className:"nhsuk-form-group",children:n})}He.__docgenInfo={description:"",methods:[],displayName:"Stack"};function Qn(n,t){if(n.length<=1)return[...n];const s=[];for(const[r,a]of n.entries())r>0&&s.push(t),s.push(a);return s}function qe({linkId:n,header:t,children:s,onAdd:r,canAdd:a,addLabel:o}){const u=o??"Add";return e.jsxs("div",{"data-linkid":n,children:[t,Qn(y.Children.toArray(s),e.jsx("hr",{className:"nhsuk-section-break--m nhsuk-section-break--visible"})),r&&e.jsx("div",{className:"nhsuk-button-group nhsuk-u-margin-top-4",children:e.jsx("button",{type:"button",onClick:r,disabled:a===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:u})})]})}qe.__docgenInfo={description:"",methods:[],displayName:"GroupList"};function Ke({header:n,children:t,errors:s,onRemove:r,canRemove:a,removeLabel:o}){return e.jsxs("div",{className:"nhsuk-form-group",children:[n,t,s,r&&e.jsx("div",{className:"nhsuk-button-group",children:e.jsx("button",{type:"button",onClick:r,disabled:a===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",children:o??"Remove"})})]})}Ke.__docgenInfo={description:"",methods:[],displayName:"GroupScaffold"};function Le({columns:n,rows:t}){if(t.length===0||n.length===0)return e.jsx("p",{className:"nhsuk-body-s nhsuk-u-secondary-text",children:"Nothing to display."});const s=t.some(a=>a.content!=null),r=t.some(a=>a.onRemove!=null);return e.jsx(Xn,{children:e.jsxs("table",{className:"nhsuk-table",children:[e.jsx("thead",{className:"nhsuk-table__head",children:e.jsxs("tr",{className:"nhsuk-table__row",children:[s&&e.jsx("th",{scope:"col",className:"nhsuk-table__header","aria-hidden":"true"}),n.map(a=>e.jsx("th",{scope:"col",className:"nhsuk-table__header",children:he(a.content,a)},a.token)),r&&e.jsx("th",{scope:"col",className:"nhsuk-table__header","aria-hidden":"true"})]})}),e.jsx("tbody",{className:"nhsuk-table__body",children:t.map(a=>e.jsxs("tr",{className:"nhsuk-table__row",children:[s&&e.jsx("th",{scope:"row",className:"nhsuk-table__header",children:he(a.content,a)}),a.cells.map(o=>e.jsx("td",{className:"nhsuk-table__cell",children:o.content},o.token)),r&&e.jsx("td",{className:"nhsuk-table__cell",children:a.onRemove&&e.jsx("button",{type:"button",onClick:a.onRemove,disabled:a.canRemove===!1,className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-u-margin-bottom-0",children:a.removeLabel??"Remove"})})]},a.token))})]})})}function he(n,t){return!t.isLoading&&!t.errors?n:e.jsxs(Zn,{children:[e.jsxs(Jn,{children:[n,t.isLoading&&e.jsx(Q,{})]}),t.errors??void 0]})}const Zn=b.div`
  display: flex;
  flex-direction: column;
  gap: var(--nhsuk-spacing-1);
  align-items: flex-start;
`,Jn=b.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(var(--nhsuk-spacing-1) + var(--nhsuk-border-width-form-element));
`,Xn=b.div`
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`;Le.__docgenInfo={description:"",methods:[],displayName:"Table"};function Ye({children:n,spans:t}){const s=y.Children.toArray(n);return e.jsx(On,{children:s.map((r,a)=>e.jsx(et,{$span:t[a],children:r},a))})}const On=b.div`
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
`,et=b.div`
  flex: ${n=>`${n.$span} 1 0`};
  min-width: 0;
`;Ye.__docgenInfo={description:"",methods:[],displayName:"InputGroup"};function Ge({id:n,ariaLabelledBy:t,ariaDescribedBy:s,disabled:r,accept:a,value:o,onChange:u}){const i=o!=null,d=o?.title??o?.url??(i?"Attachment selected":""),c=o?.size==null?"":`${Math.round(o.size/1024)} KB`,p=i?`${d}${c?` (${c})`:""}`:"",x=K(s)?"nhsuk-input nhsuk-input--error":"nhsuk-input",g=y.useRef(null),m=()=>{r||g.current?.click()},w=j=>{const k=j.currentTarget.files?.[0];if(k!==void 0)try{u?.(k)}finally{j.currentTarget.value=""}},v=j=>{r||(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),m())};return e.jsxs("div",{className:"nhsuk-input-wrapper nhsuk-u-width-full",children:[e.jsx(tt,{className:x,type:"text",value:p,placeholder:"No file chosen",readOnly:!0,disabled:r,"aria-labelledby":t,"aria-describedby":s,onClick:m,onKeyDown:v}),e.jsx(nt,{ref:g,id:n,"aria-labelledby":t,"aria-describedby":s,className:"nhsuk-file-upload",disabled:r,type:"file",onChange:w,accept:a}),e.jsx("button",{className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",type:"button",onClick:m,disabled:r,children:i?"Change file":"Choose file"}),i&&e.jsx("button",{className:"nhsuk-button nhsuk-button--secondary nhsuk-button--small",type:"button",onClick:()=>u?.(),disabled:r,"aria-label":"Clear attachment",children:"Clear"})]})}const nt=b.input`
  display: none;
`,tt=b.input`
  flex: 1;
  min-width: calc(var(--nhsuk-spacing-9) * 3);
  width: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;Ge.__docgenInfo={description:"",methods:[],displayName:"FileInput"};function Ue({header:n,items:t,value:s,onChange:r,errors:a,linkId:o}){if(t.length===0)return e.jsx("div",{className:"nhsuk-form-group",children:e.jsx("div",{className:"nhsuk-hint",children:"No tab content available."})});const u=Math.min(Math.max(s,0),Math.max(t.length-1,0));return e.jsxs("div",{"data-linkid":o,children:[n,a,e.jsxs("div",{className:"nhsuk-tabs",children:[e.jsx("ul",{className:"nhsuk-tabs__list",children:t.map((i,d)=>{const p=d===u?"nhsuk-tabs__list-item nhsuk-tabs__list-item--selected":"nhsuk-tabs__list-item";return e.jsx("li",{className:p,children:e.jsx("a",{id:i.buttonId,className:"nhsuk-tabs__tab",href:`#${i.panelId}`,onClick:x=>{x.preventDefault(),r(d)},children:i.label})},i.token)})}),t.map((i,d)=>{const p=d===u?"nhsuk-tabs__panel":"nhsuk-tabs__panel nhsuk-tabs__panel--hidden";return e.jsx("div",{className:p,id:i.panelId,"aria-labelledby":i.buttonId,children:i.content},i.token)})]})]})}Ue.__docgenInfo={description:"",methods:[],displayName:"TabContainer"};function We({linkId:n,children:t}){return e.jsx("div",{className:"nhsuk-form-group","data-linkid":n,children:t})}We.__docgenInfo={description:"",methods:[],displayName:"DisplayRenderer"};function Qe({href:n,children:t,target:s,rel:r}){return e.jsx("a",{href:n,className:"nhsuk-link",target:s,rel:r,children:t})}Qe.__docgenInfo={description:"",methods:[],displayName:"Link"};function st({children:n}){return e.jsx("div",{className:"nhsuk-frontend-supported",children:n})}st.__docgenInfo={description:"",methods:[],displayName:"Provider"};const it={TextInput:pe,TextArea:me,NumberInput:ke,DateInput:fe,DateTimeInput:be,TimeInput:ve,SliderInput:ge,SpinnerInput:xe,SelectInput:ye,RadioButton:je,RadioButtonList:_e,Checkbox:Ne,CheckboxList:we,MultiSelectInput:Ie,CustomOptionForm:$e,Errors:Re,Label:Te,QuestionScaffold:Se,OptionsLoading:Ee,Help:ze,Legal:Fe,Flyover:De,Header:Ae,Footer:Me,AnswerList:Pe,AnswerScaffold:Ve,Form:Be,Stack:He,GroupList:qe,GroupScaffold:Ke,Table:Le,InputGroup:Ye,FileInput:Ge,TabContainer:Ue,DisplayRenderer:We,Link:Qe};export{We as DisplayRenderer,Qe as Link,ke as NumberInput,st as Provider,Ue as TabContainer,me as TextArea,pe as TextInput,it as theme};
