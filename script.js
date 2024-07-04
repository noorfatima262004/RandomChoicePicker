let area = document.getElementById("textarea")
let tags = document.getElementById("tags")

area.focus()

area.addEventListener("keyup",(e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 100);

        randomSelect()
    }
}
)

function createTags(input){
    const texts = input.split(',').filter(tag => tag.trim() !== '').map(tag=>tag.trim())
    tags.innerHTML = ''
    texts.forEach(element => {
        let tagElement = document.createElement("span")
        tagElement.classList.add("tag")
        tagElement.innerText = element
        tags.appendChild(tagElement)
    });
}

function randomSelect(){
    const time = 20;
    let interval = setInterval(() => {
        let random = pickRandometag()
        highLight(random)
        setTimeout(() => {
            RemovehighLight(random)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
                let r= pickRandometag()
                highLight(r)
        }, 100);
    }, time*100);
}

function pickRandometag(){
    let allTag = document.querySelectorAll(".tag")
    return allTag[Math.floor(Math.random()*allTag.length)]
}

function highLight(tag){
    tag.classList.add("highlight")
}


function RemovehighLight(tag){
    tag.classList.remove("highlight")
}
