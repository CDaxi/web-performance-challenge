const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****"
const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];
const COOKIE_LAYER = {
  title: 'Do you like cookies ?',
  text1: 'This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!',
  text2: 'The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.',
  buttonLabel: 'I solemny swear I will bake these cookies',
  disclaimer: 'This box is made using Vue.js and is super awesome !!! ............. or is it ???'
}

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');
  const marqueeBar = document.querySelector('.marquee > p');

  // mock content delay
  setTimeout(() => marqueeBar.innerHTML = CONTENT_BREAKING_NEWS, 3000);

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

function cookieLayerInit() {
  const showIt = !document.cookie.includes('cookiesAccepted=true');

  if (!showIt) {
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.id = 'cookieLayer';
  wrapper.innerHTML = `<div class="cookieLayer__content">
    <h2 class="cookieLayer__title">${COOKIE_LAYER.title}</h2>
    <p class="cookieLayer__text">${COOKIE_LAYER.text1}}</p>
    <p class="cookieLayer__text">${COOKIE_LAYER.text2}</p>
    <button class="cookieLayer__button">${COOKIE_LAYER.buttonLabel}</button>
    <div class="cookieLayer__disclaimer">${COOKIE_LAYER.disclaimer}</div>
  </div>`;
  wrapper.querySelector('.cookieLayer__button').addEventListener('click', acceptCookies)

  document.body.appendChild(wrapper);
  document.body.classList.add('no-scroll');
}

function acceptCookies() {
  const cookieLayerElement = document.getElementById('cookieLayer');
  const expiryDays = 30;
  const dayMs = 86400000;
  let expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + (expiryDays * dayMs));

  document.cookie = `cookiesAccepted=true; expires=${expireDate}; path=/`;
  if(cookieLayerElement) {
    cookieLayerElement.remove();
  }
  document.body.classList.remove('no-scroll');
}

function videoPlayerInit() {
  document.querySelectorAll('.videoPlayer').forEach(player => {
    player.addEventListener('click', () => {
      const replacementHtml = player.querySelector('template')?.innerHTML;
      player.innerHTML = replacementHtml || 'ERROR';
    });
  });
}

function initAd () {
  const adSpace = document.querySelector('.main__advertisingContainer');
  const gif = '<iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z"></iframe>';
  adSpace.innerHTML = gif;
}

const initApp = () => {
  dynamicContent();
  cookieLayerInit();
  setTimeout(videoPlayerInit, 100);
  setTimeout(initAd, 3000);
};

initApp();