import React from 'react';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge } from 'mdbreact';
import { Link } from 'react-router-dom';


export const Trip = ({ title, date, route, notifications }) => {
    return (
        <div style={{ marginTop: '10px' }}>
            <MDBCard>
                <MDBCardBody>
                    {notifications && <MDBBadge color="primary" style={{ marginLeft: '5px' }} pill>{notifications}</MDBBadge>}
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>
                        {date}
                    </MDBCardText>
                    <Link to={route}>
                        <MDBBtn>
                            Details
                        </MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}