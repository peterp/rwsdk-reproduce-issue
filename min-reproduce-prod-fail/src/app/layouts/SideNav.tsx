"use client";

interface SideNavProps {
  user: any;
  isOpen: boolean;
  closeSidebar: () => void;
}

export const SideNav = ({ user, isOpen, closeSidebar }: SideNavProps) => {
  return (
    <div
      className={`
      fixed top-0 left-0 h-screen z-30 
      bg-gray-800/90 text-white backdrop-filter backdrop-blur-sm
      transition-all duration-300 ease-in-out
      w-82 shadow-lg
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold">Navigation</h2>

        {/* Close button */}
        <button className="text-white" onClick={closeSidebar}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* User info section */}
      {user && (
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold mb-2">User Profile</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-300">Email:</p>
            <p className="text-sm break-all bg-gray-700/80 p-2 rounded">
              {user.email}
            </p>
            {user.name && (
              <>
                <p className="text-sm text-gray-300">Name:</p>
                <p className="text-sm bg-gray-700/80 p-2 rounded">
                  {user.name}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/submissions"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Form Submissions
            </a>
          </li>
          <li>
            <a
              href="/jwt-debug"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              JWT Debug
            </a>
          </li>
          <li>
            <a
              href="/debug"
              className="block py-2 px-4 rounded hover:bg-gray-700"
            >
              Debug
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
