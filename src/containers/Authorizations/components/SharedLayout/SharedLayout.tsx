import { FC } from 'react';
import { Footer, PageLayout, ScrollableContent } from './sharedLayout.styles';
import AuthorizationsProvider from 'contexts/Authorizations/AuthorizationsContext';
import Header from '../Header/Header';

const SharedLayout: FC = ({ children }) => {
    return (
        <AuthorizationsProvider>
            <PageLayout>
                <ScrollableContent>
                    <Header />
                    { children }
                </ScrollableContent>
                <Footer>Footer</Footer>
            </PageLayout>
        </AuthorizationsProvider>
    )
};

export default SharedLayout;
