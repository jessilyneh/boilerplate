/* eslint-disable prettier/prettier */
import { render, screen } from "@testing-library/react";

import Main from "../Main";

describe("<Main>", () => {
  it("should render the heading", () => {
      const {container}= render(<Main/>)

      expect(
          screen.getByRole('heading',{name:/next.js/i})
      ).toBeInTheDocument()

      expect(container.firstChild).toMatchSnapshot()
  });

});
