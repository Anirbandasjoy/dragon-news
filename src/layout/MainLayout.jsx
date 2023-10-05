import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../components/Loading';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === "loading" ? <Loading /> : <Outlet />}
        </div>
    );
};

export default MainLayout;
