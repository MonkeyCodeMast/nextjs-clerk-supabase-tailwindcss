import { createClerkSupabaseClient } from "app/supabase/page";
// import { createClient } from "utils/supabase/server";

export async function createUser(data: any): Promise<any> {
    const {birthday, created_at, email_addresses, external_id, first_name, gender, id, image_url, last_name, last_sign_in_at, phone_numbers, provile_image_url, updated_at, username} = data;
    const client = await createClerkSupabaseClient();
    const res = await client.from("users").insert({id: external_id, created_at: new Date(created_at), user_id: id});
    console.log(res)
    console.log(external_id)
    console.log(created_at)
    console.log(id)
}

export async function updateUser(data: any): Promise<any> {

}