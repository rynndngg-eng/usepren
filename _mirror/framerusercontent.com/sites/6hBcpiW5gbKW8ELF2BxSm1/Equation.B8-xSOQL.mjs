import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{S as t,c as n,k as r,o as i}from"./react.BpKPsBQp.mjs";import{Y as a,j as o,o as s}from"./framer.BDTnGcef.mjs";function c(e){let{equation:t,textColor:i,fontSize:a,alignment:o,verticalPadding:s}=e,c=r(()=>i||`currentColor`,[i]),l=r(()=>o===`left`?`flex-start`:o===`right`?`flex-end`:`center`,[o]),u=r(()=>`Mathematical equation: ${t}`,[t]),d=r(()=>`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <semantics>
    <mrow>
      <munder>
        <mo>min</mo>
        <mrow>
          <mi>A</mi>
          <mo>∈</mo>
          <mi mathvariant="script">F</mi>
        </mrow>
      </munder>
      <mspace width="0.5em"></mspace>
      <mo stretchy="true">(</mo>
      <mi>α</mi><mo>\xb7</mo><mi>WI</mi><mo>(</mo><mi>A</mi><mo>)</mo>
      <mo>+</mo>
      <mi>β</mi><mo>\xb7</mo><mi>WD</mi><mo>(</mo><mi>A</mi><mo>)</mo>
      <mo>+</mo>
      <mi>γ</mi><mo>\xb7</mo><mi>DV</mi><mo>(</mo><mi>A</mi><mo>)</mo>
      <mo>+</mo>
      <mi>δ</mi><mo>\xb7</mo><mi>SC</mi><mo>(</mo><mi>A</mi><mo>)</mo>
      <mo stretchy="true">)</mo>
    </mrow>
    <annotation encoding="application/x-tex">${t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}</annotation>
  </semantics>
</math>`,[t]);return n(`div`,{style:{position:`relative`,width:`100%`,background:`transparent`,overflowX:`auto`,overflowY:`hidden`,WebkitOverflowScrolling:`touch`,scrollbarWidth:`none`,msOverflowStyle:`none`,paddingTop:`${s}px`,paddingBottom:`${s}px`},role:`img`,"aria-label":u,title:u,children:n(`div`,{style:{minWidth:`100%`,display:`flex`,justifyContent:l},children:n(`div`,{"aria-hidden":`true`,style:{minWidth:`max-content`,color:c,fontSize:`${a}px`,lineHeight:1.3,whiteSpace:`nowrap`},dangerouslySetInnerHTML:{__html:d}})})})}var l;e((()=>{i(),t(),a(),o(c,{equation:{type:s.String,title:`Equation`,displayTextArea:!0,defaultValue:`\\min_{A \\in \\mathcal{F}} \\left( \\alpha \\cdot WI(A) + \\beta \\cdot WD(A) + \\gamma \\cdot DV(A) + \\delta \\cdot SC(A) \\right).`},textColor:{type:s.Color,title:`Text Color`,defaultValue:`#000000`,optional:!0},fontSize:{type:s.Number,title:`Font Size`,defaultValue:22,min:12,max:96,unit:`px`,step:1},alignment:{type:s.Enum,title:`Align`,defaultValue:`center`,options:[`left`,`center`,`right`],optionTitles:[`Left`,`Center`,`Right`],displaySegmentedControl:!0},verticalPadding:{type:s.Number,title:`V Padding`,defaultValue:12,min:0,max:80,unit:`px`,step:1}}),l={exports:{default:{type:`reactComponent`,name:`Equation`,slots:[],annotations:{framerContractVersion:`1`,framerSupportedLayoutHeight:`auto`,framerSupportedLayoutWidth:`any-prefer-fixed`}},__FramerMetadata__:{type:`variable`}}}}))();export{l as __FramerMetadata__,c as default};
//# sourceMappingURL=Equation.B8-xSOQL.mjs.map