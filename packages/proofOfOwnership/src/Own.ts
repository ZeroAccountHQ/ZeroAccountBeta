import {
  Field,
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  CircuitValue,
  prop,
  Poseidon,
  CircuitString,
  MerkleTree,
  MerkleWitness,
  SelfProof,
  ZkProgram,
  verify,
  Struct,
} from 'o1js';
import { nft_holders } from './nft_holders.js';

let nftHoldersTree = new MerkleTree(10);
export class NFTHolderWitness extends MerkleWitness(10) {}

export class NFTHolder extends CircuitValue {
  @prop address: CircuitString;

  constructor(address: CircuitString) {
    super(address);
    this.address = address;
  }

  hash(): Field {
    return Poseidon.hash(this.toFields());
  }
}

export function createNFTHoldersMerkleTree() {
  //generates the merkle tree from the list of nft holders
  for (let i in nft_holders) {
    let thisHolder = new NFTHolder(CircuitString.fromString(nft_holders[i]));
    nftHoldersTree.setLeaf(BigInt(i), thisHolder.hash());
  }

  // now that we got our accounts set up, we need the commitment to deploy our contract!
  return nftHoldersTree;
}

export class RollupInput extends Struct({
  nftHolder: NFTHolder,
  path: NFTHolderWitness,
}) {
  static getState(nftHolder: NFTHolder, path: NFTHolderWitness) {
    return new RollupInput({
      nftHolder,
      path,
    });
  }
}

export const OwnershipRollup = ZkProgram({
  name: 'rollup',
  //TODO :  Figure out public and private input
  publicInput: RollupInput,

  methods: {
    baseCase: {
      privateInputs: [Field],

      method(state: RollupInput, commitmentNFTHolders: Field) {
        //TODO : Check commitmentNFTHolders is member of Datagroup Claims[] markle tree
        //TODO : Next Should recursively depend on this proof
        // we check that the response is the same as the hash of the answer at that path
        state.path
          .calculateRoot(Poseidon.hash(state.nftHolder.toFields()))
          .assertEquals(commitmentNFTHolders);
      },
    },

    step: {
      privateInputs: [Field, SelfProof],

      method(
        state: RollupInput,
        commitmentNFTHolders: Field,
        earlierProof: SelfProof<Field, void>
      ) {
        //TODO : Check commitmentNFTHolders is member of Datagroup Claims[] markle tree
        //TODO : You Should recursively depend on previous proof
        earlierProof.verify();
        state.path
          .calculateRoot(Poseidon.hash(state.nftHolder.toFields()))
          .assertEquals(commitmentNFTHolders);
        //earlierProof.publicInput.add(1).assertEquals(publicInput);
      },
    },
  },
});

// ===============================================================

export class Own extends SmartContract {
  // TODO: Add Claims[] markle tree root state
  @state(Field) commitmentNFTHolders = State<Field>();

  // TODO: Initilise deploy statement
  // deploy(args: DeployArgs){
  //     super.deploy(args);
  //     this.setPermissions({
  //             ...Permissions.default(),
  //             editState: Permissions.proofOrSignature(),
  //           });
  // }

  init() {
    // TODO: Add user input in "commitmentNFTHolders.set()"
    super.init();
    // this.account.permissions.set({
    //     ...Permissions.default(),
    //     editState: Permissions.proofOrSignature(),
    //   });

    //store the root of the merkle tree in the app state
    this.commitmentNFTHolders.set(createNFTHoldersMerkleTree().getRoot());
  }

  @method validateNFTHolder(nftHolder: NFTHolder, path: NFTHolderWitness) {
    //TODO : Check commitmentNFTHolders is member of Datagroup Claims[] markle tree
    let commitment = this.commitmentNFTHolders.get();
    this.commitmentNFTHolders.assertEquals(commitment);

    // we check that the response is the same as the hash of the answer at that path
    path
      .calculateRoot(Poseidon.hash(nftHolder.toFields()))
      .assertEquals(commitment);
  }
}
