use anchor_lang::prelude::*;

declare_id!("34ACvqSMwT1fvpzgE9WfxxyQ8guZcZnz18qduJaqTnwJ");

#[program]
pub mod anchor_vault {
    use super::*;

    pub fn deposit(ctx: Context<Vault>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    pub fn wtihdraw(ctx: Context<Vault>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Vault<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(mut, seeds = [signer.key().as_ref()], bump)]
    pub vault: SystemAccount<'info>,
    pub system_program: Program<'info, System>,
}
