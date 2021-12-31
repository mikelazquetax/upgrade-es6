window.onload = () =>{


arrowFunc = (a,b) =>{
    if(a == undefined && b == undefined){
        var a = 10
        var b = 5
    }else if( a != undefined && b == undefined){
        b = 0
    }else if (b != undefined && a == undefined){
        a = 0
    }

    console.log(a + b)
}

arrowFunc()
arrowFunc(13)
arrowFunc(undefined,13)
arrowFunc(13,4)

}