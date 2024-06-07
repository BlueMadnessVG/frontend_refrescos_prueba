import axios from "axios";

const apiRoute = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getRefrescos() {
  const response = await apiRoute("/refresco");
  return response.data;
}

export async function patchRefrescos(json, id) {
  const response = await apiRoute.patch(`/refresco/${id}`, json);

  console.log(response);
}

export async function deleteRefrescos(id) {
  const response = await apiRoute.delete(`/refresco/${id}`);

  return response;
}
