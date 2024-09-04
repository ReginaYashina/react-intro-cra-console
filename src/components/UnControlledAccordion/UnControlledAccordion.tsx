import React from 'react';

type AccordionPropsType = {
  title: string;
};
function UnControlledAccordion(props: AccordionPropsType) {
  console.log('UnControlledAccordion rendering');
  const [collapsed, setCollapsed] = React.useState(true);

    return (
      <>
        <AccordionTitle title={props.title} /> <button onClick={()=>{
            setCollapsed(!collapsed);
      }}>TOGGLE</button>
          {collapsed &&  <AccordionBody/>}
      </>
    );

}
type AccordionTitlePropsType = {
  title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendering');
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}

export default UnControlledAccordion;
