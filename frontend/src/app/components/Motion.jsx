import * as motion from "motion/react-client"

const box = {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 5,
}


function Rotate() {
    return(
        <motion.div
        style={box}
        animate={{ rotate: 360 }}
        transition={{ duration: 3 }}
        />
    )
}




export default Rotate;

