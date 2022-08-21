// Réutilisabilité du component Approuver qui de base gère le Are you sure
// on prend l'enfant celui qu'on veut afficher dans le component en question 
// qu'on renvoie au parent sous forme de props.children

import React from 'react';

const ApprovalCard = (props) => {
    return(
        <div className='ui card'>
            <div className='content'>
                {props.children}
            </div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'> Approve </div>
                    <div className='ui basic red button'> Reject </div>
                </div>
            </div>

        </div>
    );
};

export default ApprovalCard;