export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto text-center px-6">
        <p className="text-lg font-semibold mb-2">Ibrhams World</p>
        <p className="text-sm mb-4">
          Painting | Decorating | Paint Production
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} Ibrhams World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

