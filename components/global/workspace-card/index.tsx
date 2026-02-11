'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { Edit } from "lucide-react";
import Link from "next/link";

type WorkspaceCardProps = {
  name: string;
  description: string;
  createdAt: Date | string;
};

export function WorkspaceCard({
  name,
  description,
  createdAt,
}: WorkspaceCardProps) {
  const formattedDate = new Date(createdAt)
    .toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace("AM", "am")
    .replace("PM", "pm");
    const {data: session} = authClient.useSession()

  return (
    <Card className="w-full max-w-xl rounded-xl shadow-sm hover:shadow-md transition">
      <CardHeader>
        <div className="flex items-center gap-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-500 text-white font-semibold">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <CardTitle className="text-xl mb-2">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>

        <CardAction>
          <Link href={`/workspace/${session?.session.activeOrganizationId}/edit`}>
            <Button variant="ghost" size="icon-sm">
              <Edit />
            </Button>
          </Link>
        </CardAction>
      </CardHeader>

      <CardFooter>
        <CardDescription>Created at {formattedDate}</CardDescription>
      </CardFooter>
    </Card>
  );
}
