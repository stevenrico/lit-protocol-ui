import DATASET_TOKENS_ABI from "../artifacts/DatasetTokensABI.json" assert { type: "json" }

const { providers, utils, Contract } = ethers

const RPC_URL = "INSERT_RPC_URL"

const provider = new providers.JsonRpcProvider(RPC_URL)

const IDatasetTokens = new utils.Interface(DATASET_TOKENS_ABI)

const contract = {
  address: "0x77F9Cc01794280758C184E95924a3Dd6707316e4",
  block: {
    height: 36959524,
  },
}

const DatasetTokens = new Contract(
  contract.address,
  DATASET_TOKENS_ABI,
  provider
)

export { DatasetTokens, IDatasetTokens }
