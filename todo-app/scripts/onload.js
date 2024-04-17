async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function loadComponent(element, component) {
  element.innerHTML = await fetchHtmlAsText(
    "components/" + component + ".html"
  );
}


// run on page load
(function () {
  const componentsDir = "components/";
  const includes = document.querySelectorAll("[data-include]");

  Array.from(includes, (e) => {
    loadComponent(e, e.dataset.include);
  });
})();
