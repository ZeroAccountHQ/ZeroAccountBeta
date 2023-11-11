import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Kenia } from "next/font/google";
import Link from "next/link";

const font = Kenia({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className={cn("text-9xl", font)}>Zero Account</p>
      </div>
      <div className="relative flex mt-4 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className={cn("text-2xl", font)}>ZKP based single sign-on (SSO)</p>
      </div>
      <div className="relative flex mt-16 text-justify place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className={cn("text-l mx-48 text-justify", font)}>
          ZeroAccount is a ZKP based single sign-on (SSO) that empowers users to
          control their personal data and selectively disclose it to
          applications. It leverages zero-knowledge proofs (ZKPs) to enable
          privacy-preserving data disclosure, ensuring that users maintain
          complete control over their identity information. 
          {/* <br/><br/>Join ZeroAccount &
          experience seamless Zk-single sign-on (SSO) */}
        </p>
      </div>
      <div className="flex flex row mt-12 item-center justify-between mx-48">
        {/* <Card className="mx-24">
          <CardHeader>
            <CardTitle>Visit App Store</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card className="mx-24">
          <CardHeader>
            <CardTitle>View Docs</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
        <Button asChild className="mx-9"><a href="https://appstore.zeroaccount.xyz">Visit App Store</a></Button>
        <Button asChild className="mx-9"><a href="https://docs.zeroaccount.xyz">View Docs</a></Button>
      </div>
    </main>
  );
}
