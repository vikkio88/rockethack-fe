import React from 'react';
import { MDBContainer } from 'mdbreact';

export const Body = ({ children }) => {
    return (
        <div style={{ padding: '5px', marginTop: '20px' }}>
            <MDBContainer>
                {children}
            </MDBContainer>
        </div>
    );
}