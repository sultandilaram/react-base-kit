import React from "react";
import axios from "axios";
import { useBase } from ".";
import { Response } from "../types";

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": true,
  Accept: "application/json",
};

export default function useApi(api_url?: string) {
  if (api_url && api_url.slice(-1) === "/") api_url = api_url.slice(0, -1);

  const { api_url: config_url } = useBase();

  const url = api_url || config_url;

  const get = React.useCallback(
    async <R = any,>(
      endpoint: string,
      opts?: { authToken?: string }
    ): Promise<Response<R>> => {
      if (endpoint[0] !== "/") endpoint = "/" + endpoint;

      const response = await axios.get(url + endpoint, {
        headers: opts?.authToken
          ? { ...HEADERS, Authorization: `Bearer ${opts.authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url]
  );

  const post = React.useCallback(
    async <T = any, R = any>(
      endpoint: string,
      data: T,
      opts?: { authToken?: string }
    ): Promise<Response<R>> => {
      if (endpoint[0] !== "/") endpoint = "/" + endpoint;

      const response = await axios.post(url + endpoint, data, {
        headers: opts?.authToken
          ? { ...HEADERS, Authorization: `Bearer ${opts.authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url]
  );

  const put = React.useCallback(
    async <T = any, R = any>(
      endpoint: string,
      data: T,
      opts?: { authToken?: string }
    ): Promise<Response<R>> => {
      if (endpoint[0] !== "/") endpoint = "/" + endpoint;

      const response = await axios.put(url + endpoint, data, {
        headers: opts?.authToken
          ? { ...HEADERS, Authorization: `Bearer ${opts.authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url]
  );

  const del = React.useCallback(
    async <R = any,>(
      endpoint: string,
      opts?: { authToken?: string }
    ): Promise<Response<R>> => {
      if (endpoint[0] !== "/") endpoint = "/" + endpoint;

      const response = await axios.delete(url + endpoint, {
        headers: opts?.authToken
          ? { ...HEADERS, Authorization: `Bearer ${opts.authToken}` }
          : HEADERS,
      });

      return response.data;
    },
    [url]
  );

  return { get, post, put, del };
}
