export function ObserverFunctionallity (Ref,delay) {
    const observer = new IntersectionObserver((elementosDelObserver)=>{
        // Agarro el primer elemento
        const elementosQueNecesito = elementosDelObserver[0]
        if(elementosQueNecesito.isIntersecting == true){
            delay ? Ref.current.style.animationDuration = delay : delay = undefined; 
            
            Ref.current.style.animationPlayState = "running"
        }
    })
    observer.observe(Ref.current)
}