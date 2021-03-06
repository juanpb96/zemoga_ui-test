import React, { useState } from 'react';
import './card.css';
import thumbsUp from '../../assets/img/thumbs-up.svg'; 
import thumbsDown from '../../assets/img/thumbs-down.svg';

// Styles
const positiveStatus = {
    backgroundColor: 'rgba(var(--color-green-positive), 1)'
};

const negativeStatus = {
    backgroundColor: 'rgba(var(--color-yellow-negative), 1)'
};

export const Card = (props) => {
    const [vote, setVote] = useState(null);
    const [isSubmited, setIsSubmited] = useState(false);

    const handleClick = (val) => {
        setVote(val);
    };

    const handleSubmit = () => {
        if (vote === null) {
            setIsSubmited(false)
            return;
        }
        props.onSubmit(props.id, vote);
        setIsSubmited(true);
        setVote(null);
    };


    return (
        <article className="card" aria-label={props.view}>
            <img 
                className="card__background"
                src={ props.picture }
                alt={ props.name }
            />
            <div className="card__content">
                <div className="card__status" style={ props.isPositive ? positiveStatus : negativeStatus }>
                    <img 
                        className="icon-button"
                        src={ props.isPositive ? thumbsUp : thumbsDown }
                        alt=""
                    />
                </div>
                <div className="card__row">
                    <div className="card__col">
                        <div className="card__header">
                            <h3 className="card__title text-overflow">{ props.name }</h3>
                        </div>
                        <p className="card__description text-overflow">{ props.description }</p>
                    </div>
                    <div className="card__vote">
                        <h4 className="card__last-updated">{ isSubmited ? 'Thank you for voting!' : `${props.lastUpdated} in ${props.category}`}</h4>
                        <div className="card__buttons">
                            <button className="button-option" style={ isSubmited ? { display: 'none' } : { display: 'flex' } } aria-label="thumbs up" onClick={() => handleClick('positive')}>
                                <img 
                                    className="icon-button"
                                    src={ thumbsUp }
                                    alt="Vote Positive"
                                />
                            </button>
                            <button className="button-option" style={ isSubmited ? { display: 'none' } : { display: 'flex' } } aria-label="thumbs down" onClick={() => handleClick('negative')}>
                                <img 
                                    className="icon-button"
                                    src={ thumbsDown }
                                    alt="Vote Negative"
                                />
                            </button>
                            <button className="button-vote" onClick={handleSubmit}>{ isSubmited ? 'Vote Again' : 'Vote Now'}</button>
                        </div>
                    </div>
                </div>
                <div className="gauge-bar">
                    <div className="gauge-bar__positive" style={{ width: `${props.positiveVotes}%` }}>
                        <div className="gauge-bar__positive-votes">
                            <img 
                                className="icon-button"
                                src={ thumbsUp }
                                alt=""
                            />
                            <span>{ props.positiveVotes }%</span>
                        </div>
                    </div>
                    <div className="gauge-bar__negative" style={{ width: `${props.negativeVotes}%` }}>
                        <div className="gauge-bar__negative-votes">
                            <span>{ props.negativeVotes }%</span>
                            <img 
                                className="icon-button"
                                src={ thumbsDown }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};