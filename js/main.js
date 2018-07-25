let preloading = document.getElementsByClassName('preloading')[0]
    , header = document.getElementsByTagName(`header`)[0]
    , menuItemLi = document.querySelectorAll(`header .listForResume>li`)
    , menuItemA = document.querySelectorAll(`header .listForResume>li>a`)
    , itemType = document.getElementsByClassName('itemType')[0].children
    , itemBar = document.getElementsByClassName('itemBar')[0]
window.onload = () => {
    preloading.classList.add(`hid`)
    window.onscroll = () => {
        let scrollY = window.scrollY
        if (scrollY) {
            header.classList.add(`sticky`)
        } else {
            header.classList.remove(`sticky`)
        }
    }
    for (let i = 0; i < menuItemLi.length; i++) {
        menuItemLi[i].onmouseover = ((n) => {
            return () => {
                menuItemLi[n].classList.add(`extend`)
            }
        })(i)
        menuItemLi[i].onmouseleave = ((n) => {
            return () => {
                menuItemLi[n].classList.remove(`extend`)
            }
        })(i)
    }
    for (let i = 0; i < menuItemA.length; i++) {
        menuItemA[i].onclick = function (n) {
            n.preventDefault()
            let top = document.querySelector(`${n.currentTarget.getAttribute("href")}`).offsetTop
            window.scrollTo(0, top - 80)
        }
    }

    itemType[0].onclick = () => {
        itemBar.setAttribute(
            `style`,
            `width:90px;
             margin-left:0px;`
        )
    }
    itemType[1].onclick = () => {
        itemBar.setAttribute(
            `style`,
            `width:105px;
             margin-left:90px;`
        )
    }
    itemType[2].onclick = () => {
        itemBar.setAttribute(
            `style`,
            `width:105px;
             margin-left:200px;`
        )
    }
}
