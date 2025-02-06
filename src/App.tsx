import React from "react";
import { Code2, Laptop, Smartphone, Globe, Database, Lock, MessageSquare, ChevronDown } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Nelson Andres Jaramillo Diaz</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Teléfono Celular +57 3192429229</h2>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Soluciones Digitales</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Transformando ideas en experiencias digitales excepcionales
          </p>
          <a
            href="#servicios"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Nuestros Servicios
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Desarrollo Web",
                desc: "Sitios web modernos y responsivos con las últimas tecnologías",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Desarrollo Móvil",
                desc: "Aplicaciones nativas y multiplataforma para iOS y Android",
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Backend",
                desc: "APIs robustas y escalables para tus aplicaciones",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "SEO",
                desc: "Optimización para motores de búsqueda y visibilidad online",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Seguridad",
                desc: "Protección de datos y implementación de mejores prácticas",
              },
              {
                icon: <Laptop className="w-8 h-8" />,
                title: "Consultoría",
                desc: "Asesoramiento técnico y planificación de proyectos",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["React", "Node.js", "TypeScript", "Python", "React Native", "AWS", "Docker", "MongoDB"].map(
              (tech, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                  <p className="font-semibold">{tech}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para empezar?</h2>
          <p className="text-xl mb-8">Contáctanos para discutir tu próximo proyecto</p>
          <div className="flex justify-center items-center gap-4">
            <MessageSquare className="w-6 h-6" />
            <a href="andres.jaramillo@qcode.co" className="text-lg hover:underline">
              andres.jaramillo@qcode.co
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Servicios de Desarrollo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
