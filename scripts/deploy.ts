import { ethers, upgrades } from "hardhat";

async function main() {
  const Dragons = await ethers.getContractFactory("DragonsV1");
  const dragons = await upgrades.deployProxy(Dragons);

  await dragons.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
