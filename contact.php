<?php 

require __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;

const MAILER_DSN='smtp://b5c0702c0b5716:d09cf8dc38c3a0@smtp.mailtrap.io:2525?encryption=tls&auth_mode=login';

$transport = Transport::fromDsn(MAILER_DSN);
$mailer = new Mailer($transport); 

// si la case à cocher demande une copie
if (isset($_POST['receivecopy'])) {

  $email = (new Email())
      ->from(''.$_POST['senderemail'].'')
      ->to(''.$_POST['recipientemail'].'')
      ->cc(''.$_POST['senderemail'].'')
      ->subject('Mail avec un dessin')
      ->text(''.$_POST['message'].'')
      ->html(' <img src="'. $_POST['image'].'" alt="Dessin"> ');

} else {
  $email = (new Email())
  ->from(''.$_POST['senderemail'].'')
  ->to(''.$_POST['recipientemail'].'')
  ->subject('Mail avec un dessin')
  ->text(''.$_POST['message'].'')
  ->html(' <img src="'. $_POST['image'].'" alt="Dessin"> ');
}


//=================== pendant les tests en commentaire
$mailer->send($email);



/* récupérer les données du formulaire en utilisant 
    la valeur des attributs name comme clé 
  */
// $email = $_POST['email']; 
// $image = $_POST['image'];

var_dump($_POST);
// pour voir le contenu de $_POST
// inspecteur > onglet 'Réseau'
// sélectionner la ligne POST 
// tout à droite onglet 'Réponse'


// créer un fichier image sur le serveur





