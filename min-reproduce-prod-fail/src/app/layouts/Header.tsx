"use client";

interface HeaderProps {
  user: any;
  toggleSidebar: () => void;
}

export const Header = ({ user, toggleSidebar }: HeaderProps) => {
  return (
    <header className="bg-gray-800 text-white shadow-md w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Hamburger menu button - now visible on all screen sizes */}
          <button
            className="cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold">REDWOODSDK</h1>
        </div>
      </div>
    </header>
  );
};
