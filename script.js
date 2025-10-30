const nameCard = document.getElementById('nameCard');
const apologyCard = document.getElementById('apologyCard');
const nicknameInput = document.getElementById('nickname');
const submitName = document.getElementById('submitName');
const apologyText = document.getElementById('apologyText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const heartsContainer = document.getElementById('hearts');
const popupTitle = document.getElementById('popupTitle');
const popupMsg = document.getElementById('popupMsg');

let noScale = 1.0;
let yesScale = 1.0;
let nickname = '';

submitName.addEventListener('click', () => {
  nickname = nicknameInput.value.trim();
  if (!nickname) {
	alert('Isi dulu nama panggilan kamu dong 😳');
	return;
  }

  nameCard.style.display = 'none';
  apologyCard.style.display = 'block';

  const apologyTitle = apologyCard.querySelector('h1');
  apologyTitle.textContent = `${nickname}, baca ya sayang 🥺💖`;

  apologyText.innerHTML = `Sayang, aku tahu akhir-akhir ini kamu lagi ngerasa capek banget, dan aku bisa ngerti rasanya ketika semuanya terasa berat.
			 Tapi aku pengen kamu inget, kamu itu kuat, meski kadang kamu sendiri nggak nyadar. Aku di sini bukan buat maksa kamu langsung bahagia, 
			 tapi buat ngingetin kalau kamu nggak sendirian. Nggak apa-apa kalau sekarang kamu cuma mau istirahat dulu, asal jangan nyerah, ya? 
			 Aku percaya kamu bisa pelan-pelan bangkit lagi, kayak biasanya. Aku selalu dukung kamu, dengan cara sederhana tapi tulus.<br>I love uuu 🤍`;
});

noBtn.addEventListener('click', () => {
  noScale -= 0.1;
  if (noScale < 0.3) noScale = 0.3;
  yesScale += 0.1;
  if (yesScale > 1.8) yesScale = 1.8;
  noBtn.style.transform = `scale(${noScale})`;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener('click', () => {
  popup.classList.add('active');
  popupTitle.textContent = `Makasih sayangku 💕`;
  popupMsg.textContent = `I hope you get all the love from this world! 🥺✨`;
  generateHearts();
  setTimeout(() => {
	popup.classList.remove('active');
	noScale = 1;
	yesScale = 1;
	noBtn.style.transform = `scale(1)`;
	yesBtn.style.transform = `scale(1)`;
  }, 5000);
});

function generateHearts() {
  for (let i = 0; i < 12; i++) {
	const heart = document.createElement('div');
	heart.className = 'heart';
	heart.style.left = `${Math.random() * 100 - 50}px`;
	heart.style.top = `${Math.random() * 40 - 20}px`;
	heart.style.animationDelay = `${Math.random() * 0.3}s`;
	heartsContainer.appendChild(heart);
	setTimeout(() => heart.remove(), 2000);
  }
}
