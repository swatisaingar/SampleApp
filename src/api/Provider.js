import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { BaseUrl, LOGIN, } from './Constant';
const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const login = async (mobileNumber) => {

        try {
            const response = await axios.post(BaseUrl + LOGIN, {
                mobileNumber: mobileNumber
            });
            return { success: response.data.status, message: response.data.message };

        } catch (error) {
            return { error: error.data };
        }
    };

    return (
        <ApiContext.Provider value={{ login }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContext;
