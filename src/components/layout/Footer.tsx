export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6 text-center mt-auto">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Zona Cero: Game Masters. All rights reserved.</p>
        <p className="text-sm mt-1">Eleva tu juego.</p>
      </div>
    </footer>
  );
}
