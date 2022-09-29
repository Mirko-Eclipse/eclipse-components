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
