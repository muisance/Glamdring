# TODOs for `test` branch

## @muisance

@muisance TODO:

* [ ] Route front and back to normienet and ipfs respectively
* [ ] In `.env`
  * [ ] Find and paste in value for `NEXT_PUBLIC_NETWORK_CHAIN_ID_HEX`
  * [ ] Same for
    * [ ] `NEXT_PUBLIC_AVATAR_NFT_CONTRACT_ADDRESS`,
    * [ ] `NEXT_PUBLIC_JURISDICTION_CONTRACT_ADDRESS`,
    * [ ] `NEXT_PUBLIC_ACTION_REPO_CONTRACT_ADDRESS`
  * [ ] Check if `INFURA` API by chance works/is bridgeable to `Boba L2`
    * [ ] If not - find another API provider
    * [ ] Same for Boba Block Explorer
  * [ ] Also check if `ETH`'s `CURRENCY_DECIMALS` on Boba are still `18`
* [ ] After contracts are deployed to Boba, route `Noosphere` to Boba Main
      instead of `Mumbai`
