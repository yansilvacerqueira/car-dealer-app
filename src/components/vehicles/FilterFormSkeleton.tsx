import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function FilterFormSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />

        <div className="h-5 w-72 bg-gray-100 rounded animate-pulse" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />

          <div className="h-10 w-full bg-gray-100 rounded animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />

          <div className="h-10 w-full bg-gray-100 rounded animate-pulse" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
      </CardFooter>
    </Card>
  );
}
