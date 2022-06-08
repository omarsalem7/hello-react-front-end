// types, actions creator and reducer

import fetchMessagesAPI from '../../API/messagesApi';

const FETCH_MESSAGES = 'hello/messages/FETCH_MESSAGES';

const getMessages = (messages) => ({
  type: FETCH_MESSAGES,
  payload: messages,
});

export const fetchRocketsDispatch = () => async (dispatch) => {
  const messages = await fetchMessagesAPI();

  dispatch(getMessages(messages));
};

const messagesReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};
export default messagesReducer;
