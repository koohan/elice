import React from 'react';
import PersonalInfo from './PersonalInfo';
import PasswordChange from './PasswordChange';

const Account = ({ user }) => {
    return (
        <div style={{marginTop : "2rem"}}>
            <PersonalInfo user={user} />
            <PasswordChange user={user}/>
        </div>
    );
};

export default Account;
