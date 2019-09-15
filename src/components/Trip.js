import React from 'react';
import { Link } from 'react-router-dom';


export const Trip = ({ title, date, additionalInfo, route }) => {
    return (
        <Link to={route}>
            <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div>

                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="h5 mb-3">{title}</h5>
                    </div>
                    <p class="mb-1">{date} - {additionalInfo}</p>
                </div>
                <i class="fas fa-chevron-right" style={{ fontSize: '1.3rem' }} />
            </div>
        </Link>
    );
}