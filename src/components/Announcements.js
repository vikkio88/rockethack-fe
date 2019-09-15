import React, { Component } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { MDBListGroup, MDBBtn, MDBIcon } from 'mdbreact';
import { Spinner } from './misc';
import { trips } from '../__mocks__';
//import { announcementService } from '../libs/api';

const iconMapping = {
    'station': 'building',
    'train': 'train',
    default: 'building'
}


class Announcements extends Component {
    state = {
        loading: true,
        announcements: []
    };

    componentDidMount() {
        /*
        announcementService.get(this.props.lang).then(({ data }) => {
            this.setState({ loading: false, announcements: data })
        });
        */
        setTimeout(() => { this.setState({ loading: false }) }, 1500);
    }

    render() {
        // const { loading, announcements } = this.state;
        const { loading } = this.state;
        const { lang, slug } = this.props;
        const trip = trips[slug];
        const hasAnnouncement = trip.announcements && trip.announcements[lang] && trip.announcements[lang].length > 0;
        //const hasAnnouncement = announcements.length > 0;

        if (loading) {
            return (
                <div className="Announcement-body">
                    <Spinner />
                </div>
            );
        }

        return (
            <>
                {!hasAnnouncement && (
                    <div className="Announcement-body">
                        <MDBIcon far icon="check-circle" size="4x" />
                        <strong>No Announcement</strong>
                    </div>
                )}
                {
                    hasAnnouncement && (
                        <MDBListGroup>{
                            trip.announcements[lang].map((a, i) => (
                                //announcements.map((a, i) => (
                                <div className="list-group-item d-flex justify-content-between align-items-center" key={i}>
                                    <div>
                                        <MDBIcon icon={iconMapping[a.location] || iconMapping.default} /> - <strong>{dayjs(a.time).format('HH:MM')}</strong> - {a.message}
                                    </div>
                                    <MDBBtn flat size="sm" className="d-flex justify-content-center align-items-center">
                                        <MDBIcon far icon="play-circle" size="2x" />
                                    </MDBBtn>
                                </div>
                            ))}
                        </MDBListGroup>
                    )
                }
            </>
        );
    }
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
)(Announcements);