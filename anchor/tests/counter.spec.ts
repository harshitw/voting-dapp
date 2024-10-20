import { startAnchor } from "solana-bankrun";
import { BankrunProvider } from "anchor-bankrun";

import * as anchor from '@coral-xyz/anchor';
import {Program} from '@coral-xyz/anchor';
import {Keypair, PublicKey} from '@solana/web3.js';
import '@types/jest';
import {Voting} from '../target/types/voting';

const IDL = require('../target/idl/voting.json');

const votingAddress = new PublicKey('AsjZ3kWAUSQRNt2pZVeJkywhZ6gpLpHZmJjduPmKZDZZ')

describe('Voting', () => {

  it('Initialize Poll', async () => {
    const context = await startAnchor("", [{name: "voting", programId: votingAddress}], []);
	  const provider = new BankrunProvider(context);

    const votingProgram = new Program<Voting>(
      IDL,
      provider,
    );

    // await votingProgram.methods.initializePoll(
    //   new anchor.BN(1),
    //   "What is your favourite type of peanut butter?",
    //   new anchor.BN(0),
    //   new anchor.BN(1828705425),
    // ).rpc();
    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      new anchor.BN(0),
      new anchor.BN(1828705425),
      "What is your favourite type of peanut butter?",
    ).rpc();

    

  });
});
