import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BackToTop from "../../app/components/BackToTop";

const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", {
    value,
    configurable: true,
    writable: true,
  });
};

describe("BackToTop", () => {
  it("appears after scrolling and scrolls to top", () => {
    const scrollSpy = vi.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollSpy,
      writable: true,
      configurable: true,
    });

    setScrollY(0);
    render(<BackToTop />);
    expect(
      screen.queryByRole("button", { name: "Back to top" }),
    ).not.toBeInTheDocument();

    setScrollY(500);
    fireEvent.scroll(window);

    const button = screen.getByRole("button", { name: "Back to top" });
    fireEvent.click(button);

    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
