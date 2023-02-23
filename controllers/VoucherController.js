import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getVoucher = async (req,res) => {
    try {
        const response = await prisma.voucher_parkir.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getVoucherById = async (req,res) => {
    try {
        const response = await prisma.voucher_parkir.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createVoucher = async (req,res) => {
    const {nama_pemilik, jenis_kendaraan, merk, plat, paket_parkir, tanggal_expired} = req.body;
    try {
        const voucher_parkir = await prisma.voucher_parkir.create({
            data:{
                nama_pemilik: nama_pemilik,
                jenis_kendaraan: jenis_kendaraan,
                merk: merk,
                plat: plat,
                paket_parkir: paket_parkir,
                tanggal_expired: tanggal_expired
            }
        });
        res.status(201).json(voucher_parkir);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updateVoucher = async (req,res) => {
    const {nama_pemilik, jenis_kendaraan, merk, plat, tanggal_expired} = req.body;
    try {
        const voucher_parkir = await prisma.voucher_parkir.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                nama_pemilik: nama_pemilik,
                jenis_kendaraan: jenis_kendaraan,
                merk: merk,
                plat: plat,
                tanggal_expired: tanggal_expired
            }
        });
        res.status(200).json(voucher_parkir);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteVoucher = async (req,res) => {
    try {
        const voucher_parkir = await prisma.voucher_parkir.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(voucher_parkir);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}