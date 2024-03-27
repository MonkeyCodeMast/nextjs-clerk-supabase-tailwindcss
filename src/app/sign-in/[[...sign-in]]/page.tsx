import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
    return <div className="container grid justify-items-center mx-auto md:my-48 sm:12">
            <SignIn />
        </div>;
}