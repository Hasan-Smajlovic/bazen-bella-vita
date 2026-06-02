import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Location from "../../app/components/Location";

describe("Location", () => {
  it("renders the map, contact details, and map link", () => {
    render(<Location />);

    const iframe = screen.getByTitle("Lokacija bazena");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src");

    expect(screen.getByText(/Lukavica bb/i)).toBeInTheDocument();
    expect(screen.getByText("+387 60 320 282 0")).toBeInTheDocument();
    expect(screen.getByText("bazenbellavita@gmail.com")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Prona/i })).toHaveAttribute(
      "href",
      "https://maps.app.goo.gl/ATi9AVwXTrKEFuGy5",
    );
  });
});
