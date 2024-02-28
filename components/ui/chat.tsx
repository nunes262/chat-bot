"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Avatar from "@mui/material/Avatar";
import { useChat } from "ai/react";

export interface ChatProps {}

export const Chat = ({ ...props }: ChatProps) => {
    const { messages, input, handleInputChange, handleSubmit, error } =
        useChat();
    console.log(messages.map((messages) => messages.role));
    return (
        <Card className="w-[450px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>
                    Use vercel SDK to create a chat bot
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {messages.map((messages) => (
                    <div
                        key={messages.id}
                        className="flex gap-3 text-slate-600 text-sm"
                    >
                        {messages.role === "user" && <Avatar>P</Avatar>}

                        {messages.role === "assistant" && <Avatar>P</Avatar>}
                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-700">
                                {messages.role === "user" ? "You" : "AI"}
                            </span>
                            {messages.content}
                        </p>
                    </div>
                ))}
                {error && (
                    <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
                        {error.stack}
                    </div>
                )}
                {/* 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 */}
            </CardContent>

            <CardFooter>
                <form className="w-full gap-2 flex" onSubmit={handleSubmit}>
                    <Input
                        placeholder="How can I help you?"
                        value={input}
                        onChange={handleInputChange}
                    />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    );
};
