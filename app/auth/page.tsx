"use client";

import Image from "next/image";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

type FormData = yup.InferType<typeof schema>;

export default function Auth() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div className="flex h-screen max-w-[1440px] mx-auto justify-center items-center">
            <div className="flex flex-row h-[600px] w-[1000px]">
                <div className="hidden sm:flex flex-1 h-full w-full p-10">
                    <Image src="/instaAssets/download.png" alt="logo" width={1000} height={1000} className="h-fit w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col items-center sm:items-start justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-4 w-[80%] sm:border-[1px] border-gray-300 rounded-sm p-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="logo" width={1000} height={1000} className="h-14 w-fit" />
                            <div className="flex flex-col w-full gap-1">
                                <input type="email" placeholder="Email" className="w-full p-2 border-[1px] border-gray-300 bg-gray-100 focus:outline-none rounded-md text-sm" {...register("email")} />
                                <p className="text-red-500 text-xs">{errors.email?.message}</p>
                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <input type="password" placeholder="Password" className="w-full p-2 border-[1px] border-gray-300 bg-gray-100 focus:outline-none rounded-md text-sm" {...register("password")} />
                                <p className="text-red-500 text-xs">{errors.password?.message}</p>
                            </div>
                            <button className="w-full px-2 py-1 bg-blue-500 text-white rounded-md" type="submit">Login</button>
                        </form>
                        <div className="flex flex-row items-center justify-center gap-4 w-full">
                            <div className="w-[50%] h-[1px] bg-gray-300"></div>
                            <p className="text-gray-500 text-sm font-semibold">OR</p>
                            <div className="w-[50%] h-[1px] bg-gray-300"></div>
                        </div>
                        <button className="w-full px-2 py-1 bg-green-500 text-white rounded-md">Continue with Facebook</button>
                        <p className="text-sm text-gray-500">Forgotten your password?</p>
                    </div>
                        <p className="text-sm py-4 text-center px-6 border-[1px] border-gray-300 w-[80%] mt-2 text-gray-500">Don't have an account? <Link href="/auth/signup" className="text-blue-500">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}