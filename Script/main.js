// Variavles for opening and closing the sidebar
const hambIcon = document.querySelector('.hamb_wrapper');
const sidebar = document.querySelector('.sidebar');
const xIcon = document.querySelector('.x_icon_wrapper');

// Event listener to open the sidebar
hambIcon.addEventListener('click', () => {
  sidebar.style.display = 'flex';
  hambIcon.style.display = 'none';
});

// Event listener to close the sidebar
xIcon.addEventListener('click', () => {
  sidebar.style.display = 'none';
  hambIcon.style.display = 'block';
});

// Declaring the container for the speakers' cards
const spkrGrid = document.querySelector('.speakers_grid');

// Array of objects containing the cards' data
const spkrCards = [{
  id: 0,
  img: 'Assets/speaker_01.png',
  text1: 'Yochai Benkler',
  text2: 'Berkman Professor of Enterpreneurial Legal Studies of Harvard Law School',
  text3: 'Benkler studies commons-based peer production, and published his seminal bookm The Wealth of Networks in 2006.',
},
{
  id: 1,
  img: 'Assets/speaker_02.png',
  text1: 'SohYeong Noh',
  text2: 'Director of Art Centre Nabi and a board member of CC Korea',
  text3: 'As he main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
},
{
  id: 2,
  img: 'Assets/speaker_03.png',
  text1: 'Lila Tretikov',
  text2: 'Secretary General of the Wikimedia Foundation',
  text3: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
},
{
  id: 3,
  img: 'Assets/speaker_04.png',
  text1: 'Kilnam Chon',
  text2: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
  text3: "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
},
{
  id: 4,
  img: 'Assets/speaker_05.png',
  text1: 'Julia Reda',
  text2: 'Head of the Young Pirates of Europe',
  text3: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU copyright law in July.',
},
{
  id: 5,
  img: 'Assets/speaker_06.png',
  text1: 'Ryan Merkley',
  text2: 'Creative Commons CEO, Former Mozilla Foundation COO',
  text3: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
},
];

// Function to generate Mobile Speakers' Cards
function mobileCards() {
  spkrCards.filter((card) => card.id < 2).forEach((card) => {
    const cardInfo = `
      <div class="speaker_card">
                      <div class="speaker_card_img">
                      <img src="${card.img}" alt="${card.text1}">
                      </div>
                  <div class="spkr_txt_cont">
                      <p class="speaker_text1">${card.text1}</p>
                      <p class="speaker_text2">${card.text2}</p>
                      <div id="speaker_lnbrk"></div>
                      <p class="speaker_text3">${card.text3}</p>
                </div>    
               </div>
               `;
    spkrGrid.innerHTML += cardInfo;
  });
}

// Function to show more speakers' cards
function showMore() {
  spkrCards.filter((card) => card.id >= 2).forEach((card) => {
    const cardInfo = `
      <div class="speaker_card">
                      <div class="speaker_card_img">
                      <img src="${card.img}" alt="${card.text1}">
                      </div>
                  <div class="spkr_txt_cont">
                      <p class="speaker_text1">${card.text1}</p>
                      <p class="speaker_text2">${card.text2}</p>
                      <div id="speaker_lnbrk"></div>
                      <p class="speaker_text3">${card.text3}</p>
                </div>    
               </div>
               `;
    spkrGrid.innerHTML += cardInfo;
  });
}

// Function to generate Desktop Speakers' Cards
function desktopCards() {
  spkrCards.forEach((card) => {
    const cardInfo = `
        <div class="speaker_card">
                        <div class="speaker_card_img">
                        <img src="${card.img}" alt="${card.text1}">
                        </div>
                    <div class="spkr_txt_cont">
                        <p class="speaker_text1">${card.text1}</p>
                        <p class="speaker_text2">${card.text2}</p>
                        <div id="speaker_lnbrk"></div>
                        <p class="speaker_text3">${card.text3}</p>
                  </div>    
                 </div>
                 `;
    spkrGrid.innerHTML += cardInfo;
    const moreBtn = document.getElementById('more_btn');
    moreBtn.style.display = 'none';
  });
}

// Main displaying function for Speakers' Cards
function displayCards() {
  const moreBtn = document.getElementById('more_btn');
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) {
    mobileCards();

    moreBtn.addEventListener('click', () => {
      showMore();
      moreBtn.style.display = 'none';
    });

    window.addEventListener('resize', () => {
      if (this.window.innerWidth > 767) {
        spkrGrid.innerHTML = '';
        desktopCards();
      }
    });
  } else {
    desktopCards();
  }
}

displayCards();