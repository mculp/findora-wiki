(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[612],{406:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:3},s="Validator Node Setup (on Mainnet)",u={unversionedId:"general/run-a-mainnet-validator-node",id:"general/run-a-mainnet-validator-node",isDocsHomePage:!1,title:"Validator Node Setup (on Mainnet)",description:"Table of Contents:",source:"@site/docs/general/run-a-mainnet-validator-node.md",sourceDirName:"general",slug:"/general/run-a-mainnet-validator-node",permalink:"/docs/general/run-a-mainnet-validator-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-mainnet-validator-node.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/general/contributing"},next:{title:"Changelog",permalink:"/docs/general/CHANGELOG"}},d=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"Automated Setup Script",id:"automated-setup-script",children:[]},{value:"Manual Setup",id:"manual-setup",children:[{value:"Download Validator Binaries",id:"download-validator-binaries",children:[]},{value:"Configure your local node (for Mainnet)",id:"configure-your-local-node-for-mainnet",children:[]}]},{value:"Staking",id:"staking",children:[{value:"Stake into findora network",id:"stake-into-findora-network",children:[]},{value:"Append more power to your node",id:"append-more-power-to-your-node",children:[]},{value:"Query infomations",id:"query-infomations",children:[]},{value:"Claim rewards",id:"claim-rewards",children:[]},{value:"Unstake principals",id:"unstake-principals",children:[]}]}],p={toc:d};function m(e){var n=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validator-node-setup-on-mainnet"},"Validator Node Setup (on Mainnet)"),(0,r.kt)("p",null,"Table of Contents:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hardware Requirements"),(0,r.kt)("li",{parentName:"ul"},"Automated Setup"),(0,r.kt)("li",{parentName:"ul"},"Manual Setup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Download Validator Binaries"),(0,r.kt)("li",{parentName:"ul"},"Configure Local Node (for Mainnet)"),(0,r.kt)("li",{parentName:"ul"},"Enable node to participate as a Validator Candidate (by staking FRA)"))),(0,r.kt)("li",{parentName:"ul"},"Staking/Unstaking FRA and Claiming Rewards (as a Validator)")),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Requirements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 8GB RAM, 2 Core CPU, 100GB Hard Disk"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 16GB RAM, 4 Core CPU, 300GB Hard Disk")))),(0,r.kt)("h2",{id:"automated-setup-script"},"Automated Setup Script"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Run the script below to automatically download binaries and configure the Mainnet validator node: ",(0,r.kt)("a",{target:"_blank",href:t(3113).Z},(0,r.kt)("strong",null,"node_init_mainnet.sh")),"."),(0,r.kt)("p",{parentName:"blockquote"},"example: ",(0,r.kt)("inlineCode",{parentName:"p"},"bash -x node_init_mainnet.sh Path-to-Your-Node-Keypair"))),(0,r.kt)("h2",{id:"manual-setup"},"Manual Setup"),(0,r.kt)("p",null,"If you don't wish to run the automated setup script above, you can manually download binary files and configure your Mainnet validator following the instructions below:"),(0,r.kt)("h3",{id:"download-validator-binaries"},"Download Validator Binaries"),(0,r.kt)("p",null,"Download the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tendermint"),": a findora version of tendermint-core node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/linux/tendermint"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/macos/tendermint"},"MacOS version")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"abci_validtor_node"),": the abci node of findora network",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/linux/abci_validator_node"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/macos/abci_validator_node"},"MacOS version")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns"),": a command line tool for staking",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/linux/fns"},"Linux version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/downloads/releases/download/macos/fns"},"MacOS version"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"You can (optionally) run a Linux node via ",(0,r.kt)("inlineCode",{parentName:"li"},"Windows Subsystem for Linux")),(0,r.kt)("li",{parentName:"ul"},"Check that binaries have executable permissions set correctly",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x tendermint abci_validator_node fns")))),(0,r.kt)("li",{parentName:"ul"},"Check that binary files are placed into one of your ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," directories",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex) ",(0,r.kt)("inlineCode",{parentName:"li"},"mv tendermint abci_validator_node fns /usr/local/bin/")))))),(0,r.kt)("h3",{id:"configure-your-local-node-for-mainnet"},"Configure your local node (for Mainnet)"),(0,r.kt)("h4",{id:"initialize-your-local-node"},"Initialize your local node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Clean up old data that may exist\nrm -rf ~/.tendermint\n\n# Initialize the config of your tendermint node\ntendermint init\n\n# Create ledger data directory, for example\nrm -rf ${LEDGER_DIR}\nmkdir -p ${LEDGER_DIR}/abci ${LEDGER_DIR}/tendermint\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you encounter a security issue error when trying to run ",(0,r.kt)("inlineCode",{parentName:"li"},"tendermint init"),", you may need to manually approve its security priveliges in you OS first. Then re-run the ",(0,r.kt)("inlineCode",{parentName:"li"},"tendermint init")," command again."))),(0,r.kt)("h4",{id:"set-necessary-environment-variables"},"Set necessary environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# example:\n#     export LEDGER_DIR=${HOME}/findora_mainnet\nexport LEDGER_DIR=<The path where you want to store your ledger data>\n\n# example:\n#     export TENDERMINT_NODE_KEY_CONFIG_PATH=${HOME}/.tendermint/config/priv_validator_key.json\nexport TENDERMINT_NODE_KEY_CONFIG_PATH=<The path where the 'priv_validator_key.json' are stored>\n\n# Optional, only if you want to query from your local node\nexport ENABLE_LEDGER_SERVICE=true\n\n# Optional, only if you want to query from your local node\nexport ENABLE_QUERY_SERVICE=true\n")),(0,r.kt)("h4",{id:"generate-key"},"Generate key"),(0,r.kt)("p",null,"If you donot have a keypair for your node, generate a new random one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns genkey > ${LEDGER_DIR}/tmp.gen.keypair\n")),(0,r.kt)("p",null,"Output example (please do not use this sample directly):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat ${LEDGER_DIR}/tmp.gen.keypair\nMnemonic: repair drink action brass term blur fat doll spoon thumb raise squirrel tornado engine tumble picnic approve elegant tube urge ghost secret seminar blame\nKey: {\n  "pub_key": "LSlwyUYVg1zBtCqOS6wv_49uHTYS2OwQLBn3bRjrtPU=",\n  "sec_key": "b0MGhK7xaRQHuhzFkaBhQ1o4GwTumJEWt1NQ7FChNwA="\n}\n')),(0,r.kt)("p",null,"set them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'fns setup -S https://prod-mainnet.prod.findora.org\n\n# example:\n#     echo "repair drink action brass term blur fat doll spoon thumb raise squirrel tornado engine tumble picnic approve elegant tube urge ghost secret seminar blame" > ${LEDGER_DIR}/node.mnemonic\n#     fns setup -O ${LEDGER_DIR}/node.mnemonic\nfns setup -O <Path to the mnemonic of your node> || exit 1\n# example \n#     fns setup -K ${HOME}/.tendermint/config/priv_validator_key.json\nfns setup -K <path to validator key> || exit 1\n')),(0,r.kt)("h4",{id:"get-fra-tokens"},"Get FRA tokens"),(0,r.kt)("p",null,"There serveral ways to get FRAs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"propose an issue to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/FindoraNetwork/findora-wiki"},"https://github.com/FindoraNetwork/findora-wiki")),(0,r.kt)("li",{parentName:"ul"},"trade ",(0,r.kt)("a",{parentName:"li",href:"https://www.gate.io/coins/buy-FRA"},"FRA")," tokens from exchange ",(0,r.kt)("a",{parentName:"li",href:"https://www.gate.io/"},"Gate.io"),", which is one of the global top 10 cryptocurrency exchanges with authentic trading volume"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h4",{id:"custom-the-config-of-your-tendermint-core-node"},"Custom the config of your tendermint-core node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"you should set up a cluster instead of using a raw node in your production environment"),(0,r.kt)("li",{parentName:"ul"},"cmdline tools like 'wget', 'curl', 'jq' and 'perl' should be installed in advance"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Get the genesis config from an existing node of the mainnet\ncurl https://prod-mainnet.prod.findora.org:26657/genesis \\\n    | jq -c '.result.genesis' \\\n    | jq > ~/.tendermint/config/genesis.json\n\n# Adjust the block interval\nperl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"15s\"#' ~/.tendermint/config/config.toml\n\n# Config some existing nodes to your local node, so it can connect to the mainnet\nperl -pi -e \\\n    's#(persistent_peers = )\".*\"#$1\"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@prod-mainnet-us-west-2-sentry-000-public.prod.findora.org:26656\"#' \\\n    ~/.tendermint/config/config.toml\n")),(0,r.kt)("h4",{id:"run-your-local-node"},"Run your local node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Start your validator process\nnohup abci_validator_node 2>&1 > ${LEDGER_DIR}/abci/validator.log &\n\n# Start your tendermint process\n# Notes:\n#   If you want to access the tendermint node on another host,\n#   use option --rpc.laddr=tcp://0.0.0.0:26657 when starting the process\nnohup tendermint node 2>&1 > ${LEDGER_DIR}/tendermint/consensus.log &\n")),(0,r.kt)("h4",{id:"check-the-status-of-your-local-node"},"Check the status of your local node"),(0,r.kt)("p",null,"If the following commands can return useful message without error, then your node is running well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://localhost:26657/status'; echo\ncurl 'http://localhost:8669/version'; echo\ncurl 'http://localhost:8668/version'; echo # Only if you set the 'ENABLE_LEDGER_SERVICE'\ncurl 'http://localhost:8667/version'; echo # Only if you set the 'ENABLE_QUERY_SERVICE'\n")),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,"For staking operations, you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fns")," tool."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Usage example:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"fns stake --help")),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"USAGE:\n    fns stake [FLAGS] [OPTIONS] --amount <Amount>\n\nFLAGS:\n    -a, --append     stake more FRAs to your node\n\nOPTIONS:\n    -n, --amount <Amount>           how much `FRA unit`s you want to stake\n    -R, --commission-rate <Rate>    the commission rate for delegators, a float number from 0.0 to 1.0\n    -M, --validator-memo <Memo>     the description of your validator node, optional\n")),(0,r.kt)("p",{parentName:"blockquote"},"Similar help information can be obtained through the ",(0,r.kt)("inlineCode",{parentName:"p"},"fns")," tool itself:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns stake --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns unstake --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns claim --help")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fns transfer --help")),(0,r.kt)("li",{parentName:"ul"},"..."))),(0,r.kt)("h3",{id:"stake-into-findora-network"},"Stake into findora network"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"you should wait for 100% completion of the data synchronization of your node",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Or you may be punished by the network because of 'validator node offline'"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# The minimal amount of FRAs for a successful staking is 888888\n# example:\n# - your want to stake 1888888 FRAs\n# - that is 1888888 * 1000000 FRA units\nfns stake -n $((1888888 * 1000000)) -R 0.2 -M 'Node-A'\n")),(0,r.kt)("h3",{id:"append-more-power-to-your-node"},"Append more power to your node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# append 2 FRA units to your node,\n# the power of your node will be increased by 2 if all is well\nfns stake -a -n 2\n")),(0,r.kt)("h3",{id:"query-infomations"},"Query infomations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fns show\n")),(0,r.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,r.kt)("p",null,"Claim all your rewards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim\n")),(0,r.kt)("p",null,"Claim part of your rewards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# fns claim -n <the amount of FRA units you want>\n# example:\n# - your want to claim 10 FRAs\n# - that is 10 * 1000000 FRA units\nfns claim -n $((10 * 1000000))\n")),(0,r.kt)("h3",{id:"unstake-principals"},"Unstake principals"),(0,r.kt)("p",null,"Unstake all your principals:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": this operation will make your node out of Findora Network (Mainnet).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake\n")),(0,r.kt)("p",null,"Unstake part of your principals:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# fns unstake -n <the amount of FRA units you want>\n# example:\n# - your want to unstake 900 FRAs\n# - that is 900 * 1000000 FRA units\nfns unstake -n $((900 * 1000000))\n")))}m.isMDXComponent=!0},3113:function(e,n,t){"use strict";n.Z=t.p+"assets/files/node_init_mainnet-acb5d0e29ffa5ed6221d552b1f0d01ef.sh"}}]);