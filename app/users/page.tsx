import { auth, currentUser } from "@clerk/nextjs";
import { createClerkSupabaseClient } from "app/supabase/page";

export default async function Notes() {
    const client = await createClerkSupabaseClient();
    const { userId } = auth();
 
    if (userId) {
      // Query DB for user specific information or display assets only to signed in users 
    }
   
    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser()
    console.log(user)

    const { data: users } = await client.from("users").select();
    
    console.log(users);
    return <pre>{JSON.stringify(users, null, 2)}</pre>
}