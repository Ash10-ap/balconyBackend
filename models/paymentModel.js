import mongoose from "mongoose";

const paymentDetailsSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    receiptId: {
        type: String
    },
    paymentId: {
        type: String,
    },
    signature: {
        type: String,
    },
    amount: {
        type: Number
    },
    currency: {
        type: String
    },
    createdAt: {
        type: Date
    },
    status: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model('PaymentDetail', paymentDetailsSchema)
    // import mongoose from "mongoose";

// const paymentSchema = new mongoose.Schema({
//     razorpay_order_id: {
//         type: String,
//         required: true,
//     },
//     razorpay_payment_id: {
//         type: String,
//         required: true,
//     },
//     razorpay_signature: {
//         type: String,
//         required: true,
//     },
// });

// const Payment = mongoose.model("Payment", paymentSchema);
// export default Payment