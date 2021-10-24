import React from 'react';
import { filterOptions } from '../../../utils/constants';

const Header = ({ title, onSortChange, sortBy,
    type, maxWidth, setMaxWidth,
    hasIssue }) => {
    const isMaxWidthTypeEqual = maxWidth === type;

    return (
        <header className="card-header">
            <h4>{title}</h4>
            <div>
                {/* if hasIssues: then sort option shouldn't be available */}
                <select value={hasIssue ? -1 : sortBy} onChange={onSortChange}>
                    <option value={-1}>Sort by Label</option>
                    {!hasIssue ? filterOptions[type].map(filter => (
                        <option value={filter.sortBy} key={filter.sortBy}>{filter.type}</option>
                    )) : null}
                </select>
                <i className={`fa fa-${isMaxWidthTypeEqual ? "minus" : "arrows-alt"} expand-arrow`} onClick={() => setMaxWidth(isMaxWidthTypeEqual ? null : type)}></i>
            </div>
        </header>
    )
};

export default Header;