const a = document.querySelector('a')
// const a = document.getElementsByTagName('a')
// console.log(a);
a.setAttribute('href', 'https://www.google.co.th')
a.setAttribute('tarket', '_blank')

const crru = document.getElementById('crru')
console.log(crru)
crru.innerHTML = '<br> Go To CRRU'
a.setAttribute('href', 'https://www.crru.co.th')
a.setAttribute('tarket', '_blank')


const result = {first_name: "Bas",last_name: "Worrawut"}
const fullName = `${result.first_name} ${result.last_name}`

const p = document.querySelector('p')
p.innerHTML = fullName
// console.log(p)
