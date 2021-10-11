import { createContext, FC } from 'react';

export const AuthenticationContext = createContext({});

const AuthenticationProvider: FC = ({ children }) => {
    return <AuthenticationContext.Provider value={{}}>{ children }</AuthenticationContext.Provider>
}

export default AuthenticationProvider;
