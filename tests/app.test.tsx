import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../app/App";

vi.mock("@/components/ui/toaster", () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

vi.mock("@/components/ui/sonner", () => ({
  Toaster: () => <div data-testid="sonner" />,
}));

vi.mock("@/components/ui/tooltip", () => ({
  TooltipProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe("App routes", () => {
  it("renders the home route", () => {
    window.history.pushState({}, "", "/");
    render(<App />);

    expect(
      screen.getAllByText("Bazen Bella Vita Apartmani").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", {
        name: /Odmor, .* ljeto na jednom mjestu\./,
      }),
    ).toBeInTheDocument();
  });

  it("renders the not found route and logs", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    window.history.pushState({}, "", "/missing");

    render(<App />);

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Return to Home" }),
    ).toHaveAttribute("href", "/");
    expect(errorSpy).toHaveBeenCalledWith(
      "404 Error: User attempted to access non-existent route:",
      "/missing",
    );

    errorSpy.mockRestore();
  });
});
