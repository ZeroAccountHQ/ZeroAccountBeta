"use client";

import React from 'react'
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";


interface ClaimProps {
  root: string;
  dataId: string;
  claimAddress : string;
}

export const ClaimButton = ({root, dataId, claimAddress} : ClaimProps) => {
  const { address, isConnected } = useAccount();
  return (
    <div>{isConnected ? (
      <Button>Claim</Button>
    ) : (
      <ConnectButton label="connect" />
    )}</div>
  )
}
