import{jsx as _jsx}from"react/jsx-runtime";import{useMemo}from"react";import{addPropertyControls,ControlType}from"framer";/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight auto
 */export default function Equation(props){const{equation,textColor,fontSize,alignment,verticalPadding}=props;const resolvedColor=useMemo(()=>textColor||"currentColor",[textColor]);const justifyContent=useMemo(()=>{if(alignment==="left")return"flex-start";if(alignment==="right")return"flex-end";return"center";},[alignment]);const plainTextLabel=useMemo(()=>`Mathematical equation: ${equation}`,[equation]);const mathMarkup=useMemo(()=>{const escapedEquation=equation.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
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
    <annotation encoding="application/x-tex">${escapedEquation}</annotation>
  </semantics>
</math>`;},[equation]);return /*#__PURE__*/_jsx("div",{style:{position:"relative",width:"100%",background:"transparent",overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",msOverflowStyle:"none",paddingTop:`${verticalPadding}px`,paddingBottom:`${verticalPadding}px`},role:"img","aria-label":plainTextLabel,title:plainTextLabel,children:/*#__PURE__*/_jsx("div",{style:{minWidth:"100%",display:"flex",justifyContent},children:/*#__PURE__*/_jsx("div",{"aria-hidden":"true",style:{minWidth:"max-content",color:resolvedColor,fontSize:`${fontSize}px`,lineHeight:1.3,whiteSpace:"nowrap"},dangerouslySetInnerHTML:{__html:mathMarkup}})})});}addPropertyControls(Equation,{equation:{type:ControlType.String,title:"Equation",displayTextArea:true,defaultValue:"\\min_{A \\in \\mathcal{F}} \\left( \\alpha \\cdot WI(A) + \\beta \\cdot WD(A) + \\gamma \\cdot DV(A) + \\delta \\cdot SC(A) \\right)."},textColor:{type:ControlType.Color,title:"Text Color",defaultValue:"#000000",optional:true},fontSize:{type:ControlType.Number,title:"Font Size",defaultValue:22,min:12,max:96,unit:"px",step:1},alignment:{type:ControlType.Enum,title:"Align",defaultValue:"center",options:["left","center","right"],optionTitles:["Left","Center","Right"],displaySegmentedControl:true},verticalPadding:{type:ControlType.Number,title:"V Padding",defaultValue:12,min:0,max:80,unit:"px",step:1}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Equation","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutHeight":"auto","framerSupportedLayoutWidth":"any-prefer-fixed"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Equation.map