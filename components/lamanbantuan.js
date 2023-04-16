const accordionHeaders = document.querySelectorAll(".accordion-item-header");

accordionHeaders.forEach((itemHeader) => {
  itemHeader.addEventListener("click", function () {
    itemHeader.classList.toggle("active");
    const test = itemHeader.nextElementSibling;
    test.classList.toggle("active");
  });
});
