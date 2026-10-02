const SIROO_MINT = "6vJCgCG6ZKMTDohch5s2JoXKJMx93jGBHQ8phX6AYveX";
const SOLANA_RPC = "https://api.devnet.solana.com";
async function loadSIROO() {
const status = document.getElementById("live-status");
const response = await fetch(SOLANA_RPC,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"getTokenSupply",params:[SIROO_MINT]})});
const data = await response.json();
const supply = data.result.value.uiAmountString;
status.innerHTML = "🟢 LIVE DEVNET · SIROO Supply: " + Number(supply).toLocaleString() + " SIROO";
}
loadSIROO();
