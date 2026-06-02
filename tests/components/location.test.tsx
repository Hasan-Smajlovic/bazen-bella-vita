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
      "https://www.google.com/maps/place/Bella+Vita/@44.7633733,18.1820665,131m/data=!3m1!1e3!4m6!3m5!1s0x475c290024ae7ab3:0x5764db55e88db858!8m2!3d44.763437!4d18.1816147!16s%2Fg%2F11xvb94r3m?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
    );
  });
});
