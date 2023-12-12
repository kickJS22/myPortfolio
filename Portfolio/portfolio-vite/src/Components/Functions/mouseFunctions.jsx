export function mouseOn(arr){
    arr.forEach((e) => {
        e.current.style.animationName ="changeBack";
        e.current.style.animationDirection ="normal"
        e.current.style.animationPlayState = "running";
    })

}
export function mouseOut(arr){
    arr.forEach((e) => {
        e.current.style.animationName ="changeBackSecond";
        e.current.style.animationDirection ="normal"
        e.current.style.animationPlayState = "running";
    })
}