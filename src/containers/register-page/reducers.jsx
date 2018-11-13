import cloneDeep from 'lodash/cloneDeep'

const _ = {cloneDeep}

export function getDefaultState() {
  return {
    actionLoading: false,
  }
}

export default {
  'template-page': (state = getDefaultState(), action) => {
    switch (action.type) {
      case 'SIGN_IN_PAGE__SET_STATE':
        return Object.assign({}, _.cloneDeep(state), action.state);
      default:
        return state;
    }
  }
}

