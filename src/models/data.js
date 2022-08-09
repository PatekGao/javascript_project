import axios from 'axios';

export default {
  namespace: 'data',
  state: { avg: 0, median: 0 },
  reducers: {
    edit(state, { payload }) {
      let s = { ...state };
      if (payload.Xu) {
        s.Xu = payload.Xu;
      }
      if (payload.Kong) {
        s.Kong = payload.Kong;
      }
      if (payload.Lin) {
        s.Lin = payload.Lin;
      }
      if (payload.Tang) {
        s.Tang = payload.Tang;
      }
      if (payload.menu_xu) {
        s.menu_xu = payload.menu_xu;
      }
      if (payload.menu_tang) {
        s.menu_tang = payload.menu_tang;
      }
      if (payload.menu_lin) {
        s.menu_lin = payload.menu_lin;
      }
      if (payload.menu_kong) {
        s.menu_kong = payload.menu_kong;
      }
      return s;
    },
  },
  effects: {
    *getData({ payload }, { put }) {
      let data = yield axios.get('/api/getData');
      yield put({ type: 'edit', payload: data.data });
    },
  },
};
