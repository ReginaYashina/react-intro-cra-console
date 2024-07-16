import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  console.log('App rendering');
  return (
    <div>
      <PageTitle title={'First Page Title'} />
      <Rating value={1} />
      <Accordion title={'First Page Accordion Title'} collapsed={true} />
      <Rating value={5} />
      <Accordion title={'Second Accordion Title'} collapsed={false} />
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
