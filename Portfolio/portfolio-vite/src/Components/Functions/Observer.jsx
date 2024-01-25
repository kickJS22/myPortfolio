export function ObserverFunctionallity(Ref) {
    const observer = new IntersectionObserver((elementosDelObserver) => {
        // Agarro el primer elemento
        const elementosQueNecesito = elementosDelObserver[0]

        if (elementosQueNecesito.isIntersecting == true) {
            Ref.current.style.animationPlayState = "running"
        }
    })
    observer.observe(Ref.current)
}