import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`antialiased flex flex-col justify-between h-screen`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
