import { shallow } from "enzyme";
import CardList from "./CardList";

it("Testing CardList", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John",
      surname: "Snow",
      email: "john.snow@gmail.com",
    },
  ];
  expect(<CardList robots={mockRobots} />).toMatchSnapshot();
});
