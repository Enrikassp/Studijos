import z from "zod";
export const ScooterCreateSchema = z.object({
  rideTariffPerKm: z
    .number({ message: "rideTariffPerKm was not a number" })
    .min(0, { message: "rideTariffPerKm should be a positive number" })
    .max(10, { message: "rideTariffPerKm should not be more then 10" }),
  leaseTariffPerMin: z
    .number({ message: "leaseTariffPerMin was not a number" })
    .min(0, { message: "leaseTariffPerMin should be a positive number" })
    .max(10, { message: "leaseTariffPerMin should not be more then 10" }),
  registrationCode: z
    .string({ message: "registrationCode should be a string" })
    .min(8, {
      message:
        "registrationCode string should not be shorter than 8 characters",
    })
    .max(8, {
      message: "registrationCode string should not be longer than 8 characters",
    }),
});

export const ScooterUpdateSchema = ScooterCreateSchema.extend({
  isBusy: z.boolean({ message: "isBusy is not a boolean!" }),
  lastUseTime: z
    .date({ message: "lastUseTime should be a date!" })
    .min(new Date(0), {
      message: "Date should not be earlier then 1970-01-01 00:00",
    })
    .max(new Date()),
  totalRide: z
    .number({ message: "totalRide should be a number" })
    .min(0, { message: "totalRide should not be less then 0" })
    .max(1000000, { message: "totalRide should not be larger then 1 000 000" }),
}).partial();
