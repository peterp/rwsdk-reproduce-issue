// Footer.tsx
"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Hello</p>
      </div>
    </footer>
  );
};
