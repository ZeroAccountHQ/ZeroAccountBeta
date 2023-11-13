"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FcCheckmark, FcCancel, FcPrevious } from "react-icons/fc";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { ClaimButton } from "@/components/claim-button";

export default function Home() {
  const [isClaim, setisClaim] = useState(false);
  const { address, isConnected } = useAccount();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
      <main className="flex min-h-screen flex-col items-center  p-24 ">
        <Card className="shadow-xl">
          <CardHeader className="mx-16">
            <CardTitle>Connect to example-app</CardTitle>
            <CardDescription className="flex flex-col items-center justify-between">
              with ZeroAccount Auth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>example-app requests you to prove:</p>
            <Card className="mt-4">
              <div className="flex items-center flex-row justify-between p-4">
                {isClaim ? (
                  <FcCheckmark className="mx-4" />
                ) : (
                  <FcCancel className="mx-4" />
                )}
                Ownership
                <ClaimButton
                  root="0x25gd4e434t3tte5gegdngnryh"
                  dataId="0353445"
                  claimAddress="0x33sdgf7v6v6z5z76zd67zdz5tvz6vzd7"
                />
              </div>
              <Separator />
              <div className="flex items-center flex-row justify-between p-4">
                {isClaim ? (
                  <FcCheckmark className="mx-4" />
                ) : (
                  <FcCancel className="mx-4" />
                )}
                Ownership
                <ClaimButton
                  root="0x25gd4e434t3tte5gegdngnryh"
                  dataId="0353445"
                  claimAddress="0x33sdgf7v6v6z5z76zd67zdz5tvz6vzd7"
                />
              </div>

              <div className="flex items-center flex-row justify-between p-4">
                {isClaim ? (
                  <FcCheckmark className="mx-4" />
                ) : (
                  <FcCancel className="mx-4" />
                )}
                Ownership
                <ClaimButton
                  root="0x25gd4e434t3tte5gegdngnryh"
                  dataId="0353445"
                  claimAddress="0x33sdgf7v6v6z5z76zd67zdz5tvz6vzd7"
                />
              </div>
              <Separator />
              <div className="flex items-center flex-row justify-between p-4">
                {isClaim ? (
                  <FcCheckmark className="mx-4" />
                ) : (
                  <FcCancel className="mx-4" />
                )}
                Ownership
                <ClaimButton
                  root="0x25gd4e434t3tte5gegdngnryh"
                  dataId="0353445"
                  claimAddress="0x33sdgf7v6v6z5z76zd67zdz5tvz6vzd7"
                />
              </div>
            </Card>
          </CardContent>
          <CardFooter>
            <Button className="w-full ml-12 mr-12">Generate ZK Proof</Button>
          </CardFooter>
        </Card>
        <div className="flex flex-row items-center mt-6">
          <FcPrevious className="mr-4" />
          Go back to example-app
        </div>
      </main>
    </>
  );
}
