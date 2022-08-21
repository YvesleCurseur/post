// Création d'un component pour les détails d'un commentaire 
// qu'on exporte juste après pour qu'il soit accessible partout
//
// Les props permettent l'envoie de propriétés du parent à l'enfant
// Enfant = CommentDetail | Parent = index

import React from 'react';

const CommentDetail = props => {

    return(
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={props.pic}/> 
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.author}
                </a>
                <div className='metadata'>
                    <span className='date'>{props.time}</span>
                </div>
                <div className='text'>{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;