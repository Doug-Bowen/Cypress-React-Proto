import { createContext, FC } from 'react';

export const AuthorizationsContext = createContext({});

const AuthorizationsProvider: FC = ({ children }) => {
    return <AuthorizationsContext.Provider value={{}}>{ children }</AuthorizationsContext.Provider>
}

export default AuthorizationsProvider;
