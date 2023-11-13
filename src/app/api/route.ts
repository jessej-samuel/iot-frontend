import { database } from "@/constants";
import { get, ref } from "firebase/database";

export async function GET({}: { res: Response }) {
  // res.headers.set("Content-Type", "application/json");
  const snapshot = await get(ref(database, "/"));
  const data = snapshot.val();
  return Response.json(data);
}
