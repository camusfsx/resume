let itemType = document.getElementsByClassName('itemType')[0].children
,itemBar = document.getElementsByClassName('itemBar')[0]
itemType[0].onclick=()=>{
    itemBar.setAttribute(
        `style`,
        `width:90px;
         margin-left:0px;`
    )
}
itemType[1].onclick=()=>{
    itemBar.setAttribute(
        `style`,
        `width:105px;
         margin-left:90px;`
    )
}
itemType[2].onclick=()=>{
    itemBar.setAttribute(
        `style`,
        `width:105px;
         margin-left:200px;`
    )
}