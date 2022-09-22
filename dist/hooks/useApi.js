import React from "react";
import axios from "axios";
import { useAuth, useBase } from '.';
const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": true,
  Accept: "application/json"
};
export default function useApi() {
  const {
    api_url: url
  } = useBase();
  const {
    authToken
  } = useAuth();
  const get = React.useCallback(async endpoint => {
    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");
    const response = await axios.get(url + endpoint, {
      headers: authToken ? { ...HEADERS,
        Authorization: `Bearer ${authToken}`
      } : HEADERS
    });
    return response.data;
  }, [url, authToken]);
  const post = React.useCallback(async (endpoint, data) => {
    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");
    const response = await axios.post(url + endpoint, data, {
      headers: authToken ? { ...HEADERS,
        Authorization: `Bearer ${authToken}`
      } : HEADERS
    });
    return response.data;
  }, [url, authToken]);
  const put = React.useCallback(async (endpoint, data) => {
    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");
    const response = await axios.put(url + endpoint, data, {
      headers: authToken ? { ...HEADERS,
        Authorization: `Bearer ${authToken}`
      } : HEADERS
    });
    return response.data;
  }, [url, authToken]);
  const del = React.useCallback(async endpoint => {
    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");
    const response = await axios.delete(url + endpoint, {
      headers: authToken ? { ...HEADERS,
        Authorization: `Bearer ${authToken}`
      } : HEADERS
    });
    return response.data;
  }, [url, authToken]);
  return {
    get,
    post,
    put,
    del
  };
}