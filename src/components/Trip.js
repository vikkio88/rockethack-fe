import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export const Trip = ({ title, date, additionalInfo, route = null }) => {
    const Wrapper = route ? Link : Fragment;
    const props = route ? { to: route } : {};
    return (
        <Wrapper {...props}>
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>

                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="h5 mb-3">{title}</h5>
                    </div>
                    <p className="mb-1">{date} - {additionalInfo}</p>
                </div>
                {route && <i className="fas fa-chevron-right" style={{ fontSize: '1.3rem' }} />}
            </div>
        </Wrapper>
    );
}