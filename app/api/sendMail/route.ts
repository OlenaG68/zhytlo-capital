import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;
export async function POST(request: any) {
    console.log("1111");
    try {
        const { name, phone, mail, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: email,
                pass: pass,
            },
        });

        const mailOption = {
            from: email,
            to: email,
            name: name,
            phone: phone,
            mail: mail,
            message: message,
        };
        console.log(transporter);
        await transporter.sendMail(mailOption);

        return NextResponse.json(
            { message: "Email Sent Successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Failed to Send Email" },
            { status: 500 }
        );
    }
}
