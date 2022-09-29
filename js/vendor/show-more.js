const showMoreSoils = document.querySelector(".goods__show");
const showMoreFertil = document.querySelector(".goods__show2");
const soilsLength = document.querySelectorAll(".soils").length;
const fertilsLength = document.querySelectorAll(".fertil").length;
let items = 4;

showMoreSoils.addEventListener("click", () => {
  items += 4;
  const arraySoils = Array.from(document.querySelector(".content__list").children);
  const visibleSoils = arraySoils.slice(0, items);

  visibleSoils.forEach((el) => el.classList.add("is-visible"));

  if (visibleSoils.length === soilsLength) {
    showMoreSoils.classList.add("unshown");
  }
});

showMoreFertil.addEventListener("click", () => {
   items += 4;
   const arrayFertil = Array.from(document.querySelector(".content__list2").children);
   const visibleFertil = arrayFertil.slice(0, items);
 
   visibleFertil.forEach((el) => el.classList.add("is-visible"));
 
   if (visibleFertil.length === fertilsLength) {
    showMoreFertil.classList.add("unshown");
  }
 });