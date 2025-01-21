import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function FilterFormSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />

        <div className="h-5 w-72 animate-pulse rounded bg-gray-100" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />

          <div className="h-10 w-full animate-pulse rounded bg-gray-100" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />

          <div className="h-10 w-full animate-pulse rounded bg-gray-100" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-end">
        <div className="h-10 w-32 animate-pulse rounded bg-gray-200" />
      </CardFooter>
    </Card>
  );
}
