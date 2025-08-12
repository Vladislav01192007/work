// small helper scripts for interaction
document.getElementById('year').textContent = new Date().getFullYear();

// Connect button (demo behavior)
const connectBtn = document.getElementById('connectBtn');
connectBtn.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      connectBtn.textContent = 'Гаманець підключено';
      connectBtn.disabled = true;
    } catch(e) {
      alert('Підключення скасовано');
    }
  } else {
    alert('Встанови MetaMask або інший Web3-гаманець');
  }
});

// Add token to wallet (works in MetaMask)
const addTokenBtn = document.getElementById('addTokenBtn');
addTokenBtn.addEventListener('click', async () => {
  const tokenAddress = '0x01f287740b49430A2eF92fad2058e31a38C1704C'; // замінити на реальну
  const tokenSymbol = 'ALTST';
  const tokenDecimals = 18;
  const tokenImage = window.location.origin + '/logo.jpg';

  if (!window.ethereum) {
    alert('Відкрий сайт у MetaMask (mobile) або встанови розширення.');
    return;
  }
  try {
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: { address: tokenAddress, symbol: tokenSymbol, decimals: tokenDecimals, image: tokenImage },
      },
    });
    if (wasAdded) alert('ALTST додано в гаманець!');
    else alert('Додавання токену скасовано.');
  } catch (err) {
    console.error(err);
    alert('Помилка при додаванні токена.');
  }
});

// Simple keyboard accessibility on animated card
const setiCard = document.getElementById('setiCard');
setiCard && setiCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('mintBtn').click();
});
