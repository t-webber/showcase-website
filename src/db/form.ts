"use server";

import { db } from "@/lib/db";

export const createForm = (values: { name: string; email: string; societe?: string; subject?: string; tel?: string; message: string }) =>
    new Promise((resolve, reject) => {
        const trimmed_tel = values.tel ? values.tel.replace(/\s/g, "") : undefined;
        const tel_nb = trimmed_tel ? parseInt(trimmed_tel.replace("+", "")) : undefined;

        const zDate = new Date();
        const year = zDate.getFullYear();
        const month = zDate.getMonth();
        const day = zDate.getDate();

        const localeTime = new Date().toLocaleTimeString().split(":");

        const hours = parseInt(localeTime[0]);
        const minutes = parseInt(localeTime[1]);
        const seconds = parseInt(localeTime[2]);
        const localeDate = new Date(year, month, day, hours, minutes, seconds);

        db.contactForm
            .create({
                data: { ...values, date: localeDate, tel: tel_nb }
            })
            .then(() => resolve(null))
            .catch(error => {
                console.error(error);
                reject(error);
            });
    });

export const makeDone = async (id: number, done: boolean) => {
    await db.contactForm.update({
        where: { id },
        data: { done }
    });
};
