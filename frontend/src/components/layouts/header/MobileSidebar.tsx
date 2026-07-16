import { NavLink } from "react-router-dom";
import {
  PhoneOutgoingIcon,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  X,
  BehanceLogoIcon,
  DribbbleLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";

interface MenuItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menus: MenuItem[];
}

export const MobileSidebar = ({
  menuOpen,
  setMenuOpen,
  menus,
}: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-all duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[330px] max-w-[90%] bg-[#161616] shadow-2xl transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/3 px-5 py-5">
          <img
            src="https://ahaanmedia.com/ahaanwebsite/layouts/asc.webp"
            alt="logo"
            className="h-12"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-[#CE8827] transition"
          >
            <X size={30} weight="bold" />
          </button>
        </div>

        {/* Content */}

        <div className="h-[calc(100vh-82px)] overflow-y-auto">

          {/* Menu */}

          <ul>
            {menus.map((menu) => (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-white/2 px-6 py-3 text-[15px] transition-all uppercase duration-300 ${
                      isActive
                        ? "bg-[#f6b338] text-black"
                        : "text-white hover:bg-[#222]"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact */}

          <div className="space-y-5 px-6 py-6">

            <a
              href="tel:+16465759575"
              className="flex items-center gap-3 text-sm text-white hover:text-[#CE8827]"
            >
              <PhoneOutgoingIcon size={20} />
              <span>+1-646-575-9575</span>
            </a>

            <a
              href="mailto:support@ahaansoftware.com"
              className="flex items-center gap-3 text-sm text-white hover:text-[#CE8827]"
            >
              <EnvelopeSimple size={20} />
              <span>support@ahaansoftware.com</span>
            </a>


            <div className="flex gap-6 pt-3">

              <a href="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <FacebookLogo size={24} weight="fill" />
              </a>

              <a href="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <InstagramLogo size={24} weight="fill" />
              </a>

              <a href="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <LinkedinLogo size={24} weight="fill" />
              </a>

              <a href ="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <BehanceLogoIcon size={24} weight="fill" />
              </a>

                <a href ="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <DribbbleLogoIcon size={24} weight="fill" />
              </a>

                <a href ="#" className="text-[#f6b338] hover:text-[#f6b338] transition">
                <GithubLogoIcon size={24} weight="fill" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};