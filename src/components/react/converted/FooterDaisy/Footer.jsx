const CONTENT = [
  [
    { title: "Explore", url: "", isHeading: true },
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Contact", url: "/contact" },
  ],
  [
    { title: "Legal", url: "", isHeading: true },
    { title: "Terms of Use", url: "/privacy/#terms" },
    { title: "Privacy Policy", url: "/privacy" },
    { title: "Cookie Policy", url: "/cookies" },
  ],
];

export default function Footer() {
  return (
    <>
      <footer className="w-full pb-0 bg-black p-16 mt-8  bottom-0 left-0">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-3 gap-4">
            {/* ITERATING OBJ  */}
            {CONTENT.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {item[0].title}
                  </h3>
                  <ul className="space-y-2">
                    {item.map((item, index) => {
                      if (item.isHeading) return null;
                      return (
                        <li key={index}>
                          <a
                            data-astro-prefetch="viewport"
                            className="text-sm text-zinc-300 hover:text-zinc-100"
                            href="#"
                          >
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            {/* NEWSLETTER  */}
          </div>
        </div>
        <p className="text-center relative right-0 bottom-0 text-sm text-slate-400  pb-2 mt-2">
          Copyright ©{new Date().getFullYear()} Honest Power. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
