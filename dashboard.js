const SIROO_MINT = "H4s8zqp6bS5tQux9Y3DWS4V9wGuPwsnc1z61hkQxMSao";
const SOLANA_RPC = "https://api.mainnet-beta.solana.com";
async function loadSIROO() {
const status = document.getElementById("live-status");
const response = await fetch(SOLANA_RPC,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"getTokenSupply",params:[SIROO_MINT]})});
const data = await response.json();
const supply = data.result.value.uiAmountString;
status.innerHTML = "🟢 LIVE MAINNET · SIROO Supply: " + Number(supply).toLocaleString() + " SIROO";
}
loadSIROO();
