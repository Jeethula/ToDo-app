import type { LayoutServerLoad } from "./$types";
import { db } from "../db/db";
import { users } from "../db/schema";


export const load: LayoutServerLoad = async (event) => {

  let userDetails = await event.locals.auth();

  try {
    const emailId = userDetails?.user?.email;

    if (!emailId) {
      console.error("No email found in user details:", userDetails);
    }
    const existingUser = (await db.select().from(users)).find(()=> emailId);

    if (existingUser) {
      console.log("Email already exists:", emailId);
    } else {
      const newUser = await db.insert(users).values({
        email: emailId ?? '', 
      })
      console.log("New user created:", newUser);
    }

  } catch (error) {
    console.error("Error checking or creating user:", error);
  }
  
  return {
    session: await event.locals.auth(),
  }
};