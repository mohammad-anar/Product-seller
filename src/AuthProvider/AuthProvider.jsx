import PropTypes from "prop-types"
import { createContext } from "react";




export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authValue = {
        user: null
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;