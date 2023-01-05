import { ethers, network } from "hardhat";

export async function lock(unlockTime: number) {
  
}

lock(unlockTime)
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1)
    }
);