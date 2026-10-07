async function loadWalletBalance(address) {
const response = await fetch("https://api.mainnet-beta.solana.com", {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({jsonrpc:"2.0",id:1,method:"getTokenAccountsByOwner",params:[address,{mint:SIROO_MINT},{encoding:"jsonParsed"}]})
});
const data = await response.json();
let balance = 0;
for (const account of data.result.value) {
balance += account.account.data.parsed.info.tokenAmount.uiAmount || 0;
}
document.getElementById("wallet-info").textContent += " · SIROO Balance: " + balance.toLocaleString() + " SIROO";
}
