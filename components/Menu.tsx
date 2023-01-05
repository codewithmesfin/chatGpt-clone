import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  {
    title: "What is OpenAI?",
    href: "https://openai.com/",
  },
  {
    title: "Try ChatGPT",
    href: "https://chat.openai.com/chat",
  },
  {
    title: "OpenAI Research",
    href: "https://openai.com/research",
  },
];

export default function Menu(props:any) {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="absolute w-full">
                <h1 className="text-xl text-center font-extrabold">
                  Welcome <span className="text-blue-600">BizeChat</span>
                </h1>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-white  shadow z-50">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 text-blue-500 rounded-md text-base font-medium"
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>

            <div className="space-y-1 px-2">
              <Disclosure.Button
                className="block px-3 rounded-md text-base text-red-400 font-medium"
                onClick={() => {
                  localStorage.clear()
                  window.location.reload();
                }}
              >
               Clear Conversations
              </Disclosure.Button>
            </div>

            <div className="space-y-1 px-2 pt-2 pb-3 border-b">
              <Disclosure.Button
                className="block px-3 py-2 rounded-md text-base text-red-600 font-medium"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Log Out
              </Disclosure.Button>
            </div>

            <div className="space-y-1 px-2 pt-2 pb-3">
              {props.history.map((item:any) => (
                <Disclosure.Button
                  key={item.title}
                  className="block px-3 py-2 rounded-md font-medium"
                  onClick={() => props.onHistoryClick(item)}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>


          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
