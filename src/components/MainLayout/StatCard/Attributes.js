import React from 'react';
import { links } from '../../../utils/constants';

const Attributes = ({ statsData, type }) => (
    <section className="stats">
        <h4>STATS:</h4>
        <div className="progress-bar">
            <div className="title">
                <p>{statsData?.['ATTRIBUTE_1'].label || 'Attribute 1'}</p>
                <p>{statsData?.['ATTRIBUTE_1'].value || '0'}%</p>
            </div>
            <div className="progress">
                <span className="fill" style={{ width: `${statsData?.['ATTRIBUTE_1'].value || 0}%` }}></span>
                <span className="empty"></span>
            </div>
        </div>
        <div className="progress-bar">
            <div className="title">
                <p>{statsData?.['ATTRIBUTE_2'].label || 'Attribute 2'}</p>
                <p>{statsData?.['ATTRIBUTE_2'].value || '0'}%</p>
            </div>
            <div className="progress">
                <span className="fill" style={{ width: `${statsData?.['ATTRIBUTE_2'].value || 0}%` }}></span>
                <span className="empty"></span>
            </div>
        </div>
        <div className="progress-bar">
            <div className="title">
                <p>{statsData?.['ATTRIBUTE_3'].label || 'Attribute 3'}</p>
                <p>{statsData?.['ATTRIBUTE_3'].value || '0'}%</p>
            </div>
            <div className="progress">
                <span className="fill" style={{ width: `${statsData?.['ATTRIBUTE_3'].value || 0}%` }}></span>
                <span className="empty"></span>
            </div>
        </div>

        <a href={links[type]} target="_blank" rel="noreferrer">View API <span className="fa fa-arrow-right fa-lg"></span></a>
    </section>
);

export default Attributes;