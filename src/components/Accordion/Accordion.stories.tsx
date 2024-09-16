import type {Meta, StoryObj} from '@storybook/react';

import Accordion from './Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};
export default meta;

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'} collapsed={false} setAccordionCollapsed={() => {
    }}/>
}

export const OpenAccordion = () => {
    return <Accordion title={'Open Accordion'} collapsed={true} setAccordionCollapsed={() => {
    }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion title={'Accordion Demo'} collapsed={collapsed}
                      setAccordionCollapsed={() => setCollapsed(!collapsed)}/>
}