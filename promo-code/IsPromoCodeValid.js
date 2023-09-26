// File: IsPromoCodeValid.js
// This file contains the code for checking if the promo code is valid.

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function isPromoCodeValid(code) {
  const promoCode = await prisma.promoCode.findUnique({
    where: {
      code: code,
    },
  });

  if (promoCode && promoCode.expirationDate >= new Date()) {
    return true;
  } else {
    return false;
  }
}

export default isPromoCodeValid;

