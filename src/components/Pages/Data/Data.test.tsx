import Data from "./Data";
import * as React from "react";
import { shallow } from "enzyme";

describe("<Data />", () => {
  it("it should show Data text", () => {
    const data = shallow(<Data />);

    expect(data.find("div").text()).toEqual("Data");
  });
});
