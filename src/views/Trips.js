import React from 'react';

import { Trip } from '../components';

import { trips } from '../__mocks__';

export default () => {
    return (
        <>
            <h3>My Trips</h3>
            {Object.values(trips).map(t => <Trip {...t} key={t.id} />)}
        </>
    );
}