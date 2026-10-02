/** Shown only on draft content, which is visible in development/preview but hidden in production. */
export default function DraftBanner({ what = "page" }: { what?: string }) {
  return (
    <div role="note" className="bg-amber-50 border-b border-amber-300 text-amber-900 text-sm text-center px-4 py-2">
      <strong>Draft {what}</strong> — contains placeholder content (TODO) and is hidden in production until{" "}
      <code className="font-mono">draft</code> is set to <code className="font-mono">false</code>.
    </div>
  );
}
