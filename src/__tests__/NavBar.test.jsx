import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

test("renders a Home <NavLink>", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);
  const link = screen.queryByText(/Home/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/");
});

test("renders an Actors <NavLink>", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });
  render(<RouterProvider router={router} />);
  const link = screen.queryByText(/Actors/);
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/actors");
});
