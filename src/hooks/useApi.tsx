import React from "react";
import axios from "axios";
import { useAuth, useBase } from '.';
import { Response } from "../types";

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": true,
  Accept: "application/json",
};

export default function useApi(api_url?: string) {

  if (api_url && api_url.slice(-1) === "/") throw new Error("URL must not end with a slash");

  const { api_url: config_url } = useBase();
  const { authToken } = useAuth();

  const url = api_url || config_url;

  const get = React.useCallback(async <R = any,>(endpoint: string, opts = { auth: true }): Promise<Response<R>> => {

    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");

    const response = await axios.get(url + endpoint, {
      headers: (authToken && opts.auth)
        ? { ...HEADERS, Authorization: `Bearer ${authToken}` }
        : HEADERS,
    });

    return response.data;
  }, [url, authToken]);

  const post = React.useCallback(
    async <T = any, R = any>(endpoint: string, data: T, opts = { auth: true }): Promise<Response<R>> => {

      if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");

      const response = await axios.post(url + endpoint, data, {
        headers: (authToken && opts.auth)
          ? { ...HEADERS, Authorization: `Bearer ${authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url, authToken]
  );

  const put = React.useCallback(
    async <T = any, R = any>(endpoint: string, data: T, opts = { auth: true }): Promise<Response<R>> => {

      if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");

      const response = await axios.put(url + endpoint, data, {
        headers: (authToken && opts.auth)
          ? { ...HEADERS, Authorization: `Bearer ${authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url, authToken]
  );

  const del = React.useCallback(async <R = any,>(endpoint: string, opts = { auth: true }): Promise<Response<R>> => {

    if (endpoint[0] !== "/") throw new Error("Endpoint must start with a slash");

    const response = await axios.delete(url + endpoint, {
      headers: (authToken && opts.auth)
        ? { ...HEADERS, Authorization: `Bearer ${authToken}` }
        : HEADERS,
    });

    return response.data;
  }, [url, authToken]);

  return { get, post, put, del };
}