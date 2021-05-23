import React from 'react';
import '../banner.css';
import './banner-bottom.css';
import bgPeople from './bg-people.png';
import bgPeople2x from './bg-people.@2x.png';

export const BannerBottom = () => {
    return (
        <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
            <img
                srcSet={`${bgPeople} 750w, ${bgPeople2x} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                className="banner__background" src={bgPeople}
                alt=""
                role="none" />
            <div className="banner__left">
                <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
            </div>
            <div className="banner__right">
                <button className="banner__cta">
                    Submit a name
                </button>
            </div>
        </aside>
    );
};