import http from "../http-common";

class CharacterDataService {
  getAll() {
    return http.get("/characters");
  }

  get(id) {
    return http.get(`/characters/${id}`);
  }

  create(data) {
    return http.post("/characters", data);
  }

  update(id, data) {
    return http.put(`/characters/${id}`, data);
  }

  delete(id) {
    return http.delete(`/characters/${id}`);
  }

  deleteAll() {
    return http.delete(`/characters`);
  }

  findByName(name) {
    return http.get(`/characters?name=${name}`);
  }
}

export default new CharacterDataService();


/*
const getAll = () => {
  return http.get("/characters");
};

const get = id => {
  return http.get(`/characters/${id}`);
};

const create = data => {
  return http.post("/characters", data);
};

const update = (id, data) => {
  return http.put(`/characters/${id}`, data);
};

const remove = id => {
  return http.delete(`/characters/${id}`);
};

const removeAll = () => {
  return http.delete(`/characters`);
};

const findByName = name => {
  return http.get(`/characters?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByName
};
*/