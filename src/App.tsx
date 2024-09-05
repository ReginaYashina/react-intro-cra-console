import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {log} from 'console';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UnControlledAccordion from './components/UnControlledAccordion/UnControlledAccordion';
import UnControlledRating from './components/UnControlledRating/UnControlledRating';
// eslint-disable-next-line react-hooks/rules-of-hooks


function App() {
    console.log('App rendering');
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)


    return (
        <div>
            {/*<PageTitle title={'First Page Title'} />*/}
            {/*<Rating value={ratingValue} setRatingValue = {setRatingValue}/>*/}
            <Accordion title={'ControlledAccordion'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed} />
            {/*<Rating value={5} />*/}
            {/*<Accordion title={'Second UnControlledAccordion Title'} collapsed={false} />*/}
            {/*<UnControlledAccordion title={'UnControlledAccordion'}/>*/}
            {/*<UnControlledRating value={4}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>;
}

export default App;
