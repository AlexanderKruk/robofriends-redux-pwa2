import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    robots: [],
    onRequestRobots: jest.fn(),
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("testing MainPage", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filter robots correctly", () => {
  const mockProps2 = {
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    onRequestRobots: jest.fn(),
    searchField: "John",
    isPending: false,
  };

  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "john",
      email: "john@gmail.com",
    },
  ]);
});

it("filter robots correctly", () => {
  const mockProps3 = {
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    onRequestRobots: jest.fn(),
    searchField: "John",
    isPending: true,
  };

  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "john",
      email: "john@gmail.com",
    },
  ]);
});
