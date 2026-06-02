import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../../app/components/Navbar";

const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", {
    value,
    configurable: true,
    writable: true,
  });
};

describe("Navbar", () => {
  it("updates styling when scrolling", () => {
    setScrollY(0);
    const { container } = render(<Navbar />);
    const nav = container.querySelector("nav");

    expect(nav?.className).toContain("bg-primary/12");

    setScrollY(80);
    fireEvent.scroll(window);

    expect(nav?.className).toContain("bg-card/95");
  });

  it("toggles the mobile menu and closes on escape or outside click", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: "Otvori meni" }));
    expect(document.body.style.overflow).toBe("hidden");
    expect(
      screen.getByRole("button", { name: "Zatvori meni" }),
    ).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(document.body.style.overflow).toBe("");
    expect(
      screen.getByRole("button", { name: "Otvori meni" }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Otvori meni" }));
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.mouseDown(document.body);
    expect(document.body.style.overflow).toBe("");
    expect(
      screen.getByRole("button", { name: "Otvori meni" }),
    ).toBeInTheDocument();
  });
});
