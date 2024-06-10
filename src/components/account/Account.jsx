import React from 'react';
import PersonalInfo from './PersonalInfo';
import PasswordChange from './PasswordChange';

const Account = ({ user , Mockuser }) => {
    return (
        <div style={{marginTop : "2rem"}}>
            <PersonalInfo user={user} Mockuser={Mockuser}/>
            <PasswordChange user={user}/>
        </div>
    );
};

export default Account;
