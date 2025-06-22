import subscriptionModel from '../models/subscription.js'

export const createSubscription = async (req, res, next)=>{
    try {
        const subscription = await subscriptionModel.create({
            ...req.body,
            user: req.user._id,
        })
        res.status(201).json({success: true, data: subscription})
    } catch (error) {
        next(error);
    }
}

export const getUserSubscriptions =async (req, res, next) =>{

    try {
        if (req.user.id !== req.params.id) {
            const error =  new Error('you don\'t have the permission to view this account');
            error.status = 401;
            throw error;
        
        }   
        const subscriptions = await subscriptionModel.find({user: req.params.id}); 
        res.status(200).json({success: true, data: subscriptions});
    } catch (error) {
        next(error);
    }
}