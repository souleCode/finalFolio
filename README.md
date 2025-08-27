This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Derniere partie

- Ajouter les skills de IA et Genie Industriel dans l'onglet _competences_
- Ajouter les certifications et les photo dans la parties _Formation_ "fait le 17/02/025"
- Completer les services avec 'digitalisation industriel' dans l'onglet Services "fait le 17/02/025"
- Ajouter mon Cv sous le btn Cv dans l'onglet _Accueil_
* - IMPLEMENTATION COMPLETE de Experience avec des details

## Configuration du fichier .eslintrc.js pour le deployement

{
"extends": "next/core-web-vitals",
"rules": {
"react/no-unescaped-entities": "off",
"@typescript-eslint/quotes": "off",
"quotes": [0],
"avoideEscape": 0,
"allowTemplateLiterals": 0,
"no-useless-escape": 0
}
}
