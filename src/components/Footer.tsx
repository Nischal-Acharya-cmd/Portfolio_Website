const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nischal Acharya. All rights reserved.
        </p>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
