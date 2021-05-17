import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders joe's hello world message", () => {
  render(<App />);
  const text = screen.getByText(/hi king/i);
  expect(text).toBeInTheDocument();
});
