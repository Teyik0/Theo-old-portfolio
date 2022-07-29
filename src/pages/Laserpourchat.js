function laserpourchat() {
  return (
    <div className="laserpourchat-content">
      <h1>Laser pour chat automatique sur deux axes - DUT GEII - 2020/2021</h1>
      <div className="laserpourchat-description">
        <div className="block img laserpourchat1"></div>
        <p className="block p1">
          Votre chat s'ennuie et vous n'avez pas assez de temps à lui consacrer
          pour jouer ? Le laser pour chat répond à cet problématique. Celui-ci
          permet de simuler une aire de jeux sur un demie-cercle et imite les
          mouvements d'un humain pointant un laser sur le sol. Ces mêmes lasers
          dont les chats raffolent.
          <iframe
            className="video-laserpourchat"
            title="Laser pour chat - Vidéo"
            src="https://www.youtube.com/embed/rzP0c3chPj8"
            frameborder="0"
            width="50%"
          ></iframe>
        </p>
        <div className="block img laserpourchat2"></div>
        <p className="block p2">
          Ce laser automatique a été fait en détournant un bras robot. En effet,
          j'ai enlevé la pince d'origine pour modéliser et imprimer en 3D une
          pièce permettant de fixer un module laser à la place. Le reste
          consistait en de la programmation pure et dure. Un système aléatoire
          pour les mouvements et la durée d'attente entre chaque mouvement. Il
          suffit alors de poser le bras robot sur une table en hauteur et le
          tout fonctionne.
        </p>
      </div>
    </div>
  );
}

export default laserpourchat;
