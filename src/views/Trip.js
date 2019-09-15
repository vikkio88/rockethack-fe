import React from 'react';
import { Announcements } from '../components';
import { trips } from '../__mocks__';

const Trip = ({ match: { params: { slug } } }) => {
    const trip = trips[slug];
    return (
        <>
            <h2>{trip.title}</h2>
            <h3>Announcements</h3>
            <Announcements slug={slug} />
        </>
    );
}
export default Trip;