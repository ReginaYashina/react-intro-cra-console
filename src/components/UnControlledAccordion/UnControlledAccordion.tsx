import React from 'react';

type AccordionPropsType = {
    title: string;
};

function UnControlledAccordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering');
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </>
    );

}

type AccordionTitlePropsType = {
    title: string;
    setCollapsed: (collapsed: boolean) => void;
    collapsed: boolean
};

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>;
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
