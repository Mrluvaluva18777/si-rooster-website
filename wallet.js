const walletButton = document.getElementById("connect-wallet");
walletButton.addEventListener("click", async () => {
const provider = window.phantom?.solana;
if (!provider?.isPhantom) {
document.getElementById("wallet-info").textContent = "Phantom wallet not detected.";
return;
}
try {
const resp = await provider.connect();
const address = resp.publicKey.toString();
document.getElementById("wallet-info").textContent = "Connected: " + address;
loadWalletBalance(address);
} catch (err) {
document.getElementById("wallet-info").textContent = "Wallet connection cancelled or failed.";
}
});
