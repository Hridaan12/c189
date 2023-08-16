AFRAME.registerComponent("markerHandler", {
    init:async function(){
        this.el.addEventListener("markerfound", ()=>{
            console.log("markerfound")
            this.handlemarkerfound()
        })
        this.el.addEventListener("markerlost", ()=>{
            console.log("markerlost")
            this.handlemarkerlost()
        })
    },
    handlemarkerfound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", function(){
            swal({
                icon:"warning",
                title:"rateDish",
                text:"Work In progress"
            })
        })
        orderButton.addEventListener("click", function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks For order !",
                text:"Your Order Will Be Served Soon!"
            })
        })
    },
    handlemarkerlost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "non"
    }

    
})