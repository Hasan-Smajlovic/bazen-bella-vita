import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Gallery from "../../app/components/Gallery";

describe("Gallery", () => {
  it("opens and navigates the lightbox", () => {
    render(<Gallery />);

    const previewButtons = screen.getAllByLabelText(/Pogledaj/);
    expect(previewButtons).toHaveLength(9);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Pogledaj Video: Pogled na bazen",
      }),
    );

    expect(screen.getByTitle("Zatvori galeriju")).toBeInTheDocument();
    expect(screen.getByText(/1\s*\/\s*17/)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByText(/2\s*\/\s*17/)).toBeInTheDocument();

    fireEvent.click(screen.getByTitle("Zatvori galeriju"));
    expect(screen.queryByTitle("Zatvori galeriju")).not.toBeInTheDocument();
  });
});
