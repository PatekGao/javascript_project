import axios from 'axios';

export default {
  namespace: 'input',
  state: {},
  reducers: {
    edit(state, { payload }) {
      let s = { ...state };
      if (payload.input_xu) {
        s.input_xu = payload.input_xu;
      }
      if (payload.input_kong) {
        s.input_kong = payload.input_kong;
      }
      if (payload.input_tang) {
        s.input_tang = payload.input_tang;
      }
      if (payload.input_lin) {
        s.input_lin = payload.input_lin;
      }
      return s;
    },
  },
  effects: {
    *getDataa({ payload }, { put }) {
      let data = yield axios.get('');
      yield put({ type: 'edit', payload: data.data });
    },
  },
};
