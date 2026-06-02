import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../../app/components/About";

describe("About", () => {
  it("renders amenities and copy", () => {
    render(<About />);

    expect(screen.getByRole("heading", { name: /oaza/i })).toBeInTheDocument();

    ["Pool bar", "Parking", "Apartmani"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
