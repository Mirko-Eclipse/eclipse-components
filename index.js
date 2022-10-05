const h1 = document.querySelector("h1");
h1 &&
  h1.insertAdjacentHTML(
    "afterend",
    `<button class="eclipse-btn-cunard eclipse-btn-primary-cunard">
Click me
</button>`
  );
h1 &&
  h1.insertAdjacentHTML(
    "afterend",
    ` <ul class="eclipse-ul-cunard eclipse-ul-undefined-cunard">
    <li class="eclipse-li-cunard eclipse-li-primary-cunard">first item</li>
    <li class="eclipse-li-cunard eclipse-li-primary-cunard">second item</li>
</ul>`
  );
h1 &&
  h1.insertAdjacentHTML(
    "afterend",
    `<a href="./other-page.html">Go to other page</a>`
  );

h1 &&
  h1.insertAdjacentHTML(
    "afterend",
    `<div class="eclipse-carousel" style="height: 300px; width: 500px;"><button class="eclipse-carousel__arrow eclipse-carousel__arrow__left" style="top: 130px; left: 1rem;"><svg style="height: 20px; width: 20px;"><path fill="#ffffff" d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
    c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
    z"></path></svg></button><li class="eclipse-carousel__container" style="height: 300px; width: 500px;"><picture class="eclipse-carousel__picture" style="height: 300px; width: 500px;"><source srcset="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2003-beautiful-landscapes-around-the-world.jpg"><img loading="lazy" style="height: 300px; width: 500px;"></picture><picture class="eclipse-carousel__picture" style="height: 300px; width: 500px;"><source srcset="http://cdn.cnn.com/cnnnext/dam/assets/190517091026-07-unusual-landscapes-travel.jpg"><img loading="lazy" style="height: 300px; width: 500px;"></picture><picture class="eclipse-carousel__picture" style="height: 300px; width: 500px;"><source srcset="https://media.macphun.com/img/uploads/customer/blog/504/15360610675b8e6e8b52bd36.49629027.jpg?q=85&amp;w=1680"><img loading="lazy" style="height: 300px; width: 500px;"></picture></li><button class="eclipse-carousel__arrow eclipse-carousel__arrow__right" style="top: 130px; right: 1rem;"><svg style="height: 20px; width: 20px;"><path transform="scale(-1 1) translate(-20 0)" fill="#ffffff" d="M13.891,17.418c0.268,0.272,0.268,0.709,0,0.979s-0.701,0.271-0.969,0l-7.83-7.908
    c-0.268-0.27-0.268-0.707,0-0.979l7.83-7.908c0.268-0.27,0.701-0.27,0.969,0c0.268,0.271,0.268,0.709,0,0.979L6.75,10L13.891,17.418
    z"></path></svg></button></div>`
  );
