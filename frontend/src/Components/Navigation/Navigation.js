import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-16 w-auto"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
