// File: CreatePromoCode.js
// This file contains the code for creating a new promo code record.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createPromoCode() {
  const promoCode = await prisma.promoCode.create({
    code: "yookatale",
    discount: 10, //Adjust the discount value as needed.
    expirationDate: null,// Adjust the expiration date if necessary.
  });

  return promoCode;
}

export default createPromoCode;

