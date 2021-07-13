(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[857],{4093:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},s="Validator Node Setup (on Testnet)",u={unversionedId:"general/run-a-testnet-validator-node",id:"general/run-a-testnet-validator-node",isDocsHomePage:!1,title:"Validator Node Setup (on Testnet)",description:"Table of Contents:",source:"@site/docs/general/run-a-testnet-validator-node.md",sourceDirName:"general",slug:"/general/run-a-testnet-validator-node",permalink:"/findora-wiki/docs/general/run-a-testnet-validator-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-testnet-validator-node.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/findora-wiki/docs/general/intro"},next:{title:"Contributing",permalink:"/findora-wiki/docs/general/contributing"}},d=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"Automated Setup Script",id:"automated-setup-script",children:[]},{value:"Manual Setup",id:"manual-setup",children:[{value:"Download Validator Binaries",id:"download-validator-binaries",children:[]},{value:"Configure Local Node (for Testnet)",id:"configure-local-node-for-testnet",children:[]}]},{value:"Request (Testnet) FRA Tokens",id:"request-testnet-fra-tokens",children:[]},{value:"Stake/Unstake FRA and Claiming Rewards (as a Validator)",id:"stakeunstake-fra-and-claiming-rewards-as-a-validator",children:[{value:"Stake into findora network",id:"stake-into-findora-network",children:[]},{value:"Append more power to your node",id:"append-more-power-to-your-node",children:[]},{value:"Query infomations",id:"query-infomations",children:[]},{value:"Claim rewards",id:"claim-rewards",children:[]},{value:"Unstake principals",id:"unstake-principals",children:[]}]}],p={toc:d};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator-node-setup-on-testnet"},"Validator Node Setup (on Testnet)"),(0,r.kt)("p",null,"Table of Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hardware Requirements"),(0,r.kt)("li",{parentName:"ul"},"Automated Setup"),(0,r.kt)("li",{parentName:"ul"},"Manual Setup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Download Validator Binaries"),(0,r.kt)("li",{parentName:"ul"},"Configure Local Node (for Testnet)"),(0,r.kt)("li",{parentName:"ul"},"Enable node to participate as a Validator Candidate (by staking FRA)"))),(0,r.kt)("li",{parentName:"ul"},"Testnet Faucet (Free FRA Tokens)"),(0,r.kt)("li",{parentName:"ul"},"Staking/Unstaking FRA and Claiming Rewards (as a Validator)")),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requirements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 8GB RAM, 2 Core CPU, 100GB Hard Disk"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 16GB RAM, 4 Core CPU, 300GB Hard Disk")))),(0,r.kt)("h2",{id:"automated-setup-script"},"Automated Setup Script"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run the script below to automatically download binaries and configure the Testnet validator node: ",(0,r.kt)("a",{target:"_blank",href:n(1804).Z},(0,r.kt)("strong",null,"node_init.sh")),"."),(0,r.kt)("p",{parentName:"blockquote"},"example: ",(0,r.kt)("inlineCode",{parentName:"p"},"bash -x node_init.sh"))),(0,r.kt)("h2",{id:"manual-setup"},"Manual Setup"),(0,r.kt)("p",null,"If you don't wish to run the automated setup script above, you can manually download binary files and configure your Testnet validator following the instructions below:"),(0,r.kt)("h3",{id:"download-validator-binaries"},"Download Validator Binaries"),(0,r.kt)("p",null,"Download the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tendermint"),": a Findora version of tendermint-core node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/linux/tendermint"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/macos/tendermint"},"MacOS version")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abci_validator_node"),": the ABCI node of findora network",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/linux/abci_validator_node"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/macos/abci_validator_node"},"MacOS version")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns"),": Findora Network Staking (fns) command is a CLI tool for staking/unstaking FRA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/linux/fns"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/macos/fns"},"MacOS version")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stt"),": Staking Test Tool (stt) is an auxiliary CLI tool for performing staking testing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/linux/stt"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/testnet-downloads/releases/download/macos/stt"},"MacOS version"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You can (optionally) run a Linux node via ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows Subsystem for Linux")),(0,r.kt)("li",{parentName:"ul"},"Check that binaries have executable permissions set correctly",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x tendermint abci_validator_node fns stt")))),(0,r.kt)("li",{parentName:"ul"},"Check that binary files are placed into one of your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," directories",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"mv tendermint abci_validator_node fns stt /usr/local/bin/")))))),(0,r.kt)("h3",{id:"configure-local-node-for-testnet"},"Configure Local Node (for Testnet)"),(0,r.kt)("h4",{id:"initialize-local-node"},"Initialize Local Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Clean up old data that may exist\nrm -rf ~/.tendermint\n\n# Initialize the configuration of your Tendermint node\n# This command will create a .tendermint directory and priv_validator_key.json file needed later\ntendermint init\n\n# Create ledger data directory, for example\nrm -rf ${LEDGER_DIR}\nmkdir -p ${LEDGER_DIR}/abci ${LEDGER_DIR}/tendermint\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you encounter a security issue error when trying to run ",(0,r.kt)("inlineCode",{parentName:"li"},"tendermint init"),", you may need to manually approve its security priveliges in you OS first. Then re-run the ",(0,r.kt)("inlineCode",{parentName:"li"},"tendermint init")," command again."))),(0,r.kt)("h4",{id:"configure-environment-variables"},"Configure Environment Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# ex)\n#     export LEDGER_DIR=${HOME}/findora_testnet\n#     We recommend storing ledger data in ${HOME}/findora_testnet\nexport LEDGER_DIR=<Path to store ledger data>\n\n# ex)\n#     export TENDERMINT_NODE_KEY_CONFIG_PATH=${HOME}/.tendermint/config/priv_validator_key.json\nexport TENDERMINT_NODE_KEY_CONFIG_PATH=<The path where the 'priv_validator_key.json' are stored>\n\n# Optional, only if you want to query from your local node\nexport ENABLE_LEDGER_SERVICE=true\n\n# Optional, only if you want to query from your local node\nexport ENABLE_QUERY_SERVICE=true\n")),(0,r.kt)("h4",{id:"generate-public-and-private-keys"},"Generate Public and Private Keys"),(0,r.kt)("p",null,"Generate a new, random pair of public and private keys for your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns genkey > ~/findora_testnet/tmp.gen.keypair\n")),(0,r.kt)("p",null,"View the contents of your ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp.gen.keypair")," file via the command below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cat ~/findora_testnet/tmp.gen.keypair")),(0,r.kt)("p",null,"An example of the file's content is below (Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"pub_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sec_key")," below are examples. Do not use them in your own node):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Mnemonic: repair drink action brass term blur fat doll spoon thumb raise squirrel tornado engine tumble picnic approve elegant tube urge ghost secret seminar blame\nKey: {\n  "pub_key": "LSlwyUYVg1zBtCqOS6wv_49uHTYS2OwQLBn3bRjrtPU=",\n  "sec_key": "b0MGhK7xaRQHuhzFkaBhQ1o4GwTumJEWt1NQ7FChNwA="\n}\n')),(0,r.kt)("p",null,"Configure your validator node to use your newly generated public and private keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'fns setup -S https://prod-testnet.prod.findora.org\n\n# ex)\n#     echo "repair drink action brass term blur fat doll spoon thumb raise squirrel tornado engine tumble picnic approve elegant tube urge ghost secret seminar blame" > ${LEDGER_DIR}/node.mnemonic\n#     fns setup -O ${LEDGER_DIR}/node.mnemonic\nfns setup -O <Path to the mnemonic of your node> || exit 1\n\n# ex)\n#     fns setup -K ${HOME}/.tendermint/config/priv_validator_key.json\nfns setup -K <path to validator key> || exit 1\n')),(0,r.kt)("h4",{id:"configure-tendermint-core-node"},"Configure Tendermint-Core Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"For production environments, setup a cluster (instead of a raw node)"),(0,r.kt)("li",{parentName:"ul"},"Install the following command line tools before continuing:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'wget', 'curl', 'jq' and 'perl'"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Get the genesis config from an existing node of the testnet\ncurl https://prod-testnet.prod.findora.org:26657/genesis \\\n    | jq -c '.result.genesis' \\\n    | jq > ~/.tendermint/config/genesis.json\n\n# Adjust the block interval\nperl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"15s\"#' ~/.tendermint/config/config.toml\n\n# Config some existing nodes to your local node, so it can connect to the testnet\nperl -pi -e \\\n    's#(persistent_peers = )\".*\"#$1\"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@prod-testnet-us-west-2-sentry-000-public.prod.findora.org:26656\"#' \\\n    ~/.tendermint/config/config.toml\n")),(0,r.kt)("h4",{id:"start-local-node"},"Start Local Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Start your validator process\nnohup abci_validator_node 2>&1 > ${LEDGER_DIR}/abci/validator.log &\n\n# Start your tendermint process\n# Notes:\n#   If you want to access the tendermint node on another host,\n#   use option --rpc.laddr=tcp://0.0.0.0:26657 when starting the process\nnohup tendermint node 2>&1 > ${LEDGER_DIR}/tendermint/consensus.log &\n")),(0,r.kt)("h4",{id:"check-local-node-status"},"Check Local Node Status"),(0,r.kt)("p",null,"If the following commands return status messages without any errors, then your node has been successfully configured and started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://localhost:26657/status'\ncurl 'http://localhost:8669/version'\ncurl 'http://localhost:8668/version' # Only if you set the 'ENABLE_LEDGER_SERVICE'\ncurl 'http://localhost:8667/version' # Only if you set the 'ENABLE_QUERY_SERVICE'\n")),(0,r.kt)("h2",{id:"request-testnet-fra-tokens"},"Request (Testnet) FRA Tokens"),(0,r.kt)("p",null,"To request Testnet FRA tokens please use the form posted on discord ."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All FRA token requests will be approved!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You will need to fill in a short form asking for your wallet address (where Testnet FRA will be sent to)"),(0,r.kt)("li",{parentName:"ul"},"Testnet FRA requests are processed every 12 hours")))),(0,r.kt)("h2",{id:"stakeunstake-fra-and-claiming-rewards-as-a-validator"},"Stake/Unstake FRA and Claiming Rewards (as a Validator)"),(0,r.kt)("p",null,"For staking operations, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fns")," tool."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Usage example:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"fns stake --help")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE:\n    fns stake [FLAGS] [OPTIONS] --amount <Amount>\n\nFLAGS:\n    -a, --append     stake more FRAs to your node\n\nOPTIONS:\n    -n, --amount <Amount>           how much `FRA unit`s you want to stake\n    -R, --commission-rate <Rate>    the commission rate for delegators, a float number from 0.0 to 1.0\n    -M, --validator-memo <Memo>     the description of your validator node, optional\n")),(0,r.kt)("p",{parentName:"blockquote"},"Similar help information can be obtained through the ",(0,r.kt)("inlineCode",{parentName:"p"},"fns")," tool itself:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns stake --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns unstake --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns claim --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns transfer --help")),(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("h3",{id:"stake-into-findora-network"},"Stake into findora network"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"you should wait for 100% completion of the data synchronization of your node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Or you may be punished by the network because of 'validator node offline'"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# The minimal amount of FRAs for a successful staking is 888888\n# example:\n# - your want to stake 1888888 FRAs\n# - that is 1888888 * 1000000 FRA units\nfns stake -n $((1888888 * 1000000)) -R 0.2 -M 'Node-A'\n")),(0,r.kt)("h3",{id:"append-more-power-to-your-node"},"Append more power to your node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# append 2 FRA units to your node,\n# the power of your node will be increased by 2 if all is well\nfns stake -a -n 2\n")),(0,r.kt)("h3",{id:"query-infomations"},"Query infomations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fns show\n")),(0,r.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,r.kt)("p",null,"Claim all your rewards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim\n")),(0,r.kt)("p",null,"Claim part of your rewards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# fns claim -n <the amount of FRA units you want>\n# example:\n# - your want to claim 10 FRAs\n# - that is 10 * 1000000 FRA units\nfns claim -n $((10 * 1000000))\n")),(0,r.kt)("h3",{id:"unstake-principals"},"Unstake principals"),(0,r.kt)("p",null,"Unstake all your principals:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": this operation will make your node out of findora network (testnet).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake\n")),(0,r.kt)("p",null,"Unstake part of your principals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# fns unstake -n <the amount of FRA units you want>\n# example:\n# - your want to unstake 900 FRAs\n# - that is 900 * 1000000 FRA units\nfns unstake -n $((900 * 1000000))\n")))}m.isMDXComponent=!0},1804:function(e,t,n){"use strict";t.Z=n.p+"assets/files/node_init-699f578826ecc2d7176235b9f9d6e53a.sh"}}]);