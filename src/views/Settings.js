import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdbreact';

import { connect } from 'react-redux';
import { langCodes } from '../__mocks__';
import { languageChanged } from '../store/actions/app';


const Settings = ({ lang, switchLang }) => {
    return (
        <>
            <h3>Settings</h3>
            <MDBListGroup>
                <MDBListGroupItem>
                    <h4>Languages</h4>
                    <select className="browser-default custom-select" onChange={event => switchLang(event.target.value)} defaultValue={lang}>
                        {Object.values(langCodes).map((l, i) => (
                            <option key={i} value={l}>
                                {l}
                            </option>
                        ))}
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