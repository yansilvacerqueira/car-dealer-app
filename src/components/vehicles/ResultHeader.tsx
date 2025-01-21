import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Calendar, Car, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface ResultHeaderProps {
  year: string;
  makeName?: string;
}

export function ResultHeader({ year, makeName }: ResultHeaderProps) {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold flex items-center gap-2">
            <Car className="h-7 w-7" />
            Available Models
          </CardTitle>
          <CardDescription className="text-base flex items-center gap-2">
            <Calendar className="h-4 w-4" />
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
            <ChevronLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </Link>
      </CardHeader>
    </Card>
  );
}
