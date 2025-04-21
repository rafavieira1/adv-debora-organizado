import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lawblack-950 text-white">
      <div className="container-custom pt-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-7 w-7 text-lawgold-400" />
              <span className="text-2xl font-serif text-white">Debora B. Fracaro</span>
            </div>
            
            <p className="text-gray-400 mb-4">
              Escritório de advocacia comprometido com a excelência e resultados efetivos para 
              nossos clientes em diversas áreas do direito.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/adv.deborabertolini/" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.instagram.com/adv.deborabertolini?igsh=d2FzZGlzeGZmOGhi" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-lawgold-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-lawgold-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-lawgold-400 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-lawgold-400 transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#cases" className="text-gray-400 hover:text-lawgold-400 transition-colors">Casos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-lawgold-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-lawgold-400 transition-colors">Direito Criminal</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lawgold-400 transition-colors">Direito Civil</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lawgold-400 transition-colors">Direito de Família e Sucessões</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lawgold-400 transition-colors">Execução Penal</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-lawgold-400 transition-colors">Direito Previdenciário</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>+55 (45) 45 9970-0570</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>advdeborabertolini@hotmail.com</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-lawgold-400 shrink-0" />
                <span>Av. José Calegari, 820 - Centro<br />Medianeira - PR, 85720-025</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Debora B. Fracaro. Todos os direitos reservados.</p>
          
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-lawgold-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-lawgold-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
