import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdbreact';

import { connect } from 'react-redux';
import { languages, langCodes } from '../__mocks__';
import { languageChanged } from '../store/actions/app';


const Settings = ({ lang, switchLang }) => {
    return (
        <>
            <h3>Settings</h3>
            {lang}
            <MDBListGroup>
                <MDBListGroupItem>
                    <h4>Languages</h4>
                    <select className="browser-default custom-select" onChange={event => switchLang(event.target.value)}>
                        {Object.keys(languages).map(l => <option key={langCodes[l]} value={langCodes[l]}>{languages[l]}</option>)}
                    </select>
                </MDBListGroupItem>
            </MDBListGroup>
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
    return {
        switchLang(lang) {
            dispatch(languageChanged(lang));
        }
    };
};

export default connect(
    stateToProps,
    dispatchToProps
)(Settings);