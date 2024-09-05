import React, {useState} from 'react';

type RatingPropsType = {
    value?: 0 | 1 | 2 | 3 | 4 | 5;
};

function UnControlledRating(props: RatingPropsType) {
    console.log('UnControlledRating rendering');
    const [value, setValue] = useState(0)
    return (
        <div>
            <h3> Rating-component</h3>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={2}/>
            <Star selected={value > 3} setValue={setValue} value={3}/>
            <Star selected={value > 4} setValue={setValue} value={4}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    setValue: (value: number) => void
    value: 0 | 1 | 2 | 3 | 4 | 5;
};

function Star(props: StarPropsType) {
    console.log('Star rendering');
    return <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star </b> : 'star '} </span>
}

export default UnControlledRating;
