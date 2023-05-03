import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector(".feedback-form")
}

initForm()
refs.form.addEventListener("submit", (e) => {
 localStorage.removeItem("feedback-form-state")
})


refs.form.addEventListener("input", onInputForm)

function onInputForm(e)  {
    e.preventDefault()

let parsedFilters = localStorage.getItem("feedback-form-state")

parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {}

parsedFilters[e.target.name] = e.target.value


if (parsedFilters) {
    localStorage.setItem("feedback-form-state", JSON.stringify(parsedFilters))
}
console.log(parsedFilters)
}


function initForm(  ) {
    let parsedFilters = localStorage.getItem("feedback-form-state")
  if (!parsedFilters) return
    if (parsedFilters) {
        parsedFilters = JSON.parse(parsedFilters)
}
    Object.entries(parsedFilters).forEach(([name, value]) => {
        refs.form.elements[name].value = value
    })
}