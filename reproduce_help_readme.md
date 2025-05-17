npx degit redwoodjs/sdk/starters/standard min-reproduce-prod-fail

cd min-reproduce-prod-fail

npm install

npm run dev

\_\_

Update Worker.ts

Add Layouts

Update Home.tsx to use layout

>

npm run preview - FAIL to preview

npm run release (Home page fails to load component)

npm run preview (Home page fails to load component)

#While recreating this i learned that doing npm run preview does not use the latest files unless you do npm run release first

#Also if you try to do pnpm install and pnpm run dev - it does not work with the starter project
