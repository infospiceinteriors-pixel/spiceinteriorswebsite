# Automatic Journal System

This system automatically loads journal entries from markdown files in this folder. No code editing required!

## How It Works

1. **Automatic Detection**: The system reads `index.json` to discover available journal entries
2. **Dynamic Loading**: Markdown files are fetched and rendered on demand
3. **Image Grid Display**: Each journal card shows a beautiful grid of 3 images
4. **No Code Changes**: Just add files and update the index - that's it!

## Adding New Journal Entries

### Step 1: Create Your Markdown File
Create a new `.md` file in this folder with your content:

```markdown
# Your Journal Title

Write your content here using standard markdown syntax.

## Subheadings

Use standard markdown formatting:
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- Lists for key points

## Images

Add images using standard markdown syntax:
![Alt text](/path/to/image.jpg)

Images are automatically styled and responsive.

## Call-to-Action Links

Create buttons using standard link syntax:
[Button Text](/destination-page)

Links automatically become styled buttons.
```

### Step 2: Update index.json
Add your entry to the `index.json` file with image grid:

```json
[
  {
    "filename": "your-new-article.md",
    "title": "Your Article Title",
    "date": "2024-01-20",
    "excerpt": "A brief description of your article that appears on the journal overview page...",
    "slug": "your-article-slug",
    "images": ["/image1.jpg", "/image2.jpg", "/image3.jpg"]
  }
]
```

### Step 3: That's It!
Your new journal entry will automatically appear with a beautiful image grid. No code changes needed!

## Image Grid Feature
- **3 Images**: Each journal card displays exactly 3 images in a grid
- **Hover Effects**: Images scale slightly on hover for interactivity
- **Responsive**: Grid adapts beautifully to all screen sizes
- **Auto-cropping**: Images are automatically cropped to fit the grid perfectly

## File Naming Convention
- Use lowercase with hyphens: `design-inspiration-copenhagen.md`
- Keep filenames descriptive but concise
- Match the filename exactly in `index.json`

## Image Guidelines
- **Storage**: Store images in the `/public` folder
- **Paths**: Reference with absolute paths: `/image-name.jpg`
- **Grid Images**: Choose 3 compelling images that represent your article
- **Quality**: Use high-quality images for best visual impact

## Tips
- **Date format**: Use YYYY-MM-DD format for consistent sorting
- **Excerpts**: Keep them under 200 characters for best display
- **Slugs**: Use lowercase with hyphens, matching your filename (without .md)
- **Image Selection**: Choose diverse, visually appealing images that tell your story

## Example Structure

```
public/journal/
├── index.json
├── copenhagen-design-inspiration.md
├── sustainable-design-trends-2024.md
└── your-new-article.md
```

The system handles everything else automatically - markdown processing, styling, navigation, responsive display, and beautiful image grids! 