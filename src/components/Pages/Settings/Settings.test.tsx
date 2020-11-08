import Settings from "./Settings";
import * as React from "react";
import { shallow } from "enzyme";

describe("<Settings />", () => {
  it("it should show Settings text", () => {
    const data = shallow(<Settings />);

    expect(data.find("div").text()).toEqual("Settings");
  });
});
