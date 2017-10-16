export default {
    namespace: "users2",
    state: {
      list: [],
      total: null,
      page: null
    },
    reducers: {
      save(state, { payload: { data: list, total, page } }) {
        return { ...state, list, total, page };
      }
    },
    effects: {},
    subscriptions: {
      setup({ dispatch, history }) {
        return history.listen(({ pathname, query }) => {
          if (pathname === "/users") {
            dispatch({ type: "fetch", payload: query });
          }
        });
      }
    }
  };
  