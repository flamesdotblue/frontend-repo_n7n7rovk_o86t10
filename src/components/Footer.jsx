export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-slate-900 font-semibold">Base X</p>
          <p className="text-sm text-slate-600">Community Name Builder</p>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Base X. All rights reserved.</p>
      </div>
    </footer>
  );
}
