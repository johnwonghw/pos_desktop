import cloneDeep from 'lodash/cloneDeep'

const _ = {cloneDeep}

export function getDefaultState() {
  return {
    actionLoading: false,
  }
}

export default {
  'login-page': (state = getDefaultState(), action) => {
    switch (action.type) {
      case 'LOGIN_PAGE__SET_STATE':
        return Object.assign({}, _.cloneDeep(state), action.state);
      default:
        return state;
    }
  }
}
