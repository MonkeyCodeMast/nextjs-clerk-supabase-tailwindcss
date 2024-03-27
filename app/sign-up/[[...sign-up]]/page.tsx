import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="container grid justify-items-center mx-auto md:my-24 sm:12">
        <SignUp />
    </div>
}