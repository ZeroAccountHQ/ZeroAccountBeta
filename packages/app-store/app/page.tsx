import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 mx-14">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-5xl">
          <strong>ZeroAccount App Store</strong>
        </p>
      </div>
      <div className="relative flex mt-4 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <p className="text-xl">
          Explore ZeroAccount Apps built by the community
        </p>
      </div>
      <Separator className="mt-16 bg-background" />
      <Separator className=" bg-background" />
      <div className="w-full mt-8">
        <div>
          <p className="text-2xl">
            <strong>Demo apps</strong>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row items-center">
        <Card className="w-full flex flex-row items-center m-8 p-4">
          <div>
            <Image
              className="w-full"
              src="/space.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <CardHeader>
              <CardTitle>SpceFi Airdrop</CardTitle>
              <CardDescription>
                Enter your wallet to claim your $SPCE airdrop - without doxxing
                it ✨
              </CardDescription>
            </CardHeader>
          </div>
        </Card>

        <Card className="w-full flex flex-row items-center p-4">
          <div>
            <Image
              className="w-full"
              src="/chad.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <CardHeader>
              <CardTitle>OG Swag Claim</CardTitle>
              <CardDescription>
                Enter your delivery address to claim your Swag - without doxxing
                your wallet 👀
              </CardDescription>
            </CardHeader>
          </div>
        </Card>
      </div>
      <div className="w-full mt-8">
        <div>
          <p className="text-2xl">
            <strong>Live Apps</strong>
          </p>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex flex-col mt-8 items-center justify-centre">
          <p>
            <strong>
              Ooops! , currently we don&apos;t have live apps deployed
            </strong>
          </p>
          <p>
            <strong>ZeroAccount is currently in alpha stage </strong>
          </p>
        </div>
      </div>
    </main>
  );
}
