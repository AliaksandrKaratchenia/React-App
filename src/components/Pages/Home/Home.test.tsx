import Home from "./Home";
import * as React from "react";
import { shallow } from "enzyme";

describe("<Home />", () => {
  it("it should show Home text", () => {
    const data = shallow(<Home />);

    expect(data.find("div").text()).toEqual("Home");
  });
});
