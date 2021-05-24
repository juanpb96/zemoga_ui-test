import React, { useState, useEffect } from 'react';
import './card-list.css';
import { Card } from '../card/card';


export const CardList = () => {
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        fetch('https://zemoga-uitest-default-rtdb.firebaseio.com/data.json')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(jsonResponse => setCelebrities(jsonResponse));
    }, []);

    const listItems = () => { 
        return celebrities.map((celebrity, i) => {
            return <Card 
                        key={i} 
                        name={celebrity.name}
                        description={celebrity.description}
                        category={celebrity.category}
                        picture={celebrity.picture}
                        lastUpdated={celebrity.lastUpdated}
                        positiveVotes={celebrity.votes.positive}
                        negativeVotes={celebrity.votes.negative}
                   />
        });
    };

    return (
        <section>
            <div>
                <h2>Previous Rulings</h2>
                <select>
                    <option>List</option>
                    <option>Grid</option>
                </select>
            </div>
            {listItems()}
        </section>
    );
};