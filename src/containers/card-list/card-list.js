import React, { useState, useEffect } from 'react';
import './card-list.css';
import { Card } from '../card/card';
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

    const calculatePercentage = (votes, totalVotes) => Number((votes / totalVotes) * 100).toFixed(2);

    const listItems = () => { 
        return celebrities.map((celebrity, i) => {
            const totalVotes = celebrity.votes.positive + celebrity.votes.negative;
            const positiveVotes = calculatePercentage(celebrity.votes.positive, totalVotes);
            const negativeVotes = calculatePercentage(celebrity.votes.negative, totalVotes);
            const isPositive = positiveVotes > negativeVotes;

            return <Card 
                        key={i} 
                        name={celebrity.name}
                        description={celebrity.description}
                        category={celebrity.category}
                        picture={celebrity.picture}
                        lastUpdated={moment(celebrity.lastUpdated).fromNow()}
                        isPositive={isPositive}
                        positiveVotes={positiveVotes}
                        negativeVotes={negativeVotes}
                   />
        });
    };

    return (
        <section>
            <div>
                <h2>Previous Rulings</h2>
                <select className="display-type">
                    <option>List</option>
                    <option>Grid</option>
                </select>
            </div>
            <div className="cards-container">
                {listItems()}
            </div>
        </section>
    );
};