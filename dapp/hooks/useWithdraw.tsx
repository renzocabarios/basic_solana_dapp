import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useMutation } from "@tanstack/react-query";
import { AnchorProvider, BN, Program, Wallet } from "@coral-xyz/anchor";
import { AnchorVault, IAnchorVault } from "@/lib/idl";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

interface IWithdrawArgs {
  amount: number;
}

export default function useWithdraw() {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();
  const mutation = useMutation({
    mutationFn: async (values: IWithdrawArgs) => {
      if (wallet) {
        const provider = new AnchorProvider(
          connection,
          wallet as unknown as Wallet
        );
        const program = new Program<IAnchorVault>(AnchorVault, provider);

        return await program.methods
          .withdraw(new BN(values.amount * LAMPORTS_PER_SOL))
          .accounts({ signer: wallet.publicKey })
          .rpc();
      }

      return null;
    },
  });
  return { ...mutation };
}
