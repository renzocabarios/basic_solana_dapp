import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorVault } from "../target/types/anchor_vault";

describe("anchor_vault", () => {
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.getProvider();
  const program = anchor.workspace.AnchorVault as Program<AnchorVault>;

  it("Deposit", async () => {
    const tx = await program.methods
      .deposit(new anchor.BN(1_000_000))
      .accounts({ signer: provider.publicKey })
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Withdraw", async () => {
    const tx = await program.methods
      .withdraw(new anchor.BN(1_000_000))
      .accounts({ signer: provider.publicKey })
      .rpc();
    console.log("Your transaction signature", tx);
  });
});
