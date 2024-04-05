export function useTrack() {
  function track(event: string, properties?: Record<string, unknown>) {
    if (process.dev) {
      console.log("[track]", event, properties);
      return;
    }
    if (typeof window !== "undefined" && (window as any).analytics) {
      (window as any).analytics.track(event, properties);
    }
  }

  return { $track: track };
}
