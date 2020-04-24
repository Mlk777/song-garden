const initialState = {
  authError: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      // console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_SUCCESS':
      // console.log('signup success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      // console.log('successfully signed out');
      return state;
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'SIGNUP_ERROR':
      // console.log('signup error');
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
