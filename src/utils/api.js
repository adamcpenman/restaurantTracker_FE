import axios from "axios";

export function api() {
  return axios.create({
    baseURL: "https://restaurant-tracker-be.herokuapp.com",
    });
}