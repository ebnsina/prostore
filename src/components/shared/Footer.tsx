export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-4 bg-slate-200 rounded-t-3xl text-slate-600 py-20">
        <p className="text-center">
          &copy; All right reserved. {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
