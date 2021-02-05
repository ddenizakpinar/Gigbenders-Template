import "./src/styles/index.sass"
import "./src/styles/shared.sass"

export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 0)
}