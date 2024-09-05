import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;


type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value:RatingValueType) => void
};

function Rating(props: RatingPropsType) {
    console.log('UnControlledRating rendering');

    return (
        <div>
            <h3> Rating-component</h3>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} value={1}/>
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} value={2}/>
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} value={3}/>
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} value={4}/>
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    setRatingValue: (value:RatingValueType) => void
    value:RatingValueType
};

function Star(props: StarPropsType) {
    console.log('Star rendering');

    return <span onClick={()=>props.setRatingValue(props.value)}>{props.selected ? <b>star </b> : 'star '} </span>
}

export default Rating;
