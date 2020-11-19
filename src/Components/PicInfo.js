import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PictureInfo = () => {
    const [ picture, setPictures] = useState([]);
    useEffect (() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bgLOPPk9yM4vvSok3ITDd7mgHoKBa7nQ0BKH86r2&date=2020-03-14')
        .then(response => { 
            console.log(response.data);
            setPictures(response.data)
        })
        .catch(error => console.log('Error!', error));
    }, []);
    return (
       <div>{picture.explanation}</div>
    ) 
    
};

export default PictureInfo;
 
