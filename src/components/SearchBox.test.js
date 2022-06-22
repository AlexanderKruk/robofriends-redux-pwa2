import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it("testign SearchBox", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
