import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "../../app/components/Hero";

describe("Hero", () => {
  it("renders hero content and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /Odmor, .* ljeto na jednom mjestu\./,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Rezervi/i })).toHaveAttribute(
      "href",
      "#reservation",
    );
    expect(screen.getByRole("link", { name: /Saznaj/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(
      screen.getByRole("link", { name: /Skroluj do sekcije O bazenu/i }),
    ).toHaveAttribute("href", "#about");
  });

  it("configures the background video", async () => {
    const { container } = render(<Hero />);
    const video = container.querySelector("video");

    expect(video).not.toBeNull();
    expect(video?.autoplay).toBe(true);
    expect(video?.muted).toBe(true);
    expect(video?.loop).toBe(true);
    expect(video?.playsInline).toBe(true);
    expect(video).toHaveAttribute("aria-hidden", "true");

    await waitFor(() => {
      expect(video?.playbackRate).toBe(1.5);
    });
  });
});
