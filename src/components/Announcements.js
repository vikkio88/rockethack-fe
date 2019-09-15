import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { Spinner } from './misc';
import { trips } from '../__mocks__';
import { announcementService } from '../libs/api';

const iconMapping = {
    'station': 'building',
    'train': 'train'
}


class Announcements extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        announcementService.get(this.props.lang);
        setTimeout(() => { this.setState({ loading: false }) }, 1500);
    }

    render() {
        const { loading } = this.state;
        const { lang, slug } = this.props;
        const trip = trips[slug];
        const hasAnnouncement = trip.announcements && trip.announcements[lang] && trip.announcements[lang].length > 0;

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
                                <MDBListGroupItem key={i}>
                                    <MDBIcon icon={iconMapping[a.location]} /> - <strong>{a.time}</strong> - {a.text}
                                </MDBListGroupItem>
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