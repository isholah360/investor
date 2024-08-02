import mongoose from "mongoose"

const riskperDb = async () => {
    try {
        const konect = await mongoose.connect("mongodb+srv://babalolah360:4ulKnzOtrfcl4es0@risk.pfyrgkn.mongodb.net/risk?retryWrites=true&w=majority&appName=risk")
        console.log(`risk app Server is connecetd to ${konect.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default riskperDb;