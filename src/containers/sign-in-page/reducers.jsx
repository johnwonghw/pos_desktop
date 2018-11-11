import cloneDeep from 'lodash/cloneDeep'

const _ = {cloneDeep}

export function getDefaultState() {
  return {
    actionLoading: false,
    username: '',
    password: '',
  }
}

export default {
  'sign-in-page': (state = getDefaultState(), action) => {
    console.log('asdf')
    switch (action.type) {
      case 'SIGN_IN_PAGE__SET_STATE':
      console.log('asdf')
        return Object.assign({}, _.cloneDeep(state), action.state);
      default:
        return state;
    }
  }
}
