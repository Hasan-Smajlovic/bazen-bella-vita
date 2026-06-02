import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Reservation from "../../app/components/Reservation";

describe("Reservation", () => {
  it("opens social links and lists required reservation details", () => {
    const openSpy = vi.fn();
    Object.defineProperty(window, "open", {
      value: openSpy,
      writable: true,
      configurable: true,
    });

    render(<Reservation />);

    fireEvent.click(screen.getByRole("button", { name: "Facebook" }));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.facebook.com/profile.php?id=61579574523477 ",
      "_blank",
    );

    fireEvent.click(screen.getByRole("button", { name: "Instagram" }));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.instagram.com/bazenbellavita/",
      "_blank",
    );

    [
      "Ime i prezime",
      "Broj telefona",
      "Broj osoba",
      "Odabrani paket",
      "Datum rezervacije",
      "Trajanje boravka",
    ].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
