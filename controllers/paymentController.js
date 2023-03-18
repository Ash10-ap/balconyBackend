import Razorpay from 'razorpay';
import { createHmac } from "crypto";
import PaymentDetail from "../models/paymentModel.js"

// import orders from "../models/orderModel"
export function orders(req, res) {

    let instance = new Razorpay({ key_id: 'rzp_test_EwWw1f8IhcjEE4', key_secret: '9kkbXDCdmTrTnFHz1Pd7Y80q' })

    var options = {
        amount: req.body.amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11",

    };
    instance.orders.create(options, async function(err, order) {
        if (err) {
            return res.send({ code: 500, message: "server error" })
        }
        const paymentDetail = new PaymentDetail({
            orderId: order.id,
            receiptId: order.receipt,
            amount: order.amount,
            currency: order.currency,
            createdAt: order.created_at,
            status: order.status
        })
        try {
            // Render Order Confirmation page if saved succesfully
            await paymentDetail.save()
                // res.render('pages/payment/checkout', {
                //     title: "Confirm Order",
                //     razorpayKeyId: razorpayKeyId,
                //     paymentDetail: paymentDetail
                // })
        } catch (err) {
            // Throw err if failed to save
            if (err) throw err;
        }
    })
    return res.send({ code: 200, message: "done", data: orders })
        // console.log(order);
        //     });
}
export function verify(req, res) {
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;


    var expectedSignature = createHmac('sha256', '9kkbXDCdmTrTnFHz1Pd7Y80q')
        .update(body.toString())
        .digest('hex');

    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature) {

        res.send({ code: 200, message: "done valid" })

    } else {
        res.send({ code: 500, message: "done not valid" })
    }




}


// import { instance } from "../server.js";
// import crypto from "crypto";
// import Payment from "../models/paymentModel.js";
// import Razorpay from 'razorpay';

// export const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_APT_SECRET,
// });

// export const checkout = async(req, res) => {
//     const options = {
//         amount: Number(req.body.amount * 100),
//         currency: "INR",
//     };
//     const order = await instance.orders.create(options);

//     res.status(200).json({
//         success: true,
//         order,
//     });
// };

// export const paymentVerification = async(req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;
//     console.log(body)
//     const expectedSignature = crypto
//         .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
//         .update(body.toString())
//         .digest("hex");

//     const isAuthentic = expectedSignature === razorpay_signature;

//     if (isAuthentic) {
//         // Database comes here

//         await Payment.create({
//             razorpay_order_id,
//             razorpay_payment_id,
//             razorpay_signature,
//         });
//         res.status(200).json({
//             success: true,
//         });
//         res.redirect(
//             `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//         );
//     } else {
//         res.status(400).json({
//             success: false,
//             message: error
//         });
//     }
// };