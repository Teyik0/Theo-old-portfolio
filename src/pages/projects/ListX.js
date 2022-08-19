function ListX() {
  return (
    <div className="listx-content">
      <h1>ListX - DUT GEII - 2021/2022</h1>
      <div className="listx-description">
        <p className="block p1">
          ListX est une application créée entièrement en C++ via le framework
          Qt. Cette application est une base de données utilisateurs. En effet,
          celle-ci, conçue initialement pour le bureau des élèves dont je
          faisais partie devait permettre de recenser la liste des adhérents.
          <br />
          <br /> Celle-ci, très complète permet l'ajout, la suppression,
          l'exportation et l'importation de membre. Bien que non visible sur la
          vidéo, une fonction de trie a été ajoutée, celle-ci permettant de
          trier par ordre alphabétique (A-Z ou Z-A), de trier par année, par
          groupe... <br />
          <br />
          L'application est entièrement fonctionnelle et a représenté à elle
          seule beaucoup de travail et de développement. C'est mon projet le
          plus difficile mais aussi celui qui est le plus abouti. <br />
          <br />
          ListX étant un projet amateur, celui-ci n'est pas disponible en
          téléchargement et n'est désormais plus en développement.
        </p>
        <iframe
          className="video-listx"
          title="ListX - Vidéo"
          src="https://www.youtube.com/embed/cHFLe5QYoQU"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ListX;
