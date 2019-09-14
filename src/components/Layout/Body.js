import React from 'react';
import { MDBContainer } from 'mdbreact';

export const Body = ({ children }) => {
    return (
        <div style={{ padding: '5px', marginTop: '5px' }}>
            <MDBContainer>
                {children}
            </MDBContainer>
        </div>
    );
}