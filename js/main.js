var itemType = document.getElementsByClassName('itemType')[0].children
var itemBar = document.getElementsByClassName('itemBar')[0]
itemType[0].onclick=function(){
    itemBar.style.width = '90px'
    itemBar.style.marginLeft = '-5px'
}
itemType[1].onclick=function(){
    itemBar.style.width = '105px'
    itemBar.style.marginLeft = '90px'
}
itemType[2].onclick=function(){
    itemBar.style.width = '105px'
    itemBar.style.marginLeft = '200px'
}