import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from "@faker-js/faker";

const App = () => {
    return (
        <div className='ui container comments'>
                {/* 
            Etant props.children est juste remplacé par le Are you sure? 
            <ApprovalCard> Are you sure? </ApprovalCard>
                */}
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    time="Aujourd'hui à 18H00"  
                    text="You got this !" 
                    pic={faker.image.avatar()}  
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Ronny" 
                    time="Aujourd'hui à 07H00" 
                    text="Nice post dude !" 
                    pic={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Hermione" 
                    time="Hier à 15H00"  
                    text="Lot of informations here." 
                    pic={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
        );
};

ReactDOM.render(<App />, document.querySelector('#root'));