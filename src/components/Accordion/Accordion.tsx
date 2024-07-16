import React from 'react';

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};
function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering');
  if (collapsed === true) {
    return (
      <>
        <AccordionTitle title={props.title} />
        <AccordionBody />
      </>
    );
  } else {
    return (
      <>
        <AccordionTitle title={props.title} />
      </>
    );
  }
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

export default Accordion;
