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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Make } from "@/types";
import { Calendar, Car, CarFront } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FilterFormProps {
  makes: Make[];
  loading: boolean;
}

// Generate years from 2015 to current year
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
  (currentYear - i).toString()
);

export function FilterForm({ makes, loading }: FilterFormProps) {
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const isFormValid = selectedMake && selectedYear;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6" />
          Find Your Vehicle
        </CardTitle>

        <CardDescription>
          Select a manufacturer and year to view available models
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="make" className="flex items-center gap-2">
            <CarFront className="h-6 w-6" />
            Vehicle Make
          </Label>

          <Select
            value={selectedMake}
            onValueChange={setSelectedMake}
            disabled={loading}
          >
            <SelectTrigger id="make" className="w-full">
              <SelectValue placeholder="Select manufacturer" />
            </SelectTrigger>

            <SelectContent>
              {makes.map((make) => (
                <SelectItem key={make.MakeId} value={make.MakeId.toString()}>
                  {make.MakeName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="year" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Model Year
          </Label>

          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger id="year" className="w-full">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>

            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Link
          href={isFormValid ? `/result/${selectedMake}/${selectedYear}` : "#"}
          onClick={(e) => {
            if (!isFormValid) {
              e.preventDefault();
            }
          }}
        >
          <Button disabled={!isFormValid} className="w-32">
            View Models
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
