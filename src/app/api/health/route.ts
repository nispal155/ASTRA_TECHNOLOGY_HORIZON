/** Lightweight endpoint for uptime monitors (e.g. UptimeRobot, Better Stack). */
export function GET() {
  return Response.json({ status: "ok", time: new Date().toISOString() });
}
