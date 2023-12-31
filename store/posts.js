//State
export const state = () => ({
  _posts: [],
});

//Actions
export const actions = {
  async loadPosts({ commit }) {
    //Obtener los post
    let { data } = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    //Imprimir en consola
    //console.log(data);

    //Realisar un commit
    commit("setPosts", data);
  },
};

//Getters
export const getters = {
  getPosts(state) {
    return state._posts;
  },

  getTotal(state) {
    return state._posts.length;
  },
};

//Mutaciones
export const mutations = {
  setPosts(state, posts) {
    state._posts = posts;
  },
};
