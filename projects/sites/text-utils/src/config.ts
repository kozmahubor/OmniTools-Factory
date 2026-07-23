/** Site-wide configuration */
export const SITE = {
  name: 'FixMyString',
  url: 'https://fixmystring.com',
  description: 'Free online text tools — word counter, case converter, text cleaner, and more. Fast, private, no sign-up required.',
};

/** All available tools */
export interface ToolMeta {
  name: string;
  slug: string;
  icon: string;
  description: string;
  category: string;
  keywords: string[];
}

export const TOOLS: ToolMeta[] = [
  {
    name: 'Word & Character Counter',
    slug: 'word-counter',
    icon: '🔢',
    description: 'Count words, characters, sentences, and paragraphs in your text instantly.',
    category: 'Analysis',
    keywords: ['word counter', 'character counter', 'letter count', 'text length'],
  },
  {
    name: 'Case Converter',
    slug: 'case-converter',
    icon: '🔠',
    description: 'Convert text between UPPERCASE, lowercase, Title Case, camelCase, and more.',
    category: 'Transform',
    keywords: ['case converter', 'uppercase', 'lowercase', 'title case', 'camelCase'],
  },
  {
    name: 'Text Reverser',
    slug: 'text-reverser',
    icon: '🔄',
    description: 'Reverse your text character by character or word by word.',
    category: 'Transform',
    keywords: ['reverse text', 'backwards text', 'mirror text'],
  },
  {
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum',
    icon: '📝',
    description: 'Generate placeholder text for your designs, mockups, and prototypes.',
    category: 'Generate',
    keywords: ['lorem ipsum', 'placeholder text', 'dummy text', 'filler text'],
  },
  {
    name: 'Duplicate Line Remover',
    slug: 'duplicate-remover',
    icon: '🧹',
    description: 'Remove duplicate lines from your text. Keep unique entries only.',
    category: 'Clean',
    keywords: ['remove duplicates', 'unique lines', 'deduplicate text'],
  },
  {
    name: 'Find & Replace',
    slug: 'find-replace',
    icon: '🔍',
    description: 'Find and replace text with support for regex and case sensitivity.',
    category: 'Transform',
    keywords: ['find and replace', 'search replace', 'text replace', 'regex replace'],
  },
  {
    name: 'Text to Slug',
    slug: 'text-to-slug',
    icon: '🔗',
    description: 'Convert text to URL-friendly slugs. Perfect for blog post URLs and file names.',
    category: 'Transform',
    keywords: ['slug generator', 'url slug', 'url encoder', 'permalink generator'],
  },
  {
    name: 'Sort Lines',
    slug: 'sort-lines',
    icon: '📊',
    description: 'Sort lines alphabetically, numerically, or by length. Count lines too.',
    category: 'Transform',
    keywords: ['sort text', 'sort lines', 'alphabetical sort', 'line counter'],
  },
  {
    name: 'Whitespace Cleaner',
    slug: 'whitespace-cleaner',
    icon: '✨',
    description: 'Remove extra spaces, tabs, and trailing whitespace from your text.',
    category: 'Clean',
    keywords: ['remove spaces', 'trim whitespace', 'clean text', 'remove tabs'],
  },
  {
    name: 'String Encoder/Decoder',
    slug: 'string-encoder',
    icon: '🔐',
    description: 'Encode and decode HTML entities, URL encoding, Base64, and Unicode escapes.',
    category: 'Encode',
    keywords: ['html encode', 'url encode', 'base64 encode', 'unicode escape'],
  },
];

export const TOOL_CATEGORIES = [...new Set(TOOLS.map((t) => t.category))];
