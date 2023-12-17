import { creatorStore } from "vuex";

import { user } from "./user";
import { comment } from "./comment";
import { post } from "./post";

export const store = creatorStore({
  modules: {
    comment,
    user,
    post,
  },
  state() {},
  mutations: {},
  actions: {},
});
