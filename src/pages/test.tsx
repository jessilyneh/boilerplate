/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";

import Pages from "../pages";

describe("<Main>", () => {
  it("should render the heading", () => {
      render(<Pages/>)

      expect(
          screen.getByRole('heading',{name:/next.js/i})
      ).toBeInTheDocument()
  });

});
