import MetaMaskOnboarding from '@metamask/onboarding';
const onboarding = new MetaMaskOnboarding();

const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
}

const onClickInstallMetaMask = () => {
    onboarding.startOnboarding();
}

async function connectWallet() {
    return await ethereum.request({ method: 'eth_accounts' });
}

let connected = (accounts) => {
    statusText.innerHTML = 'Connected';
    statusDesc.innerHTML = accounts[0];
    statusDesc.classList.add('account');
}

const MetaMaskClientCheck = () => {
    if(!isMetaMaskInstalled())
    {
        statusText.innerText = 'You need to install a wallet';
        statusDesc.innerText = 'We recommend installing the MetaMask wallet';
        btn.innerText = 'Install MetaMask';
        btn.onclick = onClickInstallMetaMask;
    }
    else
    {
        connectWallet().then((accounts) => {
            if(accounts && accounts[0] > 0)
            {
                connected(accounts);
            }
            else
            {
                statusText.innerHTML = 'Connect your wallet';
                statusDesc.innerHTML = 'To begin, please connect your metamask wallet';
                btn.innerText = 'Connect MetaMask';
            }
        })
    }
}

btn.addEventListener('click', async () => {
    try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        connected(accounts);
    } catch (err) {
        console.error(err);
    }
})