const getHeader = document.querySelectorAll(".accordion-header");
const getAccordion = document.querySelectorAll(".accordion");

getHeader.forEach((itemHeader) => {
  itemHeader.addEventListener("click", function () {
    itemHeader.classList.toggle("active");
    // const nextBody = itemHeader.nextElementSibling();
    // nextBody.classList.toggle("active");
  });
});
getAccordion.forEach((itemAccordion) => {
  itemAccordion.addEventListener("click", function () {
    itemAccordion.classList.toggle("active");
  });
});
