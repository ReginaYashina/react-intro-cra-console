import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Rating, {RatingValueType} from './Rating';
import {useState} from 'react';

const meta: Meta<typeof Rating> = {
    component: Rating,
};
export default meta;
export const RatingNull = () => {
    return <Rating value={0} setRatingValue={action('null')}/>
}
export const Rating1 = () => {
    return <Rating value={1} setRatingValue={action('1')}/>
}
export const Rating2 = () => {
    return <Rating value={2} setRatingValue={action('2')}/>
}
export const Rating3 = () => {
    return <Rating value={3} setRatingValue={action('3')}/>
}
export const Rating4 = () => {
    return <Rating value={4} setRatingValue={action('4')}/>
}
export const Rating5 = () => {
    return <Rating value={5} setRatingValue={action('5')}/>
}


export const RatingDemo = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return <Rating value={ratingValue} setRatingValue={setRatingValue}/>
}