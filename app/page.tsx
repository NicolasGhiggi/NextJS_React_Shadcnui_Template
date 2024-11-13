"use client"
import React, { useEffect, useState } from "react";
import { RocketIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex flex-col items-center justify-center gap-7">
                <Label className="flex items-center gap-2">
                    <RocketIcon className="h-6 w-6" /> 
                    Defult NextJS themplate with shadcn/ui.
                </Label>
                <Label className="flex items-center gap-2">
                    Change theme <ThemeToggle />
                </Label>
            </div>
        </>
    );
}
