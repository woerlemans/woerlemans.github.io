let score = 0;

function getSadInterval() {
  return Date.now() + 1000;
}

function getGoneInterval() {
  return Date.now() + Math.floor(Math.random() * 18000) + 2000;
}

function getHungryInterval() {
  return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getKingStatus() {
  return Math.random() > .9;
}

const moles = [
  {
    status: "sad",
    //next: Date.now() + 1000, // before funtion was made
    next: getSadInterval(),
    king: false,
    //node: document.querySelector('#hole-0')
    node: document.getElementById('hole-0')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-1')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-2')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-3')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-4')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-5')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-6')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-7')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-8')
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: false,
    node: document.querySelector('#hole-9')
  }
];

function getNextStatus(mole) {
  switch (mole.status) {
    case "sad":
    case "fed":
      mole.next = getSadInterval();
      mole.status = "leaving";
      if (mole.king) {
        mole.node.children[0].src = './images/king-mole-leaving.png';
      } else {
        mole.node.children[0].src = './images/mole-leaving.png';
      }
      break;
    case "leaving":
      mole.next = getGoneInterval();
      mole.status = 'gone';
      mole.node.children[0].classList.add("gone");
      break;
    case "gone":
      mole.status = "hungry";
      mole.king = getKingStatus();
      mole.next = getHungryInterval();
      mole.node.children[0].classList.add("hungry");
      mole.node.children[0].classList.remove("gone");
      if (mole.king) {
        mole.node.children[0].src = './images/king-mole-hungry.png';
      } else {
        mole.node.children[0].src = './images/mole-hungry.png';
      }
      break;
    case "hungry":
      mole.status = 'sad';
      mole.next = getSadInterval();
      mole.node.children[0].classList.remove("hungry");
      if (mole.king) {
        mole.node.children[0].src = './images/king-mole-sad.png';
      } else {
        mole.node.children[0].src = './images/mole-sad.png';
      }
      break;
  }
}

function feed(event) {
  if (event.target.tagName !== 'IMG' || !event.target.classList.contains("hungry")) {
    return;
  }
  const mole = moles[parseInt(event.target.dataset.index)]

  mole.status = 'fed';
  mole.next = getSadInterval();
  if (mole.king) {
    score += 2;
    mole.node.children[0].src = './images/king-mole-fed.png';
  } else {
    score++;
    mole.node.children[0].src = "./images/mole-fed.png";
  }
  mole.node.children[0].classList.remove('hungry');

  if (score >= 10) {
    win();
  }
  document.querySelector(".worm-container").style.width = `${10 * score}%`;
}

function win() {
  document.querySelector('.bg').classList.add("hide");
  document.querySelector('.win').classList.remove("hide");
}

let runAgainAt = Date.now() + 1000;
function nextFrame() {
  const now = Date.now();

  if (runAgainAt <= now) {
    for (let i = 0; i < moles.length; i++) {
      if (moles[i].next <= now) {
        getNextStatus(moles[i]);
      }
    }
    runAgainAt = now + 100;
  }
  requestAnimationFrame(nextFrame);
}

document.querySelector('.bg').addEventListener('click', feed);

nextFrame();