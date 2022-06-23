import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("testing searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };

  it("initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: "a",
      })
    ).toEqual({ searchField: "a" });
  });
});

describe("testing requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  it("initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true });
  });

  it("REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "Bender",
            email: "bender@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 1,
          name: "Bender",
          email: "bender@gmail.com",
        },
      ],
      isPending: false,
    });
  });

  it("REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "NOOOO!!!",
      })
    ).toEqual({ robots: [], isPending: false, error: "NOOOO!!!" });
  });
});
