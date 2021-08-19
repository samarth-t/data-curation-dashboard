import { React, useEffect, useState } from 'react'

import data from './extractionData';

import styles from "../styles/splitScreen.css"
import InfoItem from './InfoItem'
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

export default function InfoPane(props) {

    const [name, setName] = useState(props.name);
    const [extractions, setExtractions] = useState(data[props.name]);

    const educationItems = extractions
        .filter(item => {return item.label === "Education"})
        .map(item => <InfoItem item={item} handleClick={props.handleClick}/>);
    const biographyItems = extractions
        .filter(item => {return item.label === "Biography"})
        .map(item => <InfoItem item={item} handleClick={props.handleClick}/>);
    const reseachItems = extractions
        .filter(item => {return item.label === "Research Interest"})
        .map(item => <InfoItem item={item} handleClick={props.handleClick}/>);
    const awardItems = extractions
        .filter(item => {return item.label === "Award"})
        .map(item => <InfoItem item={item} handleClick={props.handleClick}/>);
    const publicationItems = extractions
        .filter(item => {return item.label === "Publication"})
        .map(item => <InfoItem item={item} handleClick={props.handleClick}/>);

    return (
        <div className={styles.pane} style={{ height: '92vh', minWidth: '100%', maxWidth: '475px', padding: '10px' }}>
            
            <h1>{name}</h1>
            
            <h2>Education</h2>
            {educationItems}
            <br/>

            <h2>Biography</h2>
            {biographyItems}
            <br/>

            <h2>Research Interest</h2>
            {reseachItems}
            <br/>

            <h2>Award</h2>
            {awardItems}
            <br/>

            <h2>Publication</h2>
            {publicationItems}
            <br/>
        </div>
    )
}