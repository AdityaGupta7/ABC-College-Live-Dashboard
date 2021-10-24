import React from 'react';
import { hostUrl } from '../../utils/urls';

const Header = () => (
    <header>
        <h3>ABC College of engineering</h3>
        {/* download attribute works only for same origin. so, just opening this resource in a new tab */}
        <a href={`${hostUrl}/postman/assignment.postman_collection.json`} target="_blank" rel="noreferrer">Download Postman Collection</a>
    </header>
);

export default Header;