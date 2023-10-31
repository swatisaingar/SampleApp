import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { BaseUrl, Categories, LOGIN, } from './Constant';
const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState('')
    const login = async (mobileNumber) => {

        try {
            const response = await axios.post(BaseUrl + LOGIN, {
                mobileNumber: mobileNumber
            });
            setData(response.data)
            return { success: response.data.status, message: response.data.message };

        } catch (error) {
            return { error: error.data };
        }
    };

    const getCategories = async () => {
        try {
            const response = await axios.get(BaseUrl + Categories);
            return { success: response.data.status, data: response.data.data };

        } catch (error) {
            return { error: error.data };
        }
    }

    const responseData = () => {
        return data;
    }

    return (
        <ApiContext.Provider value={{ login, responseData, getCategories }}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContext;
