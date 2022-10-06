<?php 

require __DIR__ . '/vendor/autoload.php';

use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport;

const MAILER_DSN='smtp://b5c0702c0b5716:d09cf8dc38c3a0@smtp.mailtrap.io:2525?encryption=tls&auth_mode=login';
$transport = Transport::fromDsn(MAILER_DSN);
$mailer = new Mailer($transport); 

// Traitement des erreurs du formulaire
// créer un tableau avec les erreurs 
// utiliser ce tableau avec un tableau en json (encode)
// envoi avec un echo

$errors= [];
$validForm = false;

// Si le formulaire est soumis...
if (!empty($_POST)) {

    // On récupère les données du formulaire
    $senderemail = $_POST['senderemail'];
    $recipientemail = $_POST['recipientemail'];


    if(empty($senderemail)) {
      $errors['senderemail'] = 'Email expéditeur vide';
    }

    if(empty($recipientemail)) {
      $errors['recipientemail'] = 'Email destinataire vide';
    }

    if(!filter_var($senderemail, FILTER_VALIDATE_EMAIL)){
      $errors['senderemail'] = 'Email expéditeur incorrect';  
    }
  
    if(!filter_var($recipientemail, FILTER_VALIDATE_EMAIL)){
      $errors['recipientemail'] = 'Email destinataire incorrect';  
    }

    if(empty($errors)) {
      $validForm = true;
      echo json_encode(['success'=>'ok']);
    } else {

        echo json_encode(['errors'=>$errors]);
        exit;
    }

}
// si pas d'erreur on envoie le mail
if ($validForm) {
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
    //$mailer->send($email);

}



// pour voir le contenu de $_POST
// inspecteur > onglet 'Réseau'
// sélectionner la ligne POST 
// tout à droite onglet 'Réponse'






