import React from 'react';

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    setAccordionCollapsed:(collapsed:boolean)=>void
};

function Accordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering');

    return (
        <>
            <AccordionTitle title={props.title} setAccordionCollapsed={()=>props.setAccordionCollapsed(!props.collapsed)}/>
            {props.collapsed && <AccordionBody/>}
        </>
    );

}

type AccordionTitlePropsType = {
    title: string;
    setAccordionCollapsed:()=>void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={props.setAccordionCollapsed}>{props.title}</h3>;
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
