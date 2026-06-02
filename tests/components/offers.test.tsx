import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Offers from "@/components/Offers";

describe("Offers", () => {
  it("renders offers, popular badge, and promo pricing", () => {
    render(<Offers />);

    expect(
      screen.getByRole("heading", { name: "Dnevni odmor paket" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Cjelodnevni odmor paket" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Nocni odmor paket" }),
    ).toBeInTheDocument();

    expect(screen.getByText("Najpopularnija ponuda")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /Rezervi/i })).toHaveLength(3);

    const promoSpans = screen.getAllByText("Promotivna cijena");
    expect(
      promoSpans.some((span) => span.classList.contains("text-accent")),
    ).toBe(true);
    expect(
      promoSpans.some((span) => span.classList.contains("text-primary")),
    ).toBe(true);
  });
});
