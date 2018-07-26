let preloading = document.getElementsByClassName(`preloading`)[0]
    , header = document.getElementsByTagName(`header`)[0]
    , menuItemLi = document.querySelectorAll(`header .listForResume>li`)
    , menuItemA = document.querySelectorAll(`header .listForResume>li>a`)
    , itemType = document.getElementsByClassName(`itemType`)[0].children
    , itemBar = document.getElementsByClassName(`itemBar`)[0]
    , sectionDataSlider = document.querySelectorAll(`[data-slider]`)
    for(let i = 0;i<sectionDataSlider.length;i++){
        sectionDataSlider[i].classList.add(`preActive`)
    }
window.onload = () => {
    preloading.classList.add(`hid`)
    window.onscroll = () => {
        let scrollY = window.scrollY
        if (scrollY) {
            header.classList.add(`sticky`)
        } else {
            header.classList.remove(`sticky`)
        }
        let minSlider = 0
        for (let i = 0; i < sectionDataSlider.length; i++) {
            minSlider = Math.abs(sectionDataSlider[i].offsetTop - window.scrollY) < Math.abs(sectionDataSlider[minSlider].offsetTop - window.scrollY) ? i : minSlider
            document.querySelector(`[href = "#${sectionDataSlider[i].id}"]`).classList.remove(`extend`)
        }
        document.querySelector(`[href = "#${sectionDataSlider[minSlider].id}"]`).classList.add(`extend`)
        sectionDataSlider[minSlider].classList.remove(`preActive`)
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
            let top = document.querySelector(`${n.currentTarget.getAttribute(`href`)}`).offsetTop
                , scrollYForNow = window.scrollY
            function animate(time) {
                requestAnimationFrame(animate)
                TWEEN.update(time)
            }
            requestAnimationFrame(animate)
            let coords = { y: scrollYForNow }
                , Slidertime = Math.abs(top - 100 - scrollYForNow) / 100 * 250//100px/250ms
            Slidertime = Slidertime > 500 ? 500 : Slidertime
            let tween = new TWEEN.Tween(coords)
                .to({ y: top - 100 }, Slidertime)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
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
