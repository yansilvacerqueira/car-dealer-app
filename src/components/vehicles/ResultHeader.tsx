import { Calendar, Car, ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResultHeaderProps {
  year: string;
  makeName?: string;
}

export function ResultHeader({ year, makeName }: ResultHeaderProps) {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <div className="space-y-2">
          <CardTitle className="flex items-center gap-2 text-3xl font-bold">
            <Car className="size-7" />
            Available Models
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-base">
            <Calendar className="size-4" />
            <span>Model Year: {year}</span>
            {makeName && (
              <>
                <span className="text-gray-500">•</span>
                <span>{makeName}</span>
              </>
            )}
          </CardDescription>
        </div>

        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="size-4" />
            Back to Search
          </Button>
        </Link>
      </CardHeader>
    </Card>
  );
}
