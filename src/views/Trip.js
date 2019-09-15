import React from 'react';
import { Announcements } from '../components';
import { trips } from '../__mocks__';

const Trip = ({ match: { params: { slug } } }) => {
    const trip = trips[slug];
    return (
        <>
            <h2>{trip.title}</h2>
            <h4>date: {trip.date}</h4>
            <p>
                {trip.additionalInfo}
            </p>
            <h3>Announcements</h3>
            <Announcements slug={slug} />
        </>
    );
}
export default Trip;