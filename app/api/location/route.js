import { getLocations } from "./location-util";

export async function GET() {
  const location = getLocations();
  return Response.json(location);
}
