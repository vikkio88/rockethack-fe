import React from 'react';

import { Trip } from '../components';

import { trips } from '../__mocks__';
import { MDBListGroup } from 'mdbreact';

export default () => {
    return (
        <>
            <h3>My Trips</h3>
            <MDBListGroup>
                {Object.values(trips).map(t => <Trip {...t} key={t.id} />)}
            </MDBListGroup>
        </>
    );
}