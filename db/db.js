import mongoose from "mongoose"

const riskperDb = async () => {
    try {
        const konect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`risk app Server is connecetd to ${konect.connection.host}`)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default riskperDb;