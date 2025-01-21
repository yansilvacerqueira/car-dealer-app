# Vehicle Search Application

A Next.js application that allows users to search for vehicle models by manufacturer and year, built with nextjs, TypeScript, and Tailwind CSS.

## Features

- Search vehicles by manufacturer and model year
- Paginated results display with customizable items per page
- Responsive design with mobile-first approach
- Loading states and error handling
- Modern UI components using shadcn/ui
- Type-safe API integration

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with search form
│   └── result/[makeId]/[year]/
│       └── page.tsx       # Results page
├── components/
│   ├── ui/                # Reusable UI components
│   └── vehicles/
│       ├── FilterForm.tsx        # Vehicle search form
│       ├── FilterFormSkeleton.tsx # Loading state
│       ├── ResultHeader.tsx      # Results page header
│       ├── VehicleCard.tsx       # Individual vehicle display
│       └── VehicleList.tsx       # Paginated vehicle list
├── hooks/
│   └── useVehicles.ts     # Custom hook for fetching makes
├── lib/
│   └── api.ts             # API utilities
├── services/
│   └── vehicleService.ts  # Vehicle data services
└── types/
    └── index.ts           # TypeScript definitions
```

## Setup

1. Make sure the file `.env.local` is in the root:

```
NEXT_PUBLIC_API_BASE_URL=your_api_base_url
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## API Integration

The application integrates with a vehicle API that provides the following endpoints:

- `/vehicles/GetMakesForVehicleType/car` - Fetches all car manufacturers
- `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}` - Fetches models for a specific make and year

## Key Components

### FilterForm

- Provides manufacturer and year selection
- Validates form completion before enabling search
- Year range from 2015 to current year
- Uses shadcn/ui Select components

### VehicleList

- Displays vehicle models in a grid layout
- Implements pagination with configurable items per page
- Responsive grid system (1 column mobile, 2 columns tablet, 3 columns desktop)

### VehicleCard

- Displays individual vehicle information
- Shows make name, model name, and IDs
- Hover effects and consistent styling

## Error Handling

The application includes error handling:

- API errors with custom error class
- Loading states with skeleton components
- Form validation
- Type-safe API responses

## Styling

The application uses:

- Tailwind CSS for utility-first styling
- shadcn/ui for consistent component design
- Lucide icons for visual elements
- Responsive design principles throughout

## Type Definitions

Key interfaces include:

```typescript
interface Vehicle {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface Make {
  MakeId: number;
  MakeName: string;
  VehicleTypeName: string;
}

interface ApiResponse<T> {
  Count: number;
  Message: string;
  Results: T[];
}
```

## Next Steps

Potential improvements:

- Add search functionality within results
- Implement filtering options
- Add vehicle details page
- Include vehicle images
- Add analytics tracking
- Implement caching for API responses
- Add unit and integration tests
