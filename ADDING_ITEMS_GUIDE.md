# Guide: Adding New Items to data.ts

This guide provides step-by-step instructions for adding new furniture and decor items from external websites to the `src/utils/data.ts` file.

## Guidelines for Adding New Items

### 1. **Item Placement**
- **New Arrivals** should be added at the **top of the allItems array** (after the `// New Items` comment)
- This ensures new arrivals appear first on the "All Items" page
- Regular items can be added in their respective category sections

### 2. **Item ID**
- Assign the next available ID number (check the last used ID)
- IDs should be unique strings (e.g., '19', '20', '21', etc.)

### 3. **Images**
- Create a folder structure: `/products/{category}/{item-number}/`
- Example: `/products/bars/1/1_1.jpg`, `/products/bars/1/1_2.jpg`
- Use sequential numbering for images: `1_1.jpg`, `1_2.jpg`, `1_3.jpg`, etc.
- Include at least 3-4 images in the array
- If images aren't ready, create placeholder paths that you'll fill later

### 4. **Pricing**
- **Always use the exact price from the source website**
- Format: `'€XXX'` or `'€X.XXX'` for thousands (use period as separator)
- Examples: `'€45'`, `'€4.450'`, `'€299'`

### 5. **Category Assignment**
- Match items to existing categories in the project:
  - `'Seating'` - Chairs, sofas, armchairs
  - `'Storage'` - Cabinets, dressers, shelving
  - `'Dining tables'` - Dining tables, kitchen tables
  - `'Bars'` - Bar units, bar carts
  - `'Decor'` - Decorative objects, accessories
  - `'Lamps'` - All lighting (use 'Lamps' not 'Lighting')
  - `'Tables'` - Side tables, coffee tables (if not dining)

### 6. **New Arrivals Flag**
- Set `isNew: true` for all new arrivals
- Set `featured: true` for featured/spotlight items (optional)
- These flags control where items appear on the homepage

### 7. **Required Fields**

```typescript
{
  id: 'string',              // Unique ID
  name: 'string',            // Item name from website
  images: ['array'],         // Array of image paths
  price: 'string',           // Price with € symbol
  category: 'string',        // One of the predefined categories
  isNew: boolean,            // true for new arrivals
  description: 'string',     // Detailed description
  creator: 'string',         // Designer/manufacturer
  dateOfManufacture: 'string', // Era or specific years
  origin: 'string',          // Country of origin
  period: 'string',          // Design period/style
  materials: 'string',       // Materials used
  condition: 'string',       // Condition notes
  measurements: 'string'     // Dimensions with units
}
```

### 8. **Description Writing**
- Start with an engaging opening describing the item's appeal
- Include key design features and characteristics
- Mention the design period/style
- Highlight unique selling points
- Keep it descriptive but professional
- Translate from source language if needed (e.g., Dutch to English)

### 9. **Condition Notes**
- Be honest and transparent about condition
- Include any flaws, missing parts, or repairs
- Mention "See photos for details" when applicable
- Use phrases like:
  - "Excellent vintage condition"
  - "Good vintage condition with minor wear"
  - "Very good condition with age-appropriate patina"
  - Specific issues: "Missing a section of the gold strip..."

### 10. **Measurements Format**
- Use format: `'L: XXcm x D: XXcm x H: XXcm'`
- Include additional measurements if relevant (e.g., "Bar height: 95cm")
- Use cm as the standard unit
- Use `|` pipe to separate different measurement types

## Example Entry

```typescript
{
  id: '19',
  name: 'Bar Guzzini Stilglass Italian 1970s',
  images: ['/products/bars/1/1_1.jpg', '/products/bars/1/1_2.jpg', '/products/bars/1/1_3.jpg', '/products/bars/1/1_4.jpg'],
  price: '€4.450',
  category: 'Bars',
  isNew: true,
  description: 'Stunning vintage bar set designed by Guzzini for Stilglass Donati, Italy 1970s. This set consists of a black and white lacquered bar...',
  creator: 'Guzzini for Stilglass Donati',
  dateOfManufacture: '1970s',
  origin: 'Italy',
  period: 'Mid-Century Modern / Space Age',
  materials: 'Black and white lacquered wood, glass doors, mirror top, silver and gold metal accents',
  condition: 'Good vintage condition with signs of use. Missing a section of the gold strip at the bottom of the back wall, where the wood is visible. See photos for details.',
  measurements: 'L: 130cm x D: 140cm x H: 202cm | Bar height: 95cm'
}
```

## Workflow Summary

1. **Get the source URL** from the user
2. **Extract information** from the website listing
3. **Create placeholder image paths** (user will add images later)
4. **Add entry at the top** of the allItems array for new arrivals
5. **Use exact pricing** from the source website
6. **Match category** to existing project categories
7. **Set `isNew: true`** for new arrivals
8. **Translate and enhance description** if needed
9. **Include all condition details** and measurements
10. **Save and verify** the file compiles without errors

## Image Folder Organization

```
public/products/
├── bars/
│   ├── 1/
│   │   ├── 1_1.jpg
│   │   ├── 1_2.jpg
│   │   └── 1_3.jpg
│   └── 2/
├── seating/
├── storage/
├── tables/
├── lamps/
└── objects/
```

## Notes

- Always add new arrivals at the **top** of the array
- Items marked with `isNew: true` appear in the "New Arrivals" carousel
- Items marked with `featured: true` can be highlighted on homepage
- Keep descriptions engaging but factual
- Include original designer/manufacturer when known
- Be specific about materials and construction
- Always note any damage or missing parts in condition field

---

**Last Updated:** October 2024

