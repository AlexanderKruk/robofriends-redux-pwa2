import { shallow } from "enzyme";
import Header from "./Header";

it("testing Header", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
