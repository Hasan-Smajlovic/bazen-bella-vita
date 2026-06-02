import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useToast } from "../../app/hooks/use-toast";

describe("useToast", () => {
  it("limits, dismisses, and removes toasts", () => {
    vi.useFakeTimers();

    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: "First" });
    });

    expect(result.current.toasts).toHaveLength(1);

    act(() => {
      result.current.toast({ title: "Second" });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe("Second");

    act(() => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    expect(result.current.toasts[0].open).toBe(false);

    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.toasts).toHaveLength(0);

    vi.useRealTimers();
  });
});
