import React from 'react';
import './card.css';
import thumbsUp from '../../assets/img/thumbs-up.svg'; 
import thumbsDown from '../../assets/img/thumbs-down.svg';
import moment from 'moment';

export const Card = (props) => {
    return (
        <article className="card">
            <img 
                className="card__background"
                src={ props.picture }
                alt={ props.name }
            />
            <div className="card__content">
                <div className="card__header">
                    <div className="card__status">
                        <img 
                            className="icon-button"
                            src={ thumbsUp || thumbsDown }
                            alt=""
                        />
                    </div>
                    <h3 className="card__title">{ props.name }</h3>
                </div>
                <p className="card__description">{ props.description }</p>
                <div className="card__vote">
                    <h4>{ moment(props.lastUpdated).fromNow() } in { props.category }</h4>
                    <div className="card__buttons">
                        <button>
                            <img 
                                className="icon-button"
                                src={ thumbsUp }
                                alt="Vote Positive"
                            />
                        </button>
                        <button>
                            <img 
                                className="icon-button"
                                src={ thumbsDown }
                                alt="Vote Negative"
                            />
                        </button>
                        <button>Vote Now</button>
                    </div>
                </div>
                <div className="gauge-bar">
                    <div className="gauge-bar__positive">
                        <img 
                            className="icon-button"
                            src={ thumbsUp }
                            alt=""
                        />
                        <span className="gauge-bar__postive-votes">25.5%</span>
                    </div>
                    <div className="gauge-bar__negative">
                        <img 
                            className="icon-button"
                            src={ thumbsDown }
                            alt=""
                        />
                        <span className="gauge-bar__postive-votes">75.5%</span>
                    </div>
                </div>
            </div>
        </article>
    );
};