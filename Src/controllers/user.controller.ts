export const createUser = async(req: any, res: any) => {
    const { userName, fullName, email, password, phone_number, profile_url } = req.body;
    res.send({
        success: true,
        message: {
            userName, fullName, email, password, phone_number, profile_url
        }
    })
}

export const editProfile = async (req: any, res: any) => {
    const { userName, fullName, email, password, phone_number, profile_url } = req.body;
    res.send({
        success: true,
        message: {
            userName, fullName, email, password, phone_number, profile_url
        }
    })
}