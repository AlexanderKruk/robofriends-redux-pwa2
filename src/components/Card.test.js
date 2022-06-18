import { shallow, mount, render } from "enzyme";
import Card from "./Card";

it("testig card", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
