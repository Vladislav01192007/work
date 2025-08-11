function createWallet() {
  const wallet = ethers.Wallet.createRandom();
  localStorage.setItem('alt_wallet_address', wallet.address);
  localStorage.setItem('alt_wallet_privateKey', wallet.privateKey);
  document.getElementById('walletAddress').innerText = wallet.address;
  document.getElementById('walletInfo').style.display = 'block';
}

function copyAddress() {
  const address = document.getElementById('walletAddress').innerText;
  navigator.clipboard.writeText(address).then(() => {
    alert("Адресу скопійовано!");
  });
}

// Якщо гаманець вже є в localStorage — показати
window.addEventListener('load', () => {
  const savedAddress = localStorage.getItem('alt_wallet_address');
  if (savedAddress) {
    document.getElementById('walletAddress').innerText = savedAddress;
    document.getElementById('walletInfo').style.display = 'block';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });
});
