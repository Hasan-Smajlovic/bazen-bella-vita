import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../../app/components/Footer";

describe("Footer", () => {
  it("renders contact info and current year", () => {
    render(<Footer />);

    expect(screen.getByText("Bazen Bella Vita Apartmani")).toBeInTheDocument();
    expect(screen.getByText("+387 60 320 282 0")).toBeInTheDocument();
    expect(screen.getByText("bazenbellavita@gmail.com")).toBeInTheDocument();

    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year} Bazen Bella Vita Apartmani`)),
    ).toBeInTheDocument();
  });
});
