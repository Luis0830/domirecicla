function ResourceLinks() {
  const links = [
    { url: 'https://es.wikipedia.org/wiki/Reciclaje', title: 'Reciclaje' },
    { url: 'https://es.wikipedia.org/wiki/Econom%C3%ADa_del_reciclaje', title: 'Economía del reciclaje' },
    { url: 'https://es.wikipedia.org/wiki/An%C3%A1lisis_de_ciclo_de_vida', title: 'Análisis de ciclo de vida' },
    { url: 'https://es.wikipedia.org/wiki/Minimizaci%C3%B3n_de_residuos', title: 'Minimización de residuos' },
    { url: 'https://es.wikipedia.org/wiki/Reutilizaci%C3%B3n', title: 'Reutilización' },
    { url: 'https://es.wikipedia.org/wiki/Recogida_selectiva_de_basura', title: 'Recogida selectiva de basura' },
    { url: 'https://es.wikipedia.org/wiki/Sostenibilidad', title: 'Sostenibilidad' },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-4 font-bold text-green-dark">Recursos adicionales:</h2>
      <ul className="text-blue">
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceLinks;