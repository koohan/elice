import React from 'react';
import Account from '../components/account/Account';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';

const AccountPage = () => {
    const user = {
        avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
        name: '홍길동',
        email: 'honggildong@example.com',
        password: "12345",
        phone: '010-1234-5678'
    };

    return (
        <>
        <NavBar/>
        <PageLayout>
            <SidebarLayout>
                <Sidebar user={user} />
            </SidebarLayout>
            <ContentLayout>
                <Account user={user} />
            </ContentLayout>
        </PageLayout>
        </>
    );
};

export default AccountPage;
