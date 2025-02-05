// App.test.jsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Mock static assets
vi.mock("./assets/react.svg", () => ({
  default: "test-file-stub",
}));

vi.mock("/vite.svg", () => ({
  default: "test-file-stub",
}));

describe("App Component", () => {
  it("renders correctly", () => {
    render(<App />);

    // Test headings
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );

    // Test logos
    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();

    // Test links
    expect(viteLogo.closest("a")).toHaveAttribute("href", "https://vite.dev");
    expect(reactLogo.closest("a")).toHaveAttribute("href", "https://react.dev");

    // Test button
    const button = screen.getByRole("button", { name: /count is/i });
    expect(button).toBeInTheDocument();
  });

  it("increments counter when button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is/i });

    // Initial state
    expect(button).toHaveTextContent("count is 0");

    // Click interactions
    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 1");

    fireEvent.click(button);
    expect(button).toHaveTextContent("count is 2");
  });

  it("displays the correct message about HMR", () => {
    const { container } = render(<App />);

    // Find the <p> tag containing the instructional text
    const hmrParagraph = container.querySelector(".card p");
    expect(hmrParagraph).toBeInTheDocument();

    // Assert the text content of the <p> tag
    expect(hmrParagraph.textContent).toMatch(
      /Edit\s+src\/App\.jsx\s+and save to test HMR/i
    );
  });
});
