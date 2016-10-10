<?php

if($_POST['author'] === "CADMAN"){
	
	$mailmessage = file_get_contents('de.mail.contact.tpl');

	foreach( $_POST as $mail_key => $mail_value ) {
		$mailmessage = str_replace('%'.$mail_key.'%', $mail_value, $mailmessage);
	}

	$mailTo = $_POST['emailTo'];
	$mailBcc = $_POST['emailBcc'];
	$mailFrom = $_POST['emailFrom'];
	$subject = $_POST['subject'];
			
	//mail($mailTo, $subject, $message, "From: ".$mailFrom);
	mail($mailTo, $subject, $mailmessage, "From: ".$mailFrom);
	//mail($mailBcc, $subject, $mailmessage, "From: ".$mailFrom);

	die( json_encode( array( 'success' => true, 'message' => $mailmessage ) ) );#

} else {

	die( json_encode( array( 'error' => true, 'message' => 'no valid author' ) ) );
}

?>