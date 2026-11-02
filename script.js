const year = document.getElementById("year");

if (year) {
  year.textContent = new Intl.DateTimeFormat("en", { year: "numeric" }).format(new Date());
}
