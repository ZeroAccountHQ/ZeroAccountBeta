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
import { FcCheckmark, FcCancel , FcPrevious } from "react-icons/fc";
import { useState } from "react";

export default function Home() {
  const [isClaim,setisClaim] = useState(false);
  return (
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
            <div className="flex items-center flex-row items-center justify-between p-4">
              {isClaim ? <FcCheckmark className="mx-4"/> : <FcCancel className="mx-4"/>}
              Ownership
              <Button>Claim</Button>
            </div>
            <Separator />
            <div className="flex items-center flex-row items-center justify-between p-4">
            {isClaim ? <FcCheckmark className="mx-4"/> : <FcCancel className="mx-4"/>}
              Ownership
              <Button>Claim</Button>
            </div>
            
            <div className="flex items-center flex-row items-center justify-between p-4">
            {isClaim ? <FcCheckmark className="mx-4"/> : <FcCancel className="mx-4"/>}
              Ownership
              <Button>Claim</Button>
            </div>
            <Separator />
            <div className="flex items-center flex-row items-center justify-between p-4">
            {isClaim ? <FcCheckmark className="mx-4"/> : <FcCancel className="mx-4"/>}
              Ownership
              <Button>Claim</Button>
            </div>
          </Card>
        </CardContent>
        <CardFooter>
          <Button className="w-full ml-12 mr-12">Generate ZK Proof</Button>
        </CardFooter>
      </Card>
      <div className="flex flex-row items-center mt-6"><FcPrevious className="mr-4"/>Go back to example-app</div>
    </main>
  );
}
