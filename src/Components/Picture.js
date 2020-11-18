import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PictureCard = () => {
    const [ picures, setPictures] = useState([]);
    useEffect (() => {
        axios
        .get ('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
        .then(response => { console.log(response)
        setPictures(response.data)
        })
        .catch(error => console.log('Error!', error));
    }, []);
    return <div className='Picture' /> 
};

export default PictureCard;
