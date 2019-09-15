import React from 'react';
import { trips } from '../__mocks__';
import { connect } from 'react-redux';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';

const iconMapping = {
    'station': 'building',
    'train': 'train'
}

const Trip = ({ match: { params: { slug } }, lang }) => {
    const trip = trips[slug];
    console.log(trip.announcements, lang)
    const hasAnnouncement = trip.announcements && trip.announcements[lang] && trip.announcements[lang].length > 0;
    return (
        <>
            <h2>{trip.title}</h2>
            {hasAnnouncement && <h3>Announcement</h3>}
            {!hasAnnouncement && <h3> No Announcement</h3>}
            {hasAnnouncement && (
                <MDBListGroup>{
                    trip.announcements[lang].map((a, i) => (
                        <MDBListGroupItem key={i}>
                            <MDBIcon icon={iconMapping[a.location]} /> - <strong>{a.time}</strong> - {a.text}
                        </MDBListGroupItem>
                    ))}
                </MDBListGroup>
            )}
        </>
    );
}
const stateToProps = ({ app }) => {
    const { lang } = app;
    return {
        lang
    };
};

const dispatchToProps = dispatch => {
    return {};
};

export default connect(
    stateToProps,
    dispatchToProps
)(Trip);