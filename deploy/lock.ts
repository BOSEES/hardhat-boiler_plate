import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from "hardhat";

const deployLock: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const LockedAmount = ethers.utils.parseEther("1");
  console.log("asdasd");
  log("Deploying Lock");

  const lock = await deploy("Lock", {
    from: deployer,
    args: [unlockTime],
    log: true
  })

  log(`Deploying Lock address ${lock.address}`);
}

export default deployLock;