"use client";
import Image from "next/image";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;
export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full min-h-screen p-4">
            <div className="w-80 space-y-3 border-[1px] rounded-md border-gray-400 p-8 flex flex-col items-center justify-center">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="logo" width={1000} height={1000} className="h-14 w-fit object-cover" />
                <p className="text-md text-gray-500 font-semibold text-center">Sign up to see photos and videos from your friends.</p>
                <button className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-semibold w-full">Log in with Facebook</button>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full">
                    <div className="flex flex-col w-full gap-1">
                        <input type="email" placeholder="Email" {...register("email")} className="border-[1px] text-sm rounded-md p-2 w-full focus:outline-none" />
                        <p className="text-red-500 text-xs">{errors.email?.message}</p>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <input type="text" placeholder="Username" {...register("username")} className="border-[1px] text-sm rounded-md p-2 w-full focus:outline-none" />
                        <p className="text-red-500 text-xs">{errors.username?.message}</p>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <input type="password" placeholder="Password" {...register("password")} className="border-[1px] text-sm rounded-md p-2 w-full focus:outline-none" />
                        <p className="text-red-500 text-xs">{errors.password?.message}</p>
                    </div>
                    <p className="text-xs text-center text-gray-500">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p className="text-xs text-center text-gray-500">By signing up, you agree to our Terms , Data Policy and Cookies Policy.</p>
                    <button type="submit" className="bg-blue-500 mb-4 text-white rounded-md px-2 py-1 text-sm font-semibold w-full">Sign up</button>
                </form>
            </div>
            <div className="flex flex-col border-[1px] rounded-md border-gray-400 p-4 w-80 items-center justify-center gap-2">
                <p className="text-sm text-gray-500">Have an account? <Link href="/auth" className="text-blue-500 font-semibold">Log in</Link></p>
            </div>
        </div>
    );
}