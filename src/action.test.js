import * as actions from "./actions";
import { apiCall } from "./api/api";

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json",
    },
  });
};

import configureMockStore from "redux-mock-store";
import thinkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thinkMiddleware]);
const store = mockStore();

it("testing setSearchField", () => {
  const text = "abc";
  const actionReturn = { type: CHANGE_SEARCHFIELD, payload: text };

  expect(actions.setSearchField(text)).toEqual(actionReturn);
});

it("testing requestRobots", () => {
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: "REQUEST_ROBOTS_PENDING",
  };
  expect(action[0]).toEqual(expectedAction);
});
