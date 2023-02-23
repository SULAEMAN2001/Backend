import express from "express";
import {
    getVoucher,
    getVoucherById,
    createVoucher,
    updateVoucher,
    deleteVoucher
} from "../controllers/VoucherController.js"

const router = express.Router();

router.get('/voucher_parkir', getVoucher);
router.get('/voucher_parkir/:id', getVoucherById);
router.post('/voucher_parkir', createVoucher);
router.patch('/voucher_parkir/:id', updateVoucher);
router.delete('/voucher_parkir/:id', deleteVoucher);

export default router;