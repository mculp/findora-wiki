(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[200],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7407:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:2},s=void 0,d={unversionedId:"general/run-a-full-node",id:"general/run-a-full-node",isDocsHomePage:!1,title:"run-a-full-node",description:"Run a Findora Full Node",source:"@site/docs/general/run-a-full-node.md",sourceDirName:"general",slug:"/general/run-a-full-node",permalink:"/findora-wiki/docs/general/run-a-full-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-full-node.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/findora-wiki/docs/general/intro"},next:{title:"Create a Page",permalink:"/findora-wiki/docs/tutorial-basics/create-a-page"}},c=[{value:"System requirements",id:"system-requirements",children:[]},{value:"Network port",id:"network-port",children:[]},{value:"Comparison of network parameters in different environments",id:"comparison-of-network-parameters-in-different-environments",children:[]},{value:"application install",id:"application-install",children:[]},{value:"linux",id:"linux",children:[]},{value:"macos",id:"macos",children:[{value:"config bin to env",id:"config-bin-to-env",children:[]},{value:"create config and set config",id:"create-config-and-set-config",children:[]},{value:"request network params and write  node config",id:"request-network-params-and-write--node-config",children:[]},{value:"application install",id:"application-install-1",children:[]}]},{value:"linux",id:"linux-2",children:[]},{value:"macos",id:"macos-2",children:[{value:"config bin to env",id:"config-bin-to-env-1",children:[]},{value:"create config and set config",id:"create-config-and-set-config-1",children:[]},{value:"request network params and write  node config",id:"request-network-params-and-write--node-config-1",children:[]},{value:"start validator",id:"start-validator",children:[]},{value:"fns is official offer staking terminal tools",id:"fns-is-official-offer-staking-terminal-tools",children:[]},{value:"stake operator",id:"stake-operator",children:[]},{value:"append staking amount",id:"append-staking-amount",children:[]},{value:"unstake",id:"unstake",children:[]},{value:"send transfer",id:"send-transfer",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Update",id:"update",children:[]}]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Run a Findora Full Node"),(0,i.kt)("p",null,"Whether you're interested in contributing to Findora, building apps, or joining the validator pool, you'll want the ability to run your own full node."),(0,i.kt)("p",null,"This guide will show you how to run one of our Findora nodes and connect to the Findora alpha or mainnet networks. Currently we are offering prebuilt docker images but we will be providing instructions for building directly source very shortly!"),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Build a full node in your server and connect to the Findora Alpha/Mainnet network.\nAlpha network is for the integration and test only."),(0,i.kt)("h3",{id:"system-requirements"},"System requirements"),(0,i.kt)("h4",{id:"os"},"OS"),(0,i.kt)("p",null,"Linux(Ubuntu), Macos",(0,i.kt)("br",{parentName:"p"}),"\n","Currently window support is still under development"),(0,i.kt)("p",null,"Follow the instructions that follow and the script will automatically create a full node and connect to the Findora Network."),(0,i.kt)("h3",{id:"network-port"},"Network port"),(0,i.kt)("p",null,"The node should open the port 8667, 8668, 8669 and 26657 to puclib with Security Group in AWS or fire work in GCP"),(0,i.kt)("h3",{id:"comparison-of-network-parameters-in-different-environments"},"Comparison of network parameters in different environments"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For the convenience of the test network, some parameters are different from the main network")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Project"),(0,i.kt)("th",{parentName:"tr",align:null},"Testnet"),(0,i.kt)("th",{parentName:"tr",align:null},"Mainnet"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Block time"),(0,i.kt)("td",{parentName:"tr",align:null},"6s"),(0,i.kt)("td",{parentName:"tr",align:null},"16s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Unlock period"),(0,i.kt)("td",{parentName:"tr",align:null},"5 * 5s"),(0,i.kt)("td",{parentName:"tr",align:null},"3600 ",(0,i.kt)("em",{parentName:"td"}," 24 ")," 21s")))),(0,i.kt)("h1",{id:"test-network"},"test network"),(0,i.kt)("h3",{id:"application-install"},"application install"),(0,i.kt)("h2",{id:"linux"},"linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.linux\n\n### remove suffix\n\nmv tendermint.linux tendermint\nmv abci_validator_node.linux abci_validator_node\nmv fns.linux fns\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,i.kt)("h2",{id:"macos"},"macos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o tendermint https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.macos\n\ncurl -o abci_validator_node https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.macos\n\ncurl -o fns https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.macos\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,i.kt)("p",null,"The three applications above are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tendermint application\nfindora application\nfns staking terminal tool\n")),(0,i.kt)("h3",{id:"config-bin-to-env"},"config bin to env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,i.kt)("h3",{id:"create-config-and-set-config"},"create config and set config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# clear old data\n rm -rf /tmp/findora ~/.tendermint\n# init tendermint\ntendermint init\n")),(0,i.kt)("p",null,"after init successfully,run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ls  ~/.tendermint/config \n")),(0,i.kt)("p",null,"Three files are displayed\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"config.toml  genesis.json  node_key.json  priv_validator_key.json\n")),(0,i.kt)("h3",{id:"request-network-params-and-write--node-config"},"request network params and write  node config"),(0,i.kt)("h4",{id:"install-jq"},"install jq"),(0,i.kt)("h4",{id:"linux-1"},"linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install jq\n")),(0,i.kt)("h4",{id:"macos-1"},"macos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install jq\n")),(0,i.kt)("h4",{id:"write-genesis-config"},"write genesis config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl https://dev-qa01.dev.findora.org:26657/genesis | jq -c  | perl -pi -e \'s/^{"jsonrpc":"2.0","id":-1,"result":{"genesis"://\' | perl -pi -e \'s/}}$//\'  | jq > ~/.tendermint/config/genesis.json\n')),(0,i.kt)("h4",{id:"write-tendermint-config-and-set-proposal-block-interval-5s-for-test-network"},"write tendermint config and set proposal block interval 5s for test network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"5s\"#' ~/.tendermint/config/config.toml\n\n")),(0,i.kt)("h4",{id:"write-peer-address-and-network"},"write peer address and network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'perl -pi -e \'s#(persistent_peers = )".*"#$1"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@dev-qa01-us-west-2-sentry-000-public.dev.findora.org:26656,d0c6e3e1589695ae6d650b288caf2efe9a998a50\\@dev-qa01-us-west-2-sentry-001-public.dev.findora.org:26656"#\' ~/.tendermint/config/config.toml\n')),(0,i.kt)("h1",{id:"mainnet-network"},"mainnet network"),(0,i.kt)("h3",{id:"application-install-1"},"application install"),(0,i.kt)("h2",{id:"linux-2"},"linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget   https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.linux\n\n### remove suffix\n\nmv tendermint.linux tendermint\nmv abci_validator_node.linux abci_validator_node\nmv fns.linux fns\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,i.kt)("h2",{id:"macos-2"},"macos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o tendermint https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.macos\n\ncurl -o abci_validator_node https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.macos\n\ncurl -o fns https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.macos\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,i.kt)("p",null,"The three applications above are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tendermint application\nfindora application\nfns staking terminal tool\n")),(0,i.kt)("h3",{id:"config-bin-to-env-1"},"config bin to env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,i.kt)("h3",{id:"create-config-and-set-config-1"},"create config and set config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# clear old data\n rm -rf /tmp/findora ~/.tendermint\n# init tendermint\ntendermint init\n")),(0,i.kt)("p",null,"after init successfully,run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ls  ~/.tendermint/config \n")),(0,i.kt)("p",null,"Three files are displayed\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"config.toml   genesis.json   node_key.json  priv_validator_key.json\n")),(0,i.kt)("h3",{id:"request-network-params-and-write--node-config-1"},"request network params and write  node config"),(0,i.kt)("h4",{id:"install-jq-1"},"install jq"),(0,i.kt)("h4",{id:"linux-3"},"linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install jq\n")),(0,i.kt)("h4",{id:"macos-3"},"macos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew install jq\n")),(0,i.kt)("h4",{id:"write-genesis-config-1"},"write genesis config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl https://prod-mainnet.prod.findora.org:26657/genesis | jq -c  | perl -pi -e \'s/^{"jsonrpc":"2.0","id":-1,"result":{"genesis"://\' | perl -pi -e \'s/}}$//\'  | jq > ~/.tendermint/config/genesis.json\n')),(0,i.kt)("h4",{id:"write-tendermint-config-and-set--proposal-block-interval-15s"},"write tendermint config and set  proposal block interval 15s"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"15s\"#' ~/.tendermint/config/config.toml\n\n")),(0,i.kt)("h4",{id:"write-peer-address-and-network-1"},"write peer address and network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'perl -pi -e \'s#(persistent_peers = )".*"#$1"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@prod-mainnet-us-west-2-sentry-000-public.prod.findora.org:26656,d0c6e3e1589695ae6d650b288caf2efe9a998a50\\@prod-mainnet-us-west-2-sentry-001-public.prod.findora.org:26656"#\' ~/.tendermint/config/config.toml\n')),(0,i.kt)("h1",{id:"run-node"},"run node"),(0,i.kt)("h3",{id:"start-validator"},"start validator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"TD_NODE_SELF_ADDR=$(cat ~/.tendermint/config/priv_validator_key.json | grep 'address' | grep -o '[^\"]\\{20,\\}') \\\nLEDGER_DIR=/tmp/findora \\\nENABLE_LEDGER_SERVICE=true \\\nENABLE_QUERY_SERVICE=true \\\nabci_validator_node >/tmp/log 2>&1 &\n")),(0,i.kt)("h4",{id:"check-server-port"},"check server port"),(0,i.kt)("p",null,"linux"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ltpn\n")),(0,i.kt)("p",null,"macos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -AaLlnW\n")),(0,i.kt)("p",null,"show list:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8667",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8668",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8669",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.26658"),(0,i.kt)("p",null,"If any port is missing, the application did not start successfully, please start from the first step"),(0,i.kt)("h4",{id:"start-tendermint-application"},"start tendermint application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nohup tendermint node>/tmp/td.log 2>&1 &\n")),(0,i.kt)("h1",{id:"use-fns-tool"},"use fns tool"),(0,i.kt)("h3",{id:"fns-is-official-offer-staking-terminal-tools"},"fns is official offer staking terminal tools"),(0,i.kt)("p",null,"##set fns tool "),(0,i.kt)("h4",{id:"set-server-url"},"set server url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fns setup -S http://127.0.0.1:8669\n\n")),(0,i.kt)("h4",{id:"set-pay-and-staking-account-mnemonic"},"set pay and staking account mnemonic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo '[your private mnemonic]'> $(pwd)/mnemonic\nfns setup -O $(pwd)/mnemonic\n\n")),(0,i.kt)("h4",{id:"acquire-and-set-tendermint--public-key"},"acquire and set tendermint  public key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"echo $(grep -A 2 'pub_key' ~/.tendermint/config/priv_validator_key.json | grep '\"value\":' | grep -o '[^\"]\\+\"$' | sed 's/\"//') > $(pwd)/tendermint_keys\nfns setup -K $(pwd)/tendermint_keys\n")),(0,i.kt)("h3",{id:"stake-operator"},"stake operator"),(0,i.kt)("p",null,"For example, pledge 1000000, because the basic unit is 6 digits, it must be 1000000 n is the pledge amount\nR is the commission rate is the commission that someone entrusts to you, and the commission you get, -M is only for this transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'fns stake -n $((1000000 * 1000000)) -R 0.2 -M "my remark"\n')),(0,i.kt)("p",null,"wait for one minutes\nquery stake result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fns show\n")),(0,i.kt)("h3",{id:"append-staking-amount"},"append staking amount"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fns stake -a -n 10000000\n\n")),(0,i.kt)("h3",{id:"unstake"},"unstake"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake \n")),(0,i.kt)("p",null,"###claim reward "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim -n 1000\n")),(0,i.kt)("h3",{id:"send-transfer"},"send transfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'fns transfer -n 100000 -t "fra***********************"\n')),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"The image now located in AWS North America so the downloading speed in China will be a little bit slow and sometimes it will have intermittent handshake issues. If the script fails during image download, please run the script again."),(0,i.kt)("h3",{id:"update"},"Update"),(0,i.kt)("p",null,"We will be updating this repo frequently, so please run git pull before you run the code."),(0,i.kt)("p",null,"We will send a notification when the new version release."))}u.isMDXComponent=!0}}]);