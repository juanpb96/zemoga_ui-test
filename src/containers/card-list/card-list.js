import React, { useState, useEffect } from 'react';
import './card-list.css';
import { Card } from '../card/card';
import Firebase from '../../util/Firebase';
import moment from 'moment';


export const CardList = () => {
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        fetch('https://zemoga-uitest-default-rtdb.firebaseio.com/data.json')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            }).then(jsonResponse => setCelebrities(jsonResponse))
            .catch(error => console.error(error));
    }, []);
    
    const [view, setView] = useState('Grid');

    // Get dropdown list
    const cardsDisplay = document.getElementsByClassName('card-list__display')[0];

    const calculatePercentage = (votes, totalVotes) => Number((votes / totalVotes) * 100).toFixed(2);

    const listItems = () => { 
        return celebrities.map((celebrity, i) => {
            const totalVotes = celebrity.votes.positive + celebrity.votes.negative;
            const positiveVotes = calculatePercentage(celebrity.votes.positive, totalVotes);
            const negativeVotes = calculatePercentage(celebrity.votes.negative, totalVotes);
            const isPositive = positiveVotes > negativeVotes;

            return <Card 
                        key={i} 
                        id={i}
                        name={celebrity.name}
                        description={celebrity.description}
                        category={celebrity.category}
                        picture={celebrity.picture}
                        lastUpdated={moment(celebrity.lastUpdated).fromNow()}
                        isPositive={isPositive}
                        positiveVotes={positiveVotes}
                        negativeVotes={negativeVotes}
                        view={view}
                        onSubmit={handleVote}
                   />
        });
    };

    const handleClick = ({target}) => {
        setView(() => target.innerText);
        cardsDisplay.removeAttribute('open');
    };

    const handleVote = (id, vote) => {
        const celebrityToUpdate = celebrities.find((celebrity, i) => i === id);
        celebrityToUpdate.votes[vote] += 1;
        setCelebrities(prev => [...prev].map((celebrity, i) => i === id ? celebrityToUpdate : celebrity));
        Firebase.updateData(id, celebrityToUpdate);
    };

    return (
        <section className="card-list">
            <div className="card-list__header">
                <h2 className="card-list__title">Previous Rulings</h2>
                <details className="card-list__display">
                    <summary>{ view }</summary>
                    <ul>
                        <li onClick={handleClick}>Grid</li>
                        <li onClick={handleClick}>List</li>
                    </ul>
                </details>
            </div>
            <div className="cards-container" aria-label={view}>
                {listItems()}
            </div>
        </section>
    );
};