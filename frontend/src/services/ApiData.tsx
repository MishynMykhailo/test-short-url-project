import axios, { AxiosResponse } from "axios";
import { Item } from "./interfaces";
import { LINK_BACKEND } from "./variables";

axios.defaults.baseURL = LINK_BACKEND;

export async function getAllUrl(): Promise<AxiosResponse<Array<Item>>> {
  const result = await axios.get("/shortUrl/");
  return result;
}

export async function getNewShortUrl(
  originalUrl: object
): Promise<AxiosResponse<object>> {
  console.log("axioss", originalUrl);
  return await axios.post("/shortUrl/", originalUrl);
}

export async function redirectShortUrl(
  shortUrl: string
): Promise<AxiosResponse<string>> {
  return await axios.get(`/shortUrl/${shortUrl}`);
}

export async function deleteShortUrl(
  id: number
): Promise<AxiosResponse<string>> {
  return await axios.delete(`/shortUrl/${id}`);
}
