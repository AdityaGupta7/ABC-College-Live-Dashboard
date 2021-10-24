import { FETCH_SOCKET_DATA } from "./actionTypes";

export const getSocketData = data => ({ type: FETCH_SOCKET_DATA, payload: data });